---
title: osd_patches
order: 8
---
`int [] osd_patches(<geometry>geometry, int face_id)`

细分外壳中的每个面可能会创建一个或多个补丁。此函数列出对应面的补丁ID。

该功能通过以下算法实现：

```vex
int []
osd_patches(const string file; const face_id)
{
 int patches[] = {};
 int first = osd_firstpatch(file, face_id);
 if (first >= 0)
 {
 int npatches = osd_patchcount(file, face_id);
 for (int i = 0; i < npatches; i++)
 append(patches, first+i);
 }
 return patches;
}

```
