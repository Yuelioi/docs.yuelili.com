---
title: entry-point
---
# Entry Point

All communication between After Effects and an effect plug-in is initiated by After Effects, and it all happens by the host (After Effects) calling a single entry point function.

For all effect plug-ins, the entry point function must have the following signature:

```cpp
PF_Err main (
 PF_Cmd cmd,
 PF_InData *in_data,
 PF_OutData *out_data,
 PF_ParamDef *params[],
 PF_LayerDef *output,
 void *extra)
```

The name of the entry point function above is "main", but it can be whatever is specified in [PiPL Resources](../../intro/pipl-resources).

Before each call to the entry point function, After Effects updates [PF_InData](../PF_InData) and the plug- in's parameter array PF_ParamDef[] (except as noted).

After the plug-in returns from its call, After Effects checks [PF_OutData](../PF_OutData) for changes and, when appropriate, uses the PF_LayerDef the effect has rendered.

---

## Entry Point Function Parameters

| Argument | Purpose |
|---|---|
| [cmd](../command-selectors) | After Effects sets the [Command Selectors](../command-selectors) to tell the plug-in what to do. |
| [in_data](../PF_InData) | Information about the application's state and the data the plug-in is being told to act upon. |
| | Pointers to numerous interface and image manipulation functions are also provided. |
| [out_data](../PF_OutData) | Pass back information to After Effects by setting fields within out_data. |
| [params](../parameters) | An array of the plug-in's parameters at the time provided in in_data> current_time. |
| | `params[0]` is the input image (a [PF_EffectWorld / PF_LayerDef](../PF_EffectWorld)) to which the effect should be applied. |
| | These values are only valid during certain selectors (this is noted in the [selector descriptions](../command-selectors#calling-sequence)). |
| | Parameters are discussed at length here: [PF_ParamDef](../PF_ParamDef). |
| [output](../PF_EffectWorld) | The output image, to be rendered by the effect plug-in and passed back to After Effects. |
| | Only valid during certain selectors. |
| [extra](../../effect-ui-events/PF_EventExtra) | The extra parameter varies with the command sent or (in the case of [PF_Cmd_EVENT](../command-selectors#messaging), the [event type](../../effect-ui-events/effect-ui-events)). |
| | Used primarily for event management and [Parameter Supervision](../../effect-details/parameter-supervision). |
