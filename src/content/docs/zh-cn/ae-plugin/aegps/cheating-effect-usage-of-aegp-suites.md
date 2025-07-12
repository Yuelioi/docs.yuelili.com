---
title: AEGP套件的"作弊式"用法
---
# AEGP套件的"作弊式"用法

当我们向开发者展示AEGP套件的初始实现时，他们就想在效果中使用"作弊"手段。这当然是可行的，但请注意：依赖效果API之外的因素（即从AEGP API获取的任何信息）可能会带来问题。如果After Effects认为一个效果已经具备渲染所需的所有信息，它就不会（例如）根据通过AEGP函数所做的更改来更新其参数。我们正在积极解决未来版本中的这个依赖性问题，但在编写"伪装"成AEGP的效果时请牢记这一点。

效果可以使用部分AEGP套件来获取相机和光照信息，以及来自[AEGP_CompSuite11](../aegp-suites#aegp_compsuite11)的`AEGP_GetLayerParentComp`和`AEGP_GetCompBGColor`函数。但这并不意味着效果可以使用*所有*AEGP套件调用。另请参阅[效果UI与事件](../../effect-ui-events/effect-ui-events)了解效果添加关键帧的更多信息。

[AEGP_PFInterfaceSuite](../aegp-suites#aegp_pfinterfacesuite1)是起点。该套件中的函数允许您获取应用效果的图层的AEGP_LayerH，以及效果实例的AEGP_EffectRefH。[AEGP_UtilitySuite6](../aegp-suites#aegp_utilitysuite6)中的`AEGP_RegisterWithAEGP`允许您获取AEGP_PluginID，这是许多AEGP调用所需的。

---

## 关于依赖AEGP查询

一句话：不要这样做。效果不能允许AEGP查询结果控制渲染内容，除非适当存储这些查询结果（通常在序列数据中）、取消自身渲染，并使用查询到的信息强制重新渲染。

这很棘手。

如果不这样做，会导致难以察觉的缓存错误，保证会让您脱发和增重。
