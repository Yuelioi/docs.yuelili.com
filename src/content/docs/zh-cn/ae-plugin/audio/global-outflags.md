---
title: 全局输出标志
---
# 全局输出标志

所有音频效果必须设置 `PF_OutFlag_AUDIO_EFFECT_TOO` 或 `PF_OutFlag_AUDIO_EFFECT_ONLY`。

`PF_OutFlag_I_USE_AUDIO` 适用于检查音频数据但不修改它的视觉效果。

`PF_OutFlag_AUDIO_FLOAT_ONLY`、`PF_OutFlag_AUDIO_IIR` 和 `PF_OutFlag_I_SYNTHESIZE_AUDIO` 提供了对音频输出的更精细控制（详见 [PF_OutFlags](../../effect-basics/PF_OutData#pf_outflags)）。
