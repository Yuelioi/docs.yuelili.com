---
title: filamentsample
order: 1
---

`vector  filamentsample(<geometry>几何体, vector 位置)`

在指定`位置`处采样由一组涡丝定义的流速场。`inputnum`或`filename`参数指定了获取涡丝曲线的几何体来源。可以在几何体上使用`strength`（强度）和`thickness`（粗细）图元属性来定制每条涡丝的强度和粗细。如果`inputnum`超出范围或`filename`无效，则返回零向量。
