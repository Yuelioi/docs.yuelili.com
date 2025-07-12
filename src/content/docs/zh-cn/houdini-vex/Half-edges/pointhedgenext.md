---
title: pointhedgenext
order: 20
---
`int  pointhedgenext(<geometry>geometry, int point)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于指定从哪个输入读取几何体。

或者，该参数也可以是一个指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`形式的引用。

`point`

几何体中的点编号。`0`表示第一个点。

返回值

返回与`hedge`具有相同源点的下一条半边。

连续调用此函数可以遍历从同一点出发的所有出站半边。
注意遍历顺序不一定与流形设置中围绕某点的边顺序一致。

如果`hedge`无效，或者没有更多与该半边源点共享的顶点时返回`-1`（与`op:vertexnext`行为相同）。

## 示例

```vex
int edge_count = 0;

// 计算与23号点关联的*边*数（不是半边数）
int hout = pointhedge("defgeo.bgeo", 23);
while ( hout != -1 )
{
 if (hedge_isprimary("defgeo.bgeo", hout))
 edge_count++;
 int hin = hedge_prev("defgeo.bgeo", hout);
 if (hedge_isprimary("defgeo.bgeo", hin))
 edge_count++;
 hout = pointhedgenext("defgeo", hout);
}

```
