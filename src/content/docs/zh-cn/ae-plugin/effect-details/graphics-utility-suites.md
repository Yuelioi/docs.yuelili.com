---
title: 图形工具套件
---
# 图形工具套件

After Effects 通过以下函数套件公开其内部的变换和图形工具例程。

---

## 变换世界

这些函数以有趣的方式组合 `PF_EffectWorlds`。当你使用这些函数时，你正在使用 After Effects 内部使用的相同代码。

### PF_WorldTransformSuite1

| 函数 | 用途 |
|---|---|
| `composite_rect` | 使用 After Effects 的传输模式之一，将一个矩形从一个 `PF_EffectWorld` 合成到另一个中。 |
| | <pre lang="cpp">PF_Err composite_rect (<br/>  PF_ProgPtr      effect_ref,<br/>  PF_Rect   \*src_rect,<br/>  A_long    src_opacity,<br/>  PF_EffectWorld  \*src_world,<br/>  A_long    dst_x,<br/>  A_long    dst_y,<br/>  PF_Field        field_rdr,<br/>  PF_XferMode     xfer_mode,<br/>  PF_EffectWorld  \*dst);</pre> |
| | `field_rdr` 可以是上、下或两者。 |
| | `xfer_mode` 是以下之一： |
| | - `PF_Xfer_COPY` |
| | - `PF_Xfer_BEHIND` |
| | - `PF_Xfer_IN_FRONT` |
| `blend` | 对两个图像进行 alpha 加权混合。不处理不同大小的源，尽管目标可以是 `PF_EffectWorld`。 |
| | <pre lang="cpp">PF_Err blend (<br/>  PF_ProgPtr     effect_ref,<br/>  const PF_EffectWorld  \*src1,<br/>  const PF_EffectWorld  \*src2,<br/>  PF_Fixed       ratio,<br/>  PF_EffectWorld        \*dst);</pre> |
| `convolve` | 使用任意大小的核分别对图像的 a、r、g 和 b 通道进行卷积。 |
| | 你可以指定一个矩形进行卷积（例如，来自 [PF_EffectWorld 结构](../../effect-basics/PF_EffectWorld#pf_effectworld-structure) 的 `extent_hint`），或者传递 0 以卷积整个图像。 |
| | 如果源 *是* 目标，请不要使用。 |
| | 使用 [核标志](#kernel-flags) 描述卷积。 |
| | <pre lang="cpp">PF_Err convolve(<br/>  PF_EffectWorld  \*src,<br/>  const PF_Rect   \*area,<br/>  PF_KernelFlags  flags,<br/>  A_long   kernel_size,<br/>  void     \*a_kernel,<br/>  void     \*r_kernel,<br/>  void     \*g_kernel,<br/>  void     \*b_kernel,<br/>  PF_EffectWorld  \*dst);</pre> |
| `copy` | 将一个区域从一个 `PF_EffectWorld` 复制到另一个，保留 alpha（与 macOS 的 CopyBits 不同）。 |
| | <pre lang="cpp">PF_Err copy (<br/>  PF_EffectWorld  \*src,<br/>  PF_EffectWorld  \*dst,<br/>  PF_Rect         \*src_r,<br/>  PF_Rect         \*dst_r);</pre> |
| `copy_hq` | 上述函数的高保真版本（使用相同的参数）。 |
| `transfer_rect` | 使用传输模式进行混合，带有可选的蒙版。 |
| | <pre lang="cpp">PF_Err transfer_rect (<br/>  PF_ProgPtr       effect_ref,<br/>  PF_Quality       quality,<br/>  PF_ModeFlags     m_flags,<br/>  PF_Field         field,<br/>  const PF_Rect    \*src_rec,<br/>  const PF_EffectWorld    \*src_world,<br/>  const PF_CompositeMode  \*comp_mode,<br/>  const PF_MaskWorld      \*mask_world0,<br/>  A_long   dest_x,<br/>  A_long   dest_y,<br/>  PF_EffectWorld   \*dst_world);</pre> |
| `transform_world` | 给定一个 `PF_EffectWorld` 和一个矩阵（或矩阵数组），使用 After Effects 的传输模式进行变换和混合，带有可选的蒙版。 |
| | 矩阵指针指向用于运动模糊的矩阵数组。 |
| | 什么时候变换不是变换？Z 轴缩放变换不是变换，除非变换的图层是其他图层的父级，而这些图层并不都位于 z=0 平面。 |
| | <pre lang="cpp">PF_Err transform_world (<br/>  PF_InData        \*in_data,<br/>  PF_Quality       quality,<br/>  PF_ModeFlags     m_flags,<br/>  PF_Field         field,<br/>  const PF_EffectWorld    \*src_world,<br/>  const PF_CompositeMode  \*comp_mode,<br/>  const PF_MaskWorld      \*mask_world0,<br/>  const PF_FloatMatrix    \*matrices,<br/>  A_long   num_matrices,<br/>  Boolean          src2dst_matrix,<br/>  const PF_Rect    \*dest_rect,<br/>  PF_EffectWorld   \*dst_world);</pre> |

---

## 核标志

诸如 `convolve` 或高斯核之类的函数使用核或滤波器权重值的矩阵。这些矩阵可以是任何格式。核标志描述了应如何创建和使用这些矩阵。根据需要将任何标志进行 OR 运算。

与给定例程相关的标志与例程原型一起记录。左列中的第一个条目始终是默认值，值为 0。

| 核标志 | 指示 |
|---|---|
| `PF_KernelFlag_2D` | 指定一维或二维核。 |
| `PF_KernelFlag_1D` | |
| `PF_KernelFlag_UNNORMALIZED` | `NORMALIZED` 均衡核；核表面下的体积与覆盖像素区域的体积相同。 |
| `PF_KernelFlag_NORMALIZED` | |
| `PF_KernelFlag_CLAMP` | `CLAMP` 将值限制为其数据类型的有效范围。 |
| `PF_KernelFlag_NO_CLAMP` | |
| `PF_KernelFlag_USE_LONG` | `USE_LONG` 将核定义为从 0 到 255 的长整型数组。`USE_LONG` 是唯一实现的标志。 |
| `PF_KernelFlag_USE_CHAR` | `USE_CHAR` 将核定义为从 0 到 255 的无符号字符数组。 |
| `PF_KernelFlag_USE_FIXED` | `USE_FIXED` 将核定义为从 0 到 1 的固定数组。 |
| `PF_KernelFlag_USE_UNDEFINED` | |
| `PF_KernelFlag_HORIZONTAL` | 指定卷积的方向。 |
| `PF_KernelFlag_VERTICAL` | |
| `PF_KernelFlag_TRANSPARENT_BORDERS` | 使用 `TRANSPARENT_BORDERS` 将边缘外的像素视为 alpha 为零（黑色）。 |
| `PF_KernelFlag_REPLICATE_BORDERS` | 使用 `REPLICATE_BORDERS` 在采样边缘时复制边缘像素。 |
| | `REPLICATE_BORDERS` 未实现，将被忽略。 |
| `PF_KernelFlag_STRAIGHT_CONVOLVE` | 使用 `STRAIGHT_CONVOLVE` 表示直接卷积。 |
| `PF_KernelFlag_ALPHA_WEIGHT_CONVOLVE` | 使用 `ALPHA_WEIGHT_CONVOLVE` 告诉卷积代码对像素的贡献进行 alpha 加权，以生成卷积输出。 |
| | `ALPHA_WEIGHT_CONVOLVE` 未实现，将被忽略。 |

---

## 填充它们

FillMatteSuite 可用于填充 `PF_EffectWorld`，可以使用特定颜色或与 alpha 值预乘。

### PF_FillMatteSuite2

| 函数 | 用途 |
|---|---|
| `fill` | 用颜色填充矩形（或者，如果颜色指针为空，则用黑色和 alpha 零填充）。 |
| | 如果矩形为空，则填充整个图像。 |
| | <pre lang="cpp">PF_Err fill (<br/>  PF_ProgPtr      effect_ref,<br/>  const PF_Pixel  \*color,<br/>  const PF_Rect   \*dst_rect,<br/>  PF_EffectWorld  \*world);</pre> |
| `fill16` | 与 fill 相同，但接受指向 `PF_Pixel16` 颜色的指针。 |
| `fill_float` | 接受指向 `PF_PixelFloat` 颜色的指针。 |
| `premultiply` | 转换为（或从）r、g 和 b 颜色值预乘以黑色表示 alpha 通道。 |
| | 质量无关。 |
| | - `forward` 用作布尔值 |
| | - `true` 表示将非预乘转换为预乘 |
| | - `false` 表示取消预乘。 |
| | <pre lang="cpp">PF_Err premultiply (<br/>  A_long   forward,<br/>  PF_EffectWorld  \*dst);</pre> |
| `premultiply_color` | 转换为（或从）r、g 和 b 颜色值预乘以任何颜色表示 alpha 通道。 |
| | <pre lang="cpp">PF_Err premultiply_color (<br/>  PF_ProgPtr      effect_ref,<br/>  PF_EffectWorld  \*src,<br/>  PF_Pixel        \*color,<br/>  A_long   forward,<br/>  PF_EffectWorld  \*dst);</pre> |
| `premultiply_color16` | 与上述相同，但接受指向 `PF_Pixel16` 颜色的指针。 |
| `premultiply_color_float` | 接受指向 `PF_PixelFloat` 颜色的指针。 |

---

## 采样图像

注意：采样图像边界之外的区域被视为零 alpha。为了方便起见，`PF_Sampling8Suite1`、`PF_Sampling16Suite1` 和 `PF_SamplingFloatSuite1` 中的函数都列在此表中。

### PF_SamplingSuite 函数（多个套件）

| 函数 | 用途 |
|---|---|
| `nn_sample` | 执行最近邻采样。 |
| | <pre lang="cpp">PF_Err nn_sample (<br/>  PF_ProgPtr       effect_ref,<br/>  PF_Fixed         x,<br/>  PF_Fixed         y,<br/>  const PF_SampPB  \*params,<br/>  PF_Pixel         \*dst_pixel );</pre> |
| `nn_sample16` | 与上述相同，但接受指向 `PF_Pixel16` `dst_pixel` 的指针。 |
| `nn_sample_float` | 接受指向 `PF_PixelFloat` `dst_pixel` 的指针。 |
| `subpixel_sample` | 查询源图像中非积分点颜色的适当 alpha 加权插值，高质量。低质量下使用最近邻采样。 |
| | 由于采样例程（如果使用）通常会被多次调用，因此将函数指针复制到回调结构中并放入寄存器或堆栈中以加速内部循环是很方便的。 |
| | 请参阅示例代码以获取示例。 |
| | !!! 注意 |
| | 采样假设 0,0 是左上角像素的中心。 |
| | <pre lang="cpp">PF_Err subpixel_sample (<br/>  PF_ProgPtr       effect_ref,<br/>  PF_Fixed         x,<br/>  PF_Fixed         y,<br/>  const PF_SampPB  \*params,<br/>  PF_Pixel         \*dst_pixel);</pre> |
| `subpixel_sample16` | 与上述相同，但接受指向 `PF_Pixel16*` `dst_pixel` 的指针。 |
| `subpixel_sample_float` | 接受指向 `PF_PixelFloat*` `dst_pixel` 的指针。 |
| `area_sample` | 使用此函数计算源图像中轴对齐的非积分矩形颜色的适当 alpha 加权平均值，高质量。 |
| | 低质量下使用最近邻采样。由于溢出问题，此函数最多只能平均 256 x 256 像素区域（即 x 和 y 半径 < 128 像素）。 |
| | !!! 注意 |
| | 采样半径在 x 和 y 方向上必须至少为 1。 |
| | <pre lang="cpp">PF_Err area_sample (<br/>  PF_ProgPtr       effect_ref,<br/>  PF_Fixed         x,<br/>  PF_Fixed         y,<br/>  const PF_SampPB  \*params,<br/>  PF_Pixel         \*dst_pixel);</pre> |
| | !!! 注意 |
| | 图层边界之外的区域在采样时被视为零 alpha。 |
| `area_sample16` | 与上述相同，但接受 `PF_Pixel16*` `dst_pixel`。 |

### PF_BatchSamplingSuite1 函数

| 函数 | 用途 |
|---|---|
| `begin_sampling` | 你的效果将执行一些批量采样；After Effects 将执行设置任务以优化你的采样。 |
| | <pre lang="cpp">PF_Err (*begin_sampling)(<br/>  PF_ProgPtr    effect_ref,<br/>  PF_Quality    qual,<br/>  PF_ModeFlags  mf,<br/>  PF_SampPB     \*params);</pre> |
| `end_sampling` | 告诉 After Effects 你已完成采样。 |
| | <pre lang="cpp">PF_Err (*end_sampling)(<br/>  PF_ProgPtr    effect_ref,<br/>  PF_Quality    qual,<br/>  PF_ModeFlags  mf,<br/>  PF_SampPB     \*params);</pre> |
| `get_batch_func` | 获取指向 After Effects 的批量采样函数（高度优化）的指针。 |
| | <pre lang="cpp">PF_Err (*get_batch_func)(<br/>  PF_ProgPtr   effect_ref,<br/>  PF_Quality   quality,<br/>  PF_ModeFlags        mode_flags,<br/>  const PF_SampPB     \*params,<br/>  PF_BatchSampleFunc  \*batch);</pre> |
| `get_batch_func16` | 获取指向 After Effects 的 16-bpc 批量采样函数（同样高度优化）的指针。 |
| | <pre lang="cpp">PF_Err (*get_batch_func16)(<br/>  PF_ProgPtr     effect_ref,<br/>  PF_Quality     quality,<br/>  PF_ModeFlags   mode_flags,<br/>  const PF_SampPB       \*params,<br/>  PF_BatchSample16Func  \*batch);</pre> |

---

## 为我做数学

除了各种图形工具外，我们还提供了一组 ANSI 标准例程，以便插件不需要包含其他库来使用标准函数。

我们提供了大量数学函数（三角函数、平方根、对数等）的函数指针。

使用我们的套件函数可以提供一些（应用程序级别的）错误处理，并防止包含不同版本的多个“标准”库时出现问题。

所有函数都返回一个双精度值。所有角度均以弧度表示，如果需要从度转换为弧度，请使用 `PF_RAD_PER_DEGREE`（来自 AE_EffectCB.h 的常量）。

### PF_ANSICallbackSuite1

| 函数 | 用途 | 替换 |
| --- | --- | --- |
| `acos` | 返回 x 的反余弦。 | `PF_ACOS` |
| `asin` | 返回 x 的反正弦。 | `PF_ASIN` |
| `atan` | 返回 x 的反正切。 | `PF_ATAN` |
| `atan2` | 返回 atan(y/x)。 | `PF_ATAN2` |
| `ceil` | 返回大于 x 的下一个整数。 | `PF_CEIL` |
| `cos` | 返回 x 的余弦。
