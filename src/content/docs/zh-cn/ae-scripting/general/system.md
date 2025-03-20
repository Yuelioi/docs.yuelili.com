---
title: system
---
# System object

`system`

#### 描述

The System object provides access to attributes found on the user's system, such as the user name and the name and version of the operating system. It is available through the `system` global variable.

#### 示例

```javascript
alert("Your OS is " + system.osName + " running version" + system.osVersion);
confirm("You are: " + system.userName + " running on " + system.machineName + ".");
```

---

## 属性

### System.machineName

`system.machineName`

#### 描述

The name of the computer on which After Effects is running.

#### 类型

String; 只读.

---

### System.osName

`system.osName`

#### 描述

The name of the operating system on which After Effects is running.

:::warning
As of Windows 7, this attribute returns a blank value. Use $.os instead.
:::

#### 类型

String; 只读.

---

### System.osVersion

`system.osVersion`

#### 描述

The version of the current local operating system.

#### 类型

String; 只读.

---

### System.userName

`system.userName`

#### 描述

The name of the user currently logged on to the system.

#### 类型

String; 只读.

---

## 函数

### System.callSystem()

`system.callSystem(cmdLineToExecute);`

#### 描述

Executes a system command, as if you had typed it on the operating system's command line. Returns whatever the system outputs in response to the command, if anything. In Windows, you can invoke commands using the `/c` switch for the `cmd.exe` command, passing the command to run in escaped quotes (`\"...\"`). For example, the following retrieves the current time and displays it to the user:

```javascript
var timeStr = system.callSystem("cmd.exe /c \"time /t\"");
alert("Current time is " + timeStr);
```

#### 参数

|     参数      |  类型  |           描述           |
| ------------------ | ------ | ------------------------------- |
| `cmdLineToExecute` | String | The command and its parameters. |

#### 返回

The output from the command.
