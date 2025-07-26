---
title: eval_bsdf
order: 9
---

| 本页内容 | * [可变参数](#variadic-arguments) * [示例](#examples) |
| --- | --- |

`vector  eval_bsdf(bsdf b, vector viewer, vector light, ...)`

`vector  eval_bsdf(bsdf b, vector viewer, vector light, int mask, ...)`

`vector  eval_bsdf(bsdf b, vector viewer, vector light, float &pdf, int mask, ...)`

`vector  eval_bsdf(bsdf b, vector viewer, vector light, vector normal, ...)`

`vector  eval_bsdf(bsdf b, vector viewer, vector light, vector normal, int mask, ...)`

`vector  eval_bsdf(bsdf b, vector viewer, vector light, vector normal, float &pdf, int mask, ...)`

`b`

要评估的BSDF。

`viewer`

指向观察者的向量。

`light`

指向光源的向量。

`normal`

表面法线。

`mask`

位掩码，指示要评估哪些类型的着色组件反弹。

有关组件标签位掩码的信息，请参见[bouncemask](/zh-cn/houdini-vex/shading-and-rendering/bouncemask)。

`&pdf`

该函数会用给定方向的PDF值（乘以反照率）覆盖此变量。

可变参数

## variadic-arguments

`eval_bsdf`函数会将任何额外的`"name", value`参数对传递给被评估的BSDF。对于自定义BSDF，这些关键字参数会绑定到着色器参数（例如指示BSDF是用于直接照明还是间接照明评估）。BSDF也可以将信息传回给`eval_bsdf`。要表示关键字参数值应从BSDF导入，请在关键字前加上"import:"。

示例

## examples

```vex
v = eval_bsdf(F, inI, dir,
 "direct", 0, // 指定间接照明
 "import:sssmfp", sssmfp, // 读取导出的sssmfp参数
 ...
);

```
