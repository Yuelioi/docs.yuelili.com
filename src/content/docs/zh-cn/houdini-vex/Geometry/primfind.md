---
title: primfind
order: 25
---
`int [] primfind(<geometry>geometry, vector min, vector max)`

查找所有边界框与给定框重叠的图元。

`int [] primfind(<geometry>geometry, string group, vector min, vector max)`

查找指定组中所有边界框与给定框重叠的图元。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，该参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`min`, `max`

这两个向量定义了要搜索的边界框的最小和最大角点。

`group`

如果指定，则只匹配该组中的图元。
空组字符串将包含所有图元。
字符串支持临时模式，如`0-10`和`@Cd.x>0`。

返回值

图元编号数组。

注意
这些函数旨在作为优化手段，用于查找特定区域中待处理的图元。例如，要查找一个输入中与另一个输入中的多边形相交的所有曲线，我们可能会天真地遍历所有多边形来确定它们的交点。为了加速这个过程，我们可以使用这些函数找到可能与特定曲线相交的图元，并仅遍历可能相交的图元。这显著提高了性能，因为`primfind`使用底层树结构来加速搜索。

## 示例

移除可能与原点为中心的单位框相交的图元：

```vex
int[] prims = primfind(geometry, {-0.5, -0.5, -0.5}, {0.5, 0.5, 0.5});
foreach ( int prim; prims )
{
 removeprim("primitives.bgeo", prim, 1);
}

```

或者，我们可以使用辅助源的查询边界框：

```vex
vector min, max;
getbbox("bbox.bgeo", min, max);
int[] prims = primfind(geometry, min, max);
foreach ( int prim; prims )
{
 removeprim("primitives.bgeo", prim, 1);
}

```

要了解`primfind`的性能优势，可以将其与以下等效实现进行比较：

```vex
float tol = 1e-5;
vector min, max;
getbbox("bbox.bgeo",min,max);
int n = nprimitives(0);
for ( int prim = 0; prim < n; ++prim )
{
 int[] verts = primvertices("primitives.bgeo", prim);

 // 计算图元边界框并存储在prim_min和prim_max中
 vector vert_pos = point("primitives.bgeo", "P", vertexpoint("primitives.bgeo", verts[0]));
 vector prim_min = vert_pos, prim_max = vert_pos;
 for ( int v = 1; v < len(verts); ++v )
 {
 vert_pos = point("primitives.bgeo", "P", vertexpoint("primitives.bgeo", verts[v]));
 prim_min = min(prim_min, vert_pos);
 prim_max = max(prim_max, vert_pos);
 }

 // 边界框相交测试
 if ( prim_max.x - min.x < -tol ) continue;
 if ( prim_max.y - min.y < -tol ) continue;
 if ( prim_max.z - min.z < -tol ) continue;
 if ( prim_min.x - max.x > tol ) continue;
 if ( prim_min.y - max.y > tol ) continue;
 if ( prim_min.z - max.z > tol ) continue;
 removeprim("primitives.bgeo", prim, 1);
}

```
