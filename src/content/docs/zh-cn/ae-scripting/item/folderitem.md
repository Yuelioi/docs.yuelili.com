---
title: folderitem
---
# FolderItem object

`app.project.FolderItem`

#### 描述

The FolderItem object corresponds to a folder in your Project panel. It can contain various types of items (footage, compositions, solids) as well as other folders.

#### 示例

Given that the second item in the project is a FolderItem, the following code puts up an alert for each top-level item in the folder, showing that item's name.

```javascript
var secondItem = app.project.item(2);
if (!(secondItem instanceof FolderItem)) {
    alert("problem: second item is not a folder");
} else {
    for (var i = 1; i <= secondItem.numItems; i++) {
        alert("item number " + i + " within the folder is named " + secondItem.item(i).name);
    }
}
```

---

## 属性

### FolderItem.items

`app.project.item(index).items`

#### 描述

An ItemCollection object containing Item object that represents the top-level contents of this folder.

Unlike the ItemCollection in the Project object, this collection contains only the top-level items in the folder. The top-level within the folder is not the same as top-level within the project. Only those items that are top-level in the root folder are also top-level in the Project.

#### 类型

ItemCollection object; 只读.

---

### FolderItem.numItems

`app.project.item(index).numItems`

#### 描述

The number of items contained in the items collection (`folderItem.items.length`).

If the folder contains another folder, only the FolderItem for that folder is counted, not any subitems contained in it.

#### 类型

Integer; 只读.

---

## 函数

### FolderItem.item()

`app.project.item(index).item(subIndex)`

#### 描述

Returns the top-level item in this folder at the specified index position.

Note that "top-level" here means top-level within the folder, not necessarily within the project.

#### 参数

| 参数  |  类型   |                                描述                                |
| ---------- | ------- | ------------------------------------------------------------------------- |
| `subIndex` | Integer | The position index of the item to retrieve. The first item is at index 1. |

#### 返回

Item object.
