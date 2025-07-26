---
title: addprim
order: 2
---

`int  addprim(int geohandle, string type)`

创建一个不含任何点的多边形或多段线。之后可以使用[addvertex](/zh-cn/houdini-vex/geometry/addvertex "向几何体中的图元添加顶点")为图元添加顶点。

请确保至少为创建的图元添加一个顶点。虽然我们尽力确保Houdini的代码能够处理空多边形，但它们仍可能导致异常结果或错误。

`int  addprim(int geohandle, string type, int pt0)`

`int  addprim(int geohandle, string type, int pt0, int pt1)`

`int  addprim(int geohandle, string type, int pt0, int pt1, int pt2)`

`int  addprim(int geohandle, string type, int pt0, int pt1, int pt2, int pt3)`

`int  addprim(int geohandle, string type, int pt0, int pt1, int pt2, int pt3, int pt4, int pt5, int pt6, int pt7)`

使用点编号指定的点创建图元。

`int  addprim(int geohandle, string type, int points[])`

使用点编号数组创建图元。

`void  addprim(int &prim_num, int geohandle, string type, int pt0, int &vertices[])`

`void  addprim(int &prim_num, int geohandle, string type, int pt0, int pt1, int &vertices[])`

`void  addprim(int &prim_num, int geohandle, string type, int pt0, int pt1, int pt2, int &vertices[])`

`void  addprim(int &prim_num, int geohandle, string type, int pt0, int pt1, int pt2, int pt3, int &vertices[])`

`void  addprim(int &prim_num, int geohandle, string type, int pt0, int pt1, int pt2, int pt3, int pt4, int pt5, int pt6, int pt7, int &vertices[])`

`void  addprim(int &prim_num, int geohandle, string type, int points[], int &vertices[])`

这些函数签名会将新图元对应给定点的顶点编号填充到指定的`vertices`数组中。您可以使用[setvertexattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/setvertexattrib "设置几何体中顶点属性")通过这些编号设置顶点属性，但这些编号可能不是顶点的最终编号。

如果图元创建成功但某些点无效，数组中对应的顶点编号将为`-1`。

这些函数签名会将新图元编号覆盖到`primnum`变量中，而不是返回它。

`geohandle`

要写入的几何体句柄。目前唯一有效的值是`0`或[geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄")，表示节点中的当前几何体。(此参数未来可能用于支持写入其他几何体。)

`type`

以下字符串之一：

| `"poly"` | 闭合多边形。可使用0个或多个点。 |
| --- | --- |
| `"polyline"` | 开放多边形。可使用0个或多个点。 |
| `"tet"` | 四面体图元。三角锥体。需要恰好4个点。无法为此图元添加顶点。 |
| "hex" | 六面体图元。变形立方体。需要恰好8个点。无法为此图元添加顶点。 |
| `"sphere"`, `"circle"`, `"tube"`, `"metaball"`, `"metasquad"` | 球体、圆形、管状体、元球或元超二次曲面图元。半径和形状由变换图元固有属性控制。需要恰好1个点。无法为这些图元添加顶点。 |
| `"channel"` | 通道图元。在图元中存储通道数据。可使用0个或多个点。 |
| `"AlembicRef"`, `"PackedDisk"` | 打包的Alembic或打包磁盘图元。需要恰好1个点。无法为这些图元添加顶点。 |

返回值

创建的图元的编号，如果无法创建则返回`-1`。

您可以使用返回值通过[setprimattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/setprimattrib "设置几何体中图元属性")为新点设置属性，但这可能不是该点的最终编号。

您可以使用[setprimintrinsic](/zh-cn/houdini-vex/attributes-and-intrinsics/setprimintrinsic "设置可写图元固有属性的值")设置图元的变换，例如：

```vex
matrix3 transform_value = {{0, 0, 0}, {0, 0, 0}, {1, 1, 1}};
setprimintrinsic(geoself(), "transform", prim, transform_value);

```

您也可以设置Alembic和打包图元的固有属性，例如：

```vex
setprimintrinsic(geoself(), "unexpandedfilename", prim, "test.bgeo");`

```
