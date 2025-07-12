---
title: 更新日志
---
# Changelog

表达式新增了什么?

---

## [After Effects 25.0](https://helpx.adobe.com/after-effects/using/whats-new/2025.html) (October 2024)

新增了许多用于字符和段落的文本样式属性和方法，以及通过表达式控制每个字符样式的能力。

* .sourceText 的新属性：
 * 新增: [SourceText.isPointText](../../text/sourcetext#sourcetextispointtext)
 * 新增: [SourceText.isParagraphText](../../text/sourcetext#sourcetextisparagraphtext)
 * 新增: [SourceText.isHorizontalText](../../text/sourcetext#sourcetextishorizontaltext)
 * 新增: [SourceText.isVerticalText](../../text/sourcetext#sourcetextisverticaltext)
* 新的每个字符样式属性和方法：
 * 新增: [TextStyle.replaceText()](../../text/style#textstylereplacetext)
 * 新增: [TextStyle.baselineDirection](../../text/style#textstylebaselinedirection)
 * 新增: [TextStyle.setBaselineDirection()](../../text/style#textstylesetbaselinedirection)
 * 新增: [TextStyle.baselineOption](../../text/style#textstylebaselineoption)
 * 新增: [TextStyle.setBaselineOption()](../../text/style#textstylesetbaselineoption)
 * 新增: [TextStyle.digitSet](../../text/style#textstyledigitset)
 * 新增: [TextStyle.setDigitSet()](../../text/style#textstylesetdigitset)
 * 新增: [TextStyle.isLigature](../../text/style#textstyleisligature)
 * 新增: [TextStyle.setLigature()](../../text/style#textstylesetligature)
 * 新增: [TextStyle.tsume](../../text/style#textstyletsume)
 * 新增: [TextStyle.setTsume()](../../text/style#textstylesettsume)
 * 新增: [TextStyle.verticalScaling](../../text/style#textstyleverticalscaling)
 * 新增: [TextStyle.setVerticalScaling()](../../text/style#textstylesetverticalscaling)
 * 新增: [TextStyle.horizontalScaling](../../text/style#textstylehorizontalscaling)
 * 新增: [TextStyle.setHorizontalScaling()](../../text/style#textstylesethorizontalscaling)
 * 新增: [TextStyle.lineJoin](../../text/style#textstylelinejoin)
 * 新增: [TextStyle.setLineJoin()](../../text/style#textstylesetlinejoin)
* 新的段落样式属性和方法：
 * 新增: [TextStyle.direction](../../text/style#textstyledirection)
 * 新增: [TextStyle.setDirection()](../../text/style#textstylesetdirection)
 * 新增: [TextStyle.isEveryLineComposer](../../text/style#textstyleiseverylinecomposer)
 * 新增: [TextStyle.setEveryLineComposer()](../../text/style#textstyleseteverylinecomposer)
 * 新增: [TextStyle.firstLineIndent](../../text/style#textstylefirstlineindent)
 * 新增: [TextStyle.setFirstLineIndent()](../../text/style#textstylesetfirstlineindent)
 * 新增: [TextStyle.isHangingRoman](../../text/style#textstyleishangingroman)
 * 新增: [TextStyle.setHangingRoman()](../../text/style#textstylesethangingroman)
 * 新增: [TextStyle.justification](../../text/style#textstylejustification)
 * 新增: [TextStyle.setJustification()](../../text/style#textstylesetjustification)
 * 新增: [TextStyle.leadingType](../../text/style#textstyleleadingtype)
 * 新增: [TextStyle.setLeadingType()](../../text/style#textstylesetleadingtype)
 * 新增: [TextStyle.leftMargin](../../text/style#textstyleleftmargin)
 * 新增: [TextStyle.setLeftMargin()](../../text/style#textstylesetleftmargin)
 * 新增: [TextStyle.rightMargin](../../text/style#textstylerightmargin)
 * 新增: [TextStyle.setRightMargin()](../../text/style#textstylesetrightmargin)
 * 新增: [TextStyle.spaceAfter](../../text/style#textstylespaceafter)
 * 新增: [TextStyle.setSpaceAfter()](../../text/style#textstylesetspaceafter)
 * 新增: [TextStyle.spaceBefore](../../text/style#textstylespacebefore)
 * 新增: [TextStyle.setSpaceBefore()](../../text/style#textstylesetspacebefore)
* 现有样式方法更新为支持每个字符样式：
 * 更改: [TextStyle.setFontSize()](../../text/style#textstylesetfontsize)
 * 更改: [TextStyle.setFont()](../../text/style#textstylesetfont)
 * 更改: [TextStyle.setFauxBold()](../../text/style#textstylesetfauxbold)
 * 更改: [TextStyle.setFauxItalic()](../../text/style#textstylesetfauxitalic)
 * 更改: [TextStyle.setAllCaps()](../../text/style#textstylesetallcaps)
 * 更改: [TextStyle.setSmallCaps()](../../text/style#textstylesetsmallcaps)
 * 更改: [TextStyle.setTracking()](../../text/style#textstylesettracking)
 * 更改: [TextStyle.setLeading()](../../text/style#textstylesetleading)
 * 更改: [TextStyle.setAutoLeading()](../../text/style#textstylesetautoleading)
 * 更改: [TextStyle.setBaselineShift()](../../text/style#textstylesetbaselineshift)
 * 更改: [TextStyle.setApplyFill()](../../text/style#textstylesetapplyfill)
 * 更改: [TextStyle.setFillColor()](../../text/style#textstylesetfillcolor)
 * 更改: [TextStyle.setApplyStroke()](../../text/style#textstylesetapplystroke)
 * 更改: [TextStyle.setStrokeColor()](../../text/style#textstylesetstrokecolor)
 * 更改: [TextStyle.setStrokeWidth()](../../text/style#textstylesetstrokewidth)

---

## [After Effects 17.7](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheFebruary2021releaseversion177) (2021年2月)

* 修复: 在图形编辑器中进行的表达式编辑未一致应用的问题。

---

## [After Effects 17.6](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheJanuary2021releaseversion176) (2021年1月)

* 修复: 使用表达式或属性拾取器时，表达式可能被替换而不是追加的问题。

---

## [After Effects 17.1.2](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheJuly2020releaseversion1712) (2020年7月)

* 修复: 在 JavaScript 表达式引擎中无法通过名称引用标记的问题。

---

## [After Effects 17.1](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheMay2020releaseversion171) (2020年5月19日)

* 修复: 表达式编辑器自动补全 'timeToFrames' 函数的问题。

---

## [After Effects 17.0.5](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheMarch2020releaseversion1705) (2020年3月)

* 修复: 使用“将焦点链接到图层”命令生成的表达式在 JavaScript 表达式引擎中无法工作的问题。

---

## [After Effects 17.0.2](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheJanuary2020releaseversion1702) (2020年1月)

* 修复: JavaScript 表达式中错误相关的行号显示不正确的问题。

---

## [After Effects 17.0](https://helpx.adobe.com/after-effects/using/whats-new/2020.html) (2020年1月24日)

* 实现了下拉菜单表达式控制
* 表达式编辑器改进：
 * 现在可以使用新的滚动功能，防止在输入回车字符时调整框大小时滚动不正确。
 * 如果变量以数字开头，自动补全列表中的数字将不再匹配。更智能的自动补全功能防止覆盖闭合括号和引号。
 * 现在可以为高DPI显示器缩放字体大小。
 * 图形编辑器现在为所有打开的图形编辑器提交偏好设置更改。
 * 如果启用语法高亮，UI中的折叠图标按钮现在会尊重默认和背景颜色，或行号颜色和背景颜色。
* 表达式性能改进：
 * After Effects 现在尝试检测在整个合成中不变的表达式，并仅计算一次。加载您喜欢的充满表达式的合成，体验性能提升。
 * 任何使用 [posterizeTime()](../../general/global#posterizetime) 的表达式现在仅对整个合成计算一次，而不是每一帧。
* 新增: 扩展表达式对文本属性的访问。
 * 新增: [Text.Font...](../../text/text#textfont)
 * 新增: [Source Text](../text/sourcetext)
 * 新增: [Text Style](../text/style)

---

## [After Effects 16.1.3](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheearlierversionsofAfterEffects) (2019年9月)

* 修复: 表达式编辑器中新行上的大括号缩进可能不正确的问题。

---

## [After Effects 16.1.2](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheearlierversionsofAfterEffects) (2019年6月)

* 修复: 当关闭包含错误表达式的项目时，After Effects 崩溃的问题。
* 修复: 如果有多个错误文本行要显示，错误信息可能会在错误横幅中被截断。
* 修复: 使用旧版 ExtendScript 表达式引擎时，this_Layer 属性停止工作的问题。
* 修复: 将项目级表达式引擎从 JavaScript 切换到旧版 ExtendScript 时崩溃的问题。
* 修复: 包含对 Date.toLocaleString() 调用的表达式导致崩溃的问题。
* 修复: 在禁用自动补全的情况下编辑图形编辑器表达式字段中的表达式时崩溃的问题。

---

## [After Effects 16.1 (CC 19)](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheearlierversionsofAfterEffects) (2019年4月2日)

* 实现了新的表达式编辑器
* 修复: JavaScript 表达式引擎生成的随机数结果与旧版 ExtendScript 引擎不同的问题。
* 修复: 当表达式引用字符串或源文本属性中的图层名称时，未返回图层名称，而是返回 [Object] 的问题。
* 修复: 如果 ScriptUI 面板读取属性的表达式后值，[sampleImage()](../../layer/general#layersampleimage) 表达式方法返回错误值的问题。
* 修复: 通过表达式语言菜单应用 [createPath()](../../objects/path-property#pathpropertycreatepath) 表达式时，自动填充的 (is_Closed) 参数为已弃用的蛇形命名法而不是驼峰命名法 isClosed 的问题。
* 修复: 重命名被表达式引用的效果时，当这些属性与效果名称相同时，表达式错误地更新对该效果属性的引用的问题。
* 修复: “将焦点距离链接到图层”、“将焦点距离链接到兴趣点”、“创建立体3D装置”和“创建轨道空对象”命令生成的表达式与 JavaScript 表达式引擎不兼容的问题。
* 修复: 特定的复杂、多合成表达式导致表达式错误警告横幅和图标快速闪烁的问题。请注意，为了解决此问题，这些表达式的表达式评估速度会有小幅下降。

---

## [After Effects 16.0 (CC 19)](https://helpx.adobe.com/after-effects/using/whats-new/2019.html) (2018年10月15日)

* 实现了新的 JavaScript 引擎
* 新增: [hexToRgb](../../general/color-conversion#hextorgb)
* 新增: [marker protectedRegion](../../objects/markerkey#markerkeyprotectedregion) 属性

---

## [After Effects 15.1.2](https://helpx.adobe.com/after-effects/kb/bug-fixes-in-after-effects-cc.html) (2018年7月16日)

* 修复: 如果项目中包含多个同名的主属性，引用这些主属性的表达式评估不正确的问题。
* 修复: 属性链接拾取器错误地为其他选定的属性写入自引用表达式的问题。

---

## [After Effects 15.1](https://helpx.adobe.com/after-effects/using/whats-new/2018.html#AfterEffectsCCApril2018version151release) (2018年4月3日)

* 新增: 属性链接拾取器
* 新增: 支持自定义表达式函数库
* 新增: 表达式访问 [Project](../objects/project)
 * 新增: [Project.fullPath](../../objects/project#projectfullpath)
 * 新增: [Project.bitsPerChannel](../../objects/project#projectbitsperchannel)
 * 新增: [Project.linearBlending](../../objects/project#projectlinearblending)

---

## [After Effects 15.0 (CC)](https://community.adobe.com/t5/after-effects/expression-and-scripting-improvements-in-after-effects-october-2017-pdf/td-p/4787866) (2017年10月18日)

* 新增: 表达式访问 JSON 文件中的数据
 * 新增: [footage sourceText](../../objects/footage#footagesourcetext) 属性
 * 新增: [footage sourceData](../../objects/footage#footagesourcedata) 属性
 * 新增: [footage dataValue](../../objects/footage#footagedatavalue) 方法
 * 新增: [footage dataKeyCount](../../objects/footage#footagedatakeycount) 方法
 * 新增: [footage dataKeyTimes](../../objects/footage#footagedatakeytimes) 方法
 * 新增: [footage dataKeyValues](../../objects/footage#footagedatakeyvalues) 方法
* 新增: 表达式访问蒙版、贝塞尔形状和画笔描边的路径点
 * 新增: [path points](../../objects/path-property#pathpropertypoints) 方法
 * 新增: [path inTangents](../../objects/path-property#pathpropertyintangents) 方法
 * 新增: [path outTangents](../../objects/path-property#pathpropertyouttangents) 方法
 * 新增: [path isClosed](../../objects/path-property#pathpropertyisclosed) 方法
 * 新增: [path pointOnPath](../../objects/path-property#pathpropertypointonpath) 方法
 * 新增: [path tangentOnPath](../../objects/path-property#pathpropertytangentonpath) 方法
 * 新增: [path normalOnPath](../../objects/path-property#pathpropertynormalonpath) 方法
 * 新增: [path createPath](../../objects/path-property#pathpropertycreatepath) 方法

---

## [After Effects 13.6 (CC 2015)](https://helpx.adobe.com/after-effects/kb/ae-13-6.html) (2015年11月30日)

* 改进了时间重映射图层上的表达式性能。这也减少了带有表达式的时间重映射图层上音频的渲染时间。
* 修复: 更改文本层的源文本不再导致引用文本层名称的表达式失败。
* 修复: 在处理时间重映射表达式时显示图形编辑器不再导致 After Effects 崩溃。

---

## [After Effects 13.5 (CC 2015)](https://helpx.adobe.com/after-effects/kb/what-s-new-and-changed-in-after-effects-cc-2015--13-5-.html) (2015年6月15日)

* 更高效的表达式评估
* 新增: 表达式警告横幅

---

## [After Effects 13.2 (CC 2014.2)](https://helpx.adobe.com/ca/after-effects/using/whats-new-2014.html) (2014年12月16日)

* 新增: [sourceRectAtTime()](../../layer/sub-objects#layersourcerectattime) 方法
* 修复: 表达式中的 [sampleImage()](../../layer/general#layersampleimage) 不再禁用多处理

---

## [After Effects 12.1 (CC)](https://helpx.adobe.com/after-effects/using/whats-new-12-1.html/) (2013年9月8日)

* 新增相机图层的虹膜和高光属性到表达式语言菜单
 * 新增: [Camera.irisShape](../../objects/camera#camerairisshape)
 * 新增: [Camera.irisRotation](../../objects/camera#camerairisrotation)
 * 新增: [Camera.irisRoundness](../../objects/camera#camerairisroundness)
 * 新增: [Camera.irisAspectRatio](../../objects/camera#camerairisaspectratio)
 * 新增: [Camera.irisDiffractionFringe](../../objects/camera#camerairisdiffractionfringe)
 * 新增: [Camera.highlightGain](../../objects/camera#camerahighlightgain)
 * 新增: [Camera.highlightThreshold](../../objects/camera#camerahighlightthreshold)
 * 新增: [Camera.highlightSaturation](../../objects/camera#camerahighlightsaturation)

---

## [After Effects 10.5 (CS5.5)](https://helpx.adobe.com/ro/after-effects/user-guide.html/ro/after-effects/using/expression-language-reference.ug.html/) (2011年4月11日)

* 新增: [Footage.ntscDropFrame](../../objects/footage#footagentscdropframe)
* 新增: ntscDropFrame 参数到 [timeToCurrentFormat()](../../general/time-conversion#timetocurrentformat)
* 新增: [Layer.sourceTime()](../../layer/sub-objects#layersourcetime)

---

## [After Effects 5.5](https://en.wikipedia.org/wiki/Adobe_After_Effects#History/) (2002年1月7日)

* 新增: 通过表达式实现循环
* 新增: 表达式控制器

---

## [After Effects 5.0](https://en.wikipedia.org/wiki/Adobe_After_Effects#History/) (2001年4月)

* 首次引入表达式
