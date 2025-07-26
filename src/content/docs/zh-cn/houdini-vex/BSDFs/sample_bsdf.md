---
title: sample_bsdf
order: 19
---
`void  sample_bsdf(bsdf F, vector viewer_u, vector &dir, vector &eval, int &type, float sx, float sy, ...)`

`void  sample_bsdf(bsdf F, vector viewer_u, vector &dir, vector &eval, int &type, float sx, float sy, int mask, ...)`

`void  sample_bsdf(bsdf F, vector viewer_u, vector &dir, vector &eval, float &pdf, int &type, float sx, float sy, ...)`

`void  sample_bsdf(bsdf F, vector viewer_u, vector &dir, vector &eval, float &pdf, int &type, float sx, float sy, int mask, ...)`

`void  sample_bsdf(bsdf b, vector viewer_u, vector normal_v, int &flags, vector &dir, vector &eval, float &pdf, int &type, float sx, float sy, int mask, ...)`

`F`

要采样的BSDF。

`viewer_u`

U向量（输入观察方向）。

`normal_v`

V向量（输入表面法线）。

`&flags`

BSDF的标志位字段，定义在`pbr.h`中。函数可能会设置如`PBR_BSDF_REVERSE`或`PBR_BSDF_O_EVENT_EXIT`等标志。

`&dir`

函数会覆盖此变量为出射光线方向。

`&eval`

函数会覆盖此变量为出射光线颜色（经过反照率缩放）。

这与`eval_bsdf`操作返回的评估向量不同。此处的`&eval`不会随出射采样方向变化。

`&pdf`

函数会覆盖此变量为计算得到的BSDF概率密度函数(PDF)。

`&type`

在复合BSDF中，返回被采样的弹射类型。

关于组件标签位掩码的信息，请参阅[bouncemask](/zh-cn/houdini-vex/shading-and-rendering/bouncemask)。

`sx`和`sy`

随机值，例如由[nextsample](/zh-cn/houdini-vex/sampling/nextsample)生成。不同的`sx`和`sy`值代表不同的随机采样方向。

`&eval`

被覆盖为采样组件的颜色（经过反照率缩放）。

`&pdf`

采样组件的采样概率密度函数。

`bounces`

表示允许的弹射类型的位掩码。

`sample_bsdf`函数将关键字参数传递给被评估的BSDF。对于自定义BSDF，这些关键字参数会绑定到着色器参数（例如指示BSDF是用于直接照明还是间接照明评估）。BSDF也可以将信息传回给`sample_bsdf`。若要表示关键字参数值应从BSDF导入，请在关键字前加上"import:"。例如：

## 示例

```vex
sample_bsdf(F, inI, outI, eval, type, sx, sy,
 "direct", 0, // 指定间接照明
 "import:sssmfp", sssmfp, // 读取导出的sssmfp参数
 ...
);

```
