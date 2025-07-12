---
title: pointhedge
order: 19
---
`int  pointhedge(<geometry>geometry, int point)`

`int  pointhedge(<geometry>geometry, int srcpoint, int dstpoint)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`point`

几何体中作为返回半边源点的点编号。`0`表示第一个点。

`srcpoint`, `dstpoint`

几何体中作为返回半边的源点和目标点的点编号。`0`表示第一个点。

返回值

返回以`point`为源点，或以`srcpoint`为源点、`dstpoint`为目标点的半边编号。
在前一种情况下，可以使用`op:pointhedgenext`枚举所有以`point`为源点的半边。
如果半边无效则返回`-1`。

## 示例

```vex
int edge_count = 0;

// 计算与23号点相连的*边*数（非半边）
int hout = pointhedge("defgeo.bgeo", 23);
while ( hout != -1 )
{
 if (hedge_isprimary("defgeo.bgeo", hout))
 edge_count++;
 int hin = hedge_prev("defgeo.bgeo", hout);
 if (hedge_isprimary("defgeo.bgeo", hin))
 edge_count++;
 hout = pointhedgenext("defgeo", hout);
};

```
