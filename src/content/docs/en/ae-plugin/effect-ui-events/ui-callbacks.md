---
title: ui-callbacks
---
# UI Callbacks

After Effects provides callbacks for transposing between coordinate systems, and obtaining OS-specific information about drawing contexts, without guesswork or asking the OS directly. Use these callbacks! Pointers to these callbacks are provided in PF_EventCallbacks. Use the macros in AE_EffectUI.h and AE_EffectCB.h to access these routines.

It is possible to build a functioning plug-in which utilizes a custom UI without implementing the coordinate system transposition callbacks. However, the moment a user zooms into the layer panel or rotates a layer, your plug-in will behave badly. We added these macros and callbacks so that custom user interfaces could be easily integrated into the After Effects UI, without inflicting user interface overhead on developers. Again, please use them!

These macros default the refcon and context handle for simplicity. The refcon assumes you have a local variable named "extra". The default context is the current context. These default parameters are defined in the PF_EventCallbacks structure (in AE_EffectUI.h). You can override the defaults by accessing the callbacks through the PF_EventExtra structure. We don't recommend (or support) modification of the macros in the header file. Don't do it!

| Function | Purpose |
|---|---|
| `layer_to_comp` | Transforms layer panel coordinates to the composition panel coordinates. |
| | <pre lang="cpp">PF_Err layer_to_comp (<br/>  void   \*refcon,<br/>  PF_ContextH    context,<br/>  A_long         curr_time,<br/>  A_long         time_scale,<br/>  PF_FixedPoint  \*pt);</pre> |
| `comp_to_layer` | Transforms composition panel coordinates to the layer panel coordinates. |
| | <pre lang="cpp">PF_Err comp_to_layer (<br/>  void   \*refcon,<br/>  PF_ContextH    context,<br/>  A_long         curr_time,<br/>  A_long         time_scale,<br/>  PF_FixedPoint  \*pt);</pre> |
| `get_comp2layer_xform` | Returns the matrix used to convert from the composition panel to the layer panel. |
| | If `*exists` returns `FALSE`, the matrix cannot be computed because the layer scales to zero. |
| | <pre lang="cpp">PF_Err get_comp2layer_xform (<br/>  void    \*refcon,<br/>  PF_ContextH     context,<br/>  A_long          curr_time,<br/>  long    time_scale,<br/>  long    \*exists,<br/>  PF_FloatMatrix  \*comp2layer);</pre> |
| `get_layer2comp_xform` | Returns the transformation matrix used to convert from the layer panel to the composition panel. |
| | This always exists. |
| | <pre lang="cpp">PF_Err get_layer2comp_xform (<br/>  void    \*refcon,<br/>  PF_ContextH     context,<br/>  A_long          curr_time,<br/>  A_long          time_scale,<br/>  PF_FloatMatrix  \*layer2comp);</pre> |
| `source_to_frame` | Transforms the source coordinates in the current context to screen coordinates. |
| | Screen (frame) coordinates are affected by the current zoom level. |
| | <pre lang="cpp">PF_Err source_to_frame(<br/>  void   \*refcon,<br/>  PF_ContextH    context,<br/>  PF_FixedPoint  \*pt);</pre> |
| `frame_to_source` | Transforms the screen coordinates identified by `*pt` to the source coordinates of the current context. |
| | <pre lang="cpp">PF_Err frame_to_source(<br/>  void   \*refcon,<br/>  PF_ContextH    context,<br/>  PF_FixedPoint  \*pt);</pre> |
| `PF_GET_PLATFORM_DATA` | Retrieves platform-specific data. For plug-ins loaded with localized resource files, `PF_PlatData_RES_FILE_PATH` will point to the external file, not the plug-in file. |
| | Use `PF_PlatData_EXE_FILE_PATH` if you want the path of your plug-in. |
| | Starting in CS6, use `PF_PlatData_EXE_FILE_PATH_W` and `PF_PlatData_RES_FILE_PATH_W` instead of the old non-wide calls. |
| | <pre lang="cpp">PF_Err PF_GET_PLATFORM_DATA (<br/>  PF_PlatDataID  which,<br/>  void   \*ppData);</pre> |
| | `PF_PlatDataID` can have the following values: |
| | - `PF_PlatData_MAIN_WND` |
| | - `PF_PlatData_EXE_FILE_PATH_DEPRECATED` |
| | - `PF_PlatData_RES_FILE_PATH_DEPRECATED` |
| | - `PF_PlatData_RES_REFNUM` // macOS |
| | - `PF_PlatData_RES_DLLINSTANCE` // Win |
| | - `PF_PlatData_BUNDLE_REF` |
| | - `PF_PlatData_EXE_FILE_PATH_W` // new CS6 |
| | - `PF_PlatData_RES_FILE_PATH_W` // new CS6 |
