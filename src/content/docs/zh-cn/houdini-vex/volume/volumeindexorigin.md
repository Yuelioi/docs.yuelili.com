---
title: volumeindexorigin
order: 8
---
`vector  volumeindexorigin(<geometry>geometry, int primnum)`

`vector  volumeindexorigin(<geometry>geometry, string volumename)`

返回值

返回体积图元左下角的索引。
对于Volume图元，该值始终为零。但对于VDB图元，
该值表示其有效体素包围盒的左下角。

如果`primnum`超出范围、几何体无效或给定的图元不是体积图元，则返回0。
