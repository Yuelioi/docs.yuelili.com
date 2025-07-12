---
title: PrGPUFilter 函数表
---
# PrGPUFilter 函数表

PrGPUFilter 是一个由效果/转场可以实现的功能组成的结构。

| 选择器 | 可选 | 描述 |
| --- | --- | --- |
| [CreateInstance](../function-descriptions#createinstance) | 否 | 分配并初始化任何 GPU 资源。 |
| [DisposeInstance](../function-descriptions#disposeinstance) | 否 | 释放 GPU 资源。 |
| [GetFrameDependencies](../function-descriptions#getframedependencies) | 是 | 如果效果/转场的渲染结果依赖于输入帧以外的帧，请在此处指定这些帧。 |
| [PreCompute](../function-descriptions#precompute) | 是 | 预计算。 |
| [Render](../function-descriptions#render) | 否 | 渲染。 |
