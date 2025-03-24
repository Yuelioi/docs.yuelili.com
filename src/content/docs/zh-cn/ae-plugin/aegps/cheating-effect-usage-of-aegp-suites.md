---
title: AEGP效果套件作弊法
---
# AEGP套件的作弊法

当我们向开发者展示AEGP套件的初始实现时，他们就想“作弊”并从效果内部使用它们。这当然是可能的，但请记住，依赖效果API之外的因素（即从AEGP API获取的任何信息）可能会导致问题。如果After Effects认为一个效果拥有渲染所需的所有信息，它不会（例如）根据通过AEGP函数所做的更改更新其参数。我们正在积极为未来版本解决这个依赖问题，但在编写“伪装”成AEGP的效果时请牢记这一点。

效果可以使用一些AEGP套件来利用相机和光照信息，以及来自[AEGP_CompSuite11](../aegp-suites#aegp_compsuite11)的 `AEGP_GetLayerParentComp`和 `AEGP_GetCompBGColor`函数。这不应被解释为意味着效果可以使用*任何*AEGP套件调用。此外，有关添加关键帧的效果的更多信息，请参见[Effect UI &amp; Events](../../effect-ui-events/effect-ui-events)。

[AEGP_PFInterfaceSuite](../aegp-suites#aegp_pfinterfacesuite1)是起点。此套件中的函数允许您检索应用效果的图层的AEP_LayerH以及您的效果的实例的AE_EffectRefH。[AEUtilitySuite6](../ae-suites#aeutilitysuite6)中的 `AE_RegisterWithAE`允许您获取许多AE调用所需的PluginID.   ## 依赖于 AE查询  一句话：不要这样做！除非适当存储这些查询结果（通常在序列数据中），取消自己的渲染并使用查询到的信息强制重新渲染,否则无法让 AE查询的结果控制所呈现的内容.   这很棘手.   如果不这样做会导致令人讨厌且难以察觉的缓存错误,保证会导致脱发和体重增加.
