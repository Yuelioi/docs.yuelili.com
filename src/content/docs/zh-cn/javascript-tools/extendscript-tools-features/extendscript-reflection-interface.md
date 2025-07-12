---
title: ExtendScript 反射接口
---
# ExtendScript 反射接口

ExtendScript 提供了一个反射接口，允许你了解一个对象的所有信息，包括其名称、描述、属性的预期数据类型、方法的参数和返回值，以及任何默认值或输入值的限制。

---

## ReflectionObject

每个对象都有一个 `reflect` 属性，它返回一个 Reflection 对象，该对象报告对象的内容。例如，你可以使用以下代码显示对象的所有属性值：

```javascript
var f = new File ("myfile");
var props = f.reflect.properties;
for (var i = 0; i < props.length; i++) {
 $.writeln('this property ' + props[i].name + ' is ' + f[props[i].name]);
}
```

### ReflectionObject 属性

:::info
所有属性均为只读。
:::

#### 描述

`reflect.description`

##### 描述

描述反射对象的简短文本，如果没有描述则为 `undefined`。

##### 类型

字符串

---

#### help

`reflect.help`

##### 描述

描述反射对象的更完整的较长文本，如果没有描述则为 `undefined`。

##### 类型

字符串

---

#### 函数

`reflect.methods`

##### 描述

包含反射对象所有方法的 [ReflectionInfo 对象](#reflectioninfo-object) 数组，这些方法定义在类或特定实例中。

##### 类型

[ReflectionInfo 对象](#reflectioninfo-object) 数组

---

#### name

`reflect.name`

##### 描述

反射对象的类名。

##### 类型

字符串

---

#### properties

`reflect.properties`

##### 描述

包含反射对象所有属性的 [ReflectionInfo 对象](#reflectioninfo-object) 数组，这些属性定义在类或特定实例中。对于具有动态属性（在运行时定义）的对象，列表仅包含脚本已访问的那些动态属性。

例如，在包装 HTML 标签的对象中，HTML 属性的名称在运行时确定。

##### 类型

[ReflectionInfo 对象](#reflectioninfo-object) 数组

---

### ReflectionObject 方法

#### find()

`reflectionObj.find(name)`

##### 描述

返回反射对象指定属性的 [ReflectionInfo 对象](#reflectioninfo-object)，如果该属性不存在则返回 `null`。

使用此方法可以获取尚未访问但已知存在的动态属性的信息。

##### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| name | 字符串 | 要检索信息的属性名称。 |

#### 示例

以下代码确定对象的类名：

```javascript
obj = new String ("hi");
obj.reflect.name; // => String
```

以下代码获取所有方法的列表：

```javascript
obj = new String ("hi");
obj.reflect.methods; //=> indexOf,slice,...
obj.reflect.find ("indexOf"); // => 方法信息
```

以下代码获取属性列表：

```javascript
Math.reflect.properties; //=> PI,LOG10,...
```

以下代码获取属性的数据类型：

```javascript
Math.reflect.find ("PI").type; // => number
```

---

## ReflectionInfo 对象

此对象包含有关属性、方法或方法参数的信息。

你可以通过名称或索引在 Reflection 对象的 `properties` 和 `methods` 数组中访问 ReflectionInfo 对象：

```javascript
obj = new String ("hi");
obj.reflect.methods[0];
obj.reflect.methods["indexOf"];
```

你可以通过索引在方法的 `arguments` 数组中访问方法参数的 ReflectionInfo 对象：

```javascript
obj.reflect.methods["indexOf"].arguments[0];
obj.reflect.methods.indexOf.arguments[0];
```

---

### ReflectionInfo 属性

#### arguments

`obj.reflect.methods[0].arguments`

##### 描述

对于反射方法，描述每个方法参数的 [ReflectionInfo 对象](#reflectioninfo-object) 数组。

##### 类型

[ReflectionInfo 对象](#reflectioninfo-object) 数组

---

#### dataType

`obj.reflect.methods[0].dataType`

##### 描述

反射元素的数据类型。

##### 类型

字符串。可能的值包括：

- `"boolean"`
- `"number"`
- `"string"`
- `"Classname"`: 对象的类名。
 !!! 注意
 类名以大写字母开头。因此，值 `String` 表示 JavaScript 字符串，而 `String` 是 JavaScript 字符串包装对象。
- `*`: 任何类型。这是默认值。
- `null`
- `undefined`: 不返回任何值的函数的返回数据类型。
- `unknown`

---

#### defaultValue

`obj.reflect.methods[0].defaultValue`

##### 描述

反射属性或方法参数的默认值，如果没有默认值、属性未定义或元素是方法，则为 `undefined`。

##### 类型

任意类型

---

#### 描述

`obj.reflect.methods[0].description`

##### 描述

描述反射对象的简短文本，如果没有描述则为 `undefined`。

##### 类型

字符串

---

#### help

`obj.reflect.methods[0].help`

##### 描述

描述反射对象的更完整的较长文本，如果没有描述则为 `undefined`。

##### 类型

字符串

---

#### isCollection

`obj.reflect.methods[0].isCollection`

##### 描述

如果为 `true`，则反射属性或方法返回一个集合；否则为 `false`。

##### 类型

布尔值

---

#### max

`obj.reflect.methods[0].max`

##### 描述

反射元素的最大数值，如果没有最大值或元素是方法，则为 `undefined`。

##### 类型

数字

---

#### min

`obj.reflect.methods[0].min`

##### 描述

反射元素的最小数值，如果没有最小值或元素是方法，则为 `undefined`。

##### 类型

数字

---

#### name

`obj.reflect.methods[0].name`

##### 描述

反射元素的名称。字符串或数组索引的数字。

##### 类型

字符串或数字

---

#### 类型

`obj.reflect.methods[0].type`

##### 描述

反射元素的类型。

##### 类型

字符串。可能的值包括：

- `readonly`: 只读属性。
- `readwrite`: 读写属性。
- `createonly`: 仅在对象创建期间有效的属性。
- `method`: 方法。

---
