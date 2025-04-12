---
title: planesphereintersect
order: 52
---
`int  planesphereintersect(vector plane_pos, vector plane_normal, vector sphere_pos, float sphere_radius, vector &intersect_pos, float &intersect_radius, float &intersect_distance)`

给定一个以`sphere_pos`为中心、半径为`sphere_radius`的3D球体，以及一个法向量为`plane_normal`且经过3D点`plane_pos`的平面，若存在相交则返回1，否则返回0。

相交结果通常是在相交平面上形成一个以`intersect_pos`为中心、半径为`intersect_radius`的2D圆形。若相交结果为单一点，则`intersect_radius`将被设为0。
即使不存在相交，也会返回`sphere_pos`与`intersect_pos`之间的距离值。
