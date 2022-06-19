---
title: 'Show Hidden Files for Domain Admins'
date: '2016-08-22 12:59:31.000000'
published: true
image: ''
mainpage: false
---

A common practice is to allow administrators and perhaps even help desk staff the ability to see hidden files on the file system. Unlike standard users, these users probably have access to the Folder Options editor from Windows Explorer. It is also possible to automate these folder options using Group Policy or scripting. Begin by launching the Group Policy Management console by running `gpmc.msc` at a _Run..._ prompt or a command prompt. Next, right-click the organizational unit that contains your users. Select _Create a GPO in this domain, and Link it here_ and then give the new group policy object a name. Within the new GPO, navigate to `User Configuration\Preferences\Control Panel Settings\Folder Options`.

[sidebar-folderoptions.png]

Next, right-click on _Folder Options_ and choose _New_ > _Folder Options (At least Windows Vista)_. The window that opens is similar to the _Folder Options_ window found in Windows Explorer. From here, under _Hidden Files and Folders_, select _Show Hidden Files and Folders_. Optionally, you can also control the visibility of super-hidden objects using the _Hide Protected Operating System Files_ tickbox.

[folderoptions.png]

After configuring the users' folder options appropriately move to the _Common_ tab. If you want users to be able to permanently override the setting, select _Apply Once and Do Not Reapply_. If the box is left unticked, the setting will be applied at each logon and the user's configuration will be overwritten by Group Policy.

[apply-once.png]

Currently, this policy will apply to all users in the organizational unit that the GPO is linked to. Assuming this OU contains more than Domain Admins, this is unwanted behaviour as all users would be able to see hidden files. One way to control this is with Item-level Targeting. From the _Common_ tab, select and configure _Item-level Targeting_. Choose _New Item_ > _Security Group_ and then browse for the Domain Admins group in your domain.

[item-level-targeting.png]

Unfortunately, this method can lead to confusion in the future if an administrator is later wondering why some users can see hidden files and others cannot (_i.e.,_ they forgot to check Item-level Targeting). For this reason, the preferred method to apply Group Policy settings to a select security group is using Security Filtering. From the GPMC, click on the GPO in the sidebar with the folder options. At the top of the window, ensure you are viewing the Scope tab of the policy and then scroll down to Security Filtering. By default, the only group here is Authenticated Users. This means that all users and all computers can read the policy. Remove Authenticated Users, confirm the action in the dialogue box, and add Domain Admins.

[add.png]

If you now switch from the Scope tab to the Delegation tab and open the Advanced configuration from the bottom-right corner, you will notice that the only security principle given permission to apply the group policy are Domain Admins.

[sec-settings.png]

To accomplish this via scripting, add the following to your logon script.

#### PowerShell

```powershell
If ((Get-ADGroupMember -Identity "Domain Admins" -Recursive | Select -ExpandProperty Name) -contains $user) {
  New-Item 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced' -Force  `
      | New-ItemProperty -Name Hidden -Value 1 -Force | Out-Null
}
```

#### VBScript

```vb
Set WshShell = CreateObject("WScript.Shell")
myKey = "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced\Hidden"
WshShell.RegWrite myKey,1,"REG_DWORD"
```

#### KiXtart

```kix
if ingroup("Domain Admins")
  $ret = writevalue("HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced","Hidden","1","REG_DWORD")
endif
```

#### Batch

```batch
REG ADD "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" /v Hidden/t REG_DWORD /d 1
```

One could also create this script as its own file rather than adding it to an existing logon script and then use Group Policy Security Filtering to apply it at logon to the proper groups with Group Policy logon scripts. This would alleviate the need to check for group membership in the script itself. Though, as we have demonstrated, it is possible to accomplish deployment of default folder options through scripting, the best-practice is to use Group Policy for its ease of manageability and reporting.
