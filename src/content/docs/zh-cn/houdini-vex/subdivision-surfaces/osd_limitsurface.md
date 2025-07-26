---
title: osd_limitsurface
order: 3
---
`osd_limitsurface` 用于评估指定为细分曲面的几何体中的点属性。

对于顶点属性，请使用 [osd_limitsurfacevertex](/zh-cn/houdini-vex/subdivision-surfaces/osd_limitsurfacevertex "使用Open Subdiv在细分极限曲面上评估顶点属性")。

`int  osd_limitsurface(<geometry>geometry, string attrib_name, int patch_id, float u, float v, <type>&result)`

`int  osd_limitsurface(<geometry>geometry, string attrib_name, int patch_id, float u, float v, float &result[])`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个整数，表示要读取几何体的输入编号（从0开始）。

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如`.bgeo`）。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`&result`

计算得到的属性值将存储在你传递给此参数的变量中。
变量的类型应与要读取的属性类型匹配。

返回值

如果成功计算属性则返回`1`，失败则返回`0`。

可能失败的原因包括：

- 几何体不包含多边形或拓扑无法使用Open Subdiv转换
- 输入几何体上不存在该属性
- 属性大小/类型与`result`参数的VEX类型不匹配

## 示例

在细分网格的极限曲面上生成点云。

```vex
int npatches = osd_patchcount(file);
for (int patch = 0; patch < npatches; patch++)
{
 for (int v = 0; v < 100; v++)
 {
 vector P;
 if (osd_limitsurface(file, "P", patch, nrandom(), nrandom(), P))
 {
 int ptid = addpoint(geohandle, P);
 }
 }
}

```
