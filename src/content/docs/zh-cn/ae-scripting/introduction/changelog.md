---
title: 更新日志
---

# 更新日志

脚本功能的新增与变更内容。

---

## After Effects 25

### [After Effects 25.2 Beta build 98](https://community.adobe.com/t5/after-effects-beta-discussions/animated-environmental-lights-available-now-in-after-effects-beta/td-p/15130220) (2025年2月)

- 新增脚本方法和属性：
  - 更新：[LightLayer.lightSource](../layer/lightlayer.md#lightlayerlightsource)

### [After Effects 25.0 Beta build 26](https://community.adobe.com/t5/after-effects-beta-discussions/new-in-ae-25-0-build-25-scripting-hooks-for-font-fallback-management/m-p/14809794) (2024年8月)

- 新增脚本方法和属性：
  - 新增：[CharacterRange.pasteFrom()](../text/characterrange.md#characterrangepastefrom)
  - 新增：[FontObject.hasGlyphsFor()](../text/fontobject.md#fontobjecthasglyphsfor)
  - 新增：[FontObject.otherFontsWithSameDict()](../text/fontobject.md#fontobjectotherfontswithsamedict)
  - 新增：[FontsObject.getCTScriptForString()](../text/fontsobject.md#fontsobjectgetctscriptforstring)
  - 新增：[FontsObject.getDefaultFontForCTScript()](../text/fontsobject.md#fontsobjectgetdefaultfontforctscript)
  - 新增：[FontsObject.setDefaultFontForCTScript()](../text/fontsobject.md#fontsobjectsetdefaultfontforctscript)

---

## After Effects 24

### [After Effects 24.6](https://helpx.adobe.com/after-effects/using/whats-new/2024-6.html) (2024年8月)

- 新增脚本方法和属性：
  - 新增：[FontsObject.favoriteFontFamilyList](../text/fontsobject.md#fontsobjectfavoritefontfamilylist)
  - 新增：[FontsObject.fontsDuplicateByPostScriptName](../text/fontsobject.md#fontsobjectfontsduplicatebypostscriptname)
  - 新增：[FontsObject.freezeSyncSubstitutedFonts](../text/fontsobject.md#fontsobjectfreezesyncsubstitutedfonts)
  - 新增：[FontsObject.mruFontFamilyList](../text/fontsobject.md#fontsobjectmrufontfamilylist)
  - 新增：[FontsObject.substitutedFontReplacementMatchPolicy](../text/fontsobject.md#fontsobjectsubstitutedfontreplacementmatchpolicy)
  - 新增：[FontsObject.pollForAndPushNonSystemFontFoldersChanges()](../text/fontsobject.md#fontsobjectpollforandpushnonsystemfontfolderschanges)
  - 新增：[TextDocument.boxAutoFitPolicy](../text/textdocument.md#textdocumentboxautofitpolicy)
  - 新增：[TextDocument.boxFirstBaselineAlignment](../text/textdocument.md#textdocumentboxfirstbaselinealignment)
  - 新增：[TextDocument.boxFirstBaselineAlignmentMinimum](../text/textdocument.md#textdocumentboxfirstbaselinealignmentminimum)
  - 新增：[TextDocument.boxInsetSpacing](../text/textdocument.md#textdocumentboxinsetspacing)
  - 新增：[TextDocument.boxOverflow](../text/textdocument.md#textdocumentboxoverflow)
  - 新增：[TextDocument.boxVerticalAlignment](../text/textdocument.md#textdocumentboxverticalalignment)

### [After Effects 24.5](https://helpx.adobe.com/after-effects/using/whats-new/2024-5.html) (2024年5月)

- 新增脚本方法和属性：
  - 新增：[Project.replaceFont()](../general/project.md#projectreplacefont)
  - 新增：[Project.usedFonts](../general/project.md#projectusedfonts)

### [After Effects 24.4 Beta build 25](https://community.adobe.com/t5/after-effects-beta-discussions/scripting-new-api-for-3d-model-layers/td-p/14580044) (2024年3月)

- 新增：[ThreeDModelLayer 对象](../../layer/threedmodellayer)

### [After Effects 24.3](https://helpx.adobe.com/after-effects/using/whats-new/2024-3.html) (2024年3月)

- 新增脚本方法和属性：
  - 新增：[CharacterRange 对象](../../text/characterrange)
  - 新增：[ParagraphRange 对象](../../text/paragraphrange)
  - 新增：[ComposedLineRange 对象](../../text/composedlinerange)
  - 新增：[TextDocument.characterRange()](../text/textdocument.md#textdocumentcharacterrange)
  - 新增：[TextDocument.composedLineCharacterIndexesAt()](../text/textdocument.md#textdocumentcomposedlinecharacterindexesat)
  - 新增：[TextDocument.composedLineCount](../text/textdocument.md#textdocumentcomposedlinecount)
  - 新增：[TextDocument.composedLineRange()](../text/textdocument.md#textdocumentcomposedlinerange)
  - 新增：[TextDocument.paragraphCharacterIndexesAt()](../text/textdocument.md#textdocumentparagraphcharacterindexesat)
  - 新增：[TextDocument.paragraphCount](../text/textdocument.md#textdocumentparagraphcount)
  - 新增：[TextDocument.paragraphRange()](../text/textdocument.md#textdocumentparagraphrange)
  - 变更：[app.purge()](../general/application.md#apppurge) - PurgeTarget.ALL_CACHES 现在包括磁盘缓存

### [After Effects 24.2](https://helpx.adobe.com/after-effects/using/whats-new/2024-2.html) (2024年2月)

- 新增或变更的脚本方法和属性：
  - 新增：[LayerCollection.addVerticalText()](../layer/layercollection.md#layercollectionaddverticaltext)
  - 新增：[LayerCollection.addVerticalBoxText()](../layer/layercollection.md#layercollectionaddverticalboxtext)
  - 新增：[TextDocument.lineOrientation](../text/textdocument.md#textdocumentlineorientation)
  - 新增：[FontsObject.fontServerRevision](../text/fontsobject.md#fontsobjectfontserverrevision)
  - 新增：[FontsObject.getFontByID()](../text/fontsobject.md#fontsobjectgetfontbyid)
  - 新增：[FontObject.fontID](../text/fontobject.md#fontobjectfontid)

### [After Effects 24.0](https://helpx.adobe.com/after-effects/using/whats-new/2024.html) (2023年10月)

- 新增脚本方法和属性：
  - 新增：[getEnumAsString()](../general/globals.md#getenumasstring)
  - 新增：[app.fonts](../general/application.md#appfonts)
  - 新增：[Fonts 对象](../../text/fontsobject)
  - 新增：[FontsObject.allFonts](../text/fontsobject.md#fontsobjectallfonts)
  - 新增：[FontsObject.fontsWithDefaultDesignAxes](../text/fontsobject.md#fontsobjectfontswithdefaultdesignaxes)
  - 新增：[FontsObject.getFontsByFamilyNameAndStyleName()](../text/fontsobject.md#fontsobjectgetfontsbyfamilynameandstylename)
  - 新增：[FontsObject.getFontsByPostScriptName()](../text/fontsobject.md#fontsobjectgetfontsbypostscriptname)
  - 新增：[FontsObject.missingOrSubstitutedFonts](../text/fontsobject.md#fontsobjectmissingorsubstitutedfonts)
  - 新增：[Font 对象](../../text/fontobject)
  - 新增：[FontObject.designAxesData](../text/fontobject.md#fontobjectdesignaxesdata)
  - 新增：[FontObject.designVector](../text/fontobject.md#fontobjectdesignvector)
  - 新增：[FontObject.familyPrefix](../text/fontobject.md#fontobjectfamilyprefix)
  - 新增：[FontObject.hasDesignAxes](../text/fontobject.md#fontobjecthasdesignaxes)
  - 新增：[FontObject.hasSameDict()](../text/fontobject.md#fontobjecthassamedict)
  - 新增：[FontObject.postScriptNameForDesignVector()](../text/fontobject.md#fontobjectpostscriptnamefordesignvector)
  - 新增：[FontObject.familyName](../text/fontobject.md#fontobjectfamilyname)
  - 新增：[FontObject.fullName](../text/fontobject.md#fontobjectfullname)
  - 新增：[FontObject.isFromAdobeFonts](../text/fontobject.md#fontobjectisfromadobefonts)
  - 新增：[FontObject.isSubstitute](../text/fontobject.md#fontobjectissubstitute)
  - 新增：[FontObject.location](../text/fontobject.md#fontobjectlocation)
  - 新增：[FontObject.nativeFamilyName](../text/fontobject.md#fontobjectnativefamilyname)
  - 新增：[FontObject.nativeFullName](../text/fontobject.md#fontobjectnativefullname)
  - 新增：[FontObject.nativeStyleName](../text/fontobject.md#fontobjectnativestylename)
  - 新增：[FontObject.postScriptName](../text/fontobject.md#fontobjectpostscriptname)
  - 新增：[FontObject.styleName](../text/fontobject.md#fontobjectstylename)
  - 新增：[FontObject.technology](../text/fontobject.md#fontobjecttechnology)
  - 新增：[FontObject.type](../text/fontobject.md#fontobjecttype)
  - 新增：[FontObject.version](../text/fontobject.md#fontobjectversion)
  - 新增：[FontObject.writingScripts](../text/fontobject.md#fontobjectwritingscripts)
  - 新增：[TextDocument.autoHyphenate](../text/textdocument.md#textdocumentautohyphenate)
  - 新增：[TextDocument.autoKernType](../text/textdocument.md#textdocumentautokerntype)
  - 新增：[TextDocument.baselineDirection](../text/textdocument.md#textdocumentbaselinedirection)
  - 新增：[TextDocument.composerEngine](../text/textdocument.md#textdocumentcomposerengine)
  - 新增：[TextDocument.digitSet](../text/textdocument.md#textdocumentdigitset)
  - 新增：[TextDocument.direction](../text/textdocument.md#textdocumentdirection)
  - 新增：[TextDocument.endIndent](../text/textdocument.md#textdocumentendindent)
  - 新增：[TextDocument.everyLineComposer](../text/textdocument.md#textdocumenteverylinecomposer)
  - 新增：[TextDocument.firstLineIndent](../text/textdocument.md#textdocumentfirstlineindent)
  - 新增：[TextDocument.fontBaselineOption](../text/textdocument.md#textdocumentfontbaselineoption)
  - 新增：[TextDocument.fontCapsOption](../text/textdocument.md#textdocumentfontcapsoption)
  - 新增：[TextDocument.fontObject](../text/textdocument.md#textdocumentfontobject)
  - 新增：[TextDocument.hangingRoman](../text/textdocument.md#textdocumenthangingroman)
  - 新增：[TextDocument.kerning](../text/textdocument.md#textdocumentkerning)
  - 新增：[TextDocument.leadingType](../text/textdocument.md#textdocumentleadingtype)
  - 新增：[TextDocument.ligature](../text/textdocument.md#textdocumentligature)
  - 新增：[TextDocument.lineJoinType](../text/textdocument.md#textdocumentlinejointype)
  - 新增：[TextDocument.noBreak](../text/textdocument.md#textdocumentnobreak)
  - 新增：[TextDocument.spaceAfter](../text/textdocument.md#textdocumentspaceafter)
  - 新增：[TextDocument.spaceBefore](../text/textdocument.md#textdocumentspacebefore)
  - 新增：[TextDocument.startIndent](../text/textdocument.md#textdocumentstartindent)
- 脚本属性更新：
  - 更新：[TextDocument.fauxBold](../text/textdocument.md#textdocumentfauxbold)
  - 更新：[TextDocument.fauxItalic](../text/textdocument.md#textdocumentfauxitalic)
  - 更新：[TextDocument.justification](../text/textdocument.md#textdocumentjustification)

---

## After Effects 23

### [After Effects 23.0](https://helpx.adobe.com/after-effects/using/whats-new/2023.html) (2022年10月)

- 新增脚本方法和属性：
  - 新增：[AVLayer.setTrackMatte()](../layer/avlayer.md#avlayersettrackmatte)
  - 新增：[AVLayer.removeTrackMatte()](../layer/avlayer.md#avlayerremovetrackmatte)
  - 新增：[AVLayer.trackMatteLayer](../layer/avlayer.md#avlayertrackmattelayer)
- 脚本属性更新：
  - 更新：[AVLayer.trackMatteType](../layer/avlayer.md#avlayertrackmattetype)
  - 更新：[AVLayer.isTrackMatte](../layer/avlayer.md#avlayeristrackmatte)
  - 更新：[AVLayer.hasTrackMatte](../layer/avlayer.md#avlayerhastrackmatte)

---

## After Effects 22

### [After Effects 22.6](https://helpx.adobe.com/after-effects/using/whats-new/2022-2.html) (2022年8月)

- 新增脚本方法：
  - 新增：[Property.keyLabel()](../property/property.md#propertykeylabel)
  - 新增：[Property.setLabelAtKey()](../property/property.md#propertysetlabelatkey)

### [After Effects 22.3](https://helpx.adobe.com/after-effects/using/whats-new/2022-2.html) (2022年4月)

- 新增脚本方法：
  - 新增：[Layer.doSceneEditDetection()](../layer/layer.md#layerdosceneeditdetection)

### [After Effects 22.0](https://helpx.adobe.com/after-effects/using/whats-new/2022.html) (2021年10月)

- 新增脚本方法：
  - 新增：[Layer.id](../layer/layer.md#layerid)
  - 新增：[Project.layerByID()](../general/project.md#projectlayerbyid)
  - 新增：[Property.essentialPropertySource](../property/property.md#propertyessentialpropertysource)
- 脚本访问渲染队列通知：
  - 新增：[RenderQueue.queueNotify](../renderqueue/renderqueue.md#renderqueuequeuenotify)
  - 新增：[RenderQueueItem.queueItemNotify](../renderqueue/renderqueueitem.md#renderqueueitemqueueitemnotify)
- 脚本访问多帧渲染，最大CPU百分比覆盖：
  - 新增：[app.setMultiFrameRenderingConfig()](../general/application.md#appsetmultiframerenderingconfig)

---

## After Effects 18

### [After Effects 18.0](https://helpx.adobe.com/after-effects/using/whats-new/2021-2.html) (2021年3月)

- 支持媒体替换的脚本方法和属性：
  - 新增：[AVItem.isMediaReplacementCompatible](../item/avitem.md#avitemismediareplacementcompatible)
  - 新增：[AVLayer.addToMotionGraphicsTemplate()](../layer/avlayer.md#avlayeraddtomotiongraphicstemplate)
  - 新增：[AVLayer.addToMotionGraphicsTemplateAs()](../layer/avlayer.md#avlayeraddtomotiongraphicstemplateas)
  - 新增：[AVLayer.canAddToMotionGraphicsTemplate()](../layer/avlayer.md#avlayercanaddtomotiongraphicstemplate)
  - 新增：[Property.alternateSource](../property/property.md#propertyalternatesource)
  - 新增：[Property.canSetAlternateSource](../property/property.md#propertycansetalternatesource)
  - 新增：[Property.setAlternateSource()](../property/property.md#propertysetalternatesource)
  - 新增相关[匹配名称](../../matchnames/layer/avlayer)
- 新增[Essential Properties 属性组的匹配名称](../../matchnames/layer/avlayer)。

---

## After Effects 17

### [After Effects 17.1.1](https://helpx.adobe.com/after-effects/using/whats-new/2020-1.html) (2020年5月)

- 脚本访问形状图层描边锥度、描边波浪、偏移路径副本、偏移路径副本偏移：
  - 新增相关[匹配名称](../../matchnames/layer/shapelayer)
- 修复了允许负值的问题：[CompItem.displayStartTime](../item/compitem.md#compitemdisplaystarttime)：
 