---
title: 生产对象
---
# 生产对象

`app.production`

#### 描述

生产对象允许 ExtendScript 访问和操作生产、插入项目、创建新项目和文件夹，并将现有的生产项目移动到回收站。

---

## 属性

### Production.name

`app.production.name`

#### 描述

生产的名称。

#### 类型

字符串。

---

### Production.path

`app.production.path`

#### 描述

生产文件夹的路径。

#### 类型

字符串。

---

### Production.projects

`app.production.projects`

#### 描述

包含在生产中的项目数组，这些项目当前是打开的。不包括未打开的项目。

#### 类型

[ProjectCollection 对象](../../collection/projectcollection)，只读。

---

## 方法

### Production.addProject()

`app.production.addProject(srcProjectPath, destProjectPath)`

#### 描述

将项目从其他位置复制到生产目录中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `srcProjectPath` | 字符串 | 源项目的路径。 |
| `destProjectPath` | 字符串 | 添加项目的目的地路径。 |

#### 返回值

如果成功，返回 `true`。

---

### Production.close()

`app.production.close()`

#### 描述

关闭生产及其中的所有打开项目。

#### 参数

无。

#### 返回值

如果成功，返回 `true`。

---

### Production.getLocked()

`app.production.getLocked(project)`

#### 描述

返回生产中单个项目的锁定状态。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `project` | [Project 对象](.././project) | 项目 |

#### 返回值

如果项目已锁定，返回 `true`；如果项目未锁定，返回 `false`。

---

### Production.moveToTrash()

`app.production.moveToTrash(projectOrFolderPath, suppressUI, saveProject)`

#### 描述

将指定的路径（“文件夹”）或 .prproj 文件移动到生产的回收站文件夹中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `projectOrFolderPath` | 字符串 | 源项目的路径。 |
| `suppressUI` | 布尔值 | 是否抑制任何结果对话框。 |
| `saveProject` | 布尔值 | 是否先保存项目。 |

#### 返回值

如果成功，返回 `true`。

---

### Production.setLocked()

`app.production.setLocked(project,locked)`

#### 描述

设置生产中指定项目的锁定状态。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `project` | `Project 对象` | 项目 |
| `locked` | 布尔值 | `True` 表示锁定，`false` 表示解锁。 |

#### 返回值

如果成功，返回 `true`。
