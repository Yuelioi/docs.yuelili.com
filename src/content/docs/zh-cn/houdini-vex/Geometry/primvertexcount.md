---
title: primvertexcount
order: 29
---
`int  primvertexcount(<geometry>geometry, int prim_num)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，该参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim_num`

要统计顶点的基元编号。

返回值

给定基元中的顶点数量，如果基元不存在则返回`-1`。

## 示例

```vex
int nvtx;

// 获取3号基元的顶点数量
nvtx = primvertexcount("defgeo.bgeo", 3);

```
