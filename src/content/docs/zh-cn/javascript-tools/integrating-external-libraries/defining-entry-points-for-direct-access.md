---
title: 定义直接访问的入口函数
---
# 定义直接访问的入口函数

要通过 [ExternalObject 实例](.././externalobject-object) 直接加载和访问的库必须发布以下入口函数。

:::note
这些必须作为 C 函数导出，而不是 C++ 函数。
:::

---

## 入口函数

如果您希望使用 [ExternalObject 实例](.././externalobject-object)，则需要以下入口函数：

### ESInitialize()

`char* ESInitialize (TaggedData* argv, long argc);`

#### 描述

当您的库加载到内存时调用。

#### 参数

| 参数 | 描述 |
| --- | --- |
| `argv, argc` | 传递给构造函数的参数指针和数量，以 TaggedData 的形式传递。 |

#### 返回

函数签名字符串；请参阅 [库初始化](#库初始化)。

---

### ESGetVersion()

`long ESGetVersion (void );`

#### 描述

不接受参数，并返回库的版本号作为长整型。

结果在 JavaScript 中作为 `ExternalObject.version` 可用。

#### 返回

长整型

---

### ESFreeMem()

`void ESFreeMem (void* p);`

#### 描述

调用以释放为传递给或从库函数传递的空终止字符串分配的内存。

| 参数 | 描述 |
| --- | --- |
| `p` | 指向字符串的指针。 |

#### 返回

无

---

### ESTerminate()

`void ESTerminate (void );`

#### 描述

当您的库被卸载时调用。请参阅 [库终止](#库终止)。

#### 返回

无

---

## 其他函数

共享库可以包含任意数量的其他函数。每个函数对应于 [ExternalObject 实例](.././externalobject-object) 中的一个 JavaScript 方法。如果函数未定义，ExtendScript 会抛出运行时错误。

每个函数必须接受以下参数：

- 一个 [TaggedData](../defining-entry-points-for-indirect-access#taggeddata) 数组。
- 一个参数计数。
- 一个用于接收返回值的变体数据结构。

变体数据不支持 JavaScript 对象。允许以下数据类型：

- `undefined`
- 布尔值
- `double`
- 字符串 - 必须为 UTF-8 编码。库必须定义入口函数 [ESFreeMem()](#esfreemem)，ExtendScript 调用该入口函数以释放返回的字符串指针。如果缺少此入口函数，ExtendScript 不会尝试释放任何返回的字符串数据。
- `Script` - 由 ExtendScript 评估的字符串。用于返回定义任意复杂数据的小型 JavaScript 脚本。

如果在调用函数时提供的参数未定义，ExtendScript 会将数据类型设置为 `undefined`，并且不会尝试将数据转换为请求的类型。

:::note

被调用的函数可以自由返回列出的任何数据类型。
:::

---

## 库初始化

ExtendScript 调用 [ESInitialize()](#esinitialize) 来初始化库。

该函数接收一个参数向量，其中包含传递给 ExternalObject 构造函数的附加参数。

该函数可以返回一组函数名称-签名字符串，用于支持 ExtendScript 反射接口，并将函数参数转换为特定类型。您不需要为函数定义签名即可使其在 JavaScript 中可调用。

### 函数签名

如果您选择返回一组函数名称-签名字符串，则每个字符串将函数名称与该函数的参数类型（如果有）关联起来。例如：

```javascript
["functionName1_argtypes", "functionName2_argtypes", "functionName3"]
```

对于每个函数，字符串以函数名称开头，后跟下划线字符和参数数据类型列表，每个参数用一个字符表示。如果函数没有参数，则可以省略尾随的下划线字符（除非函数名称中包含下划线）。

表示数据类型的字符如下：

| 字符 | 描述 |
| --- | --- |
| `a` | 任何类型。参数不会被转换。如果未提供类型或类型代码无法识别，则这是默认值。 |
| `b` | 布尔值 |
| `d` | 有符号 32 位整数 |
| `u` | 无符号 32 位整数 |
| `f` | 64 位浮点数 |
| `s` | 字符串 |

例如，假设您的库定义了以下两个入口函数：

```javascript
One (Integer a, String b);
Two ();
```

这两个函数的签名字符串将是 `"One_ds"` 和 `"Two"`。

:::warning

尝试这样做会产生未定义的结果。
:::

---

## 库终止

定义入口函数 [ESInitialize()](#esinitialize) 以在库卸载时释放您分配的任何内存。

每当 JavaScript 函数调用库函数时，它会增加该库的引用计数。当库的引用计数达到 0 时，库会自动卸载；您的终止函数被调用，并且 `ExternalObject` 实例被删除。请注意，删除 `ExternalObject` 实例不会卸载库，如果仍有剩余的引用。
