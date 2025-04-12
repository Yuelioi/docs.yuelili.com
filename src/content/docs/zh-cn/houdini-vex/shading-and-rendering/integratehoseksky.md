---
title: integratehoseksky
order: 38
---
| 始于版本 | 20.0 |
| --- | --- |

`vector  integratehoseksky(float solar_altitude, float solar_azimuth, float turbidity, vector ground_albedo, int number_of_samples)`

计算给定Hosek天空模型在水平表面上的辐照度。该函数特别适用于计算地面颜色。

`solar_altitude`

太阳高度角（以度为单位），从地平线开始测量。

`solar_azimuth`

太阳方位角（以度为单位），从正X轴开始测量。

`turbidity`

空气中气溶胶含量。取值范围为`1`到`10`。气溶胶会散射光线并降低空气透明度。数值越高，天空颜色越不饱和，太阳光晕越模糊。

`ground_albedo`

行星反射率颜色。该颜色用于Hosek天空模型并计算最终的地面颜色。

`number_of_samples`

积分天空的采样次数。默认值为`32`。使用更高数值可提高计算精度。

（注：保持所有代码和变量名原文不变，仅翻译说明性文本）
