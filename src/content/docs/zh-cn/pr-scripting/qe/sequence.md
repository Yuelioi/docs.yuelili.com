---
title: Sequence 接口
---
# Sequence 接口

`qe.sequence`

## 描述

`Sequence` 接口提供了对视频序列的操作和管理。通过该接口，用户可以设置和获取序列的各种参数、进行渲染、导出、调整轨道等操作。

## 访问方式

```javascript
var sequence = qe.sequence; // 获取 Sequence 对象
```

## 属性

| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| `CTI` | `object` | 当前时间指示器位置 |
| `audioDisplayFormat` | `number` | 音频显示格式 |
| `audioFrameRate` | `number` | 音频帧率 |
| `editingMode` | `string` | 编辑模式 |
| `fieldType` | `number` | 字段类型 |
| `guid` | `string` | 序列的唯一标识符 |
| `inPoint` | `object` | 序列的入点 |
| `multicam` | `object` | 多机位信息 |
| `name` | `string` | 序列的名称 |
| `numAudioTracks` | `number` | 音频轨道数量 |
| `numVideoTracks` | `number` | 视频轨道数量 |
| `outPoint` | `object` | 序列的出点 |
| `par` | `number` | 像素纵横比（Pixel Aspect Ratio） |
| `player` | `object` | 播放控制对象 |
| `presetList` | `Array` | 序列预设列表 |
| `previewPresetCodec` | `number` | 预览预设的编码格式 |
| `previewPresetPath` | `string` | 预览预设路径 |
| `useMaxBitDepth` | `boolean` | 是否使用最大位深度 |
| `useMaxRenderQuality` | `boolean` | 是否使用最大渲染质量 |
| `videoDisplayFormat` | `number` | 视频显示格式 |
| `videoFrameRate` | `number` | 视频帧率 |
| `workInPoint` | `object` | 工作区入点 |
| `workOutPoint` | `object` | 工作区出点 |
| `__count__` | `number` | 序列对象数量 |
| `__class__` | `string` | 类名称 |
| `reflect` | `Reflection` | 反射信息 |

## 方法

| 方法名 | 参数 | 返回值类型 | 描述 |
| --- | --- | --- | --- |
| `addTracks(p0, p1, p2, p3, p4, p5, p6, p7)` | `p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number` | `boolean` | 添加多个轨道 |
| `close()` | 无 | `boolean` | 关闭序列 |
| `deletePreviewFiles(p0, p1)` | `p0: string, p1: string` | `boolean` | 删除预览文件 |
| `exportDirect(p0, p1, p2)` | `p0: string, p1: string, p2: boolean` | `boolean` | 直接导出序列 |
| `exportFrameBMP(p0, p1, p2)` | `p0: string, p1: string, p2: string` | `boolean` | 导出帧为 BMP 格式 |
| `exportFrameDPX(p0, p1, p2)` | `p0: string, p1: string, p2: string` | `boolean` | 导出帧为 DPX 格式 |
| `exportFrameGIF(p0, p1, p2)` | `p0: string, p1: string, p2: string` | `boolean` | 导出帧为 GIF 格式 |
| `exportFrameJPEG(p0, p1, p2)` | `p0: string, p1: string, p2: string` | `boolean` | 导出帧为 JPEG 格式 |
| `exportFramePNG(p0, p1, p2)` | `p0: string, p1: string, p2: string` | `boolean` | 导出帧为 PNG 格式 |
| `exportFrameTIFF(p0, p1, p2)` | `p0: string, p1: string, p2: string` | `boolean` | 导出帧为 TIFF 格式 |
| `exportFrameTarga(p0, p1, p2)` | `p0: string, p1: string, p2: string` | `boolean` | 导出帧为 Targa 格式 |
| `exportToAME(p0, p1, p2)` | `p0: string, p1: string, p2: boolean` | `boolean` | 导出到 Adobe Media Encoder |
| `extract(p0, p1)` | `p0: string, p1: string` | `boolean` | 提取帧或数据 |
| `flushCache()` | 无 | `boolean` | 清除缓存 |
| `getAudioTrackAt(p0)` | `p0: number` | `object` | 获取音频轨道 |
| `getEmptyBarTimes()` | 无 | `Array` | 获取空白时间段 |
| `getExportComplete()` | 无 | `boolean` | 检查导出是否完成 |
| `getExportFileExtension(p0)` | `p0: string` | `string` | 获取导出文件的扩展名 |
| `getGreenBarTimes()` | 无 | `Array` | 获取绿色条时间段 |
| `getRedBarTimes()` | 无 | `Array` | 获取红色条时间段 |
| `getVideoTrackAt(p0)` | `p0: number` | `object` | 获取视频轨道 |
| `getYellowBarTimes()` | 无 | `Array` | 获取黄色条时间段 |
| `isIncompleteBackgroundVideoEffects()` | 无 | `boolean` | 检查是否存在不完整的背景视频效果 |
| `isOpen()` | 无 | `boolean` | 检查序列是否已打开 |
| `left(p0, p1)` | `p0: string, p1: string` | `boolean` | 将序列左对齐 |
| `lockTracks(p0, p1)` | `p0: string, p1: boolean` | `boolean` | 锁定或解锁轨道 |
| `makeCurrent()` | 无 | `boolean` | 将序列设置为当前序列 |
| `muteTracks(p0, p1)` | `p0: string, p1: boolean` | `boolean` | 静音或恢复轨道音频 |
| `razor(p0, p1, p2)` | `p0: string, p1: boolean, p2: boolean` | `boolean` | 切割序列 |
| `removeAudioTrack(p0)` | `p0: number` | `boolean` | 移除音频轨道 |
| `removeEmptyAudioTracks()` | 无 | `boolean` | 移除空音频轨道 |
| `removeEmptyVideoTracks()` | 无 | `boolean` | 移除空视频轨道 |
| `removeTracks(p0, p1, p2, p3, p4, p5)` | `p0: number, p1: number, p2: number, p3: number, p4: number, p5: number` | `boolean` | 移除多个轨道 |
| `removeVideoTrack(p0)` | `p0: number` | `boolean` | 移除视频轨道 |
| `renderAll()` | 无 | `boolean` | 渲染所有轨道 |
| `renderAudio()` | 无 | `boolean` | 渲染音频轨道 |
| `renderPreview()` | 无 | `boolean` | 渲染预览 |
| `setAudioDisplayFormat(p0)` | `p0: number` | `boolean` | 设置音频显示格式 |
| `setAudioFrameRate(p0)` | `p0: number` | `boolean` | 设置音频帧率 |
| `setCTI(p0)` | `p0: string` | `boolean` | 设置时间指示器位置 |
| `setInOutPoints(p0, p1, p2)` | `p0: string, p1: string, p2: boolean` | `boolean` | 设置入点和出点 |
| `setInPoint(p0, p1, p2)` | `p0: string, p1: boolean, p2: boolean` | `boolean` | 设置入点 |
| `setOutPoint(p0, p1, p2)` | `p0: string, p1: boolean, p2: boolean` | `boolean` | 设置出点 |
| `setPreviewFrameSize(p0, p1)` | `p0: number, p1: number` | `boolean` | 设置预览帧大小 |
| `setPreviewPresetPath(p0)` | `p0: string` | `boolean` | 设置预览预设路径 |
| `setUseMaxBitDepth(p0)` | `p0: boolean` | `boolean` | 设置是否使用最大位深度 |
| `setUseMaxRenderQuality(p0)` | `p0: boolean` | `boolean` | 设置是否使用最大渲染质量 |
| `setVideoDisplayFormat(p0)` | `p0: number` | `boolean` | 设置视频显示格式 |
| `setVideoFrameSize(p0, p1)` | `p0: number, p1: number` | `boolean` | 设置视频帧大小 |
| `setWorkInOutPoints(p0, p1, p2)` | `p0: string, p1: string, p2: boolean` | `boolean` | 设置工作区入点和出点 |
| `setWorkInPoint(p0, p1)` | `p0: string, p1: boolean` | `boolean` | 设置工作区入点 |
| `setWorkOutPoint(p0, p1)` | `p0: string, p1: boolean` | `boolean` | 设置工作区出点 |
| `syncLockTracks(p0, p1)` | `p0: string, p1: boolean` | `boolean` | 同步锁定轨道 |
