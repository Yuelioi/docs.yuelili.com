---
title: Anywhere 对象
---
# Anywhere 对象

`app.anywhere`

#### 描述

`Anywhere` 对象表示任何可用的 Adobe Anywhere 或 Team Projects 服务器。

---

## 属性

无。

---

## 方法

### Anywhere.getAuthenticationToken()

`app.anywhere.getAuthenticationToken()`

#### 描述

获取身份验证令牌。

#### 参数

无。

#### 返回值

返回一个包含登录令牌的字符串，如果失败则返回 `0`。

---

### Anywhere.getCurrentEditingSessionActiveSequenceURL()

`app.anywhere.getCurrentEditingSessionActiveSequenceURL()`

#### 描述

获取当前正在编辑的序列的 URL。

#### 参数

无。

#### 返回值

返回一个包含资源 URL 的字符串，如果失败则返回 `0`（包括没有活动序列或未打开编辑会话的情况）。

---

### Anywhere.getCurrentEditingSessionSelectionURL()

`app.anywhere.getCurrentEditingSessionSelectionURL()`

#### 描述

获取当前选中的单个资源的 URL。如果选择的项目多于或少于一个，则操作失败。

#### 参数

无。

#### 返回值

返回一个包含资源 URL 的字符串，如果失败则返回 `0`（包括选择的项目多于或少于一个的情况）。

---

### Anywhere.getCurrentEditingSessionURL()

`app.anywhere.getCurrentEditingSessionURL()`

#### 描述

获取当前正在编辑的项目的 URL。

#### 参数

无。

#### 返回值

返回一个包含项目 URL 的字符串，如果失败则返回 `0`。

---

### Anywhere.isProductionOpen()

`app.anywhere.isProductionOpen()`

#### 描述

检查当前是否有 Anywhere 或 Team Projects 项目已打开。

#### 参数

无。

#### 返回值

如果有项目已打开，则返回 `true`；否则返回 `false`。

---

### Anywhere.listProductions()

`app.anywhere.listProductions()`

#### 描述

获取当前用户在当前服务器上可用的项目名称。

#### 参数

无。

#### 返回值

返回一个包含可用项目名称的字符串数组，如果失败则返回 `0`。

---

### Anywhere.openProduction()

`app.anywhere.openProduction(productionURL)`

#### 描述

打开指定 URL 的项目。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `productionURL` | String | 要打开的项目的 URL。 |

#### 返回值

如果成功则返回 `0`。

---

### Anywhere.setAuthenticationToken()

`app.anywhere.setAuthenticationToken(token, emailAddress)`

#### 描述

使用提供的令牌将指定的电子邮件地址登录到服务器。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `token` | String | 授权令牌。 |
| `emailAddress` | String | 关联的电子邮件地址。 |

#### 返回值

如果成功则返回 `0`。

---
