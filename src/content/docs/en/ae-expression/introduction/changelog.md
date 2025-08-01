---
title: changelog
---
# Changelog

What's new and changed for expressions?

---

## [After Effects 25.0](https://helpx.adobe.com/after-effects/using/whats-new/2025.html) (October 2024)

Added many new text style properties and methods for both characters and paragraphs, as well as the ability to control per-character styling through expressions.

- New attributes of .sourceText:
 - Added: [SourceText.isPointText](../../text/sourcetext#sourcetextispointtext)
 - Added: [SourceText.isParagraphText](../../text/sourcetext#sourcetextisparagraphtext)
 - Added: [SourceText.isHorizontalText](../../text/sourcetext#sourcetextishorizontaltext)
 - Added: [SourceText.isVerticalText](../../text/sourcetext#sourcetextisverticaltext)
- New per-character style properties and methods:
 - Added: [TextStyle.replaceText()](../../text/style#textstylereplacetext)
 - Added: [TextStyle.baselineDirection](../../text/style#textstylebaselinedirection)
 - Added: [TextStyle.setBaselineDirection()](../../text/style#textstylesetbaselinedirection)
 - Added: [TextStyle.baselineOption](../../text/style#textstylebaselineoption)
 - Added: [TextStyle.setBaselineOption()](../../text/style#textstylesetbaselineoption)
 - Added: [TextStyle.digitSet](../../text/style#textstyledigitset)
 - Added: [TextStyle.setDigitSet()](../../text/style#textstylesetdigitset)
 - Added: [TextStyle.isLigature](../../text/style#textstyleisligature)
 - Added: [TextStyle.setLigature()](../../text/style#textstylesetligature)
 - Added: [TextStyle.tsume](../../text/style#textstyletsume)
 - Added: [TextStyle.setTsume()](../../text/style#textstylesettsume)
 - Added: [TextStyle.verticalScaling](../../text/style#textstyleverticalscaling)
 - Added: [TextStyle.setVerticalScaling()](../../text/style#textstylesetverticalscaling)
 - Added: [TextStyle.horizontalScaling](../../text/style#textstylehorizontalscaling)
 - Added: [TextStyle.setHorizontalScaling()](../../text/style#textstylesethorizontalscaling)
 - Added: [TextStyle.lineJoin](../../text/style#textstylelinejoin)
 - Added: [TextStyle.setLineJoin()](../../text/style#textstylesetlinejoin)
- New paragraph style properties and methods:
 - Added: [TextStyle.direction](../../text/style#textstyledirection)
 - Added: [TextStyle.setDirection()](../../text/style#textstylesetdirection)
 - Added: [TextStyle.isEveryLineComposer](../../text/style#textstyleiseverylinecomposer)
 - Added: [TextStyle.setEveryLineComposer()](../../text/style#textstyleseteverylinecomposer)
 - Added: [TextStyle.firstLineIndent](../../text/style#textstylefirstlineindent)
 - Added: [TextStyle.setFirstLineIndent()](../../text/style#textstylesetfirstlineindent)
 - Added: [TextStyle.isHangingRoman](../../text/style#textstyleishangingroman)
 - Added: [TextStyle.setHangingRoman()](../../text/style#textstylesethangingroman)
 - Added: [TextStyle.justification](../../text/style#textstylejustification)
 - Added: [TextStyle.setJustification()](../../text/style#textstylesetjustification)
 - Added: [TextStyle.leadingType](../../text/style#textstyleleadingtype)
 - Added: [TextStyle.setLeadingType()](../../text/style#textstylesetleadingtype)
 - Added: [TextStyle.leftMargin](../../text/style#textstyleleftmargin)
 - Added: [TextStyle.setLeftMargin()](../../text/style#textstylesetleftmargin)
 - Added: [TextStyle.rightMargin](../../text/style#textstylerightmargin)
 - Added: [TextStyle.setRightMargin()](../../text/style#textstylesetrightmargin)
 - Added: [TextStyle.spaceAfter](../../text/style#textstylespaceafter)
 - Added: [TextStyle.setSpaceAfter()](../../text/style#textstylesetspaceafter)
 - Added: [TextStyle.spaceBefore](../../text/style#textstylespacebefore)
 - Added: [TextStyle.setSpaceBefore()](../../text/style#textstylesetspacebefore)
- Existing style methods updated to allow per-character styles:
 - Changed: [TextStyle.setFontSize()](../../text/style#textstylesetfontsize)
 - Changed: [TextStyle.setFont()](../../text/style#textstylesetfont)
 - Changed: [TextStyle.setFauxBold()](../../text/style#textstylesetfauxbold)
 - Changed: [TextStyle.setFauxItalic()](../../text/style#textstylesetfauxitalic)
 - Changed: [TextStyle.setAllCaps()](../../text/style#textstylesetallcaps)
 - Changed: [TextStyle.setSmallCaps()](../../text/style#textstylesetsmallcaps)
 - Changed: [TextStyle.setTracking()](../../text/style#textstylesettracking)
 - Changed: [TextStyle.setLeading()](../../text/style#textstylesetleading)
 - Changed: [TextStyle.setAutoLeading()](../../text/style#textstylesetautoleading)
 - Changed: [TextStyle.setBaselineShift()](../../text/style#textstylesetbaselineshift)
 - Changed: [TextStyle.setApplyFill()](../../text/style#textstylesetapplyfill)
 - Changed: [TextStyle.setFillColor()](../../text/style#textstylesetfillcolor)
 - Changed: [TextStyle.setApplyStroke()](../../text/style#textstylesetapplystroke)
 - Changed: [TextStyle.setStrokeColor()](../../text/style#textstylesetstrokecolor)
 - Changed: [TextStyle.setStrokeWidth()](../../text/style#textstylesetstrokewidth)

---

## [After Effects 17.7](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheFebruary2021releaseversion177) (Feb 2021)

- Fixed: An issue where expression edits made in the Graph Editor were not applied consistently.

---

## [After Effects 17.6](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheJanuary2021releaseversion176) (Jan 2021)

- Fixed: An issue that could cause an expression to be replaced instead of appending when using expression or property pick-whip.

---

## [After Effects 17.1.2](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheJuly2020releaseversion1712) (Jul 2020)

- Fixed: An issue where Markers could not be referenced by name in the JavaScript Expressions Engine.

---

## [After Effects 17.1](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheMay2020releaseversion171) (May 19 2020)

- Fixed: An issue with Expression editor to auto-complete 'timeToFrames' function.

---

## [After Effects 17.0.5](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheMarch2020releaseversion1705) (Mar 2020)

- Fixed: An issue where the Link Focus to Layer command produced an expression that did not work with the JavaScript expression engine.

---

## [After Effects 17.0.2](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheJanuary2020releaseversion1702) (Jan 2020)

- Fixed: An issue where wrong line numbers would be displayed related to errors in JavaScript expressions.

---

## [After Effects 17.0](https://helpx.adobe.com/after-effects/using/whats-new/2020.html) (Jan 24 2020)

- Implemented Dropdown Menu Expression Control
- Expression Editor improvements:
 - You can now use the new scrolling functionality to prevent the scroll from adjusting incorrectly when the box is resized by typing the return character.
 - Prevent numbers from matching in an autocomplete list if the variable begins with a number. Smarter autocomplete prevents from overriding closing brackets and quotes.
 - You can now scale font size for Hi-DPI displays.
 - Graph editor now commits changes in preferences for all the open graph editors.
 - If you enable syntax highlight, the folding icon buttons in the UI now respect the default and background color, or the line numbers color and background color.
- Expression performance improvements:
 - After Effects now attempts to detect an expression that does not change throughout a comp and calculates the expression only once. Load your favorite expression-filled comp and experience the improved performance.
 - Any expression using [posterizeTime()](../../general/global#posterizetime) now calculates only once for the entire comp, not on every frame.
- Added: Extended expressions access to Text properties.
 - Added: [Text.Font...](../../text/text#textfont)
 - Added: [Source Text](../../text/sourcetext)
 - Added: [Text Style](../../text/style)

---

## [After Effects 16.1.3](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheearlierversionsofAfterEffects) (Sep 2019)

- Fixed: Indentation of curly braces on new lines could be incorrect in the Expressions editor.

---

## [After Effects 16.1.2](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheearlierversionsofAfterEffects) (June 2019)

- Fixed: After Effects crashes when you close a project that has an expression containing an error.
- Fixed: Expression error messages could be truncated in the error ribbon if there were multiple lines of error text to show.
- Fixed: The property, this_Layer had stopped working when using the Legacy ExtendScript expression engine.
- Fixed: Crash when switching the project level expression engine from JavaScript to Legacy ExtendScript.
- Fixed: Crash with expressions that contain calls to Date.toLocaleString().
- Fixed: Crash when editing expressions in the Graph Editor expression field when AutoComplete is disabled.

---

## [After Effects 16.1 (CC 19)](https://helpx.adobe.com/after-effects/kb/fixed-issues.html#BugsfixedintheearlierversionsofAfterEffects) (Apr 2 2019)

- Implemented new expression editor
- Fixed: The JavaScript expressions engine does not generate the same random number results as the Legacy ExtendScript engine.
- Fixed: When an expression references the name of a layer in a string or in a Source Text property, the name of the layer is not returned. Instead, it returns [Object].
- Fixed: The [sampleImage()](../../layer/general#layersampleimage) expression method returns the wrong value if the post-expression value of the property is read by a ScriptUI panel.
- Fixed: Applying the [createPath()](../../objects/path-property#pathpropertycreatepath) expression via the Expression Language menu autofills the (is_Closed) parameter as deprecated snake case instead of camel caseisClosed.
- Fixed: Renaming an effect that is referenced by an expression causes the expression to incorrectly update references to that effect properties when those properties have the same name as the effect.
- Fixed: The Link Focus Distance to Layer, Link Focus Distance to Point of Interest, Create Stereo 3D Rig, and Create Orbit Null commands create expressions that are incompatible with the JavaScript expression engine.
- Fixed: Specific complex, multi-composition expressions cause fast flickering of the expression error warning banner and icons. Note that to fix this, there is a small slowdown in expression evaluation speed for these expressions.

---

## [After Effects 16.0 (CC 19)](https://helpx.adobe.com/after-effects/using/whats-new/2019.html) (Oct 15 2018)

- Implemented new Javascript engine
- Added: [hexToRgb](../../general/color-conversion#hextorgb)
- Added: [marker protectedRegion](../../objects/markerkey#markerkeyprotectedregion) property

---

## [After Effects 15.1.2](https://helpx.adobe.com/after-effects/kb/bug-fixes-in-after-effects-cc.html) (Jul 16 2018)

- Fixed: If your project contains multiple master properties by the same name, the expressions that refer to the master properties evaluate incorrectly.
- Fixed: The Property Link pick whip incorrectly writes a self-referential expression for the other selected properties.

---

## [After Effects 15.1](https://helpx.adobe.com/after-effects/using/whats-new/2018.html#AfterEffectsCCApril2018version151release) (Apr 3 2018)

- Added: Property Link pick whip
- Added: Support for custom expression function libraries
- Added: Expression access to [Project](../../objects/project)
 - Added: [Project.fullPath](../../objects/project#projectfullpath)
 - Added: [Project.bitsPerChannel](../../objects/project#projectbitsperchannel)
 - Added: [Project.linearBlending](../../objects/project#projectlinearblending)

---

## [After Effects 15.0 (CC)](https://community.adobe.com/t5/after-effects/expression-and-scripting-improvements-in-after-effects-october-2017-pdf/td-p/4787866) (Oct 18 2017)

- Added: Expression access to data in JSON files
 - Added: [footage sourceText](../../objects/footage#footagesourcetext) attribute
 - Added: [footage sourceData](../../objects/footage#footagesourcedata) attribute
 - Added: [footage dataValue](../../objects/footage#footagedatavalue) method
 - Added: [footage dataKeyCount](../../objects/footage#footagedatakeycount) method
 - Added: [footage dataKeyTimes](../../objects/footage#footagedatakeytimes) method
 - Added: [footage dataKeyValues](../../objects/footage#footagedatakeyvalues) method
- Added: Expression access to path points on masks, Bezier shapes, and brush strokes
 - Added: [path points](../../objects/path-property#pathpropertypoints) method
 - Added: [path inTangents](../../objects/path-property#pathpropertyintangents) method
 - Added: [path outTangents](../../objects/path-property#pathpropertyouttangents) method
 - Added: [path isClosed](../../objects/path-property#pathpropertyisclosed) method
 - Added: [path pointOnPath](../../objects/path-property#pathpropertypointonpath) method
 - Added: [path tangentOnPath](../../objects/path-property#pathpropertytangentonpath) method
 - Added: [path normalOnPath](../../objects/path-property#pathpropertynormalonpath) method
 - Added: [path createPath](../../objects/path-property#pathpropertycreatepath) method

---

## [After Effects 13.6 (CC 2015)](https://helpx.adobe.com/after-effects/kb/ae-13-6.html) (Nov 30 2015)

- Improved performance of expressions on time-remapped layers. This also reduces rendering time for audio on time-remapped layers with expressions.
- Fixed: Changing the source text of a text layer no longer causes expressions to fail when the name of the text layer was referenced.
- Fixed: After Effects no longer crashes when the graph editor is displayed while processing an time remapping expression.

---

## [After Effects 13.5 (CC 2015)](https://helpx.adobe.com/after-effects/kb/what-s-new-and-changed-in-after-effects-cc-2015--13-5-.html) (Jun 15 2015)

- More efficient expression evaluation
- Added: Expression warning banner

---

## [After Effects 13.2 (CC 2014.2)](https://helpx.adobe.com/ca/after-effects/using/whats-new-2014.html) (Dec 16 2014)

- Added: [sourceRectAtTime()](../../layer/sub-objects#layersourcerectattime) method
- Fixed: [sampleImage()](../../layer/general#layersampleimage) in an expression no longer disables multiprocessing

---

## [After Effects 12.1 (CC)](https://helpx.adobe.com/after-effects/using/whats-new-12-1.html/) (Sep 8 2013)

- Added iris and highlight properties for camera layers to the expression language menu
- - Added: [Camera.irisShape](../../objects/camera#camerairisshape)
 - Added: [Camera.irisRotation](../../objects/camera#camerairisrotation)
 - Added: [Camera.irisRoundness](../../objects/camera#camerairisroundness)
 - Added: [Camera.irisAspectRatio](../../objects/camera#camerairisaspectratio)
 - Added: [Camera.irisDiffractionFringe](../../objects/camera#camerairisdiffractionfringe)
 - Added: [Camera.highlightGain](../../objects/camera#camerahighlightgain)
 - Added: [Camera.highlightThreshold](../../objects/camera#camerahighlightthreshold)
 - Added: [Camera.highlightSaturation](../../objects/camera#camerahighlightsaturation)

---

## [After Effects 10.5 (CS5.5)](https://helpx.adobe.com/ro/after-effects/user-guide.html/ro/after-effects/using/expression-language-reference.ug.html/) (Apr 11 2011)

- Added: [Footage.ntscDropFrame](../../objects/footage#footagentscdropframe)
- Added: ntscDropFrame argument to [timeToCurrentFormat()](../../general/time-conversion#timetocurrentformat)
- Added: [Layer.sourceTime()](../../layer/sub-objects#layersourcetime)

---

## [After Effects 5.5](https://en.wikipedia.org/wiki/Adobe_After_Effects#History/) (Jan 7 2002)

- Added: Looping via expressions
- Added: Expression controllers

---

## [After Effects 5.0](https://en.wikipedia.org/wiki/Adobe_After_Effects#History/) (Apr 2001)

- Expressions first added
