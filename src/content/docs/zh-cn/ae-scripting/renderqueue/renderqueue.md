---
title: renderqueue
---
# RenderQueue object

`app.project.renderQueue`

#### 描述

The RenderQueue object represents the render automation process, the data and functionality that is available through the Render Queue panel of a particular After Effects project. Attributes provide access to items in the render queue and their render status. Methods can start, pause, and stop the rendering process. The [RenderQueueItem object](../renderqueueitem) provides access to the specific settings for an item to be rendered.

---

## 属性

### RenderQueue.canQueueInAME

`app.project.renderQueue.canQueueInAME`

:::note
该方法添加于 After Effects 14.0 (CC 2017)
:::

#### 描述

indicates whether or not there are queued render items in the After Effects render queue. Only queued items can be added to the AME queue.

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

Read or write the **Notify** property for the entire Render Queue.
This is exposed in the UI as a checkbox in the lower right corner of the Render Queue panel.

#### 类型

Boolean; read/write.

---

### RenderQueue.items

`app.project.renderQueue.items`

#### 描述

A collection of all items in the render queue. See [RenderQueueItem object](../renderqueueitem).

#### 类型

[RQItemCollection object](../rqitemcollection); 只读.

---

### RenderQueue.numItems

`app.project.renderQueue.numItems`

#### 描述

The total number of items in the render queue.

#### 类型

Integer; 只读.

---

### RenderQueue.rendering

`app.project.renderQueue.rendering`

#### 描述

When `true`, the rendering process is in progress or paused. When `false`, it is stopped.

#### 类型

Boolean; 只读.

---

## 函数

### RenderQueue.item()

`app.project.renderQueue.item(index)`

#### 描述

Gets a specified item from the ite ms collection.

#### 参数

| 参数 |                 类型                  |           描述           |
| --------- | ------------------------------------- | ------------------------------- |
| `index`   | Integer, 范围为 `[0..numItems]` | The position index of the item. |

#### 返回

[RenderQueueItem object](../renderqueueitem).

---

### RenderQueue.pauseRendering()

`app.project.renderQueue.pauseRendering(pause)`

#### 描述

Pauses the current rendering process, or continues a paused rendering process. This is the same as clicking Pause in the Render Queue panel during a render. You can call this method from an [RenderQueueItem.onstatus](renderqueueitem.md#renderqueueitemonstatus) or [app.onError](../general/application.md#apponerror) callback.

#### 参数

| 参数 |  类型   |                                  描述                                   |
| --------- | ------- | ------------------------------------------------------------------------------ |
| `pause`   | Boolean | `true` to pause a current render process, `false` to continue a paused render. |

#### 返回

Nothing.

---

### RenderQueue.render()

`app.project.renderQueue.render()`

#### 描述

Starts the rendering process. This is the same as clicking Render in the Render Queue panel. The method does not return until the render process is complete. To pause or stop the rendering process, call [RenderQueue.pauseRendering()](#renderqueuepauserendering) or [RenderQueue.stopRendering()](#renderqueuestoprendering) from an `onError` or `onstatus` callback.

- To respond to errors during the rendering process, define a callback function in [app.onError](../general/application.md#apponerror).
- To respond to changes in the status of a particular item while the render is progressing, define a callback function in [RenderQueueItem.onstatus](renderqueueitem.md#renderqueueitemonstatus) in the associated RenderQueueItem object.

#### 参数

None.

#### 返回

Nothing.

---

### RenderQueue.showWindow()

`app.project.renderQueue.showWindow(doShow)`

#### 描述

Shows or hides the Render Queue panel.

#### 参数

| 参数 |  类型   |                           描述                            |
| --------- | ------- | ---------------------------------------------------------------- |
| `doShow`  | Boolean | When `true`, show the Render Queue panel. When `false`, hide it. |

#### 返回

Nothing.

---

### RenderQueue.stopRendering()

`app.project.renderQueue.stopRendering()`

#### 描述

Stops the rendering process. This is the same as clicking Stop in the Render Queue panel during a render. You can call this method from an [RenderQueueItem.onstatus](renderqueueitem.md#renderqueueitemonstatus) or [app.onError](../general/application.md#apponerror) callback.

#### 参数

None.

#### 返回

Nothing.

---

### RenderQueue.queueInAME()

`app.project.renderQueue.queueInAME(render_immediately_in_AME)`

:::note
该方法添加于 After Effects 14.0 (CC 2017)
:::

#### 描述

Calls the Queue In AME command. This method requires passing a boolean value, telling AME whether to only queue the render items (`false`) or if AME should also start processing its queue (`true`).

:::note
This requires Adobe Media Encoder CC 2017 (11.0) or later.
:::

:::tip
When AME receives the queued items, it applies the most recently used encoding preset. If `render_immediately_in_AME` is set to `true`, you will not have an opportunity to change the encoding settings.
:::

#### 参数

|          参数          |  类型   |                                                       描述                                                       |
| --------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| `render_immediately_in_AME` | Boolean | Telling AME whether to only queue the render items (`false`) or if AME should also start processing its queue (`true`). |

#### 返回

Nothing.

#### 示例

The following sample code checks to see if there are queued items in the render queue, and if so queues them in AME but does not immediately start rendering:

```javascript
// Scripting support for Queue in AME.
// Requires Adobe Media Encoder 11.0.
if (app.project.renderQueue.canQueueInAME === true) {
    // Send queued items to AME, but do not start rendering.
    app.project.renderQueue.queueInAME(false);
} else {
    alert("There are no queued item in the Render Queue.");
}
```
