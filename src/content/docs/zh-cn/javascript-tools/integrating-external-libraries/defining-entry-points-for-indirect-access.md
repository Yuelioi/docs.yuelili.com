---
title: 定义间接访问的入口点
---
# 定义间接访问的入口点

用于外部库的 C 客户端对象接口允许您的 C 或 C++ 共享库代码定义、创建、使用和管理 JavaScript 对象。

---

## 入口点

如果您希望使用对象接口，则需要以下入口点：

### ESClientInterface()

`int ESClientInterface (SoCClient_e kReason, SoServerInterface* pServer, SoHServer hServer)`

#### 描述

您的库必须定义此全局函数才能使用 JavaScript 的对象接口。该函数在每个会话中调用两次，一次是在加载库时立即调用，另一次是在卸载库时调用。

#### 参数

| 参数 |                                                                                                         描述                                                                                                          |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `kReason` | 此调用的原因，以下常量之一：                                                                                                                                                                            |
|           | - `kSoCClient_init`: 函数在加载时被调用以进行初始化。                                                                                                                                              |
|           | - `kSoCClient_term`.: 函数在卸载时被调用以进行终止。                                                                                                                                              |
| `pServer` | 指向 [SoServerInterface](#soserverinterface) 的指针，包含入口点的函数指针，使共享库代码能够调用 JavaScript 以创建和访问 JavaScript 类和对象。 |
|           | 共享库代码负责在初始化和终止调用之间存储此结构，并在访问函数时检索它。                                                                |
| `hServer` | 此共享库的 [支持结构](#support-structures) 引用。服务器是一个对象工厂，用于创建和管理 [支持结构](#support-structures) 对象。                                  |
|           | 共享库代码负责在初始化和终止调用之间存储此结构。您必须将其传递给 [taggedDataInit()](#taggeddatainit) 和 [taggedDataFree()](#taggeddatafree)。         |

#### 返回

返回错误代码，成功时为 `kESErrOK`。

---

### ESMallocMem()

`void * ESMallocMem (size_t nbytes)`

#### 描述

提供 JavaScript 用于管理与库对象相关的内存的内存分配例程。

#### 参数

| 参数 |           描述            |
| --------- | -------------------------------- |
| `nbytes`  | 要分配的字节数。 |

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

| 参数 |                                                                                   描述                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hServer` | 此共享库的 [支持结构](#support-structures) 引用，作为初始化时传递给全局 [ESClientInterface()](#esclientinterface) 函数的参数。 |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### dumpObject()

`ESerror_t dumpObject (SoHObject hObject);`

##### 描述

将此对象的内容打印到 ExtendScript Toolkit 中的 JavaScript 控制台，用于调试。

##### 参数

| 参数 |                                      描述                                       |
| --------- | -------------------------------------------------------------------------------------- |
| `hObject` | 此类的实例的 [支持结构](#support-structures) 引用。 |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### addClass()

`ESerror_t addClass (SoHServer hServer, char* name, SoObjectInterface_p pObjectInterface);`

##### 描述

创建一个新的 JavaScript 类。

##### 参数

|     参数      |                                                                                   描述                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hServer`          | 此共享库的 [支持结构](#support-structures) 引用，作为初始化时传递给全局 [ESClientInterface()](#esclientinterface) 函数的参数。 |
| `name`             | 字符串。新类的唯一名称。名称必须以大写字母开头。                                                                           |
| `pObjectInterface` | 指向 [SoObjectInterface](#soobjectinterface) 的指针。包含此类的实例的对象接口方法的结构。                           |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### addMethod()

`ESerror_t addMethod (SoHObject hObject, const char* name, int id, char* desc);`

##### 描述

向实例添加新方法。

##### 参数

| 参数 |                                      描述                                       |
| --------- | -------------------------------------------------------------------------------------- |
| `hObject` | 此类的实例的 [支持结构](#support-structures) 引用。 |
| `name`    | 字符串。新方法的唯一名称。                                             |
| `id`      | 数字。新方法的唯一标识符。                                      |
| `desc`    | 字符串。新方法的描述性字符串。                                       |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### addMethods()

`ESerror_t addMethods (SoHObject hObject, SoCClientName_p pNames);`

##### 描述

向实例添加一组新方法。

##### 参数

| 参数  |                                                描述                                                |
| ---------- | --------------------------------------------------------------------------------------------------------- |
| `hObject`  | 此类的实例的 [支持结构](#support-structures) 引用。                    |
| `pNames[]` | [SoCClientName](#socclientname)。包含要添加的方法的名称和标识符的结构。 |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### addProperty()

`ESerror_t addProperty (SoHObject hObject, const char* name, int id, char* desc);`

##### 描述

向实例添加新属性。

##### 参数

| 参数 |                                      描述                                       |
| --------- | -------------------------------------------------------------------------------------- |
| `hObject` | 此类的实例的 [支持结构](#support-structures) 引用。 |
| `name`    | 字符串。新属性的唯一名称。                                           |
| `id`      | 数字。新属性的唯一标识符。                                    |
| `desc`    | 字符串。可选。新属性的描述性字符串，或 null。                  |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### addProperties()

`ESerror_t addProperties (SoHObject hObject, SoCClientName_p pNames);`

##### 描述

向实例添加一组新属性。

##### 参数

| 参数  |                                                 描述                                                  |
| ---------- | ------------------------------------------------------------------------------------------------------------ |
| `hObject`  | 此类的实例的 [支持结构](#support-structures) 引用。                       |
| `pNames[]` | [SoCClientName](#socclientname)。包含要添加的属性的名称和标识符的结构。 |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### getClass()

`ESerror_t getClass (SoHObject hObject, char* name, int name_l);`

##### 描述

检索此对象的父类名称。

##### 参数

| 参数 |                                      描述                                       |
| --------- | -------------------------------------------------------------------------------------- |
| `hObject` | 此类的实例的 [支持结构](#support-structures) 引用。 |
| `name`    | 字符串。用于返回类的唯一名称的缓冲区。                      |
| `name_1`  | 数字。名称缓冲区的大小。                                                   |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### getServer()

`ESerror_t getServer (SoHObject hObject, SoHServer* phServer, SoServerInterface_p* ppServerInterface);`

##### 描述

检索此对象的接口方法以及管理它的服务器对象。

##### 参数

|      参数      |                                             描述                                              |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| `hObject`           | 此类的实例的 [支持结构](#support-structures) 引用。               |
| `phServer`          | 用于返回此对象的 [支持结构](#support-structures) 引用的缓冲区。 |
| `ppServerInterface` | 用于返回此对象的 [SoObjectInterface](#soobjectinterface) 引用的缓冲区。   |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### setClientData()

`ESerror_t setClientData (SoHObject hObject, void* pData);`

##### 描述

设置要与对象一起存储的您自己的数据。

##### 参数

| 参数 |                                      描述                                       |
| --------- | -------------------------------------------------------------------------------------- |
| `hObject` | 此类的实例的 [支持结构](#support-structures) 引用。 |
| `pData`   | 指向库定义数据的指针。                                                 |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### getClientData()

`ESerror_t setClientData (SoHObject hObject, void** pData);`

##### 描述

检索与 [setClientData()](#setclientdata) 一起存储的数据。

##### 参数

| 参数 |                                      描述                                       |
| --------- | -------------------------------------------------------------------------------------- |
| `hObject` | 此类的实例的 [支持结构](#support-structures) 引用。 |
| `pData`   | 用于返回指向库定义数据的指针的缓冲区。                     |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### eval()

`ESerror_t eval (SohServer hServer, char* string, TaggedData* pTaggedData);`

##### 描述

调用 JavaScript 解释器以评估 JavaScript 表达式。

##### 参数

|   参数   |                                                                                   描述                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hServer`     | 此共享库的 [支持结构](#support-structures) 引用，作为初始化时传递给全局 [ESClientInterface()](#esclientinterface) 函数的参数。 |
| String        | 包含要评估的 JavaScript 表达式的字符串。                                                                                                                      |
| `pTaggedData` | 指向 [TaggedData](#taggeddata) 对象的指针，用于返回评估结果。                                                                                    |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### taggedDataInit()

`ESerror_t taggedDataInit (SoHSever hServer, TaggedData* pTaggedData);`

##### 描述

初始化 TaggedData 结构。

##### 参数

|   参数   |                                                                                   描述                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hServer`     | 此共享库的 [支持结构](#support-structures) 引用，作为初始化时传递给全局 [ESClientInterface()](#esclientinterface) 函数的参数。 |
| `pTaggedData` | 指向 [TaggedData](#taggeddata) 的指针。                                                                                                                                       |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

#### taggedDataFree()

`ESerror_t setClientData (SoHServer hServer, TaggedData* pTaggedData);`

##### 描述

释放 TaggedData 结构使用的内存。

##### 参数

|   参数   |                                                                                   描述                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hServer`     | 此共享库的 [支持结构](#support-structures) 引用，作为初始化时传递给全局 [ESClientInterface()](#esclientinterface) 函数的参数。 |
| `pTaggedData` | 指向 [TaggedData](#taggeddata) 的指针。                                                                                                                                       |

##### 返回

返回错误代码，成功时为 `kESErrOK`。

---

### SoObjectInterface

当您使用 SoServerInterface.addClass() 添加 JavaScript 类时，必须提供此接口。JavaScript 调用提供的函数以与新类的对象进行交互。

SoObjectInterface 是一个函数指针数组，定义如下：

```cpp
SoObjectInterface {
    SoObjectInitialize_f initialize;
    SoObjectPut_f        put;
    SoObjectGet_f        get;
    SoObjectCall_f       call;
    SoObjectValueOf_f    valueOf;
    SoObjectToString_f   toString;
    SoObjectFinalize_f   finalize;
}
```

所有 `SoObjectInterface` 成员必须是有效的函数指针，或 NULL。您必须实现 `initialize()` 和 `finalize()`。这些函数必须符合以下类型定义。

#### initialize()

`ESerror_t initialize (SoHObject hObject, int argc, TaggedData* argv);`

##### 描述

必需。当 JavaScript 代码使用 new 运算符实例化此类时调用：

```javascript
var xx = New MyClass(arg1, ...)
```

初始化函数通常向对象添加属性和方法。同一类的对象可以提供不同的属性和方法，您可以使用存储的 SoServerInterface 中的 [addMethod()](#addmethod) 和 [addProperty()](#addproperty) 函数添加这些属性和方法。

##### 参数

|  参数   |                                                 描述                                                 |