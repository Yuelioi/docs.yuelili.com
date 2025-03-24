---
title: aegp 详情
---
# AEGP 细节

## 使用 Cookie

在 After Effects 必须围绕您的 AEGP 调用的函数保留状态信息的情况下（例如，当 artisan 正在渲染一帧，或者 keyframer 正在从同一流中添加和删除一系列关键帧时），您将调用 `begin()` 和 `end()` 函数。

通常，`begin` 函数会返回一个不透明的标识符，或称为“cookie”，然后您必须将其传递给正在使用的函数。`end` 函数将正确处理该 cookie。请参阅 `AEGP_StartAddKeyframes()`（在 [AEGP_KeyframeSuite3](../aegp-suites#aegp_keyframesuite3) 下）以获取示例。

---

## 修改渲染队列中的项目

如果您调用 `AEGP_AddCompToRenderQueue`（来自 [AEGP_RenderQueueSuite1](../aegp-suites#aegp_renderqueuesuite1)），或者用户手动从渲染队列中添加或删除合成，所有对渲染队列项目的引用都将失效。同样，添加或删除输出模块会使每个渲染队列项目的任何此类引用失效。

---

## 名称与纯色层

纯色层在 After Effects 用户界面中有名称，但在它们的 `PF_LayerDef` [PF_EffectWorld / PF_LayerDef](../../effect-basics/PF_EffectWorld) 中没有名称。因此，它们的名称无法通过 `AEGP_GetItemName`（在 [AEGP_ItemSuite9](../aegp-suites#aegp_itemsuite9) 中）或 `AEGP_GetLayerName`（在 [AEGP_LayerSuite9](../aegp-suites#aegp_layersuite9) 中）检索。

但是，您可以使用与它们关联的 ItemH 来调用 `AEGP_GetItemName`（来自 [AEGP_ItemSuite9](../aegp-suites#aegp_itemsuite9)）。

---

## 报告错误和问题

使用 `AEGP_ItemSuite>AEGP_ReportInfo()` 向用户报告信息，并标识您的插件。AEIO 插件使用传递给它们的 AEIO_BasicData 中包含的 `msg_func` 指针（与每个函数一起传递）来代替。

---

## 变换：先发生什么？

After Effects 首先基于自动方向（朝向路径或兴趣点）计算旋转，然后计算方向，最后计算 X、Y 和 Z 旋转。

---

## 从效果层参数访问像素

使用 `AEGP_GetNewStreamValue`（在 [AEGP_StreamSuite5](../aegp-suites#aegp_streamsuite5) 中）获取图层的 `layer_id`，然后使用新的 `AEGP_GetLayerFromLayerID`（在 [AEGP_LayerSuite9](../aegp-suites#aegp_layersuite9) 中）获取 `AEGP_LayerH`。
