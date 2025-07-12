---
title: 运动模糊
---
# 运动模糊

效果会处理自己的运动模糊，使用 [PF_InData>shutter_angle](../../effect-basics/PF_InData#pf_indata-members) 和 [PF_InData>shutter_phase](../../effect-basics/PF_InData#pf_indata-members)。

插件必须设置 [PF_OutFlag_I_USE_SHUTTER_ANGLE](../../effect-basics/PF_OutData#pf_outflags)，以便 After Effects 知道它需要这些信息。

它们必须在其他时间[检出](../interaction-callback-functions#interaction-callback-functions)自己的参数，以检查它们在快门间隔内的变化。

如果插件在此间隔之外检出参数，请设置 [PF_OutFlag_WIDE_TIME_INPUT](../../effect-basics/PF_OutData#pf_outflags)。

这样做可以让 After Effects 在采样间隔内比较参数，并确定它们是否发生了变化。
