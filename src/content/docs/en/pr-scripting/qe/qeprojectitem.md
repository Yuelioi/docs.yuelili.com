---
title: QEProjectItem 接口
---
# QEProjectItem 接口

`qe.projectItem`

## 描述

`QEProjectItem` 接口提供了对 Premiere Pro 中项目项的操作和管理。它允许用户获取关于项目项的各种信息、进行媒体链接、生成代理、管理音频一致化等操作。

## 访问方式

```javascript
var projectItem = qe.projectItem; // 获取 QEProjectItem 对象
```

## 属性

| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| `clip` | `object` | 项目项的剪辑对象 |
| `filePath` | `string` | 项目项的文件路径 |
| `name` | `string` | 项目项的名称 |

## 方法

| 方法名 | 参数 | 返回值类型 | 描述 |
| --- | --- | --- | --- |
| `automateToSequence(p0, p1, p2, p3, p4)` | `p0: object, p1: number, p2: number, p3: number, p4: number` | `boolean` | 将项目项自动添加到序列中 |
| `containsSpeechTrack()` | 无 | `boolean` | 检查项目项是否包含语音轨道 |
| `createProxy(p0, p1)` | `p0: string, p1: string` | `boolean` | 创建代理文件 |
| `getMetadataSize()` | 无 | `number` | 获取项目项的元数据大小 |
| `isAudioConforming()` | 无 | `boolean` | 检查音频是否正在一致化 |
| `isAudioPeakGenerating()` | 无 | `boolean` | 检查是否正在生成音频峰值 |
| `isIndexing()` | 无 | `boolean` | 检查是否正在索引 |
| `isOffline()` | 无 | `boolean` | 检查项目项是否离线 |
| `isPending()` | 无 | `boolean` | 检查项目项是否处于待处理状态 |
| `linkMedia(p0, p1)` | `p0: string, p1: boolean` | `boolean` | 链接媒体文件 |
| `openInSource()` | 无 | `boolean` | 在源监视器中打开项目项 |
| `rename(assetName)` | `assetName: string` | `boolean` | 重命名项目项 |
| `setOffline()` | 无 | `boolean` | 将项目项设置为离线状态 |
