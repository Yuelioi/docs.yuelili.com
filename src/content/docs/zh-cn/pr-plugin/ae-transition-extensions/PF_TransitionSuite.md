---
title: PF_TransitionSuite
---
# PF_TransitionSuite

在 PrSDKAESupport.h 中，我们添加了 `PF_TransitionSuite::RegisterTransitionInputParam()`。

此调用必须在 `PF_Cmd_PARAM_SETUP` 期间的 `PF_ADD_PARAM()` 调用之前进行。

传入要用作过渡另一侧输入图层的参数。

这使得您的效果可以像我们的原生过渡一样应用于时间轴中的两个剪辑之间，但它会显示在效果控制面板中，并具有与现有 AE 效果类似的可关键帧参数。
