---
title: solvecurve
order: 27
---
| 起始版本 | 17.5 |
| --- | --- |

`vector [] solvecurve(float lengths[], int closed, int orienttonormal, vector tangent, vector points[], vector normals[])`

`matrix3 [] solvecurve(float lengths[], int closed, int orienttonormal, vector tangent, vector points[], vector normals[])`

`vector [] solvecurve(float &outlength, vector &outpos, float lengths[], int closed, int orienttonormal, int normalmode, vector tangent, vector points[], vector normals[])`

`matrix3 [] solvecurve(float &outlength, vector &outpos, float lengths[], int closed, int orienttonormal, int normalmode, vector tangent, vector points[], vector normals[])`

`vector [] solvecurve(float &outlength, vector &outpos, float lengths[], int closed, int orienttonormal, int normalmode, vector tangent, vector points[], vector normals[], float twists[], float initialtwists[], int fmt, int order, float lod)`

`matrix3 [] solvecurve(float &outlength, vector &outpos, float lengths[], int closed, int orienttonormal, int normalmode, vector tangent, vector points[], vector normals[], float twists[], float initialtwists[], int fmt, int order, float lod)`

`vector [] solvecurve(string op, float lengths[], int closed, int orienttonormal, vector tangent, int normalcalcmethod, matrix relmat)`

`matrix3 [] solvecurve(string op, float lengths[], int closed, int orienttonormal, vector tangent, int normalcalcmethod, matrix relmat)`

`vector [] solvecurve(string op, float lengths[], int closed, int orienttonormal, vector tangent, int normalcalcmethod, matrix relmat, int primnum, float lod)`

`matrix3 [] solvecurve(string op, float lengths[], int closed, int orienttonormal, vector tangent, int normalcalcmethod, matrix relmat, int primnum, float lod)`

返回表示局部骨骼旋转的向量或matrix3数组。角度单位为度。

`op`

要评估曲线的SOP路径。

`outlength`

返回解算结束处的曲线长度。这与所有长度数组的总和不同。

`outpos`

返回最后一个关节的计算位置。

`lengths`

要解算的所有骨骼的长度。

`closed`

闭合曲线。

`orienttonormal`

使用曲线法线来定向骨骼。

`normalmode`

定义如何从控制点计算法线/扭曲。

使用`$HH/vex/include/math.h`中定义的常量。

`tangent`

用于定向曲线末端的切线向量。

`points`

用于定义曲线的向量点数组。

`normals`

用于定义曲线的法线向量数组。

`twists`

可选的浮点数数组，作为定义曲线的扭曲角度（度）。

`initialtwists`

可选的浮点数数组，作为定义曲线的初始扭曲角度（度）。

`normalcalcmethod`

使用SOP评估时的法线计算方法。(0默认，1无，2使用四元数插值，3使用0-180范围内的扭曲角插值，4使用任意范围的扭曲角插值)

`relmat`

用于将点、法线和切线相对于原点进行变换的相对矩阵。
这通常是链根的反转矩阵。

`fmt`

要创建的曲线类型。
使用`$HH/vex/include/math.h`中定义的常量，或0创建多边形曲线，1创建贝塞尔曲线，2创建NURBS曲线。

`order`

NURBS或贝塞尔曲线的阶数。多边形曲线忽略此参数。
