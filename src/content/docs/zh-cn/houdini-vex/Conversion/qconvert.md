---
title: qconvert
order: 7
---
`matrix3  qconvert(vector4 quaternion)`

将用vector4表示的四元数转换为matrix3表示形式。

`matrix  qconvert(vector4 quaternion, vector offset)`

将用vector4表示的四元数转换为matrix表示形式。
将偏移量作为后平移应用，因此生成的矩阵会先通过四元数旋转一个点，然后添加偏移量。

`vector  qconvert(vector4 quaternion)`

将用vector4表示的四元数转换为角度/轴向量。
