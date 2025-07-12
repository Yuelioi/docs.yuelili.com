---
title: ImageCaptureOptions
---
# ImageCaptureOptions

`imageCaptureOptions`

#### 描述

图像捕获的选项，与 [Document.imageCapture()](../Document#documentimagecapture) 方法一起使用。所有属性都是可选的。

---

## 属性

### ImageCaptureOptions.antiAliasing

`imageCaptureOptions.antiAliasing`

#### 描述

如果为 `true`，图像结果将进行抗锯齿处理。

默认值：`false`。

#### 类型

布尔值

---

### ImageCaptureOptions.matte

`imageCaptureOptions.matte`

#### 描述

如果为 `true`，画板将使用颜色进行遮罩。

默认值：`false`。

#### 类型

布尔值

---

### ImageCaptureOptions.matteColor

`imageCaptureOptions.matteColor`

#### 描述

用于画板遮罩的颜色。

默认值：白色。

#### 类型

[RGBColor](.././RGBColor)

---

### ImageCaptureOptions.resolution

`imageCaptureOptions.resolution`

#### 描述

捕获的图像文件的分辨率，单位为每英寸点数（PPI），范围在 [72.0 ... 2400.0] 之间。

默认值：150。

#### 类型

数字（双精度）。

---

### ImageCaptureOptions.transparency

`imageCaptureOptions.transparency`

#### 描述

如果为 `true`，图像结果将是透明的。

默认值：`false`。

#### 类型

布尔值。

---

### ImageCaptureOptions.typename

`imageCaptureOptions.typename`

#### 描述

引用对象的类名。

#### 类型

字符串；只读。
