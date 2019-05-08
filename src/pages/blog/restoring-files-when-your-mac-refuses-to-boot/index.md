---
title: 'Restoring Files When Your Mac Refuses to Boot'
date: '2016-08-22 12:36:27.000000'
published: true
image: ''
---

Today, without warning (unless you consider kernel panics at an increasing frequency a warning 😬), my Late-2011 MacBook Pro called it quits. It shut down as I was using it and wouldn't revive itself. The farthest it could get was mid-boot before shutting off again. Booting with verbose mode (holding ⌘+V at boot) showed what appeared to be disk permission errors which caused the boot process to abort and the machine to power off.

Next on the checklist I thought would be to try Safe Boot, which can be activated by holding the _Shift_ key at the startup chime. No luck, unfortunately; the machine powered off just like before. After Safe Boot had ruled out any driver or startup program issues I moved onto Recovery Mode (holding ⌘+R at boot).

Booting into Recovery Mode uses a hidden partition on your hard drive which contains special utilities in the event that you need to diagnose a problem with your Mac or, at worst, reinstall OS X. Once in Recovery Mode, you can open Disk Utility to repair disk permissions or repair the disk. In my case, both Verify Disk Permissions and Repair Disk Permissions were grayed out. I tried _Verify Disk_, which threw a number of errors. _Repair Disk_ then failed and suggested that I backup my files and reformat the hard drive.

In the sidebar of Disk Utility, I thought it strange that Macintosh HD was not mounted. "Doesn't the disk have to be mounted to verify or repair its permissions?", I thought. The answer is yes, yes it does. Unfortunately mounting the disk via disk utility failed. In Recovery Mode, a user is also given a Terminal to work with. My next attempt was to mount the volume using the `diskutil` command. The format of this command to mount a disk is as follows, where `disk0s2` is the volume I want to mount, as determined by running `diskutil list`.

```bash
diskutil mount -mountPoint /Volumes/Macintosh\ HD /dev/disk0s2
```

Nope. Failed. Again. Last try: Single-user Mode. Single-user mode (holding ⌘+S at boot) boots your Mac verbosely and presents you with a terminal where you have root-level access. In other words, be careful. Everything you do is executed with root-level privileges; it doesn't even recognize `sudo` as a command. Luckily, since you are booting from the Macintosh HD partition, it is obviously mounted.

From here, I plugged an external USB hard drive into my notebook and tried to create a mount point to mount it. As it turned out, Macintosh HD was mounted read-only &mdash; which explains why Disk Utility wasn't able to do anything with it &mdash; so I couldn't create a mount point by running the standard `mkdir /Volumes/USB\ Drive`. Since I was mainly concerned about recovering the files in the `~/` directory, a few apps from `/Applications`, and a couple of system-wide configuration files from `/Library`, I was able to mount the external disk at `/System` since I wasn't planning on recovering anything from here.

```bash
diskutil mount -mountPoint /Volumes/System /dev/disk0s2
```

If I did need to recover the entire disk, the only way would have been to recover the entire disk with the exception of one root-level directory, and then to change the mount point and separately backup the directory that the disk was previously mounted over.

Check that the disk mounted properly and to the correct location using the `df` tool:

```bash
df -h
```

And then begin backing up my files:

```bash
rsync -av /Users/jacob/ /System/Users/jacob/
rsync -av /Applications/ /System/Applications/
rsync -av /Library/ /System/Library/
```

A few hundred gigabytes later and all my crucial files are on my external hard drive. Now to reinstall OS X. I rebooted to the recovery partition, reformatted the disk0s2 volume and launched the OS X Installer app. The install took half an hour and the upgrade to El Capitan took another half-hour[^1]. Then about a half hour to get things set back up the way I like them. Overall, I'm pretty pleased how smoothly the entire process went and am really glad I was able to recover my files, given that I'm out of the country now and don't have access to a Time Machine backup. Just over an hour and three-quarters to get from won't-boot-at-all to back-in-action isn't bad.

[^1]: Reinstalling OS X from the recovery partition involves downloading the OS from Apple over the Internet. This downloads the version of OS X that the machine originally shipped with, not the latest version. In my case this was _Lion_.
