---
title: hedge_dstvertex
order: 2
---
`int  hedge_dstvertex(<geometry>geometry, int hedge)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，该参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`hedge`

输入半边。

返回值

半边目标顶点的顶点编号，如果半边无效则返回`-1`。

## 示例

```vex
int dstvtx;

// 获取编号为3的半边的目标顶点
dstvtx = hedge_dstvertex("defgeo.bgeo", 3);

```
