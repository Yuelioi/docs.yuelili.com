---
title: 项目
---
# 项目对象

`app.project`

#### 描述

项目对象代表一个After Effects项目。其属性可访问项目中的特定对象（如导入的文件/素材和合成），以及项目设置（如时间码基准）。方法可用于导入素材、创建固态层、合成和文件夹，以及保存更改。

---

## 属性

### Project.activeItem

`app.project.activeItem`

#### 描述

当前被选中待操作的项目项，若未选中或选中多项则返回`null`。

#### 类型

[Item对象](../../item/item)或`null`；只读。

---

### Project.bitsPerChannel

`app.project.bitsPerChannel`

#### 描述

当前项目的色彩深度，取值为8、16或32位。

#### 类型

整数（仅限8/16/32）；可读写。

---

### Project.compensateForSceneReferredProfiles

`app.project.compensateForSceneReferredProfiles`

:::note
此功能在After Effects 16.0（CC 2019）中新增
:::

#### 描述

若需为此项目启用"补偿场景参考配置文件"则设为`true`，否则为`false`。

#### 类型

布尔值；可读写。

---

### Project.dirty

`app.project.dirty`

:::note
此功能在After Effects 17.5（CC2020）中新增
:::

:::warning
此方法/属性未正式记录文档，系研究所得。此处信息可能不准确，且该功能可能随时失效。如有更多信息请补充！
:::

#### 描述

若项目自上次保存后有修改则返回`true`，否则为`false`。

"脏"项目会在窗口标题显示`*`标记。

#### 类型

布尔值；只读。

---

### Project.displayStartFrame

`app.project.displayStartFrame`

#### 描述

设置项目设置对话框中帧计数菜单的替代方式（0或1），等效于对[framesCountType](#projectframescounttype)使用`FramesCountType.FC_START_0`或`FramesCountType.FC_START_1`枚举值。

#### 类型

整数（0或1）；可读写。

---

### Project.expressionEngine

`app.project.expressionEngine`

:::note
此功能在After Effects 16.0（CC 2019）中新增
:::

#### 描述

项目设置对话框中的表达式引擎设置，返回字符串。可选值：

- `extendscript`
- `javascript-1.0`

#### 类型

字符串；可读写。

---

### Project.feetFramesFilmType

`app.project.feetFramesFilmType`

#### 描述

项目设置对话框中"使用英尺+帧"菜单设置。建议用此属性替代旧的`timecodeFilmType`属性。

#### 类型

`FeetFramesFilmType`枚举值；可读写。可选：

- `FeetFramesFilmType.MM16`
- `FeetFramesFilmType.MM35`

---

### Project.file

`app.project.file`

#### 描述

当前打开项目文件的[Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html)对象。

#### 类型

[File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html)对象，若项目未保存则为`null`；只读。

---

### Project.footageTimecodeDisplayStartType

`app.project.footageTimecodeDisplayStartType`

#### 描述

项目设置对话框中的"素材起始时间"设置（当时间显示样式选择为时间码时启用）。

#### 类型

`FootageTimecodeDisplayStartType`枚举值；可读写。可选：

- `FootageTimecodeDisplayStartType.FTCS_START_0`
- `FootageTimecodeDisplayStartType.FTCS_USE_SOURCE_MEDIA`

---

### Project.framesCountType

`app.project.framesCountType`

#### 描述

项目设置对话框中的帧计数菜单设置。

#### 类型

`FramesCountType`枚举值；可读写。可选：

- `FramesCountType.FC_START_1`
- `FramesCountType.FC_START_0`
- `FramesCountType.FC_TIMECODE_CONVERSION`

:::warning
将此属性设为`FramesCountType.FC_TIMECODE_CONVERSION`会将`displayStartFrame`重置为0。
:::

---

### Project.framesUseFeetFrames

`app.project.framesUseFeetFrames`

#### 描述

项目设置对话框中的"使用英尺+帧"设置。

使用英尺+帧时为`true`，使用帧时为`false`。

#### 类型

布尔值；可读写。

---

### Project.gpuAccelType

`app.project.gpuAccelType`

:::note
此功能在After Effects 13.8（CC 2015.3）中新增
:::

#### 描述

获取或设置当前项目的GPU加速选项。参见[app.availableGPUAccelTypes](../application#appavailablegpuacceltypes)

#### 类型

`GpuAccelType`枚举值；可读写。可选：

- `GpuAccelType.CUDA`
- `GpuAccelType.Metal`
- `GpuAccelType.OPENCL`
- `GpuAccelType.SOFTWARE`

#### 示例

```javascript
// 通过脚本访问项目设置 -> 视频渲染和效果 -> 使用

var currentGPUSettings = app.project.gpuAccelType; // 获取当前值
var type_str = "";

// 检查当前值并提示用户

switch (currentGPUSettings) {
 case GpuAccelType.CUDA:
 type_str = "CUDA";
 break;
 case GpuAccelType.METAL:
 type_str = "Metal";
 break;
 case GpuAccelType.OPENCL:
 type_str = "OpenCL";
 break;
 case GpuAccelType.SOFTWARE:
 type_str = "Software";
 break;
 default:
 type_str = "UNKNOWN";
}

alert("当前设置为 " + type_str);

// 将值设为Metal
app.project.gpuAccelType = GpuAccelType.METAL;
```

---

### Project.items

`app.project.items`

#### 描述

项目中的所有项。

#### 类型

[ItemCollection对象](../../item/itemcollection)；只读。

---

### Project.linearBlending

`app.project.linearBlending`

#### 描述

若需为此项目启用线性混合则设为`true`，否则为`false`。

#### 类型

布尔值；可读写。

---

### Project.linearizeWorkingSpace

`app.project.linearizeWorkingSpace`

:::note
此功能在After Effects 16.0（CC 2019）中新增
:::

#### 描述

若需为此项目启用"线性化工作空间"则设为`true`，否则为`false`。

#### 类型

布尔值；可读写。

---

### Project.numItems

`app.project.numItems`

#### 描述

项目中包含的总项数（包括文件夹和所有类型的素材）。

#### 类型

整数；只读。

#### 示例

```javascript
var numItems = app.project.numItems;
alert("当前项目包含 " + numItems + " 个项目项")
```

---

### Project.renderQueue

`app.project.renderQueue`

#### 描述

项目的[渲染队列](../../renderqueue/renderqueue)。

#### 类型

[RenderQueue对象](../../renderqueue/renderqueue)；只读。

---

### Project.revision

`app.project.revision`

#### 描述

项目当前修订版本号。每次用户操作都会增加该值。新建项目从1开始。

#### 类型

整数（项目当前修订版本）；只读。

---

### Project.rootFolder

`app.project.rootFolder`

#### 描述

包含项目内容的根文件夹（这是一个虚拟文件夹，包含项目面板中的所有项，但不包括其他文件夹内的项）。

#### 类型

[FolderItem对象](../../item/folderitem)；只读。

---

### Project.selection

`app.project.selection`

#### 描述

项目面板中所有选中的项（按项目面板中的排序顺序）。

#### 类型

[Item对象](../../item/item)数组；只读。

---

### Project.timeDisplayType

`app.project.timeDisplayType`

#### 描述

时间显示样式，对应项目设置对话框中的"时间显示样式"部分。

#### 类型

`TimeDisplayType`枚举值；可读写。可选：

- `TimeDisplayType.FRAMES`
- `TimeDisplayType.TIMECODE`

---

### Project.toolType

`app.project.toolType`

:::note
此功能在After Effects 14.0（CC 2017）中新增
:::

#### 描述

获取和设置工具面板中的活动工具。

#### 类型

`ToolType`枚举值；可读写。可选：

- `ToolType.Tool_Arrow`: 选择工具
- `ToolType.Tool_Rotate`: 旋转工具
- `ToolType.Tool_CameraMaya`: 统一摄像机工具
- `ToolType.Tool_CameraOrbit`: 轨道摄像机工具
- `ToolType.Tool_CameraTrackXY`: XY轴跟踪摄像机工具
- `ToolType.Tool_CameraTrackZ`: Z轴跟踪摄像机工具
- `ToolType.Tool_Paintbrush`: 画笔工具
- `ToolType.Tool_CloneStamp`: 克隆图章工具
- `ToolType.Tool_Eraser`: 橡皮擦工具
- `ToolType.Tool_Hand`: 抓手工具
- `ToolType.Tool_Magnify`: 缩放工具
- `ToolType.Tool_PanBehind`: 锚点工具
- `ToolType.Tool_Rect`: 矩形工具
- `ToolType.Tool_RoundedRect`: 圆角矩形工具
- `ToolType.Tool_Oval`: 椭圆工具
- `ToolType.Tool_Polygon`: 多边形工具
- `ToolType.Tool_Star`: 星形工具
- `ToolType.Tool_TextH`: 横排文字工具
- `ToolType.Tool_TextV`: 直排文字工具
- `ToolType.Tool_Pen`: 钢笔工具
- `ToolType.Tool_Feather`: 蒙版羽化工具
- `ToolType.Tool_PenPlus`: 添加顶点工具
- `ToolType.Tool_PenMinus`: 删除顶点工具
- `ToolType.Tool_PenConvert`: 转换顶点工具
- `ToolType.Tool_Pin`: 木偶钉工具
- `ToolType.Tool_PinStarch`: 木偶淀粉工具
- `ToolType.Tool_PinDepth`: 木偶重叠工具
- `ToolType.Tool_Quickselect`: Roto笔刷工具
- `ToolType.Tool_Hairbrush`: 细化边缘工具

#### 示例

以下示例代码检查当前工具，如果不是统一摄像机工具则设置为该工具：

```javascript
// 检查当前工具并设置为统一摄像机工具(UCT)
// 假设项目中已选中一个合成
var comp = app.project.activeItem;
if (comp instanceof CompItem) {
 // 为当前合成添加摄像机（UCT必需）
 var cameraLayer = comp.layers.addCamera("测试摄像机", [comp.width / 2, comp.height / 2]);
 comp.openInViewer();

 // 如果当前选择工具不是摄像机工具之一，则设为UCT
 if (( app.project.toolType !== ToolType.Tool_CameraMaya) &&
 ( app.project.toolType !== ToolType.Tool_CameraOrbit ) &&
 ( app.project.toolType !== ToolType.Tool_CameraTrackXY) &&
 ( app.project.toolType !== ToolType.Tool_CameraTrackZ)) {
 app.project.toolType = ToolType.Tool_CameraMaya;
 }
}
```

以下示例代码使用新的app.project.toolType属性从选中的素材项或合成创建360度合成（环境图层和摄像机）。此脚本是从等距柱状投影素材构建VR合成的良好起点：

```javascript
// 从项目面板选中的素材项或合成创建360 VR合成

var item = app.project.activeItem;
if (item !== null && (item.typeName === "Footage" || item.typeName === "Composition")) {
 // 用素材创建合成
 var comp = app.project.items.addComp(item.name, item.width, item.height, item.pixelAspect, item.duration, item.frameRate);
 var layers = comp.layers;
 var footageLayer = layers.add(item);

 // 应用CC Environment效果并创建摄像机
 var effect = footageLayer.Effects.addProperty("CC Environment");
 var camera = layers.addCamera("360摄像机", [item.width / 2, item.height / 2]);
 comp.openInViewer();
 app.project.toolType = ToolType.Tool_CameraMaya;
} else {
 alert("请在项目面板中选择单个素材项或合成。");
}
```

---

### Project.transparencyGridThumbnails

`app.project.transparencyGridThumbnails`

#### 描述

当为`true`时，缩略图视图使用透明棋盘格图案。

#### 类型

布尔值；可读写。

---

### Project.usedFonts

`app.project.usedFonts`

:::note
此功能在After Effects 24.5中新增
:::

#### 描述

返回一个对象数组，包含当前[项目](#project-object)中使用的字体引用及其出现的文本图层和时间信息。

每个对象包含`font`（[Font对象](../../text/fontobject)）和`usedAt`（由`layerID`[图层ID](../../layer/layer#layerid)和出现时间`layerTimeD`组成的对象数组）。使用[Project.layerByID()](#projectlayerbyid)可检索对应图层。

```javascript
var usedList = app.project.usedFonts;
if (usedList.length) {
 var font = usedList[0].font;
 var usedAt = usedList[0].usedAt;

 var str = "[0]:" + font.postScriptName + "\n";
 for (var i = 0; i < usedAt.length; i++) {
 var layerID = usedAt[i].layerID;
 // Source Text属性的valueAtTime()期望时间是图层时间而非合成时间
 // 与其他属性不同。因此我们调整了usedFonts返回的字段名以明确这一点
 var layerTimeD = usedAt[i].layerTimeD;

 var layer = app.project.layerByID(layerID);
 str += " 图层:'" + String(layer.property("Source Text").valueAtTime(layerTimeD, false)) + "'\n";
 }
 alert(str);
}
```

#### 类型

对象数组；只读。

---

### Project.workingGamma

`app.project.workingGamma`

#### 描述

当前项目的工作伽马值（2.2或2.4）。

设置非2.2或2.4的值会导致脚本错误。

:::tip
当设置项目的色彩工作空间时，After Effects会忽略工作伽马值。
:::

#### 类型

`2.2`或`2.4`；可读写。

#### 示例

- 设置工作伽马为2.4（Rec. 709）：`app.project.workingGamma = 2.4;`
- 获取当前工作伽马：`var currentGamma = app.project.workingGamma;`

---

### Project.workingSpace

`app.project.workingSpace`

#### 描述

表示项目色彩工作空间颜色配置文件的字符串。设为空字符串可将工作空间设为"无"。

使用`app.project.listColorProfiles()`获取可用的颜色配置文件描述数组。

#### 类型

字符串；可读写。

#### 示例

- 设置工作空间为Rec.709 Gamma 2.4：`app.project.workingSpace = "Rec.709 Gamma 2.4";`
- 设置工作空间为无：`app.project.workingSpace = "";`
- 获取当前工作空间：`var currentSpace = app.project.workingSpace;`

---

### Project.xmpPacket

`app.project.xmpPacket`

#### 描述

项目的XMP元数据，以RDF（基于XML）格式存储。有关XMP的更多信息，参见[JavaScript Tools Guide](https://extendscript.docsforadobe.dev/)。

#### 类型

字符串；可读写。

#### 示例

以下示例代码访问当前项目的XMP元数据，并修改Label项目元数据字段：

```javascript
var proj = app.project;

// 将XMPlibrary作为ExtendScript ExternalObject加载
if (ExternalObject.AdobeXMPScript === undefined){
 ExternalObject.AdobeXMPScript = new ExternalObject('lib:AdobeXMPScript');
}
var mdata = new XMPMeta(app.project.xmpPacket); //获取项目的XMP元数据
// 更新Label项目元数据值
var schemaNS = XMPMeta.getNamespaceURI("xmp");
var propName = "xmp:Label";
try{
 mdata.setProperty(schemaNS, propName, "最终版本...真的！");
} catch (e) {
 alert(e);
}

app.project.xmpPacket = mdata.serialize();
```

---

## 方法

### Project.autoFixExpressions()

`app.project.autoFixExpressions(oldText, newText)`

#### 描述

自动替换项目中损坏表达式中的文本（若新文本能使表达式正确执行）。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `oldText` | 字符串 | 待替换文本 |
| `newText` | 字符串 | 新文本 |

#### 返回值

无。

---

### Project.close()

`app.project.close(closeOptions)`

#### 描述

关闭项目（可选择自动保存、提示保存或不保存更改）。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `closeOptions` | `CloseOptions`枚举 | 关闭时执行的操作。可选： |
| | | - `CloseOptions.DO_NOT_SAVE_CHANGES`: 不保存直接关闭 |
| | | - `CloseOptions.PROMPT_TO_SAVE_CHANGES`: 关闭前提示是否保存 |
| | | - `CloseOptions.SAVE_CHANGES`: 自动保存后关闭 |

#### 返回值

布尔值。成功返回`true`。若文件未保存过且用户取消保存提示则返回`false`。

---

### Project.consolidateFootage()

`app.project.consolidateFootage()`

#### 描述

合并项目中的所有素材。等效于"文件 > 合并所有素材"命令。

#### 参数

无。

#### 返回值

整数；被移除的素材项总数。

---

### Project.importFile()

`app.project.importFile(importOptions)`

#### 描述

使用指定的导入选项导入 ImportOptions 对象中指定的文件。等同于"文件 > 导入文件"命令。

从文件创建并返回一个新的 FootageItem 对象，并将其添加到项目的 items 数组中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `importOptions` | [ImportOptions](../../other/importoptions) | 指定要导入的文件及操作选项的对象。 |

#### 返回值

[FootageItem 对象](../../item/footageitem)。

#### 示例

```javascript
app.project.importFile(new ImportOptions(new File("sample.psd")));
```

---

### Project.importFileWithDialog()

`app.project.importFileWithDialog()`

#### 描述

显示导入文件对话框。等同于"文件 > 导入 > 文件"命令。

#### 返回值

导入过程中创建的[Item 对象](../../item/item)数组；如果用户取消对话框则返回 `null`。

---

### Project.importPlaceholder()

`app.project.importPlaceholder(name, width, height, frameRate, duration)`

#### 描述

创建并返回一个新的 PlaceholderItem，并将其添加到项目的 items 数组中。等同于"文件 > 导入 > 占位符"命令。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | String | 占位符名称。 |
| `width` | 整数，范围 `[4..30000]` | 占位符宽度（像素）。 |
| `height` | 整数，范围 `[4..30000]` | 占位符高度（像素）。 |
| `frameRate` | 浮点数，范围 `[1.0..99.0]` | 占位符帧速率。 |
| `duration` | 浮点数，范围 `[0.0..10800.0]` | 占位符持续时间（秒）。 |

#### 返回值

PlaceholderItem 对象。

---

### Project.item()

`app.project.item(index)`

#### 描述

获取指定索引位置的项。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `index` | 整数 | 项的索引位置（第一个项的索引为1）。|

#### 返回值

[Item 对象](../../item/item)。

---

### Project.itemByID()

`app.project.itemByID(id)`

:::note
此功能在 After Effects 13.0 (CC 2014) 中添加
:::

#### 描述

通过[Item ID](../../item/item#itemid)获取项。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `id` | 整数 | 项的ID。 |

#### 返回值

[Item 对象](../../item/item)。

---

### Project.layerByID()

`app.project.layerByID(id)`

:::note
此功能在 After Effects 22.0 (2022) 中添加
:::

#### 描述

Project 的实例方法，当给定有效的 ID 值时，返回项目中具有该 ID 的 Layer 对象。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `id` | 整数（非负数） | 要从项目中检索的图层的 ID。 |

#### 返回值

如果存在具有给定 ID 的[Layer 对象](../../layer/layer)，则返回该对象；否则返回 null。无效的 ID 将抛出异常，提示输入参数不是无符号整数。

#### 示例

```javascript
var firstComp = app.project.item(1);
var firstLayer = firstComp.layer(1);
var layerID = firstLayer.id;

if (app.project.layerByID(layerID) === firstLayer) {
 alert("可以通过ID获取图层！");
}
```

---

### Project.listColorProfiles()

`app.project.listColorProfiles()`

#### 描述

返回可作为项目颜色工作空间设置的颜色配置文件描述数组。

#### 参数

无。

#### 返回值

字符串数组。

---

### Project.reduceProject()

`app.project.reduceProject(array_of_items)`

#### 描述

从项目中移除除指定项之外的所有项。等同于"文件 > 精简项目"命令。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `array_of_items` | [Item 对象](../../item/item)数组 | 要保留的项。 |

#### 返回值

整数；移除的项总数。

#### 示例

```javascript
var items = [];
items[items.length] = app.project.item(1);
items[items.length] = app.project.item(3);
app.project.reduceProject(items);
```

---

### Project.removeUnusedFootage()

`app.project.removeUnusedFootage()`

#### 描述

从项目中移除未使用的素材。等同于"文件 > 移除未使用素材"命令。

#### 参数

无。

#### 返回值

整数；移除的 FootageItem 对象总数。

---

### Project.replaceFont()

`app.project.replaceFont(fromFont, toFont, [noFontLocking = false])`

:::note
此功能在 After Effects 24.5 中添加
:::

#### 描述

此函数将用[Font 对象](../../text/fontobject) `toFont` 替换所有使用[Font 对象](../../text/fontobject) `fromFont` 的地方。

此操作使用与自动替换缺失或替换字体相同的机制和策略，因此即使是在具有混合样式的[TextDocuments](../../text/textdocument)上也能精确替换，保留 `fromFont` 应用的字符范围。

此操作不可撤销。

可选参数 `noFontLocking` 控制当 `toFont` 没有应用于文本的字形时会发生什么。默认情况下会选择具有必要字形的回退字体，但如果此参数设置为 `true`，则不会进行回退，可能导致缺少字形。目前无法检测或报告这种情况。

注意：当 `fromFont` 是替换字体且 `toFont` 具有相同的字体属性时，不会发生回退，该参数将被忽略并视为 `true`。

```javascript
var fromFont = app.project.usedFonts[0].font;
var fontList = app.fonts.getFontsByPostScriptName("TimesNewRomanPSMT");
var toFont = fontList[0];
var layerChanged = app.project.replaceFont(fromFont, toFont);
```

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `fromFont` | [Font 对象](../../text/fontobject) | 要替换的字体。 |
| `toFont` | [Font 对象](../../text/fontobject) | 替换后的字体。 |
| `noFontLocking` | 布尔值 | 可选。默认为 `false` |

#### 返回值

布尔值。如果至少更改了一个图层，则返回 `true`。

---

### Project.save()

`app.project.save([file])`

#### 描述

保存项目。等同于"文件 > 保存"或"文件 > 另存为"命令。如果项目之前从未保存过且未指定文件，则会提示用户选择位置和文件名。

传递[File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html)对象可在不提示的情况下将项目保存到新文件。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `file` | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) | 可选。要保存的文件。|

#### 返回值

无。

---

### Project.saveWithDialog()

`app.project.saveWithDialog()`

#### 描述

显示保存对话框。用户可以命名文件并选择位置保存项目，或点击取消退出对话框。

#### 参数

无。

#### 返回值

布尔值；如果项目已保存，则返回 `true`。

---

### Project.setDefaultImportFolder()

`app.project.setDefaultImportFolder(folder)`

#### 描述

设置文件导入对话框中显示的文件夹。此位置将作为覆盖使用，直到调用不带参数的 setDefaultImportFolder() 或退出 After Effects。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `folder` | [Extendscript Folder](https://extendscript.docsforadobe.dev/file-system-access/folder-object.html) | 要设置为默认的文件夹。|

#### 返回值

布尔值；指示操作是否成功。

#### 示例

以下任一方式都可以将默认导入文件夹设置为 C:/My Folder：

- `var myFolder = new Folder("C:/My Folder"); app.project.setDefaultImportFolder(myFolder);`
- `app.project.setDefaultImportFolder(new Folder("C:/My Folder"));`
- `app.project.setDefaultImportFolder(Folder("C:/My Folder"));`

注意：如果路径指向现有文件而非文件夹，Folder 函数将返回 File 对象而非 Folder 对象，这会导致 `setDefaultImportFolder()` 返回 `false`。

要将默认导入文件夹设置为当前用户的桌面文件夹：`app.project.setDefaultImportFolder(Folder.desktop);`

要禁用默认文件夹，调用不带参数的 `setDefaultImportFolder()`：`app.project.setDefaultImportFolder();`

---

### Project.showWindow()

`app.project.showWindow(doShow)`

#### 描述

显示或隐藏项目面板。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `doShow` | 布尔值 | 为 `true` 时显示项目面板，为 `false` 时隐藏。|

#### 返回值

无。

---

## 团队项目

### Project.newTeamProject()

`app.project.newTeamProject(teamProjectName, description)`

:::note
此功能在 After Effects 14.2 (CC 2017.1) 中添加
:::

#### 描述

创建新的团队项目。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `teamProjectName` | 字符串 | 团队项目名称。 |
| `description` | 字符串 | 可选。项目描述。 |

#### 返回值

布尔值。如果成功创建团队项目，则返回 `true`，否则返回 `false`。

---

### Project.openTeamProject()

`app.project.openTeamProject(teamProjectName)`

:::note
此功能在 After Effects 14.2 (CC 2017.1) 中添加
:::

#### 描述

打开团队项目。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `teamProjectName` | 字符串 | 团队项目名称。 |

#### 返回值

布尔值。如果成功打开团队项目，则返回 `true`，否则返回 `false`。

---

### Project.shareTeamProject()

`app.project.shareTeamProject(comment)`

:::note
此功能在 After Effects 14.2 (CC 2017.1) 中添加
:::

#### 描述

共享当前打开的团队项目。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `comment` | 字符串 | 可选。注释。 |

#### 返回值

布尔值。如果成功共享团队项目，则返回 `true`，否则返回 `false`。

---

### Project.syncTeamProject()

`app.project.syncTeamProject()`

:::note
此功能在 After Effects 14.2 (CC 2017.1) 中添加
:::

#### 描述

同步当前打开的团队项目。

#### 返回值

布尔值。如果成功同步团队项目，则返回 `true`，否则返回 `false`。

---

### Project.closeTeamProject()

`app.project.closeTeamProject()`

:::note
此功能在 After Effects 14.2 (CC 2017.1) 中添加
:::

#### 描述

关闭当前打开的团队项目。

#### 返回值

布尔值。如果成功关闭团队项目，则返回 `true`，否则返回 `false`。

---

### Project.convertTeamProjectToProject()

`app.project.convertTeamProjectToProject(project_file)`

:::note
此功能在 After Effects 14.2 (CC 2017.1) 中添加
:::

#### 描述

将团队项目转换为本地磁盘上的 After Effects 项目。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `project_file` | [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html) | 本地 After Effects 项目文件（扩展名应为 .aep 或 .aet，不支持 .aepx）。 |

#### 返回值

布尔值。如果成功转换团队项目，则返回 `true`，否则返回 `false`。

---

### Project.listTeamProjects()

`app.project.listTeamProjects()`

:::note
此功能在 After Effects 14.2 (CC 2017.1) 中添加
:::

#### 描述

返回包含当前用户可用的所有团队项目名称字符串的数组。不包含已归档的团队项目。

#### 返回值

字符串数组。

---

### Project.isTeamProjectOpen()

`app.project.isTeamProjectOpen(teamProjectName)`

:::note
此功能在 After Effects 14.2 (CC 2017.1) 中添加
:::

#### 描述

检查指定的团队项目是否当前已打开。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `teamProjectName` | 字符串 | 团队项目名称。 |

#### 返回值

布尔值。如果指定的团队项目当前已打开，则返回 `true`，否则返回 `false`。

---

### Project.isAnyTeamProjectOpen()

`app.project.isAnyTeamProjectOpen()`

:::note
此功能在 After Effects 14.2 (CC 2017.1) 中添加
:::

#### 描述

检查是否有任何团队项目当前已打开。

#### 返回值

布尔值。如果有任何团队项目当前已打开，则返回 `true`，否则返回 `false`。

---

### Project.isTeamProjectEnabled()

`app.project.isTeamProjectEnabled()`

:::note
此功能在 After Effects 14.2 (CC 2017.1) 中添加
:::

#### 描述

检查 After Effects 是否启用了团队项目。（此函数几乎总是返回 `true`。）

#### 返回值

布尔值。如果当前启用了团队项目，则返回 `true`，否则返回 `false`。

---

### Project.isLoggedInToTeamProject()

`app.project.isLoggedInToTeamProject()`

:::note
此功能在 After Effects 14.2 (CC 2017.1) 中添加
:::

#### 描述

检查客户端（After Effects）当前是否已登录到团队项目服务器。

#### 返回值

布尔值。如果客户端当前已登录到团队项目服务器，则返回 `true`，否则返回 `false`。

---

### Project.isSyncCommandEnabled()

`app.project.isSyncCommandEnabled()`

:::note
此功能在 After Effects 14.2 (CC 2017.1) 中添加
:::

#### 描述

检查同步命令是否启用。

#### 返回值

布尔值。如果团队项目同步命令启用，则返回 `true`，否则返回 `false`。

---

### Project.isShareCommandEnabled()

`app.project.isShareCommandEnabled()`

:::note
此功能在 After Effects 14.2 (CC 2017.1) 中添加
:::

#### 描述

检查共享命令是否启用。

#### 返回值

布尔值。如果团队项目共享命令启用，则返回 `true`，否则返回 `false`。

---

### Project.isResolveCommandEnabled()

`app.project.isResolveCommandEnabled()`

:::note
此功能在 After Effects 14.2 (CC 2017.1) 中添加
:::

#### 描述

检查解决命令是否启用。

#### 返回值

布尔值。如果团队项目解决命令启用，则返回 `true`，否则返回 `false`。

---

### Project.resolveConflict()

`app.project.resolveConflict(ResolveType)`

:::note
此功能在 After Effects 14.2 (CC 2017.1) 中添加
:::

#### 描述

使用指定的解决方法解决打开的团队项目与团队项目服务器上的版本之间的冲突。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `ResolveType` | `ResolveType` 枚举 | 要使用的冲突解决方法类型。可以是以下之一： |
| | | - `ResolveType.ACCEPT_THEIRS`: 接受共享版本。共享版本将替换您的版本。 |
| | | - `ResolveType.ACCEPT_YOURS`: 保留您的项目版本。不接受共享版本。 |
| | | - `ResolveType.ACCEPT_THEIRS_AND_COPY`: 复制并重命名您的版本，然后接受共享版本。共享版本将替换您的原始版本。 |

#### 返回值

布尔值。如果指定类型的解决方法成功，则返回 `true`，否则返回 `false`。
