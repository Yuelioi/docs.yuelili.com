---
title: 更新日志
---
# 更新日志

脚本功能的新增与变更内容。

---

## Adobe Premiere Pro 23.0

:::warning
决定：目前没有计划或安排对 Premiere Pro 的 ExtendScript API 进行进一步的更改或改进。一旦 Premiere Pro 转向基于 UXP 的扩展性，此类更改将重新考虑。
:::

---

## Adobe Premiere Pro 15.4

- 访问当前活动的项目选择
 - 新增: [app.getCurrentProjectViewSelection()](../../application/application#appgetcurrentprojectviewselection)
- 用于移动轨道项的新 API。
 - 新增: [TrackItem.move()](../../item/trackitem#trackitemmove)
- 用于设置轨道项禁用状态的新 API。
 - 新增: [TrackItem.disabled](../../item/trackitem#trackitemdisabled)

---

## Adobe Premiere Pro 14.0

- 脚本访问自动重构功能：
 - 新增: [Sequence.autoReframeSequence()](../../sequence/sequence#sequenceautoreframesequence)

---

## Adobe Premiere Pro 13.x

- 脚本访问标记颜色：
 - 新增: [Marker.getColorByIndex()](../../general/marker#markergetcolorbyindex)
 - 新增: [Marker.setColorByIndex()](../../general/marker#markersetcolorbyindex)
