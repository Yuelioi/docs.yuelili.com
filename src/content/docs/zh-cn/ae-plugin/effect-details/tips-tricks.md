---
title: 技巧与窍门
---
# 技巧与窍门

## 最佳实践

如果你的原型和我们的类似，那么你的插件第一个不崩溃的版本与最终发布的版本可能会有很大的不同。

你的插件如何处理诸如降采样、错误和异常、像素宽高比、内存不足情况以及处理过程中被中断等问题，决定了它的可用性（以及你需要处理多少支持请求）。

---

## 响应性

使用[交互回调](../interaction-callback-functions#interaction-callbacks)中的`PF_ABORT()`和`PF_PROGRESS()`，使你的插件尽可能响应迅速。

我们实际上测试了所有效果的中断能力；你会惊讶于用户等待你的缓慢效果处理完一个电影分辨率序列时会有多不耐烦！

After Effects的迭代函数本身提供了这种功能；你不需要担心在像素处理函数中调用上述函数。

---

## 让你的效果易于找到

可以让你的效果在用户搜索插件名称以外的内容时显示在“效果与预设”面板中。

应用你的效果（保持设置为默认值，除非你非常确定用户在搜索给定术语时会想要不同的设置），然后从效果控制面板中选择“将选择保存为动画预设”。

将其保存为你希望用户找到插件的名称。

让你的插件安装程序将生成的.ffx文件放入\\Presets目录，与After Effects可执行文件相邻。

当用户搜索保存的名称时，你的预设将显示出来。

---

## 在(x,y)处采样像素

有时，你不仅想处理每个像素，还想在输入帧中获取特定偏移量。以下是一种在给定(x,y)位置采样像素的方法；类似的代码可以用于写入给定位置。

```cpp
PF_Pixel *sampleIntegral32(PF_EffectWorld &def, int x, int y){
 return (PF_Pixel*)((char*)def.data +
 (y * def.rowbytes) +
 (x * sizeof(PF_Pixel)));
}

PF_Pixel16 *sampleIntegral64(PF_EffectWorld &def, int x, int y){
 assert(PF_WORLD_IS_DEEP(&def));
 return (PF_Pixel16*)((char*)def.data +
 (y * def.rowbytes) +
 (x * sizeof(PF_Pixel16)));
}
```

特别感谢Paul Miller回答这个问题。

---

## 像素的中心在哪里？

深奥的问题，伙计。当锚点（参见用户文档）为(0,0)时，After Effects围绕左上角像素的左上角旋转。

然而，子像素采样和区域采样回调实际上将(.0, .0)视为直接命中。为了补偿这一点，在调用这些函数之前从x和y值中减去0.5。

矩阵函数（来自[PF_WorldTransformSuite1](../graphics-utility-suites#pf_worldtransformsuite1)的`transform_world`）没有这个问题。

当以子像素量平移图像时，使输出层比其输入宽一个像素，并将原点保持在(0,0)。

---

## 文本层原点

几乎所有图层类型的原点都在左上角。文本层则不然！

默认情况下，文本层的原点位于第一个字符的底部基线位置。如果你创建一个文本项然后选择图层，锚点会显示出来。

看看默认锚点位置在哪里。变换不在图层矩形的角落。

---

## 干净的画布

你不一定从干净的输出画布开始效果处理。我们的高斯模糊滤镜为了做到这一点，在渲染之前执行以下操作：

```cpp
src_rect.left = in_data>output_origin_x;
src_rect.right = src_rect.left + input>width;
src_rect.top = in_data>output_origin_y;
src_rect.bottom = src_rect.top + input>height;

err = PF_FILL(NULL, NULL, output);

if (!err) {
 err = PF_COPY(&params[0]>u.ld, output, NULL, &src_rect);
}
```

---

## 缓存行为

After Effects提供了多种指定缓存行为的方式。`PF_OutFlag_NON_PARAM_VARY`、`PF_OutFlag_WIDE_TIME_INPUT`、`PF_OutFlag_I_USE_SHUTTER_ANGLE`、`PF_OutFlag_I_SYNTHESIZE_AUDIO`、`PF_OutFlag2_I_USE_3D_CAMERA`和`PF_OutFlag2_I_USE_3D_LIGHTS`（均来自[PF_OutFlags](../../effect-basics/PF_OutData#pf_outflags)）都会影响缓存决策。

支持[动态outflags](../../effect-basics/PF_OutData#pf_outflags)可以极大地提高性能，防止After Effects像其他情况下那样积极地使你的效果缓存失效。

确认你的插件在不同的After Effects缓存设置下表现良好。你的插件是否按预期被调用来更新，或者After Effects认为它有有效的像素而你认为没有？

---

## 全局性能缓存考虑

在CS6中，新的缓存机制可能需要你在更改效果的渲染后清除缓存帧，以便在更改之前渲染并存储在缓存中的帧不会被重用。在开发过程中手动执行此操作：

1. 在首选项 > 媒体与磁盘缓存中，禁用磁盘缓存
2. 点击“清空磁盘缓存”以确保（在步骤1中禁用磁盘缓存仅禁用磁盘缓存的*写入*，而不一定是使用）
3. 重新启动

如果你遇到任何故障，这可能是你的效果中的一个合法错误，例如SmartFX中的矩形处理不当。

另一方面，如果你修复了插件中的渲染错误并发布了更新，你不能期望所有用户都会清空他们的磁盘缓存。用户可能有错误帧的磁盘缓存，需要使其失效。怎么办？更新你的插件的效果版本。此值（以及AE构建号）是缓存键的一部分，因此如果你更新它，任何包含你插件内容的缓存帧将不再匹配。

---

## 来自长期开发者的一些关于时间的思考

Stoney Ballard整理了以下关于效果如何与时间配合的总结；你可能会发现它很有帮助。

有五个`in_data`参数描述时间给滤镜：

- `current_time`
- `time_step`
- `local_time_step`
- `total_time`
- `time_scale`

它们的值取决于：

- 正在渲染的帧
- 图层和合成的持续时间
- 合成的帧速率
- 任何时间拉伸
- 任何时间重映射
- 外部合成的时间行为（包含正在过滤的图层的合成）
- “嵌套或在渲染队列中时保留帧速率”（PFR）开关的设置

正在渲染的帧影响current_time。它以本地（图层）时间系统表示。如果PFR开关关闭，current_time可以是任何非负值。如果打开，它将被限制为time_step和local_time_step的倍数。图层持续时间仅影响total_time。合成持续时间仅在时间重映射（TR）打开时是一个因素。在这种情况下，total_time是图层持续时间和合成持续时间中较大的一个。合成帧速率仅影响time_scale。时间拉伸仅影响time_step和local_time_step。如果时间拉伸为负，这些值为负。即使图层的持续时间（在合成中看到的）发生变化，total_time仍然不受影响。这就像时间拉伸在滤镜*之上*，但在外部合成*之下*。PFR不会改变时间拉伸的效果。时间拉伸与外部合成不同，因为它平等地影响两个步进参数，而外部合成仅影响time_step。

时间重映射发生在滤镜*之下*，因此它不会影响除total_time之外的时间参数。当TR打开时，图层被延长到与合成相同的时间（但从不缩短），无论实际需要多少时间，或者图层在合成中的位置。这可能导致total_time变大。它与实际的时间映射无关，只是是否启用。

最大的变化来自嵌套在外部合成中，除非PFR打开。当PFR打开时，滤镜完全与外部合成中的时间变化隔离。当然，在这种情况下，current_time不一定以time_step的增量移动。它可能会跳过帧或向后移动。

当PFR关闭时，local_time_step、total_time和time_scale保持设置为内部合成的值，但time_step包含外部合成中下一帧的时间，以本地时间系统表示。这可以是任何值，包括0。这可以解释为瞬时时间速率，而不是持续时间。0值可以持续任意数量的渲染帧，但current_time在本地图层上不会改变。

从另一个方向看：

current_time被量化为time_step间隔，除非渲染外部合成且内部合成的PFR关闭。这是图层中的当前时间，而不是任何合成中的时间。

local_time_step的值仅受时间拉伸影响。它永远不会为零，但可以为负。

time_step和local_time_step总是相同的值，除非渲染外部合成且PFR关闭。time_step还受外部合成的时间行为影响（PFR关闭）。它可以有任何值，正、负或零，并且可以为每一帧（外部合成的）不同。time_step可用于确定当前帧的持续时间（PFR关闭）。

total_time是图层的持续时间，除非时间重映射打开，这使它成为图层持续时间和合成持续时间中较大的一个。

time_scale是比例，使得total_time / time_scale是图层在其合成中的持续时间（以秒为单位）。它仅受合成帧速率影响，尽管所有时间值可以按比例缩放。

图层的固有帧速率（如果有）在任何地方都不可见，尽管它通常与合成帧速率相同。如果滤镜需要访问剪辑的实际帧，它只能通过在与剪辑相同帧速率的合成中，并且没有时间拉伸或时间重映射应用于其图层来实现。它应该使用local_time_step来确定帧的位置。

---

## 速率 x 时间 == 痛苦！

如果你的参数之一是速度或速度参数，请小心。考虑涟漪效果。它假设一个常数并使用当前时间来确定涟漪已经走了多远（d = v \* t）。如果用户在时间上插值速度，你应该从时间零到当前时间积分速度函数。涟漪效果*不*这样做，但提供了一个“相位”参数，用户可以按意愿插值，只要速度设置为零，就能提供正确的结果。如果你想提供正确的行为，你可以使用PF_CHECKOUT_PARAM()从时间开始到当前时间采样（并积分）速度参数，或者你可以提供“相位”或“距离”参数并警告用户关于插值速度。与渲染相比，检查出许多参数值的成本可以忽略不计，是推荐的方法。

如果你在其他时间检查出参数值，或使用图层参数，你*必须*在完成后检查这些参数，即使发生了错误。记住，检查出的参数是只读的。

---

## 测试

尝试在RAM预览中使用你的插件，以确保你优雅地处理内存不足的情况。你的插件是否优雅地处理内存不足？

如果你在请求内存时收到`PF_Err_OUT_OF_MEMORY`（来自[错误代码](../../effect-basics/errors#error-codes)），你是否将其传递回After Effects？

当你的视频效果应用于仅音频图层时会发生什么？使用旧版本的插件创建的项目进行测试。
