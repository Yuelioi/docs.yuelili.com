---
title: 入口函数
---
# Entry Point

After Effects 和效果插件之间的所有通信都是由 After Effects 发起的，并且都是通过主机（After Effects）调用一个单一的入口函数来实现的。

对于所有效果插件，入口函数必须具有以下签名：

```cpp
PF_Err main (
 PF_Cmd cmd,
 PF_InData *in_data,
 PF_OutData *out_data,
 PF_ParamDef *params[],
 PF_LayerDef *output,
 void *extra)
```

上述入口函数的名称是 "main"，但它可以是 [PiPL 资源](../../intro/pipl-resources) 中指定的任何名称。

在每次调用入口函数之前，After Effects 会更新 [PF_InData](../PF_InData) 和插件的参数数组 `PF_ParamDef[]`（除非另有说明）。

插件从调用返回后，After Effects 会检查 [PF_OutData](../PF_OutData) 是否有变化，并在适当的情况下使用效果渲染的 `PF_LayerDef`。

---

## 入口函数参数

| 参数 | 用途 |
| --- | --- |
| [cmd](../command-selectors) | After Effects 设置[命令选择器](../command-selectors) 来告诉插件要做什么。 |
| [in_data](../PF_InData) | 关于应用程序状态的信息以及插件被告知要处理的数据。 |
| | 还提供了许多接口和图像操作函数的指针。 |
| [out_data](../PF_OutData) | 通过在 `out_data` 中设置字段将信息传递回 After Effects。 |
| [params](../parameters) | 插件在 `in_data> current_time` 时提供的参数数组。 |
| | `params[0]` 是输入图像（一个 [PF_EffectWorld / PF_LayerDef](../PF_EffectWorld)），效果应应用于此图像。 |
| | 这些值仅在特定选择器期间有效（这在[选择器描述](../command-selectors#calling-sequence) 中有说明）。 |
| | 参数在此处详细讨论：[PF_ParamDef](../PF_ParamDef)。 |
| [output](../PF_EffectWorld) | 输出图像，由效果插件渲染并传递回 After Effects。 |
| | 仅在特定选择器期间有效。 |
| [extra](../../effect-ui-events/PF_EventExtra) | `extra` 参数根据发送的命令或（在 [PF_Cmd_EVENT](../command-selectors#messaging) 的情况下，[事件类型](../../effect-ui-events/effect-ui-events)）而变化。 |
| | 主要用于事件管理和[参数监督](../../effect-details/parameter-supervision)。 |
