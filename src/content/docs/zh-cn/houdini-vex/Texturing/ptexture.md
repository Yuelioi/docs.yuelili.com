---
title: ptexture
order: 8
---
`<type> ptexture(string map, int face_id, ...)`

`<type> ptexture(string map, int face_id, float s, float t, ...)`

该函数已被弃用，因为ptex支持已集成到`texture()`函数中。
可选参数

## 可选参数

| 关键字 | 取值 |
| --- | --- |
| |`channel`
td>>
一个整数值，表示要使用的ptex图像通道。

| |`filter`
td>>

| `filtersharp` | 一个浮点值，表示滤镜锐度。仅对双三次滤镜有效。范围为0-1（默认为1.0）。 |
| `lerp` | 一个布尔值，表示是否在Mip贴图之间进行插值。默认为true。 |
| `blur` | 用于评估的纹理模糊值（默认为0）。 |
| `width` | 用于评估的纹理宽度值（默认为1）。 |
