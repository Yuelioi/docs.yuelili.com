---
title: chiang
order: 4
---
| 始于版本 | 19.0 |
| --- | --- |

`bsdf  chiang(vector nn, vector tanV, float R_v, float R_s, float TT_v, float TT_s, float TRT_v, float TRT_s, float shift, vector absorption_coeff, float ior, ...)`

创建一个BSDF，用于计算Chiang等人在论文《用于生产路径追踪的实用可控毛发模型》中描述的基于物理的毛发模型。

仅适用于曲线几何体。

关于BSDF的更多信息，请参阅[编写PBR着色器](../pbr.html)。

`nn`

凹凸/着色法线

`tanV`

沿V方向的切向量

`R_v`

R波瓣的纵向粗糙度值"v"（论文第4.1节）

`R_s`

R波瓣的方位角粗糙度值"s"（论文第4.1节）

`TT_v`

TT波瓣的纵向粗糙度值"v"（论文第4.1节）

`TT_s`

TT波瓣的方位角粗糙度值"s"（论文第4.1节）

`TRT_v`

TRT波瓣的纵向粗糙度值"v"（论文第4.1节）

`TRT_s`

TRT波瓣的方位角粗糙度值"s"（论文第4.1节）

`shift`

表示角质层角度，影响高光位置。输入范围-1到1在内部映射为-90到90（例如3度对应3/90=0.03333）

`absorption_coeff`

吸收系数（论文第4.2节）

`ior`

折射率（例如1.55）
