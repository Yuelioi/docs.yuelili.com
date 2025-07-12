---
title: 与Flash应用程序通信
---
# 与Flash应用程序通信

ScriptUI支持Flash Player，它可以在Adobe应用程序的窗口中运行Flash应用程序。Flash应用程序运行ActionScript，这是与Adobe应用程序运行的ExtendScript版本的JavaScript不同的JavaScript实现。

要打开Flash Player，请在您的ScriptUI窗口中添加一个类型为[FlashPlayer](../types-of-controls#flashplayer)的控件。这种类型的控件对象包含允许您的脚本加载SWF文件并控制电影播放的功能。它还包含允许您的Adobe应用程序脚本与Flash应用程序的ActionScript环境通信的功能。请参阅[FlashPlayer控件函数](../control-objects#flashplayer-control-functions)。

可以在两个脚本环境之间传递有限的数据类型：

- 数字
- 字符串
- 布尔值
- `null`
- `undefined`
- 对象
- 数组

ActionScript的`class`和`date`对象不支持作为参数值。

在Flash应用程序的ActionScript脚本中，您必须通过提供对External API的访问来准备双向通信。为此，请将`ExternalInterface`类导入到您的Flash应用程序中：

```actionscript
import flash.external.ExternalInterface;
```

---

## 从ActionScript调用ExtendScript函数

ActionScript的`ExternalInterface`类允许您调用在Adobe应用程序脚本中定义的`FlashPlayer`元素中的ExtendScript函数，并在ActionScript环境中运行它。您必须在[FlashPlayer](../types-of-controls#flashplayer)元素中定义一个具有匹配函数名称的方法。

例如，为了让SWF代码调用名为`myExtendScriptFunction`的ExtendScript函数，请将名为`myExtendScriptFunction`的函数定义为`FlashPlayer`控件对象的方法。函数名称没有特殊要求，但函数必须仅接受和返回支持类型的数据。

您不需要在ActionScript环境中注册ExtendScript函数。您的ActionScript脚本可以直接使用`ExternalInterface.call()`方法调用外部函数：

```javascript
var res = ExternalInterface.call( "myJavaScriptFunction" );
```

当Flash Player执行ExternalInterface调用时，ScriptUI会查找与FlashPlayer元素方法同名的函数，并使用指定的参数调用它。在函数的上下文中，JavaScript的`this`对象指的是`FlashPlayer`对象。

---

## 从ScriptUI脚本调用ActionScript函数

在ExtendScript端，使用`FlashPlayer`方法[invokePlayerFunction()](../control-objects#invokeplayerfunction)来调用在Flash应用程序中定义的ActionScript方法：

```javascript
var result = flashElement.invokePlayerFunction( "ActionScript_function_name", [ arg1, ..., argN ] );
```

您可以使用可选参数将数据（支持的类型）传递给ActionScript方法。

在从Adobe应用程序脚本调用任何ActionScript函数之前，您的Flash应用程序必须将该函数注册到`ExternalInterface`对象，作为Flash容器的回调。要注册函数，请使用`ExternalInterface.addCallback()`方法：

```actionscript
public static addCallback(methodName:String, instance:Object, method:Function);
```

这将注册一个在Adobe应用程序脚本中定义的名为`getActionScriptArray()`的函数：

```javascript
ExternalInterface.addCallback( "getActionScriptArray", this, getActionScriptArray );
```

---

## Flash示例

[Adobe ExtendScript SDK](https://github.com/Adobe-CEP/CEP-Resources/tree/master/ExtendScript-Toolkit)中的这些示例演示了如何使用Flash Player：

| 示例 | 描述 |
| --- | --- |
| [UsingFlashPlayer.jsx](https://github.com/Adobe-CEP/CEP-Resources/blob/master/ExtendScript-Toolkit/Samples/javascript/UsingFlashPlayer.jsx) | 展示如何创建Flash® Player，并使用它加载并播放SWF文件中定义的电影。 |
| [ActionScriptDemo.jsx](https://github.com/Adobe-CEP/CEP-Resources/blob/master/ExtendScript-Toolkit/Samples/javascript/ActionScriptDemo.jsx) | 展示如何在Adobe应用程序脚本环境和Flash Player的ActionScript™脚本环境之间进行通信。 |
