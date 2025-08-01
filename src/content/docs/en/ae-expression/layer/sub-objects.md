---
title: sub-objects
---
# Layer Sub-objects

`thisLayer`

This category describes items that give you *other objects* based on the current layer; things like the source (for precomps or footage), effects, masks, sourceRect, etc.

:::info
On this page, we're going to use `thisLayer` as a sample on how to call these items, however note that any method that returns a [Layer](.././layer) will work.
:::

:::note
For After Effects CC and CS6, the Expression language menu, the "Layer Sub-objects", "Layer General", "Layer Properties", "Layer 3D", and "Layer Space Transforms" have been arranged into a "Layer" submenu.
:::

---

## Attributes

### Layer.source

`thisLayer.source`

#### Description

Returns the source [Comp](../../objects/comp) or [Footage](../../objects/footage) object for the layer.

Default time is adjusted to the time in the source.

Example:

```js
source.layer(1).position
```

#### Type

[Comp](../../objects/comp) or [Footage](../../objects/footage)

---

## Methods

### Layer.effect()

`thisLayer.effect(name)`

`thisLayer.effect(index)`

#### Description

The `name` value will have After Effects find the effect by its name in the Effect Controls panel. The name can be the default name or a user-defined name. If multiple effects have the same name, the effect closest to the top of the Effect Controls panel is used.

The `index` value will have After Effects finds the effect by its index in the Effect Controls panel, starting at `1` and counting from the top.

#### Parameters

| Parameter | Type | Description |
|---|---|---|
| `name` | String | Effect name or index to get. |
| `index` | Number | |

#### Returns

[Effect](../../objects/effect)

#### Example

Get the "Blurriness" effect by name:

```js
thisLayer.effect("Fast Blur")
```

Get the first effect on the layer:

```js
thisLayer.effect(1)
```

---

### Layer.mask()

`thisLayer.mask(name)`

`thisLayer.mask(index)`

#### Description

The `name` value can be the default name or a user-defined name. If multiple masks have the same name, the first (topmost) mask is used.

The `index` value will have After Effects finds the mask by its index in the Timeline panel, starting at `1` and counting from the top.

#### Parameters

| Parameter | Type | Description |
|---|---|---|
| `name` | String | Effect name or index to get. |
| `index` | Number | |

#### Returns

[Effect](../../objects/effect)

#### Example

Get the mask "Mask 1" by name:

```js
thisLayer.mask("Mask 1")
```

Get the first mask on the layer:

```js
thisLayer.mask(1)
```

---

### Layer.sourceRectAtTime()

`thisLayer.sourceRectAtTime(t = time, includeExtents = false)`

:::note
Paragraph text extents was added in After Effects 15.1.
:::

#### Description

Returns the bounding box of the layer (or the layer's source).

#### Parameters

| Parameter | Type | Description |
|---|---|---|
| `t` | Number | Optional. The specified time (in comp seconds) to apply the smoothing filter to. Defaults to `time` (the current comp time, in seconds). |
| `includeExtents` | Boolean | Optional. Only applies to shape layers and paragraph text layers. Defaults to `false`. |
| | | - For shape layers: Increases the size of the layer bounds as necessary. |
| | | - For paragraph text layers: Returns the bounds of the paragraph box |

#### Returns

An object with four attributes: `{top, left, width, height}`

#### Example

```js
myTextLayer.sourceRectAtTime().width
```

---

### Layer.sourceTime()

`thisLayer.sourceTime([t=time])`

:::note
This functionality was added in After Effects CS5.5
:::

#### Description

Returns the layer source corresponding to time `t`.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `t` | Number | Optional. The specified time (in comp seconds) to apply the smoothing filter to. Defaults to `time` (the current comp time, in seconds). |

#### Returns

Number
