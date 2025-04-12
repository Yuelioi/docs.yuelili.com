---
title: primvertex
order: 28
---
`int  primvertex(<geometry>geometry, int primnum, int vertex)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数也可以是一个指定几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`这样的引用路径。

`primnum`

要获取顶点的基元编号。

`vertex`

基元内部的顶点编号。0表示第一个顶点。

返回值

返回与给定基元顶点对应的线性顶点索引。
如果函数无法找到线性顶点索引，则返回`-1`。

## 示例

```vex
int linearvtx;

// 获取基元3中顶点2的线性顶点值
linearvtx = primvertex("defgeo.bgeo", 3, 2);

```
