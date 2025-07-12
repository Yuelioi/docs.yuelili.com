---
title: 矩阵
---
# 矩阵

`matrix`

#### 描述

一个变换矩阵的规范，用于变换对象的几何形状。使用它来指定和检索Illustrator文档或文档中的页面项的矩阵信息。

矩阵与`transform`方法结合使用，并作为多个对象的属性。矩阵指定如何变换对象的几何形状。您可以使用[Application](.././Application)对象的方法[Application.getTranslationMatrix()](../Application#applicationgettranslationmatrix)、[Application.getScaleMatrix()](../Application#applicationgetscalematrix)或[Application.getRotationMatrix()](../Application#applicationgetrotationmatrix)生成原始矩阵。

`Matrix`是一个包含矩阵值的记录，而不是对矩阵对象的引用。矩阵命令操作矩阵记录的值。如果命令修改了矩阵，则命令的结果将返回修改后的矩阵记录。传递给命令的原始矩阵记录不会被修改。

---

## 属性

### Matrix.mValueA

`matrix.mValueA`

#### 描述

矩阵属性`a`。

#### 类型

数字（双精度）。

---

### Matrix.mValueB

`matrix.mValueB`

#### 描述

矩阵属性`b`。

#### 类型

数字（双精度）。

---

### Matrix.mValueC

`matrix.mValueC`

#### 描述

矩阵属性`c`。

#### 类型

数字（双精度）。

---

### Matrix.mValueD

`matrix.mValueD`

#### 描述

矩阵属性`d`。

#### 类型

数字（双精度）。

---

### Matrix.mValueTX

`matrix.mValueTX`

#### 描述

矩阵属性`tx`。

#### 类型

数字（双精度）。

---

### Matrix.mValueTY

`matrix.mValueTY`

#### 描述

矩阵属性`ty`。

#### 类型

数字（双精度）。

---

### Matrix.typename

`matrix.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。

---

## 示例

### 组合矩阵以应用多个变换

要对对象应用多个变换，使用矩阵套件比逐个应用变换更高效。以下脚本演示了如何组合多个矩阵。

```javascript
// 使用平移和旋转矩阵变换文档中的所有艺术对象，
// 将艺术对象向右移动0.5英寸，向上移动1.5英寸
if (app.documents.length > 0) {
 var moveMatrix = app.getTranslationMatrix(0.5, 1.5);

 // 在平移基础上添加旋转，逆时针旋转10度
 var totalMatrix = concatenateRotationMatrix(moveMatrix, 10);

 // 对所有艺术对象应用变换
 var doc = app.activeDocument;
 for (var i = 0; i < doc.pageItems.length; i++) {
 doc.pageItems[i].transform(totalMatrix);
 }
}
```
