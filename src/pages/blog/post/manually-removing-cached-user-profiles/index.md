---
title: 'Manually Removing Cached User Profiles'
date: '2016-11-17 14:49:29.000000'
published: true
image: 'active-directory-user-profiles-1.jpg'
mainpage: false
---

In many scenarios where users commonly switch between computers &mdash; think schools, libraries, Internet cafés &mdash; there is a recurring problem of disk space being used up simply by user profiles that have been left behind and are no longer needed. In fact, the high school I attended had this problem so frequently that they used [Deep Freeze](https://www.faronics.com/products/deep-freeze/enterprise) to combat the problem. Assuming that the users of these computers all have roaming profiles (this does include a mandatory profile[^1]), there is a Group Policy setting which forces the computer not to cache roaming profiles. The caveat: it only applies to new logins, not those dozens of gigabytes of existing junk. What about the other Group Policy dedicated to removing user profiles, the one where you get to say "if it's older than $x$ days, fire it out!" Well, unfortunately there are some instances where this does not work and instead it corrupts the user profile in question, thus preventing any subsequent logons from this user.

We'll cover two ways to remove already-cached user profiles. To prevent caching of new profiles, use the Group Policy setting mentioned above.

## Method 1: PowerShell Remoting

On a computer with the ActiveDirectory PowerShell module installed, run the following script. Be sure to change any directory paths to match your network.

```powershell
$Users = Get-ADUser -Filter * -SearchBase 'OU=Domain Users,DC=hq,DC=jacobhouse,DC=ca' -Properties * `
    | Select-Object -Property SamAccountName,SID,ProfilePath | ?{($_.ProfilePath)} `
    | Sort-Object -Property SamAccountName
$Computers = Get-ADComputer -Filter * -SearchBase = 'OU=Domain Computers,DC=hq,DC=jacobhouse,DC=ca' `
    -Properties *| Select-Object -Property DNSHostName | Sort-Object -Property DNSHostName
$Computers | %{
    Invoke-Command -ComputerName $_.DNSHostName -ScriptBlock {
        $Users | %{
            Remove-Item -Path "$env:SYSTEMDRIVE\Users\$_.SamAccountName" -Force -Recurse
            Remove-Item -Path ("HKLM:\Software\Microsoft\Windows NT\CurrentVersion\ProfileList" + `
                "\$_.SID") -Force -Recurse
        }
    }
}
```

That's it! The script will get a list of all users that potentially have roaming profiles left behind, a list of all computers for which the code should be executed, and will then loop through each computer, checking for each user's profile. If it exists, it will be deleted.

## Method 2: Group Policy Startup Script

To begin, you will need a file share that all Domain Computers have full control on (or at the very least, read, write, create, append, etc... delete is unnecessary). If you have one, great! If not, I've provided a quick and easy PowerShell script below. Set the variables to values that are appropriate for your environment. Assume that the file server is named charlie.jacobhouse.ca.

```powershell
$FolderPath = 'D:\Share\Logs'
$FolderPermissions = @('HQ\Admin','HQ\Domain Administrators','HQ\Domain Computers')
New-SmbShare -name 'logs' -Description 'File share for domain log files'
    -FolderEnumerationMode AccessBased -CachingMode None -FullAccess $FolderPermissions
    -Path $FolderPath -EncryptData:$true
$OldACL = (Get-Item -Path $FolderPath).GetAccessControl()
$FolderACL = (Get-Item -Path $FolderPath).GetAccessControl()
$FolderACL.SetOwner([System.Security.Principal.NTAccount] 'HQ\winnie')
$FolderPermissions | %{
    $FolderACL.SetAccessRule([System.Security.AccessControl.FileSystemAccessRule](New-Object `
        -TypeName System.Security.AccessControl.FileSystemAccessRule `
        -ArgumentList ($_,'FullControl','Allow')))
    Set-Acl $FolderPath $FolderACL
}
$FolderACL.SetAccessRuleProtection($True, $True)
$OldACL.Access | %{$FolderACL.RemoveAccessRule($_)}
Set-Acl $FolderPath $FolderACL
```

Next, from any computer with the ActiveDirectory PowerShell module, get a list of all the users that have roaming profiles:

```powershell
Get-ADUser -Filter * -SearchBase 'OU=Domain Users,DC=hq,DC=jacobhouse,DC=ca' -Properties * `
    | Select-Object -Property SamAccountName,SID,ProfilePath | ?{($_.ProfilePath)} `
    | ConvertTo-Csv | Out-File -FilePath '\\hq.jacobhouse.ca\netlogon\Users.csv'
```

In Group Policy, create a PowerShell startup script. This can be with GP scripts or GP Task Scheduler if you want to specify an account context to run the script in. The script to run is below. Once again, change all the paths so that they are appropriate for your network.

```powershell
if (!(Test-Path -Path "\\charlie.jacobhouse.ca\logs\$env:COMPUTERNAME.txt")) {
    Import-Csv -Path '\\hq.jacobhouse.ca\netlogon\Users.csv' | %{
        Remove-Item -Path "$env:SYSTEMDRIVE\Users\$_.SamAccountName" -Force -Recurse
        Remove-Item "HKLM:\Software\Microsoft\Windows NT\CurrentVersion\ProfileList\$_.SID" -Recurse
    }
    New-Item -Path "\\charlie.jacobhouse.ca\logs\$env:COMPUTERNAME.txt"
}
```

[^1]: Mandatory profiles are roaming profiles which are not uploaded to the server at logoff. They _are_ retrieved from the server at each logon. This overwrites the user's profile with a standardized _mandatory_ profile for each session.
