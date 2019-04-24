---
path: 'using-the-office-2016-deployment-tool'
title: 'Using the Office 2016 Deployment Tool'
date: '2016-10-04 19:51:46.000000'
published: true
image: 'flattener-exe.png'
---

_This post has been migrated from the [old JWFH WordPress blog](https://github.com/jwfh/homepage#about)._

In this tutorial I will demonstrate how to use the Office Deployment Tool (ODT) to create an Office 2016 package that can be streamed to client computers using Microsoft's Application Virtualization. First, a word on Application Virtualization &mdash; more commonly known as App-V. App-V is Microsoft's solution to deploying and maintaining application packages for programs that need to be deployed to large numbers of computers in an enterprise or cannot be deployed using conventional methods. An example of this may be an application which does not ship with a MSI installer to push out with Group Policy. Unlike most applications, in which an administrator must install on the App-V sequencer to create the `.appv` package, Microsoft has provided us with an easy way to create and maintain App-V packages for Office without first installing from the MSI to capture the installation. This is where ODT comes into play. The Office Deployment Tool is available for [download](http://go.microsoft.com/fwlink/p/?LinkID=626065) from Microsoft's website. It is a small executable file which extracts two other files to a location of your choosing. I saved it in a subfolder of my software distribution share, `\\hq.jacobhouse.ca\software\office`. I suggest you do the same since the packages this tool will create need to be accessible by clients. Extract the tool by running the executable you downloaded and choosing a location for the files, for example `\\hq.jacobhouse.ca\software\office\ODT`. You will now need to map this shared folder to a drive letter so that you can open a command prompt there &mdash; `cmd.exe` does not support UNC paths. Going forward, my `N:\` drive will reference this path. To map the network path on your own computer, run the following command, replacing my share path with your own.

```batch
net use N: \\hq.jacobhouse.ca\software\office
```

Next, open the XML file that was extracted to `\\hq.jacobhouse.ca\software\office\ODT` in the text editor of your choice. Later in this tutorial you will need a proper text editor &mdash; Notepad.exe won't cut it &mdash; but for now you may use Notepad.

```batch
notepad.exe N:\ODT\configuration.xml
```

There are a couple of things that you will need to customize in this file based on your environment and Office licencing agreement. This line:

```xml
<Add OfficeClientEdition="32" Channel="Current">
```

Should specify a download location for the Office files. Change it to something like is shown below.

```xml
<Add OfficeClientEdition="32" Channel="Current" SourcePath="N:\ODT\Files">
```

Below this you will need to add a `<Product>` field for each Office suite you are deploying. The options are Office, Visio and Project. This is important because ODT will create a single package for all of your programs and you cannot publish more than one Office package (one containing Office and the other with Visio, for example) to a single computer. Below this, customize the display level and update preference. We will be manually updating the package so set updates to false. The finished file should look something like this:

```xml
<Configuration>
  <Add OfficeClientEdition="32" Channel="Current" TargetVersion="16.0.7341.2035" SourcePath="N:\ODT\Bits">
    <Product ID="ProPlusRetail">
      <Language ID="en-us" />
    </Product>
    <Product ID="VisioProRetail">
      <Language ID="en-us" />
    </Product>
    <Product ID="ProjectProRetail">
      <Language ID="en-us" />
    </Product>
  </Add>
  <Updates Enabled="FALSE"/>
  <Display Level="None" AcceptEULA="TRUE" />
  <Property Name="AUTOACTIVATE" Value="1" />
</Configuration>
```

From your command prompt, run setup.exe to download the bits for Office from the Microsoft CDN. The downloaded files will measure nearly 1.5 GB.

```batch
N:\ODT\setup.exe /download
```

Rerun `setup.exe` using the `/packager` parameter this time. This also requires you to specify the location to place the finished package. In the example below, `configuration.xml` is my XML file in the same directory as `setup.exe` and Package is a relative path to the directory where the App-V package will be saved.

```batch
N:\ODT\setup.exe /packager configuration.xml Package
```

When used with the `/packager` parameter, `setup.exe` invokes the program `Flattener.exe` which can easily be identified by the brightly-coloured text shown in the picture below. `Flattener.exe` is the program that compiles the bits that make up Office into the App-V package.

[Flattener image here.]

After the flattener exits, change to the `Package\AppvPackages\` directory. This is where the App-V package is. There are also two XML files created by the flattener. Since Office can only be deployed globally on a machine, the machine configuration file is the one we will need, not the user configuration. Using a text editor like Visual Studio Code, Atom, or Nodepad++, open the `DeploymentConfig` XML file. This file is used to configure the installation by modifying file-type associations, shortcuts, scripts, and which Office applications are enabled. Adding program shortcuts is easy. Simply search the file for "`.lnk`" and you will find a section dedicated to creating start menu shortcuts for each of the programs. If you want to add another shortcut &mdash; to the desktop for example &mdash; just copy and paste the code, modifying the shortcut path of course.

```xml
<Extension Category="AppV.Shortcut">
  <Shortcut>
    <File>[{Common Desktop}]\Outlook 2016.lnk</File>
    <Target>[{AppVPackageRoot}]\Office16\OUTLOOK.EXE</Target>
    <Icon>[{Windows}]\Installer\{90160000-000F-0000-0000-0000000FF1CE}\outicon.exe.0.ico</Icon>
    <Arguments />
    <WorkingDirectory />
    <AppUserModelId>Microsoft.Office.OUTLOOK.EXE.15</AppUserModelId>
    <AppUserModelExcludeFromShowInNewInstall>true</AppUserModelExcludeFromShowInNewInstall>
    <Description>Manage your email, schedules, contacts, and to-dos.</Description>
    <ShowCommand>1</ShowCommand>
    <ApplicationId>[{AppVPackageRoot}]\Office16\OUTLOOK.EXE</ApplicationId>
  </Shortcut>
</Extension>
```

To disable an application, search the file for the word "Application" until you see something like what is below. Find the program you want to disable and change `true` to `false`. The example below is how your XML would look if disabling Excel.

```xml
<Application Id="[{AppVPackageRoot}]\Office16\EXCEL.EXE" Enabled="false" >
  <VisualElements>
    <Name>Excel 2016</Name>
    <Icon />
    <Description />
  </VisualElements>
</Application>
```

Immediately below the Applications section of the file is the User Scripts section. This is used to execute a program or script when an Office application is launched. An example may be to map a shared network drive when Publisher is opened so that users can work on shared documents. You can then close the connection when the application is closed in a similar manner. Overwrite the existing XML file with your updated file. You can use a different name but this requires us to manually specify the configuration file when publishing the App-V package. If you use the default name the changes will be applied automatically. There are many ways to deploy the finished App-V package: App-V Server, System Center Configuration Manager, or even using a short PowerShell script. Since deployment is not within the scope of this tutorial, I will use PowerShell for its simplicity.

Open PowerShell ISE and create a new file. Copy and paste the following code, replacing my UNC path with your own.

```powershell
Import-Module AppvClient
Set-AppvClientConfiguration -EnablePackageScripts:$true
Add-AppvClientPackage -Path \\hq.jacobhouse.ca\software\office\ODT\Package\AppvPackages\VisioProRetail_ProPlusRetail_ProjectProRetail_en-us_x86.appv | Publish-AppvClientPackage -Global
```

This PowerShell script can then be deployed using Group Policy startup scripts or another method of your choice.
