---
title: extendscript-reflection-interface
---
# ExtendScript Reflection Interface

ExtendScript provides a reflection interface that allows you to find out everything about an object, including its name, a description, the expected data type for properties, the arguments and return value for methods, and any default values or limitations to the input values.

---

## ReflectionObject

Every object has a reflect property that returns a Reflection Object that reports the contents of the object. You can, for example, show the values of all the properties of an object with code like this:

```javascript
var f = new File ("myfile");
var props = f.reflect.properties;
for (var i = 0; i < props.length; i++) {
    $.writeln('this property ' + props[i].name + ' is ' + f[props[i].name]);
}
```

### ReflectionObject Attributes

:::info
All properties are read only.
:::

#### 描述

`reflect.description`

##### 描述

Short text describing the reflected object, or undefined if no description is available.

##### 类型

String

---

#### help

`reflect.help`

##### 描述

Longer text describing the reflected object more completely, or `undefined` if no description is available.

##### 类型

String

---

#### 函数

`reflect.methods`

##### 描述

An Array of [ReflectionInfo object](#reflectioninfo-object) containing all methods of the reflected object, defined in the class or in the specific instance.

##### 类型

Array of [ReflectionInfo objects](#reflectioninfo-object)

---

#### name

`reflect.name`

##### 描述

The class name of the reflected object.

##### 类型

String

---

#### properties

`reflect.properties`

##### 描述

An Array of [ReflectionInfo object](#reflectioninfo-object) containing all properties of the reflected object, defined in the class or in the specific instance. For objects with dynamic properties (defined at runtime) the list contains only those dynamic properties that have already been accessed by the script.

For example, in an object wrapping an HTML tag, the names of the HTML attributes are determined at run time.

##### 类型

Array of [ReflectionInfo objects](#reflectioninfo-object)

---

### ReflectionObject Methods

#### find()

`reflectionObj.find(name)`

##### 描述

Returns the [ReflectionInfo object](#reflectioninfo-object) for the named property of the reflected object, or null if no such property exists.

Use this method to get information about dynamic properties that have not yet been accessed, but that are known to exist.

##### 参数

| 参数 |  类型  |                   描述                   |
| --------- | ------ | ----------------------------------------------- |
| name      | String | The property for which to retrieve information. |

#### 示例

This code determines the class name of an object:

```javascript
obj = new String ("hi");
obj.reflect.name; // => String
```

This code gets a list of all methods:

```javascript
obj = new String ("hi");
obj.reflect.methods; //=> indexOf,slice,...
obj.reflect.find ("indexOf"); // => the method info
```

This code gets a list of properties:

```javascript
Math.reflect.properties; //=> PI,LOG10,...
```

This code gets the data type of a property:

```javascript
Math.reflect.find ("PI").type; // => number
```

---

## ReflectionInfo Object

This object contains information about a property, a method, or a method argument.

You can access ReflectionInfo objects in a Reflection object's properties and methods arrays, by name or index:

```javascript
obj = new String ("hi");
obj.reflect.methods[0];
obj.reflect.methods["indexOf"];
```

You can access the ReflectionInfo objects for the arguments of a method in the arguments array of the ReflectionInfo object for the method, by index:

```javascript
obj.reflect.methods["indexOf"].arguments[0];
obj.reflect.methods.indexOf.arguments[0];
```

---

### ReflectionInfo Attributes

#### arguments

`obj.reflect.methods[0].arguments`

##### 描述

For a reflected method, an array of [ReflectionInfo objects](#reflectioninfo-object) describing each method argument.

##### 类型

Array of [ReflectionInfo objects](#reflectioninfo-object)

---

#### dataType

`obj.reflect.methods[0].dataType`

##### 描述

The data type of the reflected element.

##### 类型

String. One of:

- `"boolean"`
- `"number"`
- `"string"`
- `"Classname"`: The class name of an object.
    !!! note
        Class names start with a capital letter. Thus, the value `String` stands for a JavaScript string, while String is a JavaScript String wrapper object.
- `*`: Any type. This is the default.
- `null`
- `undefined`: Return data type for a function that does not return any value.
- `unknown`

---

#### defaultValue

`obj.reflect.methods[0].defaultValue`

##### 描述

The default value for a reflected property or method argument, or `undefined` if there is no default value, if the property is undefined, or if the element is a method.

##### 类型

Any

---

#### 描述

`obj.reflect.methods[0].description`

##### 描述

Short text describing the reflected object, or `undefined` if no description is available.

##### 类型

String

---

#### help

`obj.reflect.methods[0].help`

##### 描述

Longer text describing the reflected object more completely, or `undefined` if no description is available.

##### 类型

String

---

#### isCollection

`obj.reflect.methods[0].isCollection`

##### 描述

When `true`, the reflected property or method returns a collection; otherwise, `false`.

##### 类型

Boolean

---

#### max

`obj.reflect.methods[0].max`

##### 描述

The maximum numeric value for the reflected element, or `undefined` if there is no maximum or if the element is a method.

##### 类型

Number

---

#### min

`obj.reflect.methods[0].min`

##### 描述

The minimum numeric value for the reflected element, or `undefined` if there is no minimum or if the element is a method.

##### 类型

Number

---

#### name

`obj.reflect.methods[0].name`

##### 描述

The name of the reflected element. A string, or a number for an array index.

##### 类型

String or Number

---

#### 类型

`obj.reflect.methods[0].type`

##### 描述

The type of the reflected element.

##### 类型

String. One of:

- `readonly`: A Read only property.
- `readwrite`: A read-write property.
- `createonly`: A property that is valid only during creation of an object.
- `method`: A method.

---
