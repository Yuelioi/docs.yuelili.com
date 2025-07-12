---
title: QEApplication 对象
---
# QEApplication 对象

`qe`

## 描述

`QEApplication` 是 Premiere Pro 的 QE（Quality Engineering）脚本接口的根对象，是使用 QE 接口操作项目和媒体资源的入口点。通过它可以访问和管理项目、序列、轨道、剪辑、播放器等核心对象。该接口常用于插件开发、自动化测试或扩展脚本开发，是标准 ExtendScript 所无法访问的底层能力。

:::note

本文档基于[https://github.com/docsforadobe/types-for-adobe-extras](https://github.com/docsforadobe/types-for-adobe-extras) 以及ai生成, 关于中文描述部分, 仅供参考

:::

## 访问方式

```javascript
var appRoot = qe; // 获取 QEApplication 根对象
```

## 属性

| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| `audioChannelMapping` | `number` | 音频通道映射设置 |
| `codeProfiler` | `object` | 代码性能分析对象 |
| `config` | `string` | 配置路径 |
| `ea` | `object` | 协作功能相关对象 |
| `language` | `string` | 当前语言设置 |
| `location` | `string` | 当前应用的安装路径 |
| `name` | `string` | 应用程序名称 |
| `platform` | `string` | 操作系统平台 |
| `project` | `object` | 当前打开的项目对象 |
| `source` | `object` | 当前源素材预览窗口的对象 |
| `tqm` | `object` | 测试质量管理相关对象 |
| `version` | `string` | 当前应用版本号 |

## 方法

| 方法名 | 参数 | 返回值类型 | 描述 |
| --- | --- | --- | --- |
| `beginDroppedFrameLogging(p0)` | `p0: string` | `boolean` | 开始记录丢帧信息 |
| `disablePerformanceLogging()` | 无 | `boolean` | 禁用性能日志记录 |
| `enablePerformanceLogging()` | 无 | `boolean` | 启用性能日志记录 |
| `enablePlayStats()` | 无 | `boolean` | 启用播放统计功能 |
| `endDroppedFrameLogging()` | 无 | `boolean` | 结束丢帧信息记录 |
| `executeConsoleCommand(p0)` | `p0: string` | `boolean` | 执行控制台命令 |
| `exit()` | 无 | `boolean` | 退出应用 |
| `getDebugDatabaseEntry(p0)` | `p0: string` | `string` | 获取调试数据库条目 |
| `getDroppedFrames()` | 无 | `string` | 获取丢帧数据 |
| `getModalWindowID()` | 无 | `string` | 获取模态窗口 ID |
| `getProgressContainerJSON()` | 无 | `string` | 获取进度容器 JSON 数据 |
| `getSequencePresets()` | 无 | `Array` | 获取序列预设列表 |
| `isFeatureEnabled(p0)` | `p0: string` | `boolean` | 判断特定功能是否启用 |
| `isPerformanceLoggingEnabled()` | 无 | `boolean` | 判断性能日志是否启用 |
| `localize(p0)` | `p0: string` | `string` | 返回本地化的字符串 |
| `newProject(p0)` | `p0: string` | `boolean` | 创建一个新项目 |
| `open(p0, p1)` | `p0: string, p1: boolean` | `boolean` | 打开指定路径的项目 |
| `outputToConsole(p0, p1)` | `p0: string, p1: boolean` | `boolean` | 输出日志到控制台 |
| `resetProject()` | 无 | `boolean` | 重置当前项目 |
| `setAudioChannelMapping(p0)` | `p0: number` | `boolean` | 设置音频通道映射 |
| `setDebugDatabaseEntry(p0, p1)` | `p0: string, p1: string` | `boolean` | 设置调试数据库条目 |
| `startPlayback()` | 无 | `boolean` | 开始播放 |
| `stop()` | 无 | `boolean` | 停止播放 |
| `stopPlayback()` | 无 | `boolean` | 停止播放 |
| `wait(p0)` | `p0: number` | `boolean` | 等待指定时间 |
| `write(p0, p1)` | `p0: string, p1: boolean` | `boolean` | 向指定目标写入数据 |

## 示例

### 获取当前项目对象并列出序列名称

```javascript
var project = qe.project;
var sequenceCount = project.numSequences;

for (var i = 0; i < sequenceCount; i++) {
 var seq = project.getSequenceAt(i);
 $.writeln("Sequence " + i + ": " + seq.name);
}

```

### 创建新序列并设置为当前激活序列

```javascript
var newSeq = qe.createSequence("My New Sequence");
qe.setActiveSequence(newSeq);
```

### 获取当前项目路径

```javascript
var path = qe.getProjectPath();
$.writeln("Current project path: " + path);
```
