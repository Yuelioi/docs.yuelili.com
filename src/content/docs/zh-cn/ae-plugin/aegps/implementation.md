---
title: 实现
---
# 实现

由于AEGP API提供的功能非常广泛，并且与After Effects的集成非常完整，因此需要进行大量的设计工作，以确保您的插件在所有情况下都能正常运行。

AEGP通过PICA函数套件与After Effects进行交互。

AEGP没有特定的加载顺序。

检查AEGP API的版本（从您的AEGP入口函数内部）以确认某个套件是否可用。

AEGP还可以使用任何不需要PF_ProgPtr的效果API套件函数（效果从PF_InData获取）。

---

## 入口函数

```cpp
A_Err AEGP_PluginInitFuncPrototype(
 struct SPBasicSuite *pica_basicP,
 A_long major_versionL,
 A_long minor_versionL,
 AEGP_PluginID aegp_plugin_id,
 AEGP_GlobalRefcon *global_refconP)
```

插件的入口函数，在[PiPL资源](../../intro/pipl-resources)中导出，仅在启动时调用一次；所有对AEGP的其他调用都会转到它注册的函数。

这与效果插件模型非常不同，后者所有的通信都通过同一个入口函数进行。

由于插件加载顺序可能有所不同，因此在入口函数中获取After Effects未提供的套件从来不是一个好主意。相反，应等待适当的钩子函数。

AEGP [API版本](../../intro/compatibility-across-multiple-versions#api-versions)可以帮助区分不同版本的After Effects，以防AEGP需要表现不同或处理不同的行为。

这些其他函数被注册为回调钩子。添加菜单项的AEGP必须注册一个UpdateMenuHook函数（具有AE_GeneralPlug.h中描述的函数签名），After Effects可以调用该函数来确定是否启用这些项。同样地，处理命令的插件会注册一个CommandHook（一个用于所有命令）。

---

## 专业化

AEIO和Artisans必须向After Effects注册才能接收它们所依赖的消息流。

与AEGP API中的其他一切一样，这是通过功能套件完成的；在这种情况下是恰如其名的AEGP_RegisterSuite。

---

## 示例：添加菜单项

在您的入口函数期间，使用[Command Suite](../aegp-suites#aegp_commandsuite1)中的`AEGP_GetUniqueCommand()`从After Effects获取命令ID以用于`AEGP_InsertMenuCommand`。为您添加的每个菜单项使用不同的ID。

使用AEGP_RegisterSuite的`AEGP_RegisterCommandHook()`告诉After Effects当选择您的菜单项时要调用的函数。您使用`AEGP_RegisterUpdateMenuHook()`注册的函数启用和禁用您的菜单项。除非您注册了菜单更新功能否则您的菜单将永久禁用.

无论您添加多少项目,只需登记一次 Command Hook.当被呼叫时根据指令 ID 判断选择了哪个项目,利用 AEPG PICA suite functions 确定当前工程状态并相应行动.例如关键帧插件可能希望在其参数流不是当前选择部分时禁用自己的选项.

---

## 私有数据

不同于特效,AEPGs在一个 AE session 内永远不会卸载.但这并不意味着依赖静态变量和全局变量就是好主意.

所有 hook functions 都被传递了一个 plugin_refconPV 来存储特定于该 function 的信息.许多 AEPG Suite functions都将 `aepg _plugin _id`作为参数;将其存储在传递给您的 `global _refcon PV`,无论是分配结构还是仅 ID本身.

尽可能利用 refcons而非 statics and global variables储存信息这点在处理多线程问题时尤为重要.

用 `global _refcon PV`存放 globals(如你 aepg _plugin id),而 refcon则专门针对 hook-function-specific storage.
潜在“多个实例”陷阱:当第二个命令行实例启动后,aepgs handles都会被复制如果这导致问题(可能会),提供代码将保存 handles附加到具体 instantiation上即可解决此问题...

---

## 线程安全

APGE完全不支持任何形式多线程操作一切都得在主线程完成要么响应回拨要么来自空闲勾选...
唯一保证 thread safe call: 'cause idle routines to be called()'.
但由于 SPBasicSuite自身并非 thread safe所以你得把 function pointer藏匿在主线上...
