---
title: 系统
---
# System 对象

`system`

#### 描述

System 对象提供对用户系统上某些属性的访问，例如用户名、操作系统的名称和版本等。可通过全局变量 `system` 访问。

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

运行 After Effects 的计算机名称。

#### 类型

String; 只读.

---

### System.osName

`system.osName`

#### 描述

运行 After Effects 的操作系统名称。

:::warning
在 Windows 7 及以上版本，该属性返回空值。请使用 $.os 代替。
:::

#### 类型

String; 只读.

---

### System.osVersion

`system.osVersion`

#### 描述

当前本地操作系统的版本。

#### 类型

String; 只读.

---

### System.userName

`system.userName`

#### 描述

当前登录系统的用户名。

#### 类型

String; 只读.

---

## 函数

### System.callSystem()

`system.callSystem(cmdLineToExecute);`

#### 描述

执行一个系统命令，就像在操作系统的命令行中输入它一样。返回系统对该命令的输出（如果有）。

在 Windows 上，可以使用 `cmd.exe /c` 方式调用命令，并将命令放在转义引号（`\"...\"`）中。例如，以下代码获取当前时间并显示给用户：

```javascript
var timeStr = system.callSystem("cmd.exe /c \"time /t\"");
alert("Current time is " + timeStr);
```

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `cmdLineToExecute` | String | 要执行的命令及其参数。 |

#### 返回

执行命令的输出结果。
