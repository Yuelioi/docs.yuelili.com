---
title: osd_lookuppatch
order: 6
---
`int  osd_lookuppatch(<geometry>geometry, int face_id, float face_u, float face_v, int &patch_id, float &patch_u, float &patch_v)`

如果不指定纹理属性，该函数将使用多边形固有插值。

`int  osd_lookuppatch(<geometry>geometry, int face_id, float face_u, float face_v, int &patch_id, float &patch_u, float &patch_v, string attribute)`

如果指定了纹理属性，该函数将使用该属性中的UV坐标将面坐标转换到OSD补丁上。

给定面ID(`face_id`)和面内点的纹理坐标(`face_u`和`face_v`)，此函数将返回对应的补丁ID(`patch_id`，即Catmull-Clark细分面)和补丁插值(`patch_u`和`patch_v`)。从补丁映射回面的反向函数是[osd_lookupface](/zh-cn/houdini-vex/subdivision-surfaces/osd_lookupface "输出给定OSD补丁坐标对应的Houdini面和UV坐标")。

`<geometry>`

在节点上下文(如wrangle SOP)中运行时，此参数可以是表示输入编号(从0开始)的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件(例如`.bgeo`)的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`face_id`

Houdini多边形面的基元编号。

`face_u`, `face_v`

要映射到Houdini基元上的细分补丁中的坐标。
这些值应在0到1范围内。并非所有值对三角形都有效。
纹理坐标应根据传入的属性指定。
如果传入无效坐标，函数将失败并返回`0`。

`&patch_id`

函数会用对应的OSD补丁编号覆盖此变量。
这也是执行PTex纹理映射时用于标识面的整数值。

`&patch_u`, `&patch_v`

函数会用OSD补丁上对应的U/V坐标覆盖这些变量。

返回值

成功时返回`1`，错误时返回`0`。

## 示例

```vex
// 此函数可用于将scatter SOP生成的点移动到细分极限曲面。
// scatter SOP需要存储"sourceprim"(在输出属性选项卡中)。
// 还需要从源几何体传输纹理坐标。
void
movePointToLimitSurface(string file; vector P, uv; int sourceprim)
{
 int patch_id = -1;
 float patch_u, patch_v;
 if (osd_lookuppatch(file, sourceprim, uv.x, uv.y,
 patch_id, patch_u, patch_v, "uv"))
 {
 vector tmpP;
 if (osd_limitsurface(file, "P", patch_id, patch_u, patch_v, tmpP))
 P = tmpP;
 }
}

```
