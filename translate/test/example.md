---
title: javascript
---
# Elements of basic JavaScript relevant to After Effects scripting

## Javascript Variables

脚本共享一个全局环境，因此任何在启动时执行的脚本都可以定义变量和函数，这些变量和函数对所有脚本都可用。

### Table Testing

| Keyword/Statement | 描述                                                       |
| ----------------- | ---------------------------------------------------------- |
| `break`         | Standard JavaScript; exit the currently executing loop.    |
| `continue`      | JavaScript; cease execution of the current loop iteration. |
| `case`          | Label used in a `switch` statement.                      |

---

### 描述 of Operators

### Class Inheritance

For example, "automobile" could be one base class, with "cars" being a subclass of the "automobile" base class, with "sedan" and "convertible" being two subclasses of the "car" base class.

### Class Inheritance in After Effects

```js
// example of class inheritance in After Effects
const automobile = new Class("automobile");
const car = new Class("car", automobile);
const sedan = new Class("sedan", car);
// this is equivalent to:
// const sedan = new Class("sedan");

```

For the same example above, [Layer object](../../layer/layer) (itself a subclass of [PropertyGroup object](../../property/propertygroup)) is the *base class* for [AVLayer object](../../layer/avlayer), [CameraLayer object](../../layer/cameralayer), and [LightLayer object](../../layer/lightlayer).

1. **嵌套列表结构**
   * good
     * nested item 1
     * nested item 2
       * 未完成项
       * finished `item` 1

:::warning
In a few specific cases, properties & methods are **removed** with inheritance, not just added. Those cases are noted on the relevant object page. `bool`, `int`, `double`, `string`, `enum`, and `list` properties are removed with inheritance.
:::
