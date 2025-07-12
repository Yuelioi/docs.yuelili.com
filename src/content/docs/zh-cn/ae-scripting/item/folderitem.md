---
title: 文件夹项目
---
# FolderItem 对象

`app.project.FolderItem`

#### 描述

FolderItem 对象对应于项目面板中的一个文件夹。它可以包含各种类型的项目（素材、合成、纯色层）以及其他文件夹。

#### 示例

假设项目中的第二个项目是一个 FolderItem，以下代码会为文件夹中的每个顶级项目弹出一个提示框，显示该项目的名称。

```javascript
var secondItem = app.project.item(2);
if (!(secondItem instanceof FolderItem)) {
 alert("问题：第二个项目不是一个文件夹");
} else {
 for (var i = 1; i <= secondItem.numItems; i++) {
 alert("文件夹中的第 " + i + " 个项目名为 " + secondItem.item(i).name);
 }
}
```

---

## 属性

### FolderItem.items

`app.project.item(index).items`

#### 描述

一个 ItemCollection 对象，包含表示此文件夹顶级内容的 Item 对象。

与 Project 对象中的 ItemCollection 不同，此集合仅包含文件夹中的顶级项目。文件夹中的顶级项目与项目中的顶级项目不同。只有在根文件夹中为顶级的项目在项目中也是顶级的。

#### 类型

ItemCollection 对象；只读。

---

### FolderItem.numItems

`app.project.item(index).numItems`

#### 描述

items 集合中包含的项目数量（`folderItem.items.length`）。

如果文件夹包含另一个文件夹，则仅计算该文件夹的 FolderItem，而不计算其中包含的任何子项目。

#### 类型

整数；只读。

---

## 函数

### FolderItem.item()

`app.project.item(index).item(subIndex)`

#### 描述

返回此文件夹中指定索引位置的顶级项目。

请注意，这里的“顶级”是指在文件夹中的顶级，而不一定是在项目中的顶级。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `subIndex` | 整数 | 要检索的项目的位置索引。第一个项目的索引为 1。 |

#### 返回

Item 对象。
