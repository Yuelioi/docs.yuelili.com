---
title: 渲染队列
---
# RenderQueue 对象

`app.project.renderQueue`

#### 描述

RenderQueue 对象表示渲染自动化过程，即通过特定 After Effects 项目的渲染队列面板可用的数据和功能。属性提供了对渲染队列中项目及其渲染状态的访问。方法可以启动、暂停和停止渲染过程。[RenderQueueItem 对象](../renderqueueitem) 提供了对要渲染项目的特定设置的访问。

---

## 属性

### RenderQueue.canQueueInAME

`app.project.renderQueue.canQueueInAME`

:::note
该方法添加于 After Effects 14.0 (CC 2017)
:::

#### 描述

指示 After Effects 渲染队列中是否有排队的渲染项目。只有排队的项目才能添加到 AME 队列中。

[RenderQueue.queueInAME()](#renderqueuequeueiname)

#### 类型

Boolean; 只读.

---

### RenderQueue.queueNotify

`app.project.renderQueue.queueNotify`

:::note
该方法添加于 After Effects 22.0 (2022)
:::

#### 描述

读取或写入整个渲染队列的 **Notify** 属性。
这在用户界面中表现为渲染队列面板右下角的复选框。

#### 类型

Boolean; 可读写.

---

### RenderQueue.items

`app.project.renderQueue.items`

#### 描述

渲染队列中所有项目的集合。请参阅 [RenderQueueItem 对象](../renderqueueitem)。

#### 类型

[RQItemCollection 对象](../rqitemcollection); 只读.

---

### RenderQueue.numItems

`app.project.renderQueue.numItems`

#### 描述

渲染队列中的项目总数。

#### 类型

Integer; 只读.

---

### RenderQueue.rendering

`app.project.renderQueue.rendering`

#### 描述

当为 `true` 时，渲染过程正在进行或暂停。当为 `false` 时，渲染过程已停止。

#### 类型

Boolean; 只读.

---

## 函数

### RenderQueue.item()

`app.project.renderQueue.item(index)`

#### 描述

从项目集合中获取指定的项目。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `index` | Integer, 范围为 `[0..numItems]` | 项目的位置索引。 |

#### 返回

[RenderQueueItem 对象](../renderqueueitem)。

---

### RenderQueue.pauseRendering()

`app.project.renderQueue.pauseRendering(pause)`

#### 描述

暂停当前的渲染过程，或继续已暂停的渲染过程。这与在渲染过程中点击渲染队列面板中的“暂停”按钮相同。你可以从 [RenderQueueItem.onstatus](../renderqueueitem#renderqueueitemonstatus) 或 [app.onError](../../general/application#apponerror) 回调中调用此方法。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `pause` | Boolean | `true` 暂停当前的渲染过程，`false` 继续已暂停的渲染。 |

#### 返回

无。

---

### RenderQueue.render()

`app.project.renderQueue.render()`

#### 描述

启动渲染过程。这与点击渲染队列面板中的“渲染”按钮相同。该方法在渲染过程完成之前不会返回。要暂停或停止渲染过程，请从 `onError` 或 `onstatus` 回调中调用 [RenderQueue.pauseRendering()](#renderqueuepauserendering) 或 [RenderQueue.stopRendering()](#renderqueuestoprendering)。

- 要在渲染过程中响应错误，请在 [app.onError](../../general/application#apponerror) 中定义一个回调函数。
- 要在渲染过程中响应特定项目状态的变化，请在关联的 RenderQueueItem 对象中的 [RenderQueueItem.onstatus](../renderqueueitem#renderqueueitemonstatus) 中定义一个回调函数。

#### 参数

无。

#### 返回

无。

---

### RenderQueue.showWindow()

`app.project.renderQueue.showWindow(doShow)`

#### 描述

显示或隐藏渲染队列面板。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `doShow` | Boolean | 当为 `true` 时，显示渲染队列面板。当为 `false` 时，隐藏它。 |

#### 返回

无。

---

### RenderQueue.stopRendering()

`app.project.renderQueue.stopRendering()`

#### 描述

停止渲染过程。这与在渲染过程中点击渲染队列面板中的“停止”按钮相同。你可以从 [RenderQueueItem.onstatus](../renderqueueitem#renderqueueitemonstatus) 或 [app.onError](../../general/application#apponerror) 回调中调用此方法。

#### 参数

无。

#### 返回

无。

---

### RenderQueue.queueInAME()

`app.project.renderQueue.queueInAME(render_immediately_in_AME)`

:::note
该方法添加于 After Effects 14.0 (CC 2017)
:::

#### 描述

调用“在 AME 中排队”命令。此方法需要传递一个布尔值，告诉 AME 是仅将渲染项目排队 (`false`) 还是 AME 也应该开始处理其队列 (`true`)。

:::note
这需要 Adobe Media Encoder CC 2017 (11.0) 或更高版本。
:::

:::tip
当 AME 接收到排队的项目时，它会应用最近使用的编码预设。如果 `render_immediately_in_AME` 设置为 `true`，你将没有机会更改编码设置。
:::

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `render_immediately_in_AME` | Boolean | 告诉 AME 是仅将渲染项目排队 (`false`) 还是 AME 也应该开始处理其队列 (`true`)。 |

#### 返回

无。

#### 示例

以下示例代码检查渲染队列中是否有排队的项目，如果有，则将它们排队到 AME 中，但不会立即开始渲染：

```javascript
// 支持在 AME 中排队的脚本。
// 需要 Adobe Media Encoder 11.0。
if (app.project.renderQueue.canQueueInAME === true) {
 // 将排队的项目发送到 AME，但不立即开始渲染。
 app.project.renderQueue.queueInAME(false);
} else {
 alert("渲染队列中没有排队的项目。");
}
```
