---
title: 附加细节
---
# 附加细节

## 字段与字段处理

在交错式项目中，Premiere 会为每个字段调用一次您的视频滤镜。

这使得视频滤镜可以具有交错式运动效果。`(*theData)->total` 会变为两倍大，每帧的高度会减半，而 `rowbytes` 会翻倍。

在遍历数据时，请尊重 `rowbytes` 的值，否则输出将不正确。

---

## 帧缓存

视频滤镜的渲染输出存储在主机媒体缓存中。例如，当用户在带有滤镜的帧上拖动时，滤镜将被调用来渲染其对帧的效果，并将缓冲区返回给 Premiere。Premiere 会缓存返回的帧，因此当用户再次拖动同一帧时，Premiere 会返回缓存的帧，而无需再次调用滤镜。如果用户修改了滤镜设置、剪辑设置、预览质量等，Premiere 会调用滤镜以使用新设置进行渲染，但会暂时保留之前缓存的帧。因此，如果更改被撤销，Premiere 可能仍然会在适当的时候返回缓存的帧。

如果滤镜应生成随机的、非确定性的输出，或者如果它在没有关键帧的情况下随时间变化，则必须在 PiPL（.r 文件）的 `ANIM_FilterInfo` 部分中设置随机性位。

如果您将该位设置为 `noRandomness`，Premiere 将仅渲染静态图像的一帧。

---

## 创建效果预设

效果预设会出现在效果面板的预设库中，并且可以像带有特定参数设置和关键帧的效果一样应用。效果预设可以按以下方式创建：

1. 将滤镜应用到剪辑
2. 设置滤镜的参数，如果需要可以添加关键帧
3. 在效果控制面板中右键单击滤镜名称，然后选择“保存预设…”
4. 如果需要，可以通过在效果面板中右键单击并选择“新建预设库”来创建预设库
5. 在预设文件夹中组织预设
6. 选择要导出的库和/或预设，右键单击并选择“导出预设”

在 Windows 上，新创建的预设保存在用户“文档和设置”中的隐藏应用程序数据文件夹中（例如 `C:/Documents and Settings/[用户]/Application Data/Adobe Premiere Pro/[版本]/Effect Presets and Custom Items.prfpset`）。在 Mac OS 上，它们位于用户文件夹中，路径为 `~/Library/Application Support/Adobe/Premiere Pro/[版本]/Effect Presets and Custom Items.prfpset`。

效果预设应按照“插件安装”部分中的描述进行安装。一旦它们安装在该文件夹中，它们将变为只读，用户将无法将它们移动到其他文件夹或更改其名称。用户创建的预设将可以修改。

---

## 效果徽章

从 CS5 开始，视频滤镜现在会在效果面板中显示徽章，以宣传它们是否支持 YUV、32 位和/或加速渲染。用户可以过滤效果列表，仅显示支持这些渲染模式的效果。如果视频滤镜使用现有的 `fsGetPixelFormatsSupported` 宣传支持，它们将自动获得 YUV 和 32 位徽章。还可以创建自定义徽章。

要添加您自己的效果徽章，请转到以下文件夹：

在 Windows 上：`[应用程序安装路径]\Settings\BadgeIcons\\`

在 Mac OS 上：`Adobe Premiere Pro CS5.app/Contents/Settings/BadgeIcons/`

在该文件夹中有运行时加载的各种徽章的 PNG 图形，以及一组额外的 `'Sample-*.png'` 和 `'Sample.xml'` 文件。

1. 复制 `Sample-*.png` 文件，将“Sample”前缀替换为您想要为新徽章命名的前缀（例如 `'NewBadge-*.png'`）。根据需要编辑 PNG，但不要更改图像尺寸。
2. 将 `Sample.xml` 文件复制为新名称，该名称应与您想要为新徽章命名的名称匹配（例如 `'NewBadge.xml'`）。编辑您希望用徽章装饰的匹配名称列表。将 `<Name>` 标签更改为您在步骤 1 中选择的名称（例如 `'NewBadge'`）。您还可以将工具提示文本添加为 `<DescriptionItem>` 标签。这些标签充当本地化映射，`langid` 作为键。如果找不到语言，则默认使用 `'en_US'`。在 `<Guid>` 标签中提供您自己的 GUID。
3. 重新启动应用程序。您将在其他徽章过滤器图标旁边获得一个徽章过滤器图标，并在 XML 文件中列出的每个效果旁边获得一个徽章图标。

:::note
`'Sample'` 是一个特殊情况，被有意排除在外。任何其他 `*.xml/*.png` 文件集都将被使用。
:::

---

## Premiere Elements 和效果缩略图预览

Premiere Elements（但不是 Premiere Pro）会为每个效果显示视觉图标。您需要为您的效果提供图标，否则您的效果将显示为空的黑色图标，甚至在 Premiere Elements 8 中可能会出现更糟糕的行为。图标是 60x45 的 PNG 文件，放置在以下位置：

`/[Program Files]/Adobe/Adobe Premiere Elements [版本]/Plug-ins/Common/Effect/Previews/`

文件名应为效果的匹配名称，您在 PiPL 中指定，前缀为 `"PR."`。因此，如果匹配名称为 `"MatchName"`，则文件名应为 `"PR.MatchName.png"`。
