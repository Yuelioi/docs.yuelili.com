---
title: hedge_postdstvertex
order: 10
---
`int  hedge_postdstvertex(<geometry>geometry, int hedge)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何体文件（例如`.bgeo`文件）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`hedge`

输入半边。

返回值

返回包含半边`hedge`的图元中，该半边目标顶点之后的下一个顶点的顶点编号。
如果半边无效，则返回`-1`。

## 示例

```vex
int postdstvtx;

// 获取半边3的目标顶点之后的下一个顶点编号
postdstvtx = hedge_postdstvertex("defgeo.bgeo", 3);

```
