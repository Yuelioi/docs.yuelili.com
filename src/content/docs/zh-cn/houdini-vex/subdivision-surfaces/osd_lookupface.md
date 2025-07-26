---
title: osd_lookupface
order: 5
---
`int  osd_lookupface(<geometry>geometry, int patch_id, float patch_u, float patch_v, int &face_id, float &face_u, float &face_v)`

如果不指定纹理属性，该函数将使用多边形固有插值。

`int  osd_lookupface(<geometry>geometry, int patch_id, float patch_u, float patch_v, int &face_id, float &face_u, float &face_v, string attribute)`

如果指定了纹理属性，该函数将使用该属性中的UV坐标将面片坐标转换到Houdini几何体上。

几何体中的每个多边形都会生成一个或多个Catmull-Clark细分面片。四边形会生成单个面片，而五边形会生成五个面片。此函数帮助在细分面片ID和Houdini多边形（面）之间建立映射。反向映射（从面到面片）的函数是[osd_lookuppatch](/zh-cn/houdini-vex/subdivision-surfaces/osd_lookuppatch "输出与Houdini多边形面上给定坐标对应的OSD面片和UV坐标")。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`patch_id`

OSD面片的ID编号。

`patch_u`, `patch_v`

要映射到Houdini图元上的细分面片中的坐标。这些值应在0到1范围内。

`&face_id`

该函数会用对应面的Houdini图元编号覆盖此变量。

`&face_u`, `&face_v`

该函数会用Houdini面上对应的U/V坐标覆盖这些变量。输出坐标的值将在0到1范围内。

返回值

成功时返回`1`，错误时返回`0`。

## 示例

```vex
void
scatterOnLimitSurface(string file, texmap; int geo_handle; int npts)
{
 int npatches = osd_patchcount(file);
 for (int i = 0; i < npts; ++i)
 {
 int patch_id = nrandom() * npatches;
 float patch_s = nrandom();
 float patch_t = nrandom();
 int face_id;
 float face_u, face_v;
 if (osd_lookupface(file, patch_id, patch_s, patch_t, face_id, face_u, face_v, "uv"))
 {
 vector clr = texture(texmap, face_u, face_v);
 vector P;
 osd_limitsurface(file, "P", patch_id, patch_s, patch_t, P);
 int ptnum = addpoint(geo_handle, P); // 添加一个散点
 if (ptnum >= 0)
 {
 addpointattrib(geo_handle, "Cd", clr);
 addpointattrib(geo_handle, "face_id", face_id);
 }
 }
 }
}

```
