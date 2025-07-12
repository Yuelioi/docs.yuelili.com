---
title: 脚本常量
---
# 脚本常量

本章列出并描述了为与Illustrator JavaScript属性和方法一起使用而定义的枚举。

---

## AlternateGlyphsForm

文本的替代字形形式。

| 值 | 描述 |
| --- | --- |
| `AlternateGlyphsForm.DEFAULTFORM` | 默认形式 |
| `AlternateGlyphsForm.TRADITIONAL` | 传统形式 |
| `AlternateGlyphsForm.EXPERT` | 专家形式 |
| `AlternateGlyphsForm.JIS78FORM` | JIS78形式 |
| `AlternateGlyphsForm.JIS83FORM` | JIS83形式 |
| `AlternateGlyphsForm.HALFWIDTH` | 半宽形式 |
| `AlternateGlyphsForm.THIRDWIDTH` | 三分之一宽度 |
| `AlternateGlyphsForm.QUARTERWIDTH` | 四分之一宽度 |
| `AlternateGlyphsForm.FULLWIDTH` | 全宽形式 |
| `AlternateGlyphsForm.PROPORTIONALWIDTH` | 比例宽度 |
| `AlternateGlyphsForm.JIS90FORM` | JIS90形式 |
| `AlternateGlyphsForm.JIS04FORM` | JIS04形式 |

#### 示例

```javascript
textRef.textRange.characters[i].characterAttributes.alternateGlyphs == AlternateGlyphsForm.DEFAULTFORM;
textRef.textRange.characters[i].characterAttributes.alternateGlyphs == AlternateGlyphsForm.FULLWIDTH
```

---

## AntiAliasingMethod

光栅化中使用的抗锯齿方法类型。

| 值 | 描述 |
| --- | --- |
| `AntiAliasingMethod.None` | 不允许抗锯齿。 |
| `AntiAliasingMethod.ARTOPTIMIZED` | 优化艺术对象。 |
| `AntiAliasingMethod.TYPEOPTIMIZED` | 优化文本对象。 |

---

## ArtClippingOption

输出期间如何裁剪艺术。

| 值 | 描述 |
| --- | --- |
| `ArtClippingOption.OUTPUTARTBOUNDS` | 输出大小为艺术作品的大小。 |
| `ArtClippingOption.OUTPUTARTBOARDBOUNDS` | 输出大小为画板的大小。 |
| `ArtClippingOption.OUTPUTCROPRECTBOUNDS` | 输出大小为裁剪区域的大小。 |

---

## AutoCADColors

| 值 | 描述 |
| --- | --- |
| `AutoCADColors.Max8Colors` | 最大8色 |
| `AutoCADColors.Max16Colors` | 最大16色 |
| `AutoCADColors.Max256Colors` | 最大256色 |
| `AutoCADColors.TrueColors` | 真彩色 |

---

## AutoCADCompatibility

| 值 | 描述 |
| --- | --- |
| `AutoCADCompatibility.AutoCADRelease13` | 版本13 |
| `AutoCADCompatibility.AutoCADRelease18` | 版本18 |
| `AutoCADCompatibility.AutoCADRelease14` | 版本14 |
| `AutoCADCompatibility.AutoCADRelease21` | 版本21 |
| `AutoCADCompatibility.AutoCADRelease15` | 版本15 |
| `AutoCADCompatibility.AutoCADRelease24` | 版本24 |

---

## AutoCADExportFileFormat

| 值 | 描述 |
| --- | --- |
| `AutoCADExportFileFormat.DXF` | DXF |
| `AutoCADExportFileFormat.DWG` | DWG |

---

## AutoCADExportOption

| 值 | 描述 |
| --- | --- |
| `AutoCADExportOption.PreserveAppearance` | 保留外观 |
| `AutoCADExportOption.MaximizeEditability` | 最大化可编辑性 |

---

## AutoCADGlobalScaleOption

| 值 | 描述 |
| --- | --- |
| `AutoCADGlobalScaleOption.OriginalSize` | 原始大小 |
| `AutoCADGlobalScaleOption.ScaleByValue` | 按值缩放 |
| `AutoCADGlobalScaleOption.FitArtboard` | 适合画板 |

---

## AutoCADRasterFormat

| 值 | 描述 |
| --- | --- |
| `AutoCADRasterFormat.PNG` | PNG |
| `AutoCADRasterFormat.JPEG` | JPEG |

---

## AutoCADUnit

| 值 | 描述 |
| --- | --- |
| `AutoCADUnit.Points` | 点 |
| `AutoCADUnit.Picas` | 派卡 |
| `AutoCADUnit.Inches` | 英寸 |
| `AutoCADUnit.Millimeters` | 毫米 |
| `AutoCADUnit.Centimeters` | 厘米 |
| `AutoCADUnit.Pixels` | 像素 |

---

## AutoKernType

自动字距调整类型。

| 值 | 描述 |
| --- | --- |
| `AutoKernType.NOAUTOKERN` | 无 |
| `AutoKernType.AUTO` | 自动 |
| `AutoKernType.OPTICAL` | 光学 |
| `AutoKernType.METRICSROMANONLY` | 度量 |

---

## AutoLeadingType

自动行距类型。

| 值 | 描述 |
| --- | --- |
| `AutoLeadingType.BOTTOMTOBOTTOM` | 底部到底部 |
| `AutoLeadingType.TOPTOTOP` | 顶部到顶部 |

---

## BaselineDirectionType

基线方向类型。

| 值 | 描述 |
| --- | --- |
| `BaselineDirectionType.Standard` | 标准 |
| `BaselineDirectionType.VerticalRotated` | 垂直旋转 |
| `BaselineDirectionType.TateChuYoko` | 竖中横 |

---

## BlendAnimationType

| 值 | 描述 |
| --- | --- |
| `BlendAnimationType.INBUILD` | 构建中 |
| `BlendAnimationType.NOBLENDANIMATION` | 无 |
| `BlendAnimationType.INSEQUENCE` | 顺序中 |

---

## BlendModes

合成对象时使用的混合模式。

| 值 | 描述 |
| --- | --- |
| `BlendModes.COLORBLEND` | 颜色 |
| `BlendModes.COLORBURN` | 颜色加深 |
| `BlendModes.COLORDODGE` | 颜色减淡 |
| `BlendModes.DARKEN` | 变暗 |
| `BlendModes.DIFFERENCE` | 差值 |
| `BlendModes.EXCLUSION` | 排除 |
| `BlendModes.HARDLIGHT` | 强光 |
| `BlendModes.HUE` | 色相 |
| `BlendModes.LIGHTEN` | 变亮 |
| `BlendModes.LUMINOSITY` | 亮度 |
| `BlendModes.MULTIPLY` | 正片叠底 |
| `BlendModes.NORMAL` | 正常 |
| `BlendModes.OVERLAY` | 叠加 |
| `BlendModes.SATURATIONBLEND` | 饱和度 |
| `BlendModes.SCREEN` | 滤色 |
| `BlendModes.SOFTLIGHT` | 柔光 |

---

## BlendsExpandPolicy

FXG文件格式用于扩展混合的策略。

| 值 | 描述 |
| --- | --- |
| `BlendsExpandPolicy.AUTOMATICALLYCONVERTBLENDS` | 自动转换混合 |
| `BlendsExpandPolicy.RASTERIZEBLENDS` | 光栅化混合 |

---

## BurasagariTypeEnum

Burasagari类型。

| 值 | 描述 |
| --- | --- |
| `BurasagariTypeEnum.Forced` | 强制 |
| `BurasagariTypeEnum.None` | 无 |
| `BurasagariTypeEnum.Standard` | 标准 |

---

## CaseChangeType

大小写更改类型。

| 值 | 描述 |
| --- | --- |
| `CaseChangeType.LOWERCASE` | 小写 (`"hello world"`) |
| `CaseChangeType.SENTENCECASE` | 句子大小写 (`"Hello world"`) |
| `CaseChangeType.TITLECASE` | 标题大小写 (`"Hello World"`) |
| `CaseChangeType.UPPERCASE` | 大写 (`"HELLO WORLD"`) |

---

## ColorConversion

颜色转换策略。

| 值 | 描述 |
| --- | --- |
| `ColorConversion.COLORCONVERSIONREPURPOSE` | 颜色转换重新用途 |
| `ColorConversion.COLORCONVERSIONTODEST` | 颜色转换到目标 |
| `ColorConversion.None` | 无 |

---

## ColorConvertPurpose

使用`Application`类的`ConvertSampleColor`方法进行颜色转换的目的。

| 值 | 描述 |
| --- | --- |
| `ColorConvertPurpose.defaultpurpose` | 默认 |
| `ColorConvertPurpose.exportpurpose` | 导出 |
| `ColorConvertPurpose.previewpurpose` | 预览 |
| `ColorConvertPurpose.dummypurpose` | 虚拟 |

---

## ColorDestination

目标配置文件。

| 值 | 描述 |
| --- | --- |
| `ColorDestination.COLORDESTINATIONDOCCMYK` | 文档CMYK |
| `ColorDestination.COLORDESTINATIONDOCRGB` | 文档RGB |
| `ColorDestination.COLORDESTINATIONPROFILE` | 配置文件 |
| `ColorDestination.COLORDESTINATIONWORKINGCMYK` | 工作CMYK |
| `ColorDestination.COLORDESTINATIONWORKINGRGB` | 工作RGB |
| `ColorDestination.None` | 无 |

---

## ColorDitherMethod

导出GIF和PNG8图像时用于抖动颜色的方法。

| 值 | 描述 |
| --- | --- |
| `ColorDitherMethod.DIFFUSION` | 扩散 |
| `ColorDitherMethod.NOISE` | 噪声 |
| `ColorDitherMethod.NOREDUCTION` | 无减少 |
| `ColorDitherMethod.PATTERNDITHER` | 图案抖动 |

---

## ColorModel

使用的颜色模型。

| 值 | 描述 |
| --- | --- |
| `ColorModel.PROCESS` | 过程 |
| `ColorModel.REGISTRATION` | 注册 |
| `ColorModel.SPOT` | 专色 |

---

## ColorProfile

| 值 | 描述 |
| --- | --- |
| `ColorProfile.INCLUDEALLPROFILE` | 包含所有配置文件 |
| `ColorProfile.INCLUDEDESTPROFILE` | 包含目标配置文件 |
| `ColorProfile.INCLUDERGBPROFILE` | 包含RGB配置文件 |
| `ColorProfile.LEAVEPROFILEUNCHANGED` | 保留配置文件不变 |
| `ColorProfile.None` | 无 |

---

## ColorReductionMethod

导出GIF和PNG8图像时用于减少颜色的方法。

| 值 | 描述 |
| --- | --- |
| `ColorReductionMethod.ADAPTIVE` | 自适应 |
| `ColorReductionMethod.SELECTIVE` | 选择性 |
| `ColorReductionMethod.PERCEPTUAL` | 感知 |
| `ColorReductionMethod.WEB` | 网页 |

---

## ColorType

单个颜色的颜色规范。

| 值 | 描述 |
| --- | --- |
| `ColorType.CMYK` | CMYK |
| `ColorType.GRADIENT` | 渐变 |
| `ColorType.GRAY` | 灰度 |
| `ColorType.PATTERN` | 图案 |
| `ColorType.RGB` | RGB |
| `ColorType.SPOT` | 专色 |
| `ColorType.NONE` | 无 |

---

## Compatibility

保存EPS或Illustrator文件时创建的Illustrator文件版本。

| 值 | 描述 |
| --- | --- |
| `Compatibility.ILLUSTRATOR8` | Illustrator 8 |
| `Compatibility.ILLUSTRATOR9` | Illustrator 9 |
| `Compatibility.ILLUSTRATOR10` | Illustrator 10 |
| `Compatibility.ILLUSTRATOR11` | Illustrator 11 |
| `Compatibility.ILLUSTRATOR12` | Illustrator 12 |
| `Compatibility.ILLUSTRATOR13` | Illustrator 13 |
| `Compatibility.ILLUSTRATOR14` | Illustrator 14 |
| `Compatibility.ILLUSTRATOR15` | Illustrator 15 |
| `Compatibility.ILLUSTRATOR16` | Illustrator 16 |
| `Compatibility.ILLUSTRATOR17` | Illustrator 17 |
| `Compatibility.ILLUSTRATOR19` | Illustrator 19 |
| `Compatibility.JAPANESEVERSION3` | 日文版本3 |

---

## CompressionQuality

保存PDF文件时使用的位图压缩质量。

| 值 | 描述 |
| --- | --- |
| `CompressionQuality.AUTOMATICJPEG2000HIGH` | 待办 |
| `CompressionQuality.AUTOMATICJPEG2000LOSSLESS` | 待办 |
| `CompressionQuality.AUTOMATICJPEG2000LOW` | 待办 |
| `CompressionQuality.AUTOMATICJPEG2000MAXIMUM` | 待办 |
| `CompressionQuality.AUTOMATICJPEG2000MEDIUM` | 待办 |
| `CompressionQuality.AUTOMATICJPEG2000MINIMUM` | 待办 |
| `CompressionQuality.AUTOMATICJPEGHIGH` | 待办 |
| `CompressionQuality.AUTOMATICJPEGLOW` | 待办 |
| `CompressionQuality.AUTOMATICJPEGMAXIMUM` | 待办 |
| `CompressionQuality.AUTOMATICJPEGMEDIUM` | 待办 |
| `CompressionQuality.AUTOMATICJPEGMINIMUM` | 待办 |
| `CompressionQuality.JPEG2000HIGH` | 待办 |
| `CompressionQuality.JPEG2000LOSSLESS` | 待办 |
| `CompressionQuality.JPEG2000LOW` | 待办 |
| `CompressionQuality.JPEG2000MAXIMUM` | 待办 |
| `CompressionQuality.JPEG2000MEDIUM` | 待办 |
| `CompressionQuality.JPEG2000MINIMUM` | 待办 |
| `CompressionQuality.JPEGHIGH` | 待办 |
| `CompressionQuality.JPEGLOW` | 待办 |
| `CompressionQuality.JPEGMAXIMUM` | 待办 |
| `CompressionQuality.JPEGMEDIUM` | 待办 |
| `CompressionQuality.JPEGMINIMUM` | 待办 |
| `CompressionQuality.ZIP4BIT` | 待办 |
| `CompressionQuality.ZIP8BIT` | 待办 |
| `CompressionQuality.None` | 待办 |

---

## CoordinateSystem

Illustrator使用的坐标系。

| 值 | 描述 |
| --- | --- |
| `CoordinateSystem.ARTBOARDCOORDINATESYSTEM` | 待办 |
| `CoordinateSystem.DOCUMENTCOORDINATESYSTEM` | 待办 |

---

## CropOptions

文档裁剪框的样式。

| 值 | 描述 |
| --- | --- |
| `CropOptions.Japanese` | 日文 |
| `CropOptions.Standard` | 标准 |

---

## DocumentArtboardLayout

新文档中的布局。

| 值 | 描述 |
| --- | --- |
| `DocumentArtboardLayout.Column` | 待办 |
| `DocumentArtboardLayout.GridByCol` | 待办 |
| `DocumentArtboardLayout.GridByRow` | 待办 |
| `DocumentArtboardLayout.RLGridByCol` | 待办 |
| `DocumentArtboardLayout.RLGridByRow` | 待办 |
| `DocumentArtboardLayout.RLRow` | 待办 |
| `DocumentArtboardLayout.Row` | 待办 |

---

## DocumentColorSpace

文档的颜色空间。

| 值 | 描述 |
| --- | --- |
| `DocumentColorSpace.CMYK` | CMYK |
| `DocumentColorSpace.RGB` | RGB |

---

## DocumentLayoutStyle

文档的布局样式。

| 值 | 描述 |
| --- | --- |
| `DocumentLayoutStyle.CASCADE` | 待办 |
| `DocumentLayoutStyle.CONSOLIDATEALL` | 待办 |
| `DocumentLayoutStyle.FLOATALL` | 待办 |
| `DocumentLayoutStyle.HORIZONTALTILE` | 待办 |
| `DocumentLayoutStyle.VERTICALTILE` | 待办 |

---

## DocumentPresetType

用于新文档的预设类型。

| Value | 描述 |
| --- | --- |
| `DocumentPresetType.BasicCMYK` | 基本 CMYK |
| `DocumentPresetType.BasicRGB` | 基本 RGB |
| `DocumentPresetType.Mobile` | 移动设备 |
| `DocumentPresetType.Print` | 打印 |
| `DocumentPresetType.Video` | 视频 |
| `DocumentPresetType.Web` | 网页 |

---

## DocumentPreviewMode

文档预览模式。

| Value | 描述 |
| --- | --- |
| `DocumentPreviewMode.DefaultPreview` | 默认 |
| `DocumentPreviewMode.OverprintPreview` | 叠印 |
| `DocumentPreviewMode.PixelPreview` | 像素 |

---

## DocumentRasterResolution

预设文档栅格分辨率。

| Value | 描述 |
| --- | --- |
| `DocumentRasterResolution.ScreenResolution` | 屏幕分辨率 |
| `DocumentRasterResolution.HighResolution` | 高分辨率 |
| `DocumentRasterResolution.MediumResolution` | 中等分辨率 |

---

## DocumentTransparencyGrid

文档透明度网格颜色。

| Value | 描述 |
| --- | --- |
| `DocumentTransparencyGrid.TransparencyGridBlue` | 蓝色 |
| `DocumentTransparencyGrid.TransparencyGridDark` | 深色 |
| `DocumentTransparencyGrid.TransparencyGridGreen` | 绿色 |
| `DocumentTransparencyGrid.TransparencyGridLight` | 浅色 |
| `DocumentTransparencyGrid.TransparencyGridMedium` | 中等 |
| `DocumentTransparencyGrid.TransparencyGridNone` | 无 |
| `DocumentTransparencyGrid.TransparencyGridOrange` | 橙色 |
| `DocumentTransparencyGrid.TransparencyGridPurple` | 紫色 |
| `DocumentTransparencyGrid.TransparencyGridRed` | 红色 |

---

## DocumentType

用于保存文件的文件格式。

| Value | 描述 |
| --- | --- |
| `DocumentType.EPS` | EPS |
| `DocumentType.FXG` | FXG |
| `DocumentType.ILLUSTRATOR` | Illustrator |
| `DocumentType.PDF` | PDF |

---

## DownsampleMethod

| Value | 描述 |
| --- | --- |
| `DownsampleMethod.AVERAGEDOWNSAMPLE` | 平均下采样 |
| `DownsampleMethod.BICUBICDOWNSAMPLE` | 双三次下采样 |
| `DownsampleMethod.NODOWNSAMPLE` | 无下采样 |
| `DownsampleMethod.SUBSAMPLE` | 子采样 |

---

## ElementPlacement

| Value | 描述 |
| --- | --- |
| `ElementPlacement.INSIDE` | 内部 |
| `ElementPlacement.PLACEAFTER` | 放置在后 |
| `ElementPlacement.PLACEATBEGINNING` | 放置在开头 |
| `ElementPlacement.PLACEATEND` | 放置在末尾 |
| `ElementPlacement.PLACEBEFORE` | 放置在前 |

---

## EPSPostScriptLevelEnum

| Value | 描述 |
| --- | --- |
| `EPSPostScriptLevelEnum.LEVEL2` | 级别 2 |
| `EPSPostScriptLevelEnum.LEVEL3` | 级别 3 |

---

## EPSPreview

保存 EPS 文件时使用的预览图像格式。

| Value | 描述 |
| --- | --- |
| `EPSPreview.BWTIFF` | 黑白 TIFF |
| `EPSPreview.COLORTIFF` | 彩色 TIFF |
| `EPSPreview.TRANSPARENTCOLORTIFF` | 透明彩色 TIFF |
| `EPSPreview.None` | 无 |

---

## ExportType

用于导出文件的文件格式。

| Value | 描述 |
| --- | --- |
| `ExportType.AutoCAD` | AutoCAD |
| `ExportType.FLASH` | FLASH |
| `ExportType.GIF` | GIF |
| `ExportType.JPEG` | JPEG |
| `ExportType.Photoshop` | Photoshop |
| `ExportType.PNG24` | PNG24 |
| `ExportType.PNG8` | PNG8 |
| `ExportType.SVG` | SVG |
| `ExportType.TIFF` | TIFF |

---

## FigureStyleType

| Value | 描述 |
| --- | --- |
| `FigureStyleType.DEFAULTFIGURESTYLE` | 默认 |
| `FigureStyleType.PROPORTIONAL` | 比例 |
| `FigureStyleType.PROPORTIONALOLDSTYLE` | 旧式比例 |
| `FigureStyleType.TABULAR` | 表格 |
| `FigureStyleType.TABULAROLDSTYLE` | 旧式表格 |

---

## FiltersPreservePolicy

FXG 文件格式使用的滤镜保留策略。

| Value | 描述 |
| --- | --- |
| `FiltersPreservePolicy.EXPANDFILTERS` | 扩展滤镜 |
| `FiltersPreservePolicy.KEEPFILTERSEDITABLE` | 保持滤镜可编辑 |
| `FiltersPreservePolicy.RASTERIZEFILTERS` | 栅格化滤镜 |

---

## FlashExportStyle

导出文件时用于转换 Illustrator 图像的方法。

| Value | 描述 |
| --- | --- |
| `FlashExportStyle.ASFLASHFILE` | 作为 Flash 文件 |
| `FlashExportStyle.LAYERSASFILES` | 图层作为文件 |
| `FlashExportStyle.LAYERSASFRAMES` | 图层作为帧 |
| `FlashExportStyle.LAYERSASSYMBOLS` | 图层作为符号 |
| `FlashExportStyle.TOFILES` | 导出为文件 |

---

## FlashExportVersion

导出的 SWF 文件版本。

| Value | 描述 |
| --- | --- |
| `FlashExportVersion.FlashVersion1` | 版本 1 |
| `FlashExportVersion.FlashVersion2` | 版本 2 |
| `FlashExportVersion.FlashVersion3` | 版本 3 |
| `FlashExportVersion.FlashVersion4` | 版本 4 |
| `FlashExportVersion.FlashVersion5` | 版本 5 |
| `FlashExportVersion.FlashVersion6` | 版本 6 |
| `FlashExportVersion.FlashVersion7` | 版本 7 |
| `FlashExportVersion.FlashVersion8` | 版本 8 |
| `FlashExportVersion.FlashVersion9` | 版本 9 |

---

## FlashImageFormat

用于存储 Flash 图像的格式。

| Value | 描述 |
| --- | --- |
| `FlashImageFormat.LOSSLESS` | 无损 |
| `FlashImageFormat.LOSSY` | 有损 |

---

## FlashJPEGMethod

用于存储 JPEG 图像的方法。

| Value | 描述 |
| --- | --- |
| `FlashJPEGMethod.Optimized` | 优化 |
| `FlashJPEGMethod.Standard` | 标准 |

---

## FlashPlaybackSecurity

| Value | 描述 |
| --- | --- |
| `FlashPlaybackSecurity.PlaybackLocal` | 本地 |
| `FlashPlaybackSecurity.PlaybackNetwork` | 网络 |

---

## FontBaselineOption

| Value | 描述 |
| --- | --- |
| `FontBaselineOption.NORMALBASELINE` | 正常基线 |
| `FontBaselineOption.SUPERSCRIPT` | 上标 |
| `FontBaselineOption.SUBSCRIPT` | 下标 |

---

## FontCapsOption

| Value | 描述 |
| --- | --- |
| `FontCapsOption.ALLCAPS` | 全部大写 |
| `FontCapsOption.ALLSMALLCAPS` | 全部小写 |
| `FontCapsOption.NORMALCAPS` | 正常大写 |
| `FontCapsOption.SMALLCAPS` | 小型大写 |

---

## FontOpenTypePositionOption

| Value | 描述 |
| --- | --- |
| `FontOpenTypePositionOption.DENOMINATOR` | 分母 |
| `FontOpenTypePositionOption.NUMERATOR` | 分子 |
| `FontOpenTypePositionOption.OPENTYPEDEFAULT` | OpenType 默认 |
| `FontOpenTypePositionOption.OPENTYPESUBSCRIPT` | OpenType 下标 |
| `FontOpenTypePositionOption.OPENTYPESUPERSCRIPT` | OpenType 上标 |

---

## FontSubstitutionPolicy

| Value | 描述 |
| --- | --- |
| `FontSubstitutionPolicy.SUBSTITUTEDEVICE` | 设备 |
| `FontSubstitutionPolicy.SUBSTITUTEOBLIQUE` | 斜体 |
| `FontSubstitutionPolicy.SUBSTITUTETINT` | 色调 |

---

## FXGVersion

FXG 文件格式版本。

| Value | 描述 |
| --- | --- |
| `FXGVersion.VERSION1PT0` | 版本 1 PT0 |
| `FXGVersion.VERSION2PT0` | 版本 2 PT0 |

---

## GradientsPreservePolicy

FXG 文件格式使用的渐变保留策略。

| Value | 描述 |
| --- | --- |
| `GradientsPreservePolicy.AUTOMATICALLYCONVERTGRADIENTS` | 自动转换渐变 |
| `GradientsPreservePolicy.KEEPGRADIENTSEDITABLE` | 保持渐变可编辑 |

---

## GradientType

渐变类型。

| Value | 描述 |
| --- | --- |
| `GradientType.LINEAR` | 线性 |
| `GradientType.RADIAL` | 径向 |

---

## ImageColorSpace

栅格项目或导出文件的颜色空间。

| Value | 描述 |
| --- | --- |
| `ImageColorSpace.CMYK` | CMYK |
| `ImageColorSpace.DeviceN` | DeviceN |
| `ImageColorSpace.Grayscale` | 灰度 |
| `ImageColorSpace.Indexed` | 索引 |
| `ImageColorSpace.LAB` | LAB |
| `ImageColorSpace.RGB` | RGB |
| `ImageColorSpace.Separation` | 分离 |

---

## InkPrintStatus

| Value | 描述 |
| --- | --- |
| `InkPrintStatus.CONVERTINK` | 转换墨水 |
| `InkPrintStatus.ENABLEINK` | 启用墨水 |
| `InkPrintStatus.DISABLEINK` | 禁用墨水 |

---

## InkType

| Value | 描述 |
| --- | --- |
| `InkType.BLACKINK` | 黑色墨水 |
| `InkType.CUSTOMINK` | 自定义墨水 |
| `InkType.CYANINK` | 青色墨水 |
| `InkType.MAGENTAINK` | 洋红色墨水 |
| `InkType.YELLOWINK` | 黄色墨水 |

---

## JavaScriptExecutionMode

| Value | 描述 |
| --- | --- |
| `JavaScriptExecutionMode.BeforeRunning` | 运行前 |
| `JavaScriptExecutionMode.OnRuntimeError` | 运行时错误 |
| `JavaScriptExecutionMode.never` | 从不 |

---

## Justification

段落文本的对齐或对齐方式。

| Value | 描述 |
| --- | --- |
| `Justification.CENTER` | 居中 |
| `Justification.FULLJUSTIFY` | 完全对齐 |
| `Justification.FULLJUSTIFYLASTLINECENTER` | 最后一行居中对齐 |
| `Justification.FULLJUSTIFYLASTLINELEFT` | 最后一行左对齐 |
| `Justification.FULLJUSTIFYLASTLINERIGHT` | 最后一行右对齐 |
| `Justification.LEFT` | 左对齐 |
| `Justification.RIGHT` | 右对齐 |

---

## KinsokuOrderEnum

| Value | 描述 |
| --- | --- |
| `KinsokuOrderEnum.PUSHIN` | 推入 |
| `KinsokuOrderEnum.PUSHOUTFIRST` | 先推出 |
| `KinsokuOrderEnum.PUSHOUTONLY` | 仅推出 |

---

## KnockoutState

页面项目使用的挖空类型。

| Value | 描述 |
| --- | --- |
| `KnockoutState.DISABLED` | 禁用 |
| `KnockoutState.ENABLED` | 启用 |
| `KnockoutState.INHERITED` | 继承 |
| `KnockoutState.Unknown` | 未知 |

---

## LanguageType

| Value | 描述 |
| --- | --- |
| `LanguageType.BOKMALNORWEGIAN` | 挪威博克马尔语 |
| `LanguageType.BRAZILLIANPORTUGUESE` | 巴西葡萄牙语 |
| `LanguageType.BULGARIAN` | 保加利亚语 |
| `LanguageType.CANADIANFRENCH` | 加拿大法语 |
| `LanguageType.CATALAN` | 加泰罗尼亚语 |
| `LanguageType.CHINESE` | 中文 |
| `LanguageType.CZECH` | 捷克语 |
| `LanguageType.DANISH` | 丹麦语 |
| `LanguageType.DUTCH` | 荷兰语 |
| `LanguageType.DUTCH2005REFORM` | 2005 年荷兰语改革 |
| `LanguageType.ENGLISH` | 英语 |
| `LanguageType.FINNISH` | 芬兰语 |
| `LanguageType.GERMAN2006REFORM` | 2006 年德语改革 |
| `LanguageType.GREEK` | 希腊语 |
| `LanguageType.HUNGARIAN` | 匈牙利语 |
| `LanguageType.ICELANDIC` | 冰岛语 |
| `LanguageType.ITALIAN` | 意大利语 |
| `LanguageType.JAPANESE` | 日语 |
| `LanguageType.NYNORSKNORWEGIAN` | 挪威尼诺斯克语 |
| `LanguageType.OLDGERMAN` | 古德语 |
| `LanguageType.POLISH` | 波兰语 |
| `LanguageType.RUMANIAN` | 罗马尼亚语 |
| `LanguageType.RUSSIAN` | 俄语 |
| `LanguageType.SERBIAN` | 塞尔维亚语 |
| `LanguageType.SPANISH` | 西班牙语 |
| `LanguageType.STANDARDFRENCH` | 标准法语 |
| `LanguageType.STANDARDGERMAN` | 标准德语 |
| `LanguageType.STANDARDPORTUGUESE` | 标准葡萄牙语 |
| `LanguageType.SWEDISH` | 瑞典语 |
| `LanguageType.SWISSGERMAN` | 瑞士德语 |
| `LanguageType.SWISSGERMAN2006REFORM` | 2006 年瑞士德语改革 |
| `LanguageType.TURKISH` | 土耳其语 |
| `LanguageType.UKENGLISH` | 英国英语 |
| `LanguageType.UKRANIAN` | 乌克兰语 |

---

## LayerOrderType

| Value | 描述 |
| --- | --- |
| `LayerOrderType.TOPDOWN` | 自上而下 |
| `LayerOrderType.BOTTOMUP` | 自下而上 |

---

## LibraryType

Illustrator 库类型。

| Value | 描述 |
| --- | --- |
| `LibraryType.Brushes` | 画笔 |
| `LibraryType.GraphicStyles` | 图形样式 |
| `LibraryType.IllustratorArtwork` | Illustrator 艺术作品 |
| `LibraryType.Swatches` | 色板 |
| `LibraryType.Symbols` | 符号 |

---

## MonochromeCompression

保存 PDF 文件时用于单色位图项目的压缩类型。

| Value | 描述 |
| --- | --- |
| `MonochromeCompression.CCIT3` | CCIT3 |
| `MonochromeCompression.CCIT4` | CCIT4 |
| `MonochromeCompression.MONOZIP` | MONOZIP |
| `MonochromeCompression.None` | 无 |
| `MonochromeCompression.RUNLENGTH` | RUNLENGTH |

---

## OutputFlattening

保存 EPS 和 Illustrator 文件格式时，如何将透明度拼合为早期版本的 Illustrator 兼容性。

| Value | 描述 |
| --- | --- |
| `OutputFlattening.PRESERVEAPPEARANCE` | 保留外观 |
| `OutputFlattening.PRESERVEPATHS` | 保留路径 |

---

## PageMarksTypes

| Value | 描述 |
| --- | --- |
| `PageMarksTypes.Japanese` | 日语 |
| `PageMarksTypes.Roman` | 罗马 |

---

## PathPointSelection

路径中哪些点被选中（如果有）。

| 值 | 描述 |
| --- | --- |
| `PathPointSelection.ANCHORPOINT` | todo |
| `PathPointSelection.LEFTDIRECTION` | todo |
| `PathPointSelection.LEFTRIGHTPOINT` | todo |
| `PathPointSelection.NOSELECTION` | todo |
| `PathPointSelection.RIGHTDIRECTION` | todo |

---

## PDFBoxType

| 值 | 描述 |
| --- | --- |
| `PDFBoxType.PDFARTBOX` | todo |
| `PDFBoxType.PDFBLEEDBOX` | todo |
| `PDFBoxType.PDFBOUNDINGBOX` | todo |
| `PDFBoxType.PDFCROPBOX` | todo |
| `PDFBoxType.PDFMEDIABOX` | todo |
| `PDFBoxType.PDFTRIMBOX` | todo |

---

## PDFChangesAllowedEnum

| 值 | 描述 |
| --- | --- |
| `PDFChangesAllowedEnum.CHANGE128ANYCHANGES` | todo |
| `PDFChangesAllowedEnum.CHANGE128COMMENTING` | todo |
| `PDFChangesAllowedEnum.CHANGE128EDITPAGE` | todo |
| `PDFChangesAllowedEnum.CHANGE128FILLFORM` | todo |
| `PDFChangesAllowedEnum.CHANGE128NONE` | todo |
| `PDFChangesAllowedEnum.CHANGE40ANYCHANGES` | todo |
| `PDFChangesAllowedEnum.CHANGE40COMMENTING` | todo |
| `PDFChangesAllowedEnum.CHANGE40NONE` | todo |
| `PDFChangesAllowedEnum.CHANGE40PAGELAYOUT` | todo |

---

## PDFCompatibility

保存 PDF 文件时创建的 Acrobat 文件格式版本。

| 值 | 描述 |
| --- | --- |
| `PDFCompatibility.ACROBAT4` | Acrobat 4 |
| `PDFCompatibility.ACROBAT5` | Acrobat 5 |
| `PDFCompatibility.ACROBAT6` | Acrobat 6 |
| `PDFCompatibility.ACROBAT7` | Acrobat 7 |
| `PDFCompatibility.ACROBAT8` | Acrobat 8 |

---

## PDFOverprint

| 值 | 描述 |
| --- | --- |
| `PDFOverprint.DISCARDPDFOVERPRINT` | 丢弃 PDF 叠印 |
| `PDFOverprint.PRESERVEPDFOVERPRINT` | 保留 PDF 叠印 |

---

## PDFPrintAllowedEnum

| 值 | 描述 |
| --- | --- |
| `PDFPrintAllowedEnum.PRINT128HIGHRESOLUTION` | 128 高分辨率 |
| `PDFPrintAllowedEnum.PRINT128LOWRESOLUTION` | 128 低分辨率 |
| `PDFPrintAllowedEnum.PRINT128NONE` | 128 无 |
| `PDFPrintAllowedEnum.PRINT40HIGHRESOLUTION` | 40 高分辨率 |
| `PDFPrintAllowedEnum.PRINT40NONE` | 40 无 |

---

## PDFTrimMarkWeight

| 值 | 描述 |
| --- | --- |
| `PDFTrimMarkWeight.TRIMMARKWEIGHT0125` | 权重 0125 |
| `PDFTrimMarkWeight.TRIMMARKWEIGHT025` | 权重 025 |
| `PDFTrimMarkWeight.TRIMMARKWEIGHT05` | 权重 05 |

---

## PDFXStandard

| 值 | 描述 |
| --- | --- |
| `PDFXStandard.PDFX1A2001` | PDFX1A2001 |
| `PDFXStandard.PDFX1A2003` | PDFX1A2003 |
| `PDFXStandard.PDFX32002` | PDFX32002 |
| `PDFXStandard.PDFX32003` | PDFX32003 |
| `PDFXStandard.PDFX42007` | PDFX42007 |
| `PDFXStandard.PDFXNONE` | PDFXNONE |

---

## PerspectiveGridType

| 值 | 描述 |
| --- | --- |
| `PerspectiveGridType.OnePointPerspectiveGridType` | 单点透视网格类型 |
| `PerspectiveGridType.TwoPointPerspectiveGridType` | 两点透视网格类型 |
| `PerspectiveGridType.ThreePointPerspectiveGridType` | 三点透视网格类型 |
| `PerspectiveGridType.InvalidPerspectiveGridType` | 无效的透视网格类型 |

---

## PerspectiveGridPlaneType

| 值 | 描述 |
| --- | --- |
| `PerspectiveGridPlaneType.GRIDLEFTPLANETYPE` | 网格左侧平面类型 |
| `PerspectiveGridPlaneType.GRIDRIGHTPLANETYPE` | 网格右侧平面类型 |
| `PerspectiveGridPlaneType.GRIDFLOORPLANETYPE` | 网格地板平面类型 |
| `PerspectiveGridPlaneType.INVALIDGRIDPLANETYPE` | 无效的网格平面类型 |

---

## PhotoshopCompatibility

| 值 | 描述 |
| --- | --- |
| `PhotoshopCompatibility.Photoshop6` | Photoshop 6 |
| `PhotoshopCompatibility.Photoshop8` | Photoshop 8 |

---

## PointType

所选路径点的类型。

| 值 | 描述 |
| --- | --- |
| `PointType.CORNER` | 角点 |
| `PointType.SMOOTH` | 平滑点 |

---

## PolarityValues

| 值 | 描述 |
| --- | --- |
| `PolarityValues.NEGATIVE` | 负 |
| `PolarityValues.POSITIVE` | 正 |

---

## PostScriptImageCompressionType

| 值 | 描述 |
| --- | --- |
| `PostScriptImageCompressionType.IMAGECOMPRESSIONNONE` | todo |
| `PostScriptImageCompressionType.JPEG` | todo |
| `PostScriptImageCompressionType.RLE` | todo |

---

## PrintArtworkDesignation

| 值 | 描述 |
| --- | --- |
| `PrintArtworkDesignation.ALLLAYERS` | 所有图层 |
| `PrintArtworkDesignation.VISIBLELAYERS` | 可见图层 |
| `PrintArtworkDesignation.VISIBLEPRINTABLELAYERS` | 可见可打印图层 |

---

## PrintColorIntent

| 值 | 描述 |
| --- | --- |
| `PrintColorIntent.ABSOLUTECOLORIMETRIC` | todo |
| `PrintColorIntent.PERCEPTUALINTENT` | todo |
| `PrintColorIntent.RELATIVECOLORIMETRIC` | todo |
| `PrintColorIntent.SATURATIONINTENT` | todo |

---

## PrintColorProfile

| 值 | 描述 |
| --- | --- |
| `PrintColorProfile.CUSTOMPROFILE` | 自定义配置文件 |
| `PrintColorProfile.PRINTERPROFILE` | 打印机配置文件 |
| `PrintColorProfile.OLDSTYLEPROFILE` | 旧式配置文件 |
| `PrintColorProfile.SOURCEPROFILE` | 源配置文件 |

---

## PrintColorSeparationMode

| 值 | 描述 |
| --- | --- |
| `PrintColorSeparationMode.COMPOSITE` | 复合 |
| `PrintColorSeparationMode.HOSTBASEDSEPARATION` | 基于主机的分离 |
| `PrintColorSeparationMode.INRIPSEPARATION` | Inrip 分离 |

---

## PrinterColorMode

| 值 | 描述 |
| --- | --- |
| `PrinterColorMode.BLACKANDWHITEPRINTER` | 黑白打印机 |
| `PrinterColorMode.COLORPRINTER` | 彩色打印机 |
| `PrinterColorMode.GRAYSCALEPRINTER` | 灰度打印机 |

---

## PrinterPostScriptLevelEnum

| 值 | 描述 |
| --- | --- |
| `PrinterPostScriptLevelEnum.PSLEVEL1` | PS 级别 1 |
| `PrinterPostScriptLevelEnum.PSLEVEL2` | PS 级别 2 |
| `PrinterPostScriptLevelEnum.PSLEVEL3` | PS 级别 3 |

---

## PrinterTypeEnum

| 值 | 描述 |
| --- | --- |
| `PrinterTypeEnum.NONPOSTSCRIPTPRINTER` | 非 Postscript 打印机 |
| `PrinterTypeEnum.POSTSCRIPTPRINTER` | Postscript 打印机 |
| `PrinterTypeEnum.Unknown` | 未知 |

---

## PrintFontDownloadMode

| 值 | 描述 |
| --- | --- |
| `PrintFontDownloadMode.DOWNLOADNONE` | 不下载字体 |
| `PrintFontDownloadMode.DOWNLOADCOMPLETE` | 下载完整字体 |
| `PrintFontDownloadMode.DOWNLOADSUBSET` | 下载子集字体 |

---

## PrintingBounds

| 值 | 描述 |
| --- | --- |
| `PrintingBounds.ARTBOARDBOUNDS` | 画板边界 |
| `PrintingBounds.ARTWORKBOUNDS` | 作品边界 |

---

## PrintOrientation

艺术品的打印方向。

| 值 | 描述 |
| --- | --- |
| `PrintOrientation.AUTOROTATE` | 自动旋转 |
| `PrintOrientation.LANDSCAPE` | 横向 |
| `PrintOrientation.PORTRAIT` | 纵向 |
| `PrintOrientation.REVERSELANDSCAPE` | 反向横向 |
| `PrintOrientation.REVERSEPORTRAIT` | 反向纵向 |

---

## PrintPosition

| 值 | 描述 |
| --- | --- |
| `PrintPosition.TRANSLATEBOTTOM` | 平移到底部 |
| `PrintPosition.TRANSLATEBOTTOMLEFT` | 平移到左下角 |
| `PrintPosition.TRANSLATEBOTTOMRIGHT` | 平移到右下角 |
| `PrintPosition.TRANSLATECENTER` | 平移到中心 |
| `PrintPosition.TRANSLATELEFT` | 平移到左侧 |
| `PrintPosition.TRANSLATERIGHT` | 平移到右侧 |
| `PrintPosition.TRANSLATETOP` | 平移到顶部 |
| `PrintPosition.TRANSLATETOPLEFT` | 平移到左上角 |
| `PrintPosition.TRANSLATETOPRIGHT` | 平移到右上角 |

---

## PrintTiling

| 值 | 描述 |
| --- | --- |
| `PrintTiling.TILEFULLPAGES` | 完整页面 |
| `PrintTiling.TILESINGLEFULLPAGE` | 单个完整页面 |
| `PrintTiling.TILEIMAGEABLEAREAS` | 可成像区域 |

---

## RasterizationColorModel

栅格化的颜色模型。

| 值 | 描述 |
| --- | --- |
| `RasterizationColorModel.BITMAP` | 位图 |
| `RasterizationColorModel.DEFAULTCOLORMODEL` | 默认颜色模型 |
| `RasterizationColorModel.GRAYSCALE` | 灰度 |

---

## RasterLinkState

如果图像存储在外部，栅格项目的链接图像的状态。

| 值 | 描述 |
| --- | --- |
| `RasterLinkState.DATAFROMFILE` | 数据来自文件 |
| `RasterLinkState.DATAMODIFIED` | 数据已修改 |
| `RasterLinkState.NODATA` | 无数据 |

---

## RulerUnits

文档标尺的默认测量单位。

| 值 | 描述 |
| --- | --- |
| `RulerUnits.Centimeters` | 厘米 |
| `RulerUnits.Qs` | Qs |
| `RulerUnits.Inches` | 英寸 |
| `RulerUnits.Pixels` | 像素 |
| `RulerUnits.Millimeters` | 毫米 |
| `RulerUnits.Unknown` | 未知 |
| `RulerUnits.Picas` | 派卡 |
| `RulerUnits.Points` | 点 |

---

## SaveOptions

关闭文档时提供的保存选项。

| 值 | 描述 |
| --- | --- |
| `SaveOptions.DONOTSAVECHANGES` | 不保存更改 |
| `SaveOptions.SAVECHANGES` | 保存更改 |
| `SaveOptions.PROMPTTOSAVECHANGES` | 提示保存更改 |

---

## ScreenMode

视图的显示模式。

| 值 | 描述 |
| --- | --- |
| `ScreenMode.DESKTOP` | 桌面 |
| `ScreenMode.MULTIWINDOW` | 多窗口 |
| `ScreenMode.FULLSCREEN` | 全屏 |

---

## SpotColorKind

专色的自定义颜色类型。

| 值 | 描述 |
| --- | --- |
| `SpotColorKind.SpotCMYK` | CMYK |
| `SpotColorKind.SpotLAB` | LAB |
| `SpotColorKind.SpotRGB` | RGB |

---

## StrokeCap

路径描边的线帽类型。

| 值 | 描述 |
| --- | --- |
| `StrokeCap.BUTTENDCAP` | 平头 |
| `StrokeCap.ROUNDENDCAP` | 圆头 |
| `StrokeCap.PROJECTINGENDCAP` | 方头 |

---

## StrokeJoin

路径描边的连接类型。

| 值 | 描述 |
| --- | --- |
| `StrokeJoin.BEVELENDJOIN` | 斜接 |
| `StrokeJoin.ROUNDENDJOIN` | 圆接 |
| `StrokeJoin.MITERENDJOIN` | 尖接 |

---

## StyleRunAlignmentType

| 值 | 描述 |
| --- | --- |
| `StyleRunAlignmentType.bottom` | 底部 |
| `StyleRunAlignmentType.icfTop` | ICF 顶部 |
| `StyleRunAlignmentType.center` | 中心 |
| `StyleRunAlignmentType.ROMANBASELINE` | 罗马基线 |
| `StyleRunAlignmentType.icfBottom` | ICF 底部 |
| `StyleRunAlignmentType.top` | 顶部 |

---

## SVGCSSPropertyLocation

导出 SVG 文件时，文档的 CSS 属性应如何包含。

| 值 | 描述 |
| --- | --- |
| `SVGCSSPropertyLocation.ENTITIES` | 实体 |
| `SVGCSSPropertyLocation.STYLEATTRIBUTES` | 样式属性 |
| `SVGCSSPropertyLocation.PRESENTATIONATTRIBUTES` | 呈现属性 |
| `SVGCSSPropertyLocation.STYLEELEMENTS` | 样式元素 |

---

## SVGDocumentEncoding

导出 SVG 文件时，文档中的文本应如何编码。

| 值 | 描述 |
| --- | --- |
| `SVGDocumentEncoding.ASCII` | ASCII |
| `SVGDocumentEncoding.UTF8` | UTF8 |
| `SVGDocumentEncoding.UTF16` | UTF16 |

---

## SVGDTDVersion

导出文件的 SVG 版本兼容性。

| 值 | 描述 |
| --- | --- |
| `SVGDTDVersion.SVG1_0` | SVG1_0 |
| `SVGDTDVersion.SVG1_1` | SVG1_1 |
| `SVGDTDVersion.SVGBASIC1_1` | SVGBASIC1_1 |
| `SVGDTDVersion.SVGTINY1_1` | SVGTINY1_1 |
| `SVGDTDVersion.SVGTINY1_1PLUS` | SVGTINY1_1PLUS |
| `SVGDTDVersion.SVGTINY1_2` | SVGTINY1_2 |

---

## SVGFontSubsetting

导出 SVG 文件时应包含哪些字体字形。

| 值 | 描述 |
| --- | --- |
| `SVGFontSubsetting.ALLGLYPHS` | 所有字形 |
| `SVGFontSubsetting.GLYPHSUSEDPLUSENGLISH` | 使用的字形加英文 |
| `SVGFontSubsetting.COMMONENGLISH` | 常用英文 |
| `SVGFontSubsetting.GLYPHSUSEDPLUSROMAN` | 使用的字形加罗马文 |
| `SVGFontSubsetting.COMMONROMAN` | 常用罗马文 |
| `SVGFontSubsetting.GLYPHSUSED` | 使用的字形 |
| `SVGFontSubsetting.None` | 无 |

---

## SVGFontType

导出 SVG 文件中包含的字体类型。

| 值 | 描述 |
| --- | --- |
| `SVGFontType.CEFFONT` | CEF 字体 |
| `SVGFontType.SVGFONT` | SVG 字体 |
| `SVGFontType.OUTLINEFONT` | 轮廓字体 |

---

## SymbolRegistrationPoint

符号的注册点。

| Value | 描述 |
| --- | --- |
| `SymbolRegistrationPoint.SYMBOLBOTTOMLEFTPOINT` | 左下点 |
| `SymbolRegistrationPoint.SYMBOLBOTTOMMIDDLEPOINT` | 底部中点 |
| `SymbolRegistrationPoint.SYMBOLBOTTOMRIGHTPOINT` | 右下点 |
| `SymbolRegistrationPoint.SYMBOLCENTERPOINT` | 中心点 |
| `SymbolRegistrationPoint.SYMBOLMIDDLELEFTPOINT` | 中间左点 |
| `SymbolRegistrationPoint.SYMBOLMIDDLERIGHTPOINT` | 中间右点 |
| `SymbolRegistrationPoint.SYMBOLTOPLEFTPOINT` | 左上点 |
| `SymbolRegistrationPoint.SYMBOLTOPMIDDLEPOINT` | 顶部中点 |
| `SymbolRegistrationPoint.SYMBOLTOPRIGHTPOINT` | 右上点 |

---

## TabStopAlignment

制表符的对齐方式。

| Value | 描述 |
| --- | --- |
| `TabStopAlignment.Center` | 居中 |
| `TabStopAlignment.Decimal` | 小数点 |
| `TabStopAlignment.Left` | 左对齐 |
| `TabStopAlignment.Right` | 右对齐 |

---

## TextAntialias

文本艺术项中文本的抗锯齿类型。

| Value | 描述 |
| --- | --- |
| `TextAntialias.CRISP` | 清晰 |
| `TextAntialias.NONE` | 无 |
| `TextAntialias.SHARP` | 锐利 |
| `TextAntialias.STRONG` | 强 |

---

## TextOrientation

文本艺术项中文本的方向。

| Value | 描述 |
| --- | --- |
| `TextOrientation.HORIZONTAL` | 水平 |
| `TextOrientation.VERTICAL` | 垂直 |

---

## TextPreservePolicy

FXG 文件格式使用的文本保留策略。

| Value | 描述 |
| --- | --- |
| `TextPreservePolicy.AUTOMATICALLYCONVERTTEXT` | 自动转换文本 |
| `TextPreservePolicy.OUTLINETEXT` | 轮廓文本 |
| `TextPreservePolicy.KEEPTEXTEDITABLE` | 保持文本可编辑 |
| `TextPreservePolicy.RASTERIZETEXT` | 栅格化文本 |

---

## TextType

此对象显示的文本艺术类型。

| Value | 描述 |
| --- | --- |
| `TextType.AREATEXT` | 区域文本 |
| `TextType.POINTTEXT` | 点文本 |
| `TextType.PATHTEXT` | 路径文本 |

---

## TIFFByteOrder

导出 TIFF 文件时使用的字节顺序。

| Value | 描述 |
| --- | --- |
| `TIFFByteOrder.IBMPC` | IBM PC |
| `TIFFByteOrder.MACINTOSH` | Macintosh |

---

## TracingModeType

| Value | 描述 |
| --- | --- |
| `TracingModeType.TRACINGMODEBLACKANDWHITE` | 黑白 |
| `TracingModeType.TRACINGMODECOLOR` | 彩色 |
| `TracingModeType.TRACINGMODEGRAY` | 灰度 |

---

## Transformation

用作锚点的点，对象围绕该点旋转、调整大小或变换。

| Value | 描述 |
| --- | --- |
| `Transformation.BOTTOM` | 底部 |
| `Transformation.BOTTOMLEFT` | 左下 |
| `Transformation.BOTTOMRIGHT` | 右下 |
| `Transformation.CENTER` | 中心 |
| `Transformation.DOCUMENTORIGIN` | 文档原点 |
| `Transformation.LEFT` | 左 |
| `Transformation.RIGHT` | 右 |
| `Transformation.TOP` | 顶部 |
| `Transformation.TOPLEFT` | 左上 |
| `Transformation.TOPRIGHT` | 右上 |

---

## TrappingType

| Value | 描述 |
| --- | --- |
| `TrappingType.IGNOREOPAQUE` | 待办 |
| `TrappingType.OPAQUE` | 待办 |
| `TrappingType.NORMALTRAPPING` | 待办 |
| `TrappingType.TRANSPARENT` | 待办 |

---

## UserInteractionLevel

用户界面设置

| Value | 描述 |
| --- | --- |
| `UserInteractionLevel.DISPLAYALERTS` | 显示警告 |
| `UserInteractionLevel.DONTDISPLAYALERTS` | 不显示警告 |

---

## VariableKind

文档中包含的变量类型。

| Value | 描述 |
| --- | --- |
| `VariableKind.GRAPH` | 图表 |
| `VariableKind.IMAGE` | 图像 |
| `VariableKind.VISIBILITY` | 可见性 |
| `VariableKind.TEXTUAL` | 文本 |
| `VariableKind.Unknown` | 未知 |

---

## ViewRasterType

跟踪的光栅可视化模式。

| Value | 描述 |
| --- | --- |
| `ViewRasterType.TRACINGVIEWRASTERADJUSTEDIMAGE` | 调整后的图像 |
| `ViewRasterType.TRACINGVIEWRASTERNOIMAGE` | 无图像 |
| `ViewRasterType.TRACINGVIEWRASTERORIGINALIMAGE` | 原始图像 |
| `ViewRasterType.TRACINGVIEWRASTERTRANSPARENTIMAGE` | 透明图像 |

---

## ViewVectorType

跟踪的矢量可视化模式。

| Value | 描述 |
| --- | --- |
| `ViewVectorType.TRACINGVIEWVECTORNOTRACINGRESULT` | 无跟踪结果 |
| `ViewVectorType.TRACINGVIEWVECTOROUTLINES` | 轮廓 |
| `ViewVectorType.TRACINGVIEWVECTOROUTLINESWITHTRACING` | 带跟踪的轮廓 |
| `ViewVectorType.TRACINGVIEWVECTORTRACINGRESULT` | 跟踪结果 |

---

## WariChuJustificationType

| Value | 描述 |
| --- | --- |
| `WariChuJustificationType.Center` | 居中 |
| `WariChuJustificationType.Left` | 左对齐 |
| `WariChuJustificationType.Right` | 右对齐 |
| `WariChuJustificationType.WARICHUAUTOJUSTIFY` | 割注自动对齐 |
| `WariChuJustificationType.WARICHUFULLJUSTIFY` | 割注完全对齐 |
| `WariChuJustificationType.WARICHUFULLJUSTIFYLASTLINECENTER` | 割注完全对齐最后一行居中 |
| `WariChuJustificationType.WARICHUFULLJUSTIFYLASTLINELEFT` | 割注完全对齐最后一行左对齐 |
| `WariChuJustificationType.WARICHUFULLJUSTIFYLASTLINERIGHT` | 割注完全对齐最后一行右对齐 |

---

## ZOrderMethod

用于排列艺术项在其父组或图层堆叠顺序中的位置的方法，通过 zOrder 方法指定。

| Value | 描述 |
| --- | --- |
| `ZOrderMethod.BRINGFORWARD` | 前移 |
| `ZOrderMethod.SENDBACKWARD` | 后移 |
| `ZOrderMethod.BRINGTOFRONT` | 置顶 |
| `ZOrderMethod.SENDTOBACK` | 置底 |
