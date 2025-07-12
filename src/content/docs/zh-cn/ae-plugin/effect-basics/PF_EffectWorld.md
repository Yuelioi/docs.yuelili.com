---
title: PF_EffectWorld
---
# PF_EffectWorld / PF_LayerDef

After Effects 使用 PF_EffectWorlds（也称为 PF_LayerDefs）来表示图像。

---

## PF_EffectWorld 结构

| 项 | 描述 |
|---|---|
| `world_flags` | 目前，唯一的标志是： |
| | - `PF_WorldFlag_DEEP` - 如果世界是 16-bpc，则设置此标志 |
| | - `PF_WorldFlag_WRITEABLE` - 表示允许您更改世界的图像数据。 |
| | 通常效果无法更改输入图像数据；只能更改输出。 |
| `data` | 指向图像数据的指针，存储为 `PF_PixelPtr`。 |
| | 不要直接访问；使用 [PF_PixelPtr 访问宏](#pf_pixelptr-accessor-macros)。 |
| | After Effects 中的图像数据始终按顺序组织，每个字包含 Alpha、Red、Green、Blue，从低字节到高字节。 |
| `rowbytes` | 图像像素块中每行的长度（以字节为单位）。 |
| | 像素块包含高度行，每行有宽度像素，后跟一些填充字节。 |
| | 宽度像素（乘以四，因为每个像素是四个字节长）加上可选的额外填充加起来等于 rowbytes 字节。 |
| | 使用此值遍历图像数据。 |
| | 行尾的平台特定填充使得遍历整个缓冲区是不明智的。 |
| | 相反，使用高度和 rowbytes 找到每行的开头。 |
| | !!! 注意 |
| | 此值不会因是否启用场渲染而变化。 |
| | !!! 注意 |
| | 具有相同维度的输入和输出世界可以使用不同的 rowbytes 值。 |
| `width` | 像素缓冲区的宽度和高度。 |
| `height` | |
| `extent_hint` | 包含图层中所有不透明（非零 Alpha）像素的最小矩形。 |
| | 这定义了需要输出的区域。 |
| | 如果您的插件随范围变化（如扩散抖动），请忽略此值并每次渲染完整帧。 |
| `pix_aspect_ratio` | 像素宽高比，表示为 `PF_Rational`。 |
| | !!! 注意 |
| | 效果可以使用此值来检查图层，但必须使用 `PF_InData.pixel_aspect_ratio` 来应用于它们所应用的图层。抱歉。 |
| `platform_ref` | 在 CS5 中不再使用。 |
| | 平台特定的参考信息。 |
| | 在 Windows 上，此值包含一个不透明的值。 |
| | 在 macOS 上，`PF_GET_PLATFORM_REFS` 从 `PF_EffectWorld` 提供 `CGrafPtr` 和 `GDeviceHandle`。 |
| | !!! 注意 |
| | 在 `PF_Cmd_GLOBAL_SETUP` 期间无法获取 `platform_ref`，因为此时还没有输出上下文。耐心点，亲爱的。 |
| `dephault` | 仅用于图层参数。 |
| | 可以是 `PF_LayerDefault_MYSELF` 或 `PF_LayerDefault_NONE`。 |

---

## 16.0 新增内容

在 `PF_Cmd_SMART_RENDER_GPU` 期间，`PF_LayerDef` 将与常规 CPU 渲染一样填充，但 `PF_LayerDef.data` 将为 null；所有其他字段将有效。

---

## PF_EffectWorlds 中的 Rowbytes

不要假设您可以使用 `(width * sizeof(current_pixel_type)) + 4` 或其他方式到达 `PF_EffectWorld` 的下一行；请改用 `PF_EffectWorld` 的 `rowbytes`。

切勿在 `PF_EffectWorld` 的指定区域之外写入；这可能会损坏不属于您的缓存图像缓冲区。

要测试您的效果是否遵守 `PF_EffectWorld>rowbytes`，请在您的效果之后应用 Grow Bounds 效果。

输出缓冲区的 rowbytes 将比输入缓冲区大（尽管它仍具有相同的逻辑大小）。

---

## 字节对齐

`PF_EffectWorld` 中的像素不保证是 16 字节对齐的。效果可能会获得较大 `PF_EffectWorld` 的子区域。使用 Apple 的像素处理优化示例代码的用户，请注意。

除了每通道 8 位颜色外，After Effects 还支持每通道 16 位和 32 位浮点颜色。

效果永远不会接收到具有不同位深度的输入和输出世界，也不会接收到比它们声称能够处理的位深度更高的世界。

---

## 不透明（数据类型）像素的访问宏

使用以下宏访问（不透明）`PF_PixelPtr` 中的数据。

强烈建议不要简单地将一种类型的指针强制转换为另一种类型！要使它工作，需要强制转换，但没有任何东西可以防止您错误地转换它。我们可能会在以后更改其实现（届时您会感谢我们强制这种抽象级别）。

---

## PF_PixelPtr 访问宏

| 宏 | 用途 |
|---|---|
| `PF_GET_PIXEL_DATA16` | 获取指定世界中 16-bpc 像素的指针。 |
| | 如果世界不是 16-bpc，则返回的像素指针将为 NULL。 |
| | 第二个参数是可选的；如果它不是 NULL，则返回的像素将是对传入像素值的解释，就像它在指定的 `PF_EffectWorld` 中一样。 |
| | <pre lang="cpp">PF_GET_PIXEL_DATA16 (<br/>  PF_EffectWorld wP,<br/>  PF_PixelPtr    pP0,<br/>  PF_Pixel16     \*outPP);</pre> |
| `PF_GET_PIXEL_DATA8` | 获取指定世界中 8-bpc 像素的指针。 |
| | 如果世界不是 8-bpc，则返回的像素指针将为 NULL。 |
| | 第二个参数是可选的；如果它不是 NULL，则返回的像素将是对传入像素值的解释，就像它在指定的 `PF_EffectWorld` 中一样。 |
| | <pre lang="cpp">PF_GET_PIXEL_DATA8 (<br/>  PF_EffectWorld wP,<br/>  PF_PixelPtr    pP0,<br/>  PF_Pixel8      \*outPP);</pre> |

将 `PF_GET_PIXEL_DATA16` 和 `PF_GET_PIXEL_DATA8` 视为安全的（咳咳）强制转换例程。

获取 `PF_Pixel16*` 所需的代码实际上非常简单：

```cpp
{
 PF_Pixel16 *deep_pixelP = NULL;
 PF_Err err = PF_Err_NONE;
 err = PF_GET_PIXEL_DATA16(output, NULL, &deep_pixelP);
}
```

如果世界没有深像素，则返回的 `deep_pixelP` 为 NULL。

第二个参数不常用，应传递为 NULL；传递一个不包含在 `PF_EffectWorld` 中的 `PF_PixelPtr` 以强制将其转换为该 `PF_EffectWorld` 的深度）。
