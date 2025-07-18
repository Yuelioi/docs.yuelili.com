---
title: useful-utility-functions
---
# Useful Utility Functions

## PF_EffectUISuite

Although not strictly concerned with parameters, this suite can change the name of the options button.

| Function | Purpose |
|---|---|
| `PF_SetOptionsButtonName` | Changes the text on the options button in the effect controls palette. |
| | !!! note |
| | This must be called during [PF_Cmd_PARAM_SETUP](../../effect-basics/command-selectors#global-selectors). |
| | <pre lang="cpp">PF_SetOptionsButtonName(<br/>  PF_ProgPtr    effect_ref,<br/>  const A_char  \*nameZ);</pre> |
| | `nameZ` may be up to `A_char[31]` in length. |

---

## PF_AppSuite

Roughly 437 years ago, when we released After Effects 5.0, we published some useful utility callbacks in PF_AppSuite. They're as useful today as they were then. After Effects has user-controllable UI brightness.

In addition to the [PF_EffectCustomUIOverlayThemeSuite](../../effect-ui-events/custom-ui-and-drawbot#pf_effectcustomuioverlaythemesuite) for custom UI in effects, use these calls to integrate seamlessly into the After Effects UI.

What better way to shame someone into purchasing a copy of your plug-in than by putting their personal information into a watermark, eh? Or set the cursor to add mask vertices, just to confuse people? Heh heh heh. But that would be wrong.

| Function | Purpose |
|---|---|
| `PF_AppGetBgColor` | Retrieves the current background color. |
| | <pre lang="cpp">PF_AppGetBgColor(<br/>  PF_App_Color  bg_colorP);</pre> |
| `PF_AppGetColor` | Retrieves the color for the specified UI element. |
| | See AE_EffectSuites.h for a complete enumeration of available `PF_App_Color` values; basically any color in After Effects' UI can be retrieved. |
| | CC adds several new `PF_App_ColorType` enum values for new elements that can be queried. |
| | Note that in CS6, the color definitions are off from `FILL_LIGHT` downward. |
| | Use following psuedocode for CS6 only: |
| | <pre lang="cpp">GetColor(enum e)<br/>{<br/>  if host_is_CS6 and e >= FILL_LIGHT<br/>  e += 3<br/>    call real GetColor<br/>}<br/><br/>PF_AppGetColor(<br/>  PF_App_ColorType  color_type,<br/>  PF_App_Color      \*app_colorP);</pre> |
| `PF_AppGetLanguage` | New in CC. Retrieves the active displayed language of AE UI so plug-in can match. Here are the possible language codes as of CC: |
| | - Chinese - `zh_CN` |
| | - English - `en_US` |
| | - French - `fr_FR` |
| | - German - `de_DE` |
| | - Italian - `it_IT` |
| | - Japanese - `ja_JP` |
| | - Korean - `ko_KR` |
| | - Spanish - `es_ES` |
| | <pre lang="cpp">PF_AppGetLanguage(<br/>  A_char  lang_tagZ);</pre> |
| `PF_GetPersonalInfo` | Retrieves the user's registration information. |
| | <pre lang="cpp">PF_GetPersonalInfo(<br/>  PF_AppPersonalTextInfo  \*ptiP);<br/><br/>typedef struct PF_AppPersonalTextInfo {<br/>  A_char  name[PF_APP_MAX_PERS_LEN + 1];<br/>  A_char  org[PF_APP_MAX_PERS_LEN + 1];<br/>  A_char  serial_str[PF_APP_MAX_PERS_LEN+1];<br/>} PF_AppPersonalTextInfo;</pre> |
| `PF_GetFontStyleSheet` | Retrieves font style sheet information for the fonts used in After Effects' UI. |
| | Trivia: The font used in After Effects' UI starting in 15.0 is Adobe Clean. |
| | Before that, it was Tahoma on Windows and Lucida Grande on macOS X. |
| | <pre lang="cpp">PF_GetFontStyleSheet(<br/>  PF_FontStyleSheet  sheet,<br/>  PF_FontName        \*font_nameP0,<br/>  A_short    \*font_numPS0,<br/>  A_short    \*sizePS0,<br/>  A_short    \*stylePS0);</pre> |
| `PF_SetCursor` | Sets the cursor to any of After Effects' cursors. See AE_EffectUI.h for a complete enumeration. |
| | Set to: |
| | - `PF_Cursor_NONE` to allow After Effects to set the cursor. |
| | - `PF_Cursor_CUSTOM` if you've used OS-specific calls to change the cursor (After Effects will honor your changes). |
| | <pre lang="cpp">PF_SetCursor(<br/>  PF_CursorType  cursor);</pre> |
| `PF_IsRenderEngine` | Returns TRUE if After Effects is running in watched folder mode, or is a render engine installation. |
| | <pre lang="cpp">PF_IsRenderEngine(<br/>  PF_Boolean  \*render_enginePB);</pre> |
| | As of AE6.5, this function returns `TRUE` if the installation is the render engine, or if the After Effects is being run with no UI, or if After Effects is in watched folder mode. |
| `PF_AppColorPickerDialog` | Displays the After Effects color picker dialog (which may be the system color picker, depending on the user's preferences). |
| | Will return `PF_Interrupt_CANCEL` if user cancels dialog. Returned color is in the project's working color space. |
| | <pre lang="cpp">PF_AppColorPickerDialog(<br/>  const A_char         \*dialog_titleZ0,<br/>  const PF_PixelFloat  \*sample_colorP,<br/>  PF_PixelFloat        \*result_colorP);</pre> |
| `PF_GetMouse` | Returns the position of the mouse in the custom UI coordinate space. |
| | <pre lang="cpp">PF_GetMouse(<br/>  PF_Point  \*pointP);</pre> |
| `PF_InvalidateRect` | Queue up a [redraw](../../effect-ui-events/custom-ui-and-drawbot#redrawing) of a specific area of the custom UI for an effect. |
| | Only valid while handling a non-drawing event in the effect. |
| | Specify `rectP0` as `NULL` to invalidate the entire window. The redraw will happen at the next available idle moment after returning from the event. |
| | Set the `PF_EO_UPDATE_NOW` event outflag to update the window immediately after the event returns. |
| | <pre lang="cpp">PF_InvalidateRect(<br/>  const PF_ContextH  contextH,<br/>  const PF_Rect*     rectP0);</pre> |
| `PF_ConvertLocalToGlobal` | Converts from the custom UI coordinate system to global screen coordinates. Use only during custom UI event handling. |
| | <pre lang="cpp">PF_ConvertLocalToGlobal(<br/>  const PF_Point  \*localP,<br/>  PF_Point        \*globalP);</pre> |

---

## Advanced Appsuite: You Can Do That?

`PF_AdvAppSuite` was originally designed for some pretty nefarious purposes; an external application was pretending to be an After Effects plug-in, and required ways to notify After Effects of the changes it had made to the project. Our API impurity is your gain.

---

## PF_AdvAppSuite2

| Function | Purpose |
|---|---|
| `PF_SetProjectDirty` | Tells After Effects that the project has been changed since it was last saved. |
| | <pre lang="cpp">PF_SetProjectDirty(void);</pre> |
| `PF_SaveProject` | Saves the project to the current path. To save the project elsewhere, use [AEGP_SaveProjectToPath()](../../aegps/aegp-suites#aegp_projsuite6). |
| | <pre lang="cpp">PF_SaveProject(void);</pre> |
| `PF_SaveBackgroundState` | Stores the background state (After Effects' position in the stacking order of open applications and windows). |
| | <pre lang="cpp">PF_SaveBackgroundState(void);</pre> |
| `PF_ForceForeground` | Brings After Effects to the front of all currently open applications and windows. |
| | <pre lang="cpp">PF_ForceForeground(void);</pre> |
| `PF_RestoreBackgroundState` | Puts After Effects back where it was, in relation to other applications and windows. |
| | <pre lang="cpp">PF_RestoreBackgroundState(void);</pre> |
| `PF_RefreshAllWindows` | Forces all After Effects windows to update. |
| | Note that although the Composition panel will be refreshed, this does not guarantee a new frame will be sent to External Monitor Preview plug-ins. |
| | <pre lang="cpp">PF_RefreshAllWindows(void);</pre> |
| `PF_InfoDrawText` | Writes text into the After Effects info palette. |
| | <pre lang="cpp">PF_InfoDrawText(<br/>  const A_char  \*line1Z0,<br/>  const A_char  \*line2Z0);</pre> |
| `PF_InfoDrawColor` | Draws the specified color in the After Effects info palette (alpha is ignored). |
| | <pre lang="cpp">PF_InfoDrawColor(<br/>  PF_Pixel  color);</pre> |
| `PF_InfoDrawText3` | Writes three lines of text into the After Effects info palette. |
| | <pre lang="cpp">PF_InfoDrawText3(<br/>  const A_char  \*line1Z0,<br/>  const A_char  \*line2Z0,<br/>  const A_char  \*line3Z0);</pre> |
| `PF_InfoDrawText3Plus` | Writes three lines of text into the After Effects info palette, with portions of the second and third lines left and right justified. |
| | <pre lang="cpp">PF_InfoDrawText3Plus(<br/>  const A_char  \*line1Z0,<br/>  const A_char  \*line2_jrZ0,<br/>  const A_char  \*line2_jlZ0,<br/>  const A_char  \*line3_jrZ0,<br/>  const A_char  \*line3_jlZ0);</pre> |
| `PF_AppendInfoText` | Appends characters to the currently-displayed info text. |
| | <pre lang="cpp">PF_AppendInfoText(<br/>  const A_char  \*appendZ0);</pre> |

---

## Formatting Time

`PF_AdvTimeSuite` provides several functions to match how After Effects displays time. In fact, these are the same functions we use internally.

### PF_AdvTimeSuite4

| Function | Purpose |
|---|---|
| `PF_FormatTimeActiveItem` | Given a time value and scale, returns a formatted string representing that time. |
| | If durationB is `TRUE`, appropriate units will be appended. |
| | <pre lang="cpp">PF_FormatTimeActiveItem(<br/>  A_long      time_valueUL,<br/>  A_u_long    time_scaleL,<br/>  PF_Boolean  durationB,<br/>  A_char      \*time_buf);</pre> |
| `PF_FormatTime` | Contextualizes the formatted time string for the given PF_InData and PF_EffectWorld (i.e., layer time). |
| | <pre lang="cpp">PF_FormatTime(<br/>  PF_InData       \*in_data,<br/>  PF_EffectWorld  \*world,<br/>  A_long          time_valueUL,<br/>  A_u_long        time_scaleL,<br/>  PF_Boolean      durationB,<br/>  A_char          \*time_buf);</pre> |
| `PF_FormatTimePlus` | Allows you to select composition or layer time. |
| | <pre lang="cpp">PF_FormatTimePlus(<br/>  PF_InData       \*in_data,<br/>  PF_EffectWorld  \*world,<br/>  A_long          time_valueUL,<br/>  A_u_long        time_scaleL,<br/>  PF_Boolean      comp_timeB,<br/>  PF_Boolean      durationB,<br/>  A_char          \*time_buf);</pre> |
| `PF_GetTimeDisplayPref` | Returns the starting frame number (specified by the user in composition settings), and the composition's time display preferences. |
| | Updated in 14.2 to support higher frame rates. |
| | <pre lang="cpp">PF_GetTimeDisplayPref(<br/>  PF_TimeDisplayPref2  \*tdp,<br/>  A_long               \*starting_num);<br/>  typedef              struct {<br/>  A_char               display_mode;<br/>  A_long               framemax;<br/>  A_long               frames_per_foot;<br/>  A_char               frames_start;<br/>  A_Boolean            nondrop30B;<br/>  A_Boolean            honor_source_timecodeB;<br/>  A_Boolean            use_feet_framesB;<br/>  } PF_TimeDisplayPrefVersion3;</pre> |
| `PF_TimeCountFrames` | New in 15.0. Returns the index of the frame in the current comp. |
| | <pre lang="cpp">PF_TimeCountFrames(<br/>  const A_Time  \*start_timeTP,<br/>  const A_Time  \*time_stepTP,<br/>  A_Boolean     include_partial_frameB,<br/>  A_long        \*frame_countL);</pre> |

---

## Affecting The Timeline

Long ago, we helped a developer integrate their stand-alone tracker with After Effects by exposing a set of functions to give them some way to notify us of, and be notified of, changes to the timeline.

With the numerous AEGP API calls available, these aren't used much, but they're still available.

Don't confuse this suite with [AEGP_ItemSuite](../../aegps/aegp-suites#aegp_itemsuite9).

---

### PF_AdvItemSuite1

| Function | Purpose |
|---|---|
| `PF_MoveTimeStep` | Moves current time num_stepsL in the specified direction. |
| | <pre lang="cpp">PF_MoveTimeStep(<br/>  PF_InData       \*in_data,<br/>  PF_EffectWorld  \*world,<br/>  PF_Step         time_dir,<br/>  A_long          num_stepsL);</pre> |
| `PF_MoveTimeStepActiveItem` | Moves num_stepsL in the specified direction, for the active item. |
| | <pre lang="cpp">PF_MoveTimeStepActiveItem(<br/>  PF_Step  time_dir,<br/>  A_long   num_stepsL);</pre> |
| `PF_TouchActiveItem` | Tells After Effects that the active item must be updated. |
| | <pre lang="cpp">PF_TouchActiveItem (void);</pre> |
| `PF_ForceRerender` | Forces After Effects to rerender the current frame. |
| | <pre lang="cpp">PF_ForceRerender(<br/>  PF_InData       \*in_data,<br/>  PF_EffectWorld  \*world);</pre> |
| `PF_EffectIsActiveOrEnabled` | Returns whether the effect which owns the `PF_ContextH` is currently active or enabled (if it isn't, After Effects won't be listening for function calls from it). |
| | <pre lang="cpp">PF_EffectIsActiveOrEnabled(<br/>  PF_ContextH  contextH,<br/>  PF_Boolean   \*enabledPB);</pre> |

---

## Accessing Auxiliary Channel Data

Some file types contain more than just pixel data; use `PF_ChannelSuite` to determine whether such information is present, and the macros in AE_ChannelSuites.h to retrieve it in the format you need.

---

### PF_ChannelSuite1

| Function | Purpose |
|---|---|
| `PF_GetLayerChannelCount` | Retrieves the number of auxiliary channels associated with the indexed layer. |
| | <pre lang="cpp">PF_GetLayerChannelCount(<br/>  PF_ProgPtr     effect_ref,<br/>  PF_ParamIndex  param_index,<br/>  A_long         \*num_channelsPL);</pre> |
| `PF_GetLayerChannelIndexedRefAndDesc` | Retrieves (by index) a reference to, and description of, the specified channel. |
| | <pre lang="cpp">PF_GetLayerChannelIndexedRefAndDesc(<br/>  PF_ProgPtr       effect_ref,<br/>  PF_ParamIndex    param_index,<br/>  PF_ChannelIndex  channel_index,<br/>  PF_Boolean       \*foundPB,<br/>  PF_ChannelRef    \*channel_refP,<br/>  PF_ChannelDesc   \*channel_descP);</pre> |
| `PF_GetLayerChannelTypedRefAndDesc` | Retrieves an auxiliary channel by type. |
| | Returned information is valid only if `foundPB` returns `TRUE`. |
| | <pre lang="cpp">PF_GetLayerChannelTypedRefAndDesc(<br/>  PF_ProgPtr      effect_ref,<br/>  PF_ParamIndex   param_index,<br/>  PF_ChannelType  channel_type,<br/>  PF_Boolean      \*foundPB,<br/>  PF_ChannelRef   \*channel_refP,<br/>  PF_ChannelDesc  \*channel_descP);</pre> |
| | PF_DataType will be one of the following: |
| | - `PF_DataType_FLOAT` - 34 bytes |
| | - `PF_DataType_DOUBLE` - 38 bytes |
| | - `PF_DataType_LONG` - 34 bytes |
| | - `PF_DataType_SHORT` - 32 bytes |
| | - `PF_DataType_FIXED_16_16` - 34 bytes |
| | - `PF_DataType_CHAR` - 31 byte |
| | - `PF_DataType_U_BYTE` - 31 byte |
| | - `PF_DataType_U_SHORT` - 32 bytes |
| | - `PF_DataType_U_FIXED_16_16` - 34 bytes |
| | - `PF_DataType_RGB` - 3 bytes |
| | PF_ChannelType will be one of the following: |
| | - `PF_ChannelType_DEPTH` |
| | - `PF_ChannelType_NORMALS` |
| | - `PF_ChannelType_OBJECTID` |
| | - `PF_ChannelType_MOTIONVECTOR` |
| | - `PF_ChannelType_BK_COLOR` |
| | - `PF_ChannelType_TEXTURE` |
| | - `PF_ChannelType_COVERAGE` |
| | - `PF_ChannelType_NODE` |
| | - `PF_ChannelType_MATERIAL` |
| | - `PF_ChannelType_UNCLAMPED` |
| | - `PF_ChannelType_UNKNOWN` |
| `PF_CheckoutLayerChannel` | Retrieves the `PF_ChannelChunk` containing the data associated with the given `PF_ChannelRefPtr`. |
| | <pre lang="cpp">PF_CheckoutLayerChannel(<br/>  PF_ProgPtr        effect_ref,<br/>  PF_ChannelRefPtr  channel_refP,<br/>  long              what_time,<br/>  long              duration,<br/>  unsigned long     time_scale,<br/>  PF_DataType       data_type,<br/>  PF_ChannelChunk   \*channel_chunkP);</pre> |
| `PF_CheckinLayerChannel` | Checks in the `PF_ChannelChunk`. Always, always, always check the data back in. |
| | <pre lang="cpp">PF_CheckinLayerChannel(<br/>  PF_ProgPtr        effect_ref,<br/>  PF_ChannelRefPtr  channel_refP,<br/>  PF_ChannelChunk   \*channel_chunkP);</pre> |
