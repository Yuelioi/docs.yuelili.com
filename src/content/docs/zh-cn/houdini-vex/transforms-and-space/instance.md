---
title: instance
order: 5
---

`matrix  instance(vector P, vector N)`

`matrix  instance(vector P, vector N, vector scale)`

`matrix  instance(vector P, vector N, vector scale, vector pivot)`

`matrix  instance(vector P, vector N, vector scale, vector4 rotate, vector up)`

`matrix  instance(vector P, vector N, vector scale, vector4 rotate, vector up, vector pivot)`

`matrix  instance(vector P, vector N, vector scale, vector4 rotate, vector4 orient)`

`matrix  instance(vector P, vector N, vector scale, vector4 rotate, vector4 orient, vector pivot)`

根据给定参数创建变换矩阵，使用与[复制SOP节点](../../nodes/sop/copy.html)相同的实例变换方法。实例会被放置在点`P`处，沿法线方向`N`定向，并可选择性地按`scale`缩放。可选参数`pivot`可作为实例的局部变换基准点。

该函数支持两种旋转设置方法：第一种方法需要显式指定与`N`相切的`up`向量，该向量将与`N`共同构建用于旋转的正交坐标系。第二种方法使用相对于XYZ轴的显式方向来构建坐标系。
