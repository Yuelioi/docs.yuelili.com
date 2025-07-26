---
title: osd_limitsurfacevertex
order: 4
---

该函数类似于 [osd_limitsurface](/zh-cn/houdini-vex/subdivision-surfaces/osd_limitsurface "使用Open Subdiv在细分极限曲面上评估点属性。")，但针对的是顶点属性而非点属性。
更多信息请参阅 [osd_limitsurface](/zh-cn/houdini-vex/subdivision-surfaces/osd_limitsurface "使用Open Subdiv在细分极限曲面上评估点属性。")。

`int  osd_limitsurfacevertex(<geometry>geometry, string attrib_name, int face_id, float u, float v, <type>&result)`

`int  osd_limitsurfacevertex(<geometry>geometry, string attrib_name, int face_id, float u, float v, float &result[])`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。
