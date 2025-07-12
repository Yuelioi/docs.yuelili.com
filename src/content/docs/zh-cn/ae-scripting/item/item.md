---
title: 项目对象
---
# 项目对象

`app.project.item(index)`

`app.project.items[index]`

#### 描述

项目对象表示可以出现在项目面板中的项目。第一个项目的索引为 1。

:::info
项目对象是 [AVItem 对象](../avitem) 和 [FolderItem 对象](../folderitem) 的基类，而这些对象又是其他各种项目类型的基类，因此在处理所有这些项目类型时，项目对象的属性和方法都是可用的。
:::

#### 示例

此示例从项目中获取第二个项目并检查它是否是一个文件夹。然后从文件夹中删除任何当前未选择的顶级项目。它还确保文件夹中每个项目的父文件夹正确设置为相应的文件夹。

```javascript
var myFolder = app.project.item(2);
if (!(myFolder instanceof FolderItem)) {
 alert("错误：第二个项目不是文件夹");
} else {
 var numInFolder = myFolder.numItems;
 // 删除内容时始终向后循环：
 for (var i = numInFolder; i >= 1; i--) {
 var curItem = myFolder.item(i);
 if (curItem.parentFolder !== myFolder) {
 alert("AE 内部错误：parentFolder 未正确设置");
 } else {
 if (!curItem.selected) {
 // 找到一个未选择的实体。
 curItem.remove();
 }
 }
 }
}
```

---

## 属性

### Item.comment

`app.project.item(index).comment`

#### 描述

一个字符串，用于保存注释，经过任何编码转换后最多可包含 15,999 字节。注释仅供用户使用；它不会影响项目的外观或行为。

#### 类型

字符串；可读写。

---

### Item.dynamicLinkGUID

`app.project.item(index).dynamicLinkGUID`

#### 描述

用于动态链接的唯一且持久的标识号，格式为 `00000000-0000-0000-0000-000000000000`。

#### 类型

字符串；只读。

---

### Item.guides

`app.project.item(index).guides`

:::note
该方法添加于 After Effects 16.1 (CC 2019)
:::

#### 描述

一个包含 `guide` 对象的数组，包含 `orientationType`、`positionType` 和 `position` 属性。

#### 类型

数组；只读。

---

### Item.id

`app.project.item(index).id`

#### 描述

用于在会话之间唯一且持久地标识项目的内部标识号。当项目保存到文件并稍后重新加载时，ID 的值保持不变。但是，当将此项目导入另一个项目时，将为导入项目中的所有项目分配新的 ID。ID 不会显示在用户界面的任何位置。

#### 类型

整数；只读。

---

### Item.label

`app.project.item(index).label`

#### 描述

项目的标签颜色。颜色由其编号表示（0 表示无，1 到 16 表示标签首选项中的预设颜色之一）。

:::tip
无法以编程方式设置自定义标签颜色。
:::

#### 类型

整数（0 到 16）；可读写。

---

### Item.name

`app.project.item(index).name`

#### 描述

项目在项目面板中显示的名称。

#### 类型

字符串；可读写。

---

### Item.parentFolder

`app.project.item(index).parentFolder`

#### 描述

包含此项目的文件夹的 FolderItem 对象。如果此项目位于项目的顶层，则这是项目的根文件夹 (`app.project.rootFolder`)。您可以使用 [ItemCollection.addFolder()](../itemcollection#itemcollectionaddfolder) 添加一个新文件夹，并设置此值以将项目放入新文件夹中。

#### 类型

FolderItem 对象；可读写。

#### 示例

此脚本在项目面板中创建一个新的 FolderItem 并将合成移动到其中。

```javascript
// 在项目中创建一个名为 "comps" 的新 FolderItem
var compFolder = app.project.items.addFolder("comps");

// 通过将 compItem 的 parentFolder 设置为 "comps" 文件夹，将所有合成移动到新文件夹中
for (var i = 1; i <= app.project.numItems; i++){
 if (app.project.item(i) instanceof CompItem) {
 app.project.item(i).parentFolder = compFolder;
 }
}
```

---

### Item.selected

`app.project.item(index).selected`

#### 描述

当为 `true` 时，此项目被选中。可以同时选择多个项目。设置为 `true` 以编程方式选择项目，或设置为 `false` 以取消选择。

#### 类型

布尔值；可读写。

---

### Item.typeName

`app.project.item(index).typeName`

#### 描述

项目类型的用户可读名称；例如，“Folder”、“Footage” 或 “Composition”。这些名称依赖于应用程序的区域设置，这意味着它们会根据应用程序的界面语言而不同。

#### 类型

字符串；只读。

#### 本地化字符串

| 区域设置 | 合成 | 文件夹 | 素材 |
| --- | --- | --- | --- |
| `en_US` | Composition | Folder | Footage |
| `de_DE` | Komposition | Ordner | Footage |
| `es_ES` | Composición | Carpeta | Material de archivo |
| `fr_FR` | Composition | Dossier | Métrage |
| `it_IT` | Composizione | Cartella | Metraggio |
| `ja_JP` | コンポジション | フォルダー | フッテージ |
| `ko_KR` | 컴포지션 | 폴더 | 푸티지 |
| `pt_BR` | Composição | Pasta | Gravação |
| `ru_ru` | Композиция | Папка | Видеоряд |
| `zh_CN` | 合成 | 文件夹 | 素材 |

#### 示例

```javascript
if (/Composition|Komposition|Composición|Composizione|コンポジション|컴포지션|Composição|Композиция|合成/.test(app.project.item(index).typeName)) {
 // 项目是一个合成
} else if (/Folder|Ordner|Carpeta|Dossier|Cartella|フォルダー|폴더|Pasta|Папка|文件夹/.test(app.project.item(index).typeName)) {
 // 项目是一个文件夹
}
```

---

## 函数

### Item.addGuide()

`app.project.item(index).addGuide(orientationType, position)`

:::note
该方法添加于 After Effects 16.1 (CC 2019)
:::

#### 描述

创建一个新的参考线并将其添加到项目的 `guides` 对象中。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `orientationType` | 整数 | `0` 表示水平参考线，`1` 表示垂直参考线。任何其他值默认为水平。 |
| `position` | 整数 | 参考线的 X 或 Y 坐标位置（以像素为单位），具体取决于其 `orientationType`。 |

#### 返回

整数；新创建的参考线的索引。

#### 示例

在项目的 `activeItem` 的 X 轴上添加一个位于 500 像素处的垂直参考线。

```javascript
app.project.activeItem.addGuide(1, 500);
```

---

### Item.remove()

`app.project.item(index).remove()`

#### 描述

从项目和项目面板中删除此项目。如果项目是 FolderItem，则文件夹中包含的所有项目也将从项目中删除。不会从磁盘中删除任何文件或文件夹。

#### 参数

无。

#### 返回

无。

---

### Item.removeGuide()

`app.project.item(index).removeGuide(guideIndex)`

:::note
该方法添加于 After Effects 16.1 (CC 2019)
:::

#### 描述

删除现有的参考线。根据其在 `Item.guides` 对象中的索引选择参考线。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `guideIndex` | 整数 | 要删除的参考线的索引。 |

#### 返回

无。

#### 示例

删除 `activeItem` 中的第一个参考线。

```javascript
app.project.activeItem.removeGuide(0);
```

:::warning
删除参考线将导致所有更高的参考线索引向下移动。
:::

---

### Item.setGuide()

`app.project.item(index).setGuide(position,guideIndex)`

:::note
该方法添加于 After Effects 16.1 (CC 2019)
:::

#### 描述

修改现有参考线的 `position`。根据其在 `Item.guides` 数组中的 `guideIndex` 选择参考线。

参考线的 `orientationType` 在创建后无法更改。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `position` | 整数 | 参考线的新 X 或 Y 坐标位置（以像素为单位），具体取决于其现有的 `orientationType`。 |
| `guideIndex` | 整数 | 要修改的参考线的索引。 |

#### 返回

无。

#### 示例

将 `activeItem` 中第一个参考线的位置更改为 1200 像素。

```javascript
app.project.activeItem.setGuide(1200, 0);
```
