---
title: pointedge
order: 18
---
`int  pointedge(<geometry>geometry, int point1, int point2)`

如果不存在这样的半边（half-edge），则返回 `-1`。否则返回一个半边的编号，该半边要么以 `point1` 为起点，要么以 `point2` 为终点，或者反之。

`<geometry>`

在节点（如 wrangle SOP）上下文中运行时，此参数可以是一个整数，表示要读取几何体的输入编号（从 0 开始）。

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如 `.bgeo`）。在 Houdini 内部运行时，可以是 `op:/path/to/sop` 引用。

`point1`, `point2`

几何体中返回半边的两个端点的点编号。`0` 表示第一个点。

## 示例

```vex
int edge_count = 0;

// 判断点 23 和 25 之间是否存在边：
int h0 = pointedge("defgeo.bgeo", 23, 25);
if (h0 != -1)
{
// 边存在！
}

```
