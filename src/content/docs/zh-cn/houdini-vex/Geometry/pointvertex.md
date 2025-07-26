---
title: pointvertex
order: 22
---
`int  pointvertex(<geometry>geometry, int point_num)`

此函数用于查找共享该点的第一个顶点的线性顶点编号。
然后可以使用 [vertexnext](/zh-cn/houdini-vex/geometry/vertexnext "返回与给定顶点共享点的下一个顶点的线性顶点编号。") 遍历该点上的其他顶点。

`<geometry>`

在节点上下文（如 wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如 `.bgeo`）的字符串。在Houdini内部运行时，可以是 `op:/path/to/sop` 引用。

返回值

返回共享该点的第一个顶点的线性顶点编号。
如果没有顶点共享该点，则返回 `-1`。

## 示例

```vex
int vtx;

// 获取点3的线性顶点编号
vtx = pointvertex("defgeo.bgeo", 3);

```
