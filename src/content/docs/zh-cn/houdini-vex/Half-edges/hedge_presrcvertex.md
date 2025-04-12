---
title: hedge_presrcvertex
order: 12
---
`int  hedge_presrcvertex(<geometry>geometry, int hedge)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个整数，表示要读取几何体的输入编号（从0开始）。

或者，该参数也可以是一个指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`这样的引用路径。

`hedge`

输入的半边（half-edge）。

返回值

返回包含`hedge`的图元中，位于`hedge`源顶点之前的前一个顶点的顶点编号。
如果半边无效，则返回`-1`。

## 示例

```vex
int presrcvtx;

// 获取编号为3的半边的源顶点前一个顶点
presrcvtx = hedge_presrcvertex("defgeo.bgeo", 3);

```
