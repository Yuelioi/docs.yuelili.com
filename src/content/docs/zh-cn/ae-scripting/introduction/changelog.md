---
title: 更新日志
---

# 更新日志

脚本功能的新增与变更内容。

---

## After Effects 25

### [After Effects 25.2 Beta build 98](https://community.adobe.com/t5/after-effects-beta-discussions/animated-environmental-lights-available-now-in-after-effects-beta/td-p/15130220) (2025年2月)

- 新增脚本方法和属性：
  - 更新：[LightLayer.lightSource](../../layer/lightlayer#lightlayerlightsource)

### [After Effects 25.0 Beta build 26](https://community.adobe.com/t5/after-effects-beta-discussions/new-in-ae-25-0-build-25-scripting-hooks-for-font-fallback-management/m-p/14809794) (2024年8月)

- 新增脚本方法和属性：
  - 新增：[CharacterRange.pasteFrom()](../../text/characterrange#characterrangepastefrom)
  - 新增：[FontObject.hasGlyphsFor()](../../text/fontobject#fontobjecthasglyphsfor)
  - 新增：[FontObject.otherFontsWithSameDict()](../../text/fontobject#fontobjectotherfontswithsamedict)
  - 新增：[FontsObject.getCTScriptForString()](../../text/fontsobject#fontsobjectgetctscriptforstring)
  - 新增：[FontsObject.getDefaultFontForCTScript()](../../text/fontsobject#fontsobjectgetdefaultfontforctscript)
  - 新增：[FontsObject.setDefaultFontForCTScript()](../../text/fontsobject#fontsobjectsetdefaultfontforctscript)

---

## After Effects 24

### [After Effects 24.6](https://helpx.adobe.com/after-effects/using/whats-new/2024-6.html) (2024年8月)

- 新增脚本方法和属性：
  - 新增：[FontsObject.favoriteFontFamilyList](../../text/fontsobject#fontsobjectfavoritefontfamilylist)
  - 新增：[FontsObject.fontsDuplicateByPostScriptName](../../text/fontsobject#fontsobjectfontsduplicatebypostscriptname)
  - 新增：[FontsObject.freezeSyncSubstitutedFonts](../../text/fontsobject#fontsobjectfreezesyncsubstitutedfonts)
  - 新增：[FontsObject.mruFontFamilyList](../../text/fontsobject#fontsobjectmrufontfamilylist)
  - 新增：[FontsObject.substitutedFontReplacementMatchPolicy](../../text/fontsobject#fontsobjectsubstitutedfontreplacementmatchpolicy)
  - 新增：[FontsObject.pollForAndPushNonSystemFontFoldersChanges()](../../text/fontsobject#fontsobjectpollforandpushnonsystemfontfolderschanges)
  - 新增：[TextDocument.boxAutoFitPolicy](../../text/textdocument#textdocumentboxautofitpolicy)
  - 新增：[TextDocument.boxFirstBaselineAlignment](../../text/textdocument#textdocumentboxfirstbaselinealignment)
  - 新增：[TextDocument.boxFirstBaselineAlignmentMinimum](../../text/textdocument#textdocumentboxfirstbaselinealignmentminimum)
  - 新增：[TextDocument.boxInsetSpacing](../../text/textdocument#textdocumentboxinsetspacing)
  - 新增：[TextDocument.boxOverflow](../../text/textdocument#textdocumentboxoverflow)
  - 新增：[TextDocument.boxVerticalAlignment](../../text/textdocument#textdocumentboxverticalalignment)

### [After Effects 24.5](https://helpx.adobe.com/after-effects/using/whats-new/2024-5.html) (2024年5月)

- 新增脚本方法和属性：
  - 新增：[Project.replaceFont()](../../general/project#projectreplacefont)
  - 新增：[Project.usedFonts](../../general/project#projectusedfonts)

### [After Effects 24.4 Beta build 25](https://community.adobe.com/t5/after-effects-beta-discussions/scripting-new-api-for-3d-model-layers/td-p/14580044) (2024年3月)

- 新增：[ThreeDModelLayer 对象](../../layer/threedmodellayer)

### [After Effects 24.3](https://helpx.adobe.com/after-effects/using/whats-new/2024-3.html) (2024年3月)

- 新增脚本方法和属性：
  - 新增：[CharacterRange 对象](../../text/characterrange)
  - 新增：[ParagraphRange 对象](../../text/paragraphrange)
  - 新增：[ComposedLineRange 对象](../../text/composedlinerange)
  - 新增：[TextDocument.characterRange()](../../text/textdocument#textdocumentcharacterrange)
  - 新增：[TextDocument.composedLineCharacterIndexesAt()](../../text/textdocument#textdocumentcomposedlinecharacterindexesat)
  - 新增：[TextDocument.composedLineCount](../../text/textdocument#textdocumentcomposedlinecount)
  - 新增：[TextDocument.composedLineRange()](../../text/textdocument#textdocumentcomposedlinerange)
  - 新增：[TextDocument.paragraphCharacterIndexesAt()](../../text/textdocument#textdocumentparagraphcharacterindexesat)
  - 新增：[TextDocument.paragraphCount](../../text/textdocument#textdocumentparagraphcount)
  - 新增：[TextDocument.paragraphRange()](../../text/textdocument#textdocumentparagraphrange)
  - 变更：[app.purge()](../../general/application#apppurge) - PurgeTarget.ALL_CACHES 现在包括磁盘缓存

### [After Effects 24.2](https://helpx.adobe.com/after-effects/using/whats-new/2024-2.html) (2024年2月)

- 新增或变更的脚本方法和属性：
  - 新增：[LayerCollection.addVerticalText()](../../layer/layercollection#layercollectionaddverticaltext)
  - 新增：[LayerCollection.addVerticalBoxText()](../../layer/layercollection#layercollectionaddverticalboxtext)
  - 新增：[TextDocument.lineOrientation](../../text/textdocument#textdocumentlineorientation)
  - 新增：[FontsObject.fontServerRevision](../../text/fontsobject#fontsobjectfontserverrevision)
  - 新增：[FontsObject.getFontByID()](../../text/fontsobject#fontsobjectgetfontbyid)
  - 新增：[FontObject.fontID](../../text/fontobject#fontobjectfontid)

### [After Effects 24.0](https://helpx.adobe.com/after-effects/using/whats-new/2024.html) (2023年10月)

- 新增脚本方法和属性：
  - 新增：[getEnumAsString()](../../general/globals#getenumasstring)
  - 新增：[app.fonts](../../general/application#appfonts)
  - 新增：[Fonts 对象](../../text/fontsobject)
  - 新增：[FontsObject.allFonts](../../text/fontsobject#fontsobjectallfonts)
  - 新增：[FontsObject.fontsWithDefaultDesignAxes](../../text/fontsobject#fontsobjectfontswithdefaultdesignaxes)
  - 新增：[FontsObject.getFontsByFamilyNameAndStyleName()](../../text/fontsobject#fontsobjectgetfontsbyfamilynameandstylename)
  - 新增：[FontsObject.getFontsByPostScriptName()](../../text/fontsobject#fontsobjectgetfontsbypostscriptname)
  - 新增：[FontsObject.missingOrSubstitutedFonts](../../text/fontsobject#fontsobjectmissingorsubstitutedfonts)
  - 新增：[Font 对象](../../text/fontobject)
  - 新增：[FontObject.designAxesData](../../text/fontobject#fontobjectdesignaxesdata)
  - 新增：[FontObject.designVector](../../text/fontobject#fontobjectdesignvector)
  - 新增：[FontObject.familyPrefix](../../text/fontobject#fontobjectfamilyprefix)
  - 新增：[FontObject.hasDesignAxes](../../text/fontobject#fontobjecthasdesignaxes)
  - 新增：[FontObject.hasSameDict()](../../text/fontobject#fontobjecthassamedict)
  - 新增：[FontObject.postScriptNameForDesignVector()](../../text/fontobject#fontobjectpostscriptnamefordesignvector)
  - 新增：[FontObject.familyName](../../text/fontobject#fontobjectfamilyname)
  - 新增：[FontObject.fullName](../../text/fontobject#fontobjectfullname)
  - 新增：[FontObject.isFromAdobeFonts](../../text/fontobject#fontobjectisfromadobefonts)
  - 新增：[FontObject.isSubstitute](../../text/fontobject#fontobjectissubstitute)
  - 新增：[FontObject.location](../../text/fontobject#fontobjectlocation)
  - 新增：[FontObject.nativeFamilyName](../../text/fontobject#fontobjectnativefamilyname)
  - 新增：[FontObject.nativeFullName](../../text/fontobject#fontobjectnativefullname)
  - 新增：[FontObject.nativeStyleName](../../text/fontobject#fontobjectnativestylename)
  - 新增：[FontObject.postScriptName](../../text/fontobject#fontobjectpostscriptname)
  - 新增：[FontObject.styleName](../../text/fontobject#fontobjectstylename)
  - 新增：[FontObject.technology](../../text/fontobject#fontobjecttechnology)
  - 新增：[FontObject.type](../../text/fontobject#fontobjecttype)
  - 新增：[FontObject.version](../../text/fontobject#fontobjectversion)
  - 新增：[FontObject.writingScripts](../../text/fontobject#fontobjectwritingscripts)
  - 新增：[TextDocument.autoHyphenate](../../text/textdocument#textdocumentautohyphenate)
  - 新增：[TextDocument.autoKernType](../../text/textdocument#textdocumentautokerntype)
  - 新增：[TextDocument.baselineDirection](../../text/textdocument#textdocumentbaselinedirection)
  - 新增：[TextDocument.composerEngine](../../text/textdocument#textdocumentcomposerengine)
  - 新增：[TextDocument.digitSet](../../text/textdocument#textdocumentdigitset)
  - 新增：[TextDocument.direction](../../text/textdocument#textdocumentdirection)
  - 新增：[TextDocument.endIndent](../../text/textdocument#textdocumentendindent)
  - 新增：[TextDocument.everyLineComposer](../../text/textdocument#textdocumenteverylinecomposer)
  - 新增：[TextDocument.firstLineIndent](../../text/textdocument#textdocumentfirstlineindent)
  - 新增：[TextDocument.fontBaselineOption](../../text/textdocument#textdocumentfontbaselineoption)
  - 新增：[TextDocument.fontCapsOption](../../text/textdocument#textdocumentfontcapsoption)
  - 新增：[TextDocument.fontObject](../../text/textdocument#textdocumentfontobject)
  - 新增：[TextDocument.hangingRoman](../../text/textdocument#textdocumenthangingroman)
  - 新增：[TextDocument.kerning](../../text/textdocument#textdocumentkerning)
  - 新增：[TextDocument.leadingType](../../text/textdocument#textdocumentleadingtype)
  - 新增：[TextDocument.ligature](../../text/textdocument#textdocumentligature)
  - 新增：[TextDocument.lineJoinType](../../text/textdocument#textdocumentlinejointype)
  - 新增：[TextDocument.noBreak](../../text/textdocument#textdocumentnobreak)
  - 新增：[TextDocument.spaceAfter](../../text/textdocument#textdocumentspaceafter)
  - 新增：[TextDocument.spaceBefore](../../text/textdocument#textdocumentspacebefore)
  - 新增：[TextDocument.startIndent](../../text/textdocument#textdocumentstartindent)
- 脚本属性更新：
  - 更新：[TextDocument.fauxBold](../../text/textdocument#textdocumentfauxbold)
  - 更新：[TextDocument.fauxItalic](../../text/textdocument#textdocumentfauxitalic)
  - 更新：[TextDocument.justification](../../text/textdocument#textdocumentjustification)

---

## After Effects 23

### [After Effects 23.0](https://helpx.adobe.com/after-effects/using/whats-new/2023.html) (2022年10月)

- 新增脚本方法和属性：
  - 新增：[AVLayer.setTrackMatte()](../../layer/avlayer#avlayersettrackmatte)
  - 新增：[AVLayer.removeTrackMatte()](../../layer/avlayer#avlayerremovetrackmatte)
  - 新增：[AVLayer.trackMatteLayer](../../layer/avlayer#avlayertrackmattelayer)
- 脚本属性更新：
  - 更新：[AVLayer.trackMatteType](../../layer/avlayer#avlayertrackmattetype)
  - 更新：[AVLayer.isTrackMatte](../../layer/avlayer#avlayeristrackmatte)
  - 更新：[AVLayer.hasTrackMatte](../../layer/avlayer#avlayerhastrackmatte)

---

## After Effects 22

### [After Effects 22.6](https://helpx.adobe.com/after-effects/using/whats-new/2022-2.html) (2022年8月)

- 新增脚本方法：
  - 新增：[Property.keyLabel()](../../property/property#propertykeylabel)
  - 新增：[Property.setLabelAtKey()](../../property/property#propertysetlabelatkey)

### [After Effects 22.3](https://helpx.adobe.com/after-effects/using/whats-new/2022-2.html) (2022年4月)

- 新增脚本方法：
  - 新增：[Layer.doSceneEditDetection()](../../layer/layer#layerdosceneeditdetection)

### [After Effects 22.0](https://helpx.adobe.com/after-effects/using/whats-new/2022.html) (2021年10月)

- 新增脚本方法：
  - 新增：[Layer.id](../../layer/layer#layerid)
  - 新增：[Project.layerByID()](../../general/project#projectlayerbyid)
  - 新增：[Property.essentialPropertySource](../../property/property#propertyessentialpropertysource)
- 脚本访问渲染队列通知：
  - 新增：[RenderQueue.queueNotify](../../renderqueue/renderqueue#renderqueuequeuenotify)
  - 新增：[RenderQueueItem.queueItemNotify](../../renderqueue/renderqueueitem#renderqueueitemqueueitemnotify)
- 脚本访问多帧渲染，最大CPU百分比覆盖：
  - 新增：[app.setMultiFrameRenderingConfig()](../../general/application#appsetmultiframerenderingconfig)

---

## After Effects 18

### [After Effects 18.0](https://helpx.adobe.com/after-effects/using/whats-new/2021-2.html) (2021年3月)

- 支持媒体替换的脚本方法和属性：
  - 新增：[AVItem.isMediaReplacementCompatible](../../item/avitem#avitemismediareplacementcompatible)
  - 新增：[AVLayer.addToMotionGraphicsTemplate()](../../layer/avlayer#avlayeraddtomotiongraphicstemplate)
  - 新增：[AVLayer.addToMotionGraphicsTemplateAs()](../../layer/avlayer#avlayeraddtomotiongraphicstemplateas)
  - 新增：[AVLayer.canAddToMotionGraphicsTemplate()](../../layer/avlayer#avlayercanaddtomotiongraphicstemplate)
  - 新增：[Property.alternateSource](../../property/property#propertyalternatesource)
  - 新增：[Property.canSetAlternateSource](../../property/property#propertycansetalternatesource)
  - 新增：[Property.setAlternateSource()](../../property/property#propertysetalternatesource)
  - 新增相关[匹配名称](../../matchnames/layer/avlayer)
- 新增[Essential Properties 属性组的匹配名称](../../matchnames/layer/avlayer)。

---

## After Effects 17

### [After Effects 17.1.1](https://helpx.adobe.com/after-effects/using/whats-new/2020-1.html) (2020年5月)

- 脚本访问形状图层描边锥度、描边波浪、偏移路径副本、偏移路径副本偏移：
  - 新增相关[匹配名称](../../matchnames/layer/shapelayer)
- 修复了允许负值的问题：[CompItem.displayStartTime](../../item/compitem#compitemdisplaystarttime)：
 