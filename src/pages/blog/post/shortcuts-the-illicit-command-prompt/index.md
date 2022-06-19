---
title: 'Shortcuts: The Illicit Command Prompt'
date: '2016-08-22 12:47:24.000000'
published: true
image: ''
mainpage: false
---

Let me give you a scenario. Begin with `net.exe`, which is located in `%windir%\System32`. It's a fairly powerful command-line utility that can be used to map network drives or shared printers, create fileshares, modify time settings, etc. Most notably for my example in this post, however, `net` can also be used to create user accounts and user groups:

```batch
net user john Pa$$w0rd /add /fullname:"John Doe"
net localgroup administrators john /add
```

These two commands create a user named John and add him to the Administrators group. Since the `/domain` parameter was not used, all actions are local. That is, the user account is local and the Administrators group is `BUILTIN\Administrators`, not `DOMAIN\Administrators`. For this reason, the creation of the new user is nearly undetectable to domain and network administrators unless account management auditing and event forwarding are configured. Before you close your browser because you think this post doesn't apply to you since you have Command Prompt and silent batch processing disabled, read on. The topic of discussion here is shortcuts, not your command prompt restrictions, remember.

What if, for the sake of arguement, a user right-clicked, chose _New_ > _Shortcut_, and created a shortcut pointing to `C:\Windows\System32\net.exe`? What if they then opened the properties of this shortcut and appended `user john Pa$$w0rd /add /fullname:"John Doe"` to the target path?

[net.exe.png]

Running this shortcut as administrator would create a new local account, just as running the command at an administrative command prompt would.

[john.png]

Modifying the shortcut target to the parameters of the second command from above would add the user to the local admin group. Yes, the user would need some way to open the shortcut as an administrator so creating an additional local admin account may not be the huge exploit you were expecting, but that wasn't the point. The point being that this new user account has no User Configuration GPOs applied to it and it has much less accountability compared to a managed domain account with proper restrictions, even if auditing is enabled in the machine configuration.

The principle of the matter is that the user was able to execute the `net` command to begin with. `net` is only one command of the dozens available. Users should have access to none of them.

So, how was this possible? We estabished that command prompt access was disabled for this account, didn't we? It's important to pay attention to what such specific Group Policies are actually doing. Yes, the command prompt, `cmd.exe` is disabled and yes you may have disabled execution of batch files with `cmd.exe`. This does _not_ prevent execution of any other program on the system though. The restrictions are _only_ on `cmd.exe`. If a user find another way to execute a program on the system, they are able to do so &mdash; no restriction has been placed on this &mdash; as we saw with `net.exe` here.

The most direct way to deal with this is a Software Restriction GPO. Run down through all the directories specified with the `%path%` variable and make a note of any commands or utilities that users shouldn't be privy to and pop these in a software restriction policy for your users. Also, consider any well-known third-party utilities that you want to disallow. I'd start with the SysInternals Suite. Obviously, this approach is far from perfect since it operates on the premise that administrators know of each and every tool that users may launch via a "customized" shortcut, and that they can't rename executables and launch the renamed file. With that said, it is certainly a good place to start if a whitelist and blanket-block type of solution isn't feasible and you feel that the procedure used above could be a vulnerability to machines in your network.
