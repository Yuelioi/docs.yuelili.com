---
title: clip
order: 4
---
`void  clip(int &result, vector &p0, vector &p1, vector4 plane)`

根据平面方程(plane.x*x + plane.y*y + plane.z*z + plane.w)指定的任意3D平面对线段进行裁剪。

`void  clip(int &result, vector &p0, vector &p1, vector min, vector max)`

将线段裁剪到由最小和最大角点指定的边界框内。

裁剪p0和p1之间的线段。

如果线段被完全裁剪掉，result将被设置为0。
否则，p0和p1的值将被裁剪到指定的约束范围内，result将被设置为1。
