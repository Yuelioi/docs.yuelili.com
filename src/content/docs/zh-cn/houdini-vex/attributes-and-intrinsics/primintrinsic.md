---
title: primintrinsic
order: 53
---

固有值（Intrinsic values）类似于属性，但由Houdini按需计算而非存储。

`<type> primintrinsic(<geometry>geometry, string intrinsic_name, int prim_num)`

`<type>[] primintrinsic(<geometry>geometry, string intrinsic_name, int prim_num)`

固有值类似于属性，但由Houdini按需计算而非存储。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，该参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`intrinsic_name`

要读取的固有值名称。例如`"pointattributes"`、`"pointcount"`或`"bounds"`。

`prim_num`

要读取给定固有属性的图元编号。

返回值

固有属性的值，如果固有属性不存在则返回`0`。
