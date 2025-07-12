---
title: QEProject 接口
---
# QEProject 接口

`qe.project`

## 描述

`QEProject` 接口提供了对 Premiere Pro 项目的操作和管理。通过该接口，可以访问项目的各种信息、执行导入操作、创建新项目项、进行撤销/重做等。

## 访问方式

```javascript
var project = qe.project; // 获取 QEProject 对象
```

## 属性

| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| `currentRendererName` | `string` | 当前渲染器的名称 |
| `importFailures` | `Array` | 导入失败项列表 |
| `isAudioConforming` | `boolean` | 是否正在音频一致化 |
| `isAudioPeakGenerating` | `boolean` | 是否正在生成音频峰值 |
| `isIndexing` | `boolean` | 是否正在索引 |
| `name` | `string` | 项目的名称 |
| `numActiveProgressItems` | `number` | 当前活动进度项的数量 |
| `numAudioPeakGeneratedFiles` | `number` | 生成音频峰值文件的数量 |
| `numBins` | `number` | 项目中的文件夹数量 |
| `numConformedFiles` | `number` | 一致化文件的数量 |
| `numIndexedFiles` | `number` | 已索引文件的数量 |
| `numItems` | `number` | 项目中的总项数 |
| `numSequenceItems` | `number` | 项目中的序列项数量 |
| `numSequences` | `number` | 项目中的序列数量 |
| `path` | `string` | 项目文件的路径 |

## 方法

| 方法名 | 参数 | 返回值类型 | 描述 |
| --- | --- | --- | --- |
| `close(p0, p1)` | `p0: boolean, p1: boolean` | `boolean` | 关闭当前项目 |
| `deletePreviewFiles(p0)` | `p0: string` | `boolean` | 删除指定路径下的预览文件 |
| `findItemByID(p0)` | `p0: string` | `object` | 根据 ID 查找项目项 |
| `flushCache()` | 无 | `boolean` | 刷新项目缓存 |
| `getActiveSequence()` | 无 | `object` | 获取当前活动的序列 |
| `getAudioEffectByName(p0, p1, p2)` | `p0: string, p1: number, p2: boolean` | `object` | 根据名称获取音频效果 |
| `getAudioEffectList(effectType, p1)` | `effectType: number, p1: boolean` | `Array` | 获取音频效果列表 |
| `getAudioTransitionByName(p0, p1)` | `p0: string, p1: boolean` | `object` | 根据名称获取音频过渡效果 |
| `getAudioTransitionList(p0)` | `p0: boolean` | `Array` | 获取音频过渡效果列表 |
| `getBinAt(p0)` | `p0: number` | `object` | 获取指定位置的项目文件夹 |
| `getItemAt(p0)` | `p0: number` | `object` | 获取指定位置的项目项 |
| `getRemainingMetadataCacheIndexCount()` | 无 | `number` | 获取剩余的元数据缓存索引数量 |
| `getRendererNames()` | 无 | `Array` | 获取渲染器名称列表 |
| `getSequenceAt(p0)` | `p0: number` | `object` | 获取指定位置的序列 |
| `getSequenceItemAt(p0)` | `p0: number` | `object` | 获取指定位置的序列项 |
| `getVideoEffectByName(p0, p1)` | `p0: string, p1: boolean` | `object` | 根据名称获取视频效果 |
| `getVideoEffectList(effectType, p1)` | `effectType: number, p1: boolean` | `Array` | 获取视频效果列表 |
| `getVideoTransitionByName(p0, p1)` | `p0: string, p1: boolean` | `object` | 根据名称获取视频过渡效果 |
| `getVideoTransitionList(p0, p1)` | `p0: number, p1: boolean` | `Array` | 获取视频过渡效果列表 |
| `import(p0, isNumberedStills)` | `p0: Array, isNumberedStills: boolean` | `boolean` | 导入项目文件 |
| `importAEComps(p0, p1)` | `p0: string, p1: Array` | `boolean` | 导入 After Effects 合成文件 |
| `importAllAEComps(p0)` | `p0: string` | `boolean` | 导入所有 After Effects 合成文件 |
| `importFiles(p0, p1, p2)` | `p0: Array, p1: boolean, p2: boolean` | `boolean` | 导入指定的文件 |
| `importPSD(p0)` | `p0: string` | `boolean` | 导入 PSD 文件 |
| `importProject(filePath, sequences)` | `filePath: string, sequences: Array` | `boolean` | 导入指定的项目文件及序列 |
| `init()` | 无 | `boolean` | 初始化项目 |
| `newBarsAndTone(p0, p1, p2, p3, p4, p5)` | `p0: number, p1: number, p2: number, p3: number, p4: number, p5: number` | `boolean` | 创建新的条形图和音频信号 |
| `newBin(p0)` | `p0: string` | `boolean` | 创建一个新的项目文件夹 |
| `newBlackVideo(p0, p1, p2, p3, p4)` | `p0: number, p1: number, p2: number, p3: number, p4: number` | `boolean` | 创建一个新的黑色视频 |
| `newColorMatte(p0, p1, p2, p3, p4)` | `p0: number, p1: number, p2: number, p3: number, p4: number` | `boolean` | 创建一个新的彩色样本 |
| `newSequence(p0, p1)` | `p0: string, p1: string` | `boolean` | 创建一个新的序列 |
| `newSmartBin(p0, p1)` | `p0: string, p1: string` | `boolean` | 创建一个新的智能文件夹 |
| `newTransparentVideo(p0, p1, p2, p3, p4)` | `p0: number, p1: number, p2: number, p3: number, p4: number` | `boolean` | 创建一个新的透明视频 |
| `newUniversalCountingLeader(p0, p1, p2, p3, p4, p5)` | `p0: number, p1: number, p2: number, p3: number, p4: number, p5: number` | `boolean` | 创建一个新的通用计数器领导 |
| `redo()` | 无 | `boolean` | 重做操作 |
| `resetNumFilesCounter()` | 无 | `boolean` | 重置文件计数器 |
| `save()` | 无 | `boolean` | 保存当前项目 |
| `saveAs(p0)` | `p0: string` | `boolean` | 另存为指定路径的项目文件 |
| `setRenderer(p0)` | `p0: string` | `boolean` | 设置当前渲染器 |
| `sizeOnDisk()` | 无 | `number` | 获取项目文件在磁盘上的大小 |
| `undo()` | 无 | `boolean` | 撤销操作 |
| `undoStackIndex()` | 无 | `number` | 获取当前撤销堆栈的索引 |
