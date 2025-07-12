---
title: PrGPUFilter Function Table
---
# PrGPUFilter Function Table

PrGPUFilter is a structure consisting of the following functions that a effect/transition can implement.

| Selector | Optional | Description |
| --- | --- | --- |
| [CreateInstance](../function-descriptions#createinstance) | No | Allocate and initialize any GPU resources. |
| [DisposeInstance](../function-descriptions#disposeinstance) | No | Release GPU resources. |
| [GetFrameDependencies](../function-descriptions#getframedependencies) | Yes | If the rendered result of the effect/transition depends on frames other than the input frame, specify these here. |
| [PreCompute](../function-descriptions#precompute) | Yes | Precompute. |
| [Render](../function-descriptions#render) | No | Render. |
