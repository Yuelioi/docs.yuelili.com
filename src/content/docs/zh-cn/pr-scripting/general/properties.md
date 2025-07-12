---
title: 属性对象
---
# 属性对象

`app.properties`

#### 描述

*在此添加描述*

---

## 属性

无。

---

## 方法

### Properties.clearProperty()

`app.properties.clearProperty()`

#### 描述

*在此添加描述*

#### 参数

*在此添加参数*

#### 返回值

*在此添加返回值/类型*

---

### Properties.doesPropertyExist()

`app.properties.doesPropertyExist(property)`

#### 描述

检查给定的属性是否存在于首选项中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `property` | String | 要检查的属性 |

#### 返回值

布尔值。

#### 示例

检查首选项中是否存在索引为10和99的标签：

```javascript
var property = 'BE.Prefs.LabelNames.10';
var exists = app.properties.doesPropertyExist(property);
alert('属性 "' + property + '" 存在: ' + exists.toString());

property = 'BE.Prefs.LabelNames.99';
exists = app.properties.doesPropertyExist(property);
alert('属性 "' + property + '" 存在: ' + exists.toString());
```

---

### Properties.getProperty()

`app.properties.getProperty(property)`

#### 描述

返回属性值。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `property` | String | 要获取值的属性 |

#### 返回值

字符串。

#### 示例

获取给定索引处的标签名称：

```javascript
var labelIndex = 0;
var property = 'BE.Prefs.LabelNames.' + labelIndex;

if (app.properties.doesPropertyExist(property)) {
 alert(app.properties.getProperty(property));
} else {
 alert('属性 "' + property + '" 不存在');
}
```

---

### Properties.isPropertyReadOnly()

`app.properties.isPropertyReadOnly(property)`

#### 描述

检查给定属性是否可以被用户覆盖。如果该属性不存在，则返回`false`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `property` | String | 要检查的属性 |

#### 返回值

布尔值。

---

### Properties.setProperty()

`app.properties.setProperty(property, value, persistent, createIfNotExist)`

#### 描述

设置属性值。

:::note
对于要在Premiere Pro首选项中使用的任何文件路径，必须包含尾随路径分隔符。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `property` | String | 要创建的属性 |
| `value` | Any | 属性的值 |
| `persistent` | Boolean | 是否在会话之间持久化 |
| `createIfNotExist` | Boolean | 如果属性不存在，是否创建 |

#### 返回值

`null`

#### 示例

更改标签名称：

```javascript
var labelIndex = 0;
var property = 'BE.Prefs.LabelNamesX.' + labelIndex;

var newValue = '通过脚本更改';
var persistent = true;
var createIfNotExist = true;

if (app.properties.doesPropertyExist(property)) {
 if (app.properties.isPropertyReadOnly(property)) {
 alert('无法重命名属性 "' + property + '"，因为它是只读的。');
 } else {
 var oldValue = app.properties.getProperty(property);
 app.properties.setProperty(property, newValue, persistent, createIfNotExist);
 alert('值从 "' + oldValue + '" 更改为 "' + newValue + '"');
 }
} else {
 app.properties.setProperty(property, newValue, persistent, createIfNotExist);
 alert('创建了新属性 "' + property + '" 并设置值为 "' + newValue + '"');
}
```
