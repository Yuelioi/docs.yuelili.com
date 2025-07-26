---
title: forpoints
order: 4
---
在[image3d上下文](../contexts/image3d.html "已废弃。编写与i3dgen程序配合使用的程序来生成3D纹理")中，当指定了几何体（即元球几何体或粒子）时，您可以遍历影响空间中某点的所有元球。

```vex
forpoints ( position [, distance] ) {

}

```

...其中position是表示空间点的向量。该语句会对传入位置处的每个元球/粒子执行一次。

如果指定了distance参数，则会遍历指定点距离范围内的所有元球/粒子。distance参数是可选的，可能会导致着色器执行速度变慢。

在循环内部，您可以调用[mdensity](/zh-cn/houdini-vex/point-clouds-and-3d-images/mdensity "如果向i3dgen指定了元球几何体，则返回元球场的密度")和[mattrib](/zh-cn/houdini-vex/point-clouds-and-3d-images/mattrib "如果向i3dgen指定了元球几何体，则返回元球点属性的值")函数来查询当前点的贡献值，而不是获取"混合"值。

例如，以下代码将获取对空间中某点贡献权重最大的元球的点颜色：

```vex
float d = 0, max = 0;
vector clr = 0;
vector blended_color;

forpoints ( P ) {
 d = mdensity(P);
 if (d > max) {
 clr = mattrib("Cd", P);
 max = d;
 }
 blended_color = d * clr;
}

```

请注意，当您在`forpoints`循环内调用[mattrib](/zh-cn/houdini-vex/point-clouds-and-3d-images/mattrib "如果向i3dgen指定了元球几何体，则返回元球点属性的值")时，该属性不会被元球密度预先混合。
