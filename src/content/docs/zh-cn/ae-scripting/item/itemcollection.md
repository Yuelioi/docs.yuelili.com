---
title: 项目集合
---
# ItemCollection 对象

`app.project.items`

#### 描述

ItemCollection 对象表示项目的集合。属于 Project 对象的 ItemCollection 包含项目中所有项目的 Item 对象。属于 FolderItem 对象的 ItemCollection 包含该文件夹中所有项目的 Item 对象。

:::info
ItemCollection 是 [Collection 对象](../../other/collection) 的子类。除了下面列出的方法和属性外，Collection 的所有方法和属性在处理 ItemCollection 时都可用。
:::

---

## 函数

### ItemCollection.addComp()

`app.project.items.addComp(name, width, height, pixelAspect, duration, frameRate)`

#### 描述

创建一个新的合成。创建并返回一个新的 CompItem 对象，并将其添加到此集合中。如果 ItemCollection 属于项目或根文件夹，则新项目的 `parentFolder` 是根文件夹。如果 ItemCollection 属于任何其他文件夹，则新项目的 `parentFolder` 是该 `FolderItem`。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 合成的名称。 |
| `width` | 整数, 范围为 `[4..30000]` | 合成的宽度（以像素为单位）。 |
| `height` | 整数, 范围为 `[4..30000]` | 合成的高度（以像素为单位）。 |
| `pixelAspect` | 浮点值, 范围为 `[0.01..100.0]` | 合成的像素宽高比。 |
| `duration` | 浮点值, 范围为 `[0.0..10800.0]` | 合成的持续时间（以秒为单位）。 |
| `frameRate` | 浮点值, 范围为 `[1.0..99.0]` | 合成的帧率。 |

#### 返回

CompItem 对象。

---

### ItemCollection.addFolder()

`app.project.items.addFolder(name)`

#### 描述

创建一个新文件夹。创建并返回一个新的 FolderItem 对象，并将其添加到此集合中。如果 ItemCollection 属于项目或根文件夹，则新文件夹的 `parentFolder` 是根文件夹。如果 ItemCollection 属于任何其他文件夹，则新文件夹的 `parentFolder` 是该 `FolderItem`。要将项目放入文件夹中，请设置 [Item.parentFolder](../item#itemparentfolder) 属性。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `name` | 字符串 | 文件夹的名称。 |

#### 返回

FolderItem 对象。

#### 示例

此脚本在项目面板中创建一个新的 FolderItem，并将合成移动到其中。

```javascript
//在项目中创建一个新的 FolderItem，名称为 "comps"
var compFolder = app.project.items.addFolder("comps");
//通过将合成的 Item 的 parentFolder 设置为 "comps" 文件夹，将所有合成移动到新文件夹中
for (var i = 1; i <= app.project.numItems; i++) {
 if (app.project.item(i) instanceof CompItem) {
 app.project.item(i).parentFolder = compFolder;
 }
}
```
