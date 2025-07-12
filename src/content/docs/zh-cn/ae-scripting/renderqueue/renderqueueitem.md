---
title: 渲染队列项
---
# RenderQueueItem 对象

`app.project.renderQueue.item(index)`

#### 描述

RenderQueueItem 对象表示渲染队列中的单个项目。它提供了对要渲染的项目的特定设置的访问。通过使用 [RQItemCollection 对象](../rqitemcollection) 将合成添加到渲染队列来创建该对象；请参阅 [RQItemCollection.add()](../rqitemcollection#rqitemcollectionadd)。

---

## 属性

### RenderQueueItem.comp

`app.project.renderQueue.item(index).comp`

#### 描述

该渲染队列项目将渲染的合成。要更改合成，必须删除此渲染队列项目并创建一个新的。

#### 类型

[CompItem 对象](../../item/compitem); 只读.

---

### RenderQueueItem.elapsedSeconds

`app.project.renderQueue.item(index).elapsedSeconds`

#### 描述

渲染此项目所花费的秒数。

#### 类型

整数，如果项目尚未渲染则为 `null`; 只读.

---

### RenderQueueItem.logType

`app.project.renderQueue.item(index).logType`

#### 描述

该项目的日志类型，指示在渲染此项目时应记录哪些事件。

#### 类型

`LogType` 枚举值; (可读/写). 可能的值包括：

- `LogType.ERRORS_ONLY`
- `LogType.ERRORS_AND_SETTINGS`
- `LogType.ERRORS_AND_PER_FRAME_INFO`

---

### RenderQueueItem.numOutputModules

`app.project.renderQueue.item(index).numOutputModules`

#### 描述

分配给此项目的输出模块总数。

#### 类型

整数; 只读.

---

### RenderQueueItem.onstatus

`app.project.renderQueue.item(index).onstatus`

#### 描述

每当 [RenderQueueItem.status](#renderqueueitemstatus) 属性的值发生变化时调用的回调函数的名称。

在渲染进行中或暂停时，您无法对渲染队列项目或应用程序进行更改；但是，您可以使用此回调来暂停或停止渲染过程。请参阅 [RenderQueue.pauseRendering()](../renderqueue#renderqueuepauserendering) 和 [RenderQueue.stopRendering()](../renderqueue#renderqueuestoprendering)。另请参阅 [app.onError](../../general/application#apponerror)。

#### 类型

函数名称字符串，如果未分配函数则为 `null`。

#### 示例

```javascript
function myStatusChanged() {
 alert(app.project.renderQueue.item(1).status);
}

app.project.renderQueue.item(1).onstatus = myStatusChanged();
app.project.renderQueue.item(1).render = false; // 更改状态并显示对话框
```

---

### RenderQueueItem.outputModules

`app.project.renderQueue.item(index).outputModules`

#### 描述

该项目的输出模块集合。

#### 类型

[OMCollection 对象](../omcollection); 只读.

---

### RenderQueueItem.queueItemNotify

`app.project.renderQueue.item(index).queueItemNotify`

:::note
该方法添加于 After Effects 22.0 (2022)
:::

#### 描述

脚本可以读取和写入渲染队列中每个项目的 **Notify** 复选框。这在用户界面中显示为渲染队列项目旁边的复选框，位于 Notify 列中。

默认情况下，此列是隐藏的，可能需要通过右键单击渲染队列列标题并选择 Notify 来使其可见。

#### 类型

布尔值; 可读/写.

---

### RenderQueueItem.render

`app.project.renderQueue.item(index).render`

#### 描述

当为 `true` 时，项目将在渲染队列启动时被渲染。当设置为 `true` 时，[RenderQueueItem.status](#renderqueueitemstatus) 设置为 `RQItemStatus.QUEUED`。当设置为 `false` 时，`status` 设置为 `RQItemStatus.UNQUEUED`。

#### 类型

布尔值; 可读/写.

---

### RenderQueueItem.skipFrames

`app.project.renderQueue.item(index).skipFrames`

#### 描述

渲染此项目时要跳过的帧数。使用此功能可以执行比完整渲染更快的渲染测试。值为 0 时不跳过任何帧，并导致所有帧的常规渲染。值为 1 时跳过每隔一帧。这相当于“每隔两帧渲染一次”。更高的值会跳过更多的帧。总时间长度保持不变。例如，如果 skip 的值为 1，则序列输出将具有一半的帧数，而在电影输出中，每帧的持续时间将加倍。

#### 类型

整数，范围为 `[0..99]`; 可读/写.

---

### RenderQueueItem.startTime

`app.project.renderQueue.item(index).startTime`

#### 描述

该项目开始渲染的日期和时间。

#### 类型

Date 对象，如果项目尚未开始渲染则为 `null`; 只读.

---

### RenderQueueItem.status

`app.project.renderQueue.item(index).status`

#### 描述

该项目的当前渲染状态。

#### 类型

`RQItemStatus` 枚举值; 只读. 可能的值包括：

- `RQItemStatus.WILL_CONTINUE`: 渲染过程已暂停。
- `RQItemStatus.NEEDS_OUTPUT`: 项目缺少有效的输出路径。
- `RQItemStatus.UNQUEUED`: 项目列在渲染队列面板中，但合成尚未准备好渲染。
- `RQItemStatus.QUEUED`: 合成已准备好渲染。
- `RQItemStatus.RENDERING`: 合成正在渲染。
- `RQItemStatus.USER_STOPPED`: 渲染过程被用户或脚本停止。
- `RQItemStatus.ERR_STOPPED`: 渲染过程因错误而停止。
- `RQItemStatus.DONE`: 该项目的渲染过程已完成。

---

### RenderQueueItem.templates

`app.project.renderQueue.item(index).templates`

#### 描述

该项目可用的所有渲染设置模板的名称。另请参阅 [RenderQueueItem.saveAsTemplate()](#renderqueueitemsaveastemplate)。

#### 类型

字符串数组; 只读.

---

### RenderQueueItem.timeSpanDuration

`app.project.renderQueue.item(index).timeSpanDuration`

#### 描述

要渲染的合成的持续时间（以秒为单位）。持续时间通过从结束时间减去开始时间来确定。设置此值与在渲染设置对话框中设置自定义结束时间相同。

#### 类型

浮点值; 可读/写.

---

### RenderQueueItem.timeSpanStart

`app.project.renderQueue.item(index).timeSpanStart`

#### 描述

合成中开始渲染的时间（以秒为单位）。设置此值与在渲染设置对话框中设置自定义开始时间相同。

#### 类型

浮点值; 可读/写.

---

## 函数

### RenderQueueItem.applyTemplate()

`app.project.renderQueue.item(index).applyTemplate(templateName)`

#### 描述

将渲染设置模板应用于该项目。另请参阅 [RenderQueueItem.saveAsTemplate()](#renderqueueitemsaveastemplate) 和 [RenderQueueItem.templates](#renderqueueitemtemplates)。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `templateName` | 字符串 | 要应用的模板名称。 |

#### 返回

无。

---

### RenderQueueItem.duplicate()

`app.project.renderQueue.item(index).duplicate()`

#### 描述

创建此项目的副本并将其添加到渲染队列中。

:::tip
复制状态为“Done”的项目会将新项目的状态设置为“Queued”。
:::

#### 参数

无。

#### 返回

RenderQueueItem 对象。

---

### RenderQueueItem.getSetting()

`app.project.renderQueue.item(index).getSetting()`

:::note
该方法添加于 After Effects 13.0 (CC 2014)
:::

#### 描述

获取特定渲染队列项目设置。

- 已弃用的来源：[https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)
- 存档版本：[https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)

#### 示例

```javascript
// 获取渲染设置的“Proxy Use”当前值
// 键和值字符串为英文。
var rqItem1_proxyUse = app.project.renderQueue.item(1).getSetting("Proxy Use");

// 获取相同设置的字符串版本，在键字符串末尾添加“-str”
var rqItem1_proxyUse_str = app.project.renderQueue.item(1).getSetting("Proxy Use-str");
```

---

### RenderQueueItem.getSettings()

`app.project.renderQueue.item(index).getSettings()`

:::note
该方法添加于 After Effects 13.0 (CC 2014)
:::

#### 描述

获取给定渲染队列项目的所有设置。

- 已弃用的来源：[https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)
- 存档版本：[https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)

#### 示例

```javascript
// 获取包含渲染队列项目1的所有可能渲染设置值的对象，并将其转换为JSON格式。

var rqItem1_spec_str = app.project.renderQueue.item(1).getSettings(GetSettingsFormat.SPEC);
var rqItem1_spec_str_json = rqItem1_spec_str.toSource();
```

---

### RenderQueueItem.outputModule()

`app.project.renderQueue.item(index).outputModule(index)`

#### 描述

获取指定索引位置的输出模块。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `index` | 整数，范围为 `[1..numOutputModules]` | 输出模块的位置索引。 |

#### 返回

OutputModule 对象。

---

### RenderQueueItem.remove()

`app.project.renderQueue.item(index).remove()`

#### 描述

从渲染队列中删除此项目。

#### 参数

无。

#### 返回

无。

---

### RenderQueueItem.saveAsTemplate()

`app.project.renderQueue.item(index).saveAsTemplate(name)`

#### 描述

将项目的当前渲染设置保存为具有指定名称的新模板。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 新模板的名称。 |

#### 返回

无。

---

### RenderQueueItem.setSetting()

`app.project.renderQueue.item(index).setSetting()`

:::note
该方法添加于 After Effects 13.0 (CC 2014)
:::

#### 描述

为给定渲染队列项目设置特定设置。

已弃用的来源：[https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)

存档版本：[https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)

#### 示例

```javascript
// 将“Proxy Use”的值设置为“Use All Proxies”

app.project.renderQueue.item(1).setSetting("Proxy Use", "Use All Proxies");

// 您也可以使用数字。
// 下一行与上一个示例相同。

app.project.renderQueue.item(1).setSetting("Proxy Use", 1);
```

---

### RenderQueueItem.setSettings()

`app.project.renderQueue.item(index).setSettings()`

:::note
该方法添加于 After Effects 13.0 (CC 2014)
:::

#### 描述

为给定渲染队列项目设置多个设置。

- 已弃用的来源：[https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)
- 存档版本：[https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva](https://web.archive.org/web/20200622100656/https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/?segment=dva)

#### 示例

```javascript
// 获取包含渲染队列项目1的可设置渲染设置值的字符串版本的对象。
// 要以数字格式获取值，请使用 GetSettingsFormat.NUMBER_SETTABLE 作为参数。

var rqItem1_settable_str = app.project.renderQueue.item(1).getSettings( GetSettingsFormat.STRING_SETTABLE );

// 使用从渲染队列项目1获取的值设置渲染队列项目2。

app.project.renderQueue.item(2).setSettings( rqItem1_settable_str );

// 使用您创建的值设置渲染队列项目3。

var my_renderSettings = {
 "Color Depth": "32 bits per channel",
 "Quality": "Best",
 "Effects": "All On",
 "Time Span Duration": "1.0",
 "Time Span Start": "2.0"
};

app.project.renderQueue.item(2).setSettings( my_renderSettings );
```
