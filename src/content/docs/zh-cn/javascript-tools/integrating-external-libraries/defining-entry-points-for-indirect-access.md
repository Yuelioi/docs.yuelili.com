---
title: 定义间接访问的入口函数
---
# 定义间接访问的入口函数

用于外部库的 C 客户端对象接口允许您的 C 或 C++ 共享库代码定义、创建、使用和管理 JavaScript 对象。

---

## 入口函数

如果您希望使用对象接口，则需要以下入口函数：

### ESClientInterface()

`int ESClientInterface (SoCClient_e kReason, SoServerInterface* pServer, SoHServer hServer)`

#### 描述

您的库必须定义此全局函数才能使用 JavaScript 的对象接口。该函数在每个会话中调用两次，一次是在加载库时立即调用，另一次是在卸载库时调用。

#### 参数

| 参数 | 描述 |
|---|---|
| `kReason` | 此调用的原因，以下常量之一： |
| | - `kSoCClient_init`: 函数在加载时被调用以进行初始化。 |
| | - `kSoCClient_term`.: 函数在卸载时被调用以进行终止。 |
| `pServer` | 指向 [SoServerInterface](#soserverinterface) 的指针，包含入口函数的函数指针，使共享库代码能够调用 JavaScript 以创建和访问 JavaScript 类和对象。 |
| | 共享库代码负责在初始化和终止调用之间存储此结构，并在访问函数时检索它。 |
| `hServer` | 此共享库的 [支持结构](#support-structures) 引用。服务器是一个对象工厂，用于创建和管理 [支持结构](#support-structures) 对象。 |
| | 共享库代码负责在初始化和终止调用之间存储此结构。您必须将其传递给 [taggedDataInit()](#taggeddatainit) 和 [taggedDataFree()](#taggeddatafree)。 |

#### 返回

返回错误代码，成功时为 `kESErrOK`。

---

### ESMallocMem()

`void * ESMallocMem (size_t nbytes)`

#### 描述

提供 JavaScript 用于管理与库对象相关的内存的内存分配例程。

#### 参数

| 参数 | 描述 |
| --- | --- |
| `nbytes` | 要分配的字节数。 |

#### 返回

指向分配的内存块的指针。

---

## 共享库函数 API

您的共享库 C/C++ 代码通过两组函数定义其与 JavaScript 的接口，这些函数收集在 [SoServerInterface](#soserverinterface) 和 [SoObjectInterface](#soobjectinterface) 函数指针结构中。

大多数函数的返回值是整数常量。错误代码 `kESErrOK == 0` 表示成功。

### SoServerInterface

`SoServerInterface` 是一个函数指针结构，使共享库代码能够调用 JavaScript 对象。它在加载库时传递给全局 ESClientInterface() 函数进行初始化，并在卸载库时再次传递给该函数进行清理。在这些调用之间，您的共享库代码必须存储该结构并使用它来访问通信函数。

您可以在 C 代码中为每个对象和类存储信息。推荐的方法是在 initialize() 期间创建一个数据结构，并在 finalize() 期间释放它。然后，您可以使用 setClientData() 和 getClientData() 访问该数据。

SoServerInterface 结构包含以下函数指针：

```cpp
SoServerInterface {
 SoServerDumpServer_f
 SoServerDumpObject_f

 dumpServer; //调试，在控制台中显示服务器
 dumpObject; //调试，在控制台中显示对象

 SoServerAddClass_f

 addClass; //定义一个 JS 类

 SoServerAddMethod_f
 SoServerAddMethods_f
 SoServerAddProperty_f
 SoServerAddProperties_f

 addMethod; // 定义一个方法
 addMethods; // 定义一组方法
 addProperty; // 定义一个属性
 addProperties; // 定义一组属性

 SoServerGetClass_f
 SoServerGetServer_f

 getClass; // 获取实例的类
 getServer; // 获取实例的服务器

 SoServerSetClientData_f
 SoServerGetClientData_f

 setClientData; //在实例中设置数据
 getClientData; //从实例中获取数据

 SoServerEval_f
 eval; // 调用 JavaScript 解释器
 SoServerTaggedDataInit_f taggedDataInit; // 初始化标记数据
 SoServerTaggedDataFree_f taggedDataFree; // 释放标记数据
}
```

这些函数允许您的 C/C++ 共享库代码创建、修改和访问 JavaScript 类和对象。这些函数必须符合以下类型定义。

#### dumpServer()

`ESerror_t dumpServer (SoHServer hServer);`

##### 描述

将此服务器的内容打印到 ExtendScript Toolkit 中的 JavaScript 控制台，用于调试。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hServer` | 此共享库的 [支持结构](#support-structures) 引用，作为初始化时传递给全局 [ESClientInterface()](#esclientinterface) 函数的参数。 |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### dumpObject()

`ESerror_t dumpObject (SoHObject hObject);`

##### 描述

将此对象的内容打印到 ExtendScript Toolkit 中的 JavaScript 控制台，用于调试。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hObject` | 此类的实例的 [支持结构](#support-structures) 引用。 |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### addClass()

`ESerror_t addClass (SoHServer hServer, char* name, SoObjectInterface_p pObjectInterface);`

##### 描述

创建一个新的 JavaScript 类。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hServer` | 此共享库的 [支持结构](#support-structures) 引用，作为初始化时传递给全局 [ESClientInterface()](#esclientinterface) 函数的参数。 |
| `name` | 字符串。新类的唯一名称。名称必须以大写字母开头。 |
| `pObjectInterface` | 指向 [SoObjectInterface](#soobjectinterface) 的指针。包含此类的实例的对象接口方法的结构。 |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### addMethod()

`ESerror_t addMethod (SoHObject hObject, const char* name, int id, char* desc);`

##### 描述

向实例添加新方法。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hObject` | 此类的实例的 [支持结构](#support-structures) 引用。 |
| `name` | 字符串。新方法的唯一名称。 |
| `id` | 数字。新方法的唯一标识符。 |
| `desc` | 字符串。新方法的描述性字符串。 |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### addMethods()

`ESerror_t addMethods (SoHObject hObject, SoCClientName_p pNames);`

##### 描述

向实例添加一组新方法。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hObject` | 此类的实例的 [支持结构](#support-structures) 引用。 |
| `pNames[]` | [SoCClientName](#socclientname)。包含要添加的方法的名称和标识符的结构。 |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### addProperty()

`ESerror_t addProperty (SoHObject hObject, const char* name, int id, char* desc);`

##### 描述

向实例添加新属性。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hObject` | 此类的实例的 [支持结构](#support-structures) 引用。 |
| `name` | 字符串。新属性的唯一名称。 |
| `id` | 数字。新属性的唯一标识符。 |
| `desc` | 字符串。可选。新属性的描述性字符串，或 null。 |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### addProperties()

`ESerror_t addProperties (SoHObject hObject, SoCClientName_p pNames);`

##### 描述

向实例添加一组新属性。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hObject` | 此类的实例的 [支持结构](#support-structures) 引用。 |
| `pNames[]` | [SoCClientName](#socclientname)。包含要添加的属性的名称和标识符的结构。 |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### getClass()

`ESerror_t getClass (SoHObject hObject, char* name, int name_l);`

##### 描述

检索此对象的父类名称。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hObject` | 此类的实例的 [支持结构](#support-structures) 引用。 |
| `name` | 字符串。用于返回类的唯一名称的缓冲区。 |
| `name_1` | 数字。名称缓冲区的大小。 |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### getServer()

`ESerror_t getServer (SoHObject hObject, SoHServer* phServer, SoServerInterface_p* ppServerInterface);`

##### 描述

检索此对象的接口方法以及管理它的服务器对象。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hObject` | 此类的实例的 [支持结构](#support-structures) 引用。 |
| `phServer` | 用于返回此对象的 [支持结构](#support-structures) 引用的缓冲区。 |
| `ppServerInterface` | 用于返回此对象的 [SoObjectInterface](#soobjectinterface) 引用的缓冲区。 |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### setClientData()

`ESerror_t setClientData (SoHObject hObject, void* pData);`

##### 描述

设置要与对象一起存储的您自己的数据。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hObject` | 此类的实例的 [支持结构](#support-structures) 引用。 |
| `pData` | 指向库定义数据的指针。 |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### getClientData()

`ESerror_t setClientData (SoHObject hObject, void** pData);`

##### 描述

检索与 [setClientData()](#setclientdata) 一起存储的数据。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hObject` | 此类的实例的 [支持结构](#support-structures) 引用。 |
| `pData` | 用于返回指向库定义数据的指针的缓冲区。 |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### eval()

`ESerror_t eval (SohServer hServer, char* string, TaggedData* pTaggedData);`

##### 描述

调用 JavaScript 解释器以评估 JavaScript 表达式。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hServer` | 此共享库的 [支持结构](#support-structures) 引用，作为初始化时传递给全局 [ESClientInterface()](#esclientinterface) 函数的参数。 |
| String | 包含要评估的 JavaScript 表达式的字符串。 |
| `pTaggedData` | 指向 [TaggedData](#taggeddata) 对象的指针，用于返回评估结果。 |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### taggedDataInit()

`ESerror_t taggedDataInit (SoHSever hServer, TaggedData* pTaggedData);`

##### 描述

初始化 TaggedData 结构。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hServer` | 此共享库的 [支持结构](#support-structures) 引用，作为初始化时传递给全局 [ESClientInterface()](#esclientinterface) 函数的参数。 |
| `pTaggedData` | 指向 [TaggedData](#taggeddata) 的指针。 |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### taggedDataFree()

`ESerror_t setClientData (SoHServer hServer, TaggedData* pTaggedData);`

##### 描述

释放 TaggedData 结构使用的内存。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hServer` | 此共享库的 [支持结构](#support-structures) 引用，作为初始化时传递给全局 [ESClientInterface()](#esclientinterface) 函数的参数。 |
| `pTaggedData` | 指向 [TaggedData](#taggeddata) 的指针。 |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

### SoObjectInterface

当您使用 SoServerInterface.addClass() 添加 JavaScript 类时，必须提供此接口。JavaScript 调用提供的函数以与新类的对象进行交互。

SoObjectInterface 是一个函数指针数组，定义如下：

```cpp
SoObjectInterface {
 SoObjectInitialize_f initialize;
 SoObjectPut_f put;
 SoObjectGet_f get;
 SoObjectCall_f call;
 SoObjectValueOf_f valueOf;
 SoObjectToString_f toString;
 SoObjectFinalize_f finalize;
}
```

所有 `SoObjectInterface` 成员必须是有效的函数指针，或 NULL。您必须实现 `initialize()` 和 `finalize()`。这些函数必须符合以下类型定义。

#### initialize()

`ESerror_t initialize (SoHObject hObject, int argc, TaggedData* argv);`

##### 描述

必需。当 JavaScript 代码使用 `new` 操作符实例化此类时调用：

```javascript
var xx = New MyClass(arg1, ...)
```

初始化函数通常向对象添加属性和方法。同一类的对象可以提供不同的属性和方法，您可以使用存储的 `SoServerInterface` 中的 [addMethod()](#addmethod) 和 [addProperty()](#addproperty) 函数添加这些属性和方法。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hObject` | 此类实例的 [支持结构](#support-structures) 引用。 |
| `argc, argv` | 传递给构造函数的参数数量和指针，以 [TaggedData](#taggeddata) 的形式传递。 |

##### 返回值

返回错误代码，成功时返回 `kESErrOK`。

---

#### put()

`ESerror_t put (SoHObject hObject, SoCClientName* name, TaggedData* pValue);`

##### 描述

当 JavaScript 代码设置此类的属性时调用：

```javascript
xx.myproperty = "abc" ;
```

如果为此函数提供 `NULL`，则 JavaScript 对象为只读。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hObject` | 此类实例的 [支持结构](#support-structures) 引用。 |
| `name` | 属性名称，指向 [SoCClientName](#socclientname) 的指针。 |
| `pValue` | 新值，指向 [TaggedData](#taggeddata) 的指针。 |

##### 返回值

返回错误代码，成功时返回 `kESErrOK`。

---

#### get()

`ESerror_t get (SoHObject hObject, SoCClientName* name, TaggedData* pValue);`

##### 描述

当 JavaScript 代码访问此类的属性时调用：

```javascript
alert(xx.myproperty);
```

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hObject` | 此类实例的 [支持结构](#support-structures) 引用。 |
| `name` | 属性名称，指向 [SoCClientName](#socclientname) 的指针。 |
| `pValue` | 用于返回属性值的缓冲区，类型为 [TaggedData](#taggeddata)。 |

##### 返回值

返回错误代码，成功时返回 `kESErrOK`。

---

#### call()

`ESerror_t call (SoHObject hObject, SoCClientName* name, int argc, TaggedData* argv, TaggedData* pResult);`

##### 描述

当 JavaScript 代码调用此类的方法时调用：

```javascript
xx.mymethod()
```

必需，以便 JavaScript 调用此类的任何方法。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hObject` | 此类实例的 [支持结构](#support-structures) 引用。 |
| `name` | 属性名称，指向 [SoCClientName](#socclientname) 的指针。 |
| `argc, argv` | 传递给调用的参数数量和指针，以 [TaggedData](#taggeddata) 的形式传递。 |
| `pResult` | 用于返回调用结果的缓冲区，以 [TaggedData](#taggeddata) 的形式传递。 |

##### 返回值

返回错误代码，成功时返回 `kESErrOK`。

---

#### valueOf()

`ESerror_t valueOf (SoHObject hObject, TaggedData* pResult);`

##### 描述

创建并返回对象的值，不进行类型转换。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hObject` | 此类实例的 [支持结构](#support-structures) 引用。 |
| `pResult` | 用于返回值的缓冲区，以 [TaggedData](#taggeddata) 的形式传递。 |

##### 返回值

返回错误代码，成功时返回 `kESErrOK`。

---

#### toString()

`ESerror_t toString (SoHObject hObject, TaggedData* pResult);`

##### 描述

创建并返回表示此对象值的字符串。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hObject` | 此类实例的 [支持结构](#support-structures) 引用。 |
| `pResult` | 用于返回字符串结果的缓冲区，以 [TaggedData](#taggeddata) 的形式传递。 |

##### 返回值

返回错误代码，成功时返回 `kESErrOK`。

---

#### finalize()

`ESerror_t finalize (SoHObject hObject);`

##### 描述

必需。当 JavaScript 删除此类的实例时调用。

使用此函数释放已分配的内存。

##### 参数

| 参数 | 描述 |
| --- | --- |
| `hObject` | 此类实例的 [支持结构](#support-structures) 引用。 |

##### 返回值

返回错误代码，成功时返回 `kESErrOK`。

---

## 支持结构

这些支持结构会传递给为 JavaScript 接口定义的函数：

#### 参数

| 参数 | 描述 |
| --- | --- |
| `SoHObject` | 指向 JavaScript 对象的 C/C++ 表示形式的不透明指针 `(long *)`。 |
| `SoHServer` | 指向服务器对象的不透明指针 `(long *)`，该对象充当共享库的对象工厂。 |
| `SoCClientName` | 唯一标识方法和属性的结构。 |
| `TaggedData` | 封装带有类型信息的数据值的结构，用于在 C/C++ 和 JavaScript 之间传递。 |

### SoCClientName

`SoCClientName` 数据结构存储由共享库 C/C++ 代码创建的 JavaScript 对象的方法和属性的标识信息。其定义如下：

```cpp
SoCClientName {
 char* name_sig ;
 uint32_t id ;
 char* desc ;
}
```

#### 参数

| 参数 | 描述 |
| --- | --- |
| `name_sig` | 属性或方法的名称，在类内唯一。可选地包含下划线后的签名，用于标识方法的参数类型；请参阅函数签名。当名称传递回您的 `SoObjectInterface` 函数时，签名部分会被省略。 |
| `id` | 属性或方法的唯一标识号，或 0 以分配生成的 UID。如果您分配 UID，您的 C/C++ 代码可以使用它来避免在识别 JavaScript 属性和方法时进行字符串比较。建议您要么显式分配所有 UID，要么允许它们全部生成。 |
| `desc` | 描述性字符串或 `NULL`。 |

---

### TaggedData

`TaggedData` 结构用于在 JavaScript 和共享库 C/C++ 代码之间传递数据值。类型会根据需要自动转换：

```cpp
typedef struct {
 union {
 long intval;
 double fltval;
 char* string;
 SoHObject* hObject;
 } data;
 long type;
 long filler;
} TaggedData;
```

#### 参数

| 参数 | 描述 |
| --- | --- |
| `intval` | 整数和布尔数据值。类型为 `kTypeInteger`、`kTypeUInteger` 或 `kTypeBool`。 |
| `fltval` | 浮点数值数据值。类型为 `kTypeDouble`。 |
| `string` | 字符串数据值。所有字符串均为 UTF-8 编码并以 null 结尾。类型为 `kTypeString` 或 `kTypeScript`。 |
| | - 库必须定义一个入口函数 [ESFreeMem()](../defining-entry-points-for-direct-access#esfreemem)，ExtendScript 调用该入口函数以释放返回的字符串指针。如果缺少此入口函数，ExtendScript 不会尝试释放任何返回的字符串数据。 |
| | - 当函数返回类型为 `kTypeScript` 的字符串时，ExtendScript 会评估该脚本并返回评估结果作为函数调用的结果。 |
| `hObject` | JavaScript 对象数据值的 C/C++ 表示形式。类型为 `kTypeLiveObject` 或 `kTypeLiveObjectRelease`。 |
| | - 当函数返回类型为 `kTypeLiveObject` 的对象时，ExtendScript 不会释放该对象。 |
| | - 当函数返回类型为 `kTypeLiveObjectRelease` 的对象时，ExtendScript 会释放该对象。 |
| `type` | 数据类型标签。以下之一： |
| | - `kTypeUndefined`：空值，相当于 JavaScript 的 `undefined`。函数的返回值默认始终设置为该值。 |
| | - `kTypeBool`：布尔值，0 表示 `false`，1 表示 `true`。 |
| | - `kTypeDouble`：64 位浮点数。 |
| | - `kTypeString`：字符字符串。 |
| | - `kTypeLiveObject`：指向对象内部表示形式（SoHObject）的指针。 |
| | - `kTypeLiveObjectRelease`：指向对象内部表示形式（SoHObject）的指针。 |
| | - `kTypeInteger`：32 位有符号整数值。 |
| | - `kTypeUInteger`：32 位无符号整数值。 |
| | - `kTypeScript`：包含可执行 JavaScript 脚本的字符串。 |
| `filler` | 用于 8 字节对齐的 4 字节填充。 |
