---
title: aegp 套件函数大全
---
# AEGP Suites

如前所述，AEGP 通过套件完成所有工作。以下套件由所有类型的 AEGP 使用，并且可以从任何挂钩函数中调用（RegisterSuite 除外，它必须在 AEGP 的入口函数中使用）。以下是每个套件中每个函数的描述，以及使用这些函数的适当细节。

| Suite | 描述 |
| --- | --- |
| [Memory Suite](#aegp_memorysuite1) | 管理内存资源。使用此套件！每当遇到与内存相关的错误时，After Effects 都可以为您报告错误。 |
| [Command Suite](#aegp_commandsuite1) | 管理您的 AEGP 菜单项。与 Register Suite 一起使用。 |
| [Register Suite](#aegp_registersuites5) | 与[Command Suite](#aegp_commandsuite1) 一起使用，为菜单命令添加功能。 |
| | AEIO 和 Artisans 必须使用此套件的功能向 After Effects 表明他们想要接收适当的消息流。 |
| | 您可以使用此套件替换一些 After Effects 命令。 |
| [Project Suite](#aegp_projsuite6) | 读取和修改项目数据。 |
| [Item Suite](#aegp_itemsuite9) | 管理工程或合成里的项目 |
| | 文件夹、合成、实体和素材都是项目。 |
| [Collection Suite](#aegp_collectionsuite2) | 查询当前选中的项目，并创建您自己的选择集。 |
| | “通常，选择您的AEGP修改过的所有项目是一个不错的UI操作，这样可以让用户大致了解您所做的更改。” |
| [Composition Suite](#aegp_compositesuite2) | “管理（并创建）项目中的合成，以及特定于合成的项目，如实体。” |
| [Footage Suite](#aegp_footagesuite5) | Manages footage. |
| [Layer Suite](#aegp_layersuite9) | 提供有关合成中图层的信息，以及源时间和图层时间之间的关系。 |
| | 固体、文本、绘画、摄像机、灯光、图像以及图像序列都可以成为图层。 |
| [Effect Suite](#aegp_effectsuite4) | 提供对应用于图层的效果的访问。 |
| | 使用Stream套件获取效果关键帧信息。 |
| | Use `AEGP_EffectCallGeneric()` (in [AEGP_EffectSuite4](#aegp_effectsuite4)) to communicate with effects that you setup ahead of time to respond to your AEGP. |
| [Stream Suite](#stream-suite) | 用于访问图层关键帧属性的值。 |
| [Dynamic Stream Suite](#aegp_dynamicstreamsuite4) | 用于访问与图层关联的动态流的特性。 |
| [Keyframe Suite](#aegp_keyframesuite3) | 用于访问和操作所有关键帧数据。 |
| [Marker Suite](#aegp_markersuite2) | Used to manipulate markers. Use `AEGP_GetNewCompMarkerStream()` (in [AEGP_CompSuite11](#aegp_compsuite11)) to get the composition marker stream. |
| [Mask Suite](#aegp_masksuite6) | 提供访问以检索有关图层蒙版的信息。 |
| [Mask Outline Suite](#aegp_maskoutlinesuite3) | 与Stream Suite结合使用时，此套件提供了关于渲染路径以创建图层蒙版的详细信息。 |
| [Text Document Suite](#aegp_textdocumentsuite1) | 用于访问文本图层上的实际文本。 |
| [Text Layer Suite](#aegp_textlayersuite1) | 用于访问构成文本图层轮廓的路径。 |
| [Utility Suite](#aegp_utilitysuite6) | 提供错误消息处理、AEGP版本检查以及对After Effects撤销堆栈的访问。 |
| [Persistent Data Suite](#aegp_persistentdatesuite4) | 查询和管理所有持久性数据（即偏好设置文件）。 |
| | AEGPs 还可以将自己的数据添加到首选项中。 |
| [Color Settings Suite](#aegp_colorsettingssuite5) | 获取有关After Effects当前色彩管理设置的信息。 |
| [Render Suite](#aegp_rendersuite4) | 从AEGP中获取渲染的帧（和音频样本）。 |
| [World Suite](#aegp_worldsuite3) | 分配、处置和查询AEGP_Worlds。 |
| | 还提供了一种将 `PF_EffectWorld`转换为 `AEGP_World`的方法，以便与效果插件一起使用。 |
| [Composite Suite](#aegp_compositesuite2) | 揭示了After Effects的合成功能，包括传输模式、轨道遮罩以及传统的位复制技术。 |
| [Sound Data Suite](#aegp_sounddatesuite1) | 用于管理和访问声音数据的功能。 |
| [Render Queue Suite](#aegp_renderqueuesuite1) | 在渲染队列中添加和移除项目。 |
| [Render Queue Item Suite](#render-queue-item-suite) | 查询和修改渲染队列中的项目。 |
| [Render Options Suite](#aegp_renderoptionssuite4) | “查询和管理渲染队列项选项对话框中公开的所有项目。” |
| [Output Module Suite](#output-module-suite) | 查询和修改附加到渲染队列中项目的输出模块。 |
| [PF Interface Suite](#aegp_pfinterfacesuite1) | “此套件中的函数，虽然技术上属于AEGP API的一部分，但专供效果使用。” |
| [AEGP Iterate Suite](#aegp_iteratesuite1) | 为AEGP提供了一种方式，使其能够在任何或所有可用处理器上运行具有所需签名的函数。 |
| [File Import Manager Suite](#file-import-manager-suite) | 将AEGP文件和项目导入器注册为After Effects文件处理的一部分。 |

---

## 优雅地处理失败

如果某个套件不存在，应尽一切努力优雅地处理失败。向用户显示一条消息，说明问题的性质。尝试获取并使用同一套件的早期版本。

由于AEGP与After Effects深度集成，确保用户知道是谁或什么遇到了特定问题。

表明身份！尽可能为用户提供支持和/或帮助信息。

---

## 处理句柄

使用AEGP内存套件来管理AEGP使用的内存。每当遇到与内存相关的错误时，After Effects可以为你报告错误，以便你及早发现。

`AEGP_MemHandle`是一个结构体，它不仅包含引用的内存。因此不应直接解引用它。使用 `AEGP_LockMemHandle`来获取由 `AEGP_MemHandle`引用的内存的指针。

当然，完成后记得解锁它。

### AEGP_MemorySuite1

| Function | Purpose |
| --- | --- |
| `AEGP_NewMemHandle` | Create a new memory handle. This memory is guaranteed to be 16-byte aligned. |
| | `plugin_id` is the ID passed in through the main [Entry Point](../implementation#entry-point), or alternatively what you obtained from `AEGP_RegisterWithAEGP()` (from [AEGP_UtilitySuite6](#aegp_utilitysuite6)). |
| | Use `whatZ` to identify the memory you are asking for. After Effects uses the string to display any related error messages. |
| | `<pre lang="cpp">`AEGP_NewMemHandle(``AEGP_PluginID  \*plugin_id,``  const A_char  \*whatZ,``AEGP_MemSize  size,``  AEGP_MemFlag  flags,``  AEGP_MemHandle  \*memPH);`</pre>` |
| `AEGP_FreeMemHandle` | Release a handle you allocated using `AEGP_NewMemHandle()`. |
| | `<pre lang="cpp">`AEGP_FreeMemHandle(``  AEGP_MemHandle  memH);`</pre>` |
| `AEGP_LockMemHandle` | Locks the handle into memory (cannot be moved by OS). Use this function prior to using memory allocated by `AEGP_NewMemHandle()`. Can be nested. |
| | `<pre lang="cpp">`AEGP_LockMemHandle(``AEGP_MemHandle  memH,``  void  \*ptr_to_ptr);`</pre>` |
| `AEGP_UnlockMemHandle` | Allows OS to move the referenced memory. Always balance lock calls with unlocks. |
| | `<pre lang="cpp">`AEGP_UnlockMemHandle(``  AEGP_MemHandle  memH);`</pre>` |
| `AEGP_GetMemHandleSize` | Returns the allocated size of the handle. |
| | `<pre lang="cpp">`AEGP_GetMemHandleSize AEGP_MemHandle memH,``  AEGP_MemSize  \*sizeP);`</pre>` |
| `AEGP_ResizeMemHandle` | Changes the allocated size of the handle. |
| | `<pre lang="cpp">`AEGP_ResizeMemHandle(``const char  \*whatZ,``  AEGP_MemSize  new_size,``  AEGP_MemHandle  memH);`</pre>` |
| `AEGP_SetMemReportingOn` | If After Effects runs into problems with the memory handling, the error should be reported to the user. |
| | Make use of this during development! |
| | Only memory allocated and then leaked using this suite is reported using this call, so for example memory allocated using[PF_HandleSuite1](../../effect-details/memory-allocation#pf_handlesuite1) will not be reported. |
| | `<pre lang="cpp">`AEGP_SetMemReportingOn(``  A_Boolean  turn_OnB);`</pre>` |
| `AEGP_GetMemStats` | Obtain information about the number of currently allocated handles and their total size. |
| | Only memory allocated using this suite is tracked and reported using this call, so for example memory allocated using[PF_HandleSuite1](../../effect-details/memory-allocation#pf_handlesuite1) will not be reported here. |
| | `<pre lang="cpp">`AEGP_GetMemStats(``AEGP_MemID  mem_id,``  A_long  \*countPL,``  A_long  \*sizePL);`</pre>` |

---

## 管理菜单项

命令套件允许您创建和处理任何菜单事件。

要添加您自己的菜单命令，您还必须使用[注册套件](#aegp_registersuites5)来为菜单事件分配处理程序。

### AEGP_CommandSuite1

| 功能 | 用途 |
| --- | --- |
| `AEGP_GetUniqueCommand` | Obtain a unique command identifier. Use the[Register Suite](#aegp_registersuites5r) to register a handler for the command. |
| | `<pre lang="cpp">`AEGP_GetUniqueCommand(``  AEGP_Command  \*unique_commandP);`</pre>` |
| | Note: On occasion After Effects will send command 0 (zero), so don't use that as part of your command handling logic. |
| `AEGP_InsertMenuCommand` | Add a new menu command. Using `nameZ = "-"` will insert a separator. |
| | `menu_ID` can be: |
| | -`AEGP_Menu_NONE` |
| | -`AEGP_Menu_APPLE` |
| | -`AEGP_Menu_FILE` |
| | -`AEGP_Menu_EDIT` |
| | -`AEGP_Menu_COMPOSITION` |
| | -`AEGP_Menu_LAYER` |
| | -`AEGP_Menu_EFFECT` |
| | -`AEGP_Menu_WINDOW` |
| | -`AEGP_Menu_FLOATERS` |
| | -`AEGP_Menu_KF_ASSIST` |
| | -`AEGP_Menu_IMPORT` |
| | -`AEGP_Menu_SAVE_FRAME_AS` |
| | -`AEGP_Menu_PREFS` |
| | -`AEGP_Menu_EXPORT` |
| | -`AEGP_Menu_ANIMATION` |
| | -`AEGP_Menu_PURGE` |
| | -`AEGP_Menu_NEW` - Supported in CC and later |
| | Locations can be set to a specific location in the menu or can be one assigned by After Effects: |
| | -`AEGP_MENU_INSERT_SORTED` |
| | -`AEGP_MENU_INSERT_AT_BOTTOM` |
| | -`AEGP_MENU_INSERT_AT_TOP` |
| | For `AEGP_Menu_WINDOW`, the BOTTOM and TOP options haven't been supported since CS4 and will return an error. We recommend `SORTED`. |
| | `<pre lang="cpp">`AEGP_InsertMenuCommand(``AEGP_Command  command,``  const A_char  \*nameZ,``AEGP_MenuID  menu_id,``  A_long  after_itemL);`</pre>` |
| `AEGP_RemoveMenuCommand` | Remove a menu command. If you were so motivated, you could remove ALL of the After Effects menu items. |
| | `<pre lang="cpp">`AEGP_RemoveMenuCommand(``  AEGP_Command  command);`</pre>` |
| `AEGP_SetCommandName` | Set menu name of a command. |
| | `<pre lang="cpp">`AEGP_SetCommandName(``AEGP_Command  command,``  const A_char  \*nameZ);`</pre>` |
| `AEGP_EnableCommand` | Enable a menu command. |
| | `<pre lang="cpp">`AEGP_EnableCommand(``  AEGP_Command  command);`</pre>` |
| `AEGP_DisableCommand` | Disable a menu command. |
| | `<pre lang="cpp">`AEGP_DisableCommand(``  AEGP_Command  command);`</pre>` |
| `AEGP_CheckMarkMenuCommand` | After Effects will draw a check mark next to the menu command. |
| | `<pre lang="cpp">`AEGP_CheckMarkMenuCommand(``AEGP_Command  command,``  A_Boolean  checkB);`</pre>` |
| `AEGP_DoCommand` | Call the handler for a specified menu command. Every After Effects menu item has an associated command. |
| | Note that we make no guarantees that command IDs will be consistent from version to version. |
| | `<pre lang="cpp">`AEGP_DoCommand(``  AEGP_Command  command);`</pre>` |
| | Having given the disclaimer above, here are a few command numbers that have been supplied to other developers, and may be of interest: |
| | -`3061` - Open selection, ignoring any modifier keys. |
| | -`10314` - Play/Stop (valid in 13.5 and later) |
| | -`2285` - RAM Preview (valid prior to 13.5) |
| | -`2415` - Play (spacebar) (valid prior to 13.5) |
| | -`2997` - Crop composition to region of interest. |
| | -`2372` - Edit > Purge > Image Caches |
| | If your AEGP needs to call some other After Effects menu item, there's a fairly easy way to find out most commands you want, using scripting: |
| | `<pre lang="js">`cmd = app.findMenuCommandId(text); // e.g. text = "Open Project..."``alert(cmd);`</pre>` |
| | With AE running, just open up Adobe ExtendScript Toolkit CC, copy the above script in, and in the app drop-down choose the version of After Effects you have running. Then hit the Play button to run the script in AE. Otherwise, contact[API Engineering](mailto:zlam@adobe.com) for the command number. |

---

## 注册到After Effects

为After Effects的使用注册功能。

### AEGP_RegisterSuites5

| Function | Purpose |
| --- | --- |
| `AEGP_RegisterCommandHook` | Register a hook (command handler) function with After Effects. |
| | If you are replacing a function which After Effects also handles,`AEGP_HookPriority` determines whether your plug-in gets it first. |
| | -`AEGP_HP_BeforeAE` |
| | -`AEGP_HP_AfterAE` |
| | For each menu item you add, obtain your own `AEGP_Command` using `AEGP_GetUniqueCommand()` (from [AEGP_CommandSuite1](#aegp_commandsuite1)) prior registering a single `command_hook_func`. |
| | Determine which command was sent within this hook function, and act accordingly. |
| | Currently,`AEGP_HookPriority` is ignored. |
| | `<pre lang="cpp">`AEGP_RegisterCommandHook(``AEGP_PluginID  aegp_plugin_id,``  AEGP_HookPriority  hook_priority,``AEGP_Command  command,``  AEGP_CommandHook  command_hook_func``  void  \*refconPV);`</pre>` |
| `AEGP_RegisterUpdateMenuHook` | Register your menu update function (which determines whether or not items are active), called every time any menu is to be drawn. |
| | This hook function handles updates for all menus. |
| | `<pre lang="cpp">`AEGP_RegisterUpdateMenuHook(``AEGP_PluginID  aegp_plugin_id,``  AEGP_UpdateMenuHook  update_menu_hook_func,``  void  \*refconPV);`</pre>` |
| `AEGP_RegisterDeathHook` | Register your termination function. Called when the application quits. |
| | `<pre lang="cpp">`AEGP_RegisterDeathHook(``AEGP_PluginID  aegp_plugin_id,``  AEGP_DeathHook  death_hook_func,``  void  \*refconPV);`</pre>` |
| `AEGP_RegisterVersionHook` | Currently not called. |
| `AEGP_RegisterAboutStringHook` | Currently not called. |
| `AEGP_RegisterAboutHook` | Currently not called. |
| `AEGP_RegisterArtisan` | Register your Artisan. See[Artisans](../../artisans/artisans) for more details. |
| | `<pre lang="cpp">`AEGP_RegisterArtisan(``A_Version  api_version,``  A_Version  Artisan_version,``long  aegp_plugin_id,``  void  \*aegp_refconPV,``const A_char  \*match_nameZ,``  const A_char  \*Artisan_nameZ,``  PR_ArtisanEntryPoints  \*entry_funcsP);`</pre>` |
| `AEGP_RegisterIO` | Register your AEIO plug-in. See[AEIOs](../../aeios/aeios) for more details. |
| | `<pre lang="cpp">`AEGP_RegisterIO (``AEGP_PluginID  aegp_plugin_id,``  AEGP_IORefcon  aegp_refconP,``const AEIO_ModuleInfo  \*io_infoP,``  const AEIO_FunctionBlock4  \*aeio_fcn_blockP);`</pre>` |
| `AEGP_RegisterIdleHook` | Register your IdleHook function. After Effects will call the function sporadically, while the user makes difficult artistic decisions (or while they're getting more coffee). |
| | `<pre lang="cpp">`AEGP_RegisterIdleHook(``AEGP_PluginID  aegp_plugin_id,``  AEGP_IdleHook  idle_hook_func,``  AEGP_IdleRefcon  refconP);`</pre>` |
| `AEGP_RegisterInteractiveArtisan` | Registers your AEGP as an interactive artisan, for use in previewing and rendering all layers in a given composition. |
| | `<pre lang="cpp">`AEGP_RegisterInteractiveArtisan (``A_Version  api_version,``  A_Version  artisan_version,``AEGP_PluginID  aegp_plugin_id,``  void  \*aegp_refconPV,``const A_char  \*match_nameZ,``  const A_char  \*artisan_nameZ,``  PR_ArtisanEntryPoints  \*entry_funcsP);`</pre>` |
| `AEGP_RegisterPresetLocalizationString` | Call this to register as many strings as you like for name-replacement when presets are loaded. |
| | Any time a Property name is found, or referred to in an expression, and it starts with an ASCII tab character ('t'), followed by one of the English names, it will be replaced with the localized name. |
| | (In English the tab character will simply be removed). |
| | `<pre lang="cpp">`AEGP_RegisterPresetLocalizationString(``const A_char  \*english_nameZ,``  const A_char  \*localized_nameZ);`</pre>` |

---

## 管理项目

这些功能用于访问和修改项目数据。为了为未来的扩展做准备，支持多项目管理；
目前，After Effects 遵循单一项目模型。

要在 After Effects 的首选项（即项目本身之外）中保存特定于项目的数据，请使用 [持久数据套件](#persistent-data-suite)。

请注意：打开和创建项目的函数在被调用时不会保存当前打开的项目的更改！

### AEGP_ProjSuite6

| Function | Purpose |
| --- | --- |
| `AEGP_NumProjects` | Currently will never return more than 1. After Effects can have only one project open at a time. |
| | `<pre lang="cpp">`AEGP_GetNumProjects(``  A_long  \*num_projPL)`</pre>` |
| `AEGP_GetIndProject` | Retrieves a specific project by index. |
| | `<pre lang="cpp">`AEGP_GetProjectProjectByIndex(``A_long  proj_indexL,``  AEGP_ProjectH  \*projPH);`</pre>` |
| `AEGP_GetProjectName` | Get the project name (up to `AEGP_MAX_PROJ_NAME_LEN + 1`) in length. |
| | `<pre lang="cpp">`AEGP_GetProjectName(``AEGP_ProjectH  projH,``  A_char  \*nameZ);`</pre>` |
| `AEGP_GetProjectPath` | Get the path of the project (empty string the project hasn't been saved yet). |
| | The path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`. |
| | `<pre lang="cpp">`AEGP_GetProjectPath(``AEGP_ProjectH  projH,``  AEGP_MemHandle  \*unicode_pathPH)`</pre>` |
| `AEGP_GetProjectRootFolder` | Get the root of the project, which After Effects also treats as a folder. |
| | `<pre lang="cpp">`AEGP_GetProjectRootFolder(``AEGP_ProjectH  projH,``  AEGP_ItemH  \*root_folderPH)`</pre>` |
| `AEGP_SaveProjectToPath` | Saves the entire project to the specified full path. |
| | The file path is a NULL-terminated UTF-16 string with platform separators. |
| | `<pre lang="cpp">`AEGP_SaveProjectToPath(``AEGP_ProjectH  projH,``  const A_UTF16Char  \*pathZ);`</pre>` |
| `AEGP_GetProjectTimeDisplay` | Retrieves the current time display settings. |
| | `<pre lang="cpp">`AEGP_GetProjectTimeDisplay(``AEGP_ProjectH  projH,``  AEGP_TimeDisplay3  \*time_displayP);``typedef struct {``  AEGP_TimeDisplayMode  display_mode;``AEGP_SourceTimecodeDisplayMode  footage_display_mode;``  A_Boolean  display_dropframeB;``A_Boolean  use_feet_framesB;``  A_char  timebaseC;``A_char  frames_per_footC;``  AEGP_FramesDisplayMode  frames_display_mode;``} AEGP_TimeDisplay3;``enum {``AEGP_TimeDisplay_TIMECODE = 0,``  AEGP_TimeDisplay_FRAMES ``};``typedef char AEGP_TimeDisplayMode;``typedef char AEGP_FramesDisplayMode;`</pre>` |
| `AEGP_SetProjectTimeDisplay` | Specified the settings to be used for displaying time. |
| | `<pre lang="cpp">`AEGP_SetProjectTimeDisplay(``AEGP_ProjectH  projH,``  const AEGP_TimeDisplay3  \*time_displayP);`</pre>` |
| `AEGP_ProjectIsDirty` | Returns `TRUE` if the project has been modified since it was opened. |
| | `<pre lang="cpp">`AEGP_ProjectIsDirty(``AEGP_ProjectH  projH,``  A_Boolean  \*is_dirtyPB);`</pre>` |
| `AEGP_SaveProjectAs` | Saves the project to the specified path. |
| | The file path is a NULL-terminated UTF-16 string with platform separators. |
| | NOTE: This will overwrite an existing file. |
| | `<pre lang="cpp">`AEGP_SaveProjectAs(``AEGP_ProjectH  projH,``  const A_UTF16Char  \*pathZ);`</pre>` |
| `AEGP_NewProject` | Creates a new project. NOTE: Will close the current project without saving it first! |
| | `<pre lang="cpp">`AEGP_NewProject(``  AEGP_ProjectH  \*new_projectPH);`</pre>` |
| `AEGP_OpenProjectFromPath` | Opens a project from the supplied path, and returns its `AEGP_ProjectH`. |
| | The file path is a NULL-terminated UTF-16 string with platform separators. |
| | NOTE: Will close the current project without saving it first! |
| | `<pre lang="cpp">`AEGP_OpenProjectFromPath(``const A_UTF16Char  \*pathZ,``  AEGP_ProjectH  \*projectPH);`</pre>` |
| `AEGP_GetProjectBitDepth` | Retrieves the project bit depth. |
| | `<pre lang="cpp">`AEGP_GetProjectBitDepth(``AEGP_Projec  tH projectH,``  AEGP_ProjBitDepth  \*bit_depthP);`</pre>` |
| | AEGP_ProjBitDepth will be one of the following: |
| | -`AEGP_ProjBitDepth_8` |
| | -`AEGP_ProjBitDepth_16` |
| | -`AEGP_ProjBitDepth_32` |
| `AEGP_SetProjectBitDepth` | Sets the project bit depth. Undoable. |
| | `<pre lang="cpp">`AEGP_SetProjectBitDepth(``AEGP_ProjectH  projectH,``  AEGP_ProjBitDepth  bit_depth);`</pre>` |

### AEGP_TimeDisplay2

:::note
当 After Effects 使用不同的显示类型时，未使用字段中的值会保持不变。
:::

| Member | Descrpition |
| --- | --- |
| `AEGP_TimeDisplayType type;` | One of the following: |
| | -`AEGP_TimeDisplayType_TIMECODE` |
| | -`AEGP_TimeDisplayType_FRAMES` |
| | -`AEGP_TimeDisplayType_FEET_AND_FRAMES` |
| `A_char timebaseC;` | 0 - 100. Only used for `AEGP_TimeDisplayType_TIMECODE`. |
| `A_Boolean non_drop_30B;` | When the timebase is 30 and the item's framerate is 29.97, determines whether to display as non-drop frame. |
| `A_char frames_per_footC;` | Only used for `AEGP_TimeDisplayType_FEET_AND_FRAMES`. |
| `A_long starting_frameL;` | Usually 0 or 1. Not used when type is usually 0 or 1, not used for `AEGP_TimeDisplayType_TIMECODE`. |
| `A_Boolean auto_timecode_baseB;` | If `TRUE`, the project timecode display setting is set to auto. |

---

## 控制项目内的项

访问和修改项目或合成中的项。

项目箱中的任何内容都是一个 `AEGP_Item`。请注意，摄像机没有源，因此没有 `AEGP_ItemH`。

除非您使用的函数需要更多的具体性，否则请尽可能保持抽象；大多数函数将 AEGP_Comps 作为 AEGP_Items 传递和返回。

### AEGP_ItemSuite9

| Function | Purpose |
| --- | --- |
| `AEGP_GetFirstProjItem` | Retrieves the first item in a given project. |
| | `<pre lang="cpp">`AEGP_GetFirstProjItem(``AEGP_ProjectH  projectH,``  AEGP_ItemH  \*itemPH);`</pre>` |
| `AEGP_GetNextProjItem` | Retrieves the next project item;`*next_itemPH` will be `NULL` after the last item. |
| | `<pre lang="cpp">`AEGP_GetNextProjItem(``AEGP_ProjectH  projectH,``  AEGP_ItemH  itemH,``  AEGP_ItemH  \*next_itemPH);`</pre>` |
| `AEGP_GetActiveItem` | If the Project window is active, the active item is the selected item (if only one item is selected). |
| | If a Composition, Timeline, or Footage window is active, returns the parent of the layer associated with the front-most tab in the window. |
| | Returns NULL if no item is active. |
| | `<pre lang="cpp">`AEGP_GetActiveItem(``  AEGP_ItemH  \*itemPH,`</pre>` |
| `AEGP_IsItemSelected` | Returns true if the Project window is active and the item is selected. |
| | `<pre lang="cpp">`AEGP_IsItemSelected(``AEGP_ItemH  itemH,``  A_Boolean  \*selectedPB)`</pre>` |
| `AEGP_SelectItem` | Toggles the selection state of the item, and (depending on `deselect_othersB`) can deselect other items. This call selects items in the Project panel. |
| | To make selections in the Composition panel, use `AEGP_SetSelection` from [AEGP_CompSuite11](#aegp_compsuite11). |
| | `<pre lang="cpp">`AEGP_SelectItem(``AEGP_ItemH  itemH,``  A_Boolean  selectB,``  A_Boolean  deselect_othersB);`</pre>` |
| `AEGP_GetItemType` | Gets type of an item. Note: solids don't appear in the project, but can be the source to a layer. |
| | `<pre lang="cpp">`AEGP_GetItemType(``AEGP_ItemH  itemH,``  AEGP_ItemType  \*item_typeP);`</pre>` |
| | Items are one of the following types: |
| | -`AEGP_ItemType_NONE` |
| | -`AEGP_ItemType_FOLDER` |
| | -`AEGP_ItemType_COMP` |
| | -`AEGP_ItemType_SOLID` |
| | -`AEGP_ItemType_FOOTAGE` |
| `AEGP_GetTypeName` | Get name of type. (name length up to `AEGP_MAX_TYPE_NAME_LEN + 1`). |
| | `<pre lang="cpp">`AEGP_GetTypeName(``AEGP_ItemType  item_type,``  A_char  \*nameZ);`</pre>` |
| `AEGP_GetItemName` | Get item name. (name length has no limit). |
| | `unicode_namePH` points to `A_UTF16Char` (contains null terminated UTF16 string). |
| | It must be disposed with `AEGP_FreeMemHandle` . |
| | `<pre lang="cpp">`AEGP_GetItemName(``AEGP_PluginID  pluginID,``  AEGP_ItemH  itemH,``  AEGP_MemHandle \*unicode_namePH);`</pre>` |
| `AEGP_SetItemName` | Specifies the name of the AEGP_ItemH. (name length has no limit). Undoable. |
| | `<pre lang="cpp">`AEGP_SetItemName(``AEGP_ItemH  itemH,``  const A_UTF16Char  \*nameZ);`</pre>` |
| `AEGP_GetItemID` | Returns the item's unique ID, which persists across saves and loads of the project. |
| | `<pre lang="cpp">`AEGP_GetItemID(``AEGP_ItemH  itemH,``  A_long  \*item_idPL);`</pre>` |
| `AEGP_GetItemFlags` | Get properties of an item. |
| | `<pre lang="cpp">`AEGP_GetItemFlags(``AEGP_ItemH  itemH,``  AEGP_ItemFlags  \*item_flagsP);`</pre>` |
| | Flag values (may be OR'd together): |
| | -`AEGP_ItemFlag_MISSING` |
| | -`AEGP_ItemFlag_HAS_PROXY` |
| | -`AEGP_ItemFlag_USING_PROXY` |
| | -`AEGP_ItemFlag_MISSING_PROXY` |
| | -`AEGP_ItemFlag_HAS_VIDEO` |
| | -`AEGP_ItemFlag_HAS_AUDIO` |
| | -`AEGP_ItemFlag_STILL` |
| | -`AEGP_ItemFlag_HAS_ACTIVE_AUDIO` |
| | Unlike the `HAS_AUDIO` flag, this bit flag will set only if the comp has at least one layer where audio is actually on. |
| `AEGP_SetItemUseProxy` | Toggle item's proxy usage. Undoable. |
| | `<pre lang="cpp">`AEGP_SetItemUseProxy(``AEGP_ItemH  itemH,``  A_Boolean  use_proxyB);`</pre>` |
| `AEGP_GetItemParentFolder` | Get folder containing item. |
| | `<pre lang="cpp">`AEGP_GetItemParentFolder(``AEGP_ItemH  itemH,``  AEGP_ItemH  \*parent_itemPH);`</pre>` |
| `AEGP_SetItemParentFolder` | Sets an item's parent folder. Undoable. |
| | `<pre lang="cpp">`AEGP_SetItemParentFolder(``AEGP_ItemH  itemH,``  AEGP_ItemH  parent_folderH);`</pre>` |
| `AEGP_GetItemDuration` | Get duration of item, in seconds. |
| | `<pre lang="cpp">`AEGP_GetItemDuration(``AEGP_ItemH  itemH,``  A_Time  \*durationPT);`</pre>` |
| `AEGP_GetItemCurrentTime` | Get current time within item. Not updated while rendering. |
| | `<pre lang="cpp">`AEGP_GetItemCurrentTime(``AEGP_ItemH  itemH,``  A_long  \*curr_timePT);`</pre>` |
| `AEGP_GetItemDimensions` | Get width and height of item. |
| | `<pre lang="cpp">`AEGP_GetItemDimensions(``AEGP_ItemH  itemH,``  A_long  \*widthPL)``  A_long  \*heightPL);`</pre>` |
| `AEGP_GetItemPixelAspectRatio` | Get the width of a pixel, assuming its height is 1.0, as numerator over denominator. |
| | `<pre lang="cpp">`AEGP_GetItemPixelAspectRatio(``AEGP_ItemH  itemH,``  A_Ratio  \*ratioPRt);`</pre>` |
| `AEGP_DeleteItem` | Removes item from all compositions. Undo-able. |
| | Do not use the `AEGP_ItemH` after calling this function. |
| | `<pre lang="cpp">`AEGP_DeleteItem(``  AEGP_ItemH  itemH);`</pre>` |
| `AEGP_GetItemSolidColor` | Removed in `AEGP_ItemSuite4`. See `AEGP_GetSolidFootageColor` from [AEGP_FootageSuite5](#aegp_footagesuite5) |
| | Given a solid item, return its color. |
| | `<pre lang="cpp">`AEGP_GetItemSolidColor(``AEGP_ItemH  itemH,``  PF_Pixel  \*PF_Pixel);`</pre>` |
| `AEGP_SetSolidColor` | Removed in `AEGP_ItemSuite4`. See `AEGP_SetSolidFootageColor` from [AEGP_FootageSuite5](#aegp_footagesuite5). |
| | Sets the color of an existing solid (error if `itemH` is not a solid). |
| | `<pre lang="cpp">`AEGP_SetSolidColor(``AEGP_ItemH  itemH,``  AEGP_ColorVal  color);`</pre>` |
| `AEGP_SetSolidDimensions` | Removed in `AEGP_ItemSuite4`. See `AEGP_SetSolidFootageDimensions` from [AEGP_FootageSuite5](#aegp_footagesuite5). |
| | Sets the dimensions of an existing solid (error if `itemH` is not a solid). |
| | `<pre lang="cpp">`AEGP_SetSolidDimensions(``AEGP_ItemH  itemH,``  A_short  widthS,``  A_short  heightS);`</pre>` |
| `AEGP_CreateNewFolder` | Creates a new folder in the project. The newly created folder is allocated and owned by After Effects. |
| | Passing `NULL` for `parent_folderH0` creates the folder at the project's root. |
| | `<pre lang="cpp">`AEGP_CreateNewFolder(``const A_UTF16Char  \*nameZ,``  AEGP_ProjectH  projH),``AEGP_ItemH  parentH0),``  AEGP_ItemH  \*new_folderPH);`</pre>` |
| `AEGP_SetItemCurrentTime` | Sets the current time within a given `itemH`. |
| | `<pre lang="cpp">`AEGP_SetItemCurrentTime(``AEGP_ItemH  itemH,``  const A_Time  \*new_timePT);`</pre>` |
| `AEGP_GetItemCommentLength` | Removed in `ItemSuite9`. Retrieves the length (in characters) of the `itemH's` comment. |
| | `<pre lang="cpp">`AEGP_GetItemCommentLength(``AEGP_ItemH  itemH,``  A_u_long  \*buf_sizePLu);`</pre>` |
| `AEGP_GetItemComment` | Updated to support Unicode in `ItemSuite9`, available in 14.1. Retrieves the `itemH's` comment. |
| | `<pre lang="cpp">`AEGP_GetItemComment(``AEGP_ItemH  itemH,``  AEGP_MemHandle  \*unicode_namePH);`</pre>` |
| `AEGP_SetItemComment` | Updated to support Unicode in `ItemSuite9`, available in 14.1. Sets the `itemH's` comment. |
| | `<pre lang="cpp">`AEGP_SetItemComment(``AEGP_ItemH  itemH,``  const A_UTF16Char  \*commentZ);`</pre>` |
| `AEGP_GetItemLabel` | Retrieves an item's label. |
| | `<pre lang="cpp">`AEGP_GetItemLabel(``AEGP_ItemH  itemH,``  AEGP_LabelID  \*labelP);`</pre>` |
| `AEGP_SetItemLabel` | Sets an item's label. |
| | `<pre lang="cpp">`AEGP_SetItemLabel(``AEGP_ItemH  itemH,``  AEGP_LabelID  label);`</pre>` |
| `AEGP_GetItemMRUView` | Gets an item's most recently used view. The view can be used with two calls in the `AEGP_ColorSettingsSuite`, to perform a color transform on a pixel buffer from working to view color space. |
| | `<pre lang="cpp">`AEGP_GetItemMRUView(``AEGP_ItemH  itemH,``  AEGP_ItemViewP  \*mru_viewP);`</pre>` |

:::note
`AEGP_RenderNewItemSoundData()` used to be here, but is now part of [AEGP_RenderSuite4](#aegp_rendersuite4).
:::

---

## Managing Selections

“此套件管理选择状态，反映了C++标准模板库中向量所提供的功能。

在After Effects中，可以同时选择多种类型的项目；`AEGP_CollectionItems`是图层、遮罩、效果、流、遮罩顶点和关键帧项目的联合体。

首先获取当前集合，然后遍历其成员以确保您的AEGP所做的操作适用于每个项目。

我们添加了 `AEGP_Collection2H`和 `AEGP_CollectionItemV2`，以便可以使用 `AEGP_CollectionSuite`处理选定的动态流。”

### AEGP_CollectionSuite2

| Function | Purpose |
| --- | --- |
| `AEGP_NewCollection` | Creates and returns a new, empty collection. |
| | To obtain the current composition's selection as a collection, use `AEGP_GetNewCollectionFromCompSelection`. |
| | `<pre lang="cpp">`AEGP_NewCollection(``AEGP_PluginID  plugin_id,``  AEGP_Collection2H  \*collectionPH);`</pre>` |
| `AEGP_DisposeCollection` | Disposes of a collection. |
| | `<pre lang="cpp">`AEGP_DisposeCollection(``  AEGP_Collection2H  collectionH);`</pre>` |
| `AEGP_GetCollectionNumItems` | Returns the number of items contained in the given collection. |
| | `<pre lang="cpp">`AEGP_GetCollectionNumItems(``AEGP_Collection2H  collectionH,``  A_u_long  \*num_itemsPL);`</pre>` |
| `AEGP_GetCollectionItemByIndex` | Retrieves (creates and populates) the index'd collection item. |
| | `<pre lang="cpp">`AEGP_GetCollectionItemByIndex(``AEGP_Collection2H  collectionH,``  A_u_long  indexL,``  AEGP_CollectionItemV2  \*itemP);`</pre>` |
| `AEGP_CollectionPushBack` | Adds an item to the given collection. |
| | `<pre lang="cpp">`AEGP_CollectionPushBack(``AEGP_Collection2H  collectionH,``  const AEGP_CollectionItemV2  \*itemP);`</pre>` |
| `AEGP_CollectionErase` | Removes an index'd item (or items) from a given collection. NOTE: this range is exclusive, like STL iterators. To erase the first item, you would pass 0 and 1, respectively. |
| | `<pre lang="cpp">`AEGP_CollectionErase(``AEGP_Collection2H  collectionH,``  A_u_long  index_firstL,``  A_u_long  index_lastL);`</pre>` |

### 集合项的所有权

当 `AEGP_StreamRefHs` 被插入到集合中时，它们会被集合所拥有；不要释放它们。

另一方面，`AEGP_EffectRefHs` 不会被集合拥有，必须由调用的 AEGP 来释放。

---

## 操作合成

提供项目中合成的信息，并创建摄像机、灯光和实体。

### AEGP_CompSuite11

| Function | Purpose |
| --- | --- |
| `AEGP_GetCompFromItem` | Retrieves the handle to the composition, given an item handle. |
| | Returns `NULL` if `itemH` is not an `AEGP_CompH`. |
| | `<pre lang="cpp">`AEGP_GetCompFromItem(``AEGP_ItemH  itemH,``  AEGP_CompH  \*compPH);`</pre>` |
| `AEGP_GetItemFromComp` | Used to get the item handle, given a composition handle. |
| | `<pre lang="cpp">`AEGP_GetItemFromComp(``AEGP_CompH  compH,``  AEGP_ItemH  \*itemPH);`</pre>` |
| `AEGP_GetCompDownsampleFactor` | Returns current downsample factor. Measured in pixels X by Y. |
| | Users can choose a custom downsample factor with independent X and Y. |
| | `<pre lang="cpp">`AEGP_GetCompDownsampleFactor(``AEGP_CompH  compH,``  AEGP_DownsampleFactor  \*dsfP);`</pre>` |
| `AEGP_SetCompDownsampleFactor` | Sets the composition's downsample factor. |
| | `<pre lang="cpp">`AEGP_SetCompDownsampleFactor(``AEGP_CompH  compH,``  AEGP_DownsampleFactor  \*dsfP);`</pre>` |
| `AEGP_GetCompBGColor` | Returns the composition background color. |
| | `<pre lang="cpp">`AEGP_GetCompBGColor(``AEGP_CompH  compH,``  AEGP_ColorVal  \*bg_colorP);`</pre>` |
| `AEGP_SetCompBGColor` | Sets a composition's background color. |
| | `<pre lang="cpp">`AEGP_SetCompBGColor(``AEGP_CompH  compH,``  const AEGP_ColorVal  \*bg_colorP);`</pre>` |
| `AEGP_GetCompFlags` | Returns composition flags, or'd together. |
| | `<pre lang="cpp">`AEGP_GetCompFlags(``AEGP_CompH  compH,``  AEGP_CompFlags  \*AEGP_CompFlags);`</pre>` |
| | -`AEGP_CompFlag_SHOW_ALL_SHY` |
| | -`AEGP_CompFlag_ENABLE_MOTION_BLUR` |
| | -`AEGP_CompFlag_ENABLE_TIME_FILTER` |
| | -`AEGP_CompFlag_GRID_TO_FRAME` |
| | -`AEGP_CompFlag_GRID_TO_FIELDS` |
| | -`AEGP_CompFlag_USE_LOCAL_DSF` |
| | -`AEGP_CompFlag_DRAFT_3D` |
| | -`AEGP_CompFlag_SHOW_GRAPH` |
| `AEGP_GetShowLayerNameOrSourceName` | New in CC. Passes back true if the Comp's timeline shows layer names, false if source names. This will open the comp as a side effect. |
| | `<pre lang="cpp">`AEGP_GetShowLayerNameOrSourceName(``AEGP_CompH  compH,``  A_Boolean  \*layer_names_shownPB);`</pre>` |
| `AEGP_SetShowLayerNameOrSourceName` | New in CC. Pass in true to have the Comp's timeline show layer names, false for source names. This will open the comp as a side effect. |
| | `<pre lang="cpp">`AEGP_SetShowLayerNameOrSourceName(``AEGP_CompH  compH,``  A_Boolean  \*layer_names_shownPB);`</pre>` |
| `AEGP_GetShowBlendModes` | New in CC. Passes back true if the Comp's timeline shows blend modes column, false if hidden. This will open the comp as a side effect. |
| | `<pre lang="cpp">`AEGP_GetShowBlendModes(``AEGP_CompH  compH,``  A_Boolean  \*blend_modes_shownPB);`</pre>` |
| `AEGP_SetShowBlendModes` | New in CC. Pass in true to have the Comp's timeline show the blend modes column, false to hide it. This will open the comp as a side effect. |
| | `<pre lang="cpp">`AEGP_GetCompFlags(``AEGP_CompH  compH,``  A_Boolean  show_blend_modesB);`</pre>` |
| `AEGP_GetCompFramerate` | Returns the composition's frames per second. |
| | `<pre lang="cpp">`AEGP_GetCompFramerate(``AEGP_CompH  compH,``  A_FpLong  \*fpsPF);`</pre>` |
| `AEGP_SetCompFramerate` | Sets the composition's frames per second. |
| | `<pre lang="cpp">`AEGP_SetCompFramerate(``AEGP_CompH  compH,``  A_FpLong  \*fpsPF);`</pre>` |
| `AEGP_GetCompShutterAnglePhase` | The composition shutter angle and phase. |
| | `<pre lang="cpp">`AEGP_GetCompShutterAnglePhase(``AEGP_CompH  compH,``  A_Ratio  \*angle,``  A_Ratio  \*phase);`</pre>` |
| `AEGP_GetCompShutterFrameRange` | The duration of the shutter frame, in seconds. |
| | `<pre lang="cpp">`AEGP_GetCompShutterFrameRange(``AEGP_CompH  compH,``  const A_Time  \*comp_timeP);`</pre>` |
| `AEGP_GetCompSuggestedMotionBlurSamples` | Retrieves the number of motion blur samples After Effects will perform in the given composition. |
| | `<pre lang="cpp">`AEGP_GetCompSuggestedMotionBlurSamples(``AEGP_CompH  compH,``  A_long  \*samplesPL)`</pre>` |
| `AEGP_SetCompSuggestedMotionBlurSamples` | Specifies the number of motion blur samples After Effects will perform in the given composition. Undoable. |
| | `<pre lang="cpp">`AEGP_SetCompSuggestedMotionBlurSamples(``AEGP_CompH  compH,``  A_long  samplesL);`</pre>` |
| `AEGP_GetCompMotionBlurAdaptiveSampleLimit` | New in CC. Retrieves the motion blur adaptive sample limit for the given composition. |
| | As of CC, a new comp defaults to `128`. |
| | `<pre lang="cpp">`AEGP_GetCompMotionBlurAdaptiveSampleLimit(``AEGP_CompH  compH,``  A_long  \*samplesPL)`</pre>` |
| `AEGP_SetCompMotionBlurAdaptiveSampleLimit` | New in CC. Specifies the motion blur adaptive sample limit for the given composition. |
| | As of CC, both the limit and the suggested values are clamped to [2,256] range and the limit value will not be allowed less than the suggested value. |
| | Undoable. |
| | `<pre lang="cpp">`AEGP_SetCompMotionBlurAdaptiveSampleLimit(``AEGP_CompH  compH,``  A_long  samplesL);`</pre>` |
| `AEGP_GetCompWorkAreaStart` | Get the time where the current work area starts. |
| | `<pre lang="cpp">`AEGP_GetCompWorkAreaStart(``AEGP_CompH  compH,``  A_Time  \*startPT);`</pre>` |
| `AEGP_GetCompWorkAreaDuration` | Get the duration of a composition's current work area, in seconds. |
| | `<pre lang="cpp">`AEGP_GetCompWorkAreaDuration(``AEGP_CompH  compH,``  A_Time  \*durationPT);`</pre>` |
| `AEGP_SetCompWorkAreaStartAndDuration` | Set the work area start and duration, in seconds. Undo-able. |
| | One call to this function is sufficient to set the layer's in point and duration; it's not necessary to call it twice, once for each timespace. |
| | `<pre lang="cpp">`AEGP_SetCompWorkAreaStartAndDuration(``AEGP_CompH  compH,``  const A_Time  \*startPT)``  const A_Time  \*durationPT);`</pre>` |
| `AEGP_CreateSolidInComp` | Creates a new solid with a specified width, height, color, and duration in the composition. Undo-able. |
| | If you pass `NULL` for the duration, After Effects uses its preference for the duration of a new still. If you pass `NULL`, or an invalid time scale, duration is set to the length of the composition. |
| | `<pre lang="cpp">`AEGP_CreateSolidInComp(``const A_UTF16Char  \*utf_nameZ,``  A_Long  widthL,``A_Long  heightL,``  const PF_Pixel  \*color,``AEGP_CompH  parent_compH,``  const A_Time  \*durationPT0,``  AEGP_LayerH  \*new_solidPH);`</pre>` |
| `AEGP_CreateCameraInComp` | Creates and adds a camera to the specified composition. Once created, you can manipulate the camera's parameter streams using the AEGP[Stream Suite](#stream-suite). |
| | To specify a two-node camera, use `AEGP_SetLayerFlag` from [AEGP_LayerSuite9](#aegp_layersuite9) to set `AEGP_LayerFlag_LOOK_AT_POI`. |
| | `<pre lang="cpp">`AEGP_CreateCameraInComp(``const A_UTF16Char  \*utf_nameZ,``  A_FloatPoint  center_point,``AEGP_CompH  parent_compH,``  AEGP_LayerH  \*new_cameraPH);`</pre>` |
| `AEGP_CreateLightInComp` | Creates and adds a light to the specified composition. Once created, you can manipulate the light's parameter streams using the AEGP[Stream Suite](#stream-suite). |
| | `<pre lang="cpp">`AEGP_CreateLightInComp(``const A_UTF16Char  \*utf_nameZ,``  A_FloatPoint  center_point,``AEGP_CompH  parent_compH,``  AEGP_LayerH  \*new_lightPH);`</pre>` |
| `AEGP_CreateComp` | Creates a new composition for the project. If you don't provide a parent folder, the composition will be at the root level of the project. Undo-able. |
| | `<pre lang="cpp">`AEGP_CreateComp(``AEGP_ItemH  parent_folderHO,``  const A_UTF16Char  \*utf_nameZ,``A_Long  widthL,``  A_Long  heightL,``const A_Ratio  \*pixel_aspect_ratioPRt,``  const A_Time  \*durationPT,``const A_Ratio  \*frameratePRt,``  AEGP_CompH  \*new_compPH);`</pre>` |
| `AEGP_GetNewCollectionFromCompSelection` | Creates a new AEGP_Collection2H from the items selected in the given composition. |
| | The plug-in is responsible for disposing of the `AEGP_Collection2H`. |
| | `<pre lang="cpp">`AEGP_GetNewCollectionFromCompSelection(``AEGP_PluginID  plugin_id,``  AEGP_CompH  compH,``  AEGP_Collection2H  \*collectionPH);`</pre>` |
| `AEGP_SetSelection` | Sets the selection within the given composition to the given `AEGP_Collection2H`. |
| | Will return an error if members of the `AEGP_Collection2H` are not available. Don't assume that a composition hasn't changed between operations; always use a fresh `AEGP_Collection2H`. |
| | `<pre lang="cpp">`AEGP_SetSelection(``AEGP_CompH  compH,``  AEGP_Collection2H  collectionH);`</pre>` |
| `AEGP_GetCompDisplayStartTime` | Gets the displayed start time of a composition. |
| | `<pre lang="cpp">`AEGP_GetCompDisplayStartTime(``AEGP_CompH  compH,``  const A_Time  \*start_timePT);`</pre>` |
| `AEGP_SetCompDisplayStartTime` | Not undo-able. Sets the displayed start time of a composition (has no effect on the duration of the composition). |
| | `<pre lang="cpp">`AEGP_SetCompDisplayStartTime(``AEGP_CompH  compH,``  const A_Time  \*start_timePT);`</pre>` |
| `AEGP_SetCompDuration` | Undoable. Sets the duration of the given composition. |
| | `<pre lang="cpp">`AEGP_SetCompDuration(``AEGP_CompH  compH,``  const A_Time  \*durationPT);`</pre>` |
| `AEGP_CreateNullInComp` | Creates a "null object" in the composition (useful for translating projects from 3D applications into After Effects). |
| | If you pass `NULL` for the duration, After Effects uses its preference for the duration of a new still. If you pass 0, or an invalid time scale, duration is set to the length of the composition. |
| | `<pre lang="cpp">`AEGP_CreateNullInComp(``const A_UTF16Char  \*utf_nameZ,``  AEGP_CompH  parent_compH,``const A_Time  \*durationPT0,``  AEGP_LayerH  \*new_null_solidPH);`</pre>` |
| `AEGP_SetCompPixelAspectRatio` | Sets the pixel aspect ratio of a composition. |
| | `<pre lang="cpp">`AEGP_SetCompPixelAspectRatio(``AEGP_CompH  compH,``  const A_Ratio  \*parPRt);`</pre>` |
| `AEGP_CreateTextLayerInComp` | Updated in CS6. Creates a text layer in the composition, and returns its `AEGP_LayerH`. |
| | `<pre lang="cpp">`AEGP_CreateTextLayerInComp(``AEGP_CompH  parent_compH,``  A_Boolean  select_new_layerB,``  AEGP_LayerH  \*new_text_lyrPH);`</pre>` |
| `AEGP_CreateBoxTextLayerInComp` | Updated in CS6. Creates a new box text layer, and returns its `AEGP_LayerH`. |
| | `<pre lang="cpp">`AEGP_CreateBoxTextLayerInComp(``AEGP_CompH  parent_compH,``  A_Boolean  select_new_layerB,``A_FloatPoint  box_dimensions,``  AEGP_LayerH  \*new_text_layerPH);`</pre>` |
| `AEGP_SetCompDimensions` | Sets the dimensions of the composition. Undoable. |
| | `<pre lang="cpp">`AEGP_SetCompDimensions(``AEGP_CompH  compH,``  A_long  widthL,``  A_long  heightL);`</pre>` |
| `AEGP_DuplicateComp` | Duplicates the composition. Undoable. |
| | `<pre lang="cpp">`AEGP_DuplicateComp(``AEGP_CompH  compH,``  AEGP_CompH  \*new_compPH);`</pre>` |
| `AEGP_GetCompFrameDuration` | Retrieves the duration of a frame in a composition. |
| | `<pre lang="cpp">`AEGP_GetCompFrameDuration(``AEGP_CompH  compH,``  A_Time  \*timeP);`</pre>` |
| `AEGP_GetMostRecentlyUsedComp` | Returns the most-recently-used composition. |
| | `<pre lang="cpp">`AEGP_GetMostRecentlyUsedComp(``  AEGP_CompH  \*compPH);`</pre>` |
| `AEGP_CreateVectorLayerInComp` | Creates and returns a handle to a new vector layer. |
| | `<pre lang="cpp">`AEGP_CreateVectorLayerInComp(``AEGP_CompH  parent_compH,``  AEGP_LayerH  \*new_vec_layerPH);`</pre>` |
| `AEGP_GetNewCompMarkerStream` | Returns an AEGP_StreamRefH to the composition's marker stream. Must be disposed by caller. |
| | `<pre lang="cpp">`AEGP_GetNewCompMarkerStream(``AEGP_PluginID  aegp_plugin_id,``  AEGP_CompH  parent_compH,``  AEGP_StreamRefH  \*streamPH);`</pre>` |
| `AEGP_GetCompDisplayDropFrame` | Passes back a boolean that indicates whether the specified comp uses drop-frame timecode or not. |
| | `<pre lang="cpp">`AEGP_GetCompDisplayDropFrame(``AEGP_CompH  compH,``  A_Boolean  \*dropFramePB);`</pre>` |
| `AEGP_SetCompDisplayDropFrame` | Sets the dropness of the timecode in the specified composition. |
| | `<pre lang="cpp">`AEGP_SetCompDisplayDropFrame(``AEGP_CompH  compH,``  A_Boolean  dropFrameB);`</pre>` |
| `AEGP_ReorderCompSelection` | Move the selection to a certain layer index. Use along with `AEGP_SetSelection().` |
| | `<pre lang="cpp">`AEGP_SetCompDisplayDropFrame(``AEGP_CompH  compH,``  A_long  index);`</pre>` |

---

## 处理素材

提供有关项目或合成中素材或项目的信息。在获取和设置素材的解释时，可能会指定不兼容的选项。

如果在开发过程中遇到警告和错误，请确保以原子方式完成所有相关更改，并重新评估您正在执行的操作的逻辑。

例如，除非素材的本机帧率和转换后的帧率之间存在差异，否则更改素材的下拉解释将不起作用。

根据您试图实现的目标，此时中止所有操作并向用户报告遇到的问题可能是合理的。

### AEGP_FootageSuite5

| Function | Purpose |
| --- | --- |
| `AEGP_GetMainFootageFromItem` | Returns an error if item isn't a footage item. Used to convert an item handle to a footage handle. |
| | `<pre lang="cpp">`AEGP_GetMainFootageFromItem(``AEGP_ItemH  itemH,``  AEGP_FootageH  \*footagePH);`</pre>` |
| `AEGP_GetProxyFootageFromItem` | Returns an error if item has no proxy. Returns the proxy footage handle. |
| | Note: a composition can have a proxy. |
| | `<pre lang="cpp">`AEGP_GetProxyFootageFromItem(``AEGP_ItemH  itemH,``  AEGP_FootageH  \*proxy_ftgPH);`</pre>` |
| `AEGP_GetFootageNumFiles` | Returns the number of data (RGBA or audio) files, and the number of files per frame (may be greater than one if the footage has auxiliary channels). |
| | `<pre lang="cpp">`AEGP_GetFootageNumFiles(``AEGP_FootageH  footageH,``  A_long  \*num_filesPL0,``  A_long  \*files_per_frmPL0);`</pre>` |
| `AEGP_GetFootagePath` | Get fully realized path to footage source file. Retrieves the footage path for a piece of footage (or for the specified frame of a footage sequence). |
| | `frame_numL` ranges from `0 to num_main_files`, as obtained using `AEGP_GetFootageNumFiles` from [AEGP_FootageSuite5](#aegp_footagesuite5). |
| | `AEGP_FOOTAGE_MAIN_FILE_INDEX` is the main file. |
| | The path is a handle to a NULL-terminated `A_UTF16Char` string, and must be disposed with AEGP_FreeMemHandle. |
| | `<pre lang="cpp">`AEGP_GetFootagePath(``AEGP_FootageH  footageH,``  A_long  frame_numL,``A_long  file_indexL,``  AEGP_MemHandle  \*unicode_pathPH);`</pre>` |
| `AEGP_GetFootageSignature` | Retrieves the footage signature of specified footage. |
| | `<pre lang="cpp">`AEGP_GetFootageSignature(``AEGP_FootageH  footageH,``  AEGP_FootageSignature  \*sigP);`</pre>` |
| | The signature will be one of the following: |
| | -`AEGP_FootageSignature_NONE` |
| | -`AEGP_FootageSignature_MISSING` |
| | -`AEGP_FootageSignature_SOLID` |
| `AEGP_NewFootage` | Creates a new footage item. The file path is a NULL-terminated UTF-16 string with platform separators. |
| | Note that footage filenames with colons are not allowed, since colons are used as path separators in the HFS+ file system. |
| | `<pre lang="cpp">`AEGP_NewFootage(``AEGP_PluginID  aegp_plugin_id,``  const A_UTF16Char  \*pathZ,``const AEGP_FootageLayerKey  \*layer_infoP0,``  const AEGP_FileSequenceImportOptions  \*sequence_optionsP0,``AEGP_InterpretationStyle  interp_style,``  void  \*reserved,``  AEGP_FootageH  \*footagePH);`</pre>` |
| | Note the optional params. If `allow_interpretation_dialogB` is FALSE, After Effects will guess the alpha interpretation. |
| | `<pre lang="cpp">`typedef struct {``A_long  layer_idL;``  A_long  layer_indexL ``char  \*nameAC;``  AEGP_LayerDrawStyle  draw_style;``} AEGP_FootageLayerKey;`</pre>` |
| | `AEGP_LayerDrawStyle` can be: |
| | -`AEGP_LayerDrawStyle_LAYER_BOUNDS` |
| | -`AEGP_LayerDrawStyle_DOCUMENT_BOUNDS` |
| | `AEGP_InterpretationStyle` can be: |
| | -`AEGP_InterpretationStyle_NO_DIALOG_GUESS` Will guess alpha interpretation even if file contains unknown alpha interpretation and user pref says to ask user. |
| | -`AEGP_InterpretationStyle_DIALOG_OK` Optionally can show a dialog. |
| | -`AEGP_InterpretationStyle_NO_DIALOG_NO_GUESS` Used for replace footage implementation. |
| `AEGP_AddFootageToProject` | Adds a footage item to a project. Footage will be adopted by the project, and may be added only once. |
| | This is Undo-able; do not dispose of the returned added item if it's undone. |
| | `<pre lang="cpp">`AEGP_AddFootageToProject(``AEGP_FootageH  footageH,``  AEGP_ItemH  folderH,``  AEGP_ItemH  \*add_itemPH0);`</pre>` |
| `AEGP_SetItemProxyFootage` | Sets footage as the proxy for an item. Will be adopted by the project. |
| | This is Undo-able; do not dispose of the returned added item if it's undone. |
| | `<pre lang="cpp">`AEGP_SetItemProxyFootage(``AEGP_FootageH  footageH,``  AEGP_ItemH  itemH);`</pre>` |
| `AEGP_ReplaceItemMainFootage` | Replaces footage for an item. The item will replace the main footage for this item. |
| | This is Undo-able; do not dispose of the returned added item if it's undone. |
| | `<pre lang="cpp">`AEGP_ReplaceItemMainFootage(``AEGP_FootageH  footageH,``  AEGP_ItemH  itemH);`</pre>` |
| `AEGP_DisposeFootage` | Deletes a footage item. Do not dispose of footage you did not create, or that has been added to the project. |
| | `<pre lang="cpp">`AEGP_DisposeFootage(``  AEGP_FootageH  footageH);`</pre>` |
| `AEGP_GetFootageInterpretation` | Populates an AEGP_FootageInterp describing the settings of the `AEGP_FootageH`. |
| | There is no way to create a valid `AEGP_FootageInterp` other than by using this function. |
| | `<pre lang="cpp">`AEGP_GetFootageInterpretation(``const AEGP_ItemH  itemH,``  A_Boolean  proxyB,``  AEGP_FootageInterp  \*interpP);`</pre>` |
| | If proxyB is `TRUE`, the proxy footage's settings are retrieved. |
| `AEGP_SetFootageInterpretation` | Apply the settings in the `AEGP_FootageInterp` to the `AEGP_FootageH`. Undo-able. |
| | `<pre lang="cpp">`AEGP_SetFootageInterpreta tion(``const AEGP_ItemH  itemH,``  A_Boolean  proxyB,``  const AEGP_FootageInterp  \*interpP);`</pre>` |
| | If `proxyB` is `TRUE`, the proxy footage's settings are modified. |
| `AEGP_GetFootageLayerKey` | Populates an `AEGP_FootageLayerKey` describing the footage. |
| | `<pre lang="cpp">`AEGP_GetFootageLayerKey(``AEGP_FootageH  footageH,``  AEGP_FootageLayerKey*  layerKeyP);`</pre>` |
| `AEGP_NewPlaceholderFootage` | Deprecated. Adds a new placeholder footage item to the project. |
| | Using this function for missing footage will cause the user to search for each individual missing file, regardless of whether or not they're all in the same directory. |
| | Undo-able. |
| | `<pre lang="cpp">`AEGP_NewPlaceholderFootage(``AEGP_PluginID  plugin_id,``  const A_char  \*nameZ,``A_long  width,``  A_long  height,``const A_Time  \*durationPT,``  AEGP_FootageH  \*footagePH);`</pre>` |
| `AEGP_NewPlaceholderFootageWithPath` | This is the hip new way to add references to footage that can't be found right this moment. |
| | The file path is a NULL-terminated UTF-16 string with platform separators. |
| | In CS6 and earlier, file_type was ignored and we previously recommendedsetting it to `AEIO_FileType_NONE`. |
| | Starting in CC,`AEIO_FileType_NONE` is now a warning condition. |
| | If you pass `AEIO_FileType_ANY`, then path MUST exist. |
| | If the path may not exist, pass `AEIO_FileType_DIR` for folder, or `AEIO_FileType_GENERIC` for a file. |
| | `<pre lang="cpp">`AEGP_NewPlaceholderFootageWithPath(``AEGP_PluginID  plugin_id,``  const A_UTF16Char  \*pathZ,``AEGP_Platform  path_platform,``  AEIO_FileType  file_type,``A_long  widthL,``  A_long  heightL,``const A_Time  \*durationPT,``  AEGP_FootageH  \*footagePH);`</pre>` |
| `AEGP_NewSolidFootage` | This is the way to add a solid. |
| | Until the footage is added to the project, the caller owns the `AEGP_FootageH` (and must dispose of it if, and only if, it isn't added to the project). |
| | `<pre lang="cpp">`AEGP_NewSolidFootage(``const A_char  \*nameZ,``  A_long  width,``A_long  height,``  const AEGP_ColorVal  \*colorP,``  AEGP_FootageH  \*footagePH);`</pre>` |
| `AEGP_GetSolidFootageColor` | Returns the color of a given solid. Returns an error if the `AEGP_ItemH` is not a solid. |
| | `<pre lang="cpp">`AEGP_GetSolidFootageColor(``AEGP_ItemH  itemH,``  A_Boolean  proxyB,``  AEGP_ColorVal  \*colorP);`</pre>` |
| | If `proxyB` is `TRUE`, the proxy solid's color is retrieved. |
| `AEGP_SetSolidFootageColor` | Sets the color of a solid. Undo-able. |
| | `<pre lang="cpp">`AEGP_SetSolidFootageColor(``AEGP_ItemH  itemH,``  A_Boolean  proxyB,``  AEGP_ColorVal  \*colorP);`</pre>` |
| | If `proxyB` is `TRUE`, the proxy solid's color is set. |
| `AEGP_SetSolidFootageDimensions` | Sets the dimensions of a solid. Undo-able. |
| | `<pre lang="cpp">`AEGP_SetSolidFootageDimensions(``AEGP_ItemH  itemH,``  A_Boolean  proxyB,``A_long  widthL,``  A_long  heightL);`</pre>` |
| | If `proxyB` is `TRUE`, the proxy solid's dimensions are modified. Returns an error if the item isn't a solid. |
| `AEGP_GetFootageSoundDataFormat` | Retrieves information about the audio data in the footage item (by populating the `AEGP_SoundDataFormat` you passed in). |
| | `<pre lang="cpp">`AEGP_GetFootageSoundDataFormat(``AEGP_FootageH  footageH,``  AEGP_SoundDataFormat  \*formatP);`</pre>` |
| `AEGP_GetFootageSequenceImportOptions` | Populates and returns a `AEGP_FileSequenceImportOptions` describing the given `AEGP_FootageH`. |
| | `<pre lang="cpp">`AEGP_GetFootageSequenceImportOptions(``AEGP_FootageH  footageH,``  AEGP_FileSequenceImportOptions  \*optionsP);`</pre>` |

### AEGP_FootageInterp Structure

| Member | Purpose |
| --- | --- |
| `AEGP_InterlaceLabel il;` | The interlace settings for the footage item. |
| | `<pre lang="cpp">`A_u_long signature; // 'FIEL'``A_short version;``FIEL_Type type;``FIEL_Order order;``A_u_long reserved;`</pre>` |
| | `FIEL_Type` is one of the following: |
| | -`FIEL_Type_FRAME_RENDERED` |
| | -`FIEL_Type_INTERLACED` |
| | -`FIEL_Type_HALF_HEIGHT` |
| | -`FIEL_Type_FIELD_DOUBLED` (60 full-sized field doubled frames per second.) |
| | `FIEL_Order` is either: |
| | -`FIEL_Order_UPPER_FIRST` |
| | -`FIEL_Order_LOWER_FIRST` |
| `AEGP_AlphaLabel al;` | `<pre lang="cpp">`AEGP_AlphaFlag flags;``A_u_char redCu;``A_u_char greenCu;``A_u_char blueCu;`</pre>` |
| | `AEGP_AlphaFlags` is one or more of the following, OR'd together: |
| | -`AEGP_AlphaPremul` |
| | -`AEGP_AlphaInverted` (indicates that higher values are transparent, instead of lower) |
| | -`AEGP_AlphaIgnore` |
| | If `AEGP_AlphaPremul` is not set, straight alpha is assumed. |
| `AEGP_PulldownPhase pd;` | Indicates the phase for use in 3:2 pulldown. One of the following: |
| | -`AEGP_PulldownPhase_NO_PULLDOWN` |
| | -`AEGP_PulldownPhase_WSSWW` |
| | -`AEGP_PulldownPhase_SSWWW` |
| | -`AEGP_PulldownPhase_SWWWS` |
| | -`AEGP_PulldownPhase_WWWSS` |
| | -`AEGP_PulldownPhase_WWSSW` |
| | -`AEGP_PulldownPhase_WWWSW` |
| | -`AEGP_PulldownPhase_WWSWW` |
| | -`AEGP_PulldownPhase_WSWWW` |
| | -`AEGP_PulldownPhase_SWWWW` |
| | -`AEGP_PulldownPhase_WWWWS` |
| `AEGP_LoopBehavior loop;` | Indicates the number of times the footage should loop. |
| | `<pre lang="cpp">`A_long loops;``A_long reserved;`</pre>` |
| `A_Ratio pix_aspect_ratio;` | Expresses the pixel aspect ratio of the footage (x over y). |
| `A_FpLong native_fpsF;` | The original framerate (in frames per second) of the footage item. |
| `A_FpLong conform_fpsF;` | The framerate being used for the footage item. |
| `A_long depthL;` | The pixel depth of the footage. One of the following: |
| | -`AEGP_Footage_Depth_1` |
| | -`AEGP_Footage_Depth_2` |
| | -`AEGP_Footage_Depth_4` |
| | -`AEGP_Footage_Depth_8` |
| | -`AEGP_Footage_Depth_16` |
| | -`AEGP_Footage_Depth_24` |
| | -`AEGP_Footage_Depth_30` |
| | -`AEGP_Footage_Depth_32` |
| | -`AEGP_Footage_Depth_GRAY_2` |
| | -`AEGP_Footage_Depth_GRAY_4` |
| | -`AEGP_Footage_Depth_GRAY_8` |
| | -`AEGP_Footage_Depth_48` |
| | -`AEGP_Footage_Depth_64` |
| | -`AEGP_Footage_Depth_GRAY_16` |
| `A_Boolean motion_dB;` | Indicates whether motion de-interlacing is being applied to the footage item. |

---

## 管理图层

`AEGP_LayerSuite` 提供了关于合成中图层的信息，以及源时间和图层时间之间的关系。

由于大多数 After Effects 的使用最终都归结为图层的操作，因此这是我们的 API 中最大的功能套件之一。

### AEGP_LayerSuite9

| Function | Purpose |
| --- | --- |
| `AEGP_GetCompNumLayers` | Obtains the number of layers in a composition. |
| | `<pre lang="cpp">`AEGP_GetCompNumLayers(``AEGP_CompH  compH,``  A_long  \*num_layersPL);`</pre>` |
| `AEGP_GetCompLayerByIndex` | Get a `AEGP_LayerH` from a composition. Zero is the foremost layer. |
| | `<pre lang="cpp">`AEGP_GetCompLayerByIndex(``AEGP_CompH  compH,``  A_long  layer_indexL,``  AEGP_LayerH  \*layerPH);`</pre>` |
| `AEGP_GetActiveLayer` | Get the active layer. If a Layer or effect controls palette is active, the active layer is that associated with the front-most tab in the window. |
| | If a composition or timeline window is active, the active layer is the selected layer (if only one is selected; otherwise `NULL` is returned). |
| | `<pre lang="cpp">`AEGP_GetActiveLayer(``  AEGP_LayerH  \*layerPH);`</pre>` |
| `AEGP_GetLayerIndex` | Get the index of the layer (0 is the topmost layer in the composition). |
| | `<pre lang="cpp">`AEGP_GetLayerIndex(``AEGP_LayerH  layerH,``  A_long  \*layer_indexPL);`</pre>` |
| `AEGP_GetLayerSourceItem` | Get the AEGP_ItemH of the layer's source item. |
| | `<pre lang="cpp">`AEGP_GetLayerSourceItem(``AEGP_LayerH  layerH,``  AEGP_ItemH  \*source_itemPH);`</pre>` |
| `AEGP_GetLayerSourceItemID` | Retrieves the ID of the given `AEGP_LayerH`. This is useful when hunting for a specific layer's ID in an `AEGP_StreamVal`. |
| | `<pre lang="cpp">`AEGP_GetLayerSourceItemID(``AEGP_LayerH  layerH,``  A_long  \*source_idPL);`</pre>` |
| `AEGP_GetLayerParentComp` | Get the AEGP_CompH of the composition containing the layer. |
| | `<pre lang="cpp">`AEGP_GetLayerParentComp(``AEGP_LayerH  layerH,``  AEGP_CompH  \*compPH);`</pre>` |
| `AEGP_GetLayerName` | Get the name of a layer. |
| | Both `utf_layer_namePH0` and `utf_source_namePH0` point to null terminated UTF-16 strings. They must be disposed with `AEGP_FreeMemHandle`. |
| | `<pre lang="cpp">`AEGP_GetLayerName(``AEGP_PluginID  pluginID,``  AEGP_LayerH  layerH,``AEGP_MemHandle  \*utf_layer_namePH0,``  AEGP_MemHandle  \*utf_source_namePH0);`</pre>` |
| `AEGP_GetLayerQuality` | Get the quality of a layer. |
| | `<pre lang="cpp">`AEGP_GetLayerQuality(``AEGP_LayerH  layerH,``  AEGP_LayerQuality  \*qualityP);`</pre>` |
| | Layer quality is one of the following flags: |
| | -`AEGP_LayerQual_NONE` |
| | -`AEGP_LayerQual_WIREFRAME` |
| | -`AEGP_LayerQual_DRAFT` |
| | -`AEGP_LayerQual_BEST` |
| `AEGP_SetLayerQuality` | Sets the quality of a layer (see flag values above). Undoable. |
| | `<pre lang="cpp">`AEGP_SetLayerQuality(``AEGP_LayerH  layerH,``  AEGP_LayerQuality  quality);`</pre>` |
| `AEGP_GetLayerFlags` | Get flags for a layer. |
| | `<pre lang="cpp">`AEGP_GetLayerFlags(``AEGP_LayerH  layerH,``  AEGP_LayerFlags  \*layer_flagsP);`</pre>` |
| | -`AEGP_LayerFlag_NONE` |
| | -`AEGP_LayerFlag_VIDEO_ACTIVE` |
| | -`AEGP_LayerFlag_AUDIO_ACTIVE` |
| | -`AEGP_LayerFlag_EFFECTS_ACTIVE` |
| | -`AEGP_LayerFlag_MOTION_BLUR` |
| | -`AEGP_LayerFlag_FRAME_BLENDING` |
| | -`AEGP_LayerFlag_LOCKED` |
| | -`AEGP_LayerFlag_SHY` |
| | -`AEGP_LayerFlag_COLLAPSE` |
| | -`AEGP_LayerFlag_AUTO_ORIENT_ROTATION` |
| | -`AEGP_LayerFlag_ADJUSTMENT_LAYER` |
| | -`AEGP_LayerFlag_TIME_REMAPPING` |
| | -`AEGP_LayerFlag_LAYER_IS_3D` |
| | -`AEGP_LayerFlag_LOOK_AT_CAMERA` |
| | -`AEGP_LayerFlag_LOOK_AT_POI` |
| | -`AEGP_LayerFlag_SOLO` |
| | -`AEGP_LayerFlag_MARKERS_LOCKED` |
| | -`AEGP_LayerFlag_NULL_LAYER` |
| | -`AEGP_LayerFlag_HIDE_LOCKED_MASKS` |
| | -`AEGP_LayerFlag_GUIDE_LAYER` |
| | -`AEGP_LayerFlag_ENVIRONMENT_LAYER` |
| | -`AEGP_LayerFlag_ADVANCED_FRAME_BLENDING`, `True` only if pixel motion frame blending is on for the layer. |
| | -`AEGP_LayerFlag_SUBLAYERS_RENDER_SEPARATELY`, Used to get/set the state of per-character 3D enablement on a text layer. |
| | -`AEGP_LayerFlag_ENVIRONMENT_LAYER`, New in CS6. |
| `AEGP_SetLayerFlag` | Sets one layer flag at a time. Undoable. |
| | `<pre lang="cpp">`AEGP_SetLayerFlag(``AEGP_LayerH  layerH,``  AEGP_LayerFlags  single_flag,``  A_Boolean  valueB);`</pre>` |
| `AEGP_IsLayerVideoReallyOn` | Determines whether the layer's video is visible. This is necessary to account for 'solo' status of other layers in the composition; non-solo'd layers are still on. |
| | `<pre lang="cpp">`AEGP_IsLayerVideoReallyOn(``AEGP_LayerH  layerH,``  A_Boolean  \*onPB);`</pre>` |
| `AEGP_IsLayerAudioReallyOn` | Accounts for solo status of other layers in the composition. |
| | `<pre lang="cpp">`AEGP_IsLayerAudioReallyOn(``AEGP_LayerH  layerH,``  A_Boolean  \*onPB);`</pre>` |
| `AEGP_GetLayerCurrentTime` | Get current time, in layer or composition timespace. This value is not updated during rendering. |
| | NOTE: If a layer starts at other than time 0 or is time-stretched other than 100%, layer time and composition time are distinct. |
| | `<pre lang="cpp">`AEGP_GetLayerCurrentTime(``AEGP_LayerH  layerH,``  AEGP_LTimeMode  time_mode,``  A_Time  \*curr_timePT);`</pre>` |
| `AEGP_GetLayerInPoint` | Get time of first visible frame in composition or layer time. In layer time, the `in_pointPT` is always 0. |
| | `<pre lang="cpp">`AEGP_GetLayerInPoint(``AEGP_LayerH  layerH,``  AEGP_LTimeMode  time_mode,``  A_Time  \*in_pointPT);`</pre>` |
| `AEGP_GetLayerDuration` | Get duration of layer, in composition or layer time, in seconds. |
| | `<pre lang="cpp">`AEGP_GetLayerDuration(``AEGP_LayerH  layerH,``  AEGP_LTimeMode  time_mode,``  A_Time  \*durationPT);`</pre>` |
| `AEGP_SetLayerInPointAndDuration` | Set duration and in point of layer in composition or layer time. Undo-able. |
| | `<pre lang="cpp">`AEGP_SetLayerInPointAndDuration(``AEGP_LayerH  layerH,``  AEGP_LTimeMode  time_mode,``const A_Time  \*in_pointPT,``  const A_Time  \*durationPT);`</pre>` |
| `AEGP_GetLayerOffset` | Get the offset from the start of the composition to layer time 0, in composition time. |
| | `<pre lang="cpp">`AEGP_GetLayerOffset(``AEGP_LayerH  layerH,``  A_Time  \*offsetPT);`</pre>` |
| `AEGP_SetLayerOffset` | Set the offset from the start of the composition to the first frame of the layer, in composition time. Undoable. |
| | `<pre lang="cpp">`AEGP_SetLayerOffset(``AEGP_LayerH  layerH,``  A_Time  \*offsetPT);`</pre>` |
| `AEGP_GetLayerStretch` | Get stretch factor of a layer. |
| | `<pre lang="cpp">`AEGP_GetLayerStretch(``AEGP_LayerH  layerH,``  A_Ratio  \*stretchPRt);`</pre>` |
| `AEGP_SetLayerStretch` | Set stretch factor of a layer. |
| | `<pre lang="cpp">`AEGP_SetLayerStretch(``AEGP_LayerH  layerH,``  A_Ratio  \*stretchPRt);`</pre>` |
| `AEGP_GetLayerTransferMode` | Get transfer mode of a layer. |
| | `<pre lang="cpp">`AEGP_GetLayerTransferMode(``AEGP_LayerH  layerH,``  AEGP_LayerTransferMode  \*modeP);`</pre>` |
| `AEGP_SetLayerTransferMode` | Set transfer mode of a layer. Undoable. |
| | `<pre lang="cpp">`AEGPSetLayerTransferMode(``AEGP_LayerH  layerH,``  AEGP_LayerTransferMode  \*modeP);`</pre>` |
| | As of 23.0, when you make a layer a track matte, the layer being matted will be disabled, as when you do this via the interface. |
| `AEGP_IsAddLayerValid` | Tests whether it's currently valid to add a given item to a composition. |
| | A composition cannot be added to itself, or to any compositions which it contains; other conditions can preclude successful adding too. |
| | Adding a layer without first using this function will produce undefined results. |
| | `<pre lang="cpp">`AEGP_IsAddLayerValid(``AEGP_ItemH  item_to_addH,``  AEGP_CompH  into_compH,``  A_Boolean  \*validPB);`</pre>` |
| `AEGP_AddLayer` | Add an item to the composition, above all other layers. Undo-able. |
| | Use `AEGP_IsAddLayerValid()` first, to confirm that it's possible. |
| | `<pre lang="cpp">`AEGP_AddLayer(``AEGP_ItemH  item_to_addH,``  AEGP_CompH  into_compH,``  A_Boolean  \*added_layerPH0);`</pre>` |
| `AEGP_ReorderLayer` | Change the order of layers. Undoable. |
| | `<pre lang="cpp">`AEGP_ReorderLayer(``AEGP_LayerH  layerH,``  A_long  layer_indexL);`</pre>` |
| | To add a layer to the end of the composition, to use `layer_indexL = AEGP_REORDER_LAYER_TO_END` |
| `AEGP_GetLayerMaskedBounds` | Given a layer's handle and a time, returns the bounds of area visible with masks applied. |
| | `<pre lang="cpp">`AEGP_GetLayerMaskedBounds(``AEGP_LayerH  layerH,``  const A_Time  \*comp_timePT,``  A_FloatRect  \*boundsPR);`</pre>` |
| `AEGP_GetLayerObjectType` | Returns a layer's object type. |
| | `<pre lang="cpp">`AEGP_GetLayerObjectType(``AEGP_LayerH  layerH,``  AEGP_ObjectType  \*object_type);`</pre>` |
| | -`AEGP_ObjectType_AV` |
| | -`AEGP_ObjectType_LIGHT` |
| | -`AEGP_ObjectType_CAMERA` |
| | -`AEGP_ObjectType_TEXT` |
| | -`AEGP_ObjectType_3D_MODEL`, New in 24.4. |
| `AEGP_IsLayer3D` | Is the footage item a 3D layer. All AV layers are either 2D or 3D. |
| | `<pre lang="cpp">`AEGP_IsLayer3D(``AEGP_LayerH  layerH,``  A_Boolean  \*is_3DPB);`</pre>` |
| `AEGP_IsLayer2D` | Is the footage item a 2D layer. All AV layers are either 2D or 3D. |
| | `<pre lang="cpp">`AEGP_IsLayer2D(``AEGP_LayerH  layerH,``  A_Boolean  \*is_2DPB);`</pre>` |
| `AEGP_IsVideoActive` | Given composition time and a layer, see if the layer will render. |
| | Time mode is either `AEGP_LTimeMode_LayerTime` or `AEGP_LTimeMode_CompTime`. |
| | `<pre lang="cpp">`AEGP_IsVideoActive(``AEGP_LayerH  layerH,``  AEGP_LTimeMode  time_mode,``A_Time  \*comp_timePT,``  A_Boolean  \*is_activePB);`</pre>` |
| `AEGP_IsLayerUsedAsTrackMatte` | Is the layer used as a track matte? |
| | `<pre lang="cpp">`AEGP_IsLayerUsedAsTrackMatte(``AEGP_LayerH  layerH,``  A_Boolean  fill_must_be_activeB,``  A_Boolean  \*is_track_mattePB);`</pre>` |
| `AEGP_DoesLayerHaveTrackMatte` | Does this layer have a Track Matte? |
| | `<pre lang="cpp">`AEGP_DoesLayerHaveTrackMatte(``AEGP_LayerH  layerH,``  A_Boolean  \*has_track_mattePB);`</pre>` |
| `AEGP_ConvertCompToLayerTime` | Given a time in composition space, returns the time relative to the layer source footage. |
| | `<pre lang="cpp">`AEGP_ConvertCompToLayerTime(``AEGP_LayerH  layerH,``  const A_Time  \*comp_timeP,``  A_Time  \*layer_timeP);`</pre>` |
| `AEGP_ConvertLayerToCompTime` | Given a time in layer space, find the corresponding time in composition space. |
| | `<pre lang="cpp">`AEGP_ConvertLayerToCompTime(``AEGP_LayerH  layerH,``  const A_Time  \*layer_timePT,``  A_Time  \*comp_timePT);`</pre>` |
| `AEGP_GetLayerDancingRandValue` | Used by the dancing dissolve transfer function. |
| | `<pre lang="cpp">`AEGP_GetLayerDancingRandValue(``AEGP_LayerH  layerH,``  const A_Time  \*comp_timePT,``  A_long  \*rand_valuePL);`</pre>` |
| `AEGP_GetLayerID` | Supplies the layer's unique ID. This ID never changes during the lifetime of the project. |
| | `<pre lang="cpp">`AEGP_GetLayerID(``AEGP_LayerH  layerH,``  AEGP_LayerIDVal  \*id_valP);`</pre>` |
| `AEGP_GetLayerToWorldXform` | Given a layer handle and time, returns the layer-to-world transformation matrix. |
| | `<pre lang="cpp">`AEGP_GetLayerToWorldXform(``AEGP_LayerH  aegp_layerH,``  const A_Time  \*comp_timeP,``  A_Matrix4  \*transform);`</pre>` |
| `AEGP_GetLayerToWorldXformFromView` | Given a layer handle, the current (composition) time, and the requested view time, returns the translation between the user's view and the layer, corrected for the composition's current aspect ratio. |
| | `<pre lang="cpp">`AEGP_GetLayerToWorldXformFromView(``AEGP_LayerH  aegp_layerH,``  const A_Time  \*view_timeP,``const A_Time  \*comp_timeP,``  A_Matrix4  \*transform);`</pre>` |
| `AEGP_SetLayerName` | Sets the name of a layer. Undo-able. new_nameZ points to a null terminated UTF-16 string. |
| | `<pre lang="cpp">`AEGP_SetLayerName(``AEGP_LayerH  aegp_layerH,``  const A_UTF16Char  \*new_nameZ);`</pre>` |
| `AEGP_GetLayerParent` | Retrieves the handle to a layer's parent (none if not parented). |
| | `<pre lang="cpp">`AEGP_GetLayerParent(``AEGP_LayerH  layerH,``  AEGP_LayerH  \*parent_layerPH);`</pre>` |
| `AEGP_SetLayerParent` | Sets a layer's parent layer. |
| | `<pre lang="cpp">`AEGP_SetLayerParent(``AEGP_LayerH  layerH,``  const AEGP_LayerH  parent_layerH);`</pre>` |
| `AEGP_DeleteLayer` | Deletes a layer. Can you believe it took us three suite versions to add a delete function? Neither can we. |
| | `<pre lang="cpp">`AEGP_DeleteLayer(``  AEGP_LayerH  layerH);`</pre>` |
| `AEGP_DuplicateLayer` | Duplicates the layer. Undoable. |
| | `<pre lang="cpp">`AEGP_DuplicateLayer(``AEGP_LayerH  orig_layerH,``  AEGP_LayerH  \*dupe_layerPH);`</pre>` |
| `AEGP_GetLayerFromLayerID` | Retrieves the `AEGP_LayerH` associated with a given `AEGP_LayerIDVal` (which is what you get when accessing an effect's layer parameter stream). |
| | `<pre lang="cpp">`AEGP_GetLayerFromLayerID(``AEGP_CompH  parent_compH,``  AEGP_LayerIDVal  id,``  AEGP_LayerH  \*layerPH);`</pre>` |
| `AEGP_GetLayerLabel` | Gets a layer's `AEGP_LabelID`. |
| | `<pre lang="cpp">`AEGP_GetLayerLabel(``AEGP_LayerH  layerH,``  AEGP_LabelID  \*labelP);`</pre>` |
| `AEGP_SetLayerLabel` | Sets a layer's `AEGP_LabelID`. Undoable. |
| | `<pre lang="cpp">`AEGP_SetLayerLabel(``AEGP_LayerH  layerH,``  AEGP_LabelID  label);`</pre>` |
| `AEGP_GetLayerSamplingQuality` | New in CC. Get the sampling quality of a layer. |
| | `<pre lang="cpp">`AEGP_GetLayerSamplingQuality(``AEGP_LayerH  layerH,``  AEGP_LayerSamplingQuality  \*label);`</pre>` |
| | Layer sampling quality is one of the following flags: |
| | -`AEGP_LayerSamplingQual_BILINEAR` |
| | -`AEGP_LayerSamplingQual_BICUBIC` |
| `AEGP_SetLayerSamplingQuality` | New in CC. Sets the sampling quality of a layer (see flag values above). Option is explicitly set on the layer independent of layer quality. |
| | If you want to force it on you must also set the layer quality to `AEGP_LayerQual_BEST` with `AEGP_SetLayerQuality` Otherwise it will only be using the specified layer sampling quality whenever the layer quality is set to `AEGP_LayerQual_BEST`. |
| | Undoable. |
| | `<pre lang="cpp">`AEGP_SetLayerSamplingQuality(``AEGP_LayerH  layerH,``  AEGP_LayerSamplingQuality  label);`</pre>` |
| `AEGP_GetTrackMatteLayer` | New in 23.0. Returns the track matte layer of `layerH`. Returns `NULL` if there is no track matte layer. |
| | `<pre lang="cpp">`AEGP_GetTrackMatteLayer(``const AEGP_LayerH  layerH,``  AEGP_LayerH  \*track_matte_layerPH);`</pre>` |
| `AEGP_SetTrackMatte` | New in 23.0. Sets the track matte layer and track matte type of `layerH`. |
| | **Track Matte Types**: |
| | -`AEGP_TrackMatte_NO_TRACK_MATTE` |
| | -`AEGP_TrackMatte_ALPHA` |
| | -`AEGP_TrackMatte_NOT_ALPHA` |
| | -`AEGP_TrackMatte_LUMA` |
| | -`AEGP_TrackMatte_NOT_LUMA` |
| | Setting the track matte type as `AEGP_TrackMatte_NO_TRACK_MATTE` removes track matte. |
| | `<pre lang="cpp">`AEGP_SetTrackMatte(``AEGP_LayerH  layerH,``  const AEGP_LayerH  track_matte_layerH0,``  const AEGP_TrackMatte  track_matte_type);`</pre>` |
| `AEGP_RemoveTrackMatte` | New in 23.0. Removes the track matte layer of `layerH`. |
| | `<pre lang="cpp">`AEGP_RemoveTrackMatte(``  AEGP_LayerH  layerH);`</pre>` |

---

## 图层创建注意事项

所有使用AEGP调用创建的图层将从合成时间0开始，并具有合成的持续时间。

请使用[AEGP_LayerSuite9](#aegp_layersuite9)中的 `AEGP_SetLayerOffset()`和 `AEGP_SetLayerInPointAndDuration()`来正确设置图层的时间信息。

当图层的拉伸因子（自然是通过[AEGP_LayerSuite9](#aegp_layersuite9)中的 `AEGP_GetLayerStretch`获取的）不是100%时，需要进行以下计算以得出正确的图层偏移量：

```cpp
offset = compIn - stretch \* layerIn;
```

---

## 与图层效果的通信

访问应用于图层的效果。此套件提供了对所有参数数据流的访问权限。

使用[流套件](#stream-suite)来处理这些数据流。

`AEGP_Effect_RefH`是对已应用效果的引用。`AEGP_InstalledEffectKey`是对已安装效果的引用，该效果可能当前并未应用于任何对象。

如果Foobarocity被两次应用到同一个图层上，将会有两个不同的 `AEGP_Effect_RefHs`，但它们都会返回相同的 `AEGP_InstalledEffectKey`。

### AEGP_EffectSuite4

| Function | Purpose |
| --- | --- |
| `AEGP_GetLayerNumEffects` | Get number of effects applied to a layer. |
| | `<pre lang="cpp">`AEGP_GetLayerNumEffects(``AEGP_LayerH  layerH,``  A_long  \*num_effectsPL);`</pre>` |
| `AEGP_GetLayerEffectByIndex` | Retrieves (by index) a reference to an effect applied to the layer. |
| | `<pre lang="cpp">`AEGP_GetLayerEffectByIndex(``AEGP_PluginID  aegp_plugin_id,``  AEGP_LayerH  layerH,``AEGP_EffectIndex  effect_indexL,``  AEGP_EffectRefH  \*effectPH);`</pre>` |
| `AEGP_GetInstalledKeyFromLayerEffect` | Given an `AEGP_EffectRefH`, retrieves its associated `AEGP_InstalledEffectKey`. |
| | `<pre lang="cpp">`AEGP_GetInstalledKeyFromLayerEffect(``AEGP_EffectRefH  effect_refH,``  AEGP_InstalledEffectKey  \*installed_keyP);`</pre>` |
| `AEGP_GetEffectParamUnionByIndex` | Returns description of effect parameter. |
| | Do not use the value(s) in the ParamDef returned by this function (Use `AEGP_GetNewStreamValue()` instead); it's provided so AEGPs can access parameter defaults, checkbox names, and pop-up strings. |
| | Use `AEGP_GetEffectNumParamStreams()` from [AEGP_StreamSuite5](#aegp_streamsuite5) to get the stream count, useful for determining the maximum `param_index`. The last parameter is optional. |
| | `<pre lang="cpp">`AEGP_GetEffectParamUnionByIndex(``AEGP_PluginID  aegp_plugin_id,``  AEGP_EffectRefH  effectH,``PF_ParamIndex  param_index,``  PF_ParamType  \*param_typeP``  PF_ParamDefUnion  \*uP0);`</pre>` |
| `AEGP_GetEffectFlags` | Obtains the flags for the given `AEGP_EffectRefH`. |
| | `<pre lang="cpp">`AEGP_GetEffectFlags(``AEGP_EffectRefH  effect_refH,``  AEGP_EffectFlags  \*effect_flagsP);`</pre>` |
| | Flags will be a combination of the following: |
| | -`AEGP_EffectFlags_NONE` |
| | -`AEGP_EffectFlags_ACTIVE` |
| | -`AEGP_EffectFlags_AUDIO_ONLY` |
| | -`AEGP_EffectFlags_AUDIO_TOO` |
| | -`AEGP_EffectFlags_MISSING` |
| `AEGP_SetEffectFlags` | Sets the flags (enumerated above) for the given `AEGP_EffectRefH`, masked by a different set of effect flags. |
| | `<pre lang="cpp">`AEGP_SetEffectFlags(``AEGP_EffectRefH  effect_refH,``  AEGP_EffectFlags  mask,``  AEGP_EffectFlags  effect_flags);`</pre>` |
| `AEGP_ReorderEffect` | Change the order of applied effects (pass the requested index). |
| | `<pre lang="cpp">`AEGP_ReorderEffect(``AEGP_EffectRefH  effect_refH,``  A_long  effect_indexL);`</pre>` |
| `AEGP_EffectCallGeneric` | Call an effect plug-in, and pass it a pointer to any data you like; the effect can modify it. This is how AEGPs communicate with effects. |
| | Pass `PF_Cmd_COMPLETELY_GENERAL` for `effect_cmd`. |
| | `<pre lang="cpp">`AEGP_EffectCallGeneric(``AEGP_PluginID  aegp_plugin_id,``  AEGP_EffectRefH  effectH,``const A_Time  \*timePT,``  PF_Cmd  effect_cmd,``  void  \*extraPV);`</pre>` |
| `AEGP_DisposeEffect` | Disposes of an `AEGP_EffectRefH`. Use this to dispose of any `AEGP_EffectRefH` returned by After Effects. |
| | `<pre lang="cpp">`AEGP_DisposeEffect(``  AEGP_EffectRefH  effectH);`</pre>` |
| `AEGP_ApplyEffect` | Apply an effect to a given layer. Returns the newly-created `AEGP_EffectRefH`. |
| | `<pre lang="cpp">`AEGP_ApplyEffect(``AEGP_PluginID  aegp_plugin_id,``  AEGP_LayerH  layerH,``AEGP_InstalledEffectKey  installed_key,``  AEGP_EffectRefH  \*effect_refPH);`</pre>` |
| `AEGP_DeleteLayerEffect` | Remove an applied effect. |
| | `<pre lang="cpp">`AEGP_DeleteLayerEffect(``  AEGP_EffectRefH  effect_refH);`</pre>` |
| `AEGP_GetNumInstalledEffects` | Returns the count of effects installed in After Effects. |
| | `<pre lang="cpp">`AEGP_GetNumInstalledEffects(``  A_long  \*num_installed_effectsPL);`</pre>` |
| `AEGP_GetNextInstalledEffect` | Returns the `AEGP_InstalledEffectKey` of the next installed effect. |
| | Pass `AEGP_InstalledEffectKey_NONE` as the first parameter to obtain the first `AEGP_InstalledEffectKey`. |
| | `<pre lang="cpp">`AEGP_GetNextInstalledEffect(``AEGP_InstalledEffectKey  key,``  AEGP_InstalledEffectKey  \*next_keyPH);`</pre>` |
| `AEGP_GetEffectName` | Get name of the effect.`nameZ` can be up to `AEGP_MAX_EFFECT_NAME_SIZE + 1` long. |
| | `<pre lang="cpp">`AEGP_GetEffectName(``AEGP_InstalledEffectKey  installed_key,``  A_char  \*nameZ);`</pre>` |
| | Note: use `AEGP_SetStreamName` to change the display name of an effect. |
| `AEGP_GetEffectMatchName` | Get match name of an effect (defined in PiPL).`match_nameZ` up to `AEGP_MAX_EFFECT_MATCH_NAME_SIZE + 1` long. |
| | `<pre lang="cpp">`AEGP_GetEffectMatchName(``AEGP_InstalledEffectKey  installed_key,``  A_char  \*match_nameZ);`</pre>` |
| | Match names are in 7-bit ASCII. UI names are in the current application runtime encoding; for example, ISO 8859-1 for most languages on Windows. |
| `AEGP_GetEffectCategory` | Menu category of effect.`categoryZ` can be up to `AEGP_MAX_EFFECT_CATEGORY_NAME_SIZE + 1` long. |
| | `<pre lang="cpp">`AEGP_GetEffectCategory(``AEGP_InstalledEffectKey  installed_key,``  A_char  \*categoryZ);`</pre>` |
| `AEGP_DuplicateEffect` | Duplicates a given `AEGP_EffectRefH`. Caller must dispose of duplicate when finished. |
| | `<pre lang="cpp">`AEGP_DuplicateEffect(``AEGP_EffectRefH  orig_effect_refH,``  AEGP_EffectRefH  \*dupe_refPH);`</pre>` |
| `AEGP_NumEffectMask` | New in CC 2014. How many masks are on this effect? |
| | `<pre lang="cpp">`AEGP_NumEffectMask(``AEGP_EffectRefH  effect_refH,``  A_u_long  \*num_masksPL);`</pre>` |
| `AEGP_GetEffectMaskID` | New in CC 2014. For a given mask_indexL, returns the corresponding `AEGP_MaskIDVal` for use in uniquely identifying the mask. |
| | `<pre lang="cpp">`AEGP_GetEffectMaskID(``AEGP_EffectRefH  effect_refH,``  A_u_long  mask_indexL,``  AEGP_MaskIDVal  \*id_valP);`</pre>` |
| `AEGP_AddEffectMask` | New in CC 2014. Add an effect mask, which may be created using the[Mask Management](#mask-management). |
| | Returns the local stream of the effect ref - useful if you want to add keyframes. |
| | Caller must dispose of `AEGP_StreamRefH` when finished. |
| | Undoable. |
| | `<pre lang="cpp">`AEGP_AddEffectMask(``AEGP_EffectRefH  effect_refH,``  AEGP_MaskIDVal  id_val,``  AEGP_StreamRefH  streamPH0);`</pre>` |
| `AEGP_RemoveEffectMask` | New in CC 2014. Remove an effect mask. |
| | Undoable. |
| | `<pre lang="cpp">`AEGP_RemoveEffectMask(``AEGP_EffectRefH  effect_refH,``  AEGP_MaskIDVal  id_val);`</pre>` |
| `AEGP_SetEffectMask` | New in CC 2014. Set an effect mask on an existing index. |
| | Returns the local stream of the effect ref - useful if you want to add keyframes. |
| | Caller must dispose of `AEGP_StreamRefH` when finished. |
| | Undoable. |
| | `<pre lang="cpp">`AEGP_SetEffectMask(``AEGP_EffectRefH  effect_refH,``  A_u_long  mask_indexL,``AEGP_MaskIDVal  id_val,``  AEGP_StreamRefH  \*streamPH0);`</pre>` |

---

## 利用效果UI行为来显得酷炫

即使你操作了一个图层的效果，其效果控件也不一定会变得可见。

然而，如果你应用然后立即移除一个效果，该图层的效果控件将会被设置为可见。

很狡猾吧？

---

## StreamRefs与EffectRefs

如何获取效果的AEGP_StreamRef？首先通过调用 `AEGP_GetNewEffectForEffect()`获取效果的 `AEGP_EffectRef`。

然后调用 `AEGP_GetNewEffectStreamByIndex()`，比如参数索引1，它会返回一个参数流。

接着调用 `AEGP_GetNewParentStreamRef()`——瞧！你的 `AEGP_StreamRef`就出现了！

如果你获取了效果流的引用，在完成对流的使用之前不要释放 `AEGP_EffectRefH`，否则会破坏After Effects的签出机制。同时记住，AEGP_StreamRefHs是不透明的；而 `A E G P _ S t r e a m V a l u e 2 s` 则并非完全如此（部分透明）。

要获取效果的实例名称（用户重命名后的），需先获得该效果本身的 A E G P _ S t r e a m R e f ，再调用 `A E G P _ G e t S t r e a m N a m e` 。

---

## 深入探索流(stream)

几乎 After Effects 中的所有内容都是流。特效参数、图层、遮罩和形状都在内部由流表示。通过 A E G P API ，可以访问几乎所有流的各个方面。

After Effects时间线可以包含多种对象类型；每个对象都支持一组称为流的参数。所有流无论附着于何种类型的对象上概念上都相似（并且由 After Effects类似处理）。但由于它们的包含关系不同访问每种类型的方式也有所差异.

一旦获得了某个 stream,它就代表着一个可能随时间变化而变化的值.并非所有 streams *都能*随时间变化,而且特定 stream在访问时可能并不具备时间变异性.

有两种方法可以访问 stream值:如果该 stream有关键帧(keyframes),你可以使用[Working With Keyframes](#working-with-keyframes).提供出来得数值不会反映表达式影响.注意:在任何表达式中当前关键帧数值总是作为变量 value可用.

你也可以从[A EGPSuite5](#a egpsuite5)使用'A EGPSetnewstreamvalue',它会在特定时刻采样此 steam值对于没有表达式或关键帧得 steams来说时间参数无意义函数返回基本上就是此 steam常量值使用'A EGPSetsteamvalue'(不需要传入时间作为参数)设置这些 steams.

许多 SteamSuite功能填充 SteahmH完成后必须处置掉.AfterEffects分配并传递给你一份副本而非原始数据直接句柄.'AGEPgetnewlayersteam()'仅限于那些无需内存分配即可访问其值得 steams.

---

## OK我刚刚得到了什么?

Steamvalue是一个大型联合体其中只有一个结构(取决于 steamtype)被填充注意到它与[PFParamDef](../../effect-basics/PF_ParamDef.)之间得相似性了吗?

```cpp
typedef union {
 AEGP_FourDVal four_d;
 AEGP_ThreeDVal three_d;
 AEGP_TwoDVal two_d;
 AEGP_OneDVal one_d;
 AEGP_ColorVal color;
 AEGP_ArbBlockVal arbH;
 AEGP_MarkerValP markerP;
 AEGP_LayerIDVal layer_id;
 AEGP_MaskIDVal mask_id;
 AEGP_MaskOutlineValH mask;
 AEGP_TextDocumentH text_documentH;
} AEGP_StreamVal2;
```

---

## 图层

`AEGP_GetLayerStreamValue` 用于访问几乎所有AE图层固有的参数，如锚点和位置。

使用 `IsStreamLegal` 可以确定该图层是否提供该流类型。

---

## 遮罩

由于一个图层可以有多个遮罩，因此可以使用 [AEGP_MaskSuite6](#aegp_masksuite6) 中的 `AEGP_GetLayerMaskByIndex` 来访问这些遮罩。

遮罩不像图层那样有流；它们有自己的枚举。使用 [AEGP_StreamSuite5](#aegp_streamsuite5) 中的 `AEGP_GetNewMaskStream` 来访问它们的流。

---

## 效果

它们可以有可变数量的流/参数，并且在编写 AEGP时，它们的顺序和定义是未知的。

因此我们无法提供一个枚举来选择它们，而是必须通过索引获取它们，因此需要使用 [AEGP_StreamSuite5](#aegp_streamsuite5)中的 `GetNewEffectStreamByIndex`。

---

## Stream Suite（流套件）

访问和操作图层的流的数值。对于绘画和文本流，请改用 [Dynamic Streams（动态流）](#aegp_dynamicstreamsuite4)。

### AEGP_StreamSuite5

| Function | Purpose |
| --- | --- |
| `AEGP_IsStreamLegal` | Determines if the given stream is appropriate for the given layer. |
| | `<pre lang="cpp">`AEGP_IsStreamLegal(``AEGP_LayerH  layerH,``  AEGP_LayerStream  which_stream,``  A_Boolean*  is_legalP);`</pre>` |
| `AEGP_CanVaryOverTime` | Given a stream, returns whether or not a stream is time-variant (and can be keyframed). |
| | `<pre lang="cpp">`AEGP_CanVaryOverTime(``AEGP_StreamRefH  streamH,``  A_Boolean  \*can_varyPB);`</pre>` |
| `AEGP_GetValidInterpolations` | Retrieves an `AEGP_KeyInterpolationMask` indicating which interpolation types are valid for the `AEGP_StreamRefH`. |
| | `<pre lang="cpp">`AEGP_GetValidInterpolations(``AEGP_StreamRefH  streamH,``  AEGP_KeyInterpolationMask  \*valid_interpP);`</pre>` |
| | `AEGP_KeyInterpolationMask` will be a combination of the following: |
| | -`AEGP_KeyInterpMask_NONE` |
| | -`AEGP_KeyInterpMask_LINEAR` |
| | -`AEGP_KeyInterpMask_BEZIER` |
| | -`AEGP_KeyInterpMask_HOLD` |
| | -`AEGP_KeyInterpMask_CUSTOM` |
| | -`AEGP_KeyInterpMask_ANY` |
| `AEGP_GetNewLayerStream` | Get a layer's data stream. Plug-in must dispose of `streamPH`. Note that this will not provide keyframe access; use the [AEGP_KeyframeSuite](#aegp_keyframesuite3) instead. |
| | `<pre lang="cpp">`AEGP_GetNewLayerStream(``AEGP_PluginID  id,``  AEGP_LayerH  layerH,``AEGP_LayerStream  which_stream,``  AEGP_StreamRefH  \*streamPH);`</pre>` |
| | -`AEGP_LayerStream_ANCHORPOINT` |
| | -`AEGP_LayerStream_POSITION` |
| | -`AEGP_LayerStream_SCALE` |
| | -`AEGP_LayerStream_ROTATION` |
| | -`AEGP_LayerStream_ROTATE_Z` |
| | -`AEGP_LayerStream_OPACITY` |
| | -`AEGP_LayerStream_AUDIO` |
| | -`AEGP_LayerStream_MARKER` |
| | -`AEGP_LayerStream_TIME_REMAP` |
| | -`AEGP_LayerStream_ROTATE_X` |
| | -`AEGP_LayerStream_ROTATE_Y` |
| | -`AEGP_LayerStream_ORIENTATION` |
| | Only valid for `AEGP_ObjectType_CAMERA`: |
| | -`AEGP_ObjectType_CAMERA` |
| | -`AEGP_LayerStream_ZOOM` |
| | -`AEGP_LayerStream_DEPTH_OF_FIELD` |
| | -`AEGP_LayerStream_FOCUS_DISTANCE` |
| | -`AEGP_LayerStream_APERTURE` |
| | -`AEGP_LayerStream_BLUR_LEVEL` |
| | -`AEGP_LayerStream_IRIS_SHAPE` |
| | -`AEGP_LayerStream_IRIS_ROTATION` |
| | -`AEGP_LayerStream_IRIS_ROUNDNESS` |
| | -`AEGP_LayerStream_IRIS_ASPECT_RATIO` |
| | -`AEGP_LayerStream_IRIS_DIFFRACTION_FRINGE` |
| | -`AEGP_LayerStream_IRIS_HIGHLIGHT_GAIN` |
| | -`AEGP_LayerStream_IRIS_HIGHLIGHT_THRESHOLD` |
| | -`AEGP_LayerStream_IRIS_HIGHLIGHT_SATURATION` |
| | Only valid for `AEGP_ObjectType_LIGHT`: |
| | -`AEGP_LayerStream_INTENSITY` |
| | -`AEGP_LayerStream_COLOR` |
| | -`AEGP_LayerStream_CONE_ANGLE` |
| | -`AEGP_LayerStream_CONE_FEATHER` |
| | -`AEGP_LayerStream_SHADOW_DARKNESS` |
| | -`AEGP_LayerStream_SHADOW_DIFFUSION` |
| | -`AEGP_LayerStream_LIGHT_FALLOFF_TYPE` |
| | -`AEGP_LayerStream_LIGHT_FALLOFF_START` |
| | -`AEGP_LayerStream_LIGHT_FALLOFF_DISTANCE` |
| | Only valid for `AEGP_ObjectType_AV`: |
| | -`AEGP_LayerStream_ACCEPTS_SHADOWS` |
| | -`AEGP_LayerStream_ACCEPTS_LIGHTS` |
| | -`AEGP_LayerStream_AMBIENT_COEFF` |
| | -`AEGP_LayerStream_DIFFUSE_COEFF` |
| | -`AEGP_LayerStream_SPECULAR_INTENSITY` |
| | -`AEGP_LayerStream_SPECULAR_SHININESS` |
| | -`AEGP_LayerStream_METAL` |
| | -`AEGP_LayerStream_LIGHT_TRANSMISSION` |
| | Only valid for `AEGP_ObjectType_AV`, new in CS6: |
| | -`AEGP_LayerStream_REFLECTION_INTENSITY` |
| | -`AEGP_LayerStream_REFLECTION_SHARPNESS` |
| | -`AEGP_LayerStream_REFLECTION_ROLLOFF` |
| | -`AEGP_LayerStream_TRANSPARENCY_COEFF` |
| | -`AEGP_LayerStream_TRANSPARENCY_ROLLOFF` |
| | -`AEGP_LayerStream_INDEX_OF_REFRACTION` |
| | -`AEGP_LayerStream_EXTRUSION_BEVEL_STYLE` |
| | -`AEGP_LayerStream_EXTRUSION_BEVEL_DIRECTION` |
| | -`AEGP_LayerStream_EXTRUSION_BEVEL_DEPTH` |
| | -`AEGP_LayerStream_EXTRUSION_HOLE_BEVEL_DEPTH` |
| | -`AEGP_LayerStream_EXTRUSION_DEPTH` |
| | -`AEGP_LayerStream_PLANE_CURVATURE` |
| | -`AEGP_LayerStream_PLANE_SUBDIVISION` |
| | Only valid for `LIGHT` and `AV` only: |
| | -`AEGP_LayerStream_CASTS_SHADOWS` |
| | -`AEGP_LayerStream_SOURCE_TEXT` |
| | -`AEGP_LayerStream_BEGIN` = `AEGP_LayerStream_ANCHORPOINT` |
| | -`AEGP_LayerStream_END` = `AEGP_LayerStream_LIGHT_FALLOFF_DISTANCE + 1` |
| | `<pre lang="cpp">`enum {``AEGP_LightFalloff_NONE = 0,``  AEGP_LightFalloff_SMOOTH,``AEGP_LightFalloff_INVERSE_SQUARE_CLAMPED``};``typedef A_u_long AEGP_LightFalloffType;`</pre>` |
| `AEGP_GetEffectNumParamStreams` | Get number of parameter streams associated with an effect. |
| | `<pre lang="cpp">`AEGP_GetEffectNumParamStreams(``AEGP_EffectRefH  effect_refH,``  A_long  \*num_parmsPL);`</pre>` |
| `AEGP_GetNewEffectStreamByIndex` | Get an effect's parameter stream. Plug-in must dispose of `streamPH`. |
| | `<pre lang="cpp">`AEGP_GetNewEffectStreamByIndex(``AEGP_PluginID  id,``  AEGP_EffectRefH  effect_refH,``PF_ParamIndex  param_index,``  AEGP_StreamRefH  \*streamPH);`</pre>` |
| `AEGP_GetNewMaskStream` | Get a mask's stream. The stream must be disposed. |
| | Also see the[AEGP_MaskSuite](#aegp_masksuite6) and [AEGP_MaskOutlineSuite](#aegp_maskoutlinesuite3) for additional Mask functions. |
| | -`AEGP_MaskStream_OUTLINE` |
| | -`AEGP_MaskStream_OPACITY` |
| | -`AEGP_MaskStream_FEATHER` |
| | -`AEGP_MaskStream_EXPANSION` |
| | Useful for iteration: |
| | -`AEGP_MaskStream_BEGIN` = `AEGP_MaskStream_OUTLINE` |
| | -`AEGP_MaskStream_END` = `AEGP_MaskStream_EXPANSION + 1` |
| | `<pre lang="cpp">`AEGP_GetNewMaskStream(``AEGP_PluginID  aegp_plugin_id,``  AEGP_MaskRefH  mask_refH,``AEGP_MaskStream  which_stream,``  AEGP_StreamRefH  \*mask_strmPH);`</pre>` |
| `AEGP_DisposeStream` | Dispose of a stream (do this with all streams passed to the plug-in by these functions). |
| | `<pre lang="cpp">`AEGP_DisposeStream(``  AEGP_StreamRefH  streamH);`</pre>` |
| `AEGP_GetNewMaskOpacity` | Get the mask's opacity stream. The stream must be disposed. |
| | `<pre lang="cpp">`AEGP_GetNewMaskOpacity(``AEGP_PluginID  aegp_plugin_id,``  AEGP_MaskH  maskH,``PF_ParamIndex  param_index,``  AEGP_StreamRefH  \*mask_opacity_streamPH);`</pre>` |
| `AEGP_GetStreamName` | Get name of the stream (localized or forced English). is handle of `A_UTF16Char` (contains null terminated UTF16 string); must be disposed with `AEGP_FreeMemHandle`. |
| | `<pre lang="cpp">`AEGP_GetStreamName(``AEGP_PluginID  pluginID,``  AEGP_StreamRefH  streamH,``A_Boolean  force_englishB,``  AEGP_MemHandle  \*utf_stream_namePH);`</pre>` |
| | NOTE: if `force_englishB` is `TRUE`, the default name will override any stream renaming which has been done (either programatically, or by the user). |
| `AEGP_GetStreamUnitsText` | Get stream units, formatted as text (localized or forced English);`unitsZ` up to `AEGP_MAX_STREAM_NAME_LEN + 1` long. |
| | `<pre lang="cpp">`AEGP_GetStreamUnitsText(``AEGP_StreamRefH  streamH,``  A_Boolean  force_englishB,``  A_char  \*unitsZ);`</pre>` |
| `AEGP_GetStreamProperties` | Get stream's flags, as well as minimum and maximum values (as floats), if the stream*has* mins and maxes. |
| | StreamFlags values: |
| | -`AEGP_StreamFlag_NONE` |
| | -`AEGP_StreamFlag_HAS_MIN` |
| | -`AEGP_StreamFlag_HAS_MAX` |
| | `<pre lang="cpp">`AEGP_GetStreamProperties(``AEGP_StreamRefH  streamH,``  AEGP_StreamFlags  \*flagsP,``A_FpLong  \*minP0,``  A_FpLong  \*maxP0);`</pre>` |
| `AEGP_IsStreamTimevarying` | Returns whether or not the stream is affected by expressions. |
| | `<pre lang="cpp">`AEGP_IsStreamTimevarying(``AEGP_StreamRefH  streamH,``  A_Boolean  \*is_timevaryPB);`</pre>` |
| `AEGP_GetStreamType` | Get type (dimension) of a stream. |
| | `<pre lang="cpp">`AEGP_GetStreamType(``AEGP_StreamRefH  streamH,``  AEGP_StreamType  \*stream_typeP);`</pre>` |
| | -`AEGP_StreamType_NO_DATA` |
| | -`AEGP_StreamType_TwoD_SPATIAL` |
| | -`AEGP_StreamType_TwoD` |
| | -`AEGP_StreamType_ThreeD` |
| | -`AEGP_StreamType_ThreeD_SPATIAL` |
| | -`AEGP_StreamType_OneD` |
| | -`AEGP_StreamType_COLOR` |
| | -`AEGP_StreamType_ARB` |
| | -`AEGP_StreamType_MARKER` |
| | -`AEGP_StreamType_LAYER_ID` |
| | -`AEGP_StreamType_MASK_ID` |
| | -`AEGP_StreamType_MASK` |
| | -`AEGP_StreamType_TEXT_DOCUMENT` |
| | NOTE: always returns `ThreeD_Spatial` for position, regardless of whether or not the layer is 3D. |
| `AEGP_GetNewStreamValue` | Get value, at a time you specify, of stream.`valueP` must be disposed by the plug-in. |
| | The `AEGP_LTimeMode` indicates whether the time is in compositions or layer time. |
| | `<pre lang="cpp">`AEGP_GetNewStreamValue(``AEGP_PluginID  aegp_plugin_id,``  AEGP_StreamRefH  streamH,``AEGP_LTimeMode  time_mode,``  const A_Time  \*timePT,``A_Boolean  pre_exprB,``  AEGP_StreamValue2  \*valueP);`</pre>` |
| `AEGP_DisposeStreamValue` | Dispose of stream value. Always deallocate values passed to the plug-in. |
| | `<pre lang="cpp">`AEGP_DisposeStreamValue(``  AEGP_StreamValue2  \*valueP);`</pre>` |
| `AEGP_SetStreamValue` | Only legal when stream is not time-variant. |
| | `<pre lang="cpp">`AEGP_SetStreamValue(``AEGP_PluginID  aegp_plugin_id,``  AEGP_StreamRefH  streamH,``  AEGP_StreamValue2  \*valueP);`</pre>` |
| `AEGP_GetLayerStreamValue` | NOTE: This convenience function is only valid for streams with primitive data types, and not for `AEGP_ArbBlockVal`, `AEGP_MarkerValH` or `AEGP_MaskOutlineValH`. For these and other complex types, use `AEGP_GetNewStreamValue`, described above. |
| | `<pre lang="cpp">`AEGP_GetLayerStreamValue(``AEGP_LayerH  layerH,``  AEGP_LayerStream  which_stream,``AEGP_LTimeMode  time_mode,``  const A_Time  \*timePT,``A_Boolean  pre_expB,``  AEGP_StreamVal  \*stream_valP,``  AEGP_StreamType  \*strm_typeP0);`</pre>` |
| `AEGP_GetExpressionState` | Determines whether expressions are enabled on the given `AEGP_StreamRefH`. |
| | `<pre lang="cpp">`AEGP_GetExpressionState(``AEGP_PluginID  aegp_plugin_id,``  AEGP_StreamRefH  streamH,``  A_Boolean  \*enabledPB);`</pre>` |
| `AEGP_SetExpressionState` | Enables and disables expressions on the given `AEGP_StreamRefH`. |
| | `<pre lang="cpp">`AEGP_SetExpressionState(``AEGP_PluginID  aegp_plugin_id,``  AEGP_StreamRefH  streamH,``  A_Boolean  enabledB);`</pre>` |
| `AEGP_GetExpression` | Obtains the expression's text. Starting in suite version 5 (available in 15.0 and later), this now supports Unicode. |
| | `<pre lang="cpp">`AEGP_GetExpression(``AEGP_PluginID  aegp_plugin_id,``  AEGP_StreamRefH  streamH,``  AEGP_MemHandle  \*unicodeHZ);`</pre>` |
| `AEGP_SetExpression` | Sets the expression's text. Starting in suite version 5 (available in 15.0 and later), this now supports Unicode. |
| | `<pre lang="cpp">`AEGP_SetExpression(``AEGP_PluginID  aegp_plugin_id,``  AEGP_StreamRefH  streamH,``  const A_UTF16Char*  expressionP);`</pre>` |
| `AEGP_DuplicateStreamRef` | Duplicates a given `AEGP_StreamRefH`. Dispose of the duplicate. |
| | `<pre lang="cpp">`AEGP_DuplicateStreamRef(``AEGP_PluginID  aegp_plugin_id,``  AEGP_StreamRefH  streamH,``  AEGP_StreamRefH  \*dup_streamPH);`</pre>` |

---

## 动态流

`AEGP_DynamicStreamSuite` 用于访问和操作绘画和文本流。

在使用仅适用于特定流类型的函数之前，请使用 `AEGP_GetStreamGroupingType` 和 `AEGP_GetDynamicStreamFlags` 来识别流。

另外请注意，通常情况下，您可以直接使用 [Stream Suite](#stream-suite) 中的调用来处理动态流。另一方面，只有那些专门针对动态流的函数才包含在此套件中。

### AEGP_DynamicStreamSuite4

| Function | Purpose |
| --- | --- |
| `AEGP_GetNewStreamRefForLayer` | Retrieves the AEGP_StreamRefH corresponding to the layer. This function is used to initiate a recursive walk of the layer's streams. |
| | `<pre lang="cpp">`AEGP_GetNewStreamRefForLayer(``AEGP_PluginID  aegp_plugin_id,``  AEGP_LayerH  layerH,``  AEGP_StreamRefH  \*streamPH);`</pre>` |
| `AEGP_GetNewStreamRefForMask` | Retrieves the AEGP_StreamRefH corresponding to the mask. |
| | `<pre lang="cpp">`AEGP_GetNewStreamRefForMask(``AEGP_PluginID  aegp_plugin_id,``  AEGP_MaskRefH  maskH,``  AEGP_StreamRefH  \*streamPH);`</pre>` |
| `AEGP_GetStreamDepth` | Retrieves the number of sub-streams associated with the given `AEGP_StreamRefH`. The initial layer has a depth of 0. |
| | `<pre lang="cpp">`AEGP_GetStreamDepth(``AEGP_StreamRefH  streamH,``  A_long  \*depthPL);`</pre>` |
| `AEGP_GetStreamGroupingType` | Retrieves the grouping type for the given `AEGP_StreamRefH`. |
| | `<pre lang="cpp">`AEGP_GetStreamGroupingType(``AEGP_StreamRefH  streamH,``  AEGP_StreamGroupingType  \*group_typeP);`</pre>` |
| | AEGP_StreamGroupingType will be one of the following: |
| | -`AEGP_StreamGroupingType_NONE` |
| | -`AEGP_StreamGroupingType_LEAF` |
| | -`AEGP_StreamGroupingType_NAMED_GROUP` |
| | -`AEGP_StreamGroupingType_INDEXED_GROUP` |
| `AEGP_GetNumStreamsInGroup` | Retrieves the number of streams associated with the given `AEGP_StreamRefH`. |
| | This function will return an error if called with an `AEGP_StreamRefH` with type `AEGP_StreamGroupingType_LEAF`. |
| | `<pre lang="cpp">`AEGP_GetNumStreamsInGroup(``AEGP_StreamRefH  streamH,``  A_long  \*num_streamsPL);`</pre>` |
| `AEGP_GetDynamicStreamFlags` | Retrieves the flags for a given AEGP_StreamRefH. |
| | `<pre lang="cpp">`AEGP_GetDynamicStreamFlags(``AEGP_StreamRefH  streamH,``  AEGP_DynStreamFlags  \*flagsP);`</pre>` |
| | `AEGP_DynStreamFlags` will be one of the following: |
| | -`AEGP_DynStreamFlag_ACTIVE_EYEBALL` means that the stream is available for reading and writing. |
| | -`AEGP_DynStreamFlag_HIDDEN` means that, while the stream is still readable/writable, it may not currently be visible in the UI. |
| | -`AEGP_DynStreamFlag_DISABLED` A read-only flag. Indicates whether the `AEGP_StreamRefH` is grayed out in the UI. |
| | - Note that as of CS5, this flag will not be returned if a parameter is disabled. |
| | - Instead, check `PF_PUI_DISABLED` in [Parameter UI Flags](../../effect-basics/PF_ParamDef#parameter-ui-flags). |
| | -`AEGP_DynStreamFlag_ELIDED` A read-only flag. Indicates that the `AEGP_StreamRefH` is read-only, the user never sees it. However, the children are still seen and not indented in the Timeline panel. |
| | -`AEGP_DynStreamFlag_SHOWN_WHEN_EMPTY` New in CS6. A read-only flag. Indicates that this stream group should be shown when empty. |
| | -`AEGP_DynStreamFlag_SKIP_REVEAL_WHEN_UNHIDDEN` New in CS6. A read-only flag. Indicates that this stream property will not be automatically revealed when un-hidden. |
| `AEGP_SetDynamicStreamFlag` | Sets the specified flag for the `AEGP_StreamRefH`. |
| | Note: flags must be set individually. Undoable if `undoableB` is `TRUE`. |
| | `<pre lang="cpp">`AEGP_SetDynamicStreamFlag(``AEGP_StreamRefH  streamH,``  AEGP_DynStreamFlags  one_flag,``A_Boolean  undoableB,``  A_Boolean  setB);`</pre>` |
| | This call may be used to dynamically show or hide parameters, by setting and clearing `AEGP_DynStreamFlag_HIDDEN`. However, `AEGP_DynStreamFlag_DISABLED` may not be set. |
| `AEGP_GetNewStreamRefByIndex` | Retrieves a sub-stream by index from a given `AEGP_StreamRefH`. Cannot be used on streams of type `AEGP_StreamGroupingType_LEAF`. |
| | `<pre lang="cpp">`AEGP_GetNewStreamRefByIndex(``AEGP_PluginID  aegp_plugin_id,``  AEGP_StreamRefH  parent_groupH,``A_long  indexL,``  AEGP_StreamRefH  \*streamPH);`</pre>` |
| `AEGP_GetNewStreamRefByMatchname` | Retrieves a sub-stream by match name from a given `AEGP_StreamRefH`. Only legal for `AEGP_StreamGroupingType_NAMED_GROUP`. |
| | `<pre lang="cpp">`AEGP_GetNewStreamRefByMatchname(``AEGP_PluginID  aegp_plugin_id,``  AEGP_StreamRefH  parent_groupH,``const A_char  \*match_nameZ,``  AEGP_StreamRefH  \*streamPH);`</pre>` |
| | Here are some handy stream names, for which references may be retrieved: |
| | -`AEGP_StreamGroupName_MASK_PARADE` |
| | -`AEGP_StreamGroupName_MASK_ATOM` |
| | -`AEGP_StreamName_MASK_FEATHER` |
| | -`AEGP_StreamName_MASK_OPACITY` |
| | -`AEGP_StreamName_MASK_OFFSET` |
| | -`AEGP_StreamGroupName_EFFECT_PARADE` |
| | -`AEGP_StreamGroupName_LAYER` |
| | -`AEGP_StreamGroupName_AV_LAYER` |
| | -`AEGP_StreamGroupName_TEXT_LAYER` |
| | -`AEGP_StreamGroupName_CAMERA_LAYER` |
| | -`AEGP_StreamGroupName_LIGHT_LAYER` |
| | -`AEGP_StreamGroupName_AUDIO` |
| | -`AEGP_StreamGroupName_MATERIAL_OPTIONS` |
| | -`AEGP_StreamGroupName_TRANSFORM` |
| | -`AEGP_StreamGroupName_LIGHT_OPTIONS` |
| | -`AEGP_StreamGroupName_CAMERA_OPTIONS` |
| `AEGP_DeleteStream` | Deletes the specified stream from a stream grouping. |
| | Note that the caller must still dispose of any `AEGP_StreamRefH` it's already acquired (allocated) via the API. Undoable. |
| | Only valid for children of type `AEGP_StreamGroupingType_INDEXED_GROUP`. |
| | `<pre lang="cpp">`AEGP_DeleteStream(``  AEGP_StreamRefH  streamH);`</pre>` |
| | Note: as of 6.5, if a stream is deleted while it or any child stream is selected, the current composition selection will become `NULL`. |
| `AEGP_ReorderStream` | Sets the new index of the specified `AEGP_StreamRefH`. Undoable. |
| | Only valid for children of `AEGP_StreamGroupingType_INDEXED_GROUP`. |
| | The `AEGP_StreamRefH` is updated to refer to the newly-ordered stream. |
| | `<pre lang="cpp">`AEGP_ReorderStream(``AEGP_StreamRefH  streamH``  A_long  new_indexL);`</pre>` |
| `AEGP_DuplicateStream` | Duplicates the specified stream and appends it to the stream group. |
| | Undoable. |
| | Only valid for children of `AEGP_StreamGroupingType_INDEXED_GROUP`. |
| | `<pre lang="cpp">`AEGP_DuplicateStream(``AEGP_PluginID  aegp_plugin_id,``  AEGP_StreamRefH  streamH,``  A_long  \*new_indexPL0);`</pre>` |
| `AEGP_SetStreamName` | Sets the name of the given `AEGP_StreamRefH`. Undoable. nameZ points to a null terminated UTF-16 string. |
| | Only valid for children of `AEGP_StreamGroupingType_INDEXED_GROUP`. |
| | NOTE: If you retrieve the name with force_englishB set to `TRUE`, you will get the canonical, UNchanged name of the stream. |
| | `<pre lang="cpp">`AEGP_SetStreamName(``AEGP_StreamRefH  streamH,``  const A_UTF16Char  \*nameZ);`</pre>` |
| | Note: Use this on an effect stream's group to change the display name of an effect. |
| `AEGP_CanAddStream` | Returns whether or not it is currently possible to add a stream through the API. |
| | `<pre lang="cpp">`AEGP_CanAddStream(``AEGP_StreamRefH  group_streamH,``  const A_char  \*match_nameZ,``  A_Boolean  \*can_addPB);`</pre>` |
| `AEGP_AddStream` | Adds a stream to the specified stream group. Undoable. Only valid for `AEGP_StreamGroupingType_INDEXED_GROUP`. |
| | `<pre lang="cpp">`AEGP_AddStream(``AEGP_PluginID  aegp_plugin_id,``  AEGP_StreamRefH  indxd_grp_streamH,``const A_char  \*match_nameZ,``  AEGP_StreamRefH  \*streamPH0);`</pre>` |
| `AEGP_GetMatchName` | Retrieves the match name for the specified `AEGP_StreamRefH`. |
| | Note that this may differ from the display name, which can be retrieves using `AEGP_GetStreamName`, in [AEGP_StreamSuite5](#aegp_streamsuite5). |
| | `nameZ` can be up to `AEGP_MAX_STREAM_MATCH_NAME_SIZE` in length. |
| | `<pre lang="cpp">`AEGP_GetMatchName(``AEGP_StreamRefH  streamH,``  A_char  \*nameZ);`</pre>` |
| `AEGP_GetNewParentStreamRef` | Retrieves an `AEGP_StreamRefH` for the parent of the specified `AEGP_StreamRefH`. |
| | `<pre lang="cpp">`AEGP_GetNewParentStreamRef(``AEGP_PluginID  plugin_id,``  AEGP_StreamRefH  streamH,``  AEGP_StreamRefH  \*parentPH);`</pre>` |
| `AEGP_GetStreamIsModified` | Returns whether or not the specified `AEGP_StreamRefH` has been modified. |
| | Note: the same result is available throught the After Effect user interface by typing "UU" with the composition selected. |
| | `<pre lang="cpp">`AEGP_GetStreamIsModified(``AEGP_StreamRefH  streamH,``  A_Boolean  \*modifiedPB);`</pre>` |
| `AEGP_GetStreamIndexInParent` | Retrieves the index of a given stream, relative to its parent stream. |
| | Only valid for children of `AEGP_StreamGroupingType_INDEXED_GROUP` |
| | `<pre lang="cpp">`AEGP_GetStreamIndexInParent(``AEGP_StreamRefH  streamH,``  A_long  \*indexPL);`</pre>` |
| | !!! note |
| | As mentioned*elsewhere*, `AEGP_StreamRefHs` don't persist across function calls. |
| | If streams are re-ordered, added or removed, all `AEGP_StreamRefHs` previously retrieved may be invalidated. |
| `AEGP_IsSeparationLeader` | Valid on leaf streams only. Returns true if this stream is a multidimensional stream that can have its dimensions separated, though they may not be currently separated. |
| | Terminology: A Leader is the stream that can be separated, a Follower is one of N automatic streams that correspond to the N dimensions of the Leader. |
| | A Leader isn't always separated, call `AEGP_AreDimensionsSeparated` to find out if it is. As of CS4, the only stream that is ever separarated is the layer's Position property. |
| | Please*do not* write code assuming that, we anticipate allowing separation of more streams in the future. |
| | `<pre lang="cpp">`AEGP_IsSeparationLeader(``AEGP_StreamRefH  streamH,``  A_Boolean  \*leaderPB);`</pre>` |
| `AEGP_AreDimensionsSeparated` | Methods such as `AEGP_GetNewKeyframeValue` that work on keyframe indices will most definitely *not* work on the Leader property, you will need to retrieve and operate on the Followers explicitly. |
| | `<pre lang="cpp">`AEGP_AreDimensionsSeparated(``AEGP_StreamRefH  streamH,``  A_Boolean  \*separatedPB);`</pre>` |
| `AEGP_SetDimensionsSeparated` | Valid only if `AEGP_IsSeparationLeader()` is `true`. |
| | `<pre lang="cpp">`AEGP_AreDimensionsSeparated(``AEGP_StreamRefH  streamH,``  A_Boolean  \*separatedPB);`</pre>` |
| `AEGP_GetSeparationFollower` | Retrieve the Follower stream corresponding to a given dimension of the Leader stream. |
| | `dimS` can range from `0` to `AEGP_GetStreamValueDimensionality(lea der_streamH) - 1`. |
| | `<pre lang="cpp">`AEGP_GetSeparationFollower(``AEGP_StreamRefH  leader_streamH``  A_short  dimS,``  AEGP_StreamRefH  \*follower_streamPH);`</pre>` |
| `AEGP_IsSeparationFollower` | Valid on leaf streams only. |
| | Returns `true` if this stream is a one dimensional property that represents one of the dimensions of a Leader. |
| | You can retrieve stream from the Leader using `AEGP_GetSeparationFollower()`. |
| | `<pre lang="cpp">`AEGP_IsSeparationFollower(``AEGP_StreamRefH  streamH``  A_Boolean  \*followerPB);`</pre>` |
| `AEGP_GetSeparationLeader` | Valid on separation Followers only, returns the Leader it is part of. |
| | `<pre lang="cpp">`AEGP_GetSeparationLeader(``AEGP_StreamRefH  follower_streamH,``  AEGP_StreamRefH  \*leader_streamPH);`</pre>` |
| `AEGP_GetSeparationDimension` | Valid on separation Followers only, returns which dimension of the Leader it corresponds to. |
| | `<pre lang="cpp">`AEGP_GetSeparationDimension(``AEGP_StreamRefH  follower_streamH,``  A_short  \*dimPS);`</pre>` |

---

## Working With Keyframes

Keyframes make After Effects what it is. AEGPs (and...ssshh, don't tell anyone...effects) can use this suite to add, manipulate and remove keyframes from any keyframe-able stream.

### AEGP_KeyframeSuite3

| Function | Purpose |
| --- | --- |
| `AEGP_GetStreamNumKFs` | Retrieves the number of keyframes on the given stream. |
| | Returns `AEGP_NumKF_NO_DATA` if the stream is not keyframe-able. |
| | Also, note that a stream without keyframes isn't necessarily constant; it can be altered by expressions. |
| | `<pre lang="cpp">`AEGP_GetStreamNumKFs(``AEGP_StreamRefH  streamH,``  A_long  \*num_kfsPL);`</pre>` |
| `AEGP_GetKeyframeTime` | Retrieves the time of the specified keyframe. |
| | `<pre lang="cpp">`AEGP_GetKeyframeTime(``AEGP_StreamRefH  streamH,``  AEGP_KeyframeIndex  index,``AEGP_LTimeMode  time_mode,``  A_Time  \*timePT);`</pre>` |
| `AEGP_InsertKeyframe` | Adds a keyframe to the specified stream (at the specified composition or layer time). |
| | Returns the new keyframe's index. |
| | All indexes greater than the new index are now invalid (but you knew that). If there is already a keyframe at that time, the values will be updated. |
| | `<pre lang="cpp">`AEGP_InsertKeyframe(``AEGP_StreamRefH  streamH,``  AEGP_LTimeMode  time_mode,``const A_Time  \*timePT,``  AEGP_KeyframeIndex  \*key_indexP);`</pre>` |
| `AEGP_DeleteKeyframe` | Deletes the specified keyframe. |
| | `<pre lang="cpp">`AEGP_DeleteKeyframe(``AEGP_StreamRefH  streamH,``  AEGP_KeyframeIndex  key_index);`</pre>` |
| `AEGP_GetNewKeyframeValue` | Creates and populates an `AEGP_StreamValue2` for the stream's value at the time of the keyframe. |
| | The returned `AEGP_StreamValue2` must be disposed of using `AEGP_DisposeStreamValue`. |
| | `<pre lang="cpp">`AEGP_GetNewKeyframeValue(``AEGP_PluginID  plugin_id,``  AEGP_StreamRefH  streamH,``AEGP_KeyframeIndex  key_index,``  AEGP_StreamValue2  \*valueP);`</pre>` |
| `AEGP_SetKeyframeValue` | Sets the stream's value at the time of the keyframe. |
| | `<pre lang="cpp">`AEGP_SetKeyframeValue(``AEGP_StreamRefH  streamH,``  AEGP_KeyframeIndex  index,``  const AEGP_StreamValue2  \*valP);`</pre>` |
| `AEGP_GetStreamValueDimensionality` | Retrieves the dimensionality of the stream's value. |
| | `<pre lang="cpp">`AEGP_GetStreamValueDimensionality(``AEGP_StreamRefH  streamH,``  A_short  \*value_dimPS);`</pre>` |
| `AEGP_GetStreamTemporalDimensionality` | Retrieves the temporal dimensionality of the stream. |
| | `<pre lang="cpp">`AEGP_GetStreamTemporalDimensionality(``AEGP_StreamRefH  streamH,``  A_short  \*t_dimPS);`</pre>` |
| `AEGP_GetNewKeyframeSpatialTangents` | Returns the `AEGP_StreamValue2s` representing the stream's tangential values at the time of the keyframe. |
| | The returned `AEGP_StreamValue2s` must be disposed of using `AEGP_DisposeStreamValue`. |
| | `<pre lang="cpp">`AEGP_GetNewKeyframeSpatialTangents(``AEGP_PluginID  plugin_id,``  AEGP_StreamRefH  streamH,``AEGP_KeyframeIndex  key_index,``  AEGP_StreamValue2  \*in_tanP0,``  AEGP_StreamValue2  \*out_tanP0);`</pre>` |
| `AEGP_SetKeyframeSpatialTangents` | Specifies the tangential `AEGP_StreamValue2s` to be used for the stream's value at the time of the keyframe. |
| | The `AEGP_StreamValue2s` passed for in and out tangents are not adopted by After Effects, and must be disposed of using `AEGP_DisposeStreamValue`. |
| | `<pre lang="cpp">`AEGP_SetKeyframeSpatialTangents(``AEGP_StreamRefH  streamH,``  AEGP_KeyframeIndex  key_index,``const AEGP_StreamValue2  \*in_tP0,``  const AEGP_StreamValue2  \*out_tP0);`</pre>` |
| | NOTE: In `AEGP_KeyframeSuite2` and prior versions, the values returned from this function were wrong when called on an effect point control stream or anchor point. They were not multiplied by the layer size. Now they are. |
| `AEGP_GetKeyframeTemporalEase` | Retrieves the `AEGP_KeyframeEases` associated with the specified dimension of the stream's value at the time of the keyframe. |
| | `dimensionL` ranges from `0` to `(temporal_dimensionality -1)`. |
| | `<pre lang="cpp">`AEGP_GetKeyframeTemporalEase(``AEGP_StreamRefH  streamH,``  AEGP_KeyframeIndex  key_index,``A_long  dimensionL,``  AEGP_KeyframeEase  \*in_easeP0,``  AEGP_KeyframeEase  \*out_easeP0);`</pre>` |
| | NOTE: the returned ease values must be multiplied by layer height to match the values displayed in the After Effects UI. |
| `AEGP_SetKeyframeTemporalEase` | Specifies the `AEGP_KeyframeEases` to be used for the stream's value at the time of the keyframe. |
| | `dimensionL` ranges from `0` to `(temporal_dimensionality -1)`. |
| | The `AEGP_KeyframeEases` passed are not adopted by After Effects. |
| | `<pre lang="cpp">`AEGP_SetKeyframeTemporalEase(``AEGP_StreamRefH  streamH,``  AEGP_KeyframeIndex  key_index,``A_long  dimL,``  const AEGP_KeyframeEase  \*in_P0,``  const AEGP_KeyframeEase  \*outP0);`</pre>` |
| `AEGP_GetKeyframeFlags` | Retrieves the flags currently set for the keyframe. |
| | `<pre lang="cpp">`AEGP_GetKeyframeFlags(``AEGP_StreamRefH  streamH,``  AEGP_KeyframeIndex  key_index,``  AEGP_KeyframeFlags  \*flagsP);`</pre>` |
| | `*flagsP` will be a combination of the following: |
| | -`AEGP_KeyframeFlag_NONE` |
| | -`AEGP_KeyframeFlag_TEMPORAL_CONTINUOUS` |
| | -`AEGP_KeyframeFlag_TEMPORAL_AUTOBEZIER` |
| | -`AEGP_KeyframeFlag_SPATIAL_CONTINUOUS` |
| | -`AEGP_KeyframeFlag_SPATIAL_AUTOBEZIER` |
| | -`AEGP_KeyframeFlag_ROVING` |
| `AEGP_SetKeyframeFlag` | Sets the specified flag for the keyframe. Flags must be set individually. |
| | `<pre lang="cpp">`AEGP_SetKeyframeFlag(``AEGP_StreamRefH  streamH,``  AEGP_KeyframeIndex  key_index,``AEGP_KeyframeFlags  flag,``  A_Boolean  valueB);`</pre>` |
| `AEGP_GetKeyframeInterpolation` | Retrieves the in and out `AEGP_KeyframeInterpolationTypes` for the specified keyframe. |
| | `<pre lang="cpp">`AEGP_GetKeyframeInterpolation(``AEGP_StreamRefH  streamH,``  AEGP_KeyframeIndex  key_index,``AEGP_KeyframeInterpolationType  \*inP0,``  AEGP_KeyframeInterpolationType  \*outP0);`</pre>` |
| | `AEGP_KeyframeInterpolationType` is one of the following: |
| | -`AEGP_KeyInterp_NONE` |
| | -`AEGP_KeyInterp_LINEAR` |
| | -`AEGP_KeyInterp_BEZIER` |
| | -`AEGP_KeyInterp_HOLD` |
| `AEGP_SetKeyframeInterpolation` | Specifies the in and out `AEGP_KeyframeInterpolationTypes` to be used for the given keyframe. |
| | `<pre lang="cpp">`AEGP_SetKeyframeInterpolation(``AEGP_StreamRefH  streamH,``  AEGP_KeyframeIndex  key_index,``AEGP_KeyframeInterpolationType  in_interp,``  AEGP_KeyframeInterpolationType  out_interp);`</pre>` |
| `AEGP_StartAddKeyframes` | Informs After Effects that you're going to be adding several keyframes to the specified stream. After Effects will return an allocated opaque `AEGP_AddKeyframesInfoH`, for use with the calls below. |
| | `<pre lang="cpp">`AEGP_StartAddKeyframes(``AEGP_StreamRefH  streamH,``  AEGP_AddKeyframesInfoH  \*akPH);`</pre>` |
| `AEGP_AddKeyframes` | Adds a keyframe to the specified stream at the specified (layer or composition) time. |
| | Note: this doesn't actually do anything to the stream's value. |
| | `<pre lang="cpp">`AEGP_AddKeyframes(``AEGP_AddKeyframesInfoH  akH,``  AEGP_LTimeMode  time_mode,``const A_Time  \*timePT,``  A_long  \*indexPL);`</pre>` |
| `AEGP_SetAddKeyframe` | Sets the value of the specified keyframe. |
| | `<pre lang="cpp">`AEGP_SetAddKeyframe(``AEGP_AddKeyframesInfoH  akH,``  A_long  indexL,``  const AEGP_StreamValue2  \*valueP);`</pre>` |
| `AEGP_EndAddKeyframes` | Tells After Effects you're done adding keyframes. |
| | `<pre lang="cpp">`AEGP_EndAddKeyframes(``A_Boolean  addB,``  AEGP_AddKeyframesInfoH  akH);`</pre>` |

---

## Adding Multiple Keyframes

每次调用 `AEGP_InsertKeyframe()` 时，整个流都会被添加到撤销堆栈中。

如果你只是添加一两个关键帧，这并不是问题。然而，如果你正在编写一个关键帧生成器，你会希望以*正确*的方式处理。

在开始添加关键帧之前，调用（名字非常贴切的）`AEGP_StartAddKeyframes`，并传递一个不透明的 `AEGP_AddKeyframesInfoH` 给它。

对于每个要添加的关键帧，调用 `AEGP_AddKeyframes` 来设置要使用的时间（并获取新添加的关键帧的索引），然后调用 `AEGP_SetAddKeyframe` 来指定要使用的值。

完成后，调用 `AEGP_EndAddKeyframes` 让 After Effects 知道是时候将更改后的参数流添加到撤销堆栈中了
---

## 标记流

`AEGP_MarkerSuite` 允许直接操作标记数据。

### AEGP_MarkerSuite2

| Function | Purpose |
| --- | --- |
| `AEGP_NewMarker` | Creates a new marker. |
| | `<pre lang="cpp">`AEGP_NewMarker(``  AEGP_MarkerValP  \*markerPP);`</pre>` |
| `AEGP_DisposeMarker` | Disposes of a marker. |
| | `<pre lang="cpp">`AEGP_DisposeMarker(``  AEGP_MarkerValP  markerP);`</pre>` |
| `AEGP_DuplicateMarker` | Duplicates a marker (didn't see\*that* one coming, eh?). |
| | `<pre lang="cpp">`AEGP_DuplicateMarker(``AEGP_MarkerValP  markerP,``  AEGP_MarkerValP  \*new_markerP);`</pre>` |
| `AEGP_SetMarkerFlag` | Sets a marker flag's value. |
| | `<pre lang="cpp">`AEGP_SetMarkerFlag(``AEGP_MarkerValP  markerP,``  AEGP_MarkerFlagType  flagType,``  A_Boolean  valueB);`</pre>` |
| | Currently, AEGP_MarkerFlagType is one of the following: |
| | -`AEGP_MarkerFlag_NONE` |
| | -`AEGP_MarkerFlag_NAVIGATION` |
| `AEGP_GetMarkerFlag` | Gets the value (see above) of a given `AEGP_MarkerFlagType`. |
| | `<pre lang="cpp">`AEGP_GetMarkerFlag(``AEGP_ConstMarkerValP  markerP,``  AEGP_MarkerFlagType  flagType``  A_Boolean  \*valueBP);`</pre>` |
| `AEGP_GetMarkerString` | Retrieves the UTF-16, NULL-terminated string located in the specified marker field. Must be disposed of by caller using `AEGP_FreeMemHandle`. |
| | `<pre lang="cpp">`AEGP_GetMarkerString(``AEGP_PluginID  id,``  AEGP_ConstMarkerValP  markerP,``AEGP_MarkerStringType  strType,``  AEGP_MemHandle  \*unicodePH);`</pre>` |
| `AEGP_SetMarkerString` | Sets the specified field of a marker to the provided text. |
| | `<pre lang="cpp">`AEGP_SetMarkerString(``AEGP_MarkerValP  markerP,``  AEGP_MarkerStringType  strType,``const A_u_short  \*unicodeP,``  A_long  lengthL);`</pre>` |
| `AEGP_CountCuePointParams` | Returns the number of cue point parameters. |
| | `<pre lang="cpp">`AEGP_CountCuePointParams(``AEGP_ConstMarkerValP  markerP,``  A_long  \*paramsLP);`</pre>` |
| `AEGP_GetIndCuePointParam` | Returns the cue point param at the specified index (which must be between `0` and `(cue point params -1)`. |
| | Returned handles are UTF-16, NULL-terminated strings, and must be disposed of by caller using `AEGP_FreeMemHandle`. |
| | `<pre lang="cpp">`AEGP_GetIndCuePointParam(``AEGP_PluginID  id,``  AEGP_ConstMarkerValP  markerP,``A_long  param_indexL,``  AEGP_MemHandle  \*unicodeKeyPH,``  AEGP_MemHandle  \*uni_ValuePH);`</pre>` |
| `AEGP_SetIndCuePointParam` | Set the value of an indexed cue point parameter to the specified value. |
| | `key_lengthL` is "number of unicode characters", and `value_lenL` is the length of the provided value. |
| | `unicode_KeyP` and `unicode_ValueP` point to UTF-16 data. |
| | `<pre lang="cpp">`AEGP_SetIndCuePointParam(``AEGP_MarkerValP  markerP,``  A_long  param_idxL,``const A_u_short  \*unicode_KeyP,``  A_long  key_lengthL,``const A_u_short  \*unicode_ValueP,``  A_long  value_lengthL);`</pre>` |
| `AEGP_InsertCuePointParam` | Inserts a cue point parameter. |
| | This call is following by `AEGP_SetIndCuePointParam` to actually set the data. |
| | `<pre lang="cpp">`AEGP_InsertCuePointParam(``AEGP_MarkerValP  markerP,``  A_long  param_idxL);`</pre>` |
| `AEGP_DeleteIndCuePointParam` | Deletes the cue point param at the specified index. |
| | `<pre lang="cpp">`AEGP_DeleteIndCuePointParam(``AEGP_MarkerValP  markerP,``  A_long  param_idxL);`</pre>` |
| `AEGP_SetMarkerDuration` | `<pre lang="cpp">`AEGP_SetMarkerDuration(``AEGP_MarkerValP  markerP,``  const A_Time  \*durationPT);`</pre>` |
| `AEGP_GetMarkerDuration` | `<pre lang="cpp">`AEGP_GetMarkerDuration(``AEGP_ConstMarkerValP  markerP,``  A_Time  \*durationPT);`</pre>` |

---

## 遮罩管理

访问、操作和删除图层的遮罩。

### AEGP_MaskSuite6

| Function | Purpose |
| --- | --- |
| `AEGP_GetLayerNumMasks` | Counts the masks applied to a layer, |
| | `<pre lang="cpp">`AEGP_GetLayerNumMasks(``AEGP_LayerH  aegp_layerH,``  A_long  \*num_masksPL);`</pre>` |
| `AEGP_GetLayerMaskByIndex` | Given a layer handle and mask index, returns a pointer to the mask handle. You must destroy the mask handle by using `AEGP_DisposeMask()`. |
| | `<pre lang="cpp">`AEGP_GetLayerMaskByIndex(``AEGP_LayerH  aegp_layerH,``  A_long  mask_indexL,``  AEGP_MaskRefH  \*maskPH);`</pre>` |
| `AEGP_DisposeMask` | Dispose of a mask handle. |
| | `<pre lang="cpp">`AEGP_DisposeMask(``  AEGP_MaskRefH  maskH);`</pre>` |
| `AEGP_GetMaskInvert` | Given a mask handle, determines if the mask is inverted or not. |
| | `<pre lang="cpp">`AEGP_GetMaskInvert(``AEGP_MaskRefH  maskH,``  A_Boolean  \*invertPB);`</pre>` |
| `AEGP_SetMaskInvert` | Sets the inversion state of a mask. |
| | `<pre lang="cpp">`AEGP_SetMaskInvert(``AEGP_MaskRefH  mask_refH,``  A_Boolean  invertB);`</pre>` |
| `AEGP_GetMaskMode` | Given a mask handle, returns the current mode of the mask. |
| | `PF_MaskMode_NONE` does nothing, `PF_MaskMode_ADD` is the default behavior. |
| | -`PF_MaskMode_NONE` |
| | -`PF_MaskMode_ADD` |
| | -`PF_MaskMode_SUBTRACT` |
| | -`PF_MaskMode_INTERSECT` |
| | -`PF_MaskMode_LIGHTEN` |
| | -`PF_MaskMode_DARKEN` |
| | -`PF_MaskMode_DIFFERENCE` |
| | `<pre lang="cpp">`AEGP_GetMaskMode(``AEGP_MaskRefH  maskH,``  PF_MaskMode  \*modeP);`</pre>` |
| `AEGP_SetMaskMode` | Sets the mode of the given mask. |
| | `<pre lang="cpp">`AEGP_SetMaskMode(``AEGP_MaskRefH  maskH,``  PF_MaskMode  mode);`</pre>` |
| `AEGP_GetMaskMotionBlurState` | Retrieves the motion blur setting for the given mask. |
| | `<pre lang="cpp">`AEGP_GetMaskMotionBlurState(``AEGP_MaskRefH  mask_refH,``  AEGP_MaskMBlur  \*blur_stateP);`</pre>` |
| | `AEGP_MaskMBlur` will be one of the following: |
| | -`AEGP_MaskMBlur_SAME_AS_LAYER` |
| | -`AEGP_MaskMBlur_OFF` |
| | -`AEGP_MaskMBlur_ON` |
| `AEGP_SetMaskMotionBlurState` | New in CS6. Sets the motion blur setting for the given mask. |
| | `<pre lang="cpp">`AEGP_SetMaskMotionBlurState(``AEGP_MaskRefH  mask_refH,``  AEGP_MaskMBlur  blur_state);`</pre>` |
| `AEGP_GetMaskFeatherFalloff` | New in CS6. Gets the type of feather falloff for the given mask, either `AEGP_MaskFeatherFalloff_SMOOTH` or `AEGP_MaskFeatherFalloff_LINEAR`. |
| | `<pre lang="cpp">`AEGP_SetMaskMotionBlurState(``AEGP_MaskRefH  mask_refH,``  AEGP_MaskFeatherFalloff  \*feather_falloffP);`</pre>` |
| `AEGP_SetMaskFeatherFalloff` | Sets the type of feather falloff for the given mask. |
| | `<pre lang="cpp">`AEGP_SetMaskMotionBlurState(``AEGP_MaskRefH  mask_refH,``  AEGP_MaskFeatherFalloff  feather_falloff);`</pre>` |
| `AEGP_GetMaskName` | Removed in CS4. Use `AEGP_GetNewStreamRefForMask` and the name functions in the Dynamic Stream Suite instead. |
| `AEGP_SetMaskName` | |
| `AEGP_GetMaskID` | Retrieves the `AEGP_MaskIDVal` for the given `AEGP_MaskRefH`, for use in uniquely identifying the mask. |
| | `<pre lang="cpp">`AEGP_GetMaskID(``AEGP_MaskRefH  mask_refH,``  AEGP_MaskIDVal  \*id_valP);`</pre>` |
| `AEGP_CreateNewMask` | Creates a new mask on the referenced `AEGP_LayerH`, with zero nodes. The new mask's index is returned. |
| | `<pre lang="cpp">`AEGP_CreateNewMask(``AEGP_LayerH  layerH,``  AEGP_MaskRefH  \*mask_refPH,``  A_long  \*mask_indexPL0);`</pre>` |
| `AEGP_DeleteMaskFromLayer` | `<pre lang="cpp">`AEGP_DeleteMaskFromLayer(``  AEGP_MaskRefH  mask_refH);`</pre>` |
| | NOTE: As of 6.5, if you delete a mask and it or a child stream is selected, the current selection within the composition will become NULL. |
| `AEGP_GetMaskColor` | Retrieves the color of the specified mask. |
| | `<pre lang="cpp">`AEGP_GetMaskColor(``AEGP_MaskRefH  mask_refH,``  AEGP_ColorVal  \*colorP);`</pre>` |
| `AEGP_SetMaskColor` | Sets the color of the specified mask. |
| | `<pre lang="cpp">`AEGP_SetMaskColor(``AEGP_MaskRefH  mask_refH,``  const AEGP_ColorVal  \*colorP);`</pre>` |
| `AEGP_GetMaskLockState` | Retrieves the lock state of the specified mask. |
| | `<pre lang="cpp">`AEGP_GetMaskLockState(``AEGP_MaskRefH  mask_refH,``  A_Boolean  \*is_lockedPB);`</pre>` |
| `AEGP_SetMaskLockState` | Sets the lock state of the specified mask. |
| | `<pre lang="cpp">`AEGP_SetMaskLockState(``AEGP_MaskRefH  mask_refH,``  A_Boolean  lockB);`</pre>` |
| `AEGP_GetMaskIsRotoBezier` | Returns whether or not the given mask is used as a rotobezier. |
| | `<pre lang="cpp">`AEGP_GetMaskIsRotoBezier(``AEGP_MaskRefH  mask_refH,``  A_Boolean  \*is_roto_bezierPB);`</pre>` |
| `AEGP_SetMaskIsRotoBezier` | Sets whether a given mask is to be used as a rotobezier. |
| | `<pre lang="cpp">`AEGP_SetMaskIsRotoBezier(``AEGP_MaskRefH  mask_refH,``  A_Boolean  \*is_roto_bezierPB);`</pre>` |
| `AEGP_DuplicateMask` | Duplicates a given `AEGP_MaskRefH`. Caller must dispose of duplicate. |
| | `<pre lang="cpp">`AEGP_DuplicateMask(``AEGP_MaskRefH  orig_mask_refH,``  AEGP_MaskRefH  \*dupe_mask_refPH);`</pre>` |

---

## 遮罩轮廓

上述的遮罩套件向插件提供了图层上遮罩的信息，但并未涉及这些遮罩的具体细节。

这是因为要获取这些信息，After Effects需要进行处理；这些信息并非现成可得。

插件通过使用此遮罩轮廓套件来访问那些信息。

### AEGP_MaskOutlineSuite3

| Function | Purpose |
| --- | --- |
| `AEGP_IsMaskOutlineOpen` | Given an mask outline pointer (obtainable through the[Stream Suite](#stream-suite)), determines if the mask path is open or closed. |
| | `<pre lang="cpp">`AEGP_IsMaskOutlineOpen(``AEGP_MaskOutlineVal  \*mask_outlineP,``  A_Boolean  \*openPB);`</pre>` |
| `AEGP_SetMaskOutlineOpen` | Sets the open state of the given mask outline. |
| | `<pre lang="cpp">`AEGP_SetMaskOutlineOpen(``AEGP_MaskOutlineValH  mask_outlineH,``  A_Boolean  openB);`</pre>` |
| `AEGP_GetMaskOutlineNumSegments` | Given a mask outline pointer, returns the number of segments in the path. |
| | `num_segmentsPL` is the total number of segments `[0...N-1]`. |
| | `<pre lang="cpp">`AEGP_GetMaskOutlineNumSegments(``AEGP_MaskOutlineVal  \*mask_outlineP,``  A_long  \*num_segmentsPL);`</pre>` |
| `AEGP_GetMaskOutlineVertexInfo` | Given a mask outline pointer and a point between 0 and the total number of segments. |
| | For closed mask paths,`vertex[0]` is the same as `vertex[num_segments]`. |
| | `<pre lang="cpp">`AEGP_GetMaskOutlineVertexInfo(``AEGP_MaskOutlineVal  \*mask_outlineP,``  A_long  which_pointL,``  AEGP_MaskVertex  \*vertexP);`</pre>` |
| `AEGP_SetMaskOutlineVertexInfo` | Sets the vertex information for a given index. |
| | Setting vertex 0 is special; its in tangent will actually set the out tangent of the last vertex in the outline. |
| | Of course,`which_pointL` must be valid for the mask outline, or the function will return an error. |
| | `<pre lang="cpp">`AEGP_SetMaskOutlineVertexInfo(``AEGP_MaskOutlineValH  mask_outlineH,``  AEGP_VertexIndex  which_pointL,``  AEGP_MaskVertex  \*vertexP);`</pre>` |
| `AEGP_CreateVertex` | Creates a vertex at index position. |
| | All vertices which formerly had an `AEGP_VertexIndex` of position or greater will have their indices incremented by one. |
| | `<pre lang="cpp">`AEGP_CreateVertex(``AEGP_MaskOutlineValH  mask_outlineH,``  AEGP_VertexIndex  position);.`</pre>` |
| | NOTE: All masks must have at least one vertex. |
| `AEGP_DeleteVertex` | Removes a vertex from a mask. |
| | `<pre lang="cpp">`AEGP_DeleteVertex(``AEGP_MaskOutlineValH  mask_outlineH,``  AEGP_VertexIndex  index);`</pre>` |
| `AEGP_GetMaskOutlineNumFeathers` | New in CS6. |
| | `<pre lang="cpp">`AEGP_DeleteVertex(``AEGP_MaskOutlineValH  mask_outlineH,``  A_long  \*num_feathersPL);`</pre>` |
| `AEGP_GetMaskOutlineFeatherInfo` | New in CS6. |
| | `<pre lang="cpp">`AEGP_GetMaskOutlineFeatherInfo(``AEGP_MaskOutlineValH  mask_outlineH,``  AEGP_FeatherIndex  which_featherL,``  AEGP_MaskFeather  \*featherP);`</pre>` |
| `AEGP_SetMaskOutlineFeatherInfo` | New in CS6. Feather must already exist; use `AEGP_CreateMaskOutlineFeather` first, if needed. |
| | `<pre lang="cpp">`AEGP_SetMaskOutlineFeatherInfo(``AEGP_MaskOutlineValH  mask_outlineH,``  AEGP_VertexIndex  which_featherL,``  const AEGP_MaskFeather  \*featherP);`</pre>` |
| `AEGP_CreateMaskOutlineFeather` | New in CS6. Index of new feather is passed back in `insert_positionP`. |
| | `<pre lang="cpp">`AEGP_CreateMaskOutlineFeather(``AEGP_MaskOutlineValH  mask_outlineH,``  const AEGP_MaskFeather  \*featherP0,``  AEGP_FeatherIndex  \*insert_positionP);`</pre>` |
| `AEGP_DeleteMaskOutlineFeather` | New in CS6. |
| | `<pre lang="cpp">`AEGP_DeleteMaskOutlineFeather(``AEGP_MaskOutlineValH  mask_outlineH,``  AEGP_FeatherIndex  index);`</pre>` |

---

## 遮罩羽化

CS6新增功能，遮罩可以进行羽化处理。

`AEGP_MaskFeather` 定义如下：

```cpp
typedef struct {
 A_long segment; // mask segment where feather is
 PF_FpLong segment_sF; // 0-1: feather location on segment
 PF_FpLong radiusF; // negative value allowed if type == AEGP_MaskFeatherType_INNER
 PF_FpShort ui_corner_angleF; // 0-1: angle of UI handle on corners
 PF_FpShort tensionF; // 0-1: tension of boundary at feather pt
 AEGP_MaskFeatherInterp interp;
 AEGP_MaskFeatherType type;
} AEGP_MaskFeather;
```

`AEGP_MaskFeatherInterp` is either `AEGP_MaskFeatherInterp_NORMAL` or `AEGP_MaskFeatherInterp_HOLD_CW`.

`AEGP_MaskFeatherType` is either `AEGP_MaskFeatherType_OUTER` or `AEGP_MaskFeatherType_INNER`.

This suite enables AEGPs to get and set the text associated with text layers.

Note: to get started, retrieve an `AEGP_TextDocumentH` by calling `AEGP_GetLayerStreamValue`, above, and passing `AEGP_StreamType_TEXT_DOCUMENT` as the `AEGP_StreamType`.

---

## 处理文本图层

此套件允许AEGP获取和设置与文本图层相关联的文本。

<!-- note:

To get started, retrieve an ``AEGP_TextDocumentH`` by calling ``AEGP_GetLayerStreamValue`` above, and passing ``AEGP_StreamType_TEXT_DOCUMENT`` as the ``AEGP_StreamType``. -->

### AEGP_TextDocumentSuite1

| Function | Purpose |
| --- | --- |
| `AEGP_GetNewText` | Retrieves the UTF-16, NULL-terminated string used in the `AEGP_TextDocumentH`. |
| | Note: After Effects will allocate the `AEGP_MemHandle`; your plug-in must dispose of it when done using `AEGP_FreeMemHandle`. |
| | `<pre lang="cpp">`AEGP_GetNewText(``AEGP_PluginID  id,``  AEGP_TextDocumentH  text_docH,``  AEGP_MemHandle  \*unicodePH);`</pre>` |
| `AEGP_SetText` | Specifies the text to be used by the `AEGP_TextDocumentH`. |
| | `<pre lang="cpp">`AEGP_SetText(``AEGP_TextDocumentH  text_docH,``  const A_u_short  \*unicodePS,``  long  lengthL);`</pre>` |

---

## 处理文本轮廓

`AEGP_TextLayerSuite` 提供了对文本层所使用的实际文本轮廓的访问。

Once you have a path, you can manipulate it with [PF_PathQuerySuite1](../../effect-details/working-with-paths#pf_pathquerysuite1) and [PF_PathDataSuite](../../effect-details/working-with-paths#pf_pathdatasuite).

### AEGP_TextLayerSuite1

| Function | Purpose |
| --- | --- |
| `AEGP_GetNewTextOutlines` | Allocates and returns a handle to the `AEGP_TextOutlinesHs` associated with the specified layer. |
| | `outlinesPH` will be NULL if there are no `AEGP_TextOutlinesHs` associated with `layerH` (in other words, if it's not a text layer). |
| | `<pre lang="cpp">`AEGP_GetNewTextOutlines(``AEGP_LayerH  layerH,``  const A_Time  \*layer_timePT,``  AEGP_TextOutlinesH  \*outlinesPH);`</pre>` |
| `AEGP_DisposeTextOutlines` | Dispose of those outlines we allocated on your behalf! |
| | `<pre lang="cpp">`AEGP_DisposeTextOutlines(``  AEGP_TextOutlinesH  outlinesH);`</pre>` |
| `AEGP_GetNumTextOutlines` | Retrieves the number of text outlines for the layer. |
| | `<pre lang="cpp">`AEGP_GetNumTextOutlines(``AEGP_TextOutlinesH  outlinesH,``  A_long  \*num_otlnsPL);`</pre>` |
| `AEGP_GetIndexedTextOutline` | Returns a `PF_PathOutlinePtr` for the specifed text outline. |
| | `<pre lang="cpp">`AEGP_GetIndexedTextOutline(``AEGP_TextOutlinesH  outlinesH,``  A_long  path_indexL,``  PF_PathOutlinePtr  \*pathPP);`</pre>` |

---

## 实用函数

实用工具套件提供了错误消息处理、AEGP版本检查以及对撤销堆栈的访问功能。

这些功能确保After Effects及其插件保持整洁有序，满足您的所有需求
---

### AEGP_UtilitySuite6

| Function | Purpose |
| --- | --- |
| `AEGP_ReportInfo` | Displays dialog with name of the AEGP followed by the string passed. |
| | `<pre lang="cpp">`AEGP_ReportInfo(``AEGP_PluginID  aegp_plugin_id,``  const A_char  \*info_stringZ);`</pre>` |
| `AEGP_ReportInfoUnicode` | New in CC. Displays dialog with name of the AEGP followed by the unicode string passed. |
| | `<pre lang="cpp">`AEGP_ReportInfoUnicode(``AEGP_PluginID  aegp_plugin_id,``  const A_UTF16Char  \*info_stringP);`</pre>` |
| `AEGP_GetDriverSpecVersion` | Returns version of `AEGPDriver` plug-in (use to determine supported features). |
| | `<pre lang="cpp">`AEGP_GetDriverSpecVersion(``A_short  \*major_versionPS,``  A_short  \*minor_versionPS);`</pre>` |
| `AEGP_StartQuietErrors` | Silences errors. Must be balanced with `AEGP_EndQuietErrors`. |
| | The `AEGP_ErrReportState` is an opaque structure private to After Effects. |
| | `<pre lang="cpp">`AEGP_StartQuietErrors(``  AEGP_ErrReportState  \*err_stateP);`</pre>` |
| `AEGP_EndQuietErrors` | Re-enables errors. |
| | `<pre lang="cpp">`AEGP_EndQuietErrors(``  AEGP_ErrReportState  \*err_stateP)`</pre>` |
| `AEGP_StartUndoGroup` | Add action(s) to the undo queue. The user may undo any actions between this and `AEGP_EndUndoGroup()`. |
| | The `undo_nameZ` will appear in the edit menu. |
| | `<pre lang="cpp">`AEGP_StartUndoGroup(``  const A_char  \*undo_nameZ);`</pre>` |
| `AEGP_EndUndoGroup` | Ends the undo list. |
| | `<pre lang="cpp">`AEGP_EndUndoGroup();`</pre>` |
| `AEGP_RegisterWithAEGP` | Returns an AEGP_PluginID, which effect plug-ins can then use in calls to many functions throughout the AEGP API. |
| | Effects should only call this function once, during `PF_Cmd_GLOBAL_SETUP`, and save the `AEGP_PluginID` for later use. |
| | The first parameter can be any value, and the second parameter should be the plug-in's match name. |
| | `<pre lang="cpp">`AEGP_RegisterWithAEGP(``AEGP_GlobalRefcon  global_refcon,``  const A_char  \*plugin_nameZ,``  AEGP_PluginID  \*plugin_id);`</pre>` |
| `AEGP_GetMainHWND` | Retrieves After Effects' HWND; useful when displaying your own dialog on Windows. |
| | If you don't use After Effects' HWND, your modal dialog will not prevent interaction with the windows behind, and pain will ensue. |
| | `<pre lang="cpp">`AEGP_GetMainHWND(``  void  \*main_hwnd);`</pre>` |
| `AEGP_ShowHideAllFloaters` | Toggles whether or not floating palettes are displayed. |
| | Use this with care; users get twitchy when you unexpectedly change the UI on them. |
| | `<pre lang="cpp">`AEGP_ShowHideAllFloaters(``  A_Boolean  include_tool_palB);`</pre>` |
| `AEGP_PaintPalGetForeColor` | Retrieves the foreground color from the paint palette. |
| | `<pre lang="cpp">`AEGP_PaintPalGetForeColor(``  AEGP_ColorVal  \*fore_colorP);`</pre>` |
| `AEGP_PaintPalGetBackColor` | Retrieves the background color from the paint palette. |
| | `<pre lang="cpp">`AEGP_PaintPalGetBackColor(``  AEGP_ColorVal  \*back_colorP);`</pre>` |
| `AEGP_PaintPalSetForeColor` | Sets the foreground color in the paint palette. |
| | `<pre lang="cpp">`AEGP_PaintPalSetForeColor(``  const AEGP_ColorVal  \*fore_colorP);`</pre>` |
| `AEGP_PaintPalSetBackColor` | Sets the background color in the paint palette. |
| | `<pre lang="cpp">`AEGP_PaintPalSetBackColor(``  const AEGP_ColorVal  \*back_colorP);`</pre>` |
| `AEGP_CharPalGetFillColor` | Retrieves the fill color from the character palette. |
| | `<pre lang="cpp">`AEGP_CharPalGetFillColor(``A_Boolean  \*is_fcolor_definedPB,``  AEGP_ColorVal \*fill_colorP);`</pre>` |
| `AEGP_CharPalGetStrokeColor` | Retrieves the stroke color from the character palette. |
| | `<pre lang="cpp">`AEGP_CharPalGetStrokeColor(``A_Boolean  \*is_scolor_definedPB,``  AEGP_ColorVal  \*stroke_colorP);`</pre>` |
| `AEGP_CharPalSetFillColor` | Sets the fill color in the character palette. |
| | `<pre lang="cpp">`AEGP_CharPalSetFillColor(``  const AEGP_ColorVal  \*fill_colorP);`</pre>` |
| `AEGP_CharPalSetStrokeColor` | Sets the stroke color in the character palette. |
| | `<pre lang="cpp">`AEGP_CharPalSetStrokeColor(``  const AEGP_ColorVal  \*stroke_colorP);`</pre>` |
| `AEGP_CharPalIsFillColorUIFrontmost` | Returns whether or not the fill color is frontmost. If it isn't, the stroke color is frontmost. |
| | `<pre lang="cpp">`AEGP_CharPalIsFillColorUIFrontmost(``  A_Boolean  \*is_fcolor_selectedPB);`</pre>` |
| `AEGP_ConvertFpLongToHSFRatio` | Returns an `A_Ratio` interpretation of the given `A_FpLong`. Useful for horizontal scale factor interpretation. |
| | `<pre lang="cpp">`AEGP_ConvertFpLongToHSFRatio(``A_FpLong  numberF,``  A_Ratio  \*ratioPR);`</pre>` |
| `AEGP_ConvertHSFRatioToFpLong` | Returns an `A_FpLong` interpretation of the given `A_Ratio`. Useful for horizontal scale factor interpretation. |
| | `<pre lang="cpp">`AEGP_ConvertHSFRatioToFpLong(``A_Ratio  ratioR,``  A_FpLong  \*numberPF);`</pre>` |
| `AEGP_CauseIdleRoutinesToBeCalled` | This routine is safe to call from threads other than the main thread. It is asynchronous and will return before the idle handler is called. |
| | The suite functions to get this function pointer are not thread safe; save it off in the main thread for use by the child thread. |
| | `<pre lang="cpp">`AEGP_CauseIdleRoutinesToBeCalled(void);`</pre>` |
| `AEGP_GetSuppressInteractiveUI` | Returns whether After Effects is running without a user interface. |
| | `<pre lang="cpp">`AEGP_GetSuppressInteractiveUI(``  A_Boolean  \*ui_is_suppressedPB);`</pre>` |
| `AEGP_WriteToOSConsole` | Sends a string to the OS console. |
| | `<pre lang="cpp">`AEGP_WriteToOSConsole(``  const A_char  \*textZ);`</pre>` |
| `AEGP_WriteToDebugLog` | Writes a message to the debug log, or to the OS command line if After Effects was launched with the "-debug" option. |
| | `<pre lang="cpp">`AEGP_WriteToDebugLog(``const A_char  \*subsystemZ,``  const A_char  \*event_typeZ,``  const A_char  \*infoZ);`</pre>` |
| `AEGP_GetLastErrorMessage` | Retrieves the last error message displayed to the user, and its associated error number. Pass in the size of the character buffer to be returned. |
| | `<pre lang="cpp">`AEGP_GetLastErrorMessage(``A_long  buffer_size,``  A_char  \*error_string,``  A_Err  \*error_num);`</pre>` |
| `AEGP_IsScriptingAvailable` | Returns `TRUE` if scripting is available to the plug-in. |
| | `<pre lang="cpp">`AEGP_IsScriptingAvailable(``  A_Boolean  \*outAvailablePB);`</pre>` |
| `AEGP_ExecuteScript` | Have After Effects execute a script. The script passed in can be in either UTF-8 or the current application encoding (if platform_encodingB is passed in as TRUE). |
| | The two out arguments are optional. The value of the last line of the script is what is passed back in outResultPH0. |
| | `<pre lang="cpp">`AEGP_ExecuteScript(``AEGP_PluginID inPlugin_id,``  const A_char \*inScriptZ,``const A_Boolean platform_encodingB,``  AEGP_MemHandle \*outResultPH0,``  AEGP_MemHandle \*outErrStringPH0);`</pre>` |
| `AEGP_HostIsActivated` | Returns `TRUE` if the user has successfully activated After Effects. |
| | `<pre lang="cpp">`AEGP_HostIsActivated(``  A_Boolean  \*is_activatedPB);`</pre>` |
| `AEGP_GetPluginPlatformRef` | On macOS, returns a `CFBundleRef` to your Mach-O plug-in, or NULL for a CFM plug-in. |
| | Always returns `NULL` on Windows (you can use an OS-specific entry point to capture your DLLInstance). |
| | `<pre lang="cpp">`AEGP_GetPluginPlatformRef(``AEGP_PluginID  plug_id,``  void  \*plat_refPPV);`</pre>` |
| `AEGP_UpdateFontList` | Rescans the system font list. |
| | `<pre lang="cpp">`AEGP_UpdateFontList();`</pre>` |
| `AEGP_GetPluginPaths` | New in CC. Returns a particular path associated with the plug-in: |
| | -`AEGP_GetPathTypes_PLUGIN` - (Not Implemented) The path to the location of the plug-in itself. |
| | -`AEGP_GetPathTypes_USER_PLUGIN` -The suite specific location of user specific plug-ins. |
| | -`AEGP_GetPathTypes_ALLUSER_PLUGIN` - The suite specific location of plug-ins shared by all users. |
| | -`AEGP_GetPathTypes_APP` - The After Effects .exe or .app location. Not plug-in specific. |
| | `<pre lang="cpp">`AEGP_GetPluginPaths(``AEGP_PluginID  aegp_plugin_id,``  AEGP_GetPathTypes  path_type``  AEGP_MemHandle  \*unicode_pathPH);`</pre>` |

---

## 持久数据套件

插件具有对After Effects偏好设置中持久数据的读写权限。AEGP可以使用以下套件添加和管理自己的持久数据。数据条目通过（部分键，值键）对进行访问。建议插件使用其匹配名称作为部分键，或者在使用多个部分键时将其作为前缀。

可用的数据类型包括 `A_long`、`A_FpLong`、字符串和 `void*`。`A_FpLongs`以6位小数的精度存储，无法指定不同的精度。字符串数据支持完整的8位空间，仅0x00保留用于字符串结束符。这使得它们非常适合存储UTF-8编码的字符串、ISO 8859-1和纯ASCII文本。部分键和值键都属于这种类型。对于简单数据类型未表示的数据类型，请使用包含自定义数据的句柄处理方式；而void\*非结构化数据则允许您存储任何类型的数据——但必须同时传入以字节为单位的大小信息以及实际内容本身。

当调用任何函数来检索某个键对应的值时：如果找不到给定关键字，则会将该默认值写入blob并返回该结果；若未提供默认选项则会产生空白记录并被相应反馈出来。

需要注意的是这些资料保存在应用程序配置而非项目文件里——截至版本6.5为止尚不存在将不透明由 AEGP 生成之资讯存入 AE 工程内的方法.

即使是在运行过程中修改了首选项, After Effects也能妥善应对:它会先检查内存中的预置副本再根据那些可调整参数采取行动而不是依赖已储存好的设定.这简直就像我们事先规划好了一样!

### AEGP_PersistentDateSuite4

| Function | Purpose |
| --- | --- |
| `AEGP_GetApplicationBlob` | Obtains the handle to all persistent application data. Modifying this will modify the application. |
| | The `AEGP_PersistentType` parameter is new in CC, and should be set to one of the following: |
| | -`AEGP_PersistentType_MACHINE_SPECIFIC` |
| | -`AEGP_PersistentType_MACHINE_INDEPENDENT` |
| | -`AEGP_PersistentType_MACHINE_INDEPENDENT_RENDER` |
| | -`AEGP_PersistentType_MACHINE_INDEPENDENT_OUTPUT` |
| | -`AEGP_PersistentType_MACHINE_INDEPENDENT_COMPOSITION` |
| | -`AEGP_PersistentType_MACHINE_SPECIFIC_TEXT` |
| | -`AEGP_PersistentType_MACHINE_SPECIFIC_PAINT` |
| | `<pre lang="cpp">`AEGP_GetApplicationBlob(``AEGP_PersistentType  blob_type,``  AEGP_PersistentBlobH  \*blobPH);`</pre>` |
| `AEGP_GetNumSections` | Obtains the number of sections in the application blob. |
| | `<pre lang="cpp">`AEGP_GetNumSections(``AEGP_PersistentBlobH  blobH,``  A_long  \*num_sectionPL);`</pre>` |
| `AEGP_GetSectionKeyByIndex` | Obtains the key at the given index. |
| | `<pre lang="cpp">`AEGP_GetSectionKeyByIndex(``AEGP_PersistentBlobH  blobH,``  A_long  section_index,``A_long  max_section_size,``  A_char  \*section_keyZ);`</pre>` |
| `AEGP_DoesKeyExist` | Returns whether or not a given key/value pair exists with the blob. |
| | `<pre lang="cpp">`AEGP_DoesKeyExist(``AEGP_PersistentBlobH  blobH,``  const A_char  \*section_keyZ,``const A_char  \*value_keyZ,``  A_Boolean  \*existsPB);`</pre>` |
| `AEGP_GetNumKeys` | Retrieves the number of value keys in the section. |
| | `<pre lang="cpp">`AEGP_GetNumKeys(``AEGP_PersistentBlobH  blobH,``  const A_char  \*section_keyZ,``  A_long  \*num_keysPL);`</pre>` |
| `AEGP_GetValueKeyByIndex` | Retrieves the value of the indexed key. |
| | `<pre lang="cpp">`AEGP_GetValueKeyByIndex(``AEGP_PersistentBlobH  blobH,``  const A_char  \*section_keyZ,``A_long  key_index,``  A_long  max_key_size,``  A_char  \*value_keyZ);`</pre>` |

:::note
For the functions below, if a given key is not found, the default value is both written to the blob and returned as the value; if no default is provided, a blank value will be written and returned.
:::

| Function | Purpose |
| --- | --- |
| `AEGP_GetDataHandle` | Obtains the value associated with the given section's key. If using in-memory data structures, watch for endian issues. |
| | `<pre lang="cpp">`AEGP_GetDataHandle(``AEGP_PluginID  plugin_id,``  AEGP_PersistentBlobH  blobH,``const A_char  \*section_keyZ,``  const A_char  \*value_keyZ,``AEGP_MemHandle  defaultH0,``  AEGP_MemHandle  \*valuePH);`</pre>` |
| `AEGP_GetData` | Obtains the data located at a given section's value. |
| | `<pre lang="cpp">`AEGP_GetData(``AEGP_PersistentBlobH  blobH,``  const A_char  \*section_keyZ,``const A_char  \*value_keyZ,``  A_u_long  data_sizeLu,``const void  \*defaultPV0,``  void  \*bufPV);`</pre>` |
| `AEGP_GetString` | Obtains the string for a given section key's value (and indicates its length in `actual_szLu0`). |
| | `<pre lang="cpp">`AEGP_GetString(``AEGP_PersistentBlobH  blobH,``  const A_char  \*section_keyZ,``const A_char  \*value_keyZ,``  const A_char  \*defaultZ0,``A_u_long  buf_sizeLu,``  char  \*bufZ,``  A_u_long  \*actual_szLu0);`</pre>` |
| `AEGP_GetLong` | Obtains the `A_long` associated with a given section key's value. |
| | `<pre lang="cpp">`AEGP_GetLong(``AEGP_PersistentBlobH  blobH,``  const A_char  \*section_keyZ,``const A_char  \*value_keyZ,``  A_long  defaultL,``  A_long  \*valuePL);`</pre>` |
| `AEGP_GetFpLong` | Obtains the `A_FpLong` associated with a given section key's value. |
| | `<pre lang="cpp">`AEGP_GetFpLong(``AEGP_PersistentBlobH  blobH,``  const A_char  \*section_keyZ,``const A_char  \*value_keyZ,``  A_FpLong  defaultF,``  A_FpLong  \*valuePF);`</pre>` |
| `AEGP_GetTime` | New in CC. Obtains the `A_Time` associated with a given section key's value. |
| | `<pre lang="cpp">`AEGP_GetTime(``AEGP_PersistentBlobH  blobH,``  const A_char  \*section_keyZ,``const A_char  \*value_keyZ,``  const A_Time  \*defaultPT0,``  A_Time  \*valuePT);`</pre>` |
| `AEGP_GetARGB` | New in CC. Obtains the `PF_PixelFloat` associated with a given section key's value. |
| | `<pre lang="cpp">`AEGP_GetARGB(``AEGP_PersistentBlobH  blobH,``  const A_char  \*section_keyZ,``const A_char  \*value_keyZ,``  const PF_PixelFloat  \*defaultP0,``  PF_PixelFloat  \*valueP);`</pre>` |
| `AEGP_SetDataHandle` | Sets the given section key's value to the handle passed in. |
| | `<pre lang="cpp">`AEGP_SetDataHandle(``AEGP_PersistentBlobH  blobH,``  const A_char  \*section_keyZ,``const A_char  \*value_keyZ,``  const AEGP_MemHandle  valueH);`</pre>` |
| `AEGP_SetData` | Sets the given section key's value to the data contained in `dataPV`. |
| | `<pre lang="cpp">`AEGP_SetData(``AEGP_PersistentBlobH  blobH,``  const A_char  \*section_keyZ,``const A_char  \*value_keyZ,``  A_u_long  data_sizeLu,``  const void  \*dataPV);`</pre>` |
| `AEGP_SetString` | Sets the given section key's string to `strZ`. |
| | `<pre lang="cpp">`AEGP_SetString(``AEGP_PersistentBlobH  blobH,``  const A_char  \*section_keyZ,``const A_char  \*value_keyZ,``  const A_char  \*strZ);`</pre>` |
| `AEGP_SetLong` | Sets the given section key's value to `valueL`. |
| | `<pre lang="cpp">`AEGP_SetLong(``AEGP_PersistentBlobH  blobH,``  const A_char  \*section_keyZ,``const A_char  \*value_keyZ,``  A_long  valueL);`</pre>` |
| `AEGP_SetFpLong` | Sets the given section key's value to `valueF`. |
| | `<pre lang="cpp">`AEGP_SetFpLong(``AEGP_PersistentBlobH  blobH,``  const A_char  \*section_keyZ,``const A_char  \*value_keyZ,``  A_FpLong  valueF);`</pre>` |
| `AEGP_SetTime` | New in CC. Sets the given section key's value to `valuePT`. |
| | `<pre lang="cpp">`AEGP_SetTime(``AEGP_PersistentBlobH  blobH,``  const A_char  \*section_keyZ,``const A_char  \*value_keyZ,``  A_Time  \*valuePT);`</pre>` |
| `AEGP_SetARGB` | New in CC. Sets the given section key's value to `valueP`. |
| | `<pre lang="cpp">`AEGP_SetARGB(``AEGP_PersistentBlobH  blobH,``  const A_char  \*section_keyZ,``const A_char  \*value_keyZ,``  PF_PixelFloat  \*valueP);`</pre>` |
| `AEGP_DeleteEntry` | Removes the given section's value from the blob. |
| | `<pre lang="cpp">`AEGP_DeleteEntry(``AEGP_PersistentBlobH  blobH,``  const A_char  \*section_keyZ,``  const A_char  \*value_keyZ);`</pre>` |
| `AEGP_GetPrefsDirectory` | Get the path to the folder containing After Effects' preference file. |
| | The path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`. |
| | `<pre lang="cpp">`AEGP_GetPrefsDirectory(``  AEGP_MemHandle  \*unicode_pathPH);`</pre>` |

---

## 色彩管理

我们提供了一个函数，以便AEGP能够获取After Effects当前的色彩管理设置信息。

### AEGP_ColorSettingsSuite5

| Function | Purpose |
| --- | --- |
| `AEGP_GetBlendingTables` | Retrieves the current opaque `PF_EffectBlendingTables`, for use with `AEGP_TransferRect`. |
| | `<pre lang="cpp">`AEGP_GetBlendingTables(``PR_RenderContextH  render_contextH,``  PF_EffectBlendingTables  \*blending_tables);`</pre>` |
| `AEGP_DoesViewHaveColorSpaceXform` | Returns whether there is a colorspace transform applied to the current item view. |
| | `<pre lang="cpp">`AEGP_DoesViewHaveColorSpaceXform(``AEGP_ItemViewP  viewP,``  A_Boolean  \*has_xformPB);`</pre>` |
| `AEGP_XformWorkingToViewColorSpace` | Changes the view colorspace of the source to be the working colorspace of the destination. Source and destination can be the same. |
| | `<pre lang="cpp">`AEGP_XformWorkingToViewColorSpace(``AEGP_ItemViewP  viewP,``  AEGP_WorldH  srcH,``  AEGP_WorldH  dstH);`</pre>` |
| `AEGP_GetNewWorkingSpaceColorProfile` | Retrieves the opaque current working space ICC profile. Must be disposed. |
| | The "New" in the name does not indicate that you're making up a new profile; rather, it's part of our function naming standard; anything with "New" in the name allocates something which the caller must dispose. |
| | `<pre lang="cpp">`AEGP_GetNewWorkingSpaceColorProfile(``AEGP_PluginID  aegp_plugin_id,``  AEGP_MemHandle  \*icc_profPH);`</pre>` |
| `AEGP_GetNewColorProfileFromICCProfile` | Retrieves a new `AEGP_ColorProfileP` from After Effects, representing the specified ICC profile. The caller must dispose of the returned `AEGP_ColorProfileP` using `AEGP_DisposeColorProfile()`. |
| | `<pre lang="cpp">`AEGP_GetNewColorProfile FromICCProfile(``AEGP_PluginID  aegp_plugin_id,``  A_long  icc_sizeL,``const void  \*icc_dataPV,``  AEGP_ColorProfileP  \*profilePP);`</pre>` |
| `AEGP_GetNewICCProfileFromColorProfile` | Retrieves a new ICC profile (stored in an `AEGP_MemHandle`) representing the specified color profile. |
| | Returned `AEGP_MemHandle` must be disposed by the caller. |
| | `<pre lang="cpp">`AEGP_GetNewICCProfile FromColorProfile(``AEGP_PluginID  plugin_id,``  AEGP_ConstColorProfileP  profileP,``  AEGP_MemHandle  \*profilePH);`</pre>` |
| `AEGP_GetNewColorProfileDescription` | Returns a textual description of the specified color profile. Text will be a null-terminated UTF16 string, which must be disposed by the caller. |
| | `<pre lang="cpp">`AEGP_GetNewColorProfileDescription(``AEGP_PluginID  aegp_plugin_id,``  AEGP_ConstColorProfileP  profileP,``  AEGP_MemHandle  \*unicode_descPH);`</pre>` |
| `AEGP_DisposeColorProfile` | Disposes of a color profile, obtained using other functions in this suite. |
| | `<pre lang="cpp">`AEGP_DisposeColorProfile(``  AEGP_ColorProfileP  profileP);`</pre>` |
| `AEGP_GetColorProfileApproximateGamma` | Returns a floating point number approximating the gamma setting used by the specified color profile. |
| | `<pre lang="cpp">`AEGP_GetColorProfileApproximateGamma(``AEGP_ConstColorProfileP  profileP,``  A_FpShort  \*approx_gammaP);`</pre>` |
| `AEGP_IsRGBColorProfile` | Returns whether the specified color profile is RGB. |
| | `<pre lang="cpp">`AEGP_IsRGBColorProfile(``AEGP_ConstColorProfileP  profileP,``  A_Boolean  \*is_rgbPB);`</pre>` |
| `AEGP_SetWorkingColorSpace` | Sets the working space to the passed color profile. |
| | `<pre lang="cpp">`AEGP_SetWorkingColorSpace(``AEGP_PluginID  aegp_plugin_id,``  AEGP_CompH  compH,``  AEGP_ConstColorProfileP  color_profileP);`</pre>` |
| `AEGP_IsOCIOColorManagementUsed` | Check if the current project is using the OCIO color engine or not. |
| | Returns `true` if current project uses OCIO color managed mode. |
| | `<pre lang="cpp">`AEGP_IsOCIOColorManagementUsed(``AEGP_PluginID  aegp_plugin_id,``  A_Boolean  \*is_OCIOColorManagementUsedPB);`</pre>` |
| `AEGP_GetOCIOConfigurationFile` | Returns the OCIO configuration file used by the project. |
| | Returned config_filePH is a handle of `A_UTF16Char` containing a null terminated UTF16String which holds the OCIO Configuration file. The returned string must be disposed by the caller. |
| | `<pre lang="cpp">`AEGP_GetOCIOConfigurationFile(``AEGP_PluginID  aegp_plugin_id,``  AEGP_MemHandle  \*congif_filePH);`</pre>` |
| `AEGP_GetOCIOConfigurationFilePath` | Returns the absolute file path to the OCIO configuration used by the project |
| | The returned config_filePH is a handle of `A_UTF16Char` containing a null terminated UTF16String which holds the absolute path to OCIO Configuration file. The returned string must be disposed by the caller. |
| | `<pre lang="cpp">`AEGP_GetOCIOConfigurationFilePath(``AEGP_PluginID  aegp_plugin_id,``  AEGP_MemHandle  \*congif_filePH);`</pre>` |
| `AEGPD_GetOCIOWorkingColorSpace` | Returns the working color space of the project in OCIO mode. |
| | The returned ocio_working_colorspaceH is a handle of `A_UTF16Char` containing a null terminated UTF16String which holds the string specifying the working color space. The returned string must be disposed by the caller. |
| | `<pre lang="cpp">`AEGPD_GetOCIOWorkingColorSpace(``AEGP_PluginID  aegp_plugin_id,``  AEGP_MemHandle  \*ocio_working_colorspaceH);`</pre>` |
| `AEGPD_GetOCIODisplayColorSpace` | Returns the Display and View transforms used by the project. |
| | The returned ocio_displayH and ocio_viewH are handles of `A_UTF16Char` containing a null terminated UTF16String specifying the Display and View transforms used at project level. The returned strings must be disposed by the caller. |
| | `<pre lang="cpp">`AEGPD_GetOCIODisplayColorSpace(``AEGP_PluginID  aegp_plugin_id,``  AEGP_MemHandle  \*ocio_displayH,``  AEGP_MemHandle  \*ocio_viewH);`</pre>` |

---

## 渲染

自从我们推出AEGP API以来，一直有需求要求提供用于检索渲染帧的功能。

这些功能套件正好能满足这一需求。
First, specify what you want rendered in the [AEGP_RenderOptionsSuite4](#aegp_renderoptionssuite4) or [AEGP_LayerRenderOptionsSuite1](#aegp_layerrenderoptionssuite1).

Then do the rendering with [AEGP_RenderSuite4](#aegp_rendersuite4).

### AEGP_RenderOptionsSuite4

| Function | Purpose |
| --- | --- |
| `AEGP_NewFromItem` | Returns the `AEGP_RenderOptionsH` associated with a given `AEGP_ItemH`. |
| | If there are no options yet specified, After Effects passes back an `AEGP_RenderOptionsH` with render time set to 0, time step set to the current frame duration, field render set to `PF_Field_FRAME`, and the depth set to the highest resolution specified within the item. |
| | `<pre lang="cpp">`AEGP_NewFromItem(``AEGP_PluginID  plugin_id,``  AEGP_ItemH  itemH,``  AEGP_RenderOptionsH  \*optionsPH);`</pre>` |
| `AEGP_Duplicate` | Duplicates an `AEGP_RenderOptionsH` into `copyPH`. |
| | `<pre lang="cpp">`AEGP_Duplicate(``AEGP_PluginID  plugin_id,``  AEGP_RenderOptionsH  optionsH,``  AEGP_RenderOptionsH  \*copyPH);`</pre>` |
| `AEGP_Dispose` | Deletes an `AEGP_RenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_Dispose(``  AEGP_RenderOptionsH  optionsH);`</pre>` |
| `AEGP_SetTime` | Sets the render time of an `AEGP_RenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_SetTime(``AEGP_RenderOptionsH  optionsH,``  A_Time  time);`</pre>` |
| `AEGP_GetTime` | Retrieves the render time of the given `AEGP_RenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_GetTime(``AEGP_RenderOptionsH  optionsH,``  A_Time  \*timeP);`</pre>` |
| `AEGP_SetTimeStep` | Specifies the time step (duration of a frame) for the referenced `AEGP_RenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_SetTimeStep(``AEGP_RenderOptionsH  optionsH,``  A_Time  time_step);`</pre>` |
| `AEGP_GetTimeStep` | Retrieves the time step (duration of a frame) for the given `AEGP_RenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_GetTimeStep(``AEGP_RenderOptionsH  optionsH,``  A_Time  \*timePT);`</pre>` |
| `AEGP_SetFieldRender` | Specifies the field settings for the given `AEGP_RenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_SetFieldRender(``AEGP_RenderOptionsH  optionsH,``  PF_Field  field_render);`</pre>` |
| `AEGP_GetFieldRender` | Retrieves the field settings for the given `AEGP_RenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_GetFieldRender(``AEGP_RenderOptionsH  optionsH,``  PF_Field  \*field_renderP);`</pre>` |
| `AEGP_SetWorldType` | Specifies the AEGP_WorldType of the output of a given `AEGP_RenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_SetWorldType(``AEGP_RenderOptionsH  optionsH,``  AEGP_WorldType  type);`</pre>` |
| | `AEGP_WorldType` will be either `AEGP_WorldType_8` or `AEGP_WorldType_16` |
| `AEGP_GetWorldType` | Retrieves the `AEGP_WorldType` of the given `AEGP_RenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_GetWorldType(``AEGP_RenderOptionsH  optionsH,``  AEGP_WorldType  \*typeP);`</pre>` |
| `AEGP_SetDownsampleFactor` | Specifies the downsample factor (with independent horizontal and vertical settings) for the given `AEGP_RenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_SetDownsampleFactor(``AEGP_RenderOptionsH  optionsH,``  A_short  x,``  A_short  y);`</pre>` |
| `AEGP_GetDownsampleFactor` | Retrieves the downsample factor for the given `AEGP_RenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_GetDownsampleFactor(``AEGP_RenderOptionsH  optionsH,``  A_short  \*xP,``  A_short  \*yP);`</pre>` |
| `AEGP_SetRegionOfInterest` | Specifies the region of interest sub-rectangle for the given `AEGP_RenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_SetRegionOfInterest(``AEGP_RenderOptionsH  optionsH,``  const A_LRect  \*roiP)`</pre>` |
| `AEGP_GetRegionOfInterest` | Retrieves the region of interest sub-rectangle for the given `AEGP_RenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_GetRegionOfInterest(``AEGP_RenderOptionsH  optionsH,``  A_LRect  \*roiP);`</pre>` |
| `AEGP_SetMatteMode` | Specifies the `AEGP_MatteMode` for the given `AEGP_RenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_SetMatteMode(``AEGP_RenderOptionsH  optionsH,``  AEGP_MatteMode  mode);`</pre>` |
| | `AEGP_MatteMode` will be one of the following: |
| | -`AEGP_MatteMode_STRAIGHT` |
| | -`AEGP_MatteMode_PREMUL_BLACK` |
| | -`AEGP_MatteMode_PREMUL_BG_COLOR` |
| `AEGP_GetMatteMode` | Retrieves the `AEGP_MatteMode` for the given `AEGP_RenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_GetMatteMode(``AEGP_RenderOptionsH  optionsH,``  AEGP_MatteMode  \*modeP);`</pre>` |
| `AEGP_GetChannelOrder` | Gets the `AEGP_ChannelOrder` for the given `AEGP_RenderOptionsH`. |
| | `AEGP_ChannelOrder` will be either `AEGP_ChannelOrder_ARGB` or `AEGP_ChannelOrder_BGRA`. |
| | `<pre lang="cpp">`AEGP_GetChannelOrder(``AEGP_RenderOptionsH  optionsH,``  AEGP_ChannelOrder  \*orderP);`</pre>` |
| | Factoid: this was added to facilitate live linking with Premiere Pro. |
| `AEGP_SetChannelOrder` | Sets the `AEGP_ChannelOrder` of the `AEGP_RenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_SetChannelOrder(``AEGP_RenderOptionsH  optionsH,``  AEGP_ChannelOrder  order);`</pre>` |
| `AEGP_GetRenderGuideLayers` | Passes back a boolean that is true if the render guide layers setting is on. |
| | `<pre lang="cpp">`AEGP_GetRenderGuideLayers)(``AEGP_RenderOptionsH  optionsH,``  A_Boolean  \*will_renderPB);`</pre>` |
| `AEGP_SetRenderGuideLayers` | Specify whether or not to render guide layers. |
| | `<pre lang="cpp">`AEGP_SetRenderGuideLayers)(``AEGP_RenderOptionsH  optionsH,``  A_Boolean  render_themB);`</pre>` |
| `AEGP_GetRenderQuality` | Get the render quality of the render queue item. |
| | Quality can be either `AEGP_ItemQuality_DRAFT` or `AEGP_ItemQuality_BEST`. |
| | `<pre lang="cpp">`AEGP_GetRenderQuality(``AEGP_RenderOptionsH  optionsH,``  AEGP_ItemQuality  \*qualityP);`</pre>` |
| `AEGP_SetRenderQuality` | Set the render quality of the render queue item. |
| | `<pre lang="cpp">`AEGP_GetRenderQuality(``AEGP_RenderOptionsH  optionsH,``  AEGP_ItemQuality  quality);`</pre>` |

### AEGP_LayerRenderOptionsSuite1

:::note
New in 13.0
:::

| Function | Purpose |
| --- | --- |
| `AEGP_NewFromLayer` | Returns the `AEGP_LayerRenderOptionsH` associated with a given `AEGP_LayerH`. |
| | Render time is set to the layer's current time, time step is set to layer's frame duration, ROI to the layer's nominal bounds, and EffectsToRender to "all". |
| | `optionsPH` must be disposed by calling code. |
| | `<pre lang="cpp">`AEGP_NewFromLayer(``AEGP_PluginID  plugin_id,``  AEGP_LayerH  layerH,``  AEGP_LayerRenderOptionsH  \*optionsPH);`</pre>` |
| `AEGP_NewFromUpstreamOfEffect` | Returns the `AEGP_LayerRenderOptionsH` from the layer associated with a given `AEGP_EffectRefH`. |
| | Render time is set to the layer's current time, time step is set to layer's frame duration, ROI to the layer's nominal bounds, and EffectsToRender to the index of `effectH`. |
| | `optionsPH` must be disposed by calling code. |
| | `<pre lang="cpp">`AEGP_NewFromUpstreamOfEffect(``AEGP_PluginID  plugin_id,``  AEGP_EffectRefH  effectH,``  AEGP_LayerRenderOptionsH  \*optionsPH);`</pre>` |
| `AEGP_Duplicate` | Duplicates an `AEGP_LayerRenderOptionsH` into `copyPH`. |
| | `<pre lang="cpp">`AEGP_Duplicate(``AEGP_PluginID  plugin_id,``  AEGP_LayerRenderOptionsH  optionsH,``  AEGP_LayerRenderOptionsH  \*copyPH);`</pre>` |
| `AEGP_Dispose` | Deletes an `AEGP_LayerRenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_Dispose(``  AEGP_LayerRenderOptionsH  optionsH);`</pre>` |
| `AEGP_SetTime` | Sets the render time of an `AEGP_LayerRenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_SetTime(``AEGP_LayerRenderOptionsH  optionsH,``  A_Time  time);`</pre>` |
| `AEGP_GetTime` | Retrieves the render time of the given `AEGP_LayerRenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_GetTime(``AEGP_LayerRenderOptionsH  optionsH,``  A_Time  \*timeP);`</pre>` |
| `AEGP_SetTimeStep` | Specifies the time step (duration of a frame) for the referenced `AEGP_LayerRenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_SetTimeStep(``AEGP_LayerRenderOptionsH  optionsH,``  A_Time  time_step);`</pre>` |
| `AEGP_GetTimeStep` | Retrieves the time step (duration of a frame) for the given `AEGP_LayerRenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_GetTimeStep(``AEGP_LayerRenderOptionsH  optionsH,``  A_Time  \*timePT);`</pre>` |
| `AEGP_SetWorldType` | Specifies the AEGP_WorldType of the output of a given `AEGP_LayerRenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_SetWorldType(``AEGP_LayerRenderOptionsH  optionsH,``  AEGP_WorldType  type);`</pre>` |
| | `AEGP_WorldType` will be either `AEGP_WorldType_8` or `AEGP_WorldType_16` |
| `AEGP_GetWorldType` | Retrieves the AEGP_WorldType of the given `AEGP_LayerRenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_GetWorldType(``AEGP_LayerRenderOptionsH  optionsH,``  AEGP_WorldType  \*typeP);`</pre>` |
| `AEGP_SetDownsampleFactor` | Specifies the downsample factor (with independent horizontal and vertical settings) for the given `AEGP_LayerRenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_SetDownsampleFactor(``AEGP_LayerRenderOptionsH  optionsH,``  A_short  x,``  A_short  y);`</pre>` |
| `AEGP_GetDownsampleFactor` | Retrieves the downsample factor for the given `AEGP_LayerRenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_GetDownsampleFactor(``AEGP_LayerRenderOptionsH  optionsH,``  A_short  \*xP,``  A_short  \*yP);`</pre>` |
| `AEGP_SetMatteMode` | Specifies the AEGP_MatteMode for the given `AEGP_LayerRenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_SetMatteMode(``AEGP_LayerRenderOptionsH  optionsH,``  AEGP_MatteMode  mode);`</pre>` |
| | AEGP_MatteMode will be one of the following: |
| | -`AEGP_MatteMode_STRAIGHT` |
| | -`AEGP_MatteMode_PREMUL_BLACK` |
| | -`AEGP_MatteMode_PREMUL_BG_COLOR` |
| `AEGP_GetMatteMode` | Retrieves the AEGP_MatteMode for the given `AEGP_LayerRenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_GetMatteMode(``AEGP_LayerRenderOptionsH  optionsH,``  AEGP_MatteMode  \*modeP);`</pre>` |

### AEGP_RenderSuite4

| Function | Purpose |
| --- | --- |
| `AEGP_RenderAndCheckoutFrame` | Retrieves an `AEGP_FrameReceiptH` (not the actual pixels) for the frame requested. Check in this receipt using `AEGP_CheckinFrame` to release memory. |
| | Create the `AEGP_RenderOptionsH` using the [AEGP_RenderOptionsSuite4](#aegp_renderoptionssuite4). |
| | Optionally, the AEGP can pass a function to be called by After Effects if the user cancels the current render, as well as a refcon (constant reference to opaque data) for use during that function. |
| | `<pre lang="cpp">`AEGP_RenderAndCheckoutFrame(``AEGP_RenderOptionsH  optionsH,``  AEGP_RenderSuiteCheckForCancel  cancel_functionP0,``AEGP_CancelRefcon  cancel_function_refconP0,``  AEGP_FrameReceiptH  \*receiptPH);`</pre>` |
| `AEGP_RenderAndCheckoutLayerFrame` | New in CC 2014. This allows frame checkout of a layer with effects applied at non-render time. |
| | This is useful for an operation that requires the frame, for example, when a button is clicked and it is acceptable to wait for a moment while it is rendering. |
| | Note: Since it is not asynchronous, it will not solve the general problem where custom UI needs to draw based on the frame. |
| | Retrieves an `AEGP_FrameReceiptH` (not the actual pixels) for the layer frame requested. Check in this receipt using `AEGP_CheckinFrame` to release memory. |
| | Create the `AEGP_LayerRenderOptionsH` using `AEGP_NewFromUpstreamOfEffect()`, in [AEGP_LayerRenderOptionsSuite1](#aegp_layerrenderoptionssuite1). |
| | You can actually use `AEGP_NewFromLayer()` to get other layer param's layers with their effects applied. However, be careful. If you do it in your effect A, and there's an effect B on the other layer that does the same thing during rendering, you'd create an infinite loop. If you're not doing it for render purposes then it could be okay. |
| | Optionally, the AEGP can pass a function to be called by After Effects if the user cancels the current render, as well as a refcon (constant reference to opaque data) for use during that function. |
| | `<pre lang="cpp">`AEGP_RenderAndCheckoutLayerFrame(``AEGP_LayerRenderOptionsH  optionsH,``  A_Boolean  render_plain_layer_frameB,``AEGP_RenderSuiteCheckForCancel  cancel_functionP0,``  AEGP_CancelRefcon  cancel_function_refconP0,``  AEGP_FrameReceiptH  \*receiptPH);`</pre>` |
| `AEGP_CheckinFrame` | Call this function as soon as your AEGP is done accessing the frame. |
| | After Effects makes caching decisions based on which frames are checked out, so don't hog them! |
| | `<pre lang="cpp">`AEGP_CheckinFrame(``  AEGP_FrameReceiptH  receiptH);`</pre>` |
| `AEGP_GetReceiptWorld` | Retrieves the pixels (`AEGP_WorldH`) associated with the referenced `AEGP_FrameReceiptH`. |
| | `<pre lang="cpp">`AEGP_GetReceiptWorld(``AEGP_FrameReceiptH  receiptH,``  AEGP_WorldH  \*worldPH);`</pre>` |
| `AEGP_GetRenderedRegion` | Retrieves an `A_LRect` containing the region of the `AEGP_FrameReceiptH's` `AEGP_WorldH` that has already been rendered. |
| | Remember that it's possible for only those portions of an image that have been changed to be rendered, so it's important to be able to check whether or not that includes the portion you need. |
| | `<pre lang="cpp">`AEGP_GetRenderedRegion(``AEGP_FrameReceiptH  receiptH,``  A_LRect  \*regionP);`</pre>` |
| `AEGP_IsRenderedFrameSufficient` | Given two sets of `AEGP_RenderOptionsH`, After Effects will return `TRUE` if the already-rendered pixels are still valid for the proposed `AEGP_RenderOptionsH`. |
| | `<pre lang="cpp">`AEGP_IsRenderedFrameSufficient(``AEGP_RenderOptionsH  rendered_optionsH,``  AEGP_RenderOptionsH  proposed_optionsH,``  A_Boolean  \*is_sufficientPB);`</pre>` |
| `AEGP_RenderNewItemSoundData` | Obtains an `AEGP_ItemH's` audio at the given time, of the given duration, in the given format. |
| | The plug-in must dispose of the returned `AEGP_SoundDataH` (which may be NULL if no audio is available). |
| | `<pre lang="cpp">`AEGP_RenderNewItemSoundData(``AEGP_ItemH  itemH,``  const A_Time  \*start_timePT,``const A_Time  \*durationPT,``  const AEGP_SoundDataFormat  \*formatP,``  AEGP_SoundDataH  \*new_dataPH);`</pre>` |
| | NOTE: This function, if called as part of `AEGP_ItemSuite2`, provides a render interruptible using mouse clicks, unlike the version published here in `AEGP_RenderSuite`. |
| `AEGP_GetCurrentTimestamp` | Retrieves the current `AEGP_TimeStamp` of the project. |
| | The `AEGP_TimeStamp` is updated whenever an item is touched in a way that affects rendering. |
| | `<pre lang="cpp">`AEGP_GetCurrentTimestamp(``  AEGP_TimeStamp  \*time_stampP);`</pre>` |
| `AEGP_HasItemChangedSinceTimestamp` | Returns whether the video of an AEGP_ItemH has changed since the given `AEGP_TimeStamp`. |
| | Note: this does not track changes in audio. |
| | `<pre lang="cpp">`AEGP_HasItemChangedSinceTimestamp(``AEGP_ItemH  itemH,``  const A_Time  \*start_timeP,``const A_Time  \*durationP,``  const AEGP_TimeStamp  \*time_stampP,``  A_Boolean  \*changedPB);`</pre>` |
| `AEGP_IsItemWorthwhileToRender` | Returns whether this frame would be worth rendering externally and checking in to the cache. |
| | A speculative renderer should check this twice: before sending the frame out to render and when it is complete, before calling `AEGP_NewPlatformWorld()` and checking in. |
| | This function is to be used with `AEGP_HasItemChangedSinceTimestamp()`, not alone. |
| | `<pre lang="cpp">`AEGP_IsItemWorthwhileToRender(``AEGP_RenderOptionsH  roH,``  const AEGP_TimeStamp  \*time_stampP,``  A_Boolean  \*worthwhilePB);`</pre>` |
| `AEGP_CheckinRenderedFrame` | Provide a rendered frame (`AEGP_PlatformWorldH`) to After Effects, which adopts it. |
| | `ticksL` is the approximate time required to render the frame. |
| | `<pre lang="cpp">`AEGP_CheckinRenderedFrame(``AEGP_RenderOptionsH  roH,``  const AEGP_TimeStamp*  time_stampP,``A_u_long  ticksL,``  AEGP_PlatformWorldH  imageH);`</pre>` |
| `AEGP_GetReceiptGuid` | New in CS6. Retrieve a GUID for a rendered frame. The memory handle passed back must be disposed. |
| | `<pre lang="cpp">`AEGP_GetReceiptGuid(``AEGP_FrameReceiptH  receiptH,``  AEGP_MemHandle  \*guidMH)`</pre>` |

---

## The AEGP_World As We Know It

`AEGP_Worlds` are the common format used throughout the AEGP APIs to describe frames of pixels.

### AEGP_WorldSuite3

| Function | Purpose |
| --- | --- |
| `AEGP_New` | Returns an allocated, initialized `AEGP_WorldH`. |
| | `<pre lang="cpp">`AEGP_New(``AEGP_PluginID  plugin_id,``  AEGP_WorldType  type,``A_long  widthL,``  A_long  heightL,``  AEGP_WorldH  \*worldPH);`</pre>` |
| `AEGP_Dispose` | Disposes of an `AEGP_WorldH`. Use this on every world you allocate. |
| | `<pre lang="cpp">`AEGP_Dispose(``  AEGP_WorldH  worldH);`</pre>` |
| `AEGP_GetType` | Returns the type of a given `AEGP_WorldH`. |
| | `<pre lang="cpp">`AEGP_GetType(``AEGP_WorldH worldH,``  AEGP_WorldType \*typeP);`</pre>` |
| | AEGP_WorldType will be one of the following: |
| | -`AEGP_WorldType_8` |
| | -`AEGP_WorldType_16` |
| | -`AEGP_WorldType_32` |
| `AEGP_GetSize` | Returns the width and height of the given `AEGP_WorldH`. |
| | `<pre lang="cpp">`AEGP_GetSize(``AEGP_WorldH  worldH,``  A_long  \*widthPL,``  A_long  \*heightPL);`</pre>` |
| `AEGP_GetRowBytes` | Returns the rowbytes for the given `AEGP_WorldH`. |
| | `<pre lang="cpp">`AEGP_GetRowBytes(``AEGP_WorldH  worldH,``  A_u_long  \*row_bytesPL);`</pre>` |
| `AEGP_GetBaseAddr8` | Returns the base address of the `AEGP_WorldH` for use in pixel iteration functions. |
| | Will return an error if used on a non-8bpc world. |
| | `<pre lang="cpp">`AEGP_GetBaseAddr8(``AEGP_WorldH  worldH,``  PF_Pixel8  \*base_addrP);`</pre>` |
| `AEGP_GetBaseAddr16` | Returns the base address of the `AEGP_WorldH` for use in pixel iteration functions. |
| | Will return an error if used on a non-16bpc world. |
| | `<pre lang="cpp">`AEGP_GetBaseAddr16(``AEGP_WorldH  worldH,``  PF_Pixel16  \*base_addrP);`</pre>` |
| `AEGP_GetBaseAddr32` | Returns the base address of the `AEGP_WorldH` for use in pixel iteration functions. |
| | Will return an error if used on a non-32bpc world. |
| | `<pre lang="cpp">`AEGP_GetBaseAddr32(``AEGP_WorldH  worldH,``  PF_PixelFloat  \*base_addrP);`</pre>` |
| `AEGP_FillOutPFEffectWorld` | Populates and returns a PF_EffectWorld representing the given `AEGP_WorldH`, for use with numerous pixel processing callbacks. |
| | NOTE: This does not give your plug-in ownership of the world referenced; destroy the source `AEGP_WorldH` only if you allocated it. It just fills out the provided `PF_EffectWorld` to point to the same pixel buffer. |
| | `<pre lang="cpp">`AEGP_FillOutPFEffectWorld(``AEGP_WorldH  worldH,``  PF_EffectWorld  \*pf_worldP);`</pre>` |
| `AEGP_FastBlur` | Performs a fast blur on a given `AEGP_WorldH`. |
| | `<pre lang="cpp">`AEGP_FastBlur(``A_FpLong  radiusF,``  PF_ModeFlags  mode,``PF_Quality  quality,``  AEGP_WorldH  worldH);`</pre>` |
| `AEGP_NewPlatformWorld` | Creates a new `AEGP_PlatformWorldH` (a pixel world native to the execution platform). |
| | `<pre lang="cpp">`AEGP_NewPlatformWorld(``AEGP_PluginID  plugin_id,``  AEGP_WorldType  type,``A_long  widthL,``  A_long  heightL,``  AEGP_PlatformWorldH  \*worldPH);`</pre>` |
| `AEGP_DisposePlatformWorld` | Disposes of an `AEGP_PlatformWorldH`. |
| | `<pre lang="cpp">`AEGP_DisposePlatformWorld(``  AEGP_PlatformWorldH  worldH);`</pre>` |
| `AEGP_NewReferenceFromPlatformWorld` | Retrieves an AEGP_WorldH referring to the given `AEGP_PlatformWorldH`. |
| | NOTE: This doesn't allocate a new world, it simply provides a reference to an existing one. |
| | `<pre lang="cpp">`AEGP_NewReferenceFromPlatformWorld(``AEGP_PluginID  plugin_id,``  AEGP_PlatformWorldH  plat_worldH,``  AEGP_WorldH  \*worldPH);`</pre>` |

---

## 轨道遮罩和变换函数

使用 `AEGP_CompositeSuite` 来复制像素世界、操作轨道遮罩并应用传递函数。

### AEGP_CompositeSuite2

| Function | Purpose |
| --- | --- |
| `AEGP_ClearAlphaExceptRect` | For the given `PF_EffectWorld`, sets the alpha to fully transparent except for the specified rectangle. |
| | `<pre lang="cpp">`AEGP_ClearAlphaExceptRect(``A_Rect  \*clipped_dst_rectPR,``  PF_EffectWorld  \*dstP);`</pre>` |
| `AEGP_PrepTrackMatte` | Mattes the pixels in a `PF_EffectWorld` with the `PF_Pixel` described in src_masks, putting the output into an array of pixels dst_mask. |
| | NOTE: Unlike most of the other pixel mangling functions provided by After Effects, this one doesn't take `PF_EffectWorld` arguments; rather, you can simply pass the data pointer from within the `PF_EffectWorld`. This can be confusing, but as a bonus, the function pads output appropriately so that `num_pix` pixels are always output. |
| | `<pre lang="cpp">`AEGP_PrepTrackMatte(``A_long  num_pix,``  A_Boolean  deepB,``const PF_Pixel  \*src_mask,``  PF_MaskFlags  mask_flags,``  PF_Pixel  \*dst_mask);`</pre>` |
| `AEGP_TransferRect` | Blends two `PF_EffectWorlds` using a transfer mode, with an optional mask. Pass `NULL` for the `blend_tablesP0` parameter to perform blending in the current working color space. |
| | `<pre lang="cpp">`AEGP_TransferRect(``PF_Quality  quality,``  PF_ModeFlags  m_flags,``PF_Field  field,``  const A_Rect  \*src_rec,``const PF_EffectWorld  \*src_world,``  const PF_CompositeMode  \*comp_mode,``PF_EffectBlendingTables  blend_tablesP0,``  const PF_MaskWorld  \*mask_world0,``A_long  dest_x,``  A_long  dest_y,``  PF_EffectWorld  \*dst_world);`</pre>` |
| `AEGP_CopyBits_LQ` | Copies a rectangle of pixels (pass a `NULL` rectangle to get all pixels) from one `PF_EffectWorld` to another, at low quality. |
| | `<pre lang="cpp">`AEGP_CopyBits_LQ(``PF_EffectWorld  \*src_worldP,``  A_Rect  \*src_r,``A_Rect  \*dst_r,``  PF_EffectWorld  \*dst_worldP);`</pre>` |
| `AEGP_CopyBits_HQ_Straight` | Copies a rectangle of pixels (pass a `NULL` rectangle to get all pixels) from one `PF_EffectWorld` to another, at high quality, with a straight alpha channel. |
| | `<pre lang="cpp">`AEGP_CopyBits_HQ_Straight(``PF_EffectWorld  \*src,``  A_Rect  \*src_r,``A_Rect  \*dst_r,``  PF_EffectWorld  \*dst);`</pre>` |
| `AEGP_CopyBits_HQ_Premul` | Copies a rectangle of pixels (pass a `NULL` rectangle to get all pixels) from one `PF_EffectWorld` to another, at high quality, premultiplying the alpha channel. |
| | `<pre lang="cpp">`AEGP_CopyBits_HQ_Premul(``PF_EffectWorld  \*src,``  A_Rect  \*src_r,``A_Rect  \*dst_r,``  PF_EffectWorld  \*dst);`</pre>` |

---

## 处理音频

`AEGP_SoundDataSuite` 允许 AEGPs 获取并操作与合成和素材项相关的音频。

可以使用 `AEGP_RenderNewItemSoundData()` 将仅包含音频的项添加到渲染队列中。

### AEGP_SoundDateSuite1

| Function | Purpose |
| --- | --- |
| `AEGP_NewSoundData` | Creates a new `AEGP_SoundDataH`, of which the plug-in must dispose. |
| | `<pre lang="cpp">`AEGP_NewSoundData(``const AEGP_SoundDataFormat  \*formatP,``  AEGP_SoundDataH  \*new_dataPH);`</pre>` |
| `AEGP_DisposeSoundData` | Frees an `AEGP_SoundDataH`. |
| | `<pre lang="cpp">`AEGP_DisposeSoundData(``  AEGP_SoundDataH  sound_dataH);`</pre>` |
| `AEGP_GetSoundDataFormat` | Obtains information about the format of a given `AEGP_SoundDataH`. |
| | `<pre lang="cpp">`AEGP_GetSoundDataFormat(``AEGP_SoundDataH  soundH,``  AEGP_SoundDataFormat  \*formatP);`</pre>` |
| `AEGP_LockSoundDataSamples` | Locks the `AEGP_SoundDataH` in memory. |
| | `<pre lang="cpp">`AEGP_LockSoundDataSamples(``AEGP_SoundDataH  soundH,``  void  \*samples);`</pre>` |
| `AEGP_UnlockSoundDataSamples` | Unlocks an `AEGP_SoundDataH`. |
| | `<pre lang="cpp">`AEGP_UnlockSoundDataSamples(``  AEGP_SoundDataH  soundH);`</pre>` |
| `AEGP_GetNumSamples` | Obtains the number of samples in the given `AEGP_SoundDataH`. |
| | `<pre lang="cpp">`AEGP_GetNumSamples(``AEGP_SoundDataH  soundH,``  A_long  \*numsamplesPL);`</pre>` |

---

## 音频设置

音频渲染设置使用 `AEGP_SoundDataFormat` 来表示。

```cpp
struct AEGP_SoundDataFormat {
 A_FpLong sample_rateF;
 AEGP_SoundEncoding encoding;
 A_long bytes_per_sampleL;
 A_long num_channelsL; // 1 for mono, 2 for stereo
} AEGP_SoundDataFormat;
```

`bytes_per_sampleL` is always either `1`, `2`, or `4`, and is ignored if float encoding is specified.

`AEGP_SoundEncoding` is one of the following:

- `AEGP_SoundEncoding_UNSIGNED_PCM`
- `AEGP_SoundEncoding_SIGNED_PCM`
- `AEGP_SoundEncoding_FLOAT`

---

## 渲染队列套件

此套件允许AEGP（After Effects插件）将项目添加到渲染队列（使用默认选项），并控制渲染队列的基本状态。

### AEGP_RenderQueueSuite1

| Function | Purpose |
| --- | --- |
| `AEGP_AddCompToRenderQueue` | Adds a composition to the render queue, using default options. |
| | `<pre lang="cpp">`AEGP_AddCompToRenderQueue(``AEGP_CompH  compH,``  const A_char*  pathZ);`</pre>` |
| `AEGP_SetRenderQueueState` | Sets the render queue to one of three valid states. It is not possible to go from stopped to paused. |
| | `<pre lang="cpp">`AEGP_SetRenderQueueState(``  AEGP_RenderQueueState  state);`</pre>` |
| | -`AEGP_RenderQueueState_STOPPED` |
| | -`AEGP_RenderQueueState_PAUSED` |
| | -`AEGP_RenderQueueState_RENDERING` |
| `AEGP_GetRenderQueueState` | Obtains the current render queue state. |
| | `<pre lang="cpp">`AEGP_GetRenderQueueState(``  AEGP_RenderQueueState  \*stateP);`</pre>` |

---

## Render Queue Item Suite

Manipulate all aspects of render queue items using this suite.

### AEGP_RQItemSuite4

| Function | Purpose |
| --- | --- |
| `AEGP_GetNumRQItems` | Returns the number of items currently in the render queue. |
| | `<pre lang="cpp">`AEGP_GetNumRQItems(``  A_long  \*num_itemsPL);`</pre>` |
| `AEGP_GetRQItemByIndex` | Returns an `AEGP_RQItemRefH` referencing the index'd item. |
| | `<pre lang="cpp">`AEGP_GetRQItemByIndex(``A_long  rq_item_index,``  AEGP_RQItemRefH  \*rq_item_refPH);`</pre>` |
| `AEGP_GetNextRQItem` | Returns the next `AEGP_RQItemRefH`, for iteration purposes. |
| | To get the first `AEGP_RQItemRefH`, pass `RQ_ITEM_INDEX_NONE` for the `current_rq_itemH`. |
| | `<pre lang="cpp">`AEGP_GetNextRQItem(``AEGP_RQItemRefH  current_rq_itemH,``  AEGP_RQItemRefH  \*next_rq_itemPH);`</pre>` |
| `AEGP_GetNumOutputModulesForRQItem` | Returns the number of output modules applied to the given `AEGP_RQItemRefH`. |
| | `<pre lang="cpp">`AEGP_GetNumOutputModulesForRQItem(``AEGP_RQItemRefH  rq_itemH,``  A_long  \*num_outmodsPL);`</pre>` |
| `AEGP_GetRenderState` | Returns `TRUE` if the `AEGP_RQItemRefH` is set to render (once the user clicks the Render button). |
| | `<pre lang="cpp">`AEGP_GetRenderState(``AEGP_RQItemRefH  rq_itemH,``  A_Boolean  \*will_renderPB);`</pre>` |
| `AEGP_SetRenderState` | Controls whether or not the `AEGP_RQItemRefH` will render when the user next clicks the Render button. |
| | Returns an error if called during rendering. |
| | This function will return: |
| | -`Err_PARAMETER` if you try to call while `AEGP_RenderQueueState` isn't `AEGP_RenderQueueState_STOPPED` |
| | -`Err_RANGE` if you pass a status that is illegal in any case, and |
| | -`Err_PARAMETER` if you try to pass a status that doesn't make sense (like trying to queue something for which there's no output path) |
| | `<pre lang="cpp">`AEGP_SetRenderState(``AEGP_RQItemRefH  rq_itemH,``  A_Boolean  renderB);`</pre>` |
| `AEGP_GetStartedTime` | Returns the time (in seconds, since 1904) that rendering began. |
| | `<pre lang="cpp">`AEGP_GetStartedTime(``AEGP_RQItemRefH  rq_itemH,``  A_Time  \*started_timePT);`</pre>` |
| `AEGP_GetElapsedTime` | Returns the time elapsed since rendering began. |
| | `<pre lang="cpp">`AEGP_GetElapsedTime(``AEGP_RQItemRefH  rq_itemH,``  A_Time  \*render_timePT);`</pre>` |
| `AEGP_GetLogType` | Returns the log type for the referenced `AEGP_RQItemRefH`. |
| | `<pre lang="cpp">`AEGP_GetLogType(``AEGP_RQItemRefH  rq_itemH,``  AEGP_LogType  \*logtypeP);`</pre>` |
| | `AEGP_LogtType` will have one of the following values: |
| | -`AEGP_LogType_NONE` |
| | -`AEGP_LogType_ERRORS_ONLY` |
| | -`AEGP_LogType_PLUS_SETTINGS` |
| | -`AEGP_LogType_PER_FRAME_INFO` |
| `AEGP_SetLogType` | Specifies the log type to be used with the referenced `AEGP_RQItemRefH`. |
| | `<pre lang="cpp">`AEGP_SetLogType(``AEGP_RQItemRefH  rq_itemH,``  AEGP_LogType  logtype);`</pre>` |
| `AEGP_RemoveOutputModule` | Removes the specified output module from the referenced `AEGP_RQItemRefH`. |
| | `<pre lang="cpp">`AEGP_RemoveOutputModule(``AEGP_RQItemRefH  rq_itemH,``  AEGP_OutputModuleRefH  outmodH);`</pre>` |
| `AEGP_GetComment` | Updated to support Unicode in `RQItemSuite4`, available in 14.1. |
| | Retrieves the comment associated with the referenced `AEGP_RQItemRefH`. |
| | `<pre lang="cpp">`AEGP_GetComment(``AEGP_RQItemRefH  rq_itemH,``  AEGP_MemHandle  \*unicodeH);`</pre>` |
| `AEGP_SetComment` | Updated to support Unicode in `RQItemSuite4`, available in 14.1. |
| | Specifies the comment associated with the referenced `AEGP_RQItemRefH`. |
| | `<pre lang="cpp">`AEGP_SetComment(``AEGP_RQItemRefH  rq_itemH,``  const A_UTF16Char  \*commentZ);`</pre>` |
| `AEGP_GetCompFromRQItem` | Retrieves the `AEGP_CompH` associated with the `AEGP_RQItemRefH`. |
| | `<pre lang="cpp">`AEGP_GetCompFromRQItem(``AEGP_RQItemRefH  rq_itemH,``  AEGP_CompH  \*compPH);`</pre>` |
| `AEGP_DeleteRQItem` | Deletes the render queue item. Undoable. |
| | `<pre lang="cpp">`AEGP_DeleteRQItem(``  AEGP_RQItemRefH  rq_itemH);`</pre>` |

---

## 渲染队列监控套件

CS6新增功能。该套件提供了渲染队列管理器所需的所有信息，以便在任何渲染阶段了解当前情况。

### AEGP_RenderQueueMonitorSuite1

| Function | Purpose | | | | |
| --- | --- | --- | --- | --- | --- |
| `AEGP_RegisterListener` | Register a set of plug-in-defined functions to be called by the render queue. | | | | |
| | Use the refcon to pass in data that you want to use later on when your plug-in-defined functions in `AEGP_RQM_FunctionBlock1` are called later. It may be set it to `NULL` if you don't need it. | | | | |
| | `<pre lang="cpp">`AEGP_RegisterListener(``AEGP_PluginID  aegp_plugin_id,``  AEGP_RQM_Refcon  aegp_refconP,``  const AEGP_RQM_FunctionBlock1  \*fcn_blockP);`</pre>` | | | | |
| | The `AEGP_RQM_FunctionBlock1` is defined as follows: | | | | |
| | `<pre lang="cpp">`struct _AEGP_RQM_FunctionBlock1 {``A_Err (*AEGP_RQM_RenderJobStarted)(``  AEGP_RQM_BasicData  \*basic_dataP,``AEGP_RQM_SessionId  jobid);``A_Err (*AEGP_RQM_RenderJobEnded)(``AEGP_RQM_BasicData  \*basic_dataP,``  AEGP_RQM_SessionId  jobid); | ``A_Err (*AEGP_RQM_RenderJobItemStarted)(``  AEGP_RQM_BasicData  \*basic_dataP,``AEGP_RQM_SessionId  jobid,``  AEGP_RQM_ItemId  itemid); | ``A_Err (*AEGP_RQM_RenderJobItemUpdated)(``  AEGP_RQM_BasicData  \*basic_dataP,``AEGP_RQM_SessionId  jobid,``  AEGP_RQM_ItemId  itemid,``  AEGP_RQM_FrameId  frameid); | ``A_Err (*AEGP_RQM_RenderJobItemEnded)(``  AEGP_RQM_BasicData  \*basic_dataP,``AEGP_RQM_SessionId  jobid,``  AEGP_RQM_ItemId  itemid,``  AEGP_RQM_FinishedStatus  fstatus); | ``A_Err (*AEGP_RQM_RenderJobItemReportLog)(``  AEGP_RQM_BasicData  \*basic_dataP,``AEGP_RQM_SessionId  jobid,``  AEGP_RQM_ItemId  itemid,``A_Boolean  isError,``  AEGP_MemHandle  logbuf);``} AEGP_RQM_FunctionBlock1;`</pre>` |
| | `AEGP_RQM_FinishedStatus` will be one of the following: | | | | |
| | -`AEGP_RQM_FinishedStatus_UNKNOWN` | | | | |
| | -`AEGP_RQM_FinishedStatus_SUCCEEDED` | | | | |
| | -`AEGP_RQM_FinishedStatus_ABORTED` | | | | |
| | -`AEGP_RQM_FinishedStatus_ERRED` | | | | |
| | The `AEGP_RQM_BasicData` is defined below. | | | | |
| | `<pre lang="cpp">`struct _AEGP_RQM_BasicData {``const struct SPBasicSuite \*pica_basicP;``  A_long  aegp_plug_id;``AEGP_RQM_Refcon  aegp_refconPV;``} AEGP_RQM_BasicData;`</pre>` | | | | |
| `AEGP_DeregisterListener` | Deregister from the render queue. | | | | |
| | `<pre lang="cpp">`AEGP_DeregisterListener(``AEGP_PluginID  aegp_plugin_id,``  AEGP_RQM_Refcon  aegp_refconP);`</pre>` | | | | |
| `AEGP_GetProjectName` | Obtain the current project name. The project name is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`. | | | | |
| | `<pre lang="cpp">`AEGP_GetProjectName(``AEGP_RQM_SessionId  sessid,``  AEGP_MemHandle  \*utf_project_namePH0);`</pre>` | | | | |
| `AEGP_GetAppVersion` | Obtain the app version. The app version is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`. | | | | |
| | `<pre lang="cpp">`AEGP_GetAppVersion(``AEGP_RQM_SessionId  sessid,``  AEGP_MemHandle  \*utf_app_versionPH0);`</pre>` | | | | |
| `AEGP_GetNumJobItems` | Obtain the number of job items. | | | | |
| | `<pre lang="cpp">`AEGP_GetNumJobItems(``AEGP_RQM_SessionId  sessid,``  A_long  \*num_jobitemsPL);`</pre>` | | | | |
| `AEGP_GetJobItemID` | Get the job with the index specified. | | | | |
| | `<pre lang="cpp">`AEGP_GetJobItemID(``AEGP_RQM_SessionId  sessid,``  A_long  jobItemIndex,``  AEGP_RQM_ItemId  \*jobItemID);`</pre>` | | | | |
| `AEGP_GetNumJobItemRenderSettings` | Get the number of render settings for the job with the index specified. | | | | |
| | `<pre lang="cpp">`AEGP_GetNumJobItemRenderSettings(``AEGP_RQM_SessionId  sessid,``  AEGP_RQM_ItemId  itemid,``  A_long  \*num_settingsPL);`</pre>` | | | | |
| `AEGP_GetJobItemRenderSetting` | Get a specific render setting of a specific job. The setting name and value are handles to NULL-terminated A_UTF16Char strings, and must be disposed with `AEGP_FreeMemHandle`. | | | | |
| | `<pre lang="cpp">`AEGP_GetJobItemRenderSetting(``AEGP_RQM_SessionId  sessid,``  AEGP_RQM_ItemId  itemid,``A_long  settingIndex,``  AEGP_MemHandle  \*utf_setting_namePH0,``  AEGP_MemHandle  \*utf_setting_valuePH0);`</pre>` | | | | |
| `AEGP_GetNumJobItemOutputModules` | Get the number of output modules for the job with the index specified. | | | | |
| | `<pre lang="cpp">`AEGP_GetNumJobItemOutputModules(``AEGP_RQM_SessionId  sessid,``  AEGP_RQM_ItemId  itemid,``  A_long  \*num_outputmodulesPL);`</pre>` | | | | |
| `AEGP_GetNumJobItemOutputModuleSettings` | Get the number of settings for the output module with the index specified. | | | | |
| | `<pre lang="cpp">`AEGP_GetNumJobItemOutputModuleSettings(``AEGP_RQM_SessionId  sessid,``  AEGP_RQM_ItemId  itemid,``A_long  outputModuleIndex,``  A_long  \*num_settingsPL);`</pre>` | | | | |
| `AEGP_GetJobItemOutputModuleSetting` | Get a specific setting of a job item output module. The setting name and value are handles to NULL-terminated A_UTF16Char strings, and must be disposed with `AEGP_FreeMemHandle`. | | | | |
| | `<pre lang="cpp">`AEGP_GetJobItemOutputModuleSetting(``AEGP_RQM_SessionId  sessid,``  AEGP_RQM_ItemId  itemid,``A_long  outputModuleIndex,``  A_long  settingIndex,``AEGP_MemHandle  \*utf_setting_namePH0,``  AEGP_MemHandle  \*utf_setting_valuePH0);`</pre>` | | | | |
| `AEGP_GetNumJobItemOutputModuleWarnings` | Get the number of output module warnings for a job item. | | | | |
| | `<pre lang="cpp">`AEGP_GetNumJobItemOutputModuleWarnings(``AEGP_RQM_SessionId  sessid,``  AEGP_RQM_ItemId  itemid,``A_long  outputModuleIndex,``  A_long  \*num_warningsPL);`</pre>` | | | | |
| `AEGP_GetJobItemOutputModuleWarning` | Get a specific warning of a specific output module for a specific job item. The warning value is a handle to NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`. | | | | |
| | `<pre lang="cpp">`AEGP_GetJobItemOutputModuleWarning(``AEGP_RQM_SessionId  sessid,``  AEGP_RQM_ItemId  itemid,``A_long  outputModuleIndex,``  A_long  warningIndex,``  AEGP_MemHandle  \*utf_warning_valuePH0);`</pre>` | | | | |
| `AEGP_GetNumJobItemFrameProperties` | Get the number of properties for a job item frame. | | | | |
| | `<pre lang="cpp">`AEGP_GetNumJobItemFrameProperties(``AEGP_RQM_SessionId  sessid,``  AEGP_RQM_ItemId  itemid,``AEGP_RQM_FrameId  frameid,``  A_long  \*num_propertiesPL);`</pre>` | | | | |
| `AEGP_GetJobItemFrameProperty` | Get a specific property on a job item frame. The property name and values are handle to NULL-terminated A_UTF16Char strings, and must be disposed with `AEGP_FreeMemHandle`. | | | | |
| | `<pre lang="cpp">`AEGP_GetJobItemFrameProperty(``AEGP_RQM_SessionId  sessid,``  AEGP_RQM_ItemId  itemid,``AEGP_RQM_FrameId  frameid,``  A_long  propertyIndex,``AEGP_MemHandle  \*utf_property_namePH0,``  AEGP_MemHandle  \*utf_property_valuePH0);`</pre>` | | | | |
| `AEGP_GetNumJobItemOutputModuleProperties` | Get the number of properties for a job item output module. | | | | |
| | `<pre lang="cpp">`AEGP_GetNumJobItemOutputModuleProperties(``AEGP_RQM_SessionId  sessid,``  AEGP_RQM_ItemId  itemid,``A_long  outputModuleIndex,``  A_long  \*num_propertiesPL);`</pre>` | | | | |
| `AEGP_GetJobItemOutputModuleProperty` | Get a specific property off a job item output module. The property name and values are handle to NULL-terminated A_UTF16Char strings, and must be disposed with `AEGP_FreeMemHandle`. | | | | |
| | `<pre lang="cpp">`AEGP_GetJobItemOutputModuleProperty(``AEGP_RQM_SessionId  sessid,``  AEGP_RQM_ItemId  itemid,``A_long  outputModuleIndex,``  A_long  propertyIndex,``AEGP_MemHandle  \*utf_property_namePH0,``  AEGP_MemHandle  \*utf_property_valuePH0);`</pre>` | | | | |
| `AEGP_GetJobItemFrameThumbnail` | Get a buffer with a JPEG-encoded thumbnail of the job item frame. | | | | |
| | Pass in the maximum width and height, and the actual dimensions will be passed back. | | | | |
| | `<pre lang="cpp">`AEGP_GetJobItemFrameThumbnail(``AEGP_RQM_SessionId  sessid,``  AEGP_RQM_ItemId  itemid,``AEGP_RQM_FrameId  frameid,``  A_long  \*widthPL,``A_long  \*heightPL,``  AEGP_MemHandle  \*thumbnailPH0);`</pre>` | | | | |

---

## 输出模块套件

渲染队列中的每个项目都至少指定了一个输出模块。

使用此套件可以查询和控制附加到给定渲染项目的所有输出模块的各个方面。

您还可以添加和删除输出模块。

小知识：对于为给定渲染项目渲染的每一帧，都会遍历输出模块列表。因此，对于第0帧，会依次调用输出模块0、1、2。

### AEGP_OutputModuleSuite4

| Function | Purpose |
| --- | --- |
| `AEGP_GetOutputModuleByIndex` | Retrieves the indexed output module. |
| | NOTE:`AEGP_OutputModuleRefH` is an opaque data type, and can't be manipulated directly; you must use our accessor functions to modify it. |
| | `<pre lang="cpp">`AEGP_GetOutputModuleByIndex(``AEGP_RQItemRefH  rq_itemH,``  A_long  outmod_indexL,``  AEGP_OutputModuleRefH  \*outmodPH);`</pre>` |
| `AEGP_GetEmbedOptions` | Retrieves the embedding setting specified for the referenced `AEGP_OutputModuleRefH`. |
| | `<pre lang="cpp">`AEGP_GetEmbedOptions(``AEGP_RQItemRefH  rq_itemH,``  AEGP_OutputModuleRefH  outmodH,``  AEGP_EmbeddingType  \*embed_optionsP);`</pre>` |
| | `AEGP_EmbeddingType` will be one of the following: |
| | -`AEGP_Embedding_NOTHING` |
| | -`AEGP_Embedding_LINK` |
| | -`AEGP_Embedding_LINK_AND_COPY` |
| `AEGP_SetEmbedOptions` | Specifies the embedding setting for the referenced `AEGP_OutputModuleRefH`. |
| | `<pre lang="cpp">`AEGP_SetEmbedOptions(``AEGP_RQItemRefH  rq_itemH,``  AEGP_OutputModuleRefH  outmodH,``  AEGP_EmbeddingType  embed_options);`</pre>` |
| `AEGP_GetPostRenderAction` | Retrieves the post-render action setting for the referenced `AEGP_OutputModuleRefH`. |
| | `<pre lang="cpp">`AEGP_GetPostRenderAction(``AEGP_RQItemRefH  rq_itemH,``  AEGP_OutputModuleRefH  outmodH,``  AEGP_PostRenderAction  \*actionP);`</pre>` |
| | `AEGP_PostRenderAction` will be one of the following: |
| | -`AEGP_PostRenderOptions_IMPORT` |
| | -`AEGP_PostRenderOptions_IMPORT_AND_REPLACE_USAGE` |
| | -`AEGP_PostRenderOptions_SET_PROXY` |
| `AEGP_SetPostRenderAction` | Specifies the post-render action setting for the referenced `AEGP_OutputModuleRefH`. |
| | `<pre lang="cpp">`AEGP_SetPostRenderAction(``AEGP_RQItemRefH  rq_itemH,``  AEGP_OutputModuleRefH  outmodH,``  AEGP_PostRenderAction  action);`</pre>` |
| `AEGP_GetEnabledOutputs` | Retrieves which output types are enabled for the referenced `AEGP_OutputModuleRefH`. |
| | `<pre lang="cpp">`AEGP_GetEnabledOutputs(``AEGP_RQItemRefH  rq_itemH,``  AEGP_OutputModuleRefH  outmodH,``  AEGP_OutputTypes  \*typesP);`</pre>` |
| | `AEGP_OutputTypes` will contain one or both of the following values: |
| | -`AEGP_OutputType_VIDEO` |
| | -`AEGP_OutputType_AUDIO` |
| | NOTE: These are flags, not an enumeration. |
| `AEGP_SetEnabledOutputs` | Specifies which output types are enabled for the referenced `AEGP_OutputModuleRefH`. |
| | `<pre lang="cpp">`AEGP_SetEnabledOutputs(``AEGP_RQItemRefH  rq_itemH,``  AEGP_OutputModuleRefH  outmodH,``  AEGP_OutputTypes  enabled_types);`</pre>` |
| `AEGP_GetOutputChannels` | Retrieves which video channels are enabled for output in the referenced AEGP_OutputModuleRefH. |
| | `<pre lang="cpp">`AEGP_GetOutputChannels(``AEGP_RQItemRefH  rq_itemH,``  AEGP_OutputModuleRefH  outmodH,``  AEGP_VideoChannels  \*outchannelsP);`</pre>` |
| | `AEGP_VideoChannels` will be one of the following: |
| | -`AEGP_VideoChannels_RGB` |
| | -`AEGP_VideoChannels_RGBA` |
| | -`AEGP_VideoChannels_ALPHA` |
| `AEGP_SetOutputChannels` | Specifies which video channels are enabled for output in the referenced `AEGP_OutputModuleRefH`. |
| | `<pre lang="cpp">`AEGP_SetOutputChannels(``AEGP_RQItemRefH  rq_itemH,``  AEGP_OutputModuleRefH  outmodH,``  AEGP_VideoChannels  outchannels);`</pre>` |
| `AEGP_GetStretchInfo` | Retrieves the stretch information enabled for the referenced `AEGP_OutputModuleRefH`; whether or not stretching is enabled, whether or not the frame aspect ratio is locked to the composition's, and what quality setting is specified. |
| | `<pre lang="cpp">`AEGP_GetStretchInfo(``AEGP_RQItemRefH  rq_itemH,``  AEGP_OutputModuleRefH  outmodH,``A_Boolean  \*enabledPB,``  AEGP_StretchQuality  \*qualP,``  A_Boolean  \*lockedPB);`</pre>` |
| | `AEGP_StretchQuality` will be one of the following: |
| | -`AEGP_StretchQual_LOW` |
| | -`AEGP_StretchQual_HIGH` |
| `AEGP_SetStretchInfo` | Retrieves the stretch information enabled for the referenced `AEGP_OutputModuleRefH`. |
| | `<pre lang="cpp">`AEGP_SetStretchInfo(``AEGP_RQItemRefH  rq_itemH,``  AEGP_OutputModuleRefH  outmodH,``A_Boolean  is_enabledB,``  AEGP_StretchQuality  quality);`</pre>` |
| `AEGP_GetCropInfo` | Retrieves whether or not the cropping is enabled for the referenced `AEGP_OutputModuleRefH`, and the rectangle to be used. |
| | `<pre lang="cpp">`AEGP_GetCropInfo(``AEGP_RQItemRefH  rq_itemH,``  AEGP_OutputModuleRefH  outmodH,``A_Boolean  \*is_enabledBP,``  A_Rect  \*crop_rectP);`</pre>` |
| `AEGP_SetCropInfo` | Specifies whether cropping is enabled for the referenced `AEGP_OutputModuleRefH`, and the rectangle to be used. |
| | `<pre lang="cpp">`AEGP_SetCropInfo(``AEGP_RQItemRefH  rq_itemH,``  AEGP_OutputModuleRefH  outmodH,``A_Boolean  enableB,``  A_Rect  crop_rect);`</pre>` |
| `AEGP_GetSoundFormatInfo` | Retrieves whether or not audio output is enabled for the referenced `AEGP_OutputModuleRefH`, and the settings to be used. |
| | `<pre lang="cpp">`AEGP_GetSoundFormatInfo(``AEGP_RQItemRefH  rq_itemH,``  AEGP_OutputModuleRefH  outmodH,``AEGP_SoundDataFormat  \*formatP,``  A_Boolean  \*enabledPB);`</pre>` |
| `AEGP_SetSoundFormatInfo` | Specifies whether or not audio output is enabled for the referenced `AEGP_OutputModuleRefH`, and the settings to be used. |
| | `<pre lang="cpp">`AEGP_SetSoundFormatInfo(``AEGP_RQItemRefH  rq_itemH,``  AEGP_OutputModuleRefH  outmodH,``AEGP_SoundDataFormat  format_info,``  A_Boolean  enabledB);`</pre>` |
| `AEGP_GetOutputFilePath` | Retrieves the path to which `AEGP_OutputModuleRefH's` output file will be written. The path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`. |
| | `<pre lang="cpp">`AEGP_GetOutputFilePath(``AEGP_RQItemRefH  rq_itemH,``  AEGP_OutputModuleRefH  outmodH,``  AEGP_MemHandle  \*unicode_pathPH);`</pre>` |
| `AEGP_SetOutputFilePath` | Specifies the path to which `AEGP_OutputModuleRefH's` output file will be written. The file path is a NULL-terminated UTF-16 string with platform separators. |
| | `<pre lang="cpp">`AEGP_SetOutputFilePath(``AEGP_RQItemRefH  rq_itemH,``  AEGP_OutputModuleRefH  outmodH,``  const A_UTF16Char  \*pathZ);`</pre>` |
| `AEGP_AddDefaultOutputModule` | Adds the default output module to the specified `AEGP_RQItemRefH`, and returns the added output module's `AEGP_OutputModuleRefH` (you wouldn't add it if you didn't plan to mess around with it, would you?). |
| | `<pre lang="cpp">`AEGP_AddDefaultOutputModule(``AEGP_RQItemRefH  rq_itemH,``  AEGP_OutputModuleRefH  \*outmodPH);`</pre>` |
| `AEGP_GetExtraOutputModuleInfo` | Retrieves information about the output module. |
| | `format_uniPH` and `info_uniPH` provide the textual description of, and information about, the output module, formatted as the user would see it. |
| | `format_uniPH` and `info_uniPH` will contain NULL-terminated UTF16 strings, of which the caller must dispose. |
| | `<pre lang="cpp">`AEGP_GetExtraOutputModuleInfo(``AEGP_RQItemRefH  rq_itemH,``  AEGP_OutputModuleRefH  outmodH,``AEGP_MemHandle  \*format_uniPH,``  AEGP_MemHandle  \*info_uniPH,``A_Boolean  \*is_sequenceBP,``  A_Boolean  \*multi_frameBP);`</pre>` |

---

## 使用效果

这些函数为效果（以及AEGP）提供了一种方式，以获取应用效果的上下文信息。

:::note
任何时候你修改或依赖正常渲染管道之外的数据，都有可能遇到依赖问题。
:::

After Effects无法知道你依赖于这些外部信息；因此，如果这些信息在你不知情的情况下发生变化，你将不会收到通知。

### AEGP_PFInterfaceSuite1

| Function | Purpose |
| --- | --- |
| `AEGP_GetEffectLayer` | Obtain the layer handle of the layer to which the effect is applied. |
| | `<pre lang="cpp">`AEGP_GetEffectLayer(``PF_ProgPtr  effect_ref,``  AEGP_LayerH  \*layerPH);`</pre>` |
| `AEGP_GetNewEffectForEffect` | Obtain the `AEGP_EffectRefH` corresponding to the effect. |
| | `<pre lang="cpp">`AEGP_GetNewEffectForEffect(``AEGP_PluginID  aegp_plugin_id,``  PF_ProgPtr  effect_ref,``  AEGP_EffectRefH  \*effectPH);`</pre>` |
| `AEGP_ConvertEffectToCompTime` | Retreive the composition time corresponding to the effect's layer time. |
| | `<pre lang="cpp">`AEGP_ConvertEffectToCompTime(``PF_ProgPtr  effect_ref,``  long  what_timeL,``unsigned long  time_scaleLu,``  A_Time  \*comp_timePT);`</pre>` |
| `AEGP_GetEffectCamera` | Obtain the camera (if any) being used by After Effects to view the effect's layer. |
| | `<pre lang="cpp">`AEGP_GetEffectCamera(``PF_ProgPtr  effect_ref,``  const A_Time  \*comp_timePT,``  AEGP_LayerH  camera_layerPH);`</pre>` |
| `AEGP_GetEffectCameraMatrix` | Obtain the transform used to move between the layer's coordinate space and that of the containing composition. |
| | `<pre lang="cpp">`AEGP_GetEffectCameraMatrix(``PF_ProgPtr  effect_ref,``  const A_Time  \*comp_timePT,``A_Matrix4  \*camera_matrixP,``  A_FpLong  \*dst_to_planePF,``A_short  \*plane_widthPL,``  A_short  \*plane_heightPL);`</pre>` |
| | NOTE: In cases where the effect's input layer has square pixels, but is in a non-square pixel composition, you must correct for the pixel aspect ratio by premultiplying the matrix by `(1/parF, 1, 1)`. |

### AEGP_GetEffectCameraMatrix Notes

相机矩阵的模型视图是 `AEGP_GetEffectCameraMatrix()`所获得矩阵的逆。

还需注意，我们的矩阵是基于行的；而OpenGL的是基于列的。

---

## 多次执行此操作

利用多个处理器（如果可用）进行计算。

### AEGP_IterateSuite1

| Function | Purpose |
| --- | --- |
| `AEGP_GetNumThreads` | Ask After Effects how many threads are currently available. |
| | `<pre lang="cpp">`AEGP_GetNumThreads(``  A_long  \*num_threadsPL);`</pre>` |
| `AEGP_IterateGeneric` | Specify a function for After Effects to manage on multiple processors. |
| | Can be any function pointer specified by `fn_func`, taking the arguments listed below. |
| | See[Private Data](../implementation#private-data) for a description of how `refconPV` is used. |
| | `<pre lang="cpp">`AEGP_IterateGeneric(``A_long  iterationsL,``  void  \*refconPV,``A_Err  (*fn_func)``  (void  \*refconPV,``A_long  thread_indexL,``  A_long  i,``  A_long  iterationsL));`</pre>` |

---

## 文件导入管理器套件

FIMSuite允许由AEGPs处理的文件类型显示为After Effects导入对话框的一部分，并支持拖放消息传递。

这些功能并非供AEIOs使用！相反，它们用于导入那些最适合表示为After Effects合成的项目。

### AEGP_FIMSuite3

| Function | Purpose |
| --- | --- |
| `AEGP_RegisterImportFlavor` | Registers the name of the file type(s) supported by the plug-in. Upon return,`imp_refP` will be a valid opaque reference, or `AE_FIM_ImportFlavorRef_NONE`. |
| | `<pre lang="cpp">`AEGP_RegisterImportFlavor(``const char  \*nameZ,``  AE_FIM_ImportFlavorRef  \*imp_refP);`</pre>` |
| `AEGP_RegisterImportFlavorFileTypes` | Registers an array of file types and file extensions (the two arrays need not be of equal length) supported by the AEGP. |
| | `<pre lang="cpp">`AEGP_RegisterImportFlavorFileTypes(``AE_FIM_ImportFlavorRef  imp_ref,``  long  num_filekindsL,``const AEIO_FileKind  \*kindsAP,``  long  num_fileextsL,``  const AEIO_FileKind  \*extsAP);`</pre>` |
| `AEGP_RegisterImportFlavorImportCallbacks` | Register the AEGP functions which will respond to import of different filetypes. |
| | `<pre lang="cpp">`AEGP_RegisterImportFlavorImportCallbacks(``AE_FIM_ImportFlavorRef  ref,``  AE_FIM_ImportFlags  single_flag,``  const AE_FIM_ImportCallbacks  \*imp_cbsP);`</pre>` |
| `AEGP_SetImportedItem` | Designates an item as having been imported (possibly replacing an existing item), and sets associated import options. |
| | `<pre lang="cpp">`AEGP_SetImportedItem(``AE_FIM_ImportOptions  imp_options,``  AEGP_ItemH  imported_itemH);`</pre>` |
