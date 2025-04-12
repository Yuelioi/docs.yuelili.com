---
title: hedge_isvalid
order: 6
---
`int  hedge_isvalid(<geometry>geometry, int hedge)`

`<geometry>`

在节点上下文（例如 wrangle SOP）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`hedge`

表示半边（half-edge）的整数。

返回值

如果`hedge`在引用的几何体中表示有效的半边，则返回`1`，否则返回`0`。

## 示例

```vex
int srcpt;

// 如果半边编号3有效，则查找其源点
if (hedge_isvalid("defgeo.bgeo", 3))
srcpt = hedge_srcpoint("defgeo.bgeo", 3);

```
