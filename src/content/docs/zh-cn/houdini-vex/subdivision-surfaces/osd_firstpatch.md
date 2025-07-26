---
title: osd_firstpatch
order: 2
---

`int  osd_firstpatch(<geometry>geometry, int face_id)` 

`<geometry>` 

在节点上下文（例如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于从中读取几何体。 

或者，该参数可以是一个指定几何体文件（例如`.bgeo`）的字符串以从中读取。在Houdini内部运行时，这可以是一个`op:/path/to/sop`引用。 

对于粗网格中的给定面，此函数返回与该面关联的第一个补丁的编号。由于船体中的每个面可能会生成多个补丁，此函数将返回由该面生成的第一个补丁。另请参阅[osd_patchcount](/zh-cn/houdini-vex/subdivision-surfaces/osd_patchcount)以了解该面生成的补丁数量。 

（注：保持技术术语一致性：
1. "coarse mesh"译为"粗网格"（计算机图形学标准译法）
2. "patch"译为"补丁"（细分曲面领域通用译法）
3. "hull"译为"船体"（此处指细分曲面的控制网格外壳）
4. 保留所有函数名和参数名原文格式）
