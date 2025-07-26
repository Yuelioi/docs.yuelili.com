---
title: chiang_fur
order: 5
---

| 起始版本 | 20.0 |
| --- | --- |

`bsdf  chiang_fur(vector nn, vector tanV, float mask, float cuticle, float R_v, float R_s, float TT_v, float TT_s, float TRT_v, float TRT_s, float shift, vector absorption_coeff, float ior, float R2_v, float R2_s, vector R2_color, ...)`

创建一个用于计算基于物理的毛发模型的BSDF，该模型基于Chiang的论文《生产级路径追踪中实用可控的毛发模型》以及Ling-Qi Yan等人的《物理精确的毛发反射：建模、测量与渲染》。Chiang Fur是[Chiang模型着色器](/zh-cn/houdini-vex/bsdfs/chiang "返回一个chiang BSDF")的扩展版本。

该模型考虑了毛发和粗发丝的结构特征：即所谓的髓质层。毛发主要由三个组成部分构成：

仅适用于曲线几何体。

有关BSDF的更多信息，请参阅[编写PBR着色器](../pbr.html)。

`nn`

凹凸/着色法线

`tanV`

沿V方向的切向量

`mask`

遮蔽主反射瓣以突出髓质层效果

`cuticle`

调节毛发最外层菲涅尔因子

`R_v`

R反射瓣的纵向粗糙度值"v"（论文第4.1节）

`R_s`

R反射瓣的方位角粗糙度值"s"（论文第4.1节）

`TT_v`

TT反射瓣的纵向粗糙度值"v"（论文第4.1节）

`TT_s`

TT反射瓣的方位角粗糙度值"s"（论文第4.1节）

`TRT_v`

TRT反射瓣的纵向粗糙度值"v"（论文第4.1节）

`TRT_s`

TRT反射瓣的方位角粗糙度值"s"（论文第4.1节）

`shift`

表示毛小皮角度，影响高光位置。输入范围-1到1在内部映射为-90到90度（例如3度对应3/90=0.03333）

`absorption_coeff`

吸收系数（论文第4.2节）

`ior`

折射率（如1.55）

`R2_v`

额外R2反射瓣的纵向粗糙度值"v"

`R2_s`

额外R2反射瓣的方位角粗糙度值"s"

`R2_color`

额外R2反射瓣的颜色输入，可用于实现虹彩效果等特殊反射着色
