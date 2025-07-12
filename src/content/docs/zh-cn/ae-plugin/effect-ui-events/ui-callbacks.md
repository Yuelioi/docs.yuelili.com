---
title: UI 回调函数
---
# UI 回调函数

After Effects 提供了用于在坐标系之间转换以及获取有关绘图上下文的操作系统特定信息的回调函数，无需猜测或直接询问操作系统。请使用这些回调函数！这些回调函数的指针在 `PF_EventCallbacks` 中提供。使用 `AE_EffectUI.h` 和 `AE_EffectCB.h` 中的宏来访问这些例程。

虽然可以构建一个使用自定义 UI 的功能性插件而不实现坐标系转换回调函数，但当用户放大图层面板或旋转图层时，您的插件将表现不佳。我们添加了这些宏和回调函数，以便自定义用户界面可以轻松集成到 After Effects UI 中，而不会给开发人员带来用户界面开销。再次强调，请使用它们！

为了简化，这些宏默认了 `refcon` 和上下文句柄。`refcon` 假设您有一个名为 `"extra"` 的局部变量。默认上下文是当前上下文。这些默认参数在 `PF_EventCallbacks` 结构（位于 `AE_EffectUI.h` 中）中定义。您可以通过 `PF_EventExtra` 结构访问回调函数来覆盖默认值。我们不建议（也不支持）修改头文件中的宏。请不要这样做！

| 函数 | 用途 |
| --- | --- |
| `layer_to_comp` | 将图层面板坐标转换为合成面板坐标。 |
| | `<pre lang="cpp">`PF_Err layer_to_comp (``void      \*refcon,``  PF_ContextH    context,``A_long    curr_time,``  A_long    time_scale,``  PF_FixedPoint  \*pt);`</pre>` |
| `comp_to_layer` | 将合成面板坐标转换为图层面板坐标。 |
| | `<pre lang="cpp">`PF_Err comp_to_layer (``void      \*refcon,``  PF_ContextH    context,``A_long    curr_time,``  A_long    time_scale,``  PF_FixedPoint  \*pt);`</pre>` |
| `get_comp2layer_xform` | 返回用于从合成面板转换到图层面板的矩阵。 |
| | 如果 `*exists` 返回 `FALSE`，则无法计算矩阵，因为图层缩放到零。 |
| | `<pre lang="cpp">`PF_Err get_comp2layer_xform (``void       \*refcon,``  PF_ContextH     context,``A_long     curr_time,``  long       time_scale,``long       \*exists,``  PF_FloatMatrix  \*comp2layer);`</pre>` |
| `get_layer2comp_xform` | 返回用于从图层面板转换到合成面板的变换矩阵。 |
| | 此矩阵始终存在。 |
| | `<pre lang="cpp">`PF_Err get_layer2comp_xform (``void       \*refcon,``  PF_ContextH     context,``A_long     curr_time,``  A_long     time_scale,``  PF_FloatMatrix  \*layer2comp);`</pre>` |
| `source_to_frame` | 将当前上下文中的源坐标转换为屏幕坐标。 |
| | 屏幕（帧）坐标受当前缩放级别的影响。 |
| | `<pre lang="cpp">`PF_Err source_to_frame(``void      \*refcon,``  PF_ContextH    context,``  PF_FixedPoint  \*pt);`</pre>` |
| `frame_to_source` | 将 `*pt` 标识的屏幕坐标转换为当前上下文的源坐标。 |
| | `<pre lang="cpp">`PF_Err frame_to_source(``void      \*refcon,``  PF_ContextH    context,``  PF_FixedPoint  \*pt);`</pre>` |
| `PF_GET_PLATFORM_DATA` | 检索平台特定的数据。对于加载了本地化资源文件的插件，`PF_PlatData_RES_FILE_PATH` 将指向外部文件，而不是插件文件。 |
| | 如果您想要插件的路径，请使用 `PF_PlatData_EXE_FILE_PATH`。 |
| | 从 CS6 开始，请使用 `PF_PlatData_EXE_FILE_PATH_W` 和 `PF_PlatData_RES_FILE_PATH_W` 代替旧的非宽字符调用。 |
| | `<pre lang="cpp">`PF_Err PF_GET_PLATFORM_DATA (``PF_PlatDataID  which,``  void      \*ppData);`</pre>` |
| | `PF_PlatDataID` 可以有以下值： |
| | -`PF_PlatData_MAIN_WND` |
| | -`PF_PlatData_EXE_FILE_PATH_DEPRECATED` |
| | -`PF_PlatData_RES_FILE_PATH_DEPRECATED` |
| | -`PF_PlatData_RES_REFNUM` // macOS |
| | -`PF_PlatData_RES_DLLINSTANCE` // Win |
| | -`PF_PlatData_BUNDLE_REF` |
| | -`PF_PlatData_EXE_FILE_PATH_W` // 新的 CS6 |
| | -`PF_PlatData_RES_FILE_PATH_W` // 新的 CS6 |
