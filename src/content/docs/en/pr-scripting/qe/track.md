---
title: Track 接口
---
# Track 接口

`qe.track`

## 描述

`Track` 接口提供了对视频或音频轨道的操作和管理。通过该接口，用户可以添加效果、修改轨道名称、锁定轨道、获取轨道中的组件和项目等。

## 访问方式

```javascript
var track = qe.track; // 获取 Track 对象
```

## 属性

| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| `id` | `number` | 轨道的唯一标识符 |
| `index` | `number` | 轨道的索引值 |
| `name` | `string` | 轨道的名称 |
| `numComponents` | `number` | 轨道组件数量 |
| `numItems` | `number` | 轨道项目数量 |
| `numTransitions` | `number` | 轨道过渡效果数量 |
| `type` | `string` | 轨道的类型 |

## 方法

| 方法名 | 参数 | 返回值类型 | 描述 |
| --- | --- | --- | --- |
| `addAudioEffect(p0, p1, p2)` | `p0: object, p1: number, p2: boolean` | `boolean` | 在音频轨道上添加效果 |
| `getComponentAt(p0)` | `p0: number` | `any` | 获取指定位置的轨道组件 |
| `getItemAt(p0)` | `p0: number` | `object` | 获取指定位置的轨道项目 |
| `getTransitionAt(p0)` | `p0: number` | `object` | 获取指定位置的轨道过渡效果 |
| `insert(p0, p1, p2, p3, p4, p5)` | `p0: object, p1: string, p2: boolean, p3: boolean, p4: boolean, p5: boolean` | `boolean` | 在轨道中插入一个新项目 |
| `isLocked()` | 无 | `boolean` | 检查轨道是否被锁定 |
| `isMuted()` | 无 | `boolean` | 检查轨道是否被静音 |
| `isSyncLocked()` | 无 | `boolean` | 检查轨道是否处于同步锁定状态 |
| `overwrite(p0, p1, p2, p3, p4, p5)` | `p0: object, p1: string, p2: boolean, p3: boolean, p4: boolean, p5: boolean` | `boolean` | 覆盖轨道内容 |
| `razor(p0, p1, p2)` | `p0: string, p1: boolean, p2: boolean` | `boolean` | 对轨道进行切割操作 |
| `setLock(p0)` | `p0: boolean` | `boolean` | 设置轨道的锁定状态 |
| `setMute(p0)` | `p0: boolean` | `boolean` | 设置轨道的静音状态 |
| `setName(p0)` | `p0: string` | `boolean` | 设置轨道的名称 |
| `setSyncLock(p0)` | `p0: boolean` | `boolean` | 设置轨道的同步锁定状态 |
