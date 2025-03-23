---
title: 加载和使用共享库
---
# 加载和使用共享库

要将外部共享库加载到 JavaScript 中，需要创建一个新的 [ExternalObject 对象](../externalobject-object)。该实例充当 JavaScript 与库之间接口的容器和管理器。它提供了一个日志工具，可以将状态信息打印到 ExtendScript Toolkit 中的 JavaScript 控制台，以帮助您调试外部库的使用。

一旦库被加载，其导出的符号将对 JavaScript 可用。在 JavaScript 代码中，您可以直接在 `ExternalObject` 实例中调用库中定义的函数，或者通过库定义的对象类型间接调用。

---

## 通过 ExternalObject 实例直接访问库调用

对于 C 语言库，使用直接访问方式。对于 C 库中定义的每个函数，ExternalObject 对象中都有一个对应的方法。您可以将数据传递给这些方法并直接接收返回值。

例如：

```javascript
mylib = new ExternalObject ("lib:" + samplelib); // 加载库
alert(mylib.version) ;
// 直接从 ExternalObject 实例访问函数
var a = mylib.method_abc(1,2.0,true, "this is data") ;
alert(a) ;
mylib.unload() ;
```

有关如何定义函数以通过 ExternalObject 对象直接访问的详细信息，请参阅 [定义直接访问的入口函数](.././defining-entry-points-for-direct-access)。

---

## 通过 JavaScript 类间接访问库调用

使用间接方式访问 C++ 库中定义的类。对于库中定义的每个 C++ 类，会自动定义一个对应的 JavaScript 类，您可以通过该类的实例访问属性和方法。

例如：

```javascript
anotherlib= new ExternalObject ("lib:" + filespec); // 加载库
alert(anotherlib.version) ;
// 实例化库定义的类
var myObject = new MyNewClass() ;
// 从实例访问函数
var a = myObject.method_abc(1,2.0,true,"this is data") ;
alert(a) ;
anotherlib.unload() ;
```

有关如何定义函数以通过 ExternalObject 对象间接访问的详细信息，请参阅 [定义间接访问的入口函数](.././defining-entry-points-for-indirect-access)。
