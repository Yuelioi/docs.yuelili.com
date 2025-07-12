---
title: 图层
---
# 图层

`app.activeDocument.layers[index]`

#### 描述

Illustrator 文档中的一个图层。图层可能包含嵌套的图层，这些嵌套的图层在用户界面中称为子图层。

`layer` 对象包含特定图层中的所有页面项作为元素。

您的脚本可以将页面项作为 `Layer` 对象的元素或 [Document](.././Document) 对象的元素进行访问。当将页面项作为图层的元素访问时，只能访问该图层中的对象。要访问整个文档中的页面项，请确保将它们作为文档的一部分进行引用。

---

## 属性

### Layer.artworkKnockout

`app.activeDocument.layers[index].artworkKnockout`

#### 描述

此对象是否用于创建挖空效果，如果是，是哪种挖空效果。您不能将此值设置为 `KnockoutState.Unknown`。

#### 类型

[KnockoutState](../scripting-constants#knockoutstate)

---

### Layer.blendingMode

`app.activeDocument.layers[index].blendingMode`

#### 描述

合成对象时使用的模式。

#### 类型

[BlendModes](../scripting-constants#blendmodes)

---

### Layer.color

`app.activeDocument.layers[index].color`

#### 描述

图层的选择标记颜色。

#### 类型

[RGBColor](.././RGBColor)

---

### Layer.compoundPathItems

`app.activeDocument.layers[index].compoundPathItems`

#### 描述

此图层中包含的复合路径项。

#### 类型

[CompoundPathItems](.././CompoundPathItems); 只读。

---

### Layer.dimPlacedImages

`app.activeDocument.layers[index].dimPlacedImages`

#### 描述

如果为 `true`，则此图层中的置入图像应显示为暗淡。

#### 类型

布尔值。

---

### Layer.graphItems

`app.activeDocument.layers[index].graphItems`

#### 描述

此图层中包含的图表项。

#### 类型

[GraphItems](.././GraphItems); 只读。

---

### Layer.groupItems

`app.activeDocument.layers[index].groupItems`

#### 描述

此图层中包含的组项。

#### 类型

[GroupItems](.././GroupItems); 只读。

---

### Layer.hasSelectedArtwork

`app.activeDocument.layers[index].hasSelectedArtwork`

#### 描述

如果为 `true`，则此图层中的某个对象已被选中；设置为 `false` 以取消选择该图层中的所有对象。

#### 类型

布尔值。

---

### Layer.isIsolated

`app.activeDocument.layers[index].isIsolated`

#### 描述

如果为 `true`，则此对象是隔离的。

#### 类型

布尔值。

---

### Layer.layers

`app.activeDocument.layers[index].layers`

#### 描述

此图层中包含的图层。

#### 类型

[Layers](.././Layers); 只读。

---

### Layer.legacyTextItems

`app.activeDocument.layers[index].legacyTextItems`

#### 描述

此图层中的旧版文本项。

#### 类型

[LegacyTextItems](.././LegacyTextItems); 只读。

---

### Layer.locked

`app.activeDocument.layers[index].locked`

#### 描述

如果为 `true`，则此图层可编辑；设置为 `false` 以锁定该图层。

#### 类型

布尔值。

---

### Layer.meshItems

`app.activeDocument.layers[index].meshItems`

#### 描述

此图层中包含的网格项。

#### 类型

[MeshItems](.././MeshItems); 只读。

---

### Layer.name

`app.activeDocument.layers[index].name`

#### 描述

此图层的名称。

#### 类型

字符串。

---

### Layer.nonNativeItems

`app.activeDocument.layers[index].nonNativeItems`

#### 描述

此图层中的非本地艺术项。

#### 类型

[NonNativeItems](.././NonNativeItems)

---

### Layer.opacity

`app.activeDocument.layers[index].opacity`

#### 描述

图层的不透明度。

范围：0.0 到 100.0。

#### 类型

数字（双精度）。

---

### Layer.pageItems

`app.activeDocument.layers[index].pageItems`

#### 描述

此图层中包含的页面项（所有艺术项类）。

#### 类型

[PageItems](.././PageItems)

---

### Layer.parent

`app.activeDocument.layers[index].parent`

#### 描述

包含此图层的文档或图层。

#### 类型

[Document](.././Document) 或 [Layer](#layer); 只读。

---

### Layer.pathItems

`app.activeDocument.layers[index].pathItems`

#### 描述

此图层中包含的路径项。

#### 类型

[PathItems](.././PathItems); 只读。

---

### Layer.placedItems

`app.activeDocument.layers[index].placedItems`

#### 描述

此图层中包含的置入项。

#### 类型

[PlacedItems](.././PlacedItems); 只读。

---

### Layer.pluginItems

`app.activeDocument.layers[index].pluginItems`

#### 描述

此图层中包含的插件项。

#### 类型

[PluginItems](.././PluginItems); 只读。

---

### Layer.preview

`app.activeDocument.layers[index].preview`

#### 描述

如果为 `true`，则应使用预览模式显示此图层。

#### 类型

布尔值。

---

### Layer.printable

`app.activeDocument.layers[index].printable`

#### 描述

如果为 `true`，则在打印文档时应打印此图层。

#### 类型

布尔值。

---

### Layer.rasterItems

`app.activeDocument.layers[index].rasterItems`

#### 描述

此图层中包含的栅格项。

#### 类型

[RasterItems](.././RasterItems); 只读。

---

### Layer.sliced

`app.activeDocument.layers[index].sliced`

#### 描述

如果为 `true`，则图层项被切片。

默认值：`false`。

#### 类型

布尔值。

---

### Layer.symbolItems

`app.activeDocument.layers[index].symbolItems`

#### 描述

此图层中包含的符号项。

#### 类型

[SymbolItems](.././SymbolItems); 只读。

---

### Layer.textFrames

`app.activeDocument.layers[index].textFrames`

#### 描述

此图层中包含的文本艺术项。

#### 类型

[TextFrameItems](.././TextFrameItems); 只读。

---

### Layer.typename

`app.activeDocument.layers[index].typename`

#### 描述

引用对象的类名。

#### 类型

字符串; 只读。

---

### Layer.visible

`app.activeDocument.layers[index].visible`

#### 描述

如果为 `true`，则此图层可见。

#### 类型

布尔值。

---

### Layer.zOrderPosition

`app.activeDocument.layers[index].zOrderPosition`

#### 描述

此图层在文档图层堆叠顺序中的位置。

#### 类型

数字（长整型）; 只读。

---

## 方法

### Layer.move()

`app.activeDocument.layers[index].move(relativeObject, insertionLocation)`

#### 描述

移动对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `relativeObject` | 对象 | 要移动元素的对象 |
| `insertionLocation` | [ElementPlacement](../scripting-constants#elementplacement), 可选 | 移动元素到的位置 |

#### 返回值

[Layer](#layer)

---

### Layer.remove()

`app.activeDocument.layers[index].remove()`

#### 描述

删除此对象。

#### 返回值

无。

---

### Layer.zOrder()

`app.activeDocument.layers[index].zOrder(ZOrderCmd)`

#### 描述

在包含此对象的图层或文档（`parent`）的堆叠顺序中排列图层的位置。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `zOrderCmd` | [ZOrderMethod](../scripting-constants#zordermethod) | 堆叠顺序排列方法 |

#### 返回值

无。

---

## 示例

### 将图层置于最前面

```javascript
// 将最底层的图层移动到最顶层

if (documents.length > 0) {
 var countOfLayers = activeDocument.layers.length;
 if (countOfLayers > 1) {
 var bottomLayer = activeDocument.layers[countOfLayers - 1];
 bottomLayer.zOrder(ZOrderMethod.BRINGTOFRONT);
 } else {
 alert("活动文档只有一个图层");
 }
}
```
