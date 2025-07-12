---
title: 入门指南
---
# 入门指南

从两个视频滤镜示例项目中的一个开始，逐步将其功能替换为您自己的功能。

---

## 资源

滤镜插件可以使用 PiPL 资源来定义其行为和支持的属性。

要在效果控制面板中提供任何参数，必须在 PiPL 的 `ANIM_ParamAtom` 部分中定义它们，如下例所示。

“无 UI” UI 类型用于不可关键帧化的参数。每次对 PiPL 进行更改后，请重新构建插件，以便重新编译 PiPL。

### 滤镜 PiPL 示例

```cpp
#include "PrSDKPiPLVer.h"
#ifndef PRWIN_ENV
#include "PrSDKPiPL.r"
#endif

// 以下两个字符串应本地化
#define plugInName "酷炫视频滤镜"
#define plugInCategory "SDK 滤镜"

// 此名称不应本地化或更新
#define plugInMatchName "SDK 酷炫滤镜"

resource 'PiPL' (16000) {
 {
 // 插件类型
 Kind {PrEffect},

 // 插件名称，显示给用户
 Name {plugInName},

 // 插件的内部名称
 AE_Effect_Match_Name {plugInMatchName},

 // 插件在效果面板中的文件夹
 Category {plugInCategory},

 // PiPL 资源定义的版本
 AE_PiPL_Version {PiPLVerMajor, PiPLVerMinor},

 // ANIM 属性描述滤镜参数，以及数据如何存储在项目文件中。有一个 ANIM_FilterInfo 属性，后跟 n 个 ANIM_ParamAtoms
 ANIM_FilterInfo {
 0,
 #ifdef PiPLVer2p3

 // 支持非方形像素宽高比
 notUnityPixelAspectRatio,
 anyPixelAspectRatio,
 reserved4False,
 reserved3False,
 reserved2False,

 #endif
 },

 reserved1False, // 这些标志供 After Effects 使用
 reserved0False, // Premiere 未使用
 driveMe, // Premiere 未使用
 needsDialog, // Premiere 未使用
 paramsNotPointer, // Premiere 未使用
 paramsNotHandle, // Premiere 未使用
 paramsNotMacHandle, // Premiere 未使用
 dialogNotInRender, // Premiere 未使用
 paramsNotInGlobals, // Premiere 未使用
 bgAnimatable, // Premiere 未使用
 fgAnimatable, // Premiere 未使用
 geometric, // Premiere 未使用
 noRandomness, // Premiere 未使用

 // 在此处放置参数数量
 2,

 plugInMatchName

 // 每个参数有一个 ANIM_ParamAtom
 ANIM_ParamAtom {
 // 这是第一个属性 - 从零开始计数
 0,

 // 控件显示的名称
 "级别",

 // 参数编号 - 从一开始计数
 1,

 // 在此处放置数据类型
 ANIM_DT_SHORT,

 // UI 控件类型
 ANIM_UI_SLIDER,
 0x0,
 0x0, // valid_min (0.0)
 0x405fc000,
 0x0, // valid_max (127.0)
 0x0,
 0x0, // ui_min (0.0)
 0x40590000,
 0x0, // ui_max (100.0)

 #if PiPLVer2p3
 // 新增 - 如果用户修改，缩放/不缩放 UI 范围
 dontScaleUIRange,
 #endif
 },

 // 如果参数应动画化，则设置/不设置此标志
 animateParam,
 dontRestrictBounds, // Premiere 未使用
 spaceIsAbsolute, // Premiere 未使用
 resIndependent, // Premiere 未使用

 // 参数数据的字节大小
 2

 ANIM_ParamAtom {
 1,
 "目标颜色", 2,

 // 在此处放置数据类型
 ANIM_DT_COLOR_RGB,

 // UI 控件类型
 ANIM_UI_COLOR_RGB,
 0x0,
 0x0,
 0x0,
 0x0,
 0x0,
 0x0,
 0x0,
 0x0,

 #ifdef PiPLVer2p3
 dontScaleUIRange,
 #endif

 // 如果参数应动画化，则设置/不设置此标志
 animateParam,
 dontRestrictBounds,
 spaceIsAbsolute,
 resIndependent,

 // 参数数据的字节大小
 4
 },
 }
};
```

---

## 入口函数

```cpp
short xFilter (
 short selector,
 VideoHandle theData)
```

- `selector` 是 Premiere 希望视频滤镜执行的操作。
- `EffectHandle` 提供源和目标缓冲区以及其他有用信息。

如果成功，返回 `fsNoErr`，否则返回适当的返回代码。
