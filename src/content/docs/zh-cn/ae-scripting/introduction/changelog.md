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
- 修复允许[CompItem.displayStartTime](../../item/compitem#compitemdisplaystarttime)使用负值的问题：
 - 新增[CompItem.displayStartFrame](../../item/compitem#compitemdisplaystartframe)
 - 现在与在合成设置对话框中设置起始时间码时允许的有效范围一致（-3:00:00:00至23:59:00:00）。

### [After Effects 17.0.1](https://helpx.adobe.com/after-effects/using/whats-new/2020.html) (2019年11月)

- 脚本创建和修改下拉菜单控制项：
 - 新增：[Property.isDropdownEffect](../../property/property#propertyisdropdowneffect)
 - 新增：[Property.setPropertyParameters()](../../property/property#propertysetpropertyparameters)

---

## After Effects 16

### After Effects 16.1

- 脚本访问[ViewOptions对象](../../other/viewoptions)的参考线和标尺布尔值：
 - 新增：[ViewOptions.guidesLocked](../../other/viewoptions#viewoptionsguideslocked)
 - 新增：[ViewOptions.guidesSnap](../../other/viewoptions#viewoptionsguidessnap)
 - 新增：[ViewOptions.guidesVisibility](../../other/viewoptions#viewoptionsguidesvisibility)
 - 新增：[ViewOptions.rulers](../../other/viewoptions#viewoptionsrulers)
- 脚本访问添加、删除和设置现有参考线：
 - 新增：[Item.addGuide()](../../item/item#itemaddguide)
 - 新增：[Item.removeGuide()](../../item/item#itemremoveguide)
 - 新增：[Item.setGuide()](../../item/item#itemsetguide)
- 脚本访问额外的EGP属性属性：
 - 新增：[CompItem.motionGraphicsTemplateControllerCount](../../item/compitem#compitemmotiongraphicstemplatecontrollercount)
 - 新增：[CompItem.getMotionGraphicsTemplateControllerName()](../../item/compitem#compitemgetmotiongraphicstemplatecontrollername)
 - 新增：[CompItem.setMotionGraphicsControllerName()](../../item/compitem#compitemsetmotiongraphicscontrollername)
 - 新增：[Property.addToMotionGraphicsTemplateAs()](../../property/property#propertyaddtomotiongraphicstemplateas)

### [After Effects 16.0](https://helpx.adobe.com/after-effects/using/whats-new/2019.html) (2018年10月)

- 脚本访问标记标签和受保护区域属性：
 - 新增：[MarkerValue.label](../../other/markervalue#markervaluelabel)
 - 新增：[MarkerValue.protectedRegion](../../other/markervalue#markervalueprotectedregion)
- 脚本访问额外的项目色彩管理设置：
 - 新增：[Project.workingSpace](../../general/project#projectworkingspace)
 - 新增：[Project.workingGamma](../../general/project#projectworkinggamma)
 - 新增：[Project.listColorProfiles()](../../general/project#projectlistcolorprofiles)
 - 新增：[Project.linearizeWorkingSpace](../../general/project#projectlinearizeworkingspace)
 - 新增：[Project.compensateForSceneReferredProfiles](../../general/project#projectcompensateforscenereferredprofiles)
- 脚本访问表达式引擎属性：
 - 新增：[Project.expressionEngine](../../general/project#projectexpressionengine)
- 新增项目方法[Project.setDefaultImportFolder()](../../general/project#projectsetdefaultimportfolder)，用于设置在文件导入对话框中显示的默认文件夹。
- 新增应用程序属性[app.disableRendering](../../general/application#appdisablerendering)，通过与大写锁定键相同的机制禁用渲染。

---

## After Effects 15

### [After Effects 15.1](https://helpx.adobe.com/after-effects/using/whats-new/2018.html) (2018年4月)

- [Project.autoFixExpressions()](../../general/project#projectautofixexpressions)现在可以修复单引号（例如('效果名称')）以及双引号中的表达式名称引用。
- 修复[CompItem.exportAsMotionGraphicsTemplate()](../../item/compitem#compitemexportasmotiongraphicstemplate)未按预期返回布尔值的问题。

### [After Effects 15.0](https://forums.adobe.com/docs/DOC-8872) (2017年10月)

- 脚本访问动态图形模板：
 - 新增：[CompItem.motionGraphicsTemplateName](../../item/compitem#compitemmotiongraphicstemplatename)
 - 新增：[CompItem.exportAsMotionGraphicsTemplate()](../../item/compitem#compitemexportasmotiongraphicstemplate)
 - 新增：[CompItem.openInEssentialGraphics()](../../item/compitem#compitemopeninessentialgraphics)
 - 新增：[Property.addToMotionGraphicsTemplate()](../../property/property#propertyaddtomotiongraphicstemplate)
 - 新增：[Property.canAddToMotionGraphicsTemplate()](../../property/property#propertycanaddtomotiongraphicstemplate)

---

## After Effects 14

### [After Effects 14.2.1 (CC 2017.2)](https://blogs.adobe.com/creativecloud/a-june-2017-update-to-after-effects-cc-is-now-available/) (2017年6月)

- ScriptUI面板中的按钮已恢复为After Effects 14.1及之前版本中看到的矩形外观。
- [AVItem.setProxyToNone()](../../item/avitem#avitemsetproxytonone)脚本方法不再因错误消息"After Effects错误：AEGP尝试添加无效素材"而失败。
- [System.callSystem()](../../general/system#systemcallsystem)脚本方法现在会等待命令调用的所有任务完成，而不是在命令耗时过长时失败。

### [After Effects 14.2 (CC 2017.1)](https://blogs.adobe.com/creativecloud/after-effects-cc-april-2017-in-depth-scripting-improvements/) (2017年4月)

- 脚本访问文本行距：
 - 新增：[TextDocument.leading](../../text/textdocument#textdocumentleading)
- 脚本访问团队项目（Beta）：
 - 新增：[Project.newTeamProject()](../../general/project#projectnewteamproject)
 - 新增：[Project.openTeamProject()](../../general/project#projectopenteamproject)
 - 新增：[Project.shareTeamProject()](../../general/project#projectshareteamproject)
 - 新增：[Project.syncTeamProject()](../../general/project#projectsyncteamproject)
 - 新增：[Project.closeTeamProject()](../../general/project#projectcloseteamproject)
 - 新增：[Project.convertTeamProjectToProject()](../../general/project#projectconvertteamprojecttoproject)
 - 新增：[Project.listTeamProjects()](../../general/project#projectlistteamprojects)
 - 新增：[Project.isTeamProjectOpen()](../../general/project#projectisteamprojectopen)
 - 新增：[Project.isAnyTeamProjectOpen()](../../general/project#projectisanyteamprojectopen)
 - 新增：[Project.isTeamProjectEnabled()](../../general/project#projectisteamprojectenabled)
 - 新增：[Project.isLoggedInToTeamProject()](../../general/project#projectisloggedintoteamproject)
 - 新增：[Project.isSyncCommandEnabled()](../../general/project#projectissynccommandenabled)
 - 新增：[Project.isShareCommandEnabled()](../../general/project#projectissharecommandenabled)
 - 新增：[Project.isResolveCommandEnabled()](../../general/project#projectisresolvecommandenabled)
 - 新增：[Project.resolveConflict()](../../general/project#projectresolveconflict)
- Windows上的HiDPI显示器上，ScriptUI面板中的下拉菜单不再被裁剪。
- ScriptUI嵌入式面板中的按钮、滑块、展开三角形（"twirly arrow"）、滚动条、进度条、单选按钮和复选框的外观已更新，以匹配After Effects原生控件的外观。
- 当[AVLayer.compPointToSource()](../../layer/avlayer#avlayercomppointtosource)脚本方法与3D文本图层一起使用时，After Effects不再崩溃。
- 快速方框模糊效果的匹配名称是"ADBE Box Blur2"。旧的匹配名称"ADBE Box Blur"将继续工作：当用于添加效果时，"ADBE Box Blur"将应用快速方框模糊效果，但使用旧名称"Box Blur"；迭代参数将设置为新的默认值3。

### [After Effects 14.0 (CC 2017)](https://forums.adobe.com/message/9108589) (2016年11月)

- 脚本访问工具：
 - 新增：[Project.toolType](../../general/project#projecttooltype)
- 脚本访问合成标记：
 - 新增：[CompItem.markerProperty](../../item/compitem#compitemmarkerproperty)
- 脚本访问AME中的队列：
 - 新增：[RenderQueue.queueInAME()](../../renderqueue/renderqueue#renderqueuequeueiname)
- 脚本访问可用的GPU加速选项：
 - 新增：[app.availableGPUAccelTypes](../../general/application#appavailablegpuacceltypes)

---

## After Effects 13

### [After Effects 13.8 (CC 2015.3)](https://blogs.adobe.com/creativecloud/after-effects-cc-2015-3-in-depth-gpu-accelerated-effects/) (2016年6月)

- 通过脚本启用GPU效果渲染：
 - 新增：[Project.gpuAccelType](../../general/project#projectgpuacceltype)
- 新增高斯模糊效果，匹配名为 `ADBE Gaussian Blur 2`

### [After Effects 13.6 (CC 2015)](https://blogs.adobe.com/creativecloud/whats-new-and-changed-in-the-upcoming-update-to-after-effects-cc-2015/) (2015年11月)

- 脚本访问文本基线：
 - 新增：[baselineLocs](../../text/textdocument#textdocumentbaselinelocs)
- 新增生成随机数的脚本方法：
 - 新增：[generateRandomNumber()](../../general/globals#generaterandomnumber)
- 使用 [copyToComp()](../../layer/layer#layercopytocomp) 脚本方法时，当图层有父级时不再导致After Effects崩溃。
- [valueAtTime()](../../property/property#propertyvalueattime) 脚本方法现在会等待耗时的表达式（如 `sampleImage`）完成计算后再返回结果。
- ScriptUI面板现在可以在Windows的高DPI显示器上正确显示和调整大小。
- 当点击带有标签页的scriptUI对话框中的确定或取消按钮时，After Effects不再崩溃。

### [After Effects 13.2 (CC 2014.2)](https://blogs.adobe.com/creativecloud/after-effects-cc-2014-2-13-2/) (2014年12月)

- 文本图层的脚本改进（只读）：
 - 返回布尔值：
 - 新增：[fauxBold](../../text/textdocument#textdocumentfauxbold)
 - 新增：[fauxItalic](../../text/textdocument#textdocumentfauxitalic)
 - 新增：[allCaps](../../text/textdocument#textdocumentallcaps)
 - 新增：[smallCaps](../../text/textdocument#textdocumentsmallcaps)
 - 新增：[superscript](../../text/textdocument#textdocumentsuperscript)
 - 新增：[subscript](../../text/textdocument#textdocumentsubscript)
 - 返回浮点数：
 - 新增：[verticalScale](../../text/textdocument#textdocumentverticalscale)
 - 新增：[horizontalScale](../../text/textdocument#textdocumenthorizontalscale)
 - 新增：[baselineShift](../../text/textdocument#textdocumentbaselineshift)
 - 新增：[tsume](../../text/textdocument#textdocumenttsume)
 - 返回位置坐标数组（仅段落文本图层）：
 - 新增：[boxTextPos](../../text/textdocument#textdocumentboxtextpos)
- 图层空间/合成空间转换：
 - 新增：[sourcePointToComp()](../../layer/avlayer#avlayersourcepointtocomp)
 - 新增：[compPointToSource()](../../layer/avlayer#avlayercomppointtosource)

### [After Effects 13.1 (CC 2014.1)](https://blogs.adobe.com/creativecloud/after-effects-cc-2014-1-13-1/) (2014年9月)

- 文本图层的脚本改进（只读）：
 - 返回字符串：
 - 新增：[fontLocation](../../text/textdocument#textdocumentfontlocation)
 - 新增：[fontStyle](../../text/textdocument#textdocumentfontstyle)
 - 新增：[fontFamily](../../text/textdocument#textdocumentfontfamily)
- 实现"使用旧版UI"切换选项

---

### [After Effects 13.0 (CC 2014)](https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/) (2014年6月)

- 脚本访问渲染设置和输出模块设置：
 - 新增：RenderQueueItem对象的 [getSetting](../../renderqueue/renderqueueitem#renderqueueitemgetsetting)、[setSetting](../../renderqueue/renderqueueitem#renderqueueitemsetsetting) 方法
 - 新增：RenderQueueItem对象的 [getSettings](../../renderqueue/renderqueueitem#renderqueueitemgetsettings)、[setSettings](../../renderqueue/renderqueueitem#renderqueueitemsetsettings) 方法
 - 新增：OutputModule对象的 [getSetting](../../renderqueue/outputmodule#outputmodulegetsetting)、[setSetting](../../renderqueue/outputmodule#outputmodulesetsetting) 方法
 - 新增：OutputModule对象的 [getSettings](../../renderqueue/outputmodule#outputmodulegetsettings)、[setSettings](../../renderqueue/outputmodule#outputmodulesetsettings) 方法
- 通过ID获取项目项：[Project.itemByID()](../../general/project#projectitembyid)
- 实现CEP面板

---

## After Effects 12

### [After Effects 12.0 (CC)](https://blogs.adobe.com/creativecloud/scripting-changes-in-after-effects-cc-12-0-12-2/) (2013年6月)

- 访问效果的内部版本字符串：
 - 新增：应用程序效果对象的version属性，参见 [app.effects](../../general/application#appeffects)
- 获取和设置预览模式的能力：
 - 新增：[ViewOptions.fastPreview](../../other/viewoptions#viewoptionsfastpreview)
- 访问图层采样方法（参见 [samplingQuality](../../layer/avlayer#avlayersamplingquality)）
- 更改首选项和设置方法（参见 [Settings对象](../../other/settings)）
- ScriptUI现在基于与主应用程序相同的控件。

---

## After Effects 11

### [After Effects 11.0 (CS6)](https://web.archive.org/web/20120623073355/https://blogs.adobe.com/toddkopriva/2012/06/scripting-changes-in-after-effects-cs6-plus-new-scripting-guide.html/) (2012年4月)

- 新增：访问 [Viewer对象](../../other/viewer) 和控件：
 - 新增：[app.activeViewer](../../general/application#appactiveviewer)
 - 新增：[AVLayer.openInViewer()](../../layer/avlayer#avlayeropeninviewer) 在图层查看器中打开图层
 - 新增：[CompItem.openInViewer()](../../item/compitem#compitemopeninviewer) 在合成查看器中打开合成
 - 新增：[FootageItem.openInViewer()](../../item/footageitem#footageitemopeninviewer) 在素材查看器中打开素材项
- 新增：[Property.canSetExpression](../../property/property#propertycansetexpression)
- 新增：[AVLayer.environmentLayer](../../layer/avlayer#avlayerenvironmentlayer)
- 新增：[MaskPropertyGroup.maskFeatherFalloff](../../property/maskpropertygroup#maskpropertygroupmaskfeatherfalloff)
- 通过脚本访问形状羽化属性：
 - 新增：[Shape.featherSegLocs](../../other/shape#shapefeatherseglocs)
 - 新增：[Shape.featherRelSegLocs](../../other/shape#shapefeatherrelseglocs)
 - 新增：[Shape.featherRadii](../../other/shape#shapefeatherradii)
 - 新增：[Shape.featherInterps](../../other/shape#shapefeatherinterps)
 - 新增：[Shape.featherTensions](../../other/shape#shapefeathertensions)
 - 新增：[Shape.featherTypes](../../other/shape#shapefeathertypes)
 - 新增：[Shape.featherRelCornerAngles](../../other/shape#shapefeatherrelcornerangles)

---

## After Effects 10

### [After Effects 10.5 (CS5.5)](https://web.archive.org/web/20121022055915/http://blogs.adobe.com/toddkopriva/2008/12/after-effects-cs4-scripting-ch.html/) (2011年4月)

- 新增到 [Project对象](../../general/project)：
 - [Project.framesCountType](../../general/project#projectframescounttype)
 - [Project.feetFramesFilmType](../../general/project#projectfeetframesfilmtype)
 - [Project.framesUseFeetFrames](../../general/project#projectframesusefeetframes)
 - [Project.footageTimecodeDisplayStartType](../../general/project#projectfootagetimecodedisplaystarttype)
 - [Project.timeDisplayType](../../general/project#projecttimedisplaytype)
- 从 [Project对象](../../general/project) 中移除：
 - `timecodeDisplayType` 属性
 - `timecodeBaseType` 属性
 - `timecodeNTSCDropFrame` 属性
 - `timecodeFilmType` 属性
 - `TimecodeDisplayType` 枚举
 - `TimecodeFilmType` 枚举
 - `TimecodeBaseType` 枚举
- 新增：[CompItem.dropFrame](../../item/compitem#compitemdropframe)
- 新增对段落框文本的支持：
 - 新增 [LayerCollection.addBoxText()](../../layer/layercollection#layercollectionaddboxtext)
 - 新增 [TextDocument.boxText](../../text/textdocument#textdocumentboxtext)
 - 新增 [TextDocument.pointText](../../text/textdocument#textdocumentpointtext)
 - 新增 [TextDocument.boxTextSize](../../text/textdocument#textdocumentboxtextsize)
- 新增 [LightLayer.lightType](../../layer/lightlayer#lightlayerlighttype)

---

## After Effects 9

### [After Effects 9.0 (CS4)](https://web.archive.org/web/20121022055915/http://blogs.adobe.com/toddkopriva/2008/12/after-effects-cs4-scripting-ch.html/) (2008年9月)

- 新增：[app.isoLanguage](../../general/application#appisolanguage)
- 新增：[MarkerValue.duration](../../other/markervalue#markervalueduration)
- 新增：[OutputModule.includeSourceXMP](../../renderqueue/outputmodule#outputmoduleincludesourcexmp)
- 新增：[Project.xmpPacket](../../general/project#projectxmppacket)
- 新增以下与"分离维度"功能相关的Property方法和属性：
 - [Property.dimensionsSeparated](../../property/property#propertydimensionsseparated)
 - [Property.getSeparationFollower()](../../property/property#propertygetseparationfollower)
 - [Property.isSeparationFollower](../../property/property#propertyisseparationfollower)
 - [Property.isSeparationLeader](../../property/property#propertyisseparationleader)
 - [Property.separationDimension](../../property/property#propertyseparationdimension)
 - [Property.separationLeader](../../property/property#propertyseparationleader)
- 新增 [TextDocument对象](../../text/textdocument) 访问，包括：
 - 新增：[TextDocument.applyFill](../../text/textdocument#textdocumentapplyfill)
 - 新增：[TextDocument.applyStroke](../../text/textdocument#textdocumentapplystroke)
 - 新增：[TextDocument.fillColor](../../text/textdocument#textdocumentfillcolor)
 - 新增：[TextDocument.font](../../text/textdocument#textdocumentfont)
 - 新增：[TextDocument.fontSize](../../text/textdocument#textdocumentfontsize)
 - 新增：[TextDocument.justification](../../text/textdocument#textdocumentjustification)
 - 新增：[TextDocument.resetCharStyle()](../../text/textdocument#textdocumentresetcharstyle)
 - 新增：[TextDocument.resetParagraphStyle()](../../text/textdocument#textdocumentresetparagraphstyle)
 - 新增：[TextDocument.strokeColor](../../text/textdocument#textdocumentstrokecolor)
 - 新增：[TextDocument.strokeOverFill](../../text/textdocument#textdocumentstrokeoverfill)
 - 新增：[TextDocument.strokeWidth](../../text/textdocument#textdocumentstrokewidth)
