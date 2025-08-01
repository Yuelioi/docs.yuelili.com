---
title: aegp-suites
---
# AEGP Suites

As mentioned earlier, AEGPs do everything through suites. The following suites are used by all types of AEGPs, and may be called from within any hook function (except for the RegisterSuite, which must be used from within the AEGP's entry point). Following is a description of each function in every suite, and, where appropriate details on using those functions.

| Suite | Description |
|---|---|
| [Memory Suite](#aegp_memorysuite1) | Manage memory resources. Use this suite! Whenever memory-related errors are encountered, After Effects can report errors for you. |
| [Command Suite](#aegp_commandsuite1) | Manage your AEGP's menu items. Used in conjunction with the Register Suite. |
| [Register Suite](#aegp_registersuites5) | Used in conjunction with the [Command Suite](#aegp_commandsuite1) to add functions to menu commands. |
| | AEIOs and Artisans must use this suite's functions to indicate to After Effects that they want to receive the appropriate message streams. |
| | You can replace some After Effects' commands using this suite. |
| [Project Suite](#aegp_projsuite6) | Reads and modifies project data. |
| [Item Suite](#aegp_itemsuite9) | Manages items within a project or composition. |
| | Folders, Compositions, Solids, and Footage are all items. |
| [Collection Suite](#aegp_collectionsuite2) | Query which items are currently selected, and create your own selection sets. |
| | It's often a good UI move to select all the items your AEGP has modified, just to give the user some idea what you've done. |
| [Composition Suite](#aegp_compositesuite2) | Manages (and creates) compositions in a project, and composition-specific items like solids. |
| [Footage Suite](#aegp_footagesuite5) | Manages footage. |
| [Layer Suite](#aegp_layersuite9) | Provides information about the layers within a composition, and the relationship(s) between the source and layer times. |
| | Solids, text, paint, cameras, lights, images, and image sequences can all become layers. |
| [Effect Suite](#aegp_effectsuite4) | Provides access to the effects applied to a layer. |
| | Use Stream suites to obtain effect keyframe information. |
| | Use `AEGP_EffectCallGeneric()` (in [AEGP_EffectSuite4](#aegp_effectsuite4)) to communicate with effects that you setup ahead of time to respond to your AEGP. |
| [Stream Suite](#stream-suite) | Used to access the values of a layer's keyframe properties. |
| [Dynamic Stream Suite](#aegp_dynamicstreamsuite4) | Used to access the characteristics of dynamic streams associated with a layer. |
| [Keyframe Suite](#aegp_keyframesuite3) | Used to access and manipulate all keyframe data. |
| [Marker Suite](#aegp_markersuite2) | Used to manipulate markers. Use `AEGP_GetNewCompMarkerStream()` (in [AEGP_CompSuite11](#aegp_compsuite11)) to get the composition marker stream. |
| [Mask Suite](#aegp_masksuite6) | Provides access to retrieve information about a layer's masks. |
| [Mask Outline Suite](#aegp_maskoutlinesuite3) | Used in conjunction with Stream Suite, this suite provides detailed information about the path rendered to make a layer's mask. |
| [Text Document Suite](#aegp_textdocumentsuite1) | Used to access the actual text on a text layer. |
| [Text Layer Suite](#aegp_textlayersuite1) | Used to access the paths that make up the outlines of a text layer. |
| [Utility Suite](#aegp_utilitysuite6) | Supplies error message handling, AEGP version checking and access to After Effects' undo stack. |
| [Persistent Data Suite](#aegp_persistentdatesuite4) | Query and manage all persistent data (i.e., the preferences file). |
| | AEGPs can also add their own data to the prefs. |
| [Color Settings Suite](#aegp_colorsettingssuite5) | Obtain information on After Effects' current color management settings. |
| [Render Suite](#aegp_rendersuite4) | Get rendered frames (and audio samples) from within an AEGP. |
| [World Suite](#aegp_worldsuite3) | Allocate, dispose of, and query AEGP_Worlds. |
| | Also provides a way to convert a `PF_EffectWorld` into an `AEGP_World`, for working with effect plug-ins. |
| [Composite Suite](#aegp_compositesuite2) | Exposes After Effects' compositing functionality, including transfer modes, track matting, and good old fashioned bit copying. |
| [Sound Data Suite](#aegp_sounddatesuite1) | Functions for managing and accessing sound data. |
| [Render Queue Suite](#aegp_renderqueuesuite1) | Add and remove items from the render queue. |
| [Render Queue Item Suite](#render-queue-item-suite) | Query and modify items in the render queue. |
| [Render Options Suite](#aegp_renderoptionssuite4) | Query and manage all items exposed in a render queue item's options dialog. |
| [Output Module Suite](#output-module-suite) | Query and modify the output modules attached to items in the render queue. |
| [PF Interface Suite](#aegp_pfinterfacesuite1) | The functions in this suite, while technically part of the AEGP API, are for use by effects. |
| [AEGP Iterate Suite](#aegp_iteratesuite1) | Gives AEGPs a way to have a function (which has the required signature) to be run on any or all available processors. |
| [File Import Manager Suite](#file-import-manager-suite) | Registers AEGP file and project importers as part of After Effects' file handling. |

---

## Fail Gracefully

If a suite isn't present, make every attempt to fail gracefully. Show the user a message indicating the nature of the problem. Attempt to acquire and use an earlier version of the same suite.

Since AEGPs are so deeply integrated with After Effects, make sure that users know who or what is encountering a given problem.

Identify yourself! Provide support and/or help information to the user whenever possible.

---

## Handling Handles

Use the AEGP Memory Suite to manage memory used by the AEGP. Whenever memory related errors are encountered, After Effects can report errors for you to find early on.

`AEGP_MemHandle` is a structure that contains more than just the referenced memory. So it should not be dereferenced directly. Use `AEGP_LockMemHandle` to get a pointer to the memory referenced by the `AEGP_MemHandle`.

And of course, unlock it when you're done.

### AEGP_MemorySuite1

| Function | Purpose |
|---|---|
| `AEGP_NewMemHandle` | Create a new memory handle. This memory is guaranteed to be 16-byte aligned. |
| | `plugin_id` is the ID passed in through the main [Entry Point](../implementation#entry-point), or alternatively what you obtained from `AEGP_RegisterWithAEGP()` (from [AEGP_UtilitySuite6](#aegp_utilitysuite6)). |
| | Use `whatZ` to identify the memory you are asking for. After Effects uses the string to display any related error messages. |
| | <pre lang="cpp">AEGP_NewMemHandle(<br/>  AEGP_PluginID   \*plugin_id,<br/>  const A_char    \*whatZ,<br/>  AEGP_MemSize    size,<br/>  AEGP_MemFlag    flags,<br/>  AEGP_MemHandle  \*memPH);</pre> |
| `AEGP_FreeMemHandle` | Release a handle you allocated using `AEGP_NewMemHandle()`. |
| | <pre lang="cpp">AEGP_FreeMemHandle(<br/>  AEGP_MemHandle  memH);</pre> |
| `AEGP_LockMemHandle` | Locks the handle into memory (cannot be moved by OS). Use this function prior to using memory allocated by `AEGP_NewMemHandle()`. Can be nested. |
| | <pre lang="cpp">AEGP_LockMemHandle(<br/>  AEGP_MemHandle  memH,<br/>  void            \*ptr_to_ptr);</pre> |
| `AEGP_UnlockMemHandle` | Allows OS to move the referenced memory. Always balance lock calls with unlocks. |
| | <pre lang="cpp">AEGP_UnlockMemHandle(<br/>  AEGP_MemHandle  memH);</pre> |
| `AEGP_GetMemHandleSize` | Returns the allocated size of the handle. |
| | <pre lang="cpp">AEGP_GetMemHandleSize AEGP_MemHandle memH,<br/>  AEGP_MemSize  \*sizeP);</pre> |
| `AEGP_ResizeMemHandle` | Changes the allocated size of the handle. |
| | <pre lang="cpp">AEGP_ResizeMemHandle(<br/>  const char      \*whatZ,<br/>  AEGP_MemSize    new_size,<br/>  AEGP_MemHandle  memH);</pre> |
| `AEGP_SetMemReportingOn` | If After Effects runs into problems with the memory handling, the error should be reported to the user. |
| | Make use of this during development! |
| | Only memory allocated and then leaked using this suite is reported using this call, so for example memory allocated using [PF_HandleSuite1](../../effect-details/memory-allocation#pf_handlesuite1) will not be reported. |
| | <pre lang="cpp">AEGP_SetMemReportingOn(<br/>  A_Boolean  turn_OnB);</pre> |
| `AEGP_GetMemStats` | Obtain information about the number of currently allocated handles and their total size. |
| | Only memory allocated using this suite is tracked and reported using this call, so for example memory allocated using [PF_HandleSuite1](../../effect-details/memory-allocation#pf_handlesuite1) will not be reported here. |
| | <pre lang="cpp">AEGP_GetMemStats(<br/>  AEGP_MemID  mem_id,<br/>  A_long      \*countPL,<br/>  A_long      \*sizePL);</pre> |

---

## Managing Menu Items

Command Suites allow you to create and handle any menu events.

To add your own menu commands, you must also use [Register Suite](#aegp_registersuites5) to assign handlers to menu events.

### AEGP_CommandSuite1

| Function | Purpose |
|---|---|
| `AEGP_GetUniqueCommand` | Obtain a unique command identifier. Use the [Register Suite](#aegp_registersuites5r) to register a handler for the command. |
| | <pre lang="cpp">AEGP_GetUniqueCommand(<br/>  AEGP_Command  \*unique_commandP);</pre> |
| | Note: On occasion After Effects will send command 0 (zero), so don't use that as part of your command handling logic. |
| `AEGP_InsertMenuCommand` | Add a new menu command. Using `nameZ = "-"` will insert a separator. |
| | `menu_ID` can be: |
| | - `AEGP_Menu_NONE` |
| | - `AEGP_Menu_APPLE` |
| | - `AEGP_Menu_FILE` |
| | - `AEGP_Menu_EDIT` |
| | - `AEGP_Menu_COMPOSITION` |
| | - `AEGP_Menu_LAYER` |
| | - `AEGP_Menu_EFFECT` |
| | - `AEGP_Menu_WINDOW` |
| | - `AEGP_Menu_FLOATERS` |
| | - `AEGP_Menu_KF_ASSIST` |
| | - `AEGP_Menu_IMPORT` |
| | - `AEGP_Menu_SAVE_FRAME_AS` |
| | - `AEGP_Menu_PREFS` |
| | - `AEGP_Menu_EXPORT` |
| | - `AEGP_Menu_ANIMATION` |
| | - `AEGP_Menu_PURGE` |
| | - `AEGP_Menu_NEW` - Supported in CC and later |
| | Locations can be set to a specific location in the menu or can be one assigned by After Effects: |
| | - `AEGP_MENU_INSERT_SORTED` |
| | - `AEGP_MENU_INSERT_AT_BOTTOM` |
| | - `AEGP_MENU_INSERT_AT_TOP` |
| | For `AEGP_Menu_WINDOW`, the BOTTOM and TOP options haven't been supported since CS4 and will return an error. We recommend `SORTED`. |
| | <pre lang="cpp">AEGP_InsertMenuCommand(<br/>  AEGP_Command  command,<br/>  const A_char  \*nameZ,<br/>  AEGP_MenuID   menu_id,<br/>  A_long        after_itemL);</pre> |
| `AEGP_RemoveMenuCommand` | Remove a menu command. If you were so motivated, you could remove ALL of the After Effects menu items. |
| | <pre lang="cpp">AEGP_RemoveMenuCommand(<br/>  AEGP_Command  command);</pre> |
| `AEGP_SetCommandName` | Set menu name of a command. |
| | <pre lang="cpp">AEGP_SetCommandName(<br/>  AEGP_Command  command,<br/>  const A_char  \*nameZ);</pre> |
| `AEGP_EnableCommand` | Enable a menu command. |
| | <pre lang="cpp">AEGP_EnableCommand(<br/>  AEGP_Command  command);</pre> |
| `AEGP_DisableCommand` | Disable a menu command. |
| | <pre lang="cpp">AEGP_DisableCommand(<br/>  AEGP_Command  command);</pre> |
| `AEGP_CheckMarkMenuCommand` | After Effects will draw a check mark next to the menu command. |
| | <pre lang="cpp">AEGP_CheckMarkMenuCommand(<br/>  AEGP_Command  command,<br/>  A_Boolean     checkB);</pre> |
| `AEGP_DoCommand` | Call the handler for a specified menu command. Every After Effects menu item has an associated command. |
| | Note that we make no guarantees that command IDs will be consistent from version to version. |
| | <pre lang="cpp">AEGP_DoCommand(<br/>  AEGP_Command  command);</pre> |
| | Having given the disclaimer above, here are a few command numbers that have been supplied to other developers, and may be of interest: |
| | - `3061` - Open selection, ignoring any modifier keys. |
| | - `10314` - Play/Stop (valid in 13.5 and later) |
| | - `2285` - RAM Preview (valid prior to 13.5) |
| | - `2415` - Play (spacebar) (valid prior to 13.5) |
| | - `2997` - Crop composition to region of interest. |
| | - `2372` - Edit > Purge > Image Caches |
| | If your AEGP needs to call some other After Effects menu item, there's a fairly easy way to find out most commands you want, using scripting: |
| | <pre lang="js">cmd = app.findMenuCommandId(text); // e.g. text = "Open Project..."<br/>alert(cmd);</pre> |
| | With AE running, just open up Adobe ExtendScript Toolkit CC, copy the above script in, and in the app drop-down choose the version of After Effects you have running. Then hit the Play button to run the script in AE. Otherwise, contact [API Engineering](mailto:zlam@adobe.com) for the command number. |

---

## Registering with After Effects

Register functions for After Effects' use.

### AEGP_RegisterSuites5

| Function | Purpose |
|---|---|
| `AEGP_RegisterCommandHook` | Register a hook (command handler) function with After Effects. |
| | If you are replacing a function which After Effects also handles, `AEGP_HookPriority` determines whether your plug-in gets it first. |
| | - `AEGP_HP_BeforeAE` |
| | - `AEGP_HP_AfterAE` |
| | For each menu item you add, obtain your own `AEGP_Command` using `AEGP_GetUniqueCommand()` (from [AEGP_CommandSuite1](#aegp_commandsuite1)) prior registering a single `command_hook_func`. |
| | Determine which command was sent within this hook function, and act accordingly. |
| | Currently, `AEGP_HookPriority` is ignored. |
| | <pre lang="cpp">AEGP_RegisterCommandHook(<br/>  AEGP_PluginID      aegp_plugin_id,<br/>  AEGP_HookPriority  hook_priority,<br/>  AEGP_Command       command,<br/>  AEGP_CommandHook   command_hook_func<br/>  void               \*refconPV);</pre> |
| `AEGP_RegisterUpdateMenuHook` | Register your menu update function (which determines whether or not items are active), called every time any menu is to be drawn. |
| | This hook function handles updates for all menus. |
| | <pre lang="cpp">AEGP_RegisterUpdateMenuHook(<br/>  AEGP_PluginID        aegp_plugin_id,<br/>  AEGP_UpdateMenuHook  update_menu_hook_func,<br/>  void                 \*refconPV);</pre> |
| `AEGP_RegisterDeathHook` | Register your termination function. Called when the application quits. |
| | <pre lang="cpp">AEGP_RegisterDeathHook(<br/>  AEGP_PluginID   aegp_plugin_id,<br/>  AEGP_DeathHook  death_hook_func,<br/>  void            \*refconPV);</pre> |
| `AEGP_RegisterVersionHook` | Currently not called. |
| `AEGP_RegisterAboutStringHook` | Currently not called. |
| `AEGP_RegisterAboutHook` | Currently not called. |
| `AEGP_RegisterArtisan` | Register your Artisan. See [Artisans](../../artisans/artisans) for more details. |
| | <pre lang="cpp">AEGP_RegisterArtisan(<br/>  A_Version              api_version,<br/>  A_Version              Artisan_version,<br/>  long                   aegp_plugin_id,<br/>  void                   \*aegp_refconPV,<br/>  const A_char           \*match_nameZ,<br/>  const A_char           \*Artisan_nameZ,<br/>  PR_ArtisanEntryPoints  \*entry_funcsP);</pre> |
| `AEGP_RegisterIO` | Register your AEIO plug-in. See [AEIOs](../../aeios/aeios) for more details. |
| | <pre lang="cpp">AEGP_RegisterIO (<br/>  AEGP_PluginID              aegp_plugin_id,<br/>  AEGP_IORefcon              aegp_refconP,<br/>  const AEIO_ModuleInfo      \*io_infoP,<br/>  const AEIO_FunctionBlock4  \*aeio_fcn_blockP);</pre> |
| `AEGP_RegisterIdleHook` | Register your IdleHook function. After Effects will call the function sporadically, while the user makes difficult artistic decisions (or while they're getting more coffee). |
| | <pre lang="cpp">AEGP_RegisterIdleHook(<br/>  AEGP_PluginID    aegp_plugin_id,<br/>  AEGP_IdleHook    idle_hook_func,<br/>  AEGP_IdleRefcon  refconP);</pre> |
| `AEGP_RegisterInteractiveArtisan` | Registers your AEGP as an interactive artisan, for use in previewing and rendering all layers in a given composition. |
| | <pre lang="cpp">AEGP_RegisterInteractiveArtisan (<br/>  A_Version              api_version,<br/>  A_Version              artisan_version,<br/>  AEGP_PluginID          aegp_plugin_id,<br/>  void                   \*aegp_refconPV,<br/>  const A_char           \*match_nameZ,<br/>  const A_char           \*artisan_nameZ,<br/>  PR_ArtisanEntryPoints  \*entry_funcsP);</pre> |
| `AEGP_RegisterPresetLocalizationString` | Call this to register as many strings as you like for name-replacement when presets are loaded. |
| | Any time a Property name is found, or referred to in an expression, and it starts with an ASCII tab character ('t'), followed by one of the English names, it will be replaced with the localized name. |
| | (In English the tab character will simply be removed). |
| | <pre lang="cpp">AEGP_RegisterPresetLocalizationString(<br/>  const A_char  \*english_nameZ,<br/>  const A_char  \*localized_nameZ);</pre> |

---

## Manage Projects

These functions access and modify project data. Support for multiple projects is included to prepare for future expansion;
After Effects currently adheres to the single project model.

To save project-specific data in After Effects' preferences (and thus, outside the projects themselves), use the [Persistent Data Suite](#persistent-data-suite).

Use caution: the functions for opening and creating projects do not save changes to the project currently open when they are called!

### AEGP_ProjSuite6

| Function | Purpose |
|---|---|
| `AEGP_NumProjects` | Currently will never return more than 1. After Effects can have only one project open at a time. |
| | <pre lang="cpp">AEGP_GetNumProjects(<br/>  A_long  \*num_projPL)</pre> |
| `AEGP_GetIndProject` | Retrieves a specific project by index. |
| | <pre lang="cpp">AEGP_GetProjectProjectByIndex(<br/>  A_long         proj_indexL,<br/>  AEGP_ProjectH  \*projPH);</pre> |
| `AEGP_GetProjectName` | Get the project name (up to `AEGP_MAX_PROJ_NAME_LEN + 1`) in length. |
| | <pre lang="cpp">AEGP_GetProjectName(<br/>  AEGP_ProjectH  projH,<br/>  A_char         \*nameZ);</pre> |
| `AEGP_GetProjectPath` | Get the path of the project (empty string the project hasn't been saved yet). |
| | The path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`. |
| | <pre lang="cpp">AEGP_GetProjectPath(<br/>  AEGP_ProjectH   projH,<br/>  AEGP_MemHandle  \*unicode_pathPH)</pre> |
| `AEGP_GetProjectRootFolder` | Get the root of the project, which After Effects also treats as a folder. |
| | <pre lang="cpp">AEGP_GetProjectRootFolder(<br/>  AEGP_ProjectH  projH,<br/>  AEGP_ItemH     \*root_folderPH)</pre> |
| `AEGP_SaveProjectToPath` | Saves the entire project to the specified full path. |
| | The file path is a NULL-terminated UTF-16 string with platform separators. |
| | <pre lang="cpp">AEGP_SaveProjectToPath(<br/>  AEGP_ProjectH      projH,<br/>  const A_UTF16Char  \*pathZ);</pre> |
| `AEGP_GetProjectTimeDisplay` | Retrieves the current time display settings. |
| | <pre lang="cpp">AEGP_GetProjectTimeDisplay(<br/>  AEGP_ProjectH      projH,<br/>  AEGP_TimeDisplay3  \*time_displayP);<br/><br/>typedef struct {<br/>  AEGP_TimeDisplayMode            display_mode;<br/>  AEGP_SourceTimecodeDisplayMode  footage_display_mode;<br/>  A_Boolean                       display_dropframeB;<br/>  A_Boolean                       use_feet_framesB;<br/>  A_char                          timebaseC;<br/>  A_char                          frames_per_footC;<br/>  AEGP_FramesDisplayMode          frames_display_mode;<br/>} AEGP_TimeDisplay3;<br/><br/>enum {<br/>  AEGP_TimeDisplay_TIMECODE = 0,<br/>  AEGP_TimeDisplay_FRAMES<br/>};<br/><br/>typedef char AEGP_TimeDisplayMode;<br/><br/>typedef char AEGP_FramesDisplayMode;</pre> |
| `AEGP_SetProjectTimeDisplay` | Specified the settings to be used for displaying time. |
| | <pre lang="cpp">AEGP_SetProjectTimeDisplay(<br/>  AEGP_ProjectH            projH,<br/>  const AEGP_TimeDisplay3  \*time_displayP);</pre> |
| `AEGP_ProjectIsDirty` | Returns `TRUE` if the project has been modified since it was opened. |
| | <pre lang="cpp">AEGP_ProjectIsDirty(<br/>  AEGP_ProjectH  projH,<br/>  A_Boolean      \*is_dirtyPB);</pre> |
| `AEGP_SaveProjectAs` | Saves the project to the specified path. |
| | The file path is a NULL-terminated UTF-16 string with platform separators. |
| | NOTE: This will overwrite an existing file. |
| | <pre lang="cpp">AEGP_SaveProjectAs(<br/>  AEGP_ProjectH      projH,<br/>  const A_UTF16Char  \*pathZ);</pre> |
| `AEGP_NewProject` | Creates a new project. NOTE: Will close the current project without saving it first! |
| | <pre lang="cpp">AEGP_NewProject(<br/>  AEGP_ProjectH  \*new_projectPH);</pre> |
| `AEGP_OpenProjectFromPath` | Opens a project from the supplied path, and returns its `AEGP_ProjectH`. |
| | The file path is a NULL-terminated UTF-16 string with platform separators. |
| | NOTE: Will close the current project without saving it first! |
| | <pre lang="cpp">AEGP_OpenProjectFromPath(<br/>  const A_UTF16Char  \*pathZ,<br/>  AEGP_ProjectH      \*projectPH);</pre> |
| `AEGP_GetProjectBitDepth` | Retrieves the project bit depth. |
| | <pre lang="cpp">AEGP_GetProjectBitDepth(<br/>  AEGP_Projec        tH projectH,<br/>  AEGP_ProjBitDepth  \*bit_depthP);</pre> |
| | AEGP_ProjBitDepth will be one of the following: |
| | - `AEGP_ProjBitDepth_8` |
| | - `AEGP_ProjBitDepth_16` |
| | - `AEGP_ProjBitDepth_32` |
| `AEGP_SetProjectBitDepth` | Sets the project bit depth. Undoable. |
| | <pre lang="cpp">AEGP_SetProjectBitDepth(<br/>  AEGP_ProjectH      projectH,<br/>  AEGP_ProjBitDepth  bit_depth);</pre> |

### AEGP_TimeDisplay2

:::note
Values in unused fields persist when After Effects is using a different display type.
:::

| Member | Descrpition |
|---|---|
| `AEGP_TimeDisplayType type;` | One of the following: |
| | - `AEGP_TimeDisplayType_TIMECODE` |
| | - `AEGP_TimeDisplayType_FRAMES` |
| | - `AEGP_TimeDisplayType_FEET_AND_FRAMES` |
| `A_char timebaseC;` | 0 - 100. Only used for `AEGP_TimeDisplayType_TIMECODE`. |
| `A_Boolean non_drop_30B;` | When the timebase is 30 and the item's framerate is 29.97, determines whether to display as non-drop frame. |
| `A_char frames_per_footC;` | Only used for `AEGP_TimeDisplayType_FEET_AND_FRAMES`. |
| `A_long starting_frameL;` | Usually 0 or 1. Not used when type is usually 0 or 1, not used for `AEGP_TimeDisplayType_TIMECODE`. |
| `A_Boolean auto_timecode_baseB;` | If `TRUE`, the project timecode display setting is set to auto. |

---

## Control Items Within Projects

Accesses and modifies items within a project or composition.

Anything in the project bin is an `AEGP_Item`. Note that cameras have no source, and thus have no `AEGP_ItemH`.

Unless more specificity is required for the function(s) you're using, remain as abstract as possible; AEGP_Comps are passed into and returned from most functions as AEGP_Items.

### AEGP_ItemSuite9

| Function | Purpose |
|---|---|
| `AEGP_GetFirstProjItem` | Retrieves the first item in a given project. |
| | <pre lang="cpp">AEGP_GetFirstProjItem(<br/>  AEGP_ProjectH  projectH,<br/>  AEGP_ItemH     \*itemPH);</pre> |
| `AEGP_GetNextProjItem` | Retrieves the next project item; `*next_itemPH` will be `NULL` after the last item. |
| | <pre lang="cpp">AEGP_GetNextProjItem(<br/>  AEGP_ProjectH  projectH,<br/>  AEGP_ItemH     itemH,<br/>  AEGP_ItemH     \*next_itemPH);</pre> |
| `AEGP_GetActiveItem` | If the Project window is active, the active item is the selected item (if only one item is selected). |
| | If a Composition, Timeline, or Footage window is active, returns the parent of the layer associated with the front-most tab in the window. |
| | Returns NULL if no item is active. |
| | <pre lang="cpp">AEGP_GetActiveItem(<br/>  AEGP_ItemH  \*itemPH,</pre> |
| `AEGP_IsItemSelected` | Returns true if the Project window is active and the item is selected. |
| | <pre lang="cpp">AEGP_IsItemSelected(<br/>  AEGP_ItemH  itemH,<br/>  A_Boolean   \*selectedPB)</pre> |
| `AEGP_SelectItem` | Toggles the selection state of the item, and (depending on `deselect_othersB`) can deselect other items. This call selects items in the Project panel. |
| | To make selections in the Composition panel, use `AEGP_SetSelection` from [AEGP_CompSuite11](#aegp_compsuite11). |
| | <pre lang="cpp">AEGP_SelectItem(<br/>  AEGP_ItemH  itemH,<br/>  A_Boolean   selectB,<br/>  A_Boolean   deselect_othersB);</pre> |
| `AEGP_GetItemType` | Gets type of an item. Note: solids don't appear in the project, but can be the source to a layer. |
| | <pre lang="cpp">AEGP_GetItemType(<br/>  AEGP_ItemH     itemH,<br/>  AEGP_ItemType  \*item_typeP);</pre> |
| | Items are one of the following types: |
| | - `AEGP_ItemType_NONE` |
| | - `AEGP_ItemType_FOLDER` |
| | - `AEGP_ItemType_COMP` |
| | - `AEGP_ItemType_SOLID` |
| | - `AEGP_ItemType_FOOTAGE` |
| `AEGP_GetTypeName` | Get name of type. (name length up to `AEGP_MAX_TYPE_NAME_LEN + 1`). |
| | <pre lang="cpp">AEGP_GetTypeName(<br/>  AEGP_ItemType  item_type,<br/>  A_char         \*nameZ);</pre> |
| `AEGP_GetItemName` | Get item name. (name length has no limit). |
| | `unicode_namePH` points to `A_UTF16Char` (contains null terminated UTF16 string). |
| | It must be disposed with `AEGP_FreeMemHandle` . |
| | <pre lang="cpp">AEGP_GetItemName(<br/>  AEGP_PluginID  pluginID,<br/>  AEGP_ItemH     itemH,<br/>  AEGP_MemHandle \*unicode_namePH);</pre> |
| `AEGP_SetItemName` | Specifies the name of the AEGP_ItemH. (name length has no limit). Undoable. |
| | <pre lang="cpp">AEGP_SetItemName(<br/>  AEGP_ItemH         itemH,<br/>  const A_UTF16Char  \*nameZ);</pre> |
| `AEGP_GetItemID` | Returns the item's unique ID, which persists across saves and loads of the project. |
| | <pre lang="cpp">AEGP_GetItemID(<br/>  AEGP_ItemH  itemH,<br/>  A_long      \*item_idPL);</pre> |
| `AEGP_GetItemFlags` | Get properties of an item. |
| | <pre lang="cpp">AEGP_GetItemFlags(<br/>  AEGP_ItemH      itemH,<br/>  AEGP_ItemFlags  \*item_flagsP);</pre> |
| | Flag values (may be OR'd together): |
| | - `AEGP_ItemFlag_MISSING` |
| | - `AEGP_ItemFlag_HAS_PROXY` |
| | - `AEGP_ItemFlag_USING_PROXY` |
| | - `AEGP_ItemFlag_MISSING_PROXY` |
| | - `AEGP_ItemFlag_HAS_VIDEO` |
| | - `AEGP_ItemFlag_HAS_AUDIO` |
| | - `AEGP_ItemFlag_STILL` |
| | - `AEGP_ItemFlag_HAS_ACTIVE_AUDIO` |
| | Unlike the `HAS_AUDIO` flag, this bit flag will set only if the comp has at least one layer where audio is actually on. |
| `AEGP_SetItemUseProxy` | Toggle item's proxy usage. Undoable. |
| | <pre lang="cpp">AEGP_SetItemUseProxy(<br/>  AEGP_ItemH  itemH,<br/>  A_Boolean   use_proxyB);</pre> |
| `AEGP_GetItemParentFolder` | Get folder containing item. |
| | <pre lang="cpp">AEGP_GetItemParentFolder(<br/>  AEGP_ItemH  itemH,<br/>  AEGP_ItemH  \*parent_itemPH);</pre> |
| `AEGP_SetItemParentFolder` | Sets an item's parent folder. Undoable. |
| | <pre lang="cpp">AEGP_SetItemParentFolder(<br/>  AEGP_ItemH  itemH,<br/>  AEGP_ItemH  parent_folderH);</pre> |
| `AEGP_GetItemDuration` | Get duration of item, in seconds. |
| | <pre lang="cpp">AEGP_GetItemDuration(<br/>  AEGP_ItemH  itemH,<br/>  A_Time      \*durationPT);</pre> |
| `AEGP_GetItemCurrentTime` | Get current time within item. Not updated while rendering. |
| | <pre lang="cpp">AEGP_GetItemCurrentTime(<br/>  AEGP_ItemH  itemH,<br/>  A_long      \*curr_timePT);</pre> |
| `AEGP_GetItemDimensions` | Get width and height of item. |
| | <pre lang="cpp">AEGP_GetItemDimensions(<br/>  AEGP_ItemH  itemH,<br/>  A_long      \*widthPL)<br/>  A_long      \*heightPL);</pre> |
| `AEGP_GetItemPixelAspectRatio` | Get the width of a pixel, assuming its height is 1.0, as numerator over denominator. |
| | <pre lang="cpp">AEGP_GetItemPixelAspectRatio(<br/>  AEGP_ItemH  itemH,<br/>  A_Ratio     \*ratioPRt);</pre> |
| `AEGP_DeleteItem` | Removes item from all compositions. Undo-able. |
| | Do not use the `AEGP_ItemH` after calling this function. |
| | <pre lang="cpp">AEGP_DeleteItem(<br/>  AEGP_ItemH  itemH);</pre> |
| `AEGP_GetItemSolidColor` | Removed in `AEGP_ItemSuite4`. See `AEGP_GetSolidFootageColor` from [AEGP_FootageSuite5](#aegp_footagesuite5) |
| | Given a solid item, return its color. |
| | <pre lang="cpp">AEGP_GetItemSolidColor(<br/>  AEGP_ItemH  itemH,<br/>  PF_Pixel    \*PF_Pixel);</pre> |
| `AEGP_SetSolidColor` | Removed in `AEGP_ItemSuite4`. See `AEGP_SetSolidFootageColor` from [AEGP_FootageSuite5](#aegp_footagesuite5). |
| | Sets the color of an existing solid (error if `itemH` is not a solid). |
| | <pre lang="cpp">AEGP_SetSolidColor(<br/>  AEGP_ItemH     itemH,<br/>  AEGP_ColorVal  color);</pre> |
| `AEGP_SetSolidDimensions` | Removed in `AEGP_ItemSuite4`. See `AEGP_SetSolidFootageDimensions` from [AEGP_FootageSuite5](#aegp_footagesuite5). |
| | Sets the dimensions of an existing solid (error if `itemH` is not a solid). |
| | <pre lang="cpp">AEGP_SetSolidDimensions(<br/>  AEGP_ItemH  itemH,<br/>  A_short     widthS,<br/>  A_short     heightS);</pre> |
| `AEGP_CreateNewFolder` | Creates a new folder in the project. The newly created folder is allocated and owned by After Effects. |
| | Passing `NULL` for `parent_folderH0` creates the folder at the project's root. |
| | <pre lang="cpp">AEGP_CreateNewFolder(<br/>  const A_UTF16Char  \*nameZ,<br/>  AEGP_ProjectH      projH),<br/>  AEGP_ItemH         parentH0),<br/>  AEGP_ItemH         \*new_folderPH);</pre> |
| `AEGP_SetItemCurrentTime` | Sets the current time within a given `itemH`. |
| | <pre lang="cpp">AEGP_SetItemCurrentTime(<br/>  AEGP_ItemH    itemH,<br/>  const A_Time  \*new_timePT);</pre> |
| `AEGP_GetItemCommentLength` | Removed in `ItemSuite9`. Retrieves the length (in characters) of the `itemH's` comment. |
| | <pre lang="cpp">AEGP_GetItemCommentLength(<br/>  AEGP_ItemH  itemH,<br/>  A_u_long    \*buf_sizePLu);</pre> |
| `AEGP_GetItemComment` | Updated to support Unicode in `ItemSuite9`, available in 14.1. Retrieves the `itemH's` comment. |
| | <pre lang="cpp">AEGP_GetItemComment(<br/>  AEGP_ItemH      itemH,<br/>  AEGP_MemHandle  \*unicode_namePH);</pre> |
| `AEGP_SetItemComment` | Updated to support Unicode in `ItemSuite9`, available in 14.1. Sets the `itemH's` comment. |
| | <pre lang="cpp">AEGP_SetItemComment(<br/>  AEGP_ItemH         itemH,<br/>  const A_UTF16Char  \*commentZ);</pre> |
| `AEGP_GetItemLabel` | Retrieves an item's label. |
| | <pre lang="cpp">AEGP_GetItemLabel(<br/>  AEGP_ItemH    itemH,<br/>  AEGP_LabelID  \*labelP);</pre> |
| `AEGP_SetItemLabel` | Sets an item's label. |
| | <pre lang="cpp">AEGP_SetItemLabel(<br/>  AEGP_ItemH    itemH,<br/>  AEGP_LabelID  label);</pre> |
| `AEGP_GetItemMRUView` | Gets an item's most recently used view. The view can be used with two calls in the `AEGP_ColorSettingsSuite`, to perform a color transform on a pixel buffer from working to view color space. |
| | <pre lang="cpp">AEGP_GetItemMRUView(<br/>  AEGP_ItemH      itemH,<br/>  AEGP_ItemViewP  \*mru_viewP);</pre> |

:::note
`AEGP_RenderNewItemSoundData()` used to be here, but is now part of [AEGP_RenderSuite4](#aegp_rendersuite4).
:::

---

## Managing Selections

This suite manages selection states, mirroring the functionality supplied by vectors in the C++ Standard Template Library.

Many types of items may be simultaneously selected in After Effects; `AEGP_CollectionItems` are unions of layer, mask, effect, stream, mask vertex, and keyframe items.

First acquire the current collection, then iterate across its members to ensure that whatever your AEGP does is applicable to each.

We've added `AEGP_Collection2H` and `AEGP_CollectionItemV2` so that selected dynamic streams can be handled with the `AEGP_CollectionSuite`.

### AEGP_CollectionSuite2

| Function | Purpose |
|---|---|
| `AEGP_NewCollection` | Creates and returns a new, empty collection. |
| | To obtain the current composition's selection as a collection, use `AEGP_GetNewCollectionFromCompSelection`. |
| | <pre lang="cpp">AEGP_NewCollection(<br/>  AEGP_PluginID      plugin_id,<br/>  AEGP_Collection2H  \*collectionPH);</pre> |
| `AEGP_DisposeCollection` | Disposes of a collection. |
| | <pre lang="cpp">AEGP_DisposeCollection(<br/>  AEGP_Collection2H  collectionH);</pre> |
| `AEGP_GetCollectionNumItems` | Returns the number of items contained in the given collection. |
| | <pre lang="cpp">AEGP_GetCollectionNumItems(<br/>  AEGP_Collection2H  collectionH,<br/>  A_u_long           \*num_itemsPL);</pre> |
| `AEGP_GetCollectionItemByIndex` | Retrieves (creates and populates) the index'd collection item. |
| | <pre lang="cpp">AEGP_GetCollectionItemByIndex(<br/>  AEGP_Collection2H      collectionH,<br/>  A_u_long               indexL,<br/>  AEGP_CollectionItemV2  \*itemP);</pre> |
| `AEGP_CollectionPushBack` | Adds an item to the given collection. |
| | <pre lang="cpp">AEGP_CollectionPushBack(<br/>  AEGP_Collection2H            collectionH,<br/>  const AEGP_CollectionItemV2  \*itemP);</pre> |
| `AEGP_CollectionErase` | Removes an index'd item (or items) from a given collection. NOTE: this range is exclusive, like STL iterators. To erase the first item, you would pass 0 and 1, respectively. |
| | <pre lang="cpp">AEGP_CollectionErase(<br/>  AEGP_Collection2H  collectionH,<br/>  A_u_long           index_firstL,<br/>  A_u_long           index_lastL);</pre> |

### Ownership Of Collection Items

When `AEGP_StreamRefHs` are inserted into a collection, they are adopted by the collection; do not free them.

`AEGP_EffectRefHs`, on the other hand, are not adopted, and must be freed by the calling AEGP.

---

## Manipulate Compositions

Provide information about the compositions in a project, and create cameras, lights, and solids.

### AEGP_CompSuite11

| Function | Purpose |
|---|---|
| `AEGP_GetCompFromItem` | Retrieves the handle to the composition, given an item handle. |
| | Returns `NULL` if `itemH` is not an `AEGP_CompH`. |
| | <pre lang="cpp">AEGP_GetCompFromItem(<br/>  AEGP_ItemH  itemH,<br/>  AEGP_CompH  \*compPH);</pre> |
| `AEGP_GetItemFromComp` | Used to get the item handle, given a composition handle. |
| | <pre lang="cpp">AEGP_GetItemFromComp(<br/>  AEGP_CompH  compH,<br/>  AEGP_ItemH  \*itemPH);</pre> |
| `AEGP_GetCompDownsampleFactor` | Returns current downsample factor. Measured in pixels X by Y. |
| | Users can choose a custom downsample factor with independent X and Y. |
| | <pre lang="cpp">AEGP_GetCompDownsampleFactor(<br/>  AEGP_CompH             compH,<br/>  AEGP_DownsampleFactor  \*dsfP);</pre> |
| `AEGP_SetCompDownsampleFactor` | Sets the composition's downsample factor. |
| | <pre lang="cpp">AEGP_SetCompDownsampleFactor(<br/>  AEGP_CompH             compH,<br/>  AEGP_DownsampleFactor  \*dsfP);</pre> |
| `AEGP_GetCompBGColor` | Returns the composition background color. |
| | <pre lang="cpp">AEGP_GetCompBGColor(<br/>  AEGP_CompH     compH,<br/>  AEGP_ColorVal  \*bg_colorP);</pre> |
| `AEGP_SetCompBGColor` | Sets a composition's background color. |
| | <pre lang="cpp">AEGP_SetCompBGColor(<br/>  AEGP_CompH           compH,<br/>  const AEGP_ColorVal  \*bg_colorP);</pre> |
| `AEGP_GetCompFlags` | Returns composition flags, or'd together. |
| | <pre lang="cpp">AEGP_GetCompFlags(<br/>  AEGP_CompH      compH,<br/>  AEGP_CompFlags  \*AEGP_CompFlags);</pre> |
| | - `AEGP_CompFlag_SHOW_ALL_SHY` |
| | - `AEGP_CompFlag_ENABLE_MOTION_BLUR` |
| | - `AEGP_CompFlag_ENABLE_TIME_FILTER` |
| | - `AEGP_CompFlag_GRID_TO_FRAME` |
| | - `AEGP_CompFlag_GRID_TO_FIELDS` |
| | - `AEGP_CompFlag_USE_LOCAL_DSF` |
| | - `AEGP_CompFlag_DRAFT_3D` |
| | - `AEGP_CompFlag_SHOW_GRAPH` |
| `AEGP_GetShowLayerNameOrSourceName` | New in CC. Passes back true if the Comp's timeline shows layer names, false if source names. This will open the comp as a side effect. |
| | <pre lang="cpp">AEGP_GetShowLayerNameOrSourceName(<br/>  AEGP_CompH  compH,<br/>  A_Boolean   \*layer_names_shownPB);</pre> |
| `AEGP_SetShowLayerNameOrSourceName` | New in CC. Pass in true to have the Comp's timeline show layer names, false for source names. This will open the comp as a side effect. |
| | <pre lang="cpp">AEGP_SetShowLayerNameOrSourceName(<br/>  AEGP_CompH  compH,<br/>  A_Boolean   \*layer_names_shownPB);</pre> |
| `AEGP_GetShowBlendModes` | New in CC. Passes back true if the Comp's timeline shows blend modes column, false if hidden. This will open the comp as a side effect. |
| | <pre lang="cpp">AEGP_GetShowBlendModes(<br/>  AEGP_CompH  compH,<br/>  A_Boolean   \*blend_modes_shownPB);</pre> |
| `AEGP_SetShowBlendModes` | New in CC. Pass in true to have the Comp's timeline show the blend modes column, false to hide it. This will open the comp as a side effect. |
| | <pre lang="cpp">AEGP_GetCompFlags(<br/>  AEGP_CompH  compH,<br/>  A_Boolean   show_blend_modesB);</pre> |
| `AEGP_GetCompFramerate` | Returns the composition's frames per second. |
| | <pre lang="cpp">AEGP_GetCompFramerate(<br/>  AEGP_CompH  compH,<br/>  A_FpLong    \*fpsPF);</pre> |
| `AEGP_SetCompFramerate` | Sets the composition's frames per second. |
| | <pre lang="cpp">AEGP_SetCompFramerate(<br/>  AEGP_CompH  compH,<br/>  A_FpLong    \*fpsPF);</pre> |
| `AEGP_GetCompShutterAnglePhase` | The composition shutter angle and phase. |
| | <pre lang="cpp">AEGP_GetCompShutterAnglePhase(<br/>  AEGP_CompH  compH,<br/>  A_Ratio     \*angle,<br/>  A_Ratio     \*phase);</pre> |
| `AEGP_GetCompShutterFrameRange` | The duration of the shutter frame, in seconds. |
| | <pre lang="cpp">AEGP_GetCompShutterFrameRange(<br/>  AEGP_CompH    compH,<br/>  const A_Time  \*comp_timeP);</pre> |
| `AEGP_GetCompSuggestedMotionBlurSamples` | Retrieves the number of motion blur samples After Effects will perform in the given composition. |
| | <pre lang="cpp">AEGP_GetCompSuggestedMotionBlurSamples(<br/>  AEGP_CompH  compH,<br/>  A_long      \*samplesPL)</pre> |
| `AEGP_SetCompSuggestedMotionBlurSamples` | Specifies the number of motion blur samples After Effects will perform in the given composition. Undoable. |
| | <pre lang="cpp">AEGP_SetCompSuggestedMotionBlurSamples(<br/>  AEGP_CompH  compH,<br/>  A_long      samplesL);</pre> |
| `AEGP_GetCompMotionBlurAdaptiveSampleLimit` | New in CC. Retrieves the motion blur adaptive sample limit for the given composition. |
| | As of CC, a new comp defaults to `128`. |
| | <pre lang="cpp">AEGP_GetCompMotionBlurAdaptiveSampleLimit(<br/>  AEGP_CompH  compH,<br/>  A_long      \*samplesPL)</pre> |
| `AEGP_SetCompMotionBlurAdaptiveSampleLimit` | New in CC. Specifies the motion blur adaptive sample limit for the given composition. |
| | As of CC, both the limit and the suggested values are clamped to [2,256] range and the limit value will not be allowed less than the suggested value. |
| | Undoable. |
| | <pre lang="cpp">AEGP_SetCompMotionBlurAdaptiveSampleLimit(<br/>  AEGP_CompH  compH,<br/>  A_long      samplesL);</pre> |
| `AEGP_GetCompWorkAreaStart` | Get the time where the current work area starts. |
| | <pre lang="cpp">AEGP_GetCompWorkAreaStart(<br/>  AEGP_CompH  compH,<br/>  A_Time      \*startPT);</pre> |
| `AEGP_GetCompWorkAreaDuration` | Get the duration of a composition's current work area, in seconds. |
| | <pre lang="cpp">AEGP_GetCompWorkAreaDuration(<br/>  AEGP_CompH  compH,<br/>  A_Time      \*durationPT);</pre> |
| `AEGP_SetCompWorkAreaStartAndDuration` | Set the work area start and duration, in seconds. Undo-able. |
| | One call to this function is sufficient to set the layer's in point and duration; it's not necessary to call it twice, once for each timespace. |
| | <pre lang="cpp">AEGP_SetCompWorkAreaStartAndDuration(<br/>  AEGP_CompH    compH,<br/>  const A_Time  \*startPT)<br/>  const A_Time  \*durationPT);</pre> |
| `AEGP_CreateSolidInComp` | Creates a new solid with a specified width, height, color, and duration in the composition. Undo-able. |
| | If you pass `NULL` for the duration, After Effects uses its preference for the duration of a new still. If you pass `NULL`, or an invalid time scale, duration is set to the length of the composition. |
| | <pre lang="cpp">AEGP_CreateSolidInComp(<br/>  const A_UTF16Char  \*utf_nameZ,<br/>  A_Long             widthL,<br/>  A_Long             heightL,<br/>  const PF_Pixel     \*color,<br/>  AEGP_CompH         parent_compH,<br/>  const A_Time       \*durationPT0,<br/>  AEGP_LayerH        \*new_solidPH);</pre> |
| `AEGP_CreateCameraInComp` | Creates and adds a camera to the specified composition. Once created, you can manipulate the camera's parameter streams using the AEGP [Stream Suite](#stream-suite). |
| | To specify a two-node camera, use `AEGP_SetLayerFlag` from [AEGP_LayerSuite9](#aegp_layersuite9) to set `AEGP_LayerFlag_LOOK_AT_POI`. |
| | <pre lang="cpp">AEGP_CreateCameraInComp(<br/>  const A_UTF16Char  \*utf_nameZ,<br/>  A_FloatPoint       center_point,<br/>  AEGP_CompH         parent_compH,<br/>  AEGP_LayerH        \*new_cameraPH);</pre> |
| `AEGP_CreateLightInComp` | Creates and adds a light to the specified composition. Once created, you can manipulate the light's parameter streams using the AEGP [Stream Suite](#stream-suite). |
| | <pre lang="cpp">AEGP_CreateLightInComp(<br/>  const A_UTF16Char  \*utf_nameZ,<br/>  A_FloatPoint       center_point,<br/>  AEGP_CompH         parent_compH,<br/>  AEGP_LayerH        \*new_lightPH);</pre> |
| `AEGP_CreateComp` | Creates a new composition for the project. If you don't provide a parent folder, the composition will be at the root level of the project. Undo-able. |
| | <pre lang="cpp">AEGP_CreateComp(<br/>  AEGP_ItemH         parent_folderHO,<br/>  const A_UTF16Char  \*utf_nameZ,<br/>  A_Long             widthL,<br/>  A_Long             heightL,<br/>  const A_Ratio      \*pixel_aspect_ratioPRt,<br/>  const A_Time       \*durationPT,<br/>  const A_Ratio      \*frameratePRt,<br/>  AEGP_CompH         \*new_compPH);</pre> |
| `AEGP_GetNewCollectionFromCompSelection` | Creates a new AEGP_Collection2H from the items selected in the given composition. |
| | The plug-in is responsible for disposing of the `AEGP_Collection2H`. |
| | <pre lang="cpp">AEGP_GetNewCollectionFromCompSelection(<br/>  AEGP_PluginID      plugin_id,<br/>  AEGP_CompH         compH,<br/>  AEGP_Collection2H  \*collectionPH);</pre> |
| `AEGP_SetSelection` | Sets the selection within the given composition to the given `AEGP_Collection2H`. |
| | Will return an error if members of the `AEGP_Collection2H` are not available. Don't assume that a composition hasn't changed between operations; always use a fresh `AEGP_Collection2H`. |
| | <pre lang="cpp">AEGP_SetSelection(<br/>  AEGP_CompH         compH,<br/>  AEGP_Collection2H  collectionH);</pre> |
| `AEGP_GetCompDisplayStartTime` | Gets the displayed start time of a composition. |
| | <pre lang="cpp">AEGP_GetCompDisplayStartTime(<br/>  AEGP_CompH    compH,<br/>  const A_Time  \*start_timePT);</pre> |
| `AEGP_SetCompDisplayStartTime` | Not undo-able. Sets the displayed start time of a composition (has no effect on the duration of the composition). |
| | <pre lang="cpp">AEGP_SetCompDisplayStartTime(<br/>  AEGP_CompH    compH,<br/>  const A_Time  \*start_timePT);</pre> |
| `AEGP_SetCompDuration` | Undoable. Sets the duration of the given composition. |
| | <pre lang="cpp">AEGP_SetCompDuration(<br/>  AEGP_CompH    compH,<br/>  const A_Time  \*durationPT);</pre> |
| `AEGP_CreateNullInComp` | Creates a "null object" in the composition (useful for translating projects from 3D applications into After Effects). |
| | If you pass `NULL` for the duration, After Effects uses its preference for the duration of a new still. If you pass 0, or an invalid time scale, duration is set to the length of the composition. |
| | <pre lang="cpp">AEGP_CreateNullInComp(<br/>  const A_UTF16Char  \*utf_nameZ,<br/>  AEGP_CompH         parent_compH,<br/>  const A_Time       \*durationPT0,<br/>  AEGP_LayerH        \*new_null_solidPH);</pre> |
| `AEGP_SetCompPixelAspectRatio` | Sets the pixel aspect ratio of a composition. |
| | <pre lang="cpp">AEGP_SetCompPixelAspectRatio(<br/>  AEGP_CompH     compH,<br/>  const A_Ratio  \*parPRt);</pre> |
| `AEGP_CreateTextLayerInComp` | Updated in CS6. Creates a text layer in the composition, and returns its `AEGP_LayerH`. |
| | <pre lang="cpp">AEGP_CreateTextLayerInComp(<br/>  AEGP_CompH   parent_compH,<br/>  A_Boolean    select_new_layerB,<br/>  AEGP_LayerH  \*new_text_lyrPH);</pre> |
| `AEGP_CreateBoxTextLayerInComp` | Updated in CS6. Creates a new box text layer, and returns its `AEGP_LayerH`. |
| | <pre lang="cpp">AEGP_CreateBoxTextLayerInComp(<br/>  AEGP_CompH    parent_compH,<br/>  A_Boolean     select_new_layerB,<br/>  A_FloatPoint  box_dimensions,<br/>  AEGP_LayerH   \*new_text_layerPH);</pre> |
| `AEGP_SetCompDimensions` | Sets the dimensions of the composition. Undoable. |
| | <pre lang="cpp">AEGP_SetCompDimensions(<br/>  AEGP_CompH  compH,<br/>  A_long      widthL,<br/>  A_long      heightL);</pre> |
| `AEGP_DuplicateComp` | Duplicates the composition. Undoable. |
| | <pre lang="cpp">AEGP_DuplicateComp(<br/>  AEGP_CompH  compH,<br/>  AEGP_CompH  \*new_compPH);</pre> |
| `AEGP_GetCompFrameDuration` | Retrieves the duration of a frame in a composition. |
| | <pre lang="cpp">AEGP_GetCompFrameDuration(<br/>  AEGP_CompH  compH,<br/>  A_Time      \*timeP);</pre> |
| `AEGP_GetMostRecentlyUsedComp` | Returns the most-recently-used composition. |
| | <pre lang="cpp">AEGP_GetMostRecentlyUsedComp(<br/>  AEGP_CompH  \*compPH);</pre> |
| `AEGP_CreateVectorLayerInComp` | Creates and returns a handle to a new vector layer. |
| | <pre lang="cpp">AEGP_CreateVectorLayerInComp(<br/>  AEGP_CompH   parent_compH,<br/>  AEGP_LayerH  \*new_vec_layerPH);</pre> |
| `AEGP_GetNewCompMarkerStream` | Returns an AEGP_StreamRefH to the composition's marker stream. Must be disposed by caller. |
| | <pre lang="cpp">AEGP_GetNewCompMarkerStream(<br/>  AEGP_PluginID    aegp_plugin_id,<br/>  AEGP_CompH       parent_compH,<br/>  AEGP_StreamRefH  \*streamPH);</pre> |
| `AEGP_GetCompDisplayDropFrame` | Passes back a boolean that indicates whether the specified comp uses drop-frame timecode or not. |
| | <pre lang="cpp">AEGP_GetCompDisplayDropFrame(<br/>  AEGP_CompH  compH,<br/>  A_Boolean   \*dropFramePB);</pre> |
| `AEGP_SetCompDisplayDropFrame` | Sets the dropness of the timecode in the specified composition. |
| | <pre lang="cpp">AEGP_SetCompDisplayDropFrame(<br/>  AEGP_CompH  compH,<br/>  A_Boolean   dropFrameB);</pre> |
| `AEGP_ReorderCompSelection` | Move the selection to a certain layer index. Use along with `AEGP_SetSelection().` |
| | <pre lang="cpp">AEGP_SetCompDisplayDropFrame(<br/>  AEGP_CompH  compH,<br/>  A_long      index);</pre> |

---

## Work with Footage

Provides information about footage, or items in a project or composition. When getting and setting footage's interpretation, it is possible to specify incompatible options.

If you encounter warnings and errors during development, be sure to make all related changes atomically, and reassess the logic of the operation you're performing.

For example, changing the pull-down interpretation of footage won't work unless there's a difference between it's native and conformed frame rate.

Depending on what you're trying to accomplish, it may make sense to abort all of your operations at that point, inform the user of the problem encountered.

### AEGP_FootageSuite5

| Function | Purpose |
|---|---|
| `AEGP_GetMainFootageFromItem` | Returns an error if item isn't a footage item. Used to convert an item handle to a footage handle. |
| | <pre lang="cpp">AEGP_GetMainFootageFromItem(<br/>  AEGP_ItemH     itemH,<br/>  AEGP_FootageH  \*footagePH);</pre> |
| `AEGP_GetProxyFootageFromItem` | Returns an error if item has no proxy. Returns the proxy footage handle. |
| | Note: a composition can have a proxy. |
| | <pre lang="cpp">AEGP_GetProxyFootageFromItem(<br/>  AEGP_ItemH     itemH,<br/>  AEGP_FootageH  \*proxy_ftgPH);</pre> |
| `AEGP_GetFootageNumFiles` | Returns the number of data (RGBA or audio) files, and the number of files per frame (may be greater than one if the footage has auxiliary channels). |
| | <pre lang="cpp">AEGP_GetFootageNumFiles(<br/>  AEGP_FootageH  footageH,<br/>  A_long         \*num_filesPL0,<br/>  A_long         \*files_per_frmPL0);</pre> |
| `AEGP_GetFootagePath` | Get fully realized path to footage source file. Retrieves the footage path for a piece of footage (or for the specified frame of a footage sequence). |
| | `frame_numL` ranges from `0 to num_main_files`, as obtained using `AEGP_GetFootageNumFiles` from [AEGP_FootageSuite5](#aegp_footagesuite5). |
| | `AEGP_FOOTAGE_MAIN_FILE_INDEX` is the main file. |
| | The path is a handle to a NULL-terminated `A_UTF16Char` string, and must be disposed with AEGP_FreeMemHandle. |
| | <pre lang="cpp">AEGP_GetFootagePath(<br/>  AEGP_FootageH   footageH,<br/>  A_long          frame_numL,<br/>  A_long          file_indexL,<br/>  AEGP_MemHandle  \*unicode_pathPH);</pre> |
| `AEGP_GetFootageSignature` | Retrieves the footage signature of specified footage. |
| | <pre lang="cpp">AEGP_GetFootageSignature(<br/>  AEGP_FootageH          footageH,<br/>  AEGP_FootageSignature  \*sigP);</pre> |
| | The signature will be one of the following: |
| | - `AEGP_FootageSignature_NONE` |
| | - `AEGP_FootageSignature_MISSING` |
| | - `AEGP_FootageSignature_SOLID` |
| `AEGP_NewFootage` | Creates a new footage item. The file path is a NULL-terminated UTF-16 string with platform separators. |
| | Note that footage filenames with colons are not allowed, since colons are used as path separators in the HFS+ file system. |
| | <pre lang="cpp">AEGP_NewFootage(<br/>  AEGP_PluginID                         aegp_plugin_id,<br/>  const A_UTF16Char                     \*pathZ,<br/>  const AEGP_FootageLayerKey            \*layer_infoP0,<br/>  const AEGP_FileSequenceImportOptions  \*sequence_optionsP0,<br/>  AEGP_InterpretationStyle              interp_style,<br/>  void                                  \*reserved,<br/>  AEGP_FootageH                         \*footagePH);</pre> |
| | Note the optional params. If `allow_interpretation_dialogB` is FALSE, After Effects will guess the alpha interpretation. |
| | <pre lang="cpp">typedef struct {<br/>  A_long               layer_idL;<br/>  A_long               layer_indexL<br/>  char                 \*nameAC;<br/>  AEGP_LayerDrawStyle  draw_style;<br/>} AEGP_FootageLayerKey;</pre> |
| | `AEGP_LayerDrawStyle` can be: |
| | - `AEGP_LayerDrawStyle_LAYER_BOUNDS` |
| | - `AEGP_LayerDrawStyle_DOCUMENT_BOUNDS` |
| | `AEGP_InterpretationStyle` can be: |
| | - `AEGP_InterpretationStyle_NO_DIALOG_GUESS` Will guess alpha interpretation even if file contains unknown alpha interpretation and user pref says to ask user. |
| | - `AEGP_InterpretationStyle_DIALOG_OK` Optionally can show a dialog. |
| | - `AEGP_InterpretationStyle_NO_DIALOG_NO_GUESS` Used for replace footage implementation. |
| `AEGP_AddFootageToProject` | Adds a footage item to a project. Footage will be adopted by the project, and may be added only once. |
| | This is Undo-able; do not dispose of the returned added item if it's undone. |
| | <pre lang="cpp">AEGP_AddFootageToProject(<br/>  AEGP_FootageH  footageH,<br/>  AEGP_ItemH     folderH,<br/>  AEGP_ItemH     \*add_itemPH0);</pre> |
| `AEGP_SetItemProxyFootage` | Sets footage as the proxy for an item. Will be adopted by the project. |
| | This is Undo-able; do not dispose of the returned added item if it's undone. |
| | <pre lang="cpp">AEGP_SetItemProxyFootage(<br/>  AEGP_FootageH  footageH,<br/>  AEGP_ItemH     itemH);</pre> |
| `AEGP_ReplaceItemMainFootage` | Replaces footage for an item. The item will replace the main footage for this item. |
| | This is Undo-able; do not dispose of the returned added item if it's undone. |
| | <pre lang="cpp">AEGP_ReplaceItemMainFootage(<br/>  AEGP_FootageH  footageH,<br/>  AEGP_ItemH     itemH);</pre> |
| `AEGP_DisposeFootage` | Deletes a footage item. Do not dispose of footage you did not create, or that has been added to the project. |
| | <pre lang="cpp">AEGP_DisposeFootage(<br/>  AEGP_FootageH  footageH);</pre> |
| `AEGP_GetFootageInterpretation` | Populates an AEGP_FootageInterp describing the settings of the `AEGP_FootageH`. |
| | There is no way to create a valid `AEGP_FootageInterp` other than by using this function. |
| | <pre lang="cpp">AEGP_GetFootageInterpretation(<br/>  const AEGP_ItemH    itemH,<br/>  A_Boolean           proxyB,<br/>  AEGP_FootageInterp  \*interpP);</pre> |
| | If proxyB is `TRUE`, the proxy footage's settings are retrieved. |
| `AEGP_SetFootageInterpretation` | Apply the settings in the `AEGP_FootageInterp` to the `AEGP_FootageH`. Undo-able. |
| | <pre lang="cpp">AEGP_SetFootageInterpreta tion(<br/>  const AEGP_ItemH          itemH,<br/>  A_Boolean                 proxyB,<br/>  const AEGP_FootageInterp  \*interpP);</pre> |
| | If `proxyB` is `TRUE`, the proxy footage's settings are modified. |
| `AEGP_GetFootageLayerKey` | Populates an `AEGP_FootageLayerKey` describing the footage. |
| | <pre lang="cpp">AEGP_GetFootageLayerKey(<br/>  AEGP_FootageH          footageH,<br/>  AEGP_FootageLayerKey*  layerKeyP);</pre> |
| `AEGP_NewPlaceholderFootage` | Deprecated. Adds a new placeholder footage item to the project. |
| | Using this function for missing footage will cause the user to search for each individual missing file, regardless of whether or not they're all in the same directory. |
| | Undo-able. |
| | <pre lang="cpp">AEGP_NewPlaceholderFootage(<br/>  AEGP_PluginID  plugin_id,<br/>  const A_char   \*nameZ,<br/>  A_long         width,<br/>  A_long         height,<br/>  const A_Time   \*durationPT,<br/>  AEGP_FootageH  \*footagePH);</pre> |
| `AEGP_NewPlaceholderFootageWithPath` | This is the hip new way to add references to footage that can't be found right this moment. |
| | The file path is a NULL-terminated UTF-16 string with platform separators. |
| | In CS6 and earlier, file_type was ignored and we previously recommendedsetting it to `AEIO_FileType_NONE`. |
| | Starting in CC, `AEIO_FileType_NONE` is now a warning condition. |
| | If you pass `AEIO_FileType_ANY`, then path MUST exist. |
| | If the path may not exist, pass `AEIO_FileType_DIR` for folder, or `AEIO_FileType_GENERIC` for a file. |
| | <pre lang="cpp">AEGP_NewPlaceholderFootageWithPath(<br/>  AEGP_PluginID      plugin_id,<br/>  const A_UTF16Char  \*pathZ,<br/>  AEGP_Platform      path_platform,<br/>  AEIO_FileType      file_type,<br/>  A_long             widthL,<br/>  A_long             heightL,<br/>  const A_Time       \*durationPT,<br/>  AEGP_FootageH      \*footagePH);</pre> |
| `AEGP_NewSolidFootage` | This is the way to add a solid. |
| | Until the footage is added to the project, the caller owns the `AEGP_FootageH` (and must dispose of it if, and only if, it isn't added to the project). |
| | <pre lang="cpp">AEGP_NewSolidFootage(<br/>  const A_char         \*nameZ,<br/>  A_long               width,<br/>  A_long               height,<br/>  const AEGP_ColorVal  \*colorP,<br/>  AEGP_FootageH        \*footagePH);</pre> |
| `AEGP_GetSolidFootageColor` | Returns the color of a given solid. Returns an error if the `AEGP_ItemH` is not a solid. |
| | <pre lang="cpp">AEGP_GetSolidFootageColor(<br/>  AEGP_ItemH     itemH,<br/>  A_Boolean      proxyB,<br/>  AEGP_ColorVal  \*colorP);</pre> |
| | If `proxyB` is `TRUE`, the proxy solid's color is retrieved. |
| `AEGP_SetSolidFootageColor` | Sets the color of a solid. Undo-able. |
| | <pre lang="cpp">AEGP_SetSolidFootageColor(<br/>  AEGP_ItemH     itemH,<br/>  A_Boolean      proxyB,<br/>  AEGP_ColorVal  \*colorP);</pre> |
| | If `proxyB` is `TRUE`, the proxy solid's color is set. |
| `AEGP_SetSolidFootageDimensions` | Sets the dimensions of a solid. Undo-able. |
| | <pre lang="cpp">AEGP_SetSolidFootageDimensions(<br/>  AEGP_ItemH  itemH,<br/>  A_Boolean   proxyB,<br/>  A_long      widthL,<br/>  A_long      heightL);</pre> |
| | If `proxyB` is `TRUE`, the proxy solid's dimensions are modified. Returns an error if the item isn't a solid. |
| `AEGP_GetFootageSoundDataFormat` | Retrieves information about the audio data in the footage item (by populating the `AEGP_SoundDataFormat` you passed in). |
| | <pre lang="cpp">AEGP_GetFootageSoundDataFormat(<br/>  AEGP_FootageH         footageH,<br/>  AEGP_SoundDataFormat  \*formatP);</pre> |
| `AEGP_GetFootageSequenceImportOptions` | Populates and returns a `AEGP_FileSequenceImportOptions` describing the given `AEGP_FootageH`. |
| | <pre lang="cpp">AEGP_GetFootageSequenceImportOptions(<br/>  AEGP_FootageH                   footageH,<br/>  AEGP_FileSequenceImportOptions  \*optionsP);</pre> |

### AEGP_FootageInterp Structure

| Member | Purpose |
|---|---|
| `AEGP_InterlaceLabel il;` | The interlace settings for the footage item. |
| | <pre lang="cpp">A_u_long signature; // 'FIEL'<br/>A_short version;<br/>FIEL_Type type;<br/>FIEL_Order order;<br/>A_u_long reserved;</pre> |
| | `FIEL_Type` is one of the following: |
| | - `FIEL_Type_FRAME_RENDERED` |
| | - `FIEL_Type_INTERLACED` |
| | - `FIEL_Type_HALF_HEIGHT` |
| | - `FIEL_Type_FIELD_DOUBLED` (60 full-sized field doubled frames per second.) |
| | `FIEL_Order` is either: |
| | - `FIEL_Order_UPPER_FIRST` |
| | - `FIEL_Order_LOWER_FIRST` |
| `AEGP_AlphaLabel al;` | <pre lang="cpp">AEGP_AlphaFlag flags;<br/>A_u_char redCu;<br/>A_u_char greenCu;<br/>A_u_char blueCu;</pre> |
| | `AEGP_AlphaFlags` is one or more of the following, OR'd together: |
| | - `AEGP_AlphaPremul` |
| | - `AEGP_AlphaInverted` (indicates that higher values are transparent, instead of lower) |
| | - `AEGP_AlphaIgnore` |
| | If `AEGP_AlphaPremul` is not set, straight alpha is assumed. |
| `AEGP_PulldownPhase pd;` | Indicates the phase for use in 3:2 pulldown. One of the following: |
| | - `AEGP_PulldownPhase_NO_PULLDOWN` |
| | - `AEGP_PulldownPhase_WSSWW` |
| | - `AEGP_PulldownPhase_SSWWW` |
| | - `AEGP_PulldownPhase_SWWWS` |
| | - `AEGP_PulldownPhase_WWWSS` |
| | - `AEGP_PulldownPhase_WWSSW` |
| | - `AEGP_PulldownPhase_WWWSW` |
| | - `AEGP_PulldownPhase_WWSWW` |
| | - `AEGP_PulldownPhase_WSWWW` |
| | - `AEGP_PulldownPhase_SWWWW` |
| | - `AEGP_PulldownPhase_WWWWS` |
| `AEGP_LoopBehavior loop;` | Indicates the number of times the footage should loop. |
| | <pre lang="cpp">A_long loops;<br/>A_long reserved;</pre> |
| `A_Ratio pix_aspect_ratio;` | Expresses the pixel aspect ratio of the footage (x over y). |
| `A_FpLong native_fpsF;` | The original framerate (in frames per second) of the footage item. |
| `A_FpLong conform_fpsF;` | The framerate being used for the footage item. |
| `A_long depthL;` | The pixel depth of the footage. One of the following: |
| | - `AEGP_Footage_Depth_1` |
| | - `AEGP_Footage_Depth_2` |
| | - `AEGP_Footage_Depth_4` |
| | - `AEGP_Footage_Depth_8` |
| | - `AEGP_Footage_Depth_16` |
| | - `AEGP_Footage_Depth_24` |
| | - `AEGP_Footage_Depth_30` |
| | - `AEGP_Footage_Depth_32` |
| | - `AEGP_Footage_Depth_GRAY_2` |
| | - `AEGP_Footage_Depth_GRAY_4` |
| | - `AEGP_Footage_Depth_GRAY_8` |
| | - `AEGP_Footage_Depth_48` |
| | - `AEGP_Footage_Depth_64` |
| | - `AEGP_Footage_Depth_GRAY_16` |
| `A_Boolean motion_dB;` | Indicates whether motion de-interlacing is being applied to the footage item. |

---

## Manage Layers

`AEGP_LayerSuite` provides information about layers within a composition, and the relationship(s) between the source and layer times.

As most After Effects usage boils down to layer manipulation, this is among the largest function suites in our API.

### AEGP_LayerSuite9

| Function | Purpose |
|---|---|
| `AEGP_GetCompNumLayers` | Obtains the number of layers in a composition. |
| | <pre lang="cpp">AEGP_GetCompNumLayers(<br/>  AEGP_CompH  compH,<br/>  A_long      \*num_layersPL);</pre> |
| `AEGP_GetCompLayerByIndex` | Get a `AEGP_LayerH` from a composition. Zero is the foremost layer. |
| | <pre lang="cpp">AEGP_GetCompLayerByIndex(<br/>  AEGP_CompH   compH,<br/>  A_long       layer_indexL,<br/>  AEGP_LayerH  \*layerPH);</pre> |
| `AEGP_GetActiveLayer` | Get the active layer. If a Layer or effect controls palette is active, the active layer is that associated with the front-most tab in the window. |
| | If a composition or timeline window is active, the active layer is the selected layer (if only one is selected; otherwise `NULL` is returned). |
| | <pre lang="cpp">AEGP_GetActiveLayer(<br/>  AEGP_LayerH  \*layerPH);</pre> |
| `AEGP_GetLayerIndex` | Get the index of the layer (0 is the topmost layer in the composition). |
| | <pre lang="cpp">AEGP_GetLayerIndex(<br/>  AEGP_LayerH  layerH,<br/>  A_long       \*layer_indexPL);</pre> |
| `AEGP_GetLayerSourceItem` | Get the AEGP_ItemH of the layer's source item. |
| | <pre lang="cpp">AEGP_GetLayerSourceItem(<br/>  AEGP_LayerH  layerH,<br/>  AEGP_ItemH   \*source_itemPH);</pre> |
| `AEGP_GetLayerSourceItemID` | Retrieves the ID of the given `AEGP_LayerH`. This is useful when hunting for a specific layer's ID in an `AEGP_StreamVal`. |
| | <pre lang="cpp">AEGP_GetLayerSourceItemID(<br/>  AEGP_LayerH  layerH,<br/>  A_long       \*source_idPL);</pre> |
| `AEGP_GetLayerParentComp` | Get the AEGP_CompH of the composition containing the layer. |
| | <pre lang="cpp">AEGP_GetLayerParentComp(<br/>  AEGP_LayerH  layerH,<br/>  AEGP_CompH   \*compPH);</pre> |
| `AEGP_GetLayerName` | Get the name of a layer. |
| | Both `utf_layer_namePH0` and `utf_source_namePH0` point to null terminated UTF-16 strings. They must be disposed with `AEGP_FreeMemHandle`. |
| | <pre lang="cpp">AEGP_GetLayerName(<br/>  AEGP_PluginID   pluginID,<br/>  AEGP_LayerH     layerH,<br/>  AEGP_MemHandle  \*utf_layer_namePH0,<br/>  AEGP_MemHandle  \*utf_source_namePH0);</pre> |
| `AEGP_GetLayerQuality` | Get the quality of a layer. |
| | <pre lang="cpp">AEGP_GetLayerQuality(<br/>  AEGP_LayerH        layerH,<br/>  AEGP_LayerQuality  \*qualityP);</pre> |
| | Layer quality is one of the following flags: |
| | - `AEGP_LayerQual_NONE` |
| | - `AEGP_LayerQual_WIREFRAME` |
| | - `AEGP_LayerQual_DRAFT` |
| | - `AEGP_LayerQual_BEST` |
| `AEGP_SetLayerQuality` | Sets the quality of a layer (see flag values above). Undoable. |
| | <pre lang="cpp">AEGP_SetLayerQuality(<br/>  AEGP_LayerH        layerH,<br/>  AEGP_LayerQuality  quality);</pre> |
| `AEGP_GetLayerFlags` | Get flags for a layer. |
| | <pre lang="cpp">AEGP_GetLayerFlags(<br/>  AEGP_LayerH      layerH,<br/>  AEGP_LayerFlags  \*layer_flagsP);</pre> |
| | - `AEGP_LayerFlag_NONE` |
| | - `AEGP_LayerFlag_VIDEO_ACTIVE` |
| | - `AEGP_LayerFlag_AUDIO_ACTIVE` |
| | - `AEGP_LayerFlag_EFFECTS_ACTIVE` |
| | - `AEGP_LayerFlag_MOTION_BLUR` |
| | - `AEGP_LayerFlag_FRAME_BLENDING` |
| | - `AEGP_LayerFlag_LOCKED` |
| | - `AEGP_LayerFlag_SHY` |
| | - `AEGP_LayerFlag_COLLAPSE` |
| | - `AEGP_LayerFlag_AUTO_ORIENT_ROTATION` |
| | - `AEGP_LayerFlag_ADJUSTMENT_LAYER` |
| | - `AEGP_LayerFlag_TIME_REMAPPING` |
| | - `AEGP_LayerFlag_LAYER_IS_3D` |
| | - `AEGP_LayerFlag_LOOK_AT_CAMERA` |
| | - `AEGP_LayerFlag_LOOK_AT_POI` |
| | - `AEGP_LayerFlag_SOLO` |
| | - `AEGP_LayerFlag_MARKERS_LOCKED` |
| | - `AEGP_LayerFlag_NULL_LAYER` |
| | - `AEGP_LayerFlag_HIDE_LOCKED_MASKS` |
| | - `AEGP_LayerFlag_GUIDE_LAYER` |
| | - `AEGP_LayerFlag_ENVIRONMENT_LAYER` |
| | - `AEGP_LayerFlag_ADVANCED_FRAME_BLENDING`, `True` only if pixel motion frame blending is on for the layer. |
| | - `AEGP_LayerFlag_SUBLAYERS_RENDER_SEPARATELY`, Used to get/set the state of per-character 3D enablement on a text layer. |
| | - `AEGP_LayerFlag_ENVIRONMENT_LAYER`, New in CS6. |
| `AEGP_SetLayerFlag` | Sets one layer flag at a time. Undoable. |
| | <pre lang="cpp">AEGP_SetLayerFlag(<br/>  AEGP_LayerH      layerH,<br/>  AEGP_LayerFlags  single_flag,<br/>  A_Boolean        valueB);</pre> |
| `AEGP_IsLayerVideoReallyOn` | Determines whether the layer's video is visible. This is necessary to account for 'solo' status of other layers in the composition; non-solo'd layers are still on. |
| | <pre lang="cpp">AEGP_IsLayerVideoReallyOn(<br/>  AEGP_LayerH  layerH,<br/>  A_Boolean    \*onPB);</pre> |
| `AEGP_IsLayerAudioReallyOn` | Accounts for solo status of other layers in the composition. |
| | <pre lang="cpp">AEGP_IsLayerAudioReallyOn(<br/>  AEGP_LayerH  layerH,<br/>  A_Boolean    \*onPB);</pre> |
| `AEGP_GetLayerCurrentTime` | Get current time, in layer or composition timespace. This value is not updated during rendering. |
| | NOTE: If a layer starts at other than time 0 or is time-stretched other than 100%, layer time and composition time are distinct. |
| | <pre lang="cpp">AEGP_GetLayerCurrentTime(<br/>  AEGP_LayerH     layerH,<br/>  AEGP_LTimeMode  time_mode,<br/>  A_Time          \*curr_timePT);</pre> |
| `AEGP_GetLayerInPoint` | Get time of first visible frame in composition or layer time. In layer time, the `in_pointPT` is always 0. |
| | <pre lang="cpp">AEGP_GetLayerInPoint(<br/>  AEGP_LayerH     layerH,<br/>  AEGP_LTimeMode  time_mode,<br/>  A_Time          \*in_pointPT);</pre> |
| `AEGP_GetLayerDuration` | Get duration of layer, in composition or layer time, in seconds. |
| | <pre lang="cpp">AEGP_GetLayerDuration(<br/>  AEGP_LayerH     layerH,<br/>  AEGP_LTimeMode  time_mode,<br/>  A_Time          \*durationPT);</pre> |
| `AEGP_SetLayerInPointAndDuration` | Set duration and in point of layer in composition or layer time. Undo-able. |
| | <pre lang="cpp">AEGP_SetLayerInPointAndDuration(<br/>  AEGP_LayerH     layerH,<br/>  AEGP_LTimeMode  time_mode,<br/>  const A_Time    \*in_pointPT,<br/>  const A_Time    \*durationPT);</pre> |
| `AEGP_GetLayerOffset` | Get the offset from the start of the composition to layer time 0, in composition time. |
| | <pre lang="cpp">AEGP_GetLayerOffset(<br/>  AEGP_LayerH  layerH,<br/>  A_Time       \*offsetPT);</pre> |
| `AEGP_SetLayerOffset` | Set the offset from the start of the composition to the first frame of the layer, in composition time. Undoable. |
| | <pre lang="cpp">AEGP_SetLayerOffset(<br/>  AEGP_LayerH  layerH,<br/>  A_Time       \*offsetPT);</pre> |
| `AEGP_GetLayerStretch` | Get stretch factor of a layer. |
| | <pre lang="cpp">AEGP_GetLayerStretch(<br/>  AEGP_LayerH  layerH,<br/>  A_Ratio      \*stretchPRt);</pre> |
| `AEGP_SetLayerStretch` | Set stretch factor of a layer. |
| | <pre lang="cpp">AEGP_SetLayerStretch(<br/>  AEGP_LayerH  layerH,<br/>  A_Ratio      \*stretchPRt);</pre> |
| `AEGP_GetLayerTransferMode` | Get transfer mode of a layer. |
| | <pre lang="cpp">AEGP_GetLayerTransferMode(<br/>  AEGP_LayerH             layerH,<br/>  AEGP_LayerTransferMode  \*modeP);</pre> |
| `AEGP_SetLayerTransferMode` | Set transfer mode of a layer. Undoable. |
| | <pre lang="cpp">AEGPSetLayerTransferMode(<br/>  AEGP_LayerH             layerH,<br/>  AEGP_LayerTransferMode  \*modeP);</pre> |
| | As of 23.0, when you make a layer a track matte, the layer being matted will be disabled, as when you do this via the interface. |
| `AEGP_IsAddLayerValid` | Tests whether it's currently valid to add a given item to a composition. |
| | A composition cannot be added to itself, or to any compositions which it contains; other conditions can preclude successful adding too. |
| | Adding a layer without first using this function will produce undefined results. |
| | <pre lang="cpp">AEGP_IsAddLayerValid(<br/>  AEGP_ItemH  item_to_addH,<br/>  AEGP_CompH  into_compH,<br/>  A_Boolean   \*validPB);</pre> |
| `AEGP_AddLayer` | Add an item to the composition, above all other layers. Undo-able. |
| | Use `AEGP_IsAddLayerValid()` first, to confirm that it's possible. |
| | <pre lang="cpp">AEGP_AddLayer(<br/>  AEGP_ItemH  item_to_addH,<br/>  AEGP_CompH  into_compH,<br/>  A_Boolean   \*added_layerPH0);</pre> |
| `AEGP_ReorderLayer` | Change the order of layers. Undoable. |
| | <pre lang="cpp">AEGP_ReorderLayer(<br/>  AEGP_LayerH  layerH,<br/>  A_long       layer_indexL);</pre> |
| | To add a layer to the end of the composition, to use `layer_indexL = AEGP_REORDER_LAYER_TO_END` |
| `AEGP_GetLayerMaskedBounds` | Given a layer's handle and a time, returns the bounds of area visible with masks applied. |
| | <pre lang="cpp">AEGP_GetLayerMaskedBounds(<br/>  AEGP_LayerH   layerH,<br/>  const A_Time  \*comp_timePT,<br/>  A_FloatRect   \*boundsPR);</pre> |
| `AEGP_GetLayerObjectType` | Returns a layer's object type. |
| | <pre lang="cpp">AEGP_GetLayerObjectType(<br/>  AEGP_LayerH      layerH,<br/>  AEGP_ObjectType  \*object_type);</pre> |
| | - `AEGP_ObjectType_AV` |
| | - `AEGP_ObjectType_LIGHT` |
| | - `AEGP_ObjectType_CAMERA` |
| | - `AEGP_ObjectType_TEXT` |
| | - `AEGP_ObjectType_3D_MODEL`, New in 24.4. |
| `AEGP_IsLayer3D` | Is the footage item a 3D layer. All AV layers are either 2D or 3D. |
| | <pre lang="cpp">AEGP_IsLayer3D(<br/>  AEGP_LayerH  layerH,<br/>  A_Boolean    \*is_3DPB);</pre> |
| `AEGP_IsLayer2D` | Is the footage item a 2D layer. All AV layers are either 2D or 3D. |
| | <pre lang="cpp">AEGP_IsLayer2D(<br/>  AEGP_LayerH  layerH,<br/>  A_Boolean    \*is_2DPB);</pre> |
| `AEGP_IsVideoActive` | Given composition time and a layer, see if the layer will render. |
| | Time mode is either `AEGP_LTimeMode_LayerTime` or `AEGP_LTimeMode_CompTime`. |
| | <pre lang="cpp">AEGP_IsVideoActive(<br/>  AEGP_LayerH     layerH,<br/>  AEGP_LTimeMode  time_mode,<br/>  A_Time          \*comp_timePT,<br/>  A_Boolean       \*is_activePB);</pre> |
| `AEGP_IsLayerUsedAsTrackMatte` | Is the layer used as a track matte? |
| | <pre lang="cpp">AEGP_IsLayerUsedAsTrackMatte(<br/>  AEGP_LayerH  layerH,<br/>  A_Boolean    fill_must_be_activeB,<br/>  A_Boolean    \*is_track_mattePB);</pre> |
| `AEGP_DoesLayerHaveTrackMatte` | Does this layer have a Track Matte? |
| | <pre lang="cpp">AEGP_DoesLayerHaveTrackMatte(<br/>  AEGP_LayerH  layerH,<br/>  A_Boolean    \*has_track_mattePB);</pre> |
| `AEGP_ConvertCompToLayerTime` | Given a time in composition space, returns the time relative to the layer source footage. |
| | <pre lang="cpp">AEGP_ConvertCompToLayerTime(<br/>  AEGP_LayerH   layerH,<br/>  const A_Time  \*comp_timeP,<br/>  A_Time        \*layer_timeP);</pre> |
| `AEGP_ConvertLayerToCompTime` | Given a time in layer space, find the corresponding time in composition space. |
| | <pre lang="cpp">AEGP_ConvertLayerToCompTime(<br/>  AEGP_LayerH   layerH,<br/>  const A_Time  \*layer_timePT,<br/>  A_Time        \*comp_timePT);</pre> |
| `AEGP_GetLayerDancingRandValue` | Used by the dancing dissolve transfer function. |
| | <pre lang="cpp">AEGP_GetLayerDancingRandValue(<br/>  AEGP_LayerH   layerH,<br/>  const A_Time  \*comp_timePT,<br/>  A_long        \*rand_valuePL);</pre> |
| `AEGP_GetLayerID` | Supplies the layer's unique ID. This ID never changes during the lifetime of the project. |
| | <pre lang="cpp">AEGP_GetLayerID(<br/>  AEGP_LayerH      layerH,<br/>  AEGP_LayerIDVal  \*id_valP);</pre> |
| `AEGP_GetLayerToWorldXform` | Given a layer handle and time, returns the layer-to-world transformation matrix. |
| | <pre lang="cpp">AEGP_GetLayerToWorldXform(<br/>  AEGP_LayerH   aegp_layerH,<br/>  const A_Time  \*comp_timeP,<br/>  A_Matrix4     \*transform);</pre> |
| `AEGP_GetLayerToWorldXformFromView` | Given a layer handle, the current (composition) time, and the requested view time, returns the translation between the user's view and the layer, corrected for the composition's current aspect ratio. |
| | <pre lang="cpp">AEGP_GetLayerToWorldXformFromView(<br/>  AEGP_LayerH   aegp_layerH,<br/>  const A_Time  \*view_timeP,<br/>  const A_Time  \*comp_timeP,<br/>  A_Matrix4     \*transform);</pre> |
| `AEGP_SetLayerName` | Sets the name of a layer. Undo-able. new_nameZ points to a null terminated UTF-16 string. |
| | <pre lang="cpp">AEGP_SetLayerName(<br/>  AEGP_LayerH        aegp_layerH,<br/>  const A_UTF16Char  \*new_nameZ);</pre> |
| `AEGP_GetLayerParent` | Retrieves the handle to a layer's parent (none if not parented). |
| | <pre lang="cpp">AEGP_GetLayerParent(<br/>  AEGP_LayerH  layerH,<br/>  AEGP_LayerH  \*parent_layerPH);</pre> |
| `AEGP_SetLayerParent` | Sets a layer's parent layer. |
| | <pre lang="cpp">AEGP_SetLayerParent(<br/>  AEGP_LayerH        layerH,<br/>  const AEGP_LayerH  parent_layerH);</pre> |
| `AEGP_DeleteLayer` | Deletes a layer. Can you believe it took us three suite versions to add a delete function? Neither can we. |
| | <pre lang="cpp">AEGP_DeleteLayer(<br/>  AEGP_LayerH  layerH);</pre> |
| `AEGP_DuplicateLayer` | Duplicates the layer. Undoable. |
| | <pre lang="cpp">AEGP_DuplicateLayer(<br/>  AEGP_LayerH  orig_layerH,<br/>  AEGP_LayerH  \*dupe_layerPH);</pre> |
| `AEGP_GetLayerFromLayerID` | Retrieves the `AEGP_LayerH` associated with a given `AEGP_LayerIDVal` (which is what you get when accessing an effect's layer parameter stream). |
| | <pre lang="cpp">AEGP_GetLayerFromLayerID(<br/>  AEGP_CompH       parent_compH,<br/>  AEGP_LayerIDVal  id,<br/>  AEGP_LayerH      \*layerPH);</pre> |
| `AEGP_GetLayerLabel` | Gets a layer's `AEGP_LabelID`. |
| | <pre lang="cpp">AEGP_GetLayerLabel(<br/>  AEGP_LayerH   layerH,<br/>  AEGP_LabelID  \*labelP);</pre> |
| `AEGP_SetLayerLabel` | Sets a layer's `AEGP_LabelID`. Undoable. |
| | <pre lang="cpp">AEGP_SetLayerLabel(<br/>  AEGP_LayerH   layerH,<br/>  AEGP_LabelID  label);</pre> |
| `AEGP_GetLayerSamplingQuality` | New in CC. Get the sampling quality of a layer. |
| | <pre lang="cpp">AEGP_GetLayerSamplingQuality(<br/>  AEGP_LayerH                layerH,<br/>  AEGP_LayerSamplingQuality  \*label);</pre> |
| | Layer sampling quality is one of the following flags: |
| | - `AEGP_LayerSamplingQual_BILINEAR` |
| | - `AEGP_LayerSamplingQual_BICUBIC` |
| `AEGP_SetLayerSamplingQuality` | New in CC. Sets the sampling quality of a layer (see flag values above). Option is explicitly set on the layer independent of layer quality. |
| | If you want to force it on you must also set the layer quality to `AEGP_LayerQual_BEST` with `AEGP_SetLayerQuality` Otherwise it will only be using the specified layer sampling quality whenever the layer quality is set to `AEGP_LayerQual_BEST`. |
| | Undoable. |
| | <pre lang="cpp">AEGP_SetLayerSamplingQuality(<br/>  AEGP_LayerH                layerH,<br/>  AEGP_LayerSamplingQuality  label);</pre> |
| `AEGP_GetTrackMatteLayer` | New in 23.0. Returns the track matte layer of `layerH`. Returns `NULL` if there is no track matte layer. |
| | <pre lang="cpp">AEGP_GetTrackMatteLayer(<br/>  const AEGP_LayerH          layerH,<br/>  AEGP_LayerH                \*track_matte_layerPH);</pre> |
| `AEGP_SetTrackMatte` | New in 23.0. Sets the track matte layer and track matte type of `layerH`. |
| | **Track Matte Types**: |
| | - `AEGP_TrackMatte_NO_TRACK_MATTE` |
| | - `AEGP_TrackMatte_ALPHA` |
| | - `AEGP_TrackMatte_NOT_ALPHA` |
| | - `AEGP_TrackMatte_LUMA` |
| | - `AEGP_TrackMatte_NOT_LUMA` |
| | Setting the track matte type as `AEGP_TrackMatte_NO_TRACK_MATTE` removes track matte. |
| | <pre lang="cpp">AEGP_SetTrackMatte(<br/>  AEGP_LayerH                layerH,<br/>  const AEGP_LayerH          track_matte_layerH0,<br/>  const AEGP_TrackMatte      track_matte_type);</pre> |
| `AEGP_RemoveTrackMatte` | New in 23.0. Removes the track matte layer of `layerH`. |
| | <pre lang="cpp">AEGP_RemoveTrackMatte(<br/>  AEGP_LayerH                layerH);</pre> |

---

## Layer Creation Notes

All layers created using AEGP calls will start at composition time 0, and have the duration of the composition.

Use `AEGP_SetLayerOffset()` and `AEGP_SetLayerInPointAndDuration()` from [AEGP_LayerSuite9](#aegp_layersuite9) to properly set the layer's time information.

When the layer stretch factor (obtained using `AEGP_GetLayerStretch` in [AEGP_LayerSuite9](#aegp_layersuite9), naturally) is not 100%, the following computation will be needed to yield the correct layer offset:

```cpp
offset = compIn - stretch \* layerIn;
```

---

## Communication With A Layer's Effects

Access the effects applied to a layer. This suite provides access to all parameter data streams.

Use the [Stream Suite](#stream-suite) to work with those streams.

An `AEGP_Effect_RefH` is a reference to an applied effect. An `AEGP_InstalledEffectKey` is a reference to an installed effect, which may or may not be currently applied to anything.

If Foobarocity is applied to a layer twice, there will be two distinct `AEGP_Effect_RefHs`, but they'll both return the same `AEGP_InstalledEffectKey`.

### AEGP_EffectSuite4

| Function | Purpose |
|---|---|
| `AEGP_GetLayerNumEffects` | Get number of effects applied to a layer. |
| | <pre lang="cpp">AEGP_GetLayerNumEffects(<br/>  AEGP_LayerH  layerH,<br/>  A_long       \*num_effectsPL);</pre> |
| `AEGP_GetLayerEffectByIndex` | Retrieves (by index) a reference to an effect applied to the layer. |
| | <pre lang="cpp">AEGP_GetLayerEffectByIndex(<br/>  AEGP_PluginID     aegp_plugin_id,<br/>  AEGP_LayerH       layerH,<br/>  AEGP_EffectIndex  effect_indexL,<br/>  AEGP_EffectRefH   \*effectPH);</pre> |
| `AEGP_GetInstalledKeyFromLayerEffect` | Given an `AEGP_EffectRefH`, retrieves its associated `AEGP_InstalledEffectKey`. |
| | <pre lang="cpp">AEGP_GetInstalledKeyFromLayerEffect(<br/>  AEGP_EffectRefH          effect_refH,<br/>  AEGP_InstalledEffectKey  \*installed_keyP);</pre> |
| `AEGP_GetEffectParamUnionByIndex` | Returns description of effect parameter. |
| | Do not use the value(s) in the ParamDef returned by this function (Use `AEGP_GetNewStreamValue()` instead); it's provided so AEGPs can access parameter defaults, checkbox names, and pop-up strings. |
| | Use `AEGP_GetEffectNumParamStreams()` from [AEGP_StreamSuite5](#aegp_streamsuite5) to get the stream count, useful for determining the maximum `param_index`. The last parameter is optional. |
| | <pre lang="cpp">AEGP_GetEffectParamUnionByIndex(<br/>  AEGP_PluginID     aegp_plugin_id,<br/>  AEGP_EffectRefH   effectH,<br/>  PF_ParamIndex     param_index,<br/>  PF_ParamType      \*param_typeP<br/>  PF_ParamDefUnion  \*uP0);</pre> |
| `AEGP_GetEffectFlags` | Obtains the flags for the given `AEGP_EffectRefH`. |
| | <pre lang="cpp">AEGP_GetEffectFlags(<br/>  AEGP_EffectRefH   effect_refH,<br/>  AEGP_EffectFlags  \*effect_flagsP);</pre> |
| | Flags will be a combination of the following: |
| | - `AEGP_EffectFlags_NONE` |
| | - `AEGP_EffectFlags_ACTIVE` |
| | - `AEGP_EffectFlags_AUDIO_ONLY` |
| | - `AEGP_EffectFlags_AUDIO_TOO` |
| | - `AEGP_EffectFlags_MISSING` |
| `AEGP_SetEffectFlags` | Sets the flags (enumerated above) for the given `AEGP_EffectRefH`, masked by a different set of effect flags. |
| | <pre lang="cpp">AEGP_SetEffectFlags(<br/>  AEGP_EffectRefH   effect_refH,<br/>  AEGP_EffectFlags  mask,<br/>  AEGP_EffectFlags  effect_flags);</pre> |
| `AEGP_ReorderEffect` | Change the order of applied effects (pass the requested index). |
| | <pre lang="cpp">AEGP_ReorderEffect(<br/>  AEGP_EffectRefH  effect_refH,<br/>  A_long           effect_indexL);</pre> |
| `AEGP_EffectCallGeneric` | Call an effect plug-in, and pass it a pointer to any data you like; the effect can modify it. This is how AEGPs communicate with effects. |
| | Pass `PF_Cmd_COMPLETELY_GENERAL` for `effect_cmd`. |
| | <pre lang="cpp">AEGP_EffectCallGeneric(<br/>  AEGP_PluginID    aegp_plugin_id,<br/>  AEGP_EffectRefH  effectH,<br/>  const A_Time     \*timePT,<br/>  PF_Cmd           effect_cmd,<br/>  void             \*extraPV);</pre> |
| `AEGP_DisposeEffect` | Disposes of an `AEGP_EffectRefH`. Use this to dispose of any `AEGP_EffectRefH` returned by After Effects. |
| | <pre lang="cpp">AEGP_DisposeEffect(<br/>  AEGP_EffectRefH  effectH);</pre> |
| `AEGP_ApplyEffect` | Apply an effect to a given layer. Returns the newly-created `AEGP_EffectRefH`. |
| | <pre lang="cpp">AEGP_ApplyEffect(<br/>  AEGP_PluginID            aegp_plugin_id,<br/>  AEGP_LayerH              layerH,<br/>  AEGP_InstalledEffectKey  installed_key,<br/>  AEGP_EffectRefH          \*effect_refPH);</pre> |
| `AEGP_DeleteLayerEffect` | Remove an applied effect. |
| | <pre lang="cpp">AEGP_DeleteLayerEffect(<br/>  AEGP_EffectRefH  effect_refH);</pre> |
| `AEGP_GetNumInstalledEffects` | Returns the count of effects installed in After Effects. |
| | <pre lang="cpp">AEGP_GetNumInstalledEffects(<br/>  A_long  \*num_installed_effectsPL);</pre> |
| `AEGP_GetNextInstalledEffect` | Returns the `AEGP_InstalledEffectKey` of the next installed effect. |
| | Pass `AEGP_InstalledEffectKey_NONE` as the first parameter to obtain the first `AEGP_InstalledEffectKey`. |
| | <pre lang="cpp">AEGP_GetNextInstalledEffect(<br/>  AEGP_InstalledEffectKey  key,<br/>  AEGP_InstalledEffectKey  \*next_keyPH);</pre> |
| `AEGP_GetEffectName` | Get name of the effect. `nameZ` can be up to `AEGP_MAX_EFFECT_NAME_SIZE + 1` long. |
| | <pre lang="cpp">AEGP_GetEffectName(<br/>  AEGP_InstalledEffectKey  installed_key,<br/>  A_char                   \*nameZ);</pre> |
| | Note: use `AEGP_SetStreamName` to change the display name of an effect. |
| `AEGP_GetEffectMatchName` | Get match name of an effect (defined in PiPL). `match_nameZ` up to `AEGP_MAX_EFFECT_MATCH_NAME_SIZE + 1` long. |
| | <pre lang="cpp">AEGP_GetEffectMatchName(<br/>  AEGP_InstalledEffectKey  installed_key,<br/>  A_char                   \*match_nameZ);</pre> |
| | Match names are in 7-bit ASCII. UI names are in the current application runtime encoding; for example, ISO 8859-1 for most languages on Windows. |
| `AEGP_GetEffectCategory` | Menu category of effect. `categoryZ` can be up to `AEGP_MAX_EFFECT_CATEGORY_NAME_SIZE + 1` long. |
| | <pre lang="cpp">AEGP_GetEffectCategory(<br/>  AEGP_InstalledEffectKey  installed_key,<br/>  A_char                   \*categoryZ);</pre> |
| `AEGP_DuplicateEffect` | Duplicates a given `AEGP_EffectRefH`. Caller must dispose of duplicate when finished. |
| | <pre lang="cpp">AEGP_DuplicateEffect(<br/>  AEGP_EffectRefH  orig_effect_refH,<br/>  AEGP_EffectRefH  \*dupe_refPH);</pre> |
| `AEGP_NumEffectMask` | New in CC 2014. How many masks are on this effect? |
| | <pre lang="cpp">AEGP_NumEffectMask(<br/>  AEGP_EffectRefH  effect_refH,<br/>  A_u_long         \*num_masksPL);</pre> |
| `AEGP_GetEffectMaskID` | New in CC 2014. For a given mask_indexL, returns the corresponding `AEGP_MaskIDVal` for use in uniquely identifying the mask. |
| | <pre lang="cpp">AEGP_GetEffectMaskID(<br/>  AEGP_EffectRefH  effect_refH,<br/>  A_u_long         mask_indexL,<br/>  AEGP_MaskIDVal   \*id_valP);</pre> |
| `AEGP_AddEffectMask` | New in CC 2014. Add an effect mask, which may be created using the [Mask Management](#mask-management). |
| | Returns the local stream of the effect ref - useful if you want to add keyframes. |
| | Caller must dispose of `AEGP_StreamRefH` when finished. |
| | Undoable. |
| | <pre lang="cpp">AEGP_AddEffectMask(<br/>  AEGP_EffectRefH  effect_refH,<br/>  AEGP_MaskIDVal   id_val,<br/>  AEGP_StreamRefH  streamPH0);</pre> |
| `AEGP_RemoveEffectMask` | New in CC 2014. Remove an effect mask. |
| | Undoable. |
| | <pre lang="cpp">AEGP_RemoveEffectMask(<br/>  AEGP_EffectRefH  effect_refH,<br/>  AEGP_MaskIDVal   id_val);</pre> |
| `AEGP_SetEffectMask` | New in CC 2014. Set an effect mask on an existing index. |
| | Returns the local stream of the effect ref - useful if you want to add keyframes. |
| | Caller must dispose of `AEGP_StreamRefH` when finished. |
| | Undoable. |
| | <pre lang="cpp">AEGP_SetEffectMask(<br/>  AEGP_EffectRefH  effect_refH,<br/>  A_u_long         mask_indexL,<br/>  AEGP_MaskIDVal   id_val,<br/>  AEGP_StreamRefH  \*streamPH0);</pre> |

---

## Exploiting Effect UI Behavior To Look Cool

Even if you manipulate a layer's effects, its effect controls won't necessarily become visible.

However, if you apply then immediately remove an effect, the layer's effect controls will be made visible.

Tricky, eh?

---

## StreamRefs And EffectRefs

How do you get an AEGP_StreamRef for an effect? Start by getting the effect's `AEGP_EffectRef`, by calling `AEGP_GetNewEffectForEffect()`.

Then call `AEGP_GetNewEffectStreamByIndex()`, say for param index 1, which passes back a parameter stream.

Then call `AEGP_GetNewParentStreamRef()` - voila, your `AEGP_StreamRef` sir!

If you acquire references to an effect's streams, do not dispose of the `AEGP_EffectRefH` until you're done with the streams, or you'll unbalance After Effects' checkout mechanism. Also remember that AEGP_StreamRefHs are opaque; `AEGP_StreamValue2s` are not (entirely).

To get an effect's instance name (as renamed by the user), get the AEGP_StreamRef for the effect itself and call `AEGP_GetStreamName`.

---

## Diving Into Streams

Just about everything in After Effects is a stream. Effect parameters, layers, masks, and shapes are all internally represented by streams. The AEGP API can access nearly every aspect of every stream.

The After Effects timeline can contain numerous object types; each object supports a set of parameters called streams. All streams, regardless of which type of object to which they're attached, are conceptually similar (and handled similarly by After Effects. But the way you access each type of stream varies because of their containment.

A stream, once acquired, represents a value which may change over time. Not all streams \*can* vary over time, and a particular stream may not be time-variant at the time of access.

There are two ways to access the value of a stream. If the stream has keyframes, you can use the [Working With Keyframes](#working-with-keyframes). The values provided won't reflect the influence of expressions. Note: In any expression, the current keyframed value is always available as the variable value.

You can also use `AEGP_GetNewStreamValue` from [AEGP_StreamSuite5](#aegp_streamsuite5), which samples the value of the stream at a particular time. For streams without expressions or keyframes, the time parameter is meaningless, and the function returns what essentially is the constant value of the stream. Use `AEGP_SetStreamValue` (which doesn't take a time as a parameter) to set these streams.

Many StreamSuite functions populate a StreamH, which your AEGP must dispose. when done. After Effects allocates and passes you a copy of the values, not a direct handle to the original value. `AEGP_GetNewLayerStream()` is restricted to streams for which no memory allocation is required to access their values.

---

## Okay, What Did I Just Get?

A stream value is a large union, only one structure of which (depending on the stream type) is populated. Note the similarity to the [PF_ParamDef](../../effect-basics/PF_ParamDef).

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

## Layers

`AEGP_GetLayerStreamValue` is used to access the parameters like anchor point and position, native to almost all layers in AE.

Use `IsStreamLegal` to allow you to determine if that stream type is offered on that layer.

---

## Masks

Since a layer can have multiple masks, access the masks using `AEGP_GetLayerMaskByIndex` from [AEGP_MaskSuite6](#aegp_masksuite6).

Masks don't have streams like layers do; they get their own enumeration. Access their streams using `AEGP_GetNewMaskStream` from [AEGP_StreamSuite5](#aegp_streamsuite5).

---

## Effects

They can have a variable number of streams/parameters, and the order and definition of them is not known when the AEGP is written.

Therefore we cannot offer an enum for selecting them, and instead you must get them by index, hence `GetNewEffectStreamByIndex` from [AEGP_StreamSuite5](#aegp_streamsuite5).

---

## Stream Suite

Access and manipulate the values of a layer's streams. For paint and text streams, use [Dynamic Streams](#aegp_dynamicstreamsuite4) instead.

### AEGP_StreamSuite5

| Function | Purpose |
|---|---|
| `AEGP_IsStreamLegal` | Determines if the given stream is appropriate for the given layer. |
| | <pre lang="cpp">AEGP_IsStreamLegal(<br/>  AEGP_LayerH       layerH,<br/>  AEGP_LayerStream  which_stream,<br/>  A_Boolean*        is_legalP);</pre> |
| `AEGP_CanVaryOverTime` | Given a stream, returns whether or not a stream is time-variant (and can be keyframed). |
| | <pre lang="cpp">AEGP_CanVaryOverTime(<br/>  AEGP_StreamRefH  streamH,<br/>  A_Boolean        \*can_varyPB);</pre> |
| `AEGP_GetValidInterpolations` | Retrieves an `AEGP_KeyInterpolationMask` indicating which interpolation types are valid for the `AEGP_StreamRefH`. |
| | <pre lang="cpp">AEGP_GetValidInterpolations(<br/>  AEGP_StreamRefH            streamH,<br/>  AEGP_KeyInterpolationMask  \*valid_interpP);</pre> |
| | `AEGP_KeyInterpolationMask` will be a combination of the following: |
| | - `AEGP_KeyInterpMask_NONE` |
| | - `AEGP_KeyInterpMask_LINEAR` |
| | - `AEGP_KeyInterpMask_BEZIER` |
| | - `AEGP_KeyInterpMask_HOLD` |
| | - `AEGP_KeyInterpMask_CUSTOM` |
| | - `AEGP_KeyInterpMask_ANY` |
| `AEGP_GetNewLayerStream` | Get a layer's data stream. Plug-in must dispose of `streamPH`. Note that this will not provide keyframe access; use the [AEGP_KeyframeSuite](#aegp_keyframesuite3) instead. |
| | <pre lang="cpp">AEGP_GetNewLayerStream(<br/>  AEGP_PluginID     id,<br/>  AEGP_LayerH       layerH,<br/>  AEGP_LayerStream  which_stream,<br/>  AEGP_StreamRefH   \*streamPH);</pre> |
| | - `AEGP_LayerStream_ANCHORPOINT` |
| | - `AEGP_LayerStream_POSITION` |
| | - `AEGP_LayerStream_SCALE` |
| | - `AEGP_LayerStream_ROTATION` |
| | - `AEGP_LayerStream_ROTATE_Z` |
| | - `AEGP_LayerStream_OPACITY` |
| | - `AEGP_LayerStream_AUDIO` |
| | - `AEGP_LayerStream_MARKER` |
| | - `AEGP_LayerStream_TIME_REMAP` |
| | - `AEGP_LayerStream_ROTATE_X` |
| | - `AEGP_LayerStream_ROTATE_Y` |
| | - `AEGP_LayerStream_ORIENTATION` |
| | Only valid for `AEGP_ObjectType_CAMERA`: |
| | - `AEGP_ObjectType_CAMERA` |
| | - `AEGP_LayerStream_ZOOM` |
| | - `AEGP_LayerStream_DEPTH_OF_FIELD` |
| | - `AEGP_LayerStream_FOCUS_DISTANCE` |
| | - `AEGP_LayerStream_APERTURE` |
| | - `AEGP_LayerStream_BLUR_LEVEL` |
| | - `AEGP_LayerStream_IRIS_SHAPE` |
| | - `AEGP_LayerStream_IRIS_ROTATION` |
| | - `AEGP_LayerStream_IRIS_ROUNDNESS` |
| | - `AEGP_LayerStream_IRIS_ASPECT_RATIO` |
| | - `AEGP_LayerStream_IRIS_DIFFRACTION_FRINGE` |
| | - `AEGP_LayerStream_IRIS_HIGHLIGHT_GAIN` |
| | - `AEGP_LayerStream_IRIS_HIGHLIGHT_THRESHOLD` |
| | - `AEGP_LayerStream_IRIS_HIGHLIGHT_SATURATION` |
| | Only valid for `AEGP_ObjectType_LIGHT`: |
| | - `AEGP_LayerStream_INTENSITY` |
| | - `AEGP_LayerStream_COLOR` |
| | - `AEGP_LayerStream_CONE_ANGLE` |
| | - `AEGP_LayerStream_CONE_FEATHER` |
| | - `AEGP_LayerStream_SHADOW_DARKNESS` |
| | - `AEGP_LayerStream_SHADOW_DIFFUSION` |
| | - `AEGP_LayerStream_LIGHT_FALLOFF_TYPE` |
| | - `AEGP_LayerStream_LIGHT_FALLOFF_START` |
| | - `AEGP_LayerStream_LIGHT_FALLOFF_DISTANCE` |
| | Only valid for `AEGP_ObjectType_AV`: |
| | - `AEGP_LayerStream_ACCEPTS_SHADOWS` |
| | - `AEGP_LayerStream_ACCEPTS_LIGHTS` |
| | - `AEGP_LayerStream_AMBIENT_COEFF` |
| | - `AEGP_LayerStream_DIFFUSE_COEFF` |
| | - `AEGP_LayerStream_SPECULAR_INTENSITY` |
| | - `AEGP_LayerStream_SPECULAR_SHININESS` |
| | - `AEGP_LayerStream_METAL` |
| | - `AEGP_LayerStream_LIGHT_TRANSMISSION` |
| | Only valid for `AEGP_ObjectType_AV`, new in CS6: |
| | - `AEGP_LayerStream_REFLECTION_INTENSITY` |
| | - `AEGP_LayerStream_REFLECTION_SHARPNESS` |
| | - `AEGP_LayerStream_REFLECTION_ROLLOFF` |
| | - `AEGP_LayerStream_TRANSPARENCY_COEFF` |
| | - `AEGP_LayerStream_TRANSPARENCY_ROLLOFF` |
| | - `AEGP_LayerStream_INDEX_OF_REFRACTION` |
| | - `AEGP_LayerStream_EXTRUSION_BEVEL_STYLE` |
| | - `AEGP_LayerStream_EXTRUSION_BEVEL_DIRECTION` |
| | - `AEGP_LayerStream_EXTRUSION_BEVEL_DEPTH` |
| | - `AEGP_LayerStream_EXTRUSION_HOLE_BEVEL_DEPTH` |
| | - `AEGP_LayerStream_EXTRUSION_DEPTH` |
| | - `AEGP_LayerStream_PLANE_CURVATURE` |
| | - `AEGP_LayerStream_PLANE_SUBDIVISION` |
| | Only valid for `LIGHT` and `AV` only: |
| | - `AEGP_LayerStream_CASTS_SHADOWS` |
| | - `AEGP_LayerStream_SOURCE_TEXT` |
| | - `AEGP_LayerStream_BEGIN` = `AEGP_LayerStream_ANCHORPOINT` |
| | - `AEGP_LayerStream_END` = `AEGP_LayerStream_LIGHT_FALLOFF_DISTANCE + 1` |
| | <pre lang="cpp">enum {<br/>  AEGP_LightFalloff_NONE = 0,<br/>  AEGP_LightFalloff_SMOOTH,<br/>  AEGP_LightFalloff_INVERSE_SQUARE_CLAMPED<br/>};<br/><br/>typedef A_u_long AEGP_LightFalloffType;</pre> |
| `AEGP_GetEffectNumParamStreams` | Get number of parameter streams associated with an effect. |
| | <pre lang="cpp">AEGP_GetEffectNumParamStreams(<br/>  AEGP_EffectRefH  effect_refH,<br/>  A_long           \*num_parmsPL);</pre> |
| `AEGP_GetNewEffectStreamByIndex` | Get an effect's parameter stream. Plug-in must dispose of `streamPH`. |
| | <pre lang="cpp">AEGP_GetNewEffectStreamByIndex(<br/>  AEGP_PluginID    id,<br/>  AEGP_EffectRefH  effect_refH,<br/>  PF_ParamIndex    param_index,<br/>  AEGP_StreamRefH  \*streamPH);</pre> |
| `AEGP_GetNewMaskStream` | Get a mask's stream. The stream must be disposed. |
| | Also see the [AEGP_MaskSuite](#aegp_masksuite6) and [AEGP_MaskOutlineSuite](#aegp_maskoutlinesuite3) for additional Mask functions. |
| | - `AEGP_MaskStream_OUTLINE` |
| | - `AEGP_MaskStream_OPACITY` |
| | - `AEGP_MaskStream_FEATHER` |
| | - `AEGP_MaskStream_EXPANSION` |
| | Useful for iteration: |
| | - `AEGP_MaskStream_BEGIN` = `AEGP_MaskStream_OUTLINE` |
| | - `AEGP_MaskStream_END` = `AEGP_MaskStream_EXPANSION + 1` |
| | <pre lang="cpp">AEGP_GetNewMaskStream(<br/>  AEGP_PluginID    aegp_plugin_id,<br/>  AEGP_MaskRefH    mask_refH,<br/>  AEGP_MaskStream  which_stream,<br/>  AEGP_StreamRefH  \*mask_strmPH);</pre> |
| `AEGP_DisposeStream` | Dispose of a stream (do this with all streams passed to the plug-in by these functions). |
| | <pre lang="cpp">AEGP_DisposeStream(<br/>  AEGP_StreamRefH  streamH);</pre> |
| `AEGP_GetNewMaskOpacity` | Get the mask's opacity stream. The stream must be disposed. |
| | <pre lang="cpp">AEGP_GetNewMaskOpacity(<br/>  AEGP_PluginID    aegp_plugin_id,<br/>  AEGP_MaskH       maskH,<br/>  PF_ParamIndex    param_index,<br/>  AEGP_StreamRefH  \*mask_opacity_streamPH);</pre> |
| `AEGP_GetStreamName` | Get name of the stream (localized or forced English). is handle of `A_UTF16Char` (contains null terminated UTF16 string); must be disposed with `AEGP_FreeMemHandle`. |
| | <pre lang="cpp">AEGP_GetStreamName(<br/>  AEGP_PluginID    pluginID,<br/>  AEGP_StreamRefH  streamH,<br/>  A_Boolean        force_englishB,<br/>  AEGP_MemHandle   \*utf_stream_namePH);</pre> |
| | NOTE: if `force_englishB` is `TRUE`, the default name will override any stream renaming which has been done (either programatically, or by the user). |
| `AEGP_GetStreamUnitsText` | Get stream units, formatted as text (localized or forced English); `unitsZ` up to `AEGP_MAX_STREAM_NAME_LEN + 1` long. |
| | <pre lang="cpp">AEGP_GetStreamUnitsText(<br/>  AEGP_StreamRefH  streamH,<br/>  A_Boolean        force_englishB,<br/>  A_char           \*unitsZ);</pre> |
| `AEGP_GetStreamProperties` | Get stream's flags, as well as minimum and maximum values (as floats), if the stream *has* mins and maxes. |
| | StreamFlags values: |
| | - `AEGP_StreamFlag_NONE` |
| | - `AEGP_StreamFlag_HAS_MIN` |
| | - `AEGP_StreamFlag_HAS_MAX` |
| | <pre lang="cpp">AEGP_GetStreamProperties(<br/>  AEGP_StreamRefH   streamH,<br/>  AEGP_StreamFlags  \*flagsP,<br/>  A_FpLong          \*minP0,<br/>  A_FpLong          \*maxP0);</pre> |
| `AEGP_IsStreamTimevarying` | Returns whether or not the stream is affected by expressions. |
| | <pre lang="cpp">AEGP_IsStreamTimevarying(<br/>  AEGP_StreamRefH  streamH,<br/>  A_Boolean        \*is_timevaryPB);</pre> |
| `AEGP_GetStreamType` | Get type (dimension) of a stream. |
| | <pre lang="cpp">AEGP_GetStreamType(<br/>  AEGP_StreamRefH  streamH,<br/>  AEGP_StreamType  \*stream_typeP);</pre> |
| | - `AEGP_StreamType_NO_DATA` |
| | - `AEGP_StreamType_TwoD_SPATIAL` |
| | - `AEGP_StreamType_TwoD` |
| | - `AEGP_StreamType_ThreeD` |
| | - `AEGP_StreamType_ThreeD_SPATIAL` |
| | - `AEGP_StreamType_OneD` |
| | - `AEGP_StreamType_COLOR` |
| | - `AEGP_StreamType_ARB` |
| | - `AEGP_StreamType_MARKER` |
| | - `AEGP_StreamType_LAYER_ID` |
| | - `AEGP_StreamType_MASK_ID` |
| | - `AEGP_StreamType_MASK` |
| | - `AEGP_StreamType_TEXT_DOCUMENT` |
| | NOTE: always returns `ThreeD_Spatial` for position, regardless of whether or not the layer is 3D. |
| `AEGP_GetNewStreamValue` | Get value, at a time you specify, of stream. `valueP` must be disposed by the plug-in. |
| | The `AEGP_LTimeMode` indicates whether the time is in compositions or layer time. |
| | <pre lang="cpp">AEGP_GetNewStreamValue(<br/>  AEGP_PluginID      aegp_plugin_id,<br/>  AEGP_StreamRefH    streamH,<br/>  AEGP_LTimeMode     time_mode,<br/>  const A_Time       \*timePT,<br/>  A_Boolean          pre_exprB,<br/>  AEGP_StreamValue2  \*valueP);</pre> |
| `AEGP_DisposeStreamValue` | Dispose of stream value. Always deallocate values passed to the plug-in. |
| | <pre lang="cpp">AEGP_DisposeStreamValue(<br/>  AEGP_StreamValue2  \*valueP);</pre> |
| `AEGP_SetStreamValue` | Only legal when stream is not time-variant. |
| | <pre lang="cpp">AEGP_SetStreamValue(<br/>  AEGP_PluginID      aegp_plugin_id,<br/>  AEGP_StreamRefH    streamH,<br/>  AEGP_StreamValue2  \*valueP);</pre> |
| `AEGP_GetLayerStreamValue` | NOTE: This convenience function is only valid for streams with primitive data types, and not for `AEGP_ArbBlockVal`, `AEGP_MarkerValH` or `AEGP_MaskOutlineValH`. For these and other complex types, use `AEGP_GetNewStreamValue`, described above. |
| | <pre lang="cpp">AEGP_GetLayerStreamValue(<br/>  AEGP_LayerH       layerH,<br/>  AEGP_LayerStream  which_stream,<br/>  AEGP_LTimeMode    time_mode,<br/>  const A_Time      \*timePT,<br/>  A_Boolean         pre_expB,<br/>  AEGP_StreamVal    \*stream_valP,<br/>  AEGP_StreamType   \*strm_typeP0);</pre> |
| `AEGP_GetExpressionState` | Determines whether expressions are enabled on the given `AEGP_StreamRefH`. |
| | <pre lang="cpp">AEGP_GetExpressionState(<br/>  AEGP_PluginID    aegp_plugin_id,<br/>  AEGP_StreamRefH  streamH,<br/>  A_Boolean        \*enabledPB);</pre> |
| `AEGP_SetExpressionState` | Enables and disables expressions on the given `AEGP_StreamRefH`. |
| | <pre lang="cpp">AEGP_SetExpressionState(<br/>  AEGP_PluginID    aegp_plugin_id,<br/>  AEGP_StreamRefH  streamH,<br/>  A_Boolean        enabledB);</pre> |
| `AEGP_GetExpression` | Obtains the expression's text. Starting in suite version 5 (available in 15.0 and later), this now supports Unicode. |
| | <pre lang="cpp">AEGP_GetExpression(<br/>  AEGP_PluginID    aegp_plugin_id,<br/>  AEGP_StreamRefH  streamH,<br/>  AEGP_MemHandle   \*unicodeHZ);</pre> |
| `AEGP_SetExpression` | Sets the expression's text. Starting in suite version 5 (available in 15.0 and later), this now supports Unicode. |
| | <pre lang="cpp">AEGP_SetExpression(<br/>  AEGP_PluginID      aegp_plugin_id,<br/>  AEGP_StreamRefH    streamH,<br/>  const A_UTF16Char*  expressionP);</pre> |
| `AEGP_DuplicateStreamRef` | Duplicates a given `AEGP_StreamRefH`. Dispose of the duplicate. |
| | <pre lang="cpp">AEGP_DuplicateStreamRef(<br/>  AEGP_PluginID    aegp_plugin_id,<br/>  AEGP_StreamRefH  streamH,<br/>  AEGP_StreamRefH  \*dup_streamPH);</pre> |

---

## Dynamic Streams

`AEGP_DynamicStreamSuite` accesses and manipulates paint and text streams.

Use `AEGP_GetStreamGroupingType` and `AEGP_GetDynamicStreamFlags` to identify the stream before attempting to use functions which only work on certain stream types.

Also note that, often, you can simply use [Stream Suite](#stream-suite) calls to work with dynamic streams. On the other hand, only those functions specific to dynamic streams are in this suite.

### AEGP_DynamicStreamSuite4

| Function | Purpose |
|---|---|
| `AEGP_GetNewStreamRefForLayer` | Retrieves the AEGP_StreamRefH corresponding to the layer. This function is used to initiate a recursive walk of the layer's streams. |
| | <pre lang="cpp">AEGP_GetNewStreamRefForLayer(<br/>  AEGP_PluginID    aegp_plugin_id,<br/>  AEGP_LayerH      layerH,<br/>  AEGP_StreamRefH  \*streamPH);</pre> |
| `AEGP_GetNewStreamRefForMask` | Retrieves the AEGP_StreamRefH corresponding to the mask. |
| | <pre lang="cpp">AEGP_GetNewStreamRefForMask(<br/>  AEGP_PluginID    aegp_plugin_id,<br/>  AEGP_MaskRefH    maskH,<br/>  AEGP_StreamRefH  \*streamPH);</pre> |
| `AEGP_GetStreamDepth` | Retrieves the number of sub-streams associated with the given `AEGP_StreamRefH`. The initial layer has a depth of 0. |
| | <pre lang="cpp">AEGP_GetStreamDepth(<br/>  AEGP_StreamRefH  streamH,<br/>  A_long           \*depthPL);</pre> |
| `AEGP_GetStreamGroupingType` | Retrieves the grouping type for the given `AEGP_StreamRefH`. |
| | <pre lang="cpp">AEGP_GetStreamGroupingType(<br/>  AEGP_StreamRefH          streamH,<br/>  AEGP_StreamGroupingType  \*group_typeP);</pre> |
| | AEGP_StreamGroupingType will be one of the following: |
| | - `AEGP_StreamGroupingType_NONE` |
| | - `AEGP_StreamGroupingType_LEAF` |
| | - `AEGP_StreamGroupingType_NAMED_GROUP` |
| | - `AEGP_StreamGroupingType_INDEXED_GROUP` |
| `AEGP_GetNumStreamsInGroup` | Retrieves the number of streams associated with the given `AEGP_StreamRefH`. |
| | This function will return an error if called with an `AEGP_StreamRefH` with type `AEGP_StreamGroupingType_LEAF`. |
| | <pre lang="cpp">AEGP_GetNumStreamsInGroup(<br/>  AEGP_StreamRefH  streamH,<br/>  A_long           \*num_streamsPL);</pre> |
| `AEGP_GetDynamicStreamFlags` | Retrieves the flags for a given AEGP_StreamRefH. |
| | <pre lang="cpp">AEGP_GetDynamicStreamFlags(<br/>  AEGP_StreamRefH      streamH,<br/>  AEGP_DynStreamFlags  \*flagsP);</pre> |
| | `AEGP_DynStreamFlags` will be one of the following: |
| | - `AEGP_DynStreamFlag_ACTIVE_EYEBALL` means that the stream is available for reading and writing. |
| | - `AEGP_DynStreamFlag_HIDDEN` means that, while the stream is still readable/writable, it may not currently be visible in the UI. |
| | - `AEGP_DynStreamFlag_DISABLED` A read-only flag. Indicates whether the `AEGP_StreamRefH` is grayed out in the UI. |
| | - Note that as of CS5, this flag will not be returned if a parameter is disabled. |
| | - Instead, check `PF_PUI_DISABLED` in [Parameter UI Flags](../../effect-basics/pf_paramdef#parameter-ui-flags). |
| | - `AEGP_DynStreamFlag_ELIDED` A read-only flag. Indicates that the `AEGP_StreamRefH` is read-only, the user never sees it. However, the children are still seen and not indented in the Timeline panel. |
| | - `AEGP_DynStreamFlag_SHOWN_WHEN_EMPTY` New in CS6. A read-only flag. Indicates that this stream group should be shown when empty. |
| | - `AEGP_DynStreamFlag_SKIP_REVEAL_WHEN_UNHIDDEN` New in CS6. A read-only flag. Indicates that this stream property will not be automatically revealed when un-hidden. |
| `AEGP_SetDynamicStreamFlag` | Sets the specified flag for the `AEGP_StreamRefH`. |
| | Note: flags must be set individually. Undoable if `undoableB` is `TRUE`. |
| | <pre lang="cpp">AEGP_SetDynamicStreamFlag(<br/>  AEGP_StreamRefH      streamH,<br/>  AEGP_DynStreamFlags  one_flag,<br/>  A_Boolean            undoableB,<br/>  A_Boolean            setB);</pre> |
| | This call may be used to dynamically show or hide parameters, by setting and clearing `AEGP_DynStreamFlag_HIDDEN`. However, `AEGP_DynStreamFlag_DISABLED` may not be set. |
| `AEGP_GetNewStreamRefByIndex` | Retrieves a sub-stream by index from a given `AEGP_StreamRefH`. Cannot be used on streams of type `AEGP_StreamGroupingType_LEAF`. |
| | <pre lang="cpp">AEGP_GetNewStreamRefByIndex(<br/>  AEGP_PluginID    aegp_plugin_id,<br/>  AEGP_StreamRefH  parent_groupH,<br/>  A_long           indexL,<br/>  AEGP_StreamRefH  \*streamPH);</pre> |
| `AEGP_GetNewStreamRefByMatchname` | Retrieves a sub-stream by match name from a given `AEGP_StreamRefH`. Only legal for `AEGP_StreamGroupingType_NAMED_GROUP`. |
| | <pre lang="cpp">AEGP_GetNewStreamRefByMatchname(<br/>  AEGP_PluginID    aegp_plugin_id,<br/>  AEGP_StreamRefH  parent_groupH,<br/>  const A_char     \*match_nameZ,<br/>  AEGP_StreamRefH  \*streamPH);</pre> |
| | Here are some handy stream names, for which references may be retrieved: |
| | - `AEGP_StreamGroupName_MASK_PARADE` |
| | - `AEGP_StreamGroupName_MASK_ATOM` |
| | - `AEGP_StreamName_MASK_FEATHER` |
| | - `AEGP_StreamName_MASK_OPACITY` |
| | - `AEGP_StreamName_MASK_OFFSET` |
| | - `AEGP_StreamGroupName_EFFECT_PARADE` |
| | - `AEGP_StreamGroupName_LAYER` |
| | - `AEGP_StreamGroupName_AV_LAYER` |
| | - `AEGP_StreamGroupName_TEXT_LAYER` |
| | - `AEGP_StreamGroupName_CAMERA_LAYER` |
| | - `AEGP_StreamGroupName_LIGHT_LAYER` |
| | - `AEGP_StreamGroupName_AUDIO` |
| | - `AEGP_StreamGroupName_MATERIAL_OPTIONS` |
| | - `AEGP_StreamGroupName_TRANSFORM` |
| | - `AEGP_StreamGroupName_LIGHT_OPTIONS` |
| | - `AEGP_StreamGroupName_CAMERA_OPTIONS` |
| `AEGP_DeleteStream` | Deletes the specified stream from a stream grouping. |
| | Note that the caller must still dispose of any `AEGP_StreamRefH` it's already acquired (allocated) via the API. Undoable. |
| | Only valid for children of type `AEGP_StreamGroupingType_INDEXED_GROUP`. |
| | <pre lang="cpp">AEGP_DeleteStream(<br/>  AEGP_StreamRefH  streamH);</pre> |
| | Note: as of 6.5, if a stream is deleted while it or any child stream is selected, the current composition selection will become `NULL`. |
| `AEGP_ReorderStream` | Sets the new index of the specified `AEGP_StreamRefH`. Undoable. |
| | Only valid for children of `AEGP_StreamGroupingType_INDEXED_GROUP`. |
| | The `AEGP_StreamRefH` is updated to refer to the newly-ordered stream. |
| | <pre lang="cpp">AEGP_ReorderStream(<br/>  AEGP_StreamRefH  streamH<br/>  A_long           new_indexL);</pre> |
| `AEGP_DuplicateStream` | Duplicates the specified stream and appends it to the stream group. |
| | Undoable. |
| | Only valid for children of `AEGP_StreamGroupingType_INDEXED_GROUP`. |
| | <pre lang="cpp">AEGP_DuplicateStream(<br/>  AEGP_PluginID    aegp_plugin_id,<br/>  AEGP_StreamRefH  streamH,<br/>  A_long           \*new_indexPL0);</pre> |
| `AEGP_SetStreamName` | Sets the name of the given `AEGP_StreamRefH`. Undoable. nameZ points to a null terminated UTF-16 string. |
| | Only valid for children of `AEGP_StreamGroupingType_INDEXED_GROUP`. |
| | NOTE: If you retrieve the name with force_englishB set to `TRUE`, you will get the canonical, UNchanged name of the stream. |
| | <pre lang="cpp">AEGP_SetStreamName(<br/>  AEGP_StreamRefH    streamH,<br/>  const A_UTF16Char  \*nameZ);</pre> |
| | Note: Use this on an effect stream's group to change the display name of an effect. |
| `AEGP_CanAddStream` | Returns whether or not it is currently possible to add a stream through the API. |
| | <pre lang="cpp">AEGP_CanAddStream(<br/>  AEGP_StreamRefH  group_streamH,<br/>  const A_char     \*match_nameZ,<br/>  A_Boolean        \*can_addPB);</pre> |
| `AEGP_AddStream` | Adds a stream to the specified stream group. Undoable. Only valid for `AEGP_StreamGroupingType_INDEXED_GROUP`. |
| | <pre lang="cpp">AEGP_AddStream(<br/>  AEGP_PluginID    aegp_plugin_id,<br/>  AEGP_StreamRefH  indxd_grp_streamH,<br/>  const A_char     \*match_nameZ,<br/>  AEGP_StreamRefH  \*streamPH0);</pre> |
| `AEGP_GetMatchName` | Retrieves the match name for the specified `AEGP_StreamRefH`. |
| | Note that this may differ from the display name, which can be retrieves using `AEGP_GetStreamName`, in [AEGP_StreamSuite5](#aegp_streamsuite5). |
| | `nameZ` can be up to `AEGP_MAX_STREAM_MATCH_NAME_SIZE` in length. |
| | <pre lang="cpp">AEGP_GetMatchName(<br/>  AEGP_StreamRefH  streamH,<br/>  A_char           \*nameZ);</pre> |
| `AEGP_GetNewParentStreamRef` | Retrieves an `AEGP_StreamRefH` for the parent of the specified `AEGP_StreamRefH`. |
| | <pre lang="cpp">AEGP_GetNewParentStreamRef(<br/>  AEGP_PluginID    plugin_id,<br/>  AEGP_StreamRefH  streamH,<br/>  AEGP_StreamRefH  \*parentPH);</pre> |
| `AEGP_GetStreamIsModified` | Returns whether or not the specified `AEGP_StreamRefH` has been modified. |
| | Note: the same result is available throught the After Effect user interface by typing "UU" with the composition selected. |
| | <pre lang="cpp">AEGP_GetStreamIsModified(<br/>  AEGP_StreamRefH  streamH,<br/>  A_Boolean        \*modifiedPB);</pre> |
| `AEGP_GetStreamIndexInParent` | Retrieves the index of a given stream, relative to its parent stream. |
| | Only valid for children of `AEGP_StreamGroupingType_INDEXED_GROUP` |
| | <pre lang="cpp">AEGP_GetStreamIndexInParent(<br/>  AEGP_StreamRefH  streamH,<br/>  A_long           \*indexPL);</pre> |
| | !!! note |
| | As mentioned *elsewhere*, `AEGP_StreamRefHs` don't persist across function calls. |
| | If streams are re-ordered, added or removed, all `AEGP_StreamRefHs` previously retrieved may be invalidated. |
| `AEGP_IsSeparationLeader` | Valid on leaf streams only. Returns true if this stream is a multidimensional stream that can have its dimensions separated, though they may not be currently separated. |
| | Terminology: A Leader is the stream that can be separated, a Follower is one of N automatic streams that correspond to the N dimensions of the Leader. |
| | A Leader isn't always separated, call `AEGP_AreDimensionsSeparated` to find out if it is. As of CS4, the only stream that is ever separarated is the layer's Position property. |
| | Please *do not* write code assuming that, we anticipate allowing separation of more streams in the future. |
| | <pre lang="cpp">AEGP_IsSeparationLeader(<br/>  AEGP_StreamRefH  streamH,<br/>  A_Boolean        \*leaderPB);</pre> |
| `AEGP_AreDimensionsSeparated` | Methods such as `AEGP_GetNewKeyframeValue` that work on keyframe indices will most definitely *not* work on the Leader property, you will need to retrieve and operate on the Followers explicitly. |
| | <pre lang="cpp">AEGP_AreDimensionsSeparated(<br/>  AEGP_StreamRefH  streamH,<br/>  A_Boolean        \*separatedPB);</pre> |
| `AEGP_SetDimensionsSeparated` | Valid only if `AEGP_IsSeparationLeader()` is `true`. |
| | <pre lang="cpp">AEGP_AreDimensionsSeparated(<br/>  AEGP_StreamRefH  streamH,<br/>  A_Boolean        \*separatedPB);</pre> |
| `AEGP_GetSeparationFollower` | Retrieve the Follower stream corresponding to a given dimension of the Leader stream. |
| | `dimS` can range from `0` to `AEGP_GetStreamValueDimensionality(lea der_streamH) - 1`. |
| | <pre lang="cpp">AEGP_GetSeparationFollower(<br/>  AEGP_StreamRefH  leader_streamH<br/>  A_short          dimS,<br/>  AEGP_StreamRefH  \*follower_streamPH);</pre> |
| `AEGP_IsSeparationFollower` | Valid on leaf streams only. |
| | Returns `true` if this stream is a one dimensional property that represents one of the dimensions of a Leader. |
| | You can retrieve stream from the Leader using `AEGP_GetSeparationFollower()`. |
| | <pre lang="cpp">AEGP_IsSeparationFollower(<br/>  AEGP_StreamRefH  streamH<br/>  A_Boolean        \*followerPB);</pre> |
| `AEGP_GetSeparationLeader` | Valid on separation Followers only, returns the Leader it is part of. |
| | <pre lang="cpp">AEGP_GetSeparationLeader(<br/>  AEGP_StreamRefH  follower_streamH,<br/>  AEGP_StreamRefH  \*leader_streamPH);</pre> |
| `AEGP_GetSeparationDimension` | Valid on separation Followers only, returns which dimension of the Leader it corresponds to. |
| | <pre lang="cpp">AEGP_GetSeparationDimension(<br/>  AEGP_StreamRefH  follower_streamH,<br/>  A_short          \*dimPS);</pre> |

---

## Working With Keyframes

Keyframes make After Effects what it is. AEGPs (and...ssshh, don't tell anyone...effects) can use this suite to add, manipulate and remove keyframes from any keyframe-able stream.

### AEGP_KeyframeSuite3

| Function | Purpose |
|---|---|
| `AEGP_GetStreamNumKFs` | Retrieves the number of keyframes on the given stream. |
| | Returns `AEGP_NumKF_NO_DATA` if the stream is not keyframe-able. |
| | Also, note that a stream without keyframes isn't necessarily constant; it can be altered by expressions. |
| | <pre lang="cpp">AEGP_GetStreamNumKFs(<br/>  AEGP_StreamRefH  streamH,<br/>  A_long           \*num_kfsPL);</pre> |
| `AEGP_GetKeyframeTime` | Retrieves the time of the specified keyframe. |
| | <pre lang="cpp">AEGP_GetKeyframeTime(<br/>  AEGP_StreamRefH     streamH,<br/>  AEGP_KeyframeIndex  index,<br/>  AEGP_LTimeMode      time_mode,<br/>  A_Time              \*timePT);</pre> |
| `AEGP_InsertKeyframe` | Adds a keyframe to the specified stream (at the specified composition or layer time). |
| | Returns the new keyframe's index. |
| | All indexes greater than the new index are now invalid (but you knew that). If there is already a keyframe at that time, the values will be updated. |
| | <pre lang="cpp">AEGP_InsertKeyframe(<br/>  AEGP_StreamRefH     streamH,<br/>  AEGP_LTimeMode      time_mode,<br/>  const A_Time        \*timePT,<br/>  AEGP_KeyframeIndex  \*key_indexP);</pre> |
| `AEGP_DeleteKeyframe` | Deletes the specified keyframe. |
| | <pre lang="cpp">AEGP_DeleteKeyframe(<br/>  AEGP_StreamRefH     streamH,<br/>  AEGP_KeyframeIndex  key_index);</pre> |
| `AEGP_GetNewKeyframeValue` | Creates and populates an `AEGP_StreamValue2` for the stream's value at the time of the keyframe. |
| | The returned `AEGP_StreamValue2` must be disposed of using `AEGP_DisposeStreamValue`. |
| | <pre lang="cpp">AEGP_GetNewKeyframeValue(<br/>  AEGP_PluginID       plugin_id,<br/>  AEGP_StreamRefH     streamH,<br/>  AEGP_KeyframeIndex  key_index,<br/>  AEGP_StreamValue2   \*valueP);</pre> |
| `AEGP_SetKeyframeValue` | Sets the stream's value at the time of the keyframe. |
| | <pre lang="cpp">AEGP_SetKeyframeValue(<br/>  AEGP_StreamRefH          streamH,<br/>  AEGP_KeyframeIndex       index,<br/>  const AEGP_StreamValue2  \*valP);</pre> |
| `AEGP_GetStreamValueDimensionality` | Retrieves the dimensionality of the stream's value. |
| | <pre lang="cpp">AEGP_GetStreamValueDimensionality(<br/>  AEGP_StreamRefH  streamH,<br/>  A_short          \*value_dimPS);</pre> |
| `AEGP_GetStreamTemporalDimensionality` | Retrieves the temporal dimensionality of the stream. |
| | <pre lang="cpp">AEGP_GetStreamTemporalDimensionality(<br/>  AEGP_StreamRefH  streamH,<br/>  A_short          \*t_dimPS);</pre> |
| `AEGP_GetNewKeyframeSpatialTangents` | Returns the `AEGP_StreamValue2s` representing the stream's tangential values at the time of the keyframe. |
| | The returned `AEGP_StreamValue2s` must be disposed of using `AEGP_DisposeStreamValue`. |
| | <pre lang="cpp">AEGP_GetNewKeyframeSpatialTangents(<br/>  AEGP_PluginID       plugin_id,<br/>  AEGP_StreamRefH     streamH,<br/>  AEGP_KeyframeIndex  key_index,<br/>  AEGP_StreamValue2   \*in_tanP0,<br/>  AEGP_StreamValue2   \*out_tanP0);</pre> |
| `AEGP_SetKeyframeSpatialTangents` | Specifies the tangential `AEGP_StreamValue2s` to be used for the stream's value at the time of the keyframe. |
| | The `AEGP_StreamValue2s` passed for in and out tangents are not adopted by After Effects, and must be disposed of using `AEGP_DisposeStreamValue`. |
| | <pre lang="cpp">AEGP_SetKeyframeSpatialTangents(<br/>  AEGP_StreamRefH          streamH,<br/>  AEGP_KeyframeIndex       key_index,<br/>  const AEGP_StreamValue2  \*in_tP0,<br/>  const AEGP_StreamValue2  \*out_tP0);</pre> |
| | NOTE: In `AEGP_KeyframeSuite2` and prior versions, the values returned from this function were wrong when called on an effect point control stream or anchor point. They were not multiplied by the layer size. Now they are. |
| `AEGP_GetKeyframeTemporalEase` | Retrieves the `AEGP_KeyframeEases` associated with the specified dimension of the stream's value at the time of the keyframe. |
| | `dimensionL` ranges from `0` to `(temporal_dimensionality -1)`. |
| | <pre lang="cpp">AEGP_GetKeyframeTemporalEase(<br/>  AEGP_StreamRefH     streamH,<br/>  AEGP_KeyframeIndex  key_index,<br/>  A_long              dimensionL,<br/>  AEGP_KeyframeEase   \*in_easeP0,<br/>  AEGP_KeyframeEase   \*out_easeP0);</pre> |
| | NOTE: the returned ease values must be multiplied by layer height to match the values displayed in the After Effects UI. |
| `AEGP_SetKeyframeTemporalEase` | Specifies the `AEGP_KeyframeEases` to be used for the stream's value at the time of the keyframe. |
| | `dimensionL` ranges from `0` to `(temporal_dimensionality -1)`. |
| | The `AEGP_KeyframeEases` passed are not adopted by After Effects. |
| | <pre lang="cpp">AEGP_SetKeyframeTemporalEase(<br/>  AEGP_StreamRefH           streamH,<br/>  AEGP_KeyframeIndex        key_index,<br/>  A_long                    dimL,<br/>  const AEGP_KeyframeEase   \*in_P0,<br/>  const AEGP_KeyframeEase   \*outP0);</pre> |
| `AEGP_GetKeyframeFlags` | Retrieves the flags currently set for the keyframe. |
| | <pre lang="cpp">AEGP_GetKeyframeFlags(<br/>  AEGP_StreamRefH     streamH,<br/>  AEGP_KeyframeIndex  key_index,<br/>  AEGP_KeyframeFlags  \*flagsP);</pre> |
| | `*flagsP` will be a combination of the following: |
| | - `AEGP_KeyframeFlag_NONE` |
| | - `AEGP_KeyframeFlag_TEMPORAL_CONTINUOUS` |
| | - `AEGP_KeyframeFlag_TEMPORAL_AUTOBEZIER` |
| | - `AEGP_KeyframeFlag_SPATIAL_CONTINUOUS` |
| | - `AEGP_KeyframeFlag_SPATIAL_AUTOBEZIER` |
| | - `AEGP_KeyframeFlag_ROVING` |
| `AEGP_SetKeyframeFlag` | Sets the specified flag for the keyframe. Flags must be set individually. |
| | <pre lang="cpp">AEGP_SetKeyframeFlag(<br/>  AEGP_StreamRefH     streamH,<br/>  AEGP_KeyframeIndex  key_index,<br/>  AEGP_KeyframeFlags  flag,<br/>  A_Boolean           valueB);</pre> |
| `AEGP_GetKeyframeInterpolation` | Retrieves the in and out `AEGP_KeyframeInterpolationTypes` for the specified keyframe. |
| | <pre lang="cpp">AEGP_GetKeyframeInterpolation(<br/>  AEGP_StreamRefH                 streamH,<br/>  AEGP_KeyframeIndex              key_index,<br/>  AEGP_KeyframeInterpolationType  \*inP0,<br/>  AEGP_KeyframeInterpolationType  \*outP0);</pre> |
| | `AEGP_KeyframeInterpolationType` is one of the following: |
| | - `AEGP_KeyInterp_NONE` |
| | - `AEGP_KeyInterp_LINEAR` |
| | - `AEGP_KeyInterp_BEZIER` |
| | - `AEGP_KeyInterp_HOLD` |
| `AEGP_SetKeyframeInterpolation` | Specifies the in and out `AEGP_KeyframeInterpolationTypes` to be used for the given keyframe. |
| | <pre lang="cpp">AEGP_SetKeyframeInterpolation(<br/>  AEGP_StreamRefH                 streamH,<br/>  AEGP_KeyframeIndex              key_index,<br/>  AEGP_KeyframeInterpolationType  in_interp,<br/>  AEGP_KeyframeInterpolationType  out_interp);</pre> |
| `AEGP_StartAddKeyframes` | Informs After Effects that you're going to be adding several keyframes to the specified stream. After Effects will return an allocated opaque `AEGP_AddKeyframesInfoH`, for use with the calls below. |
| | <pre lang="cpp">AEGP_StartAddKeyframes(<br/>  AEGP_StreamRefH         streamH,<br/>  AEGP_AddKeyframesInfoH  \*akPH);</pre> |
| `AEGP_AddKeyframes` | Adds a keyframe to the specified stream at the specified (layer or composition) time. |
| | Note: this doesn't actually do anything to the stream's value. |
| | <pre lang="cpp">AEGP_AddKeyframes(<br/>  AEGP_AddKeyframesInfoH  akH,<br/>  AEGP_LTimeMode          time_mode,<br/>  const A_Time            \*timePT,<br/>  A_long                  \*indexPL);</pre> |
| `AEGP_SetAddKeyframe` | Sets the value of the specified keyframe. |
| | <pre lang="cpp">AEGP_SetAddKeyframe(<br/>  AEGP_AddKeyframesInfoH   akH,<br/>  A_long                   indexL,<br/>  const AEGP_StreamValue2  \*valueP);</pre> |
| `AEGP_EndAddKeyframes` | Tells After Effects you're done adding keyframes. |
| | <pre lang="cpp">AEGP_EndAddKeyframes(<br/>  A_Boolean               addB,<br/>  AEGP_AddKeyframesInfoH  akH);</pre> |

---

## Adding Multiple Keyframes

Each time you call `AEGP_InsertKeyframe()`, the entire stream is added to the undo stack.

If you're adding one or two keyframes, this isn't a problem. However, if you're writing a keyframer, you'll want to do things the \*right* way.

Before you begin adding keyframes, call the (very-appropriately-named) `AEGP_StartAddKeyframes`, passing it an opaque `AEGP_AddKeyframesInfoH`.

For each keyframe to add, call `AEGP_AddKeyframes` to set the time to be used (and get the newly-added keyframe's index), then `AEGP_SetAddKeyframe` to specify the value to be used.

Once you're finished, call `AEGP_EndAddKeyframes` to let know After Effects know it's time to add the changed parameter stream to the undo stack.

---

## Marker Streams

`AEGP_MarkerSuite` allows for direct manipulation of marker data.

### AEGP_MarkerSuite2

| Function | Purpose |
|---|---|
| `AEGP_NewMarker` | Creates a new marker. |
| | <pre lang="cpp">AEGP_NewMarker(<br/>  AEGP_MarkerValP  \*markerPP);</pre> |
| `AEGP_DisposeMarker` | Disposes of a marker. |
| | <pre lang="cpp">AEGP_DisposeMarker(<br/>  AEGP_MarkerValP  markerP);</pre> |
| `AEGP_DuplicateMarker` | Duplicates a marker (didn't see \*that* one coming, eh?). |
| | <pre lang="cpp">AEGP_DuplicateMarker(<br/>  AEGP_MarkerValP  markerP,<br/>  AEGP_MarkerValP  \*new_markerP);</pre> |
| `AEGP_SetMarkerFlag` | Sets a marker flag's value. |
| | <pre lang="cpp">AEGP_SetMarkerFlag(<br/>  AEGP_MarkerValP      markerP,<br/>  AEGP_MarkerFlagType  flagType,<br/>  A_Boolean            valueB);</pre> |
| | Currently, AEGP_MarkerFlagType is one of the following: |
| | - `AEGP_MarkerFlag_NONE` |
| | - `AEGP_MarkerFlag_NAVIGATION` |
| `AEGP_GetMarkerFlag` | Gets the value (see above) of a given `AEGP_MarkerFlagType`. |
| | <pre lang="cpp">AEGP_GetMarkerFlag(<br/>  AEGP_ConstMarkerValP  markerP,<br/>  AEGP_MarkerFlagType   flagType<br/>  A_Boolean             \*valueBP);</pre> |
| `AEGP_GetMarkerString` | Retrieves the UTF-16, NULL-terminated string located in the specified marker field. Must be disposed of by caller using `AEGP_FreeMemHandle`. |
| | <pre lang="cpp">AEGP_GetMarkerString(<br/>  AEGP_PluginID          id,<br/>  AEGP_ConstMarkerValP   markerP,<br/>  AEGP_MarkerStringType  strType,<br/>  AEGP_MemHandle         \*unicodePH);</pre> |
| `AEGP_SetMarkerString` | Sets the specified field of a marker to the provided text. |
| | <pre lang="cpp">AEGP_SetMarkerString(<br/>  AEGP_MarkerValP        markerP,<br/>  AEGP_MarkerStringType  strType,<br/>  const A_u_short        \*unicodeP,<br/>  A_long                 lengthL);</pre> |
| `AEGP_CountCuePointParams` | Returns the number of cue point parameters. |
| | <pre lang="cpp">AEGP_CountCuePointParams(<br/>  AEGP_ConstMarkerValP  markerP,<br/>  A_long                \*paramsLP);</pre> |
| `AEGP_GetIndCuePointParam` | Returns the cue point param at the specified index (which must be between `0` and `(cue point params -1)`. |
| | Returned handles are UTF-16, NULL-terminated strings, and must be disposed of by caller using `AEGP_FreeMemHandle`. |
| | <pre lang="cpp">AEGP_GetIndCuePointParam(<br/>  AEGP_PluginID         id,<br/>  AEGP_ConstMarkerValP  markerP,<br/>  A_long                param_indexL,<br/>  AEGP_MemHandle        \*unicodeKeyPH,<br/>  AEGP_MemHandle        \*uni_ValuePH);</pre> |
| `AEGP_SetIndCuePointParam` | Set the value of an indexed cue point parameter to the specified value. |
| | `key_lengthL` is "number of unicode characters", and `value_lenL` is the length of the provided value. |
| | `unicode_KeyP` and `unicode_ValueP` point to UTF-16 data. |
| | <pre lang="cpp">AEGP_SetIndCuePointParam(<br/>  AEGP_MarkerValP  markerP,<br/>  A_long           param_idxL,<br/>  const A_u_short  \*unicode_KeyP,<br/>  A_long           key_lengthL,<br/>  const A_u_short  \*unicode_ValueP,<br/>  A_long           value_lengthL);</pre> |
| `AEGP_InsertCuePointParam` | Inserts a cue point parameter. |
| | This call is following by `AEGP_SetIndCuePointParam` to actually set the data. |
| | <pre lang="cpp">AEGP_InsertCuePointParam(<br/>  AEGP_MarkerValP  markerP,<br/>  A_long           param_idxL);</pre> |
| `AEGP_DeleteIndCuePointParam` | Deletes the cue point param at the specified index. |
| | <pre lang="cpp">AEGP_DeleteIndCuePointParam(<br/>  AEGP_MarkerValP  markerP,<br/>  A_long           param_idxL);</pre> |
| `AEGP_SetMarkerDuration` | <pre lang="cpp">AEGP_SetMarkerDuration(<br/>  AEGP_MarkerValP  markerP,<br/>  const A_Time     \*durationPT);</pre> |
| `AEGP_GetMarkerDuration` | <pre lang="cpp">AEGP_GetMarkerDuration(<br/>  AEGP_ConstMarkerValP  markerP,<br/>  A_Time                \*durationPT);</pre> |

---

## Mask Management

Access, manipulate, and delete a layer's masks.

### AEGP_MaskSuite6

| Function | Purpose |
|---|---|
| `AEGP_GetLayerNumMasks` | Counts the masks applied to a layer, |
| | <pre lang="cpp">AEGP_GetLayerNumMasks(<br/>  AEGP_LayerH  aegp_layerH,<br/>  A_long       \*num_masksPL);</pre> |
| `AEGP_GetLayerMaskByIndex` | Given a layer handle and mask index, returns a pointer to the mask handle. You must destroy the mask handle by using `AEGP_DisposeMask()`. |
| | <pre lang="cpp">AEGP_GetLayerMaskByIndex(<br/>  AEGP_LayerH    aegp_layerH,<br/>  A_long         mask_indexL,<br/>  AEGP_MaskRefH  \*maskPH);</pre> |
| `AEGP_DisposeMask` | Dispose of a mask handle. |
| | <pre lang="cpp">AEGP_DisposeMask(<br/>  AEGP_MaskRefH  maskH);</pre> |
| `AEGP_GetMaskInvert` | Given a mask handle, determines if the mask is inverted or not. |
| | <pre lang="cpp">AEGP_GetMaskInvert(<br/>  AEGP_MaskRefH  maskH,<br/>  A_Boolean      \*invertPB);</pre> |
| `AEGP_SetMaskInvert` | Sets the inversion state of a mask. |
| | <pre lang="cpp">AEGP_SetMaskInvert(<br/>  AEGP_MaskRefH  mask_refH,<br/>  A_Boolean      invertB);</pre> |
| `AEGP_GetMaskMode` | Given a mask handle, returns the current mode of the mask. |
| | `PF_MaskMode_NONE` does nothing, `PF_MaskMode_ADD` is the default behavior. |
| | - `PF_MaskMode_NONE` |
| | - `PF_MaskMode_ADD` |
| | - `PF_MaskMode_SUBTRACT` |
| | - `PF_MaskMode_INTERSECT` |
| | - `PF_MaskMode_LIGHTEN` |
| | - `PF_MaskMode_DARKEN` |
| | - `PF_MaskMode_DIFFERENCE` |
| | <pre lang="cpp">AEGP_GetMaskMode(<br/>  AEGP_MaskRefH  maskH,<br/>  PF_MaskMode    \*modeP);</pre> |
| `AEGP_SetMaskMode` | Sets the mode of the given mask. |
| | <pre lang="cpp">AEGP_SetMaskMode(<br/>  AEGP_MaskRefH  maskH,<br/>  PF_MaskMode    mode);</pre> |
| `AEGP_GetMaskMotionBlurState` | Retrieves the motion blur setting for the given mask. |
| | <pre lang="cpp">AEGP_GetMaskMotionBlurState(<br/>  AEGP_MaskRefH   mask_refH,<br/>  AEGP_MaskMBlur  \*blur_stateP);</pre> |
| | `AEGP_MaskMBlur` will be one of the following: |
| | - `AEGP_MaskMBlur_SAME_AS_LAYER` |
| | - `AEGP_MaskMBlur_OFF` |
| | - `AEGP_MaskMBlur_ON` |
| `AEGP_SetMaskMotionBlurState` | New in CS6. Sets the motion blur setting for the given mask. |
| | <pre lang="cpp">AEGP_SetMaskMotionBlurState(<br/>  AEGP_MaskRefH   mask_refH,<br/>  AEGP_MaskMBlur  blur_state);</pre> |
| `AEGP_GetMaskFeatherFalloff` | New in CS6. Gets the type of feather falloff for the given mask, either `AEGP_MaskFeatherFalloff_SMOOTH` or `AEGP_MaskFeatherFalloff_LINEAR`. |
| | <pre lang="cpp">AEGP_SetMaskMotionBlurState(<br/>  AEGP_MaskRefH            mask_refH,<br/>  AEGP_MaskFeatherFalloff  \*feather_falloffP);</pre> |
| `AEGP_SetMaskFeatherFalloff` | Sets the type of feather falloff for the given mask. |
| | <pre lang="cpp">AEGP_SetMaskMotionBlurState(<br/>  AEGP_MaskRefH            mask_refH,<br/>  AEGP_MaskFeatherFalloff  feather_falloff);</pre> |
| `AEGP_GetMaskName` | Removed in CS4. Use `AEGP_GetNewStreamRefForMask` and the name functions in the Dynamic Stream Suite instead. |
| `AEGP_SetMaskName` | |
| `AEGP_GetMaskID` | Retrieves the `AEGP_MaskIDVal` for the given `AEGP_MaskRefH`, for use in uniquely identifying the mask. |
| | <pre lang="cpp">AEGP_GetMaskID(<br/>  AEGP_MaskRefH   mask_refH,<br/>  AEGP_MaskIDVal  \*id_valP);</pre> |
| `AEGP_CreateNewMask` | Creates a new mask on the referenced `AEGP_LayerH`, with zero nodes. The new mask's index is returned. |
| | <pre lang="cpp">AEGP_CreateNewMask(<br/>  AEGP_LayerH    layerH,<br/>  AEGP_MaskRefH  \*mask_refPH,<br/>  A_long         \*mask_indexPL0);</pre> |
| `AEGP_DeleteMaskFromLayer` | <pre lang="cpp">AEGP_DeleteMaskFromLayer(<br/>  AEGP_MaskRefH  mask_refH);</pre> |
| | NOTE: As of 6.5, if you delete a mask and it or a child stream is selected, the current selection within the composition will become NULL. |
| `AEGP_GetMaskColor` | Retrieves the color of the specified mask. |
| | <pre lang="cpp">AEGP_GetMaskColor(<br/>  AEGP_MaskRefH  mask_refH,<br/>  AEGP_ColorVal  \*colorP);</pre> |
| `AEGP_SetMaskColor` | Sets the color of the specified mask. |
| | <pre lang="cpp">AEGP_SetMaskColor(<br/>  AEGP_MaskRefH        mask_refH,<br/>  const AEGP_ColorVal  \*colorP);</pre> |
| `AEGP_GetMaskLockState` | Retrieves the lock state of the specified mask. |
| | <pre lang="cpp">AEGP_GetMaskLockState(<br/>  AEGP_MaskRefH  mask_refH,<br/>  A_Boolean      \*is_lockedPB);</pre> |
| `AEGP_SetMaskLockState` | Sets the lock state of the specified mask. |
| | <pre lang="cpp">AEGP_SetMaskLockState(<br/>  AEGP_MaskRefH  mask_refH,<br/>  A_Boolean      lockB);</pre> |
| `AEGP_GetMaskIsRotoBezier` | Returns whether or not the given mask is used as a rotobezier. |
| | <pre lang="cpp">AEGP_GetMaskIsRotoBezier(<br/>  AEGP_MaskRefH  mask_refH,<br/>  A_Boolean      \*is_roto_bezierPB);</pre> |
| `AEGP_SetMaskIsRotoBezier` | Sets whether a given mask is to be used as a rotobezier. |
| | <pre lang="cpp">AEGP_SetMaskIsRotoBezier(<br/>  AEGP_MaskRefH  mask_refH,<br/>  A_Boolean      \*is_roto_bezierPB);</pre> |
| `AEGP_DuplicateMask` | Duplicates a given `AEGP_MaskRefH`. Caller must dispose of duplicate. |
| | <pre lang="cpp">AEGP_DuplicateMask(<br/>  AEGP_MaskRefH  orig_mask_refH,<br/>  AEGP_MaskRefH  \*dupe_mask_refPH);</pre> |

---

## Mask Outlines

The Mask Suite above tells plug-ins about the masks on a layer, but not about the details of those masks.

This is because processing is required on After Effects' part to access the information; the information isn't just lying around.

Plug-ins access that information using this Mask Outline Suite.

### AEGP_MaskOutlineSuite3

| Function | Purpose |
|---|---|
| `AEGP_IsMaskOutlineOpen` | Given an mask outline pointer (obtainable through the [Stream Suite](#stream-suite)), determines if the mask path is open or closed. |
| | <pre lang="cpp">AEGP_IsMaskOutlineOpen(<br/>  AEGP_MaskOutlineVal  \*mask_outlineP,<br/>  A_Boolean            \*openPB);</pre> |
| `AEGP_SetMaskOutlineOpen` | Sets the open state of the given mask outline. |
| | <pre lang="cpp">AEGP_SetMaskOutlineOpen(<br/>  AEGP_MaskOutlineValH  mask_outlineH,<br/>  A_Boolean             openB);</pre> |
| `AEGP_GetMaskOutlineNumSegments` | Given a mask outline pointer, returns the number of segments in the path. |
| | `num_segmentsPL` is the total number of segments `[0...N-1]`. |
| | <pre lang="cpp">AEGP_GetMaskOutlineNumSegments(<br/>  AEGP_MaskOutlineVal  \*mask_outlineP,<br/>  A_long               \*num_segmentsPL);</pre> |
| `AEGP_GetMaskOutlineVertexInfo` | Given a mask outline pointer and a point between 0 and the total number of segments. |
| | For closed mask paths, `vertex[0]` is the same as `vertex[num_segments]`. |
| | <pre lang="cpp">AEGP_GetMaskOutlineVertexInfo(<br/>  AEGP_MaskOutlineVal  \*mask_outlineP,<br/>  A_long               which_pointL,<br/>  AEGP_MaskVertex      \*vertexP);</pre> |
| `AEGP_SetMaskOutlineVertexInfo` | Sets the vertex information for a given index. |
| | Setting vertex 0 is special; its in tangent will actually set the out tangent of the last vertex in the outline. |
| | Of course, `which_pointL` must be valid for the mask outline, or the function will return an error. |
| | <pre lang="cpp">AEGP_SetMaskOutlineVertexInfo(<br/>  AEGP_MaskOutlineValH  mask_outlineH,<br/>  AEGP_VertexIndex      which_pointL,<br/>  AEGP_MaskVertex       \*vertexP);</pre> |
| `AEGP_CreateVertex` | Creates a vertex at index position. |
| | All vertices which formerly had an `AEGP_VertexIndex` of position or greater will have their indices incremented by one. |
| | <pre lang="cpp">AEGP_CreateVertex(<br/>  AEGP_MaskOutlineValH  mask_outlineH,<br/>  AEGP_VertexIndex      position);.</pre> |
| | NOTE: All masks must have at least one vertex. |
| `AEGP_DeleteVertex` | Removes a vertex from a mask. |
| | <pre lang="cpp">AEGP_DeleteVertex(<br/>  AEGP_MaskOutlineValH  mask_outlineH,<br/>  AEGP_VertexIndex      index);</pre> |
| `AEGP_GetMaskOutlineNumFeathers` | New in CS6. |
| | <pre lang="cpp">AEGP_DeleteVertex(<br/>  AEGP_MaskOutlineValH  mask_outlineH,<br/>  A_long                \*num_feathersPL);</pre> |
| `AEGP_GetMaskOutlineFeatherInfo` | New in CS6. |
| | <pre lang="cpp">AEGP_GetMaskOutlineFeatherInfo(<br/>  AEGP_MaskOutlineValH  mask_outlineH,<br/>  AEGP_FeatherIndex     which_featherL,<br/>  AEGP_MaskFeather      \*featherP);</pre> |
| `AEGP_SetMaskOutlineFeatherInfo` | New in CS6. Feather must already exist; use `AEGP_CreateMaskOutlineFeather` first, if needed. |
| | <pre lang="cpp">AEGP_SetMaskOutlineFeatherInfo(<br/>  AEGP_MaskOutlineValH    mask_outlineH,<br/>  AEGP_VertexIndex        which_featherL,<br/>  const AEGP_MaskFeather  \*featherP);</pre> |
| `AEGP_CreateMaskOutlineFeather` | New in CS6. Index of new feather is passed back in `insert_positionP`. |
| | <pre lang="cpp">AEGP_CreateMaskOutlineFeather(<br/>  AEGP_MaskOutlineValH    mask_outlineH,<br/>  const AEGP_MaskFeather  \*featherP0,<br/>  AEGP_FeatherIndex       \*insert_positionP);</pre> |
| `AEGP_DeleteMaskOutlineFeather` | New in CS6. |
| | <pre lang="cpp">AEGP_DeleteMaskOutlineFeather(<br/>  AEGP_MaskOutlineValH  mask_outlineH,<br/>  AEGP_FeatherIndex     index);</pre> |

---

## Mask Feathering

New for CS6, masks can be feathered.

`AEGP_MaskFeather` is defined as follows:

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

## Working With Text Layers

This suite enables AEGPs to get and set the text associated with text layers.

<!-- note:

To get started, retrieve an ``AEGP_TextDocumentH`` by calling ``AEGP_GetLayerStreamValue`` above, and passing ``AEGP_StreamType_TEXT_DOCUMENT`` as the ``AEGP_StreamType``. -->

### AEGP_TextDocumentSuite1

| Function | Purpose |
|---|---|
| `AEGP_GetNewText` | Retrieves the UTF-16, NULL-terminated string used in the `AEGP_TextDocumentH`. |
| | Note: After Effects will allocate the `AEGP_MemHandle`; your plug-in must dispose of it when done using `AEGP_FreeMemHandle`. |
| | <pre lang="cpp">AEGP_GetNewText(<br/>  AEGP_PluginID       id,<br/>  AEGP_TextDocumentH  text_docH,<br/>  AEGP_MemHandle      \*unicodePH);</pre> |
| `AEGP_SetText` | Specifies the text to be used by the `AEGP_TextDocumentH`. |
| | <pre lang="cpp">AEGP_SetText(<br/>  AEGP_TextDocumentH  text_docH,<br/>  const A_u_short     \*unicodePS,<br/>  long                lengthL);</pre> |

---

## Working With Text Outlines

The `AEGP_TextLayerSuite` provides access to the actual outlines of the text used by text layers.

Once you have a path, you can manipulate it with [PF_PathQuerySuite1](../../effect-details/working-with-paths#pf_pathquerysuite1) and [PF_PathDataSuite](../../effect-details/working-with-paths#pf_pathdatasuite).

### AEGP_TextLayerSuite1

| Function | Purpose |
|---|---|
| `AEGP_GetNewTextOutlines` | Allocates and returns a handle to the `AEGP_TextOutlinesHs` associated with the specified layer. |
| | `outlinesPH` will be NULL if there are no `AEGP_TextOutlinesHs` associated with `layerH` (in other words, if it's not a text layer). |
| | <pre lang="cpp">AEGP_GetNewTextOutlines(<br/>  AEGP_LayerH         layerH,<br/>  const A_Time        \*layer_timePT,<br/>  AEGP_TextOutlinesH  \*outlinesPH);</pre> |
| `AEGP_DisposeTextOutlines` | Dispose of those outlines we allocated on your behalf! |
| | <pre lang="cpp">AEGP_DisposeTextOutlines(<br/>  AEGP_TextOutlinesH  outlinesH);</pre> |
| `AEGP_GetNumTextOutlines` | Retrieves the number of text outlines for the layer. |
| | <pre lang="cpp">AEGP_GetNumTextOutlines(<br/>  AEGP_TextOutlinesH  outlinesH,<br/>  A_long              \*num_otlnsPL);</pre> |
| `AEGP_GetIndexedTextOutline` | Returns a `PF_PathOutlinePtr` for the specifed text outline. |
| | <pre lang="cpp">AEGP_GetIndexedTextOutline(<br/>  AEGP_TextOutlinesH  outlinesH,<br/>  A_long              path_indexL,<br/>  PF_PathOutlinePtr   \*pathPP);</pre> |

---

## Utility Functions

The Utility suite supplies error message handling, AEGP version checking and access to the undo stack.

Everything you need to keep After Effects and your plug-in tidy.

---

### AEGP_UtilitySuite6

| Function | Purpose |
|---|---|
| `AEGP_ReportInfo` | Displays dialog with name of the AEGP followed by the string passed. |
| | <pre lang="cpp">AEGP_ReportInfo(<br/>  AEGP_PluginID  aegp_plugin_id,<br/>  const A_char   \*info_stringZ);</pre> |
| `AEGP_ReportInfoUnicode` | New in CC. Displays dialog with name of the AEGP followed by the unicode string passed. |
| | <pre lang="cpp">AEGP_ReportInfoUnicode(<br/>  AEGP_PluginID      aegp_plugin_id,<br/>  const A_UTF16Char  \*info_stringP);</pre> |
| `AEGP_GetDriverSpecVersion` | Returns version of `AEGPDriver` plug-in (use to determine supported features). |
| | <pre lang="cpp">AEGP_GetDriverSpecVersion(<br/>  A_short  \*major_versionPS,<br/>  A_short  \*minor_versionPS);</pre> |
| `AEGP_StartQuietErrors` | Silences errors. Must be balanced with `AEGP_EndQuietErrors`. |
| | The `AEGP_ErrReportState` is an opaque structure private to After Effects. |
| | <pre lang="cpp">AEGP_StartQuietErrors(<br/>  AEGP_ErrReportState  \*err_stateP);</pre> |
| `AEGP_EndQuietErrors` | Re-enables errors. |
| | <pre lang="cpp">AEGP_EndQuietErrors(<br/>  AEGP_ErrReportState  \*err_stateP)</pre> |
| `AEGP_StartUndoGroup` | Add action(s) to the undo queue. The user may undo any actions between this and `AEGP_EndUndoGroup()`. |
| | The `undo_nameZ` will appear in the edit menu. |
| | <pre lang="cpp">AEGP_StartUndoGroup(<br/>  const A_char  \*undo_nameZ);</pre> |
| `AEGP_EndUndoGroup` | Ends the undo list. |
| | <pre lang="cpp">AEGP_EndUndoGroup();</pre> |
| `AEGP_RegisterWithAEGP` | Returns an AEGP_PluginID, which effect plug-ins can then use in calls to many functions throughout the AEGP API. |
| | Effects should only call this function once, during `PF_Cmd_GLOBAL_SETUP`, and save the `AEGP_PluginID` for later use. |
| | The first parameter can be any value, and the second parameter should be the plug-in's match name. |
| | <pre lang="cpp">AEGP_RegisterWithAEGP(<br/>  AEGP_GlobalRefcon  global_refcon,<br/>  const A_char       \*plugin_nameZ,<br/>  AEGP_PluginID      \*plugin_id);</pre> |
| `AEGP_GetMainHWND` | Retrieves After Effects' HWND; useful when displaying your own dialog on Windows. |
| | If you don't use After Effects' HWND, your modal dialog will not prevent interaction with the windows behind, and pain will ensue. |
| | <pre lang="cpp">AEGP_GetMainHWND(<br/>  void  \*main_hwnd);</pre> |
| `AEGP_ShowHideAllFloaters` | Toggles whether or not floating palettes are displayed. |
| | Use this with care; users get twitchy when you unexpectedly change the UI on them. |
| | <pre lang="cpp">AEGP_ShowHideAllFloaters(<br/>  A_Boolean  include_tool_palB);</pre> |
| `AEGP_PaintPalGetForeColor` | Retrieves the foreground color from the paint palette. |
| | <pre lang="cpp">AEGP_PaintPalGetForeColor(<br/>  AEGP_ColorVal  \*fore_colorP);</pre> |
| `AEGP_PaintPalGetBackColor` | Retrieves the background color from the paint palette. |
| | <pre lang="cpp">AEGP_PaintPalGetBackColor(<br/>  AEGP_ColorVal  \*back_colorP);</pre> |
| `AEGP_PaintPalSetForeColor` | Sets the foreground color in the paint palette. |
| | <pre lang="cpp">AEGP_PaintPalSetForeColor(<br/>  const AEGP_ColorVal  \*fore_colorP);</pre> |
| `AEGP_PaintPalSetBackColor` | Sets the background color in the paint palette. |
| | <pre lang="cpp">AEGP_PaintPalSetBackColor(<br/>  const AEGP_ColorVal  \*back_colorP);</pre> |
| `AEGP_CharPalGetFillColor` | Retrieves the fill color from the character palette. |
| | <pre lang="cpp">AEGP_CharPalGetFillColor(<br/>  A_Boolean     \*is_fcolor_definedPB,<br/>  AEGP_ColorVal \*fill_colorP);</pre> |
| `AEGP_CharPalGetStrokeColor` | Retrieves the stroke color from the character palette. |
| | <pre lang="cpp">AEGP_CharPalGetStrokeColor(<br/>  A_Boolean      \*is_scolor_definedPB,<br/>  AEGP_ColorVal  \*stroke_colorP);</pre> |
| `AEGP_CharPalSetFillColor` | Sets the fill color in the character palette. |
| | <pre lang="cpp">AEGP_CharPalSetFillColor(<br/>  const AEGP_ColorVal  \*fill_colorP);</pre> |
| `AEGP_CharPalSetStrokeColor` | Sets the stroke color in the character palette. |
| | <pre lang="cpp">AEGP_CharPalSetStrokeColor(<br/>  const AEGP_ColorVal  \*stroke_colorP);</pre> |
| `AEGP_CharPalIsFillColorUIFrontmost` | Returns whether or not the fill color is frontmost. If it isn't, the stroke color is frontmost. |
| | <pre lang="cpp">AEGP_CharPalIsFillColorUIFrontmost(<br/>  A_Boolean  \*is_fcolor_selectedPB);</pre> |
| `AEGP_ConvertFpLongToHSFRatio` | Returns an `A_Ratio` interpretation of the given `A_FpLong`. Useful for horizontal scale factor interpretation. |
| | <pre lang="cpp">AEGP_ConvertFpLongToHSFRatio(<br/>  A_FpLong  numberF,<br/>  A_Ratio   \*ratioPR);</pre> |
| `AEGP_ConvertHSFRatioToFpLong` | Returns an `A_FpLong` interpretation of the given `A_Ratio`. Useful for horizontal scale factor interpretation. |
| | <pre lang="cpp">AEGP_ConvertHSFRatioToFpLong(<br/>  A_Ratio    ratioR,<br/>  A_FpLong  \*numberPF);</pre> |
| `AEGP_CauseIdleRoutinesToBeCalled` | This routine is safe to call from threads other than the main thread. It is asynchronous and will return before the idle handler is called. |
| | The suite functions to get this function pointer are not thread safe; save it off in the main thread for use by the child thread. |
| | <pre lang="cpp">AEGP_CauseIdleRoutinesToBeCalled(void);</pre> |
| `AEGP_GetSuppressInteractiveUI` | Returns whether After Effects is running without a user interface. |
| | <pre lang="cpp">AEGP_GetSuppressInteractiveUI(<br/>  A_Boolean  \*ui_is_suppressedPB);</pre> |
| `AEGP_WriteToOSConsole` | Sends a string to the OS console. |
| | <pre lang="cpp">AEGP_WriteToOSConsole(<br/>  const A_char  \*textZ);</pre> |
| `AEGP_WriteToDebugLog` | Writes a message to the debug log, or to the OS command line if After Effects was launched with the "-debug" option. |
| | <pre lang="cpp">AEGP_WriteToDebugLog(<br/>  const A_char  \*subsystemZ,<br/>  const A_char  \*event_typeZ,<br/>  const A_char  \*infoZ);</pre> |
| `AEGP_GetLastErrorMessage` | Retrieves the last error message displayed to the user, and its associated error number. Pass in the size of the character buffer to be returned. |
| | <pre lang="cpp">AEGP_GetLastErrorMessage(<br/>  A_long  buffer_size,<br/>  A_char  \*error_string,<br/>  A_Err   \*error_num);</pre> |
| `AEGP_IsScriptingAvailable` | Returns `TRUE` if scripting is available to the plug-in. |
| | <pre lang="cpp">AEGP_IsScriptingAvailable(<br/>  A_Boolean  \*outAvailablePB);</pre> |
| `AEGP_ExecuteScript` | Have After Effects execute a script. The script passed in can be in either UTF-8 or the current application encoding (if platform_encodingB is passed in as TRUE). |
| | The two out arguments are optional. The value of the last line of the script is what is passed back in outResultPH0. |
| | <pre lang="cpp">AEGP_ExecuteScript(<br/>  AEGP_PluginID inPlugin_id,<br/>  const A_char \*inScriptZ,<br/>  const A_Boolean platform_encodingB,<br/>  AEGP_MemHandle \*outResultPH0,<br/>  AEGP_MemHandle \*outErrStringPH0);</pre> |
| `AEGP_HostIsActivated` | Returns `TRUE` if the user has successfully activated After Effects. |
| | <pre lang="cpp">AEGP_HostIsActivated(<br/>  A_Boolean  \*is_activatedPB);</pre> |
| `AEGP_GetPluginPlatformRef` | On macOS, returns a `CFBundleRef` to your Mach-O plug-in, or NULL for a CFM plug-in. |
| | Always returns `NULL` on Windows (you can use an OS-specific entry point to capture your DLLInstance). |
| | <pre lang="cpp">AEGP_GetPluginPlatformRef(<br/>  AEGP_PluginID  plug_id,<br/>  void           \*plat_refPPV);</pre> |
| `AEGP_UpdateFontList` | Rescans the system font list. |
| | <pre lang="cpp">AEGP_UpdateFontList();</pre> |
| `AEGP_GetPluginPaths` | New in CC. Returns a particular path associated with the plug-in: |
| | - `AEGP_GetPathTypes_PLUGIN` - (Not Implemented) The path to the location of the plug-in itself. |
| | - `AEGP_GetPathTypes_USER_PLUGIN` -The suite specific location of user specific plug-ins. |
| | - `AEGP_GetPathTypes_ALLUSER_PLUGIN` - The suite specific location of plug-ins shared by all users. |
| | - `AEGP_GetPathTypes_APP` - The After Effects .exe or .app location. Not plug-in specific. |
| | <pre lang="cpp">AEGP_GetPluginPaths(<br/>  AEGP_PluginID      aegp_plugin_id,<br/>  AEGP_GetPathTypes  path_type<br/>  AEGP_MemHandle     \*unicode_pathPH);</pre> |

---

## Persistent Data Suite

Plug-ins have read and write access to persistent data in After Effects' preferences. AEGPs may add and manage their own persistent data using the following suite. The data entries are accessed by (section key, value key) pairs. It is recommended that plug-ins use their matchname as their section key, or as a prefix if using multiple section keys.

The available data types are `A_long`, `A_FpLong`, strings, and `void*`. `A_FpLongs` are stored with 6 decimal places of precision. There is no provision for specifying a different precision. String data supports the full 8-bit space. Only 0x00 is reserved for string ending. This makes them ideal for storing UTF-8 encoded strings, ISO 8859-1, and plain ASCII. Both section keys and value keys are of this type. For data types not represented by the simple data types provided, use data handles containing your custom data. void\* unstructured data allows you to store any kind of data. You must pass in a size in bytes along with the data.

When calling any of the functions to retrieve the value of a key, if a given key is not found, the default value is both written to the blob and returned as the value; if no default is provided, a blank value will be written and returned.

Note that this data is stored in the application's preferences, not in the project. As of 6.5, there is no way to store opaque AEGP-generated data in an After Effects project.

After Effects can handle plug-ins which change the preferences during their application; it checks the in-RAM copy of the prefs before acting upon pref-able settings, rather than relying on the saved prefs. It's like we \*planned* this, or something!

### AEGP_PersistentDateSuite4

| Function | Purpose |
|---|---|
| `AEGP_GetApplicationBlob` | Obtains the handle to all persistent application data. Modifying this will modify the application. |
| | The `AEGP_PersistentType` parameter is new in CC, and should be set to one of the following: |
| | - `AEGP_PersistentType_MACHINE_SPECIFIC` |
| | - `AEGP_PersistentType_MACHINE_INDEPENDENT` |
| | - `AEGP_PersistentType_MACHINE_INDEPENDENT_RENDER` |
| | - `AEGP_PersistentType_MACHINE_INDEPENDENT_OUTPUT` |
| | - `AEGP_PersistentType_MACHINE_INDEPENDENT_COMPOSITION` |
| | - `AEGP_PersistentType_MACHINE_SPECIFIC_TEXT` |
| | - `AEGP_PersistentType_MACHINE_SPECIFIC_PAINT` |
| | <pre lang="cpp">AEGP_GetApplicationBlob(<br/>  AEGP_PersistentType   blob_type,<br/>  AEGP_PersistentBlobH  \*blobPH);</pre> |
| `AEGP_GetNumSections` | Obtains the number of sections in the application blob. |
| | <pre lang="cpp">AEGP_GetNumSections(<br/>  AEGP_PersistentBlobH  blobH,<br/>  A_long                \*num_sectionPL);</pre> |
| `AEGP_GetSectionKeyByIndex` | Obtains the key at the given index. |
| | <pre lang="cpp">AEGP_GetSectionKeyByIndex(<br/>  AEGP_PersistentBlobH  blobH,<br/>  A_long                section_index,<br/>  A_long                max_section_size,<br/>  A_char                \*section_keyZ);</pre> |
| `AEGP_DoesKeyExist` | Returns whether or not a given key/value pair exists with the blob. |
| | <pre lang="cpp">AEGP_DoesKeyExist(<br/>  AEGP_PersistentBlobH  blobH,<br/>  const A_char          \*section_keyZ,<br/>  const A_char          \*value_keyZ,<br/>  A_Boolean             \*existsPB);</pre> |
| `AEGP_GetNumKeys` | Retrieves the number of value keys in the section. |
| | <pre lang="cpp">AEGP_GetNumKeys(<br/>  AEGP_PersistentBlobH  blobH,<br/>  const A_char          \*section_keyZ,<br/>  A_long                \*num_keysPL);</pre> |
| `AEGP_GetValueKeyByIndex` | Retrieves the value of the indexed key. |
| | <pre lang="cpp">AEGP_GetValueKeyByIndex(<br/>  AEGP_PersistentBlobH  blobH,<br/>  const A_char          \*section_keyZ,<br/>  A_long                key_index,<br/>  A_long                max_key_size,<br/>  A_char                \*value_keyZ);</pre> |

:::note
For the functions below, if a given key is not found, the default value is both written to the blob and returned as the value; if no default is provided, a blank value will be written and returned.
:::

| Function | Purpose |
|---|---|
| `AEGP_GetDataHandle` | Obtains the value associated with the given section's key. If using in-memory data structures, watch for endian issues. |
| | <pre lang="cpp">AEGP_GetDataHandle(<br/>  AEGP_PluginID         plugin_id,<br/>  AEGP_PersistentBlobH  blobH,<br/>  const A_char          \*section_keyZ,<br/>  const A_char          \*value_keyZ,<br/>  AEGP_MemHandle        defaultH0,<br/>  AEGP_MemHandle        \*valuePH);</pre> |
| `AEGP_GetData` | Obtains the data located at a given section's value. |
| | <pre lang="cpp">AEGP_GetData(<br/>  AEGP_PersistentBlobH  blobH,<br/>  const A_char          \*section_keyZ,<br/>  const A_char          \*value_keyZ,<br/>  A_u_long              data_sizeLu,<br/>  const void            \*defaultPV0,<br/>  void                  \*bufPV);</pre> |
| `AEGP_GetString` | Obtains the string for a given section key's value (and indicates its length in `actual_szLu0`). |
| | <pre lang="cpp">AEGP_GetString(<br/>  AEGP_PersistentBlobH  blobH,<br/>  const A_char          \*section_keyZ,<br/>  const A_char          \*value_keyZ,<br/>  const A_char          \*defaultZ0,<br/>  A_u_long              buf_sizeLu,<br/>  char                  \*bufZ,<br/>  A_u_long              \*actual_szLu0);</pre> |
| `AEGP_GetLong` | Obtains the `A_long` associated with a given section key's value. |
| | <pre lang="cpp">AEGP_GetLong(<br/>  AEGP_PersistentBlobH  blobH,<br/>  const A_char          \*section_keyZ,<br/>  const A_char          \*value_keyZ,<br/>  A_long                defaultL,<br/>  A_long                \*valuePL);</pre> |
| `AEGP_GetFpLong` | Obtains the `A_FpLong` associated with a given section key's value. |
| | <pre lang="cpp">AEGP_GetFpLong(<br/>  AEGP_PersistentBlobH  blobH,<br/>  const A_char          \*section_keyZ,<br/>  const A_char          \*value_keyZ,<br/>  A_FpLong              defaultF,<br/>  A_FpLong              \*valuePF);</pre> |
| `AEGP_GetTime` | New in CC. Obtains the `A_Time` associated with a given section key's value. |
| | <pre lang="cpp">AEGP_GetTime(<br/>  AEGP_PersistentBlobH  blobH,<br/>  const A_char          \*section_keyZ,<br/>  const A_char          \*value_keyZ,<br/>  const A_Time          \*defaultPT0,<br/>  A_Time                \*valuePT);</pre> |
| `AEGP_GetARGB` | New in CC. Obtains the `PF_PixelFloat` associated with a given section key's value. |
| | <pre lang="cpp">AEGP_GetARGB(<br/>  AEGP_PersistentBlobH  blobH,<br/>  const A_char          \*section_keyZ,<br/>  const A_char          \*value_keyZ,<br/>  const PF_PixelFloat   \*defaultP0,<br/>  PF_PixelFloat         \*valueP);</pre> |
| `AEGP_SetDataHandle` | Sets the given section key's value to the handle passed in. |
| | <pre lang="cpp">AEGP_SetDataHandle(<br/>  AEGP_PersistentBlobH  blobH,<br/>  const A_char          \*section_keyZ,<br/>  const A_char          \*value_keyZ,<br/>  const AEGP_MemHandle  valueH);</pre> |
| `AEGP_SetData` | Sets the given section key's value to the data contained in `dataPV`. |
| | <pre lang="cpp">AEGP_SetData(<br/>  AEGP_PersistentBlobH  blobH,<br/>  const A_char          \*section_keyZ,<br/>  const A_char          \*value_keyZ,<br/>  A_u_long              data_sizeLu,<br/>  const void            \*dataPV);</pre> |
| `AEGP_SetString` | Sets the given section key's string to `strZ`. |
| | <pre lang="cpp">AEGP_SetString(<br/>  AEGP_PersistentBlobH  blobH,<br/>  const A_char          \*section_keyZ,<br/>  const A_char          \*value_keyZ,<br/>  const A_char          \*strZ);</pre> |
| `AEGP_SetLong` | Sets the given section key's value to `valueL`. |
| | <pre lang="cpp">AEGP_SetLong(<br/>  AEGP_PersistentBlobH  blobH,<br/>  const A_char          \*section_keyZ,<br/>  const A_char          \*value_keyZ,<br/>  A_long                valueL);</pre> |
| `AEGP_SetFpLong` | Sets the given section key's value to `valueF`. |
| | <pre lang="cpp">AEGP_SetFpLong(<br/>  AEGP_PersistentBlobH  blobH,<br/>  const A_char          \*section_keyZ,<br/>  const A_char          \*value_keyZ,<br/>  A_FpLong              valueF);</pre> |
| `AEGP_SetTime` | New in CC. Sets the given section key's value to `valuePT`. |
| | <pre lang="cpp">AEGP_SetTime(<br/>  AEGP_PersistentBlobH  blobH,<br/>  const A_char          \*section_keyZ,<br/>  const A_char          \*value_keyZ,<br/>  A_Time                \*valuePT);</pre> |
| `AEGP_SetARGB` | New in CC. Sets the given section key's value to `valueP`. |
| | <pre lang="cpp">AEGP_SetARGB(<br/>  AEGP_PersistentBlobH  blobH,<br/>  const A_char          \*section_keyZ,<br/>  const A_char          \*value_keyZ,<br/>  PF_PixelFloat         \*valueP);</pre> |
| `AEGP_DeleteEntry` | Removes the given section's value from the blob. |
| | <pre lang="cpp">AEGP_DeleteEntry(<br/>  AEGP_PersistentBlobH  blobH,<br/>  const A_char          \*section_keyZ,<br/>  const A_char          \*value_keyZ);</pre> |
| `AEGP_GetPrefsDirectory` | Get the path to the folder containing After Effects' preference file. |
| | The path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`. |
| | <pre lang="cpp">AEGP_GetPrefsDirectory(<br/>  AEGP_MemHandle  \*unicode_pathPH);</pre> |

---

## Color Management

We've provided a function so AEGPs can obtain information on After Effects' current color management settings.

### AEGP_ColorSettingsSuite5

| Function | Purpose |
|---|---|
| `AEGP_GetBlendingTables` | Retrieves the current opaque `PF_EffectBlendingTables`, for use with `AEGP_TransferRect`. |
| | <pre lang="cpp">AEGP_GetBlendingTables(<br/>  PR_RenderContextH        render_contextH,<br/>  PF_EffectBlendingTables  \*blending_tables);</pre> |
| `AEGP_DoesViewHaveColorSpaceXform` | Returns whether there is a colorspace transform applied to the current item view. |
| | <pre lang="cpp">AEGP_DoesViewHaveColorSpaceXform(<br/>  AEGP_ItemViewP  viewP,<br/>  A_Boolean       \*has_xformPB);</pre> |
| `AEGP_XformWorkingToViewColorSpace` | Changes the view colorspace of the source to be the working colorspace of the destination. Source and destination can be the same. |
| | <pre lang="cpp">AEGP_XformWorkingToViewColorSpace(<br/>  AEGP_ItemViewP  viewP,<br/>  AEGP_WorldH     srcH,<br/>  AEGP_WorldH     dstH);</pre> |
| `AEGP_GetNewWorkingSpaceColorProfile` | Retrieves the opaque current working space ICC profile. Must be disposed. |
| | The "New" in the name does not indicate that you're making up a new profile; rather, it's part of our function naming standard; anything with "New" in the name allocates something which the caller must dispose. |
| | <pre lang="cpp">AEGP_GetNewWorkingSpaceColorProfile(<br/>  AEGP_PluginID   aegp_plugin_id,<br/>  AEGP_MemHandle  \*icc_profPH);</pre> |
| `AEGP_GetNewColorProfileFromICCProfile` | Retrieves a new `AEGP_ColorProfileP` from After Effects, representing the specified ICC profile. The caller must dispose of the returned `AEGP_ColorProfileP` using `AEGP_DisposeColorProfile()`. |
| | <pre lang="cpp">AEGP_GetNewColorProfile FromICCProfile(<br/>  AEGP_PluginID       aegp_plugin_id,<br/>  A_long              icc_sizeL,<br/>  const void          \*icc_dataPV,<br/>  AEGP_ColorProfileP  \*profilePP);</pre> |
| `AEGP_GetNewICCProfileFromColorProfile` | Retrieves a new ICC profile (stored in an `AEGP_MemHandle`) representing the specified color profile. |
| | Returned `AEGP_MemHandle` must be disposed by the caller. |
| | <pre lang="cpp">AEGP_GetNewICCProfile FromColorProfile(<br/>  AEGP_PluginID            plugin_id,<br/>  AEGP_ConstColorProfileP  profileP,<br/>  AEGP_MemHandle           \*profilePH);</pre> |
| `AEGP_GetNewColorProfileDescription` | Returns a textual description of the specified color profile. Text will be a null-terminated UTF16 string, which must be disposed by the caller. |
| | <pre lang="cpp">AEGP_GetNewColorProfileDescription(<br/>  AEGP_PluginID            aegp_plugin_id,<br/>  AEGP_ConstColorProfileP  profileP,<br/>  AEGP_MemHandle           \*unicode_descPH);</pre> |
| `AEGP_DisposeColorProfile` | Disposes of a color profile, obtained using other functions in this suite. |
| | <pre lang="cpp">AEGP_DisposeColorProfile(<br/>  AEGP_ColorProfileP  profileP);</pre> |
| `AEGP_GetColorProfileApproximateGamma` | Returns a floating point number approximating the gamma setting used by the specified color profile. |
| | <pre lang="cpp">AEGP_GetColorProfileApproximateGamma(<br/>  AEGP_ConstColorProfileP  profileP,<br/>  A_FpShort                \*approx_gammaP);</pre> |
| `AEGP_IsRGBColorProfile` | Returns whether the specified color profile is RGB. |
| | <pre lang="cpp">AEGP_IsRGBColorProfile(<br/>  AEGP_ConstColorProfileP  profileP,<br/>  A_Boolean                \*is_rgbPB);</pre> |
| `AEGP_SetWorkingColorSpace` | Sets the working space to the passed color profile. |
| | <pre lang="cpp">AEGP_SetWorkingColorSpace(<br/>  AEGP_PluginID            aegp_plugin_id,<br/>  AEGP_CompH               compH,<br/>  AEGP_ConstColorProfileP  color_profileP);</pre> |
| `AEGP_IsOCIOColorManagementUsed` | Check if the current project is using the OCIO color engine or not. |
| | Returns `true` if current project uses OCIO color managed mode. |
| | <pre lang="cpp">AEGP_IsOCIOColorManagementUsed(<br/>  AEGP_PluginID  aegp_plugin_id,<br/>  A_Boolean      \*is_OCIOColorManagementUsedPB);</pre> |
| `AEGP_GetOCIOConfigurationFile` | Returns the OCIO configuration file used by the project. |
| | Returned config_filePH is a handle of `A_UTF16Char` containing a null terminated UTF16String which holds the OCIO Configuration file. The returned string must be disposed by the caller. |
| | <pre lang="cpp">AEGP_GetOCIOConfigurationFile(<br/>  AEGP_PluginID   aegp_plugin_id,<br/>  AEGP_MemHandle  \*congif_filePH);</pre> |
| `AEGP_GetOCIOConfigurationFilePath` | Returns the absolute file path to the OCIO configuration used by the project |
| | The returned config_filePH is a handle of `A_UTF16Char` containing a null terminated UTF16String which holds the absolute path to OCIO Configuration file. The returned string must be disposed by the caller. |
| | <pre lang="cpp">AEGP_GetOCIOConfigurationFilePath(<br/>  AEGP_PluginID   aegp_plugin_id,<br/>  AEGP_MemHandle  \*congif_filePH);</pre> |
| `AEGPD_GetOCIOWorkingColorSpace` | Returns the working color space of the project in OCIO mode. |
| | The returned ocio_working_colorspaceH is a handle of `A_UTF16Char` containing a null terminated UTF16String which holds the string specifying the working color space. The returned string must be disposed by the caller. |
| | <pre lang="cpp">AEGPD_GetOCIOWorkingColorSpace(<br/>  AEGP_PluginID   aegp_plugin_id,<br/>  AEGP_MemHandle  \*ocio_working_colorspaceH);</pre> |
| `AEGPD_GetOCIODisplayColorSpace` | Returns the Display and View transforms used by the project. |
| | The returned ocio_displayH and ocio_viewH are handles of `A_UTF16Char` containing a null terminated UTF16String specifying the Display and View transforms used at project level. The returned strings must be disposed by the caller. |
| | <pre lang="cpp">AEGPD_GetOCIODisplayColorSpace(<br/>  AEGP_PluginID   aegp_plugin_id,<br/>  AEGP_MemHandle  \*ocio_displayH,<br/>  AEGP_MemHandle  \*ocio_viewH);</pre> |

---

## Render Suites

Since we introduced the AEGP API, we've been asked to provide functions for retrieving rendered frames.

These function suites allows you to do just that.

First, specify what you want rendered in the [AEGP_RenderOptionsSuite4](#aegp_renderoptionssuite4) or [AEGP_LayerRenderOptionsSuite1](#aegp_layerrenderoptionssuite1).

Then do the rendering with [AEGP_RenderSuite4](#aegp_rendersuite4).

### AEGP_RenderOptionsSuite4

| Function | Purpose |
|---|---|
| `AEGP_NewFromItem` | Returns the `AEGP_RenderOptionsH` associated with a given `AEGP_ItemH`. |
| | If there are no options yet specified, After Effects passes back an `AEGP_RenderOptionsH` with render time set to 0, time step set to the current frame duration, field render set to `PF_Field_FRAME`, and the depth set to the highest resolution specified within the item. |
| | <pre lang="cpp">AEGP_NewFromItem(<br/>  AEGP_PluginID        plugin_id,<br/>  AEGP_ItemH           itemH,<br/>  AEGP_RenderOptionsH  \*optionsPH);</pre> |
| `AEGP_Duplicate` | Duplicates an `AEGP_RenderOptionsH` into `copyPH`. |
| | <pre lang="cpp">AEGP_Duplicate(<br/>  AEGP_PluginID        plugin_id,<br/>  AEGP_RenderOptionsH  optionsH,<br/>  AEGP_RenderOptionsH  \*copyPH);</pre> |
| `AEGP_Dispose` | Deletes an `AEGP_RenderOptionsH`. |
| | <pre lang="cpp">AEGP_Dispose(<br/>  AEGP_RenderOptionsH  optionsH);</pre> |
| `AEGP_SetTime` | Sets the render time of an `AEGP_RenderOptionsH`. |
| | <pre lang="cpp">AEGP_SetTime(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  A_Time               time);</pre> |
| `AEGP_GetTime` | Retrieves the render time of the given `AEGP_RenderOptionsH`. |
| | <pre lang="cpp">AEGP_GetTime(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  A_Time               \*timeP);</pre> |
| `AEGP_SetTimeStep` | Specifies the time step (duration of a frame) for the referenced `AEGP_RenderOptionsH`. |
| | <pre lang="cpp">AEGP_SetTimeStep(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  A_Time               time_step);</pre> |
| `AEGP_GetTimeStep` | Retrieves the time step (duration of a frame) for the given `AEGP_RenderOptionsH`. |
| | <pre lang="cpp">AEGP_GetTimeStep(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  A_Time               \*timePT);</pre> |
| `AEGP_SetFieldRender` | Specifies the field settings for the given `AEGP_RenderOptionsH`. |
| | <pre lang="cpp">AEGP_SetFieldRender(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  PF_Field             field_render);</pre> |
| `AEGP_GetFieldRender` | Retrieves the field settings for the given `AEGP_RenderOptionsH`. |
| | <pre lang="cpp">AEGP_GetFieldRender(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  PF_Field             \*field_renderP);</pre> |
| `AEGP_SetWorldType` | Specifies the AEGP_WorldType of the output of a given `AEGP_RenderOptionsH`. |
| | <pre lang="cpp">AEGP_SetWorldType(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  AEGP_WorldType       type);</pre> |
| | `AEGP_WorldType` will be either `AEGP_WorldType_8` or `AEGP_WorldType_16` |
| `AEGP_GetWorldType` | Retrieves the `AEGP_WorldType` of the given `AEGP_RenderOptionsH`. |
| | <pre lang="cpp">AEGP_GetWorldType(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  AEGP_WorldType       \*typeP);</pre> |
| `AEGP_SetDownsampleFactor` | Specifies the downsample factor (with independent horizontal and vertical settings) for the given `AEGP_RenderOptionsH`. |
| | <pre lang="cpp">AEGP_SetDownsampleFactor(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  A_short              x,<br/>  A_short              y);</pre> |
| `AEGP_GetDownsampleFactor` | Retrieves the downsample factor for the given `AEGP_RenderOptionsH`. |
| | <pre lang="cpp">AEGP_GetDownsampleFactor(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  A_short              \*xP,<br/>  A_short              \*yP);</pre> |
| `AEGP_SetRegionOfInterest` | Specifies the region of interest sub-rectangle for the given `AEGP_RenderOptionsH`. |
| | <pre lang="cpp">AEGP_SetRegionOfInterest(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  const A_LRect        \*roiP)</pre> |
| `AEGP_GetRegionOfInterest` | Retrieves the region of interest sub-rectangle for the given `AEGP_RenderOptionsH`. |
| | <pre lang="cpp">AEGP_GetRegionOfInterest(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  A_LRect              \*roiP);</pre> |
| `AEGP_SetMatteMode` | Specifies the `AEGP_MatteMode` for the given `AEGP_RenderOptionsH`. |
| | <pre lang="cpp">AEGP_SetMatteMode(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  AEGP_MatteMode       mode);</pre> |
| | `AEGP_MatteMode` will be one of the following: |
| | - `AEGP_MatteMode_STRAIGHT` |
| | - `AEGP_MatteMode_PREMUL_BLACK` |
| | - `AEGP_MatteMode_PREMUL_BG_COLOR` |
| `AEGP_GetMatteMode` | Retrieves the `AEGP_MatteMode` for the given `AEGP_RenderOptionsH`. |
| | <pre lang="cpp">AEGP_GetMatteMode(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  AEGP_MatteMode       \*modeP);</pre> |
| `AEGP_GetChannelOrder` | Gets the `AEGP_ChannelOrder` for the given `AEGP_RenderOptionsH`. |
| | `AEGP_ChannelOrder` will be either `AEGP_ChannelOrder_ARGB` or `AEGP_ChannelOrder_BGRA`. |
| | <pre lang="cpp">AEGP_GetChannelOrder(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  AEGP_ChannelOrder    \*orderP);</pre> |
| | Factoid: this was added to facilitate live linking with Premiere Pro. |
| `AEGP_SetChannelOrder` | Sets the `AEGP_ChannelOrder` of the `AEGP_RenderOptionsH`. |
| | <pre lang="cpp">AEGP_SetChannelOrder(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  AEGP_ChannelOrder    order);</pre> |
| `AEGP_GetRenderGuideLayers` | Passes back a boolean that is true if the render guide layers setting is on. |
| | <pre lang="cpp">AEGP_GetRenderGuideLayers)(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  A_Boolean            \*will_renderPB);</pre> |
| `AEGP_SetRenderGuideLayers` | Specify whether or not to render guide layers. |
| | <pre lang="cpp">AEGP_SetRenderGuideLayers)(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  A_Boolean            render_themB);</pre> |
| `AEGP_GetRenderQuality` | Get the render quality of the render queue item. |
| | Quality can be either `AEGP_ItemQuality_DRAFT` or `AEGP_ItemQuality_BEST`. |
| | <pre lang="cpp">AEGP_GetRenderQuality(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  AEGP_ItemQuality     \*qualityP);</pre> |
| `AEGP_SetRenderQuality` | Set the render quality of the render queue item. |
| | <pre lang="cpp">AEGP_GetRenderQuality(<br/>  AEGP_RenderOptionsH  optionsH,<br/>  AEGP_ItemQuality     quality);</pre> |

### AEGP_LayerRenderOptionsSuite1

:::note
New in 13.0
:::

| Function | Purpose |
|---|---|
| `AEGP_NewFromLayer` | Returns the `AEGP_LayerRenderOptionsH` associated with a given `AEGP_LayerH`. |
| | Render time is set to the layer's current time, time step is set to layer's frame duration, ROI to the layer's nominal bounds, and EffectsToRender to "all". |
| | `optionsPH` must be disposed by calling code. |
| | <pre lang="cpp">AEGP_NewFromLayer(<br/>  AEGP_PluginID             plugin_id,<br/>  AEGP_LayerH               layerH,<br/>  AEGP_LayerRenderOptionsH  \*optionsPH);</pre> |
| `AEGP_NewFromUpstreamOfEffect` | Returns the `AEGP_LayerRenderOptionsH` from the layer associated with a given `AEGP_EffectRefH`. |
| | Render time is set to the layer's current time, time step is set to layer's frame duration, ROI to the layer's nominal bounds, and EffectsToRender to the index of `effectH`. |
| | `optionsPH` must be disposed by calling code. |
| | <pre lang="cpp">AEGP_NewFromUpstreamOfEffect(<br/>  AEGP_PluginID             plugin_id,<br/>  AEGP_EffectRefH           effectH,<br/>  AEGP_LayerRenderOptionsH  \*optionsPH);</pre> |
| `AEGP_Duplicate` | Duplicates an `AEGP_LayerRenderOptionsH` into `copyPH`. |
| | <pre lang="cpp">AEGP_Duplicate(<br/>  AEGP_PluginID             plugin_id,<br/>  AEGP_LayerRenderOptionsH  optionsH,<br/>  AEGP_LayerRenderOptionsH  \*copyPH);</pre> |
| `AEGP_Dispose` | Deletes an `AEGP_LayerRenderOptionsH`. |
| | <pre lang="cpp">AEGP_Dispose(<br/>  AEGP_LayerRenderOptionsH  optionsH);</pre> |
| `AEGP_SetTime` | Sets the render time of an `AEGP_LayerRenderOptionsH`. |
| | <pre lang="cpp">AEGP_SetTime(<br/>  AEGP_LayerRenderOptionsH  optionsH,<br/>  A_Time                    time);</pre> |
| `AEGP_GetTime` | Retrieves the render time of the given `AEGP_LayerRenderOptionsH`. |
| | <pre lang="cpp">AEGP_GetTime(<br/>  AEGP_LayerRenderOptionsH  optionsH,<br/>  A_Time                    \*timeP);</pre> |
| `AEGP_SetTimeStep` | Specifies the time step (duration of a frame) for the referenced `AEGP_LayerRenderOptionsH`. |
| | <pre lang="cpp">AEGP_SetTimeStep(<br/>  AEGP_LayerRenderOptionsH  optionsH,<br/>  A_Time                    time_step);</pre> |
| `AEGP_GetTimeStep` | Retrieves the time step (duration of a frame) for the given `AEGP_LayerRenderOptionsH`. |
| | <pre lang="cpp">AEGP_GetTimeStep(<br/>  AEGP_LayerRenderOptionsH  optionsH,<br/>  A_Time                    \*timePT);</pre> |
| `AEGP_SetWorldType` | Specifies the AEGP_WorldType of the output of a given `AEGP_LayerRenderOptionsH`. |
| | <pre lang="cpp">AEGP_SetWorldType(<br/>  AEGP_LayerRenderOptionsH  optionsH,<br/>  AEGP_WorldType            type);</pre> |
| | `AEGP_WorldType` will be either `AEGP_WorldType_8` or `AEGP_WorldType_16` |
| `AEGP_GetWorldType` | Retrieves the AEGP_WorldType of the given `AEGP_LayerRenderOptionsH`. |
| | <pre lang="cpp">AEGP_GetWorldType(<br/>  AEGP_LayerRenderOptionsH  optionsH,<br/>  AEGP_WorldType            \*typeP);</pre> |
| `AEGP_SetDownsampleFactor` | Specifies the downsample factor (with independent horizontal and vertical settings) for the given `AEGP_LayerRenderOptionsH`. |
| | <pre lang="cpp">AEGP_SetDownsampleFactor(<br/>  AEGP_LayerRenderOptionsH  optionsH,<br/>  A_short                   x,<br/>  A_short                   y);</pre> |
| `AEGP_GetDownsampleFactor` | Retrieves the downsample factor for the given `AEGP_LayerRenderOptionsH`. |
| | <pre lang="cpp">AEGP_GetDownsampleFactor(<br/>  AEGP_LayerRenderOptionsH  optionsH,<br/>  A_short                   \*xP,<br/>  A_short                   \*yP);</pre> |
| `AEGP_SetMatteMode` | Specifies the AEGP_MatteMode for the given `AEGP_LayerRenderOptionsH`. |
| | <pre lang="cpp">AEGP_SetMatteMode(<br/>  AEGP_LayerRenderOptionsH  optionsH,<br/>  AEGP_MatteMode            mode);</pre> |
| | AEGP_MatteMode will be one of the following: |
| | - `AEGP_MatteMode_STRAIGHT` |
| | - `AEGP_MatteMode_PREMUL_BLACK` |
| | - `AEGP_MatteMode_PREMUL_BG_COLOR` |
| `AEGP_GetMatteMode` | Retrieves the AEGP_MatteMode for the given `AEGP_LayerRenderOptionsH`. |
| | <pre lang="cpp">AEGP_GetMatteMode(<br/>  AEGP_LayerRenderOptionsH  optionsH,<br/>  AEGP_MatteMode            \*modeP);</pre> |

### AEGP_RenderSuite4

| Function | Purpose |
|---|---|
| `AEGP_RenderAndCheckoutFrame` | Retrieves an `AEGP_FrameReceiptH` (not the actual pixels) for the frame requested. Check in this receipt using `AEGP_CheckinFrame` to release memory. |
| | Create the `AEGP_RenderOptionsH` using the [AEGP_RenderOptionsSuite4](#aegp_renderoptionssuite4). |
| | Optionally, the AEGP can pass a function to be called by After Effects if the user cancels the current render, as well as a refcon (constant reference to opaque data) for use during that function. |
| | <pre lang="cpp">AEGP_RenderAndCheckoutFrame(<br/>  AEGP_RenderOptionsH             optionsH,<br/>  AEGP_RenderSuiteCheckForCancel  cancel_functionP0,<br/>  AEGP_CancelRefcon               cancel_function_refconP0,<br/>  AEGP_FrameReceiptH              \*receiptPH);</pre> |
| `AEGP_RenderAndCheckoutLayerFrame` | New in CC 2014. This allows frame checkout of a layer with effects applied at non-render time. |
| | This is useful for an operation that requires the frame, for example, when a button is clicked and it is acceptable to wait for a moment while it is rendering. |
| | Note: Since it is not asynchronous, it will not solve the general problem where custom UI needs to draw based on the frame. |
| | Retrieves an `AEGP_FrameReceiptH` (not the actual pixels) for the layer frame requested. Check in this receipt using `AEGP_CheckinFrame` to release memory. |
| | Create the `AEGP_LayerRenderOptionsH` using `AEGP_NewFromUpstreamOfEffect()`, in [AEGP_LayerRenderOptionsSuite1](#aegp_layerrenderoptionssuite1). |
| | You can actually use `AEGP_NewFromLayer()` to get other layer param's layers with their effects applied. However, be careful. If you do it in your effect A, and there's an effect B on the other layer that does the same thing during rendering, you'd create an infinite loop. If you're not doing it for render purposes then it could be okay. |
| | Optionally, the AEGP can pass a function to be called by After Effects if the user cancels the current render, as well as a refcon (constant reference to opaque data) for use during that function. |
| | <pre lang="cpp">AEGP_RenderAndCheckoutLayerFrame(<br/>  AEGP_LayerRenderOptionsH        optionsH,<br/>  A_Boolean                       render_plain_layer_frameB,<br/>  AEGP_RenderSuiteCheckForCancel  cancel_functionP0,<br/>  AEGP_CancelRefcon               cancel_function_refconP0,<br/>  AEGP_FrameReceiptH              \*receiptPH);</pre> |
| `AEGP_CheckinFrame` | Call this function as soon as your AEGP is done accessing the frame. |
| | After Effects makes caching decisions based on which frames are checked out, so don't hog them! |
| | <pre lang="cpp">AEGP_CheckinFrame(<br/>  AEGP_FrameReceiptH  receiptH);</pre> |
| `AEGP_GetReceiptWorld` | Retrieves the pixels (`AEGP_WorldH`) associated with the referenced `AEGP_FrameReceiptH`. |
| | <pre lang="cpp">AEGP_GetReceiptWorld(<br/>  AEGP_FrameReceiptH  receiptH,<br/>  AEGP_WorldH         \*worldPH);</pre> |
| `AEGP_GetRenderedRegion` | Retrieves an `A_LRect` containing the region of the `AEGP_FrameReceiptH's` `AEGP_WorldH` that has already been rendered. |
| | Remember that it's possible for only those portions of an image that have been changed to be rendered, so it's important to be able to check whether or not that includes the portion you need. |
| | <pre lang="cpp">AEGP_GetRenderedRegion(<br/>  AEGP_FrameReceiptH  receiptH,<br/>  A_LRect             \*regionP);</pre> |
| `AEGP_IsRenderedFrameSufficient` | Given two sets of `AEGP_RenderOptionsH`, After Effects will return `TRUE` if the already-rendered pixels are still valid for the proposed `AEGP_RenderOptionsH`. |
| | <pre lang="cpp">AEGP_IsRenderedFrameSufficient(<br/>  AEGP_RenderOptionsH  rendered_optionsH,<br/>  AEGP_RenderOptionsH  proposed_optionsH,<br/>  A_Boolean            \*is_sufficientPB);</pre> |
| `AEGP_RenderNewItemSoundData` | Obtains an `AEGP_ItemH's` audio at the given time, of the given duration, in the given format. |
| | The plug-in must dispose of the returned `AEGP_SoundDataH` (which may be NULL if no audio is available). |
| | <pre lang="cpp">AEGP_RenderNewItemSoundData(<br/>  AEGP_ItemH                  itemH,<br/>  const A_Time                \*start_timePT,<br/>  const A_Time                \*durationPT,<br/>  const AEGP_SoundDataFormat  \*formatP,<br/>  AEGP_SoundDataH             \*new_dataPH);</pre> |
| | NOTE: This function, if called as part of `AEGP_ItemSuite2`, provides a render interruptible using mouse clicks, unlike the version published here in `AEGP_RenderSuite`. |
| `AEGP_GetCurrentTimestamp` | Retrieves the current `AEGP_TimeStamp` of the project. |
| | The `AEGP_TimeStamp` is updated whenever an item is touched in a way that affects rendering. |
| | <pre lang="cpp">AEGP_GetCurrentTimestamp(<br/>  AEGP_TimeStamp  \*time_stampP);</pre> |
| `AEGP_HasItemChangedSinceTimestamp` | Returns whether the video of an AEGP_ItemH has changed since the given `AEGP_TimeStamp`. |
| | Note: this does not track changes in audio. |
| | <pre lang="cpp">AEGP_HasItemChangedSinceTimestamp(<br/>  AEGP_ItemH            itemH,<br/>  const A_Time          \*start_timeP,<br/>  const A_Time          \*durationP,<br/>  const AEGP_TimeStamp  \*time_stampP,<br/>  A_Boolean             \*changedPB);</pre> |
| `AEGP_IsItemWorthwhileToRender` | Returns whether this frame would be worth rendering externally and checking in to the cache. |
| | A speculative renderer should check this twice: before sending the frame out to render and when it is complete, before calling `AEGP_NewPlatformWorld()` and checking in. |
| | This function is to be used with `AEGP_HasItemChangedSinceTimestamp()`, not alone. |
| | <pre lang="cpp">AEGP_IsItemWorthwhileToRender(<br/>  AEGP_RenderOptionsH   roH,<br/>  const AEGP_TimeStamp  \*time_stampP,<br/>  A_Boolean             \*worthwhilePB);</pre> |
| `AEGP_CheckinRenderedFrame` | Provide a rendered frame (`AEGP_PlatformWorldH`) to After Effects, which adopts it. |
| | `ticksL` is the approximate time required to render the frame. |
| | <pre lang="cpp">AEGP_CheckinRenderedFrame(<br/>  AEGP_RenderOptionsH    roH,<br/>  const AEGP_TimeStamp*  time_stampP,<br/>  A_u_long               ticksL,<br/>  AEGP_PlatformWorldH    imageH);</pre> |
| `AEGP_GetReceiptGuid` | New in CS6. Retrieve a GUID for a rendered frame. The memory handle passed back must be disposed. |
| | <pre lang="cpp">AEGP_GetReceiptGuid(<br/>  AEGP_FrameReceiptH  receiptH,<br/>  AEGP_MemHandle      \*guidMH)</pre> |

---

## The AEGP_World As We Know It

`AEGP_Worlds` are the common format used throughout the AEGP APIs to describe frames of pixels.

### AEGP_WorldSuite3

| Function | Purpose |
|---|---|
| `AEGP_New` | Returns an allocated, initialized `AEGP_WorldH`. |
| | <pre lang="cpp">AEGP_New(<br/>  AEGP_PluginID   plugin_id,<br/>  AEGP_WorldType  type,<br/>  A_long          widthL,<br/>  A_long          heightL,<br/>  AEGP_WorldH     \*worldPH);</pre> |
| `AEGP_Dispose` | Disposes of an `AEGP_WorldH`. Use this on every world you allocate. |
| | <pre lang="cpp">AEGP_Dispose(<br/>  AEGP_WorldH  worldH);</pre> |
| `AEGP_GetType` | Returns the type of a given `AEGP_WorldH`. |
| | <pre lang="cpp">AEGP_GetType(<br/>  AEGP_WorldH worldH,<br/>  AEGP_WorldType \*typeP);</pre> |
| | AEGP_WorldType will be one of the following: |
| | - `AEGP_WorldType_8` |
| | - `AEGP_WorldType_16` |
| | - `AEGP_WorldType_32` |
| `AEGP_GetSize` | Returns the width and height of the given `AEGP_WorldH`. |
| | <pre lang="cpp">AEGP_GetSize(<br/>  AEGP_WorldH  worldH,<br/>  A_long       \*widthPL,<br/>  A_long       \*heightPL);</pre> |
| `AEGP_GetRowBytes` | Returns the rowbytes for the given `AEGP_WorldH`. |
| | <pre lang="cpp">AEGP_GetRowBytes(<br/>  AEGP_WorldH  worldH,<br/>  A_u_long     \*row_bytesPL);</pre> |
| `AEGP_GetBaseAddr8` | Returns the base address of the `AEGP_WorldH` for use in pixel iteration functions. |
| | Will return an error if used on a non-8bpc world. |
| | <pre lang="cpp">AEGP_GetBaseAddr8(<br/>  AEGP_WorldH  worldH,<br/>  PF_Pixel8    \*base_addrP);</pre> |
| `AEGP_GetBaseAddr16` | Returns the base address of the `AEGP_WorldH` for use in pixel iteration functions. |
| | Will return an error if used on a non-16bpc world. |
| | <pre lang="cpp">AEGP_GetBaseAddr16(<br/>  AEGP_WorldH  worldH,<br/>  PF_Pixel16   \*base_addrP);</pre> |
| `AEGP_GetBaseAddr32` | Returns the base address of the `AEGP_WorldH` for use in pixel iteration functions. |
| | Will return an error if used on a non-32bpc world. |
| | <pre lang="cpp">AEGP_GetBaseAddr32(<br/>  AEGP_WorldH    worldH,<br/>  PF_PixelFloat  \*base_addrP);</pre> |
| `AEGP_FillOutPFEffectWorld` | Populates and returns a PF_EffectWorld representing the given `AEGP_WorldH`, for use with numerous pixel processing callbacks. |
| | NOTE: This does not give your plug-in ownership of the world referenced; destroy the source `AEGP_WorldH` only if you allocated it. It just fills out the provided `PF_EffectWorld` to point to the same pixel buffer. |
| | <pre lang="cpp">AEGP_FillOutPFEffectWorld(<br/>  AEGP_WorldH     worldH,<br/>  PF_EffectWorld  \*pf_worldP);</pre> |
| `AEGP_FastBlur` | Performs a fast blur on a given `AEGP_WorldH`. |
| | <pre lang="cpp">AEGP_FastBlur(<br/>  A_FpLong      radiusF,<br/>  PF_ModeFlags  mode,<br/>  PF_Quality    quality,<br/>  AEGP_WorldH   worldH);</pre> |
| `AEGP_NewPlatformWorld` | Creates a new `AEGP_PlatformWorldH` (a pixel world native to the execution platform). |
| | <pre lang="cpp">AEGP_NewPlatformWorld(<br/>  AEGP_PluginID        plugin_id,<br/>  AEGP_WorldType       type,<br/>  A_long               widthL,<br/>  A_long               heightL,<br/>  AEGP_PlatformWorldH  \*worldPH);</pre> |
| `AEGP_DisposePlatformWorld` | Disposes of an `AEGP_PlatformWorldH`. |
| | <pre lang="cpp">AEGP_DisposePlatformWorld(<br/>  AEGP_PlatformWorldH  worldH);</pre> |
| `AEGP_NewReferenceFromPlatformWorld` | Retrieves an AEGP_WorldH referring to the given `AEGP_PlatformWorldH`. |
| | NOTE: This doesn't allocate a new world, it simply provides a reference to an existing one. |
| | <pre lang="cpp">AEGP_NewReferenceFromPlatformWorld(<br/>  AEGP_PluginID        plugin_id,<br/>  AEGP_PlatformWorldH  plat_worldH,<br/>  AEGP_WorldH          \*worldPH);</pre> |

---

## Track Mattes and Transform Functions

Use the `AEGP_CompositeSuite` to copy pixel worlds, operate on track mattes, and apply transfer functions.

### AEGP_CompositeSuite2

| Function | Purpose |
|---|---|
| `AEGP_ClearAlphaExceptRect` | For the given `PF_EffectWorld`, sets the alpha to fully transparent except for the specified rectangle. |
| | <pre lang="cpp">AEGP_ClearAlphaExceptRect(<br/>  A_Rect          \*clipped_dst_rectPR,<br/>  PF_EffectWorld  \*dstP);</pre> |
| `AEGP_PrepTrackMatte` | Mattes the pixels in a `PF_EffectWorld` with the `PF_Pixel` described in src_masks, putting the output into an array of pixels dst_mask. |
| | NOTE: Unlike most of the other pixel mangling functions provided by After Effects, this one doesn't take `PF_EffectWorld` arguments; rather, you can simply pass the data pointer from within the `PF_EffectWorld`. This can be confusing, but as a bonus, the function pads output appropriately so that `num_pix` pixels are always output. |
| | <pre lang="cpp">AEGP_PrepTrackMatte(<br/>  A_long          num_pix,<br/>  A_Boolean       deepB,<br/>  const PF_Pixel  \*src_mask,<br/>  PF_MaskFlags    mask_flags,<br/>  PF_Pixel        \*dst_mask);</pre> |
| `AEGP_TransferRect` | Blends two `PF_EffectWorlds` using a transfer mode, with an optional mask. Pass `NULL` for the `blend_tablesP0` parameter to perform blending in the current working color space. |
| | <pre lang="cpp">AEGP_TransferRect(<br/>  PF_Quality               quality,<br/>  PF_ModeFlags             m_flags,<br/>  PF_Field                 field,<br/>  const A_Rect             \*src_rec,<br/>  const PF_EffectWorld     \*src_world,<br/>  const PF_CompositeMode   \*comp_mode,<br/>  PF_EffectBlendingTables  blend_tablesP0,<br/>  const PF_MaskWorld       \*mask_world0,<br/>  A_long                   dest_x,<br/>  A_long                   dest_y,<br/>  PF_EffectWorld           \*dst_world);</pre> |
| `AEGP_CopyBits_LQ` | Copies a rectangle of pixels (pass a `NULL` rectangle to get all pixels) from one `PF_EffectWorld` to another, at low quality. |
| | <pre lang="cpp">AEGP_CopyBits_LQ(<br/>  PF_EffectWorld  \*src_worldP,<br/>  A_Rect          \*src_r,<br/>  A_Rect          \*dst_r,<br/>  PF_EffectWorld  \*dst_worldP);</pre> |
| `AEGP_CopyBits_HQ_Straight` | Copies a rectangle of pixels (pass a `NULL` rectangle to get all pixels) from one `PF_EffectWorld` to another, at high quality, with a straight alpha channel. |
| | <pre lang="cpp">AEGP_CopyBits_HQ_Straight(<br/>  PF_EffectWorld  \*src,<br/>  A_Rect          \*src_r,<br/>  A_Rect          \*dst_r,<br/>  PF_EffectWorld  \*dst);</pre> |
| `AEGP_CopyBits_HQ_Premul` | Copies a rectangle of pixels (pass a `NULL` rectangle to get all pixels) from one `PF_EffectWorld` to another, at high quality, premultiplying the alpha channel. |
| | <pre lang="cpp">AEGP_CopyBits_HQ_Premul(<br/>  PF_EffectWorld  \*src,<br/>  A_Rect          \*src_r,<br/>  A_Rect          \*dst_r,<br/>  PF_EffectWorld  \*dst);</pre> |

---

## Work With Audio

`AEGP_SoundDataSuite` allows AEGPs to obtain and manipulate the audio associated with compositions and footage items.

Audio-only items may be added to the render queue using `AEGP_RenderNewItemSoundData()`.

### AEGP_SoundDateSuite1

| Function | Purpose |
|---|---|
| `AEGP_NewSoundData` | Creates a new `AEGP_SoundDataH`, of which the plug-in must dispose. |
| | <pre lang="cpp">AEGP_NewSoundData(<br/>  const AEGP_SoundDataFormat  \*formatP,<br/>  AEGP_SoundDataH             \*new_dataPH);</pre> |
| `AEGP_DisposeSoundData` | Frees an `AEGP_SoundDataH`. |
| | <pre lang="cpp">AEGP_DisposeSoundData(<br/>  AEGP_SoundDataH  sound_dataH);</pre> |
| `AEGP_GetSoundDataFormat` | Obtains information about the format of a given `AEGP_SoundDataH`. |
| | <pre lang="cpp">AEGP_GetSoundDataFormat(<br/>  AEGP_SoundDataH       soundH,<br/>  AEGP_SoundDataFormat  \*formatP);</pre> |
| `AEGP_LockSoundDataSamples` | Locks the `AEGP_SoundDataH` in memory. |
| | <pre lang="cpp">AEGP_LockSoundDataSamples(<br/>  AEGP_SoundDataH  soundH,<br/>  void             \*samples);</pre> |
| `AEGP_UnlockSoundDataSamples` | Unlocks an `AEGP_SoundDataH`. |
| | <pre lang="cpp">AEGP_UnlockSoundDataSamples(<br/>  AEGP_SoundDataH  soundH);</pre> |
| `AEGP_GetNumSamples` | Obtains the number of samples in the given `AEGP_SoundDataH`. |
| | <pre lang="cpp">AEGP_GetNumSamples(<br/>  AEGP_SoundDataH  soundH,<br/>  A_long           \*numsamplesPL);</pre> |

---

## Audio Settings

Audio render settings are represented using the `AEGP_SoundDataFormat`.

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

## Render Queue Suite

This suite allows AEGPs to add items the to render queue (using default options), and control the basic state of the render queue.

### AEGP_RenderQueueSuite1

| Function | Purpose |
|---|---|
| `AEGP_AddCompToRenderQueue` | Adds a composition to the render queue, using default options. |
| | <pre lang="cpp">AEGP_AddCompToRenderQueue(<br/>  AEGP_CompH     compH,<br/>  const A_char*  pathZ);</pre> |
| `AEGP_SetRenderQueueState` | Sets the render queue to one of three valid states. It is not possible to go from stopped to paused. |
| | <pre lang="cpp">AEGP_SetRenderQueueState(<br/>  AEGP_RenderQueueState  state);</pre> |
| | - `AEGP_RenderQueueState_STOPPED` |
| | - `AEGP_RenderQueueState_PAUSED` |
| | - `AEGP_RenderQueueState_RENDERING` |
| `AEGP_GetRenderQueueState` | Obtains the current render queue state. |
| | <pre lang="cpp">AEGP_GetRenderQueueState(<br/>  AEGP_RenderQueueState  \*stateP);</pre> |

---

## Render Queue Item Suite

Manipulate all aspects of render queue items using this suite.

### AEGP_RQItemSuite4

| Function | Purpose |
|---|---|
| `AEGP_GetNumRQItems` | Returns the number of items currently in the render queue. |
| | <pre lang="cpp">AEGP_GetNumRQItems(<br/>  A_long  \*num_itemsPL);</pre> |
| `AEGP_GetRQItemByIndex` | Returns an `AEGP_RQItemRefH` referencing the index'd item. |
| | <pre lang="cpp">AEGP_GetRQItemByIndex(<br/>  A_long           rq_item_index,<br/>  AEGP_RQItemRefH  \*rq_item_refPH);</pre> |
| `AEGP_GetNextRQItem` | Returns the next `AEGP_RQItemRefH`, for iteration purposes. |
| | To get the first `AEGP_RQItemRefH`, pass `RQ_ITEM_INDEX_NONE` for the `current_rq_itemH`. |
| | <pre lang="cpp">AEGP_GetNextRQItem(<br/>  AEGP_RQItemRefH  current_rq_itemH,<br/>  AEGP_RQItemRefH  \*next_rq_itemPH);</pre> |
| `AEGP_GetNumOutputModulesForRQItem` | Returns the number of output modules applied to the given `AEGP_RQItemRefH`. |
| | <pre lang="cpp">AEGP_GetNumOutputModulesForRQItem(<br/>  AEGP_RQItemRefH  rq_itemH,<br/>  A_long           \*num_outmodsPL);</pre> |
| `AEGP_GetRenderState` | Returns `TRUE` if the `AEGP_RQItemRefH` is set to render (once the user clicks the Render button). |
| | <pre lang="cpp">AEGP_GetRenderState(<br/>  AEGP_RQItemRefH  rq_itemH,<br/>  A_Boolean        \*will_renderPB);</pre> |
| `AEGP_SetRenderState` | Controls whether or not the `AEGP_RQItemRefH` will render when the user next clicks the Render button. |
| | Returns an error if called during rendering. |
| | This function will return: |
| | - `Err_PARAMETER` if you try to call while `AEGP_RenderQueueState` isn't `AEGP_RenderQueueState_STOPPED` |
| | - `Err_RANGE` if you pass a status that is illegal in any case, and |
| | - `Err_PARAMETER` if you try to pass a status that doesn't make sense (like trying to queue something for which there's no output path) |
| | <pre lang="cpp">AEGP_SetRenderState(<br/>  AEGP_RQItemRefH  rq_itemH,<br/>  A_Boolean        renderB);</pre> |
| `AEGP_GetStartedTime` | Returns the time (in seconds, since 1904) that rendering began. |
| | <pre lang="cpp">AEGP_GetStartedTime(<br/>  AEGP_RQItemRefH  rq_itemH,<br/>  A_Time           \*started_timePT);</pre> |
| `AEGP_GetElapsedTime` | Returns the time elapsed since rendering began. |
| | <pre lang="cpp">AEGP_GetElapsedTime(<br/>  AEGP_RQItemRefH  rq_itemH,<br/>  A_Time           \*render_timePT);</pre> |
| `AEGP_GetLogType` | Returns the log type for the referenced `AEGP_RQItemRefH`. |
| | <pre lang="cpp">AEGP_GetLogType(<br/>  AEGP_RQItemRefH  rq_itemH,<br/>  AEGP_LogType     \*logtypeP);</pre> |
| | `AEGP_LogtType` will have one of the following values: |
| | - `AEGP_LogType_NONE` |
| | - `AEGP_LogType_ERRORS_ONLY` |
| | - `AEGP_LogType_PLUS_SETTINGS` |
| | - `AEGP_LogType_PER_FRAME_INFO` |
| `AEGP_SetLogType` | Specifies the log type to be used with the referenced `AEGP_RQItemRefH`. |
| | <pre lang="cpp">AEGP_SetLogType(<br/>  AEGP_RQItemRefH  rq_itemH,<br/>  AEGP_LogType     logtype);</pre> |
| `AEGP_RemoveOutputModule` | Removes the specified output module from the referenced `AEGP_RQItemRefH`. |
| | <pre lang="cpp">AEGP_RemoveOutputModule(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  AEGP_OutputModuleRefH  outmodH);</pre> |
| `AEGP_GetComment` | Updated to support Unicode in `RQItemSuite4`, available in 14.1. |
| | Retrieves the comment associated with the referenced `AEGP_RQItemRefH`. |
| | <pre lang="cpp">AEGP_GetComment(<br/>  AEGP_RQItemRefH  rq_itemH,<br/>  AEGP_MemHandle   \*unicodeH);</pre> |
| `AEGP_SetComment` | Updated to support Unicode in `RQItemSuite4`, available in 14.1. |
| | Specifies the comment associated with the referenced `AEGP_RQItemRefH`. |
| | <pre lang="cpp">AEGP_SetComment(<br/>  AEGP_RQItemRefH    rq_itemH,<br/>  const A_UTF16Char  \*commentZ);</pre> |
| `AEGP_GetCompFromRQItem` | Retrieves the `AEGP_CompH` associated with the `AEGP_RQItemRefH`. |
| | <pre lang="cpp">AEGP_GetCompFromRQItem(<br/>  AEGP_RQItemRefH  rq_itemH,<br/>  AEGP_CompH       \*compPH);</pre> |
| `AEGP_DeleteRQItem` | Deletes the render queue item. Undoable. |
| | <pre lang="cpp">AEGP_DeleteRQItem(<br/>  AEGP_RQItemRefH  rq_itemH);</pre> |

---

## Render Queue Monitor Suite

New in CS6. This suite provides all the info a render queue manager needs to figure out what is happening at any point in a render.

### AEGP_RenderQueueMonitorSuite1

| Function | Purpose | | | | |
|---|---|---|---|---|---|
| `AEGP_RegisterListener` | Register a set of plug-in-defined functions to be called by the render queue. | | | | |
| | Use the refcon to pass in data that you want to use later on when your plug-in-defined functions in `AEGP_RQM_FunctionBlock1` are called later. It may be set it to `NULL` if you don't need it. | | | | |
| | <pre lang="cpp">AEGP_RegisterListener(<br/>  AEGP_PluginID                  aegp_plugin_id,<br/>  AEGP_RQM_Refcon                aegp_refconP,<br/>  const AEGP_RQM_FunctionBlock1  \*fcn_blockP);</pre> | | | | |
| | The `AEGP_RQM_FunctionBlock1` is defined as follows: | | | | |
| | <pre lang="cpp">struct _AEGP_RQM_FunctionBlock1 {<br/>  A_Err (*AEGP_RQM_RenderJobStarted)(<br/>    AEGP_RQM_BasicData  \*basic_dataP,<br/>    AEGP_RQM_SessionId  jobid);<br/><br/>A_Err (*AEGP_RQM_RenderJobEnded)(<br/>    AEGP_RQM_BasicData  \*basic_dataP,<br/>    AEGP_RQM_SessionId  jobid); | <br/><br/>A_Err (*AEGP_RQM_RenderJobItemStarted)(<br/>    AEGP_RQM_BasicData  \*basic_dataP,<br/>    AEGP_RQM_SessionId  jobid,<br/>    AEGP_RQM_ItemId     itemid); | <br/><br/>A_Err (*AEGP_RQM_RenderJobItemUpdated)(<br/>    AEGP_RQM_BasicData  \*basic_dataP,<br/>    AEGP_RQM_SessionId  jobid,<br/>    AEGP_RQM_ItemId     itemid,<br/>    AEGP_RQM_FrameId    frameid); | <br/><br/>A_Err (*AEGP_RQM_RenderJobItemEnded)(<br/>    AEGP_RQM_BasicData       \*basic_dataP,<br/>    AEGP_RQM_SessionId       jobid,<br/>    AEGP_RQM_ItemId          itemid,<br/>    AEGP_RQM_FinishedStatus  fstatus); | <br/><br/>A_Err (*AEGP_RQM_RenderJobItemReportLog)(<br/>    AEGP_RQM_BasicData  \*basic_dataP,<br/>    AEGP_RQM_SessionId  jobid,<br/>    AEGP_RQM_ItemId     itemid,<br/>    A_Boolean           isError,<br/>    AEGP_MemHandle      logbuf);<br/>} AEGP_RQM_FunctionBlock1;</pre> |
| | `AEGP_RQM_FinishedStatus` will be one of the following: | | | | |
| | - `AEGP_RQM_FinishedStatus_UNKNOWN` | | | | |
| | - `AEGP_RQM_FinishedStatus_SUCCEEDED` | | | | |
| | - `AEGP_RQM_FinishedStatus_ABORTED` | | | | |
| | - `AEGP_RQM_FinishedStatus_ERRED` | | | | |
| | The `AEGP_RQM_BasicData` is defined below. | | | | |
| | <pre lang="cpp">struct _AEGP_RQM_BasicData {<br/>  const struct SPBasicSuite \*pica_basicP;<br/>  A_long                    aegp_plug_id;<br/>  AEGP_RQM_Refcon           aegp_refconPV;<br/>} AEGP_RQM_BasicData;</pre> | | | | |
| `AEGP_DeregisterListener` | Deregister from the render queue. | | | | |
| | <pre lang="cpp">AEGP_DeregisterListener(<br/>  AEGP_PluginID    aegp_plugin_id,<br/>  AEGP_RQM_Refcon  aegp_refconP);</pre> | | | | |
| `AEGP_GetProjectName` | Obtain the current project name. The project name is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`. | | | | |
| | <pre lang="cpp">AEGP_GetProjectName(<br/>  AEGP_RQM_SessionId  sessid,<br/>  AEGP_MemHandle      \*utf_project_namePH0);</pre> | | | | |
| `AEGP_GetAppVersion` | Obtain the app version. The app version is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`. | | | | |
| | <pre lang="cpp">AEGP_GetAppVersion(<br/>  AEGP_RQM_SessionId  sessid,<br/>  AEGP_MemHandle      \*utf_app_versionPH0);</pre> | | | | |
| `AEGP_GetNumJobItems` | Obtain the number of job items. | | | | |
| | <pre lang="cpp">AEGP_GetNumJobItems(<br/>  AEGP_RQM_SessionId  sessid,<br/>  A_long              \*num_jobitemsPL);</pre> | | | | |
| `AEGP_GetJobItemID` | Get the job with the index specified. | | | | |
| | <pre lang="cpp">AEGP_GetJobItemID(<br/>  AEGP_RQM_SessionId  sessid,<br/>  A_long              jobItemIndex,<br/>  AEGP_RQM_ItemId     \*jobItemID);</pre> | | | | |
| `AEGP_GetNumJobItemRenderSettings` | Get the number of render settings for the job with the index specified. | | | | |
| | <pre lang="cpp">AEGP_GetNumJobItemRenderSettings(<br/>  AEGP_RQM_SessionId  sessid,<br/>  AEGP_RQM_ItemId     itemid,<br/>  A_long              \*num_settingsPL);</pre> | | | | |
| `AEGP_GetJobItemRenderSetting` | Get a specific render setting of a specific job. The setting name and value are handles to NULL-terminated A_UTF16Char strings, and must be disposed with `AEGP_FreeMemHandle`. | | | | |
| | <pre lang="cpp">AEGP_GetJobItemRenderSetting(<br/>  AEGP_RQM_SessionId  sessid,<br/>  AEGP_RQM_ItemId     itemid,<br/>  A_long              settingIndex,<br/>  AEGP_MemHandle      \*utf_setting_namePH0,<br/>  AEGP_MemHandle      \*utf_setting_valuePH0);</pre> | | | | |
| `AEGP_GetNumJobItemOutputModules` | Get the number of output modules for the job with the index specified. | | | | |
| | <pre lang="cpp">AEGP_GetNumJobItemOutputModules(<br/>  AEGP_RQM_SessionId  sessid,<br/>  AEGP_RQM_ItemId     itemid,<br/>  A_long              \*num_outputmodulesPL);</pre> | | | | |
| `AEGP_GetNumJobItemOutputModuleSettings` | Get the number of settings for the output module with the index specified. | | | | |
| | <pre lang="cpp">AEGP_GetNumJobItemOutputModuleSettings(<br/>  AEGP_RQM_SessionId  sessid,<br/>  AEGP_RQM_ItemId     itemid,<br/>  A_long              outputModuleIndex,<br/>  A_long              \*num_settingsPL);</pre> | | | | |
| `AEGP_GetJobItemOutputModuleSetting` | Get a specific setting of a job item output module. The setting name and value are handles to NULL-terminated A_UTF16Char strings, and must be disposed with `AEGP_FreeMemHandle`. | | | | |
| | <pre lang="cpp">AEGP_GetJobItemOutputModuleSetting(<br/>  AEGP_RQM_SessionId  sessid,<br/>  AEGP_RQM_ItemId     itemid,<br/>  A_long              outputModuleIndex,<br/>  A_long              settingIndex,<br/>  AEGP_MemHandle      \*utf_setting_namePH0,<br/>  AEGP_MemHandle      \*utf_setting_valuePH0);</pre> | | | | |
| `AEGP_GetNumJobItemOutputModuleWarnings` | Get the number of output module warnings for a job item. | | | | |
| | <pre lang="cpp">AEGP_GetNumJobItemOutputModuleWarnings(<br/>  AEGP_RQM_SessionId  sessid,<br/>  AEGP_RQM_ItemId     itemid,<br/>  A_long              outputModuleIndex,<br/>  A_long              \*num_warningsPL);</pre> | | | | |
| `AEGP_GetJobItemOutputModuleWarning` | Get a specific warning of a specific output module for a specific job item. The warning value is a handle to NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`. | | | | |
| | <pre lang="cpp">AEGP_GetJobItemOutputModuleWarning(<br/>  AEGP_RQM_SessionId  sessid,<br/>  AEGP_RQM_ItemId     itemid,<br/>  A_long              outputModuleIndex,<br/>  A_long              warningIndex,<br/>  AEGP_MemHandle      \*utf_warning_valuePH0);</pre> | | | | |
| `AEGP_GetNumJobItemFrameProperties` | Get the number of properties for a job item frame. | | | | |
| | <pre lang="cpp">AEGP_GetNumJobItemFrameProperties(<br/>  AEGP_RQM_SessionId  sessid,<br/>  AEGP_RQM_ItemId     itemid,<br/>  AEGP_RQM_FrameId    frameid,<br/>  A_long              \*num_propertiesPL);</pre> | | | | |
| `AEGP_GetJobItemFrameProperty` | Get a specific property on a job item frame. The property name and values are handle to NULL-terminated A_UTF16Char strings, and must be disposed with `AEGP_FreeMemHandle`. | | | | |
| | <pre lang="cpp">AEGP_GetJobItemFrameProperty(<br/>  AEGP_RQM_SessionId  sessid,<br/>  AEGP_RQM_ItemId     itemid,<br/>  AEGP_RQM_FrameId    frameid,<br/>  A_long              propertyIndex,<br/>  AEGP_MemHandle      \*utf_property_namePH0,<br/>  AEGP_MemHandle      \*utf_property_valuePH0);</pre> | | | | |
| `AEGP_GetNumJobItemOutputModuleProperties` | Get the number of properties for a job item output module. | | | | |
| | <pre lang="cpp">AEGP_GetNumJobItemOutputModuleProperties(<br/>  AEGP_RQM_SessionId  sessid,<br/>  AEGP_RQM_ItemId     itemid,<br/>  A_long              outputModuleIndex,<br/>  A_long              \*num_propertiesPL);</pre> | | | | |
| `AEGP_GetJobItemOutputModuleProperty` | Get a specific property off a job item output module. The property name and values are handle to NULL-terminated A_UTF16Char strings, and must be disposed with `AEGP_FreeMemHandle`. | | | | |
| | <pre lang="cpp">AEGP_GetJobItemOutputModuleProperty(<br/>  AEGP_RQM_SessionId  sessid,<br/>  AEGP_RQM_ItemId     itemid,<br/>  A_long              outputModuleIndex,<br/>  A_long              propertyIndex,<br/>  AEGP_MemHandle      \*utf_property_namePH0,<br/>  AEGP_MemHandle      \*utf_property_valuePH0);</pre> | | | | |
| `AEGP_GetJobItemFrameThumbnail` | Get a buffer with a JPEG-encoded thumbnail of the job item frame. | | | | |
| | Pass in the maximum width and height, and the actual dimensions will be passed back. | | | | |
| | <pre lang="cpp">AEGP_GetJobItemFrameThumbnail(<br/>  AEGP_RQM_SessionId  sessid,<br/>  AEGP_RQM_ItemId     itemid,<br/>  AEGP_RQM_FrameId    frameid,<br/>  A_long              \*widthPL,<br/>  A_long              \*heightPL,<br/>  AEGP_MemHandle      \*thumbnailPH0);</pre> | | | | |

---

## Output Module Suite

Every item in the render queue has at least one output module specified.

Use this suite to query and control all aspects of the output modules attached to a given render item.

You may also add and remove output modules.

Factoid: For each frame rendered for a given render item, the list of output modules is traversed. So, for frame 0, output module 0, then 1, then 2 are called.

### AEGP_OutputModuleSuite4

| Function | Purpose |
|---|---|
| `AEGP_GetOutputModuleByIndex` | Retrieves the indexed output module. |
| | NOTE: `AEGP_OutputModuleRefH` is an opaque data type, and can't be manipulated directly; you must use our accessor functions to modify it. |
| | <pre lang="cpp">AEGP_GetOutputModuleByIndex(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  A_long                 outmod_indexL,<br/>  AEGP_OutputModuleRefH  \*outmodPH);</pre> |
| `AEGP_GetEmbedOptions` | Retrieves the embedding setting specified for the referenced `AEGP_OutputModuleRefH`. |
| | <pre lang="cpp">AEGP_GetEmbedOptions(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  AEGP_OutputModuleRefH  outmodH,<br/>  AEGP_EmbeddingType     \*embed_optionsP);</pre> |
| | `AEGP_EmbeddingType` will be one of the following: |
| | - `AEGP_Embedding_NOTHING` |
| | - `AEGP_Embedding_LINK` |
| | - `AEGP_Embedding_LINK_AND_COPY` |
| `AEGP_SetEmbedOptions` | Specifies the embedding setting for the referenced `AEGP_OutputModuleRefH`. |
| | <pre lang="cpp">AEGP_SetEmbedOptions(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  AEGP_OutputModuleRefH  outmodH,<br/>  AEGP_EmbeddingType     embed_options);</pre> |
| `AEGP_GetPostRenderAction` | Retrieves the post-render action setting for the referenced `AEGP_OutputModuleRefH`. |
| | <pre lang="cpp">AEGP_GetPostRenderAction(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  AEGP_OutputModuleRefH  outmodH,<br/>  AEGP_PostRenderAction  \*actionP);</pre> |
| | `AEGP_PostRenderAction` will be one of the following: |
| | - `AEGP_PostRenderOptions_IMPORT` |
| | - `AEGP_PostRenderOptions_IMPORT_AND_REPLACE_USAGE` |
| | - `AEGP_PostRenderOptions_SET_PROXY` |
| `AEGP_SetPostRenderAction` | Specifies the post-render action setting for the referenced `AEGP_OutputModuleRefH`. |
| | <pre lang="cpp">AEGP_SetPostRenderAction(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  AEGP_OutputModuleRefH  outmodH,<br/>  AEGP_PostRenderAction  action);</pre> |
| `AEGP_GetEnabledOutputs` | Retrieves which output types are enabled for the referenced `AEGP_OutputModuleRefH`. |
| | <pre lang="cpp">AEGP_GetEnabledOutputs(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  AEGP_OutputModuleRefH  outmodH,<br/>  AEGP_OutputTypes       \*typesP);</pre> |
| | `AEGP_OutputTypes` will contain one or both of the following values: |
| | - `AEGP_OutputType_VIDEO` |
| | - `AEGP_OutputType_AUDIO` |
| | NOTE: These are flags, not an enumeration. |
| `AEGP_SetEnabledOutputs` | Specifies which output types are enabled for the referenced `AEGP_OutputModuleRefH`. |
| | <pre lang="cpp">AEGP_SetEnabledOutputs(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  AEGP_OutputModuleRefH  outmodH,<br/>  AEGP_OutputTypes       enabled_types);</pre> |
| `AEGP_GetOutputChannels` | Retrieves which video channels are enabled for output in the referenced AEGP_OutputModuleRefH. |
| | <pre lang="cpp">AEGP_GetOutputChannels(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  AEGP_OutputModuleRefH  outmodH,<br/>  AEGP_VideoChannels     \*outchannelsP);</pre> |
| | `AEGP_VideoChannels` will be one of the following: |
| | - `AEGP_VideoChannels_RGB` |
| | - `AEGP_VideoChannels_RGBA` |
| | - `AEGP_VideoChannels_ALPHA` |
| `AEGP_SetOutputChannels` | Specifies which video channels are enabled for output in the referenced `AEGP_OutputModuleRefH`. |
| | <pre lang="cpp">AEGP_SetOutputChannels(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  AEGP_OutputModuleRefH  outmodH,<br/>  AEGP_VideoChannels     outchannels);</pre> |
| `AEGP_GetStretchInfo` | Retrieves the stretch information enabled for the referenced `AEGP_OutputModuleRefH`; whether or not stretching is enabled, whether or not the frame aspect ratio is locked to the composition's, and what quality setting is specified. |
| | <pre lang="cpp">AEGP_GetStretchInfo(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  AEGP_OutputModuleRefH  outmodH,<br/>  A_Boolean              \*enabledPB,<br/>  AEGP_StretchQuality    \*qualP,<br/>  A_Boolean              \*lockedPB);</pre> |
| | `AEGP_StretchQuality` will be one of the following: |
| | - `AEGP_StretchQual_LOW` |
| | - `AEGP_StretchQual_HIGH` |
| `AEGP_SetStretchInfo` | Retrieves the stretch information enabled for the referenced `AEGP_OutputModuleRefH`. |
| | <pre lang="cpp">AEGP_SetStretchInfo(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  AEGP_OutputModuleRefH  outmodH,<br/>  A_Boolean              is_enabledB,<br/>  AEGP_StretchQuality    quality);</pre> |
| `AEGP_GetCropInfo` | Retrieves whether or not the cropping is enabled for the referenced `AEGP_OutputModuleRefH`, and the rectangle to be used. |
| | <pre lang="cpp">AEGP_GetCropInfo(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  AEGP_OutputModuleRefH  outmodH,<br/>  A_Boolean              \*is_enabledBP,<br/>  A_Rect                 \*crop_rectP);</pre> |
| `AEGP_SetCropInfo` | Specifies whether cropping is enabled for the referenced `AEGP_OutputModuleRefH`, and the rectangle to be used. |
| | <pre lang="cpp">AEGP_SetCropInfo(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  AEGP_OutputModuleRefH  outmodH,<br/>  A_Boolean              enableB,<br/>  A_Rect                 crop_rect);</pre> |
| `AEGP_GetSoundFormatInfo` | Retrieves whether or not audio output is enabled for the referenced `AEGP_OutputModuleRefH`, and the settings to be used. |
| | <pre lang="cpp">AEGP_GetSoundFormatInfo(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  AEGP_OutputModuleRefH  outmodH,<br/>  AEGP_SoundDataFormat   \*formatP,<br/>  A_Boolean              \*enabledPB);</pre> |
| `AEGP_SetSoundFormatInfo` | Specifies whether or not audio output is enabled for the referenced `AEGP_OutputModuleRefH`, and the settings to be used. |
| | <pre lang="cpp">AEGP_SetSoundFormatInfo(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  AEGP_OutputModuleRefH  outmodH,<br/>  AEGP_SoundDataFormat   format_info,<br/>  A_Boolean              enabledB);</pre> |
| `AEGP_GetOutputFilePath` | Retrieves the path to which `AEGP_OutputModuleRefH's` output file will be written. The path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`. |
| | <pre lang="cpp">AEGP_GetOutputFilePath(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  AEGP_OutputModuleRefH  outmodH,<br/>  AEGP_MemHandle         \*unicode_pathPH);</pre> |
| `AEGP_SetOutputFilePath` | Specifies the path to which `AEGP_OutputModuleRefH's` output file will be written. The file path is a NULL-terminated UTF-16 string with platform separators. |
| | <pre lang="cpp">AEGP_SetOutputFilePath(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  AEGP_OutputModuleRefH  outmodH,<br/>  const A_UTF16Char      \*pathZ);</pre> |
| `AEGP_AddDefaultOutputModule` | Adds the default output module to the specified `AEGP_RQItemRefH`, and returns the added output module's `AEGP_OutputModuleRefH` (you wouldn't add it if you didn't plan to mess around with it, would you?). |
| | <pre lang="cpp">AEGP_AddDefaultOutputModule(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  AEGP_OutputModuleRefH  \*outmodPH);</pre> |
| `AEGP_GetExtraOutputModuleInfo` | Retrieves information about the output module. |
| | `format_uniPH` and `info_uniPH` provide the textual description of, and information about, the output module, formatted as the user would see it. |
| | `format_uniPH` and `info_uniPH` will contain NULL-terminated UTF16 strings, of which the caller must dispose. |
| | <pre lang="cpp">AEGP_GetExtraOutputModuleInfo(<br/>  AEGP_RQItemRefH        rq_itemH,<br/>  AEGP_OutputModuleRefH  outmodH,<br/>  AEGP_MemHandle         \*format_uniPH,<br/>  AEGP_MemHandle         \*info_uniPH,<br/>  A_Boolean              \*is_sequenceBP,<br/>  A_Boolean              \*multi_frameBP);</pre> |

---

## Working With Effects

These functions provide a way for effects (and AEGPs) to obtain information about the context of an applied effect.

:::note
Any time you modify or rely on data from outside the normal render pipeline, you run the risk of dependency problems.
:::

There is no way for After Effects to know that you depend on this external information; consequently, you will not be notified if it changes out from under you.

### AEGP_PFInterfaceSuite1

| Function | Purpose |
|---|---|
| `AEGP_GetEffectLayer` | Obtain the layer handle of the layer to which the effect is applied. |
| | <pre lang="cpp">AEGP_GetEffectLayer(<br/>  PF_ProgPtr   effect_ref,<br/>  AEGP_LayerH  \*layerPH);</pre> |
| `AEGP_GetNewEffectForEffect` | Obtain the `AEGP_EffectRefH` corresponding to the effect. |
| | <pre lang="cpp">AEGP_GetNewEffectForEffect(<br/>  AEGP_PluginID    aegp_plugin_id,<br/>  PF_ProgPtr       effect_ref,<br/>  AEGP_EffectRefH  \*effectPH);</pre> |
| `AEGP_ConvertEffectToCompTime` | Retreive the composition time corresponding to the effect's layer time. |
| | <pre lang="cpp">AEGP_ConvertEffectToCompTime(<br/>  PF_ProgPtr     effect_ref,<br/>  long           what_timeL,<br/>  unsigned long  time_scaleLu,<br/>  A_Time         \*comp_timePT);</pre> |
| `AEGP_GetEffectCamera` | Obtain the camera (if any) being used by After Effects to view the effect's layer. |
| | <pre lang="cpp">AEGP_GetEffectCamera(<br/>  PF_ProgPtr    effect_ref,<br/>  const A_Time  \*comp_timePT,<br/>  AEGP_LayerH   camera_layerPH);</pre> |
| `AEGP_GetEffectCameraMatrix` | Obtain the transform used to move between the layer's coordinate space and that of the containing composition. |
| | <pre lang="cpp">AEGP_GetEffectCameraMatrix(<br/>  PF_ProgPtr    effect_ref,<br/>  const A_Time  \*comp_timePT,<br/>  A_Matrix4     \*camera_matrixP,<br/>  A_FpLong      \*dst_to_planePF,<br/>  A_short       \*plane_widthPL,<br/>  A_short       \*plane_heightPL);</pre> |
| | NOTE: In cases where the effect's input layer has square pixels, but is in a non-square pixel composition, you must correct for the pixel aspect ratio by premultiplying the matrix by `(1/parF, 1, 1)`. |

### AEGP_GetEffectCameraMatrix Notes

The model view for the camera matrix is inverse of the matrix obtained from `AEGP_GetEffectCameraMatrix()`.

Also note that our matrix is row-based; OpenGL's is column-based.

---

## Do This Many Times

Utilizes multiple processors (if available) for your computations.

### AEGP_IterateSuite1

| Function | Purpose |
|---|---|
| `AEGP_GetNumThreads` | Ask After Effects how many threads are currently available. |
| | <pre lang="cpp">AEGP_GetNumThreads(<br/>  A_long  \*num_threadsPL);</pre> |
| `AEGP_IterateGeneric` | Specify a function for After Effects to manage on multiple processors. |
| | Can be any function pointer specified by `fn_func`, taking the arguments listed below. |
| | See [Private Data](../implementation#private-data) for a description of how `refconPV` is used. |
| | <pre lang="cpp">AEGP_IterateGeneric(<br/>  A_long  iterationsL,<br/>  void    \*refconPV,<br/>  A_Err   (*fn_func)<br/>    (void   \*refconPV,<br/>    A_long  thread_indexL,<br/>    A_long  i,<br/>    A_long  iterationsL));</pre> |

---

## File Import Manager Suite

The FIMSuite allows file types handled by AEGPs to appear as part of the After Effects import dialog, and drag-and-drop messaging.

These are not for use by AEIOs! Rather, they are for importing projects which are best represented as After Effects compositions.

### AEGP_FIMSuite3

| Function | Purpose |
|---|---|
| `AEGP_RegisterImportFlavor` | Registers the name of the file type(s) supported by the plug-in. Upon return, `imp_refP` will be a valid opaque reference, or `AE_FIM_ImportFlavorRef_NONE`. |
| | <pre lang="cpp">AEGP_RegisterImportFlavor(<br/>  const char              \*nameZ,<br/>  AE_FIM_ImportFlavorRef  \*imp_refP);</pre> |
| `AEGP_RegisterImportFlavorFileTypes` | Registers an array of file types and file extensions (the two arrays need not be of equal length) supported by the AEGP. |
| | <pre lang="cpp">AEGP_RegisterImportFlavorFileTypes(<br/>  AE_FIM_ImportFlavorRef  imp_ref,<br/>  long                    num_filekindsL,<br/>  const AEIO_FileKind     \*kindsAP,<br/>  long                    num_fileextsL,<br/>  const AEIO_FileKind     \*extsAP);</pre> |
| `AEGP_RegisterImportFlavorImportCallbacks` | Register the AEGP functions which will respond to import of different filetypes. |
| | <pre lang="cpp">AEGP_RegisterImportFlavorImportCallbacks(<br/>  AE_FIM_ImportFlavorRef        ref,<br/>  AE_FIM_ImportFlags            single_flag,<br/>  const AE_FIM_ImportCallbacks  \*imp_cbsP);</pre> |
| `AEGP_SetImportedItem` | Designates an item as having been imported (possibly replacing an existing item), and sets associated import options. |
| | <pre lang="cpp">AEGP_SetImportedItem(<br/>  AE_FIM_ImportOptions  imp_options,<br/>  AEGP_ItemH            imported_itemH);</pre> |
