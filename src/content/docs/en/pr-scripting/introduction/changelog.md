---
title: Changelog
---
# Changelog

What's new and changed for scripting?

---

## Adobe Premiere Pro 23.0

:::warning
Decision: No further changes or improvements to Premiere Pro's ExtendScript API are planned or scheduled. Any such changes will be reconsidered, once Premiere Pro moves to UXP-based extensibility.
:::

---

## Adobe Premiere Pro 15.4

- Access to the currently active project selection
 - Added: [app.getCurrentProjectViewSelection()](../../application/application#appgetcurrentprojectviewselection)
- New API to move a trackItem.
 - Added: [TrackItem.move()](../../item/trackitem#trackitemmove)
- New APIs to set the disabled state of a trackItem.
 - Added: [TrackItem.disabled](../../item/trackitem#trackitemdisabled)

---

## Adobe Premiere Pro 14.0

- Scripting access to Auto-Reframe:
 - Added: [Sequence.autoReframeSequence()](../../sequence/sequence#sequenceautoreframesequence)

---

## Adobe Premiere Pro 13.x

- Scripting access to Marker colors:
 - Added: [Marker.getColorByIndex()](../../general/marker#markergetcolorbyindex)
 - Added: [Marker.setColorByIndex()](../../general/marker#markersetcolorbyindex)
