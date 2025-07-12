---
title: 布局管理对象
---
# LayoutManager 对象

控制窗口或容器的自动布局行为。子类 `AutoLayoutManager` 实现了默认的自动布局行为。

## AutoLayoutManager 对象构造函数

使用 `new` 操作符创建 `AutoLayoutManager` 类的实例：

```javascript
myWin.layout = new AutoLayoutManager( myWin );
```

当您创建 `Window` 或容器（`group` 或 `panel`）对象时，会自动创建一个实例，并通过容器的 [layout](../window-object#layout) 属性引用。除非您覆盖它，否则此实例将实现默认的布局行为。

## AutoLayoutManager 对象属性

默认对象没有预定义的属性，但脚本可以为其创建的对象分配任意属性，以存储脚本定义的布局算法所需的数据。

## AutoLayoutManager 对象函数

### layout()

`windowObj.layout.layout( recalculate )`

#### 描述

调用托管容器的自动布局行为。根据父容器和子元素的放置和对齐属性值，调整此窗口或容器的子元素的大小和位置。

在窗口首次显示时自动调用。之后，如果父容器或子元素的大小或位置发生变化，脚本必须显式调用它以更改布局。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `recalculate` | Boolean | 可选。当为 `true` 时，强制布局管理器重新计算此容器及任何子容器的大小。默认值为 `false`。 |

#### 返回

无

---

### resize()

`windowObj.layout.resize()`

#### 描述

在用户或脚本调整容器大小后，根据容器每个子元素的对齐值，调整托管容器的子元素的大小和位置。

有关对齐如何影响元素大小和位置的详细信息，请参阅 [自动布局](../automatic-layout)。

#### 返回

无
