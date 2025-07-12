---
title: 迭代套件
---
# 迭代套件

效果通常会对图像中的所有像素进行迭代，并对每个像素进行过滤。通过利用 After Effects 的迭代套件，你可以让 After Effects 将任务分配给尽可能多的处理器，从而利用硬件特定的加速功能。

After Effects 还会自动管理进度报告和用户取消操作。

请使用这些套件！确保传递给这些迭代器回调的像素处理函数是可重入的。

:::note
2021 年 10 月的 SDK 更新将并发迭代线程的数量增加到系统可用的 CPU 核心数，而不是之前的硬编码限制 32。
:::

---

## PF_Iterate8Suite1, PF_Iterate16Suite1, PF_IterateFloatSuite1

| 函数 | 用途 |
|---|---|
| `iterate` | 遍历源图像中的像素，对其进行修改，并填充目标图像。 |
| | 你可以指定要遍历的像素矩形区域；如果不指定，After Effects 将遍历每个重叠的像素。 |
| | 你提供一个 refcon，函数将使用该 refcon 以及当前像素的 x 和 y 坐标，以及源图像和目标图像中该像素的指针进行调用。 |
| | 如果传递 NULL 作为源，它将遍历目标图像。此函数与质量无关。 |
| | 不要依赖像素以任何特定顺序遍历。 |
| | 图像可能会被分配到不同的 CPU 上处理，因此请将所有参数（除了目标图像）视为只读，而 After Effects 正在处理时。 |
| | 此回调自动包含进度和中断检查，因此不要在像素函数中进行这些操作。 |
| | <pre lang="cpp">iterate(<br/>  PF_InData       \*in_data,<br/>  A_long    progress_base,<br/>  A_long    progress_final,<br/>  PF_EffectWorld  \*src,<br/>  const PF_Rect   \*area,<br/>  void      \*refcon,<br/>  PF_Err (*pix_fn)(<br/>    void      \*refcon,<br/>    A_long    x,<br/>    A_long    y,<br/>    PF_Pixel  \*in,<br/>    PF_Pixel  \*out),<br/>  PF_EffectWorld  \*dst);</pre> |
| `iterate_origin` | 允许你指定从输入到输出的偏移量。 |
| | 例如，如果你的输出缓冲区小于输入缓冲区，传递 `(in_- data>output_origin_x, in_data>output_origin_y)` 作为原点，并将 area 设置为 NULL，此函数将适当地偏移源像素指针以供你的像素函数使用。 |
| | <pre lang="cpp">iterate_origin(<br/>  PF_InData       \*in_data,<br/>  A_long    progress_base,<br/>  A_long    progress_final,<br/>  PF_EffectWorld  \*src,<br/>  const PF_Rect   \*area,<br/>  const PF_Point  \*origin,<br/>  void      \*refcon,<br/>  PF_Err (*pix_fn)(<br/>    void      \*refcon,<br/>    A_long    x,<br/>    A_long    y,<br/>    PF_Pixel  \*in,<br/>    PF_Pixel  \*out),<br/>  PF_EffectWorld  \*dst);</pre> |
| `iterate_lut` | 仅限 `PF_Iterate8Suite`。允许传递查找表（LUT）进行迭代；你可以为每个颜色通道传递相同或不同的 LUT。 |
| | 如果没有传递 LUT，则使用恒等 LUT。 |
| | <pre lang="cpp">iterate_lut(<br/>  PF_InData       \*in_data,<br/>  A_long    prog_base,<br/>  A_long    prog_final,<br/>  PF_EffectWorld  \*src,<br/>  const PF_Rect   \*area,<br/>  A_u_char        \*a_lut0,<br/>  A_u_char        \*r_lut0,<br/>  A_u_char        \*g_lut0,<br/>  A_u_char        \*b_lut0,<br/>  PF_EffectWorld  \*dst);</pre> |
| `iterate_origin_non_clip_src` | 允许遍历源图层和目标图层交集之外的像素。对于这些像素，你将收到一个值为 {0,0,0,0} 的 `PF_Pixel`。 |
| | <pre lang="cpp">iterate_origin_non_clip_src(<br/>  PF_InData       \*in_data,<br/>  A_long    progress_base,<br/>  A_long    progress_final,<br/>  PF_EffectWorld  \*src,<br/>  const PF_Rect   \*area,<br/>  const PF_Point  \*origin,<br/>  void      \*refcon,<br/>  PF_Err (*pix_fn)(<br/>    void      \*refcon,<br/>    A_long    x,<br/>    A_long    y,<br/>    PF_Pixel  \*in,<br/>    PF_Pixel  \*out),<br/>  PF_EffectWorld  \*dst);</pre> |
| `iterate_generic` | 仅限 `PF_Iterate8Suite`。如果你想为每个可用的 CPU 执行一次操作，请使用此函数（为 `iterationsL` 传递 `PF_Iterations_ONCE_PER_PROCESSOR`）。 |
| | 仅从线程索引 0 调用中止和进度函数。 |
| | !!! note |
| | 你可以遍历的不仅仅是像素。在内部，我们将其用于基于行的图像处理，以及复杂序列数据的每实体一次更新。 |
| | <pre lang="cpp">iterate_generic(<br/>  A_long iterationsL,<br/>  void   \*refconPV,<br/>  PF_Err (*fn_func)(<br/>    void    \*refconPV,<br/>    A_long  thread_idxL,<br/>    A_long  i,<br/>    A_long  itrtL));</pre> |
