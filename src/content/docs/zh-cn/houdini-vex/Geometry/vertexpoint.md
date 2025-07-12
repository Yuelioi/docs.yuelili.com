---
title: vertexpoint
order: 42
---
`int  vertexpoint(<geometry>geometry, int linearvertex)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号的整数（从0开始），用于读取几何体。

或者，该参数也可以是一个指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`形式的引用。

`linearvertex`

线性顶点编号。可以使用`vertexindex`函数通过基元编号和顶点编号对来计算线性顶点。

返回值

与该顶点关联的点编号，如果该顶点没有关联点则返回`-1`。

## 示例

```vex
int pt;

// 获取顶点3对应的点
pt = vertexpoint("defgeo.bgeo", 3);

```
