---
title: 有用的实用函数
---
# 有用的实用函数

## PF_EffectUISuite

虽然并不严格与参数相关，但这个套件可以更改选项按钮的名称。

| 函数 | 用途 |
|---|---|
| `PF_SetOptionsButtonName` | 更改效果控制面板中选项按钮上的文本。 |
| | !!! 注意 |
| | 必须在 [PF_Cmd_PARAM_SETUP](../../effect-basics/command-selectors#global-selectors) 期间调用此函数。 |
| | <pre lang="cpp">PF_SetOptionsButtonName(<br/>  PF_ProgPtr    effect_ref,<br/>  const A_char  \*nameZ);</pre> |
| | `nameZ` 的长度最多为 `A_char[31]`。 |

---

## PF_AppSuite

大约 437 年前，当我们发布 After Effects 5.0 时，我们在 PF_AppSuite 中发布了一些有用的实用回调函数。它们今天仍然像那时一样有用。After Effects 具有用户可控制的 UI 亮度。

除了用于效果中自定义 UI 的 [PF_EffectCustomUIOverlayThemeSuite](../../effect-ui-events/custom-ui-and-drawbot#pf_effectcustomuioverlaythemesuite) 外，还可以使用这些调用来无缝集成到 After Effects UI 中。

还有什么比将某人的个人信息放入水印中更能羞辱他们购买你的插件呢？或者将光标设置为添加遮罩顶点，只是为了迷惑人们？嘿嘿嘿。但那样做是不对的。

| 函数 | 用途 |
|---|---|
| `PF_AppGetBgColor` | 获取当前的背景颜色。 |
| | <pre lang="cpp">PF_AppGetBgColor(<br/>  PF_App_Color  bg_colorP);</pre> |
| `PF_AppGetColor` | 获取指定 UI 元素的颜色。 |
| | 请参阅 AE_EffectSuites.h 以获取完整的 `PF_App_Color` 值枚举；基本上可以获取 After Effects UI 中的任何颜色。 |
| | CC 添加了几个新的 `PF_App_ColorType` 枚举值，用于查询新元素。 |
| | 注意，在 CS6 中，颜色定义从 `FILL_LIGHT` 开始向下偏移。 |
| | 仅在 CS6 中使用以下伪代码： |
| | <pre lang="cpp">GetColor(enum e)<br/>{<br/>  if host_is_CS6 and e >= FILL_LIGHT<br/>  e += 3<br/>    call real GetColor<br/>}<br/><br/>PF_AppGetColor(<br/>  PF_App_ColorType  color_type,<br/>  PF_App_Color      \*app_colorP);</pre> |
| `PF_AppGetLanguage` | CC 新增。获取 AE UI 的当前显示语言，以便插件可以匹配。以下是 CC 中可能的语言代码： |
| | - 中文 - `zh_CN` |
| | - 英文 - `en_US` |
| | - 法文 - `fr_FR` |
| | - 德文 - `de_DE` |
| | - 意大利文 - `it_IT` |
| | - 日文 - `ja_JP` |
| | - 韩文 - `ko_KR` |
| | - 西班牙文 - `es_ES` |
| | <pre lang="cpp">PF_AppGetLanguage(<br/>  A_char  lang_tagZ);</pre> |
| `PF_GetPersonalInfo` | 获取用户的注册信息。 |
| | <pre lang="cpp">PF_GetPersonalInfo(<br/>  PF_AppPersonalTextInfo  \*ptiP);<br/><br/>typedef struct PF_AppPersonalTextInfo {<br/>  A_char  name[PF_APP_MAX_PERS_LEN + 1];<br/>  A_char  org[PF_APP_MAX_PERS_LEN + 1];<br/>  A_char  serial_str[PF_APP_MAX_PERS_LEN+1];<br/>} PF_AppPersonalTextInfo;</pre> |
| `PF_GetFontStyleSheet`| 获取 After Effects UI 中使用的字体的样式表信息。 |
| | 小知识：从 15.0 开始，After Effects UI 中使用的字体是 Adobe Clean。 |
| | 在此之前，Windows 上是 Tahoma，macOS X 上是 Lucida Grande。 |
| | <pre lang="cpp">PF_GetFontStyleSheet(<br/>  PF_FontStyleSheet  sheet,<br/>  PF_FontName        \*font_nameP0,<br/>  A_short     \*font_numPS0,<br/>  A_short     \*sizePS0,<br/>  A_short     \*stylePS0);</pre> |
| `PF_SetCursor` | 将光标设置为 After Effects 的任何光标。请参阅 AE_EffectUI.h 以获取完整的枚举。 |
| | 设置为： |
| | - `PF_Cursor_NONE` 以允许 After Effects 设置光标。 |
| | - `PF_Cursor_CUSTOM` 如果你已经使用了特定于操作系统的调用来更改光标（After Effects 将尊重你的更改）。 |
| | <pre lang="cpp">PF_SetCursor(<br/>  PF_CursorType  cursor);</pre> |
| `PF_IsRenderEngine` | 如果 After Effects 正在以监视文件夹模式运行，或者是渲染引擎安装，则返回 TRUE。 |
| | <pre lang="cpp">PF_IsRenderEngine(<br/>  PF_Boolean  \*render_enginePB);</pre> |
| | 从 AE6.5 开始，如果安装是渲染引擎，或者 After Effects 在没有 UI 的情况下运行，或者 After Effects 处于监视文件夹模式，则此函数返回 `TRUE`。 |
| `PF_AppColorPickerDialog` | 显示 After Effects 颜色选择器对话框（根据用户的偏好，可能是系统颜色选择器）。 |
| | 如果用户取消对话框，则返回 `PF_Interrupt_CANCEL`。返回的颜色是项目的工作颜色空间中的颜色。 |
| | <pre lang="cpp">PF_AppColorPickerDialog(<br/>  const A_char         \*dialog_titleZ0,<br/>  const PF_PixelFloat  \*sample_colorP,<br/>  PF_PixelFloat        \*result_colorP);</pre> |
| `PF_GetMouse` | 返回自定义 UI 坐标空间中鼠标的位置。 |
| | <pre lang="cpp">PF_GetMouse(<br/>  PF_Point  \*pointP);</pre> |
| `PF_InvalidateRect` | 排队重新绘制效果的自定义 UI 的特定区域。 |
| | 仅在处理效果中的非绘制事件时有效。 |
| | 将 `rectP0` 指定为 `NULL` 以使整个窗口无效。重新绘制将在事件返回后的下一个空闲时刻进行。 |
| | 设置 `PF_EO_UPDATE_NOW` 事件标志以在事件返回后立即更新窗口。 |
| | <pre lang="cpp">PF_InvalidateRect(<br/>  const PF_ContextH  contextH,<br/>  const PF_Rect*     rectP0);</pre> |
| `PF_ConvertLocalToGlobal` | 将自定义 UI 坐标系转换为全局屏幕坐标。仅在自定义 UI 事件处理期间使用。 |
| | <pre lang="cpp">PF_ConvertLocalToGlobal(<br/>  const PF_Point  \*localP,<br/>  PF_Point        \*globalP);</pre> |

---

## 高级 Appsuite：你可以做到吗？

`PF_AdvAppSuite` 最初是为一些相当邪恶的目的设计的；一个外部应用程序假装是 After Effects 插件，并要求通知 After Effects 它对项目所做的更改。我们的 API 不纯正是你的收获。

---

## PF_AdvAppSuite2

| 函数 | 用途 |
|---|---|
| `PF_SetProjectDirty` | 告诉 After Effects 项目自上次保存以来已更改。 |
| | <pre lang="cpp">PF_SetProjectDirty(void);</pre> |
| `PF_SaveProject` | 将项目保存到当前路径。要将项目保存到其他地方，请使用 [AEGP_SaveProjectToPath()](../../aegps/aegp-suites#aegp_projsuite6)。 |
| | <pre lang="cpp">PF_SaveProject(void);</pre> |
| `PF_SaveBackgroundState`| 存储背景状态（After Effects 在打开的应用程序和窗口堆叠顺序中的位置）。 |
| | <pre lang="cpp">PF_SaveBackgroundState(void);</pre> |
| `PF_ForceForeground` | 将 After Effects 带到所有当前打开的应用程序和窗口的前面。 |
| | <pre lang="cpp">PF_ForceForeground(void);</pre> |
| `PF_RestoreBackgroundState` | 将 After Effects 放回原来的位置，相对于其他应用程序和窗口。 |
| | <pre lang="cpp">PF_RestoreBackgroundState(void);</pre> |
| `PF_RefreshAllWindows` | 强制所有 After Effects 窗口更新。 |
| | 注意，尽管合成面板将刷新，但这并不保证会向外部监视器预览插件发送新帧。 |
| | <pre lang="cpp">PF_RefreshAllWindows(void);</pre> |
| `PF_InfoDrawText` | 在 After Effects 信息面板中写入文本。 |
| | <pre lang="cpp">PF_InfoDrawText(<br/>  const A_char  \*line1Z0,<br/>  const A_char  \*line2Z0);</pre> |
| `PF_InfoDrawColor` | 在 After Effects 信息面板中绘制指定的颜色（忽略 alpha）。 |
| | <pre lang="cpp">PF_InfoDrawColor(<br/>  PF_Pixel  color);</pre> |
| `PF_InfoDrawText3` | 在 After Effects 信息面板中写入三行文本。 |
| | <pre lang="cpp">PF_InfoDrawText3(<br/>  const A_char  \*line1Z0,<br/>  const A_char  \*line2Z0,<br/>  const A_char  \*line3Z0);</pre> |
| `PF_InfoDrawText3Plus` | 在 After Effects 信息面板中写入三行文本，第二行和第三行的部分文本左右对齐。 |
| | <pre lang="cpp">PF_InfoDrawText3Plus(<br/>  const A_char  \*line1Z0,<br/>  const A_char  \*line2_jrZ0,<br/>  const A_char  \*line2_jlZ0,<br/>  const A_char  \*line3_jrZ0,<br/>  const A_char  \*line3_jlZ0);</pre> |
| `PF_AppendInfoText` | 将字符追加到当前显示的信息文本中。 |
| | <pre lang="cpp">PF_AppendInfoText(<br/>  const A_char  \*appendZ0);</pre> |

---

## 格式化时间

`PF_AdvTimeSuite` 提供了几个函数来匹配 After Effects 显示时间的方式。事实上，这些是我们内部使用的相同函数。

### PF_AdvTimeSuite4

| 函数 | 用途 |
|---|---|
| `PF_FormatTimeActiveItem` | 给定时间值和比例，返回表示该时间的格式化字符串。 |
| | 如果 durationB 为 `TRUE`，将附加适当的单位。 |
| | <pre lang="cpp">PF_FormatTimeActiveItem(<br/>  A_long      time_valueUL,<br/>  A_u_long    time_scaleL,<br/>  PF_Boolean  durationB,<br/>  A_char      \*time_buf);</pre> |
| `PF_FormatTime` | 为给定的 PF_InData 和 PF_EffectWorld（即图层时间）上下文化格式化时间字符串。 |
| | <pre lang="cpp">PF_FormatTime(<br/>  PF_InData       \*in_data,<br/>  PF_EffectWorld  \*world,<br/>  A_long   time_valueUL,<br/>  A_u_long        time_scaleL,<br/>  PF_Boolean      durationB,<br/>  A_char   \*time_buf);</pre> |
| `PF_FormatTimePlus` | 允许你选择合成时间或图层时间。 |
| | <pre lang="cpp">PF_FormatTimePlus(<br/>  PF_InData       \*in_data,<br/>  PF_EffectWorld  \*world,<br/>  A_long   time_valueUL,<br/>  A_u_long        time_scaleL,<br/>  PF_Boolean      comp_timeB,<br/>  PF_Boolean      durationB,<br/>  A_char   \*time_buf);</pre> |
| `PF_GetTimeDisplayPref` | 返回起始帧号（用户在合成设置中指定）和合成的时间显示偏好。 |
| | 在 14.2 中更新以支持更高的帧率。 |
| | <pre lang="cpp">PF_GetTimeDisplayPref(<br/>  PF_TimeDisplayPref2  \*tdp,<br/>  A_long        \*starting_num);<br/>  typedef       struct {<br/>  A_char        display_mode;<br/>  A_long        framemax;<br/>  A_long        frames_per_foot;<br/>  A_char        frames_start;<br/>  A_Boolean     nondrop30B;<br/>  A_Boolean     honor_source_timecodeB;<br/>  A_Boolean     use_feet_framesB;<br/>  } PF_TimeDisplayPrefVersion3;</pre> |
| `PF_TimeCountFrames` | 15.0 新增。返回当前合成中的帧索引。 |
| | <pre lang="cpp">PF_TimeCountFrames(<br/>  const A_Time  \*start_timeTP,<br/>  const A_Time  \*time_stepTP,<br/>  A_Boolean     include_partial_frameB,<br/>  A_long        \*frame_countL);</pre> |

---

## 影响时间轴

很久以前，我们帮助一个开发者将他们的独立跟踪器与 After Effects 集成，通过公开一组函数来通知我们时间轴的更改，并接收时间轴更改的通知。

由于有许多 AEGP API 调用可用，这些函数使用不多，但它们仍然可用。

不要将此套件与 [AEGP_ItemSuite](../../aegps/aegp-suites#aegp_itemsuite9) 混淆。

---

### PF_AdvItemSuite1

| 函数 | 用途 |
|---|---|
| `PF_MoveTimeStep` | 将当前时间移动 num_stepsL 步，方向由 time_dir 指定。 |
| | <pre lang="cpp">PF_MoveTimeStep(<br/>  PF_InData       \*in_data,<br/>  PF_EffectWorld  \*world,<br/>  PF_Step         time_dir,<br/>  A_long   num_stepsL);</pre> |
| `PF_MoveTimeStepActiveItem` | 将活动项的时间移动 num_stepsL 步，方向由 time_dir 指定。 |
| | <pre lang="cpp">PF_MoveTimeStepActiveItem(<br/>  PF_Step  time_dir,<br/>  A_long   num_stepsL);</pre> |
| `PF_TouchActiveItem` | 告诉 After Effects 必须更新活动项。 |
| | <pre lang="cpp">PF_TouchActiveItem (void);</pre> |
| `PF_ForceRerender` | 强制 After Effects 重新渲染当前帧。 |
| | <pre lang="cpp">PF_ForceRerender(<br/>  PF_InData       \*in_data,<br/>  PF_EffectWorld  \*world);</pre> |
| `PF_EffectIsActiveOrEnabled` | 返回拥有 `PF_ContextH` 的效果当前是否处于活动状态或启用状态（如果未启用，After Effects 将不会监听来自它的函数调用）。 |
| | <pre lang="cpp">PF_EffectIsActiveOrEnabled(<br/>  PF_ContextH  contextH,<br/>  PF_Boolean   \*enabledPB);</pre> |

---

## 访问辅助通道数据

某些文件类型包含的不仅仅是像素数据；使用 `PF_ChannelSuite` 来确定是否存在此类信息，并使用 AE_ChannelSuites.h 中的宏以你需要的格式检索它。

---

### PF_ChannelSuite1

| 函数 | 用途 |
|---|---|
| `PF_GetLayerChannelCount` | 获取
