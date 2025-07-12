---
title: Changelog
---

# Changelog

What's new and changed for scripting?

---

## After Effects 25

### [After Effects 25.2 Beta build 98](https://community.adobe.com/t5/after-effects-beta-discussions/animated-environmental-lights-available-now-in-after-effects-beta/td-p/15130220) (February 2025)

- Scripting methods and attributes added:
 - Updated: [LightLayer.lightSource](../../layer/lightlayer#lightlayerlightsource)

### [After Effects 25.0 Beta build 26](https://community.adobe.com/t5/after-effects-beta-discussions/new-in-ae-25-0-build-25-scripting-hooks-for-font-fallback-management/m-p/14809794) (August 2024)

- Scripting methods and attributes added:
 - Added: [CharacterRange.pasteFrom()](../../text/characterrange#characterrangepastefrom)
 - Added: [FontObject.hasGlyphsFor()](../../text/fontobject#fontobjecthasglyphsfor)
 - Added: [FontObject.otherFontsWithSameDict()](../../text/fontobject#fontobjectotherfontswithsamedict)
 - Added: [FontsObject.getCTScriptForString()](../../text/fontsobject#fontsobjectgetctscriptforstring)
 - Added: [FontsObject.getDefaultFontForCTScript()](../../text/fontsobject#fontsobjectgetdefaultfontforctscript)
 - Added: [FontsObject.setDefaultFontForCTScript()](../../text/fontsobject#fontsobjectsetdefaultfontforctscript)

---

## After Effects 24

### [After Effects 24.6](https://helpx.adobe.com/after-effects/using/whats-new/2024-6.html) (August 2024)

- Scripting methods and attributes added:
 - Added: [FontsObject.favoriteFontFamilyList](../../text/fontsobject#fontsobjectfavoritefontfamilylist)
 - Added: [FontsObject.fontsDuplicateByPostScriptName](../../text/fontsobject#fontsobjectfontsduplicatebypostscriptname)
 - Added: [FontsObject.freezeSyncSubstitutedFonts](../../text/fontsobject#fontsobjectfreezesyncsubstitutedfonts)
 - Added: [FontsObject.mruFontFamilyList](../../text/fontsobject#fontsobjectmrufontfamilylist)
 - Added: [FontsObject.substitutedFontReplacementMatchPolicy](../../text/fontsobject#fontsobjectsubstitutedfontreplacementmatchpolicy)
 - Added: [FontsObject.pollForAndPushNonSystemFontFoldersChanges()](../../text/fontsobject#fontsobjectpollforandpushnonsystemfontfolderschanges)
 - Added: [TextDocument.boxAutoFitPolicy](../../text/textdocument#textdocumentboxautofitpolicy)
 - Added: [TextDocument.boxFirstBaselineAlignment](../../text/textdocument#textdocumentboxfirstbaselinealignment)
 - Added: [TextDocument.boxFirstBaselineAlignmentMinimum](../../text/textdocument#textdocumentboxfirstbaselinealignmentminimum)
 - Added: [TextDocument.boxInsetSpacing](../../text/textdocument#textdocumentboxinsetspacing)
 - Added: [TextDocument.boxOverflow](../../text/textdocument#textdocumentboxoverflow)
 - Added: [TextDocument.boxVerticalAlignment](../../text/textdocument#textdocumentboxverticalalignment)

### [After Effects 24.5](https://helpx.adobe.com/after-effects/using/whats-new/2024-5.html) (May 2024)

- Scripting methods and attributes added:
 - Added: [Project.replaceFont()](../../general/project#projectreplacefont)
 - Added: [Project.usedFonts](../../general/project#projectusedfonts)

### [After Effects 24.4 Beta build 25](https://community.adobe.com/t5/after-effects-beta-discussions/scripting-new-api-for-3d-model-layers/td-p/14580044) (March 2024)

- Added: [ThreeDModelLayer object](../../layer/threedmodellayer)

### [After Effects 24.3](https://helpx.adobe.com/after-effects/using/whats-new/2024-3.html) (March 2024)

- Scripting methods and attributes added:
 - Added: [CharacterRange object](../../text/characterrange)
 - Added: [ParagraphRange object](../../text/paragraphrange)
 - Added: [ComposedLineRange object](../../text/composedlinerange)
 - Added: [TextDocument.characterRange()](../../text/textdocument#textdocumentcharacterrange)
 - Added: [TextDocument.composedLineCharacterIndexesAt()](../../text/textdocument#textdocumentcomposedlinecharacterindexesat)
 - Added: [TextDocument.composedLineCount](../../text/textdocument#textdocumentcomposedlinecount)
 - Added: [TextDocument.composedLineRange()](../../text/textdocument#textdocumentcomposedlinerange)
 - Added: [TextDocument.paragraphCharacterIndexesAt()](../../text/textdocument#textdocumentparagraphcharacterindexesat)
 - Added: [TextDocument.paragraphCount](../../text/textdocument#textdocumentparagraphcount)
 - Added: [TextDocument.paragraphRange()](../../text/textdocument#textdocumentparagraphrange)
 - Changed: [app.purge()](../../general/application#apppurge) - PurgeTarget.ALL_CACHES now includes the disk cache

### [After Effects 24.2](https://helpx.adobe.com/after-effects/using/whats-new/2024-2.html) (February 2024)

- Scripting methods and attributes added or changed:
 - Added: [LayerCollection.addVerticalText()](../../layer/layercollection#layercollectionaddverticaltext)
 - Added: [LayerCollection.addVerticalBoxText()](../../layer/layercollection#layercollectionaddverticalboxtext)
 - Added: [TextDocument.lineOrientation](../../text/textdocument#textdocumentlineorientation)
 - Added: [FontsObject.fontServerRevision](../../text/fontsobject#fontsobjectfontserverrevision)
 - Added: [FontsObject.getFontByID()](../../text/fontsobject#fontsobjectgetfontbyid)
 - Added: [FontObject.fontID](../../text/fontobject#fontobjectfontid)

### [After Effects 24.0](https://helpx.adobe.com/after-effects/using/whats-new/2024.html) (October 2023)

- Scripting methods and attributes added:
 - Added: [getEnumAsString()](../../general/globals#getenumasstring)
 - Added: [app.fonts](../../general/application#appfonts)
 - Added: [Fonts object](../../text/fontsobject)
 - Added: [FontsObject.allFonts](../../text/fontsobject#fontsobjectallfonts)
 - Added: [FontsObject.fontsWithDefaultDesignAxes](../../text/fontsobject#fontsobjectfontswithdefaultdesignaxes)
 - Added: [FontsObject.getFontsByFamilyNameAndStyleName()](../../text/fontsobject#fontsobjectgetfontsbyfamilynameandstylename)
 - Added: [FontsObject.getFontsByPostScriptName()](../../text/fontsobject#fontsobjectgetfontsbypostscriptname)
 - Added: [FontsObject.missingOrSubstitutedFonts](../../text/fontsobject#fontsobjectmissingorsubstitutedfonts)
 - Added: [Font object](../../text/fontobject)
 - Added: [FontObject.designAxesData](../../text/fontobject#fontobjectdesignaxesdata)
 - Added: [FontObject.designVector](../../text/fontobject#fontobjectdesignvector)
 - Added: [FontObject.familyPrefix](../../text/fontobject#fontobjectfamilyprefix)
 - Added: [FontObject.hasDesignAxes](../../text/fontobject#fontobjecthasdesignaxes)
 - Added: [FontObject.hasSameDict()](../../text/fontobject#fontobjecthassamedict)
 - Added: [FontObject.postScriptNameForDesignVector()](../../text/fontobject#fontobjectpostscriptnamefordesignvector)
 - Added: [FontObject.familyName](../../text/fontobject#fontobjectfamilyname)
 - Added: [FontObject.fullName](../../text/fontobject#fontobjectfullname)
 - Added: [FontObject.isFromAdobeFonts](../../text/fontobject#fontobjectisfromadobefonts)
 - Added: [FontObject.isSubstitute](../../text/fontobject#fontobjectissubstitute)
 - Added: [FontObject.location](../../text/fontobject#fontobjectlocation)
 - Added: [FontObject.nativeFamilyName](../../text/fontobject#fontobjectnativefamilyname)
 - Added: [FontObject.nativeFullName](../../text/fontobject#fontobjectnativefullname)
 - Added: [FontObject.nativeStyleName](../../text/fontobject#fontobjectnativestylename)
 - Added: [FontObject.postScriptName](../../text/fontobject#fontobjectpostscriptname)
 - Added: [FontObject.styleName](../../text/fontobject#fontobjectstylename)
 - Added: [FontObject.technology](../../text/fontobject#fontobjecttechnology)
 - Added: [FontObject.type](../../text/fontobject#fontobjecttype)
 - Added: [FontObject.version](../../text/fontobject#fontobjectversion)
 - Added: [FontObject.writingScripts](../../text/fontobject#fontobjectwritingscripts)
 - Added: [TextDocument.autoHyphenate](../../text/textdocument#textdocumentautohyphenate)
 - Added: [TextDocument.autoKernType](../../text/textdocument#textdocumentautokerntype)
 - Added: [TextDocument.baselineDirection](../../text/textdocument#textdocumentbaselinedirection)
 - Added: [TextDocument.composerEngine](../../text/textdocument#textdocumentcomposerengine)
 - Added: [TextDocument.digitSet](../../text/textdocument#textdocumentdigitset)
 - Added: [TextDocument.direction](../../text/textdocument#textdocumentdirection)
 - Added: [TextDocument.endIndent](../../text/textdocument#textdocumentendindent)
 - Added: [TextDocument.everyLineComposer](../../text/textdocument#textdocumenteverylinecomposer)
 - Added: [TextDocument.firstLineIndent](../../text/textdocument#textdocumentfirstlineindent)
 - Added: [TextDocument.fontBaselineOption](../../text/textdocument#textdocumentfontbaselineoption)
 - Added: [TextDocument.fontCapsOption](../../text/textdocument#textdocumentfontcapsoption)
 - Added: [TextDocument.fontObject](../../text/textdocument#textdocumentfontobject)
 - Added: [TextDocument.hangingRoman](../../text/textdocument#textdocumenthangingroman)
 - Added: [TextDocument.kerning](../../text/textdocument#textdocumentkerning)
 - Added: [TextDocument.leadingType](../../text/textdocument#textdocumentleadingtype)
 - Added: [TextDocument.ligature](../../text/textdocument#textdocumentligature)
 - Added: [TextDocument.lineJoinType](../../text/textdocument#textdocumentlinejointype)
 - Added: [TextDocument.noBreak](../../text/textdocument#textdocumentnobreak)
 - Added: [TextDocument.spaceAfter](../../text/textdocument#textdocumentspaceafter)
 - Added: [TextDocument.spaceBefore](../../text/textdocument#textdocumentspacebefore)
 - Added: [TextDocument.startIndent](../../text/textdocument#textdocumentstartindent)
- Scripting attributes updated:
 - Updated: [TextDocument.fauxBold](../../text/textdocument#textdocumentfauxbold)
 - Updated: [TextDocument.fauxItalic](../../text/textdocument#textdocumentfauxitalic)
 - Updated: [TextDocument.justification](../../text/textdocument#textdocumentjustification)

---

## After Effects 23

### [After Effects 23.0](https://helpx.adobe.com/after-effects/using/whats-new/2023.html) (October 2022)

- Scripting methods and attributes added:
 - Added: [AVLayer.setTrackMatte()](../../layer/avlayer#avlayersettrackmatte)
 - Added: [AVLayer.removeTrackMatte()](../../layer/avlayer#avlayerremovetrackmatte)
 - Added: [AVLayer.trackMatteLayer](../../layer/avlayer#avlayertrackmattelayer)
- Scripting attributes updated:
 - Updated: [AVLayer.trackMatteType](../../layer/avlayer#avlayertrackmattetype)
 - Updated: [AVLayer.isTrackMatte](../../layer/avlayer#avlayeristrackmatte)
 - Updated: [AVLayer.hasTrackMatte](../../layer/avlayer#avlayerhastrackmatte)

---

## After Effects 22

### [After Effects 22.6](https://helpx.adobe.com/after-effects/using/whats-new/2022-2.html) (August 2022)

- Scripting methods added:
 - Added: [Property.keyLabel()](../../property/property#propertykeylabel)
 - Added: [Property.setLabelAtKey()](../../property/property#propertysetlabelatkey)

### [After Effects 22.3](https://helpx.adobe.com/after-effects/using/whats-new/2022-2.html) (April 2022)

- Scripting methods added:
 - Added: [Layer.doSceneEditDetection()](../../layer/layer#layerdosceneeditdetection)

### [After Effects 22.0](https://helpx.adobe.com/after-effects/using/whats-new/2022.html) (October 2021)

- Scripting methods added:
 - Added: [Layer.id](../../layer/layer#layerid)
 - Added: [Project.layerByID()](../../general/project#projectlayerbyid)
 - Added: [Property.essentialPropertySource](../../property/property#propertyessentialpropertysource)
- Scripting Access to Render Queue Notifications:
 - Added: [RenderQueue.queueNotify](../../renderqueue/renderqueue#renderqueuequeuenotify)
 - Added: [RenderQueueItem.queueItemNotify](../../renderqueue/renderqueueitem#renderqueueitemqueueitemnotify)
- Scripting Access to Multi-Frame Rendering, Maximum CPU Percentage Overrides:
 - Added: [app.setMultiFrameRenderingConfig()](../../general/application#appsetmultiframerenderingconfig)

---

## After Effects 18

### [After Effects 18.0](https://helpx.adobe.com/after-effects/using/whats-new/2021-2.html) (March 2021)

- Scripting methods and attributes to support Media Replacement:
 - Added: [AVItem.isMediaReplacementCompatible](../../item/avitem#avitemismediareplacementcompatible)
 - Added: [AVLayer.addToMotionGraphicsTemplate()](../../layer/avlayer#avlayeraddtomotiongraphicstemplate)
 - Added: [AVLayer.addToMotionGraphicsTemplateAs()](../../layer/avlayer#avlayeraddtomotiongraphicstemplateas)
 - Added: [AVLayer.canAddToMotionGraphicsTemplate()](../../layer/avlayer#avlayercanaddtomotiongraphicstemplate)
 - Added: [Property.alternateSource](../../property/property#propertyalternatesource)
 - Added: [Property.canSetAlternateSource](../../property/property#propertycansetalternatesource)
 - Added: [Property.setAlternateSource()](../../property/property#propertysetalternatesource)
 - Added relevant [match names](../../matchnames/layer/avlayer)
- Added [match name for Essential Properties](../../matchnames/layer/avlayer) property group.

---

## After Effects 17

### [After Effects 17.1.1](https://helpx.adobe.com/after-effects/using/whats-new/2020-1.html) (May 2020)

- Scripting access to Shape Layer Stroke Taper, Stroke Waves, Offset Paths Copies, Offset Path Copy Offset:
 - Added relevant [match names](../../matchnames/layer/shapelayer)
- Fixed an issue to allow negative values for [CompItem.displayStartTime](../../item/compitem#compitemdisplaystarttime):
 - Added [CompItem.displayStartFrame](../../item/compitem#compitemdisplaystartframe)
 - Now matches the valid range allowed when setting the Start Timecode in the Composition Settings Dialog (-3:00:00:00 to 23:59:00:00).

### [After Effects 17.0.1](https://helpx.adobe.com/after-effects/using/whats-new/2020.html) (November 2019)

- Scripted creation and modification of Dropdown Menu Control items:
 - Added: [Property.isDropdownEffect](../../property/property#propertyisdropdowneffect)
 - Added: [Property.setPropertyParameters()](../../property/property#propertysetpropertyparameters)

---

## After Effects 16

### After Effects 16.1

- Scripting access to [ViewOptions object](../../other/viewoptions) guide and ruler booleans:
 - Added: [ViewOptions.guidesLocked](../../other/viewoptions#viewoptionsguideslocked)
 - Added: [ViewOptions.guidesSnap](../../other/viewoptions#viewoptionsguidessnap)
 - Added: [ViewOptions.guidesVisibility](../../other/viewoptions#viewoptionsguidesvisibility)
 - Added: [ViewOptions.rulers](../../other/viewoptions#viewoptionsrulers)
- Scripting access to add, remove, and set existing guides:
 - Added: [Item.addGuide()](../../item/item#itemaddguide)
 - Added: [Item.removeGuide()](../../item/item#itemremoveguide)
 - Added: [Item.setGuide()](../../item/item#itemsetguide)
- Scripting access to additional EGP property attributes:
 - Added: [CompItem.motionGraphicsTemplateControllerCount](../../item/compitem#compitemmotiongraphicstemplatecontrollercount)
 - Added: [CompItem.getMotionGraphicsTemplateControllerName()](../../item/compitem#compitemgetmotiongraphicstemplatecontrollername)
 - Added: [CompItem.setMotionGraphicsControllerName()](../../item/compitem#compitemsetmotiongraphicscontrollername)
 - Added: [Property.addToMotionGraphicsTemplateAs()](../../property/property#propertyaddtomotiongraphicstemplateas)

### [After Effects 16.0](https://helpx.adobe.com/after-effects/using/whats-new/2019.html) (October 2018)

- Scripting access to marker label and protectedRegion attributes:
 - Added: [MarkerValue.label](../../other/markervalue#markervaluelabel)
 - Added: [MarkerValue.protectedRegion](../../other/markervalue#markervalueprotectedregion)
- Scripting access to additional project color management settings:
 - Added: [Project.workingSpace](../../general/project#projectworkingspace)
 - Added: [Project.workingGamma](../../general/project#projectworkinggamma)
 - Added: [Project.listColorProfiles()](../../general/project#projectlistcolorprofiles)
 - Added: [Project.linearizeWorkingSpace](../../general/project#projectlinearizeworkingspace)
 - Added: [Project.compensateForSceneReferredProfiles](../../general/project#projectcompensateforscenereferredprofiles)
- Scripting access to the expression engine attribute:
 - Added: [Project.expressionEngine](../../general/project#projectexpressionengine)
- Added project method [Project.setDefaultImportFolder()](../../general/project#projectsetdefaultimportfolder), which sets the folder that will be shown in the file import dialog.
- Added app property [app.disableRendering](../../general/application#appdisablerendering), which disables rendering via the same mechanism as the Caps Lock key.

---

## After Effects 15

### [After Effects 15.1](https://helpx.adobe.com/after-effects/using/whats-new/2018.html) (April 2018)

- [Project.autoFixExpressions()](../../general/project#projectautofixexpressions) will now fix expression name references in single quotes (ex., ('Effect Name')), as well as double quotes.
- Fixes [CompItem.exportAsMotionGraphicsTemplate()](../../item/compitem#compitemexportasmotiongraphicstemplate) not returning a boolean as expected

### [After Effects 15.0](https://forums.adobe.com/docs/DOC-8872) (October 2017)

- Scripting Access to motion graphics templates:
 - Added: [CompItem.motionGraphicsTemplateName](../../item/compitem#compitemmotiongraphicstemplatename)
 - Added: [CompItem.exportAsMotionGraphicsTemplate()](../../item/compitem#compitemexportasmotiongraphicstemplate)
 - Added: [CompItem.openInEssentialGraphics()](../../item/compitem#compitemopeninessentialgraphics)
 - Added: [Property.addToMotionGraphicsTemplate()](../../property/property#propertyaddtomotiongraphicstemplate)
 - Added: [Property.canAddToMotionGraphicsTemplate()](../../property/property#propertycanaddtomotiongraphicstemplate)

---

## After Effects 14

### [After Effects 14.2.1 (CC 2017.2)](https://blogs.adobe.com/creativecloud/a-june-2017-update-to-after-effects-cc-is-now-available/) (June 2017)

- Buttons in ScriptUI panels have been reverted to the rectangular appearance seen in After Effects 14.1 and previous releases.
- The [AVItem.setProxyToNone()](../../item/avitem#avitemsetproxytonone) scripting method no longer fails with an error message, "After Effects error: AEGP trying to add invalid footage".
- The [System.callSystem()](../../general/system#systemcallsystem) scripting method now waits for all tasks called by the command to complete, instead of failing when the command takes a long time to complete.

### [After Effects 14.2 (CC 2017.1)](https://blogs.adobe.com/creativecloud/after-effects-cc-april-2017-in-depth-scripting-improvements/) (April 2017)

- Scripting Access to text leading:
 - Added: [TextDocument.leading](../../text/textdocument#textdocumentleading)
- Scripting Access to Team Projects (Beta):
 - Added: [Project.newTeamProject()](../../general/project#projectnewteamproject)
 - Added: [Project.openTeamProject()](../../general/project#projectopenteamproject)
 - Added: [Project.shareTeamProject()](../../general/project#projectshareteamproject)
 - Added: [Project.syncTeamProject()](../../general/project#projectsyncteamproject)
 - Added: [Project.closeTeamProject()](../../general/project#projectcloseteamproject)
 - Added: [Project.convertTeamProjectToProject()](../../general/project#projectconvertteamprojecttoproject)
 - Added: [Project.listTeamProjects()](../../general/project#projectlistteamprojects)
 - Added: [Project.isTeamProjectOpen()](../../general/project#projectisteamprojectopen)
 - Added: [Project.isAnyTeamProjectOpen()](../../general/project#projectisanyteamprojectopen)
 - Added: [Project.isTeamProjectEnabled()](../../general/project#projectisteamprojectenabled)
 - Added: [Project.isLoggedInToTeamProject()](../../general/project#projectisloggedintoteamproject)
 - Added: [Project.isSyncCommandEnabled()](../../general/project#projectissynccommandenabled)
 - Added: [Project.isShareCommandEnabled()](../../general/project#projectissharecommandenabled)
 - Added: [Project.isResolveCommandEnabled()](../../general/project#projectisresolvecommandenabled)
 - Added: [Project.resolveConflict()](../../general/project#projectresolveconflict)
- Drop-down menus in ScriptUI panels are no longer clipped on HiDPI displays on Windows.
- The appearance of buttons, sliders, disclosure triangles ("twirly arrow"), scroll bar, progress bar, radio buttons, and checkboxes in ScriptUI embedded panels have been updated to match the appearance of After Effects native controls.
- After Effects no longer crashes when the [AVLayer.compPointToSource()](../../layer/avlayer#avlayercomppointtosource) scripting method is used with a 3D text layer.
- The match name of the Fast Box Blur effect is "ADBE Box Blur2". The older match name "ADBE Box Blur" will continue to work: when used to add the effect, "ADBE Box Blur" will apply the Fast Box Blur effect, but with the older name "Box Blur"; the Iterations parameter will be set to the new default of 3.

### [After Effects 14.0 (CC 2017)](https://forums.adobe.com/message/9108589) (November 2016)

- Scripting Access to Tools:
 - Added: [Project.toolType](../../general/project#projecttooltype)
- Scripting Access to Composition Markers:
 - Added: [CompItem.markerProperty](../../item/compitem#compitemmarkerproperty)
- Scripting Access to Queue in AME:
 - Added: [RenderQueue.queueInAME()](../../renderqueue/renderqueue#renderqueuequeueiname)
- Scripting Access to Available GPU Acceleration Options:
 - Added: [app.availableGPUAccelTypes](../../general/application#appavailablegpuacceltypes)

---

## After Effects 13

### [After Effects 13.8 (CC 2015.3)](https://blogs.adobe.com/creativecloud/after-effects-cc-2015-3-in-depth-gpu-accelerated-effects/) (June 2016)

- Enable GPU effect rendering via scripting:
 - Added: [Project.gpuAccelType](../../general/project#projectgpuacceltype)
- New Gaussian Blur effect added w/ matchname `ADBE Gaussian Blur 2`

### [After Effects 13.6 (CC 2015)](https://blogs.adobe.com/creativecloud/whats-new-and-changed-in-the-upcoming-update-to-after-effects-cc-2015/) (November 2015)

- Scripting access to text baselines:
 - Added: [baselineLocs](../../text/textdocument#textdocumentbaselinelocs)
- New scripting method to generate random numbers:
 - Added: [generateRandomNumber()](../../general/globals#generaterandomnumber)
- Using the [copyToComp()](../../layer/layer#layercopytocomp) scripting method no longer causes After Effects to crash when the layer has a parent.
- The [valueAtTime()](../../property/property#propertyvalueattime) scripting method now waits for time-intensive expressions, like `sampleImage`, to finish evaluating before it returns the result.
- ScriptUI panels now display and resize correctly on high-DPI displays on Windows.
- After Effects no longer crashes when you click OK or Cancel buttons in a scriptUI dialog with tabbed panels.

### [After Effects 13.2 (CC 2014.2)](https://blogs.adobe.com/creativecloud/after-effects-cc-2014-2-13-2/) (December 2014)

- Scripting improvements for text layers (read-only):
 - Returns boolean value:
 - Added: [fauxBold](../../text/textdocument#textdocumentfauxbold)
 - Added: [fauxItalic](../../text/textdocument#textdocumentfauxitalic)
 - Added: [allCaps](../../text/textdocument#textdocumentallcaps)
 - Added: [smallCaps](../../text/textdocument#textdocumentsmallcaps)
 - Added: [superscript](../../text/textdocument#textdocumentsuperscript)
 - Added: [subscript](../../text/textdocument#textdocumentsubscript)
 - Returns float:
 - Added: [verticalScale](../../text/textdocument#textdocumentverticalscale)
 - Added: [horizontalScale](../../text/textdocument#textdocumenthorizontalscale)
 - Added: [baselineShift](../../text/textdocument#textdocumentbaselineshift)
 - Added: [tsume](../../text/textdocument#textdocumenttsume)
 - Returns array of ([X,Y]) position coordinates (paragraph text layers only):
 - Added: [boxTextPos](../../text/textdocument#textdocumentboxtextpos)
- Layer space / comp space conversion:
 - Added: [sourcePointToComp()](../../layer/avlayer#avlayersourcepointtocomp)
 - Added: [compPointToSource()](../../layer/avlayer#avlayercomppointtosource)

### [After Effects 13.1 (CC 2014.1)](https://blogs.adobe.com/creativecloud/after-effects-cc-2014-1-13-1/) (September 2014)

- Scripting improvements for text layers (read-only):
 - returns string:
 - Added: [fontLocation](../../text/textdocument#textdocumentfontlocation)
 - Added: [fontStyle](../../text/textdocument#textdocumentfontstyle)
 - Added: [fontFamily](../../text/textdocument#textdocumentfontfamily)
- "Use Legacy UI" toggle implemented

---

### [After Effects 13.0 (CC 2014)](https://blogs.adobe.com/creativecloud/new-changed-after-effects-cc-2014/) (June 2014)

- Scripting access to render settings and output module settings:
 - Added: RenderQueueItem object [getSetting](../../renderqueue/renderqueueitem#renderqueueitemgetsetting), [setSetting](../../renderqueue/renderqueueitem#renderqueueitemsetsetting) methods
 - Added: RenderQueueItem object [getSettings](../../renderqueue/renderqueueitem#renderqueueitemgetsettings), [setSettings](../../renderqueue/renderqueueitem#renderqueueitemsetsettings) methods
 - Added: OutputModule object [getSetting](../../renderqueue/outputmodule#outputmodulegetsetting), [setSetting](../../renderqueue/outputmodule#outputmodulesetsetting) methods
 - Added: OutputModule object [getSettings](../../renderqueue/outputmodule#outputmodulegetsettings), [setSettings](../../renderqueue/outputmodule#outputmodulesetsettings) methods
- Fetch project item by id: [Project.itemByID()](../../general/project#projectitembyid)
- CEP panels implemented

---

## After Effects 12

### [After Effects 12.0 (CC)](https://blogs.adobe.com/creativecloud/scripting-changes-in-after-effects-cc-12-0-12-2/) (June 2013)

- Access to effect's internal version string:
 - Added: Application effects object's version attribute, see [app.effects](../../general/application#appeffects)
- Ability to get and set preview mode:
 - Added: [ViewOptions.fastPreview](../../other/viewoptions#viewoptionsfastpreview)
- Access to layer sampling method (see [samplingQuality](../../layer/avlayer#avlayersamplingquality))
- Changed preference and settings methods (see [Settings object](../../other/settings))
- ScriptUI is now based on the same controls as the main application.

---

## After Effects 11

### [After Effects 11.0 (CS6)](https://web.archive.org/web/20120623073355/https://blogs.adobe.com/toddkopriva/2012/06/scripting-changes-in-after-effects-cs6-plus-new-scripting-guide.html/) (April 2012)

- Added: Access to [Viewer object](../../other/viewer) object and controls:
 - Added: [app.activeViewer](../../general/application#appactiveviewer)
 - Added: [AVLayer.openInViewer()](../../layer/avlayer#avlayeropeninviewer) to open a layer in the layer viewer
 - Added: [CompItem.openInViewer()](../../item/compitem#compitemopeninviewer) to open a composition in the composition viewer
 - Added: [FootageItem.openInViewer()](../../item/footageitem#footageitemopeninviewer) to open a footage item in the footage viewer
- Added: [Property.canSetExpression](../../property/property#propertycansetexpression)
- Added: [AVLayer.environmentLayer](../../layer/avlayer#avlayerenvironmentlayer)
- Added: [MaskPropertyGroup.maskFeatherFalloff](../../property/maskpropertygroup#maskpropertygroupmaskfeatherfalloff)
- Access to Shape Feather properties via scripting:
 - Added: [Shape.featherSegLocs](../../other/shape#shapefeatherseglocs)
 - Added: [Shape.featherRelSegLocs](../../other/shape#shapefeatherrelseglocs)
 - Added: [Shape.featherRadii](../../other/shape#shapefeatherradii)
 - Added: [Shape.featherInterps](../../other/shape#shapefeatherinterps)
 - Added: [Shape.featherTensions](../../other/shape#shapefeathertensions)
 - Added: [Shape.featherTypes](../../other/shape#shapefeathertypes)
 - Added: [Shape.featherRelCornerAngles](../../other/shape#shapefeatherrelcornerangles)

---

## After Effects 10

### [After Effects 10.5 (CS5.5)](https://web.archive.org/web/20121022055915/http://blogs.adobe.com/toddkopriva/2008/12/after-effects-cs4-scripting-ch.html/) (April 2011)

- Added to the [Project object](../../general/project) object:
 - [Project.framesCountType](../../general/project#projectframescounttype)
 - [Project.feetFramesFilmType](../../general/project#projectfeetframesfilmtype)
 - [Project.framesUseFeetFrames](../../general/project#projectframesusefeetframes)
 - [Project.footageTimecodeDisplayStartType](../../general/project#projectfootagetimecodedisplaystarttype)
 - [Project.timeDisplayType](../../general/project#projecttimedisplaytype)
- Removed from the [Project object](../../general/project) object:
 - `timecodeDisplayType` attribute
 - `timecodeBaseType` attribute
 - `timecodeNTSCDropFrame` attribute
 - `timecodeFilmType` attribute
 - `TimecodeDisplayType` enum
 - `TimecodeFilmType` enum
 - `TimecodeBaseType` enum
- Added: [CompItem.dropFrame](../../item/compitem#compitemdropframe)
- Added support for Paragraph Box Text:
 - Added [LayerCollection.addBoxText()](../../layer/layercollection#layercollectionaddboxtext)
 - Added [TextDocument.boxText](../../text/textdocument#textdocumentboxtext)
 - Added [TextDocument.pointText](../../text/textdocument#textdocumentpointtext)
 - Added [TextDocument.boxTextSize](../../text/textdocument#textdocumentboxtextsize)
- Added [LightLayer.lightType](../../layer/lightlayer#lightlayerlighttype)

---

## After Effects 9

### [After Effects 9.0 (CS4)](https://web.archive.org/web/20121022055915/http://blogs.adobe.com/toddkopriva/2008/12/after-effects-cs4-scripting-ch.html/) (September 2008)

- Added: [app.isoLanguage](../../general/application#appisolanguage)
- Added: [MarkerValue.duration](../../other/markervalue#markervalueduration)
- Added: [OutputModule.includeSourceXMP](../../renderqueue/outputmodule#outputmoduleincludesourcexmp)
- Added: [Project.xmpPacket](../../general/project#projectxmppacket)
- Added the following Property methods and attributes related to the Separate Dimensions feature:
 - [Property.dimensionsSeparated](../../property/property#propertydimensionsseparated)
 - [Property.getSeparationFollower()](../../property/property#propertygetseparationfollower)
 - [Property.isSeparationFollower](../../property/property#propertyisseparationfollower)
 - [Property.isSeparationLeader](../../property/property#propertyisseparationleader)
 - [Property.separationDimension](../../property/property#propertyseparationdimension)
 - [Property.separationLeader](../../property/property#propertyseparationleader)
- Added [TextDocument object](../../text/textdocument) access, including:
 - Added: [TextDocument.applyFill](../../text/textdocument#textdocumentapplyfill)
 - Added: [TextDocument.applyStroke](../../text/textdocument#textdocumentapplystroke)
 - Added: [TextDocument.fillColor](../../text/textdocument#textdocumentfillcolor)
 - Added: [TextDocument.font](../../text/textdocument#textdocumentfont)
 - Added: [TextDocument.fontSize](../../text/textdocument#textdocumentfontsize)
 - Added: [TextDocument.justification](../../text/textdocument#textdocumentjustification)
 - Added: [TextDocument.resetCharStyle()](../../text/textdocument#textdocumentresetcharstyle)
 - Added: [TextDocument.resetParagraphStyle()](../../text/textdocument#textdocumentresetparagraphstyle)
 - Added: [TextDocument.strokeColor](../../text/textdocument#textdocumentstrokecolor)
 - Added: [TextDocument.strokeOverFill](../../text/textdocument#textdocumentstrokeoverfill)
 - Added: [TextDocument.strokeWidth](../../text/textdocument#textdocumentstrokewidth)
