---
title: detailintrinsic
order: 19
---
固有属性（Intrinsic values）类似于普通属性，但由Houdini按需计算而非存储。

`<type> detailintrinsic(<geometry>geometry, string intrinsic_name)`

`<type>[] detailintrinsic(<geometry>geometry, string intrinsic_name)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，该参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定几何文件（例如 `.bgeo`）的字符串。在Houdini内部运行时，可以是 `op:/path/to/sop`引用。

`intrinsic_name`

要读取的固有属性名称。例如 `"pointattributes"`、`"pointcount"`或 `"bounds"`。

返回值

固有属性值，如果给定固有属性不存在则返回 `0`。
