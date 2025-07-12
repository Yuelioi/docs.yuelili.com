---
title: 颜色转换
---
# Color Conversion

这些方法都是围绕将颜色从一种格式转换为另一种格式。例如，将十六进制代码转换为RGB，以便你可以在项目中使用客户品牌颜色的表达式，或者将值转换为HSL，以便你可以通过程序调整亮度或饱和度。

---

## 函数

### rgbToHsl()

`rgbToHsl(rgbaArray)`

#### 描述

将颜色从 RGBA 空间转换为 HSLA 空间。

输入是一个包含归一化红色、绿色、蓝色和 alpha 通道值的数组，所有值的范围都在 `0.0` 到 `1.0` 之间。

结果值是一个包含色调、饱和度、亮度和 alpha 通道值的数组，这些值的范围也在 `0.0` 到 `1.0` 之间。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `rgbaArray` | 四位number数组 | RGBA值, 范围为 `[0.0..1.0]` |

#### 返回

HSLA 数组 (四维)

#### 示例

```js
rgbToHsl.effect("Change Color")("Color To Change")
```

---

### hslToRgb()

`hslToRgb(hslaArray)`

#### 描述

将颜色从 HSLA 空间转换为 RGBA 空间。

此转换与 [rgbToHsl()]() 方法执行的转换相反。

#### 参数

| 参数 | Type | Description |
| --- | --- | --- |
| `hslaArray` | number 数组 (四维) | HSLA 值, 范围为 `[0.0..1.0]` |

#### 返回

RGBA 数组 (四维)

---

### hexToRgb()

`hexToRgb(hexString)`

:::note
该方法添加于 After Effects 16.0.
:::

#### 描述

将颜色从十六进制三元组空间转换为 RGB 空间，或从十六进制四元组空间转换为 RGBA 空间。

对于十六进制三元组，alpha 通道默认为 1.0。

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `hexString` | String | 十六进制三元组（6 位数字，无 alpha 通道）或四元组（8 位数字，包含 alpha 通道），仅包含数字或字符 A–F。 |
| 可选的引导字符 0x、0X 或 # 将被忽略。超过 8 位的字符也将被忽略。 | | |

#### 返回

Array (四维)

#### 示例

以下皆返回 `[1.0, 0.0, 1.0, 1.0]`:

- `hexToRgb("FF00FF")`
- `hexToRgb("#FF00FF")`
- `hexToRgb("0xFF00FF")`
- `hexToRgb("0XFF00FFFF")`
 - **Note:** 这是一个 8 位十六进制四元组输入；最后两位数字将 alpha 通道设置为 1.0。
