---
title: solveik
order: 29
---
| 始于版本 | 17.5 |
| --- | --- |

`vector [] solveik(float lengths[], vector targetpos, vector twistpos, float twist, int twistflag, float dampen, int resiststraight, float trackingthres, matrix relmat, vector constraints[])`

`matrix3 [] solveik(float lengths[], vector targetpos, vector twistpos, float twist, int twistflag, float dampen, int resiststraight, float trackingthres, matrix relmat, vector constraints[])`

返回一个包含局部骨骼旋转角度（度数）的数组。

`lengths`

所有待解算骨骼的长度数组。

`targetpos`

世界空间中的目标位置。

`twistpos`

世界空间中的扭曲影响位置。

`twist`

扭曲角度（度数）。

`twistflag`

是否使用扭曲影响器应用扭曲。

`dampen`

整个骨骼链的阻尼系数。

`resiststraight`

抵抗伸直效果。

`trackingthres`

追踪阈值。

`relmat`

用于将目标和扭曲位置相对于原点进行变换的相对矩阵。
通常这是骨骼链根节点的逆矩阵。

`constraints`

这是一个用于定义每根骨骼的静止角度、阻尼、最小角度、最大角度、最小阻尼、最大阻尼和衰减系数的向量数组。
如果数组为空，则使用骨骼对象中相同的默认值。
如果数组大小等于输入骨骼数量，则定义了静止角度。
如果数组大小等于输入骨骼数量的2倍，则定义了静止角度和阻尼。
如果数组大小等于输入骨骼数量的3倍，则定义了静止角度、阻尼和最小/最大角度（最小/最大角度共享相同值）。
如果数组大小等于输入骨骼数量的4倍，则定义了静止角度、阻尼和最小/最大角度（最小/最大角度具有不同值）。
如果数组大小等于输入骨骼数量的5倍，则定义了静止角度、阻尼、最小/最大角度和阻尼角度。
如果数组大小等于输入骨骼数量的6倍，则定义了静止角度、阻尼、最小/最大角度和最小/最大阻尼角度。
如果数组大小等于输入骨骼数量的7倍，则定义了静止角度、阻尼、最小/最大角度、最小/最大阻尼角度和衰减系数。
