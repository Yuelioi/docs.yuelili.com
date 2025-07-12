---
title: 环境
---
# 环境对象

此全局对象可通过 [ScriptUI.environment](../scriptui-class#scriptuienvironment) 属性访问。

它定义了 ScriptUI 环境的属性，并且仅包含一个属性。

由于此对象仅包含一个属性（该属性本身是一个对象），因此所有相关文档都将包含在此页面中。

---

## 环境对象属性

以下元素属性专门适用于环境元素：

## 键盘状态对象

此 JavaScript 对象报告键盘在任何时间的活动状态；即当前按下的键以及任何按下的修饰键。

这与事件处理系统无关，这意味着在脚本中的任何时间，您都可以使用此对象检查是否按下了特定键（例如键盘修饰键），并因此触发替代操作。

它可通过 [ScriptUI.environment](../scriptui-class#scriptuienvironment) 对象访问：

```javascript
var myKeyState = ScriptUI.environment.keyboardState;
```

键盘状态对象包含以下属性：

---

### keyName

`ScriptUI.environment.keyboardState.keyName`

当前按下的键的名称。这是 JavaScript 名称，一个字符串，例如 `"A"` 或 `"a"`。

:::note

修饰键将报告 `undefined`；要获取这些键，请参阅 [shiftKey, ctrlKey, altKey, metaKey](#shiftkey-ctrlkey-altkey-metakey)
:::

#### 类型

字符串

#### 示例

例如，按下 'a' 时：

```javascript
var currentPressedKey = ScriptUI.environment.keyboardState.keyName;

alert(currentPressedKey); // "A"
```

---

### shiftKey, ctrlKey, altKey, metaKey

`ScriptUI.environment.keyboardState.shiftKey`

`ScriptUI.environment.keyboardState.ctrlKey`

`ScriptUI.environment.keyboardState.altKey`

`ScriptUI.environment.keyboardState.metaKey`

#### 描述

如果命名的修饰键当前处于活动状态，则为 `true`。

:::note
`metaKey` 捕获 `META` 和 `COMMAND` 键。
:::

#### 类型

布尔值

#### 示例

例如，检查在脚本执行期间是否按住了修饰键：

```javascript
var shiftHeld = ScriptUI.environment.keyboardState.shiftKey;

if (shiftHeld) {
 alert("用户按住了 Shift 键！");
}
```

或者检查键盘修饰键组合：

```javascript
var keyboardState = ScriptUI.environment.keyboardState;

if (keyboardState.shiftKey && keyboardState.altKey) {
 alert("Shift 和 Alt 键被按住！");
}
```

这也可以在界面按钮中使用，作为 [通过键盘事件检查修饰键](../event-handling#getmodifierstate) 的替代方案，除非您确信正确处理了事件状态，否则后者可能会更令人困惑且不太直观。

例如：

```javascript
button.onClick = function () {
 if (ScriptUI.environment.keyboardState.shiftKey) {
 // 此处为 'Shift' 键的特殊功能
 return;
 }

 // 此处为正常按钮行为
}
```
