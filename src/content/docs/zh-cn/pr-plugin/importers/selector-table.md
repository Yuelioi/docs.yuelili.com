---
title: 选择器表
---
# 选择器表

在为某个选择器实现处理程序之前，请确保它确实对您的导入器是必要的。许多选择器是可选的，仅在某些特殊需求时有用。

Synth 列指示该选择器是否适用于合成导入器。自定义导入器可以响应任何选择器。

| 选择器 | param1 | param2 | Synth |
| --- | --- | --- | --- |
| [imInit](../selector-descriptions#iminit) | [imImportInfoRec\*](../structure-descriptions#imimportinforec) | 未使用 | 是 |
| [imShutdown](../selector-descriptions#imshutdown) | 未使用 | 未使用 | 是 |
| [imGetIndFormat](../selector-descriptions#imgetindformat) | `(int) index` | [imIndFormatRec\*](../structure-descriptions#imindformatrec) | 是 |
| [imGetSupports8](../selector-descriptions#imgetsupports8) | 未使用 | 未使用 | 是 |
| [imGetSupports7](../selector-descriptions#imgetsupports7) | 未使用 | 未使用 | 是 |
| [imGetInfo8](../selector-descriptions#imgetinfo8) | [imFileAccessRec8\*](../structure-descriptions#imfileaccessrec8) | [imFileInfoRec8\*](../structure-descriptions#imfileinforec8) | 是 |
| [imCloseFile](../selector-descriptions#imclosefile) | [imFileRef\*](../structure-descriptions#imfileref) | `(void*) PrivateData**` | 否 |
| [imGetIndPixelFormat](../selector-descriptions#imgetindpixelformat) | `(int) index` | [imIndPixelFormatRec\*](../structure-descriptions#imindpixelformatrec) | 是 |
| [imGetPreferredFrameSize](../selector-descriptions#imgetpreferredframesize) | [imPreferredFrameSizeRec\*](../structure-descriptions#impreferredframesizerec) | 未使用 | 是 |
| [imSelectClipFrameDescriptor](../selector-descriptions#imselectclipframedescriptor) | [imFileRef](../structure-descriptions#imfileref) | [imClipFrameDescriptorRec\*](../structure-descriptions#imclipframedescriptorrec) | 是 |
| [imGetSourceVideo](../selector-descriptions#imgetsourcevideo) | [imFileRef](../structure-descriptions#imfileref) | [imSourceVideoRec\*](../structure-descriptions#imsourcevideorec) | 是 |
| [imCreateAsyncImporter](../selector-descriptions#imcreateasyncimporter) | [imAsyncImporterCreationRec\*](../structure-descriptions#imasyncimportercreationrec) | 未使用 | 是 |
| [imImportImage](../selector-descriptions#imimportimage) | [imFileRef](../structure-descriptions#imfileref) | [imImportImageRec\*](../structure-descriptions#imimportimagerec) | 是 |
| [imImportAudio7](../selector-descriptions#imimportaudio7) | [imFileRef](../structure-descriptions#imfileref) | [imImportAudioRec7\*](../structure-descriptions#imimportaudiorec7) | 是 |
| `imResetSequentialAudio` | [imFileRef](../structure-descriptions#imfileref) | [imImportAudioRec7\*](../structure-descriptions#imimportaudiorec7) | 是 |
| `imGetSequentialAudio` | [imFileRef](../structure-descriptions#imfileref) | [imImportAudioRec7\*](../structure-descriptions#imimportaudiorec7) | 是 |
| [imGetPrefs8](../selector-descriptions#imgetprefs8) | [imFileAccessRec8\*](../structure-descriptions#imfileaccessrec8) | [imGetPrefsRec\*](../structure-descriptions#imgetprefsrec) | 是 |
| [imGetEmbeddedLUT](../selector-descriptions#imgetembeddedlut) | `(int) index` | [imIndEmbeddedLUTRec\*](../structure-descriptions#embeddedlutrec) | 是 |

以下选择器是可选的，用于提供自定义文件处理：

| 选择器 | param1 | param2 | Synth |
| --- | --- | --- | --- |
| [imOpenFile8](../selector-descriptions#imopenfile8) | [imFileRef\*](../structure-descriptions#imfileref) | [imFileOpenRec8\*](../structure-descriptions#imfileopenrec8) | 否 |
| [imQuietFile](../selector-descriptions#imquietfile) | [imFileRef\*](../structure-descriptions#imfileref) | `(void*) PrivateData**` | 否 |
| [imSaveFile8](../selector-descriptions#imsavefile8) | [imSaveFileRec8\*](../structure-descriptions#imsavefilerec8) | 未使用 | 否 |
| [imDeleteFile](../selector-descriptions#imdeletefile) | [imDeleteFileRec\*](../structure-descriptions#imdeletefilerec) | 未使用 | 否 |

以下选择器是可选的，用于更好地支持使用项目管理器进行文件复制和修剪：

| 选择器 | param1 | param2 | Synth |
| --- | --- | --- | --- |
| [imCalcSize8](../selector-descriptions#imcalcsize8) | [imCalcSizeRec\*](../structure-descriptions#imcalcsizerec) | [imFileAccessRec8\*](../structure-descriptions#imfileaccessrec8) | 否 |
| [imCheckTrim8](../selector-descriptions#imchecktrim8) | [imCheckTrimRec\*](../structure-descriptions#imchecktrimrec) | [imFileAccessRec8\*](../structure-descriptions#imfileaccessrec8) | 否 |
| [imTrimFile8](../selector-descriptions#imtrimfile8) | [imFileAccessRec8\*](../structure-descriptions#imfileaccessrec8) | [imTrimFileRec8\*](../structure-descriptions#imtrimfilerec8) | 否 |
| [imCopyFile](../selector-descriptions#imcopyfile) | [imCopyFileRec\*](../structure-descriptions#imcopyfilerec) | 未使用 | 否 |
| [imRetargetAccelerator](../selector-descriptions#imretargetaccelerator) | [imAcceleratorRec\*](../structure-descriptions#imacceleratorrec) | 未使用 | 否 |
| [imQueryDestinationPath](../selector-descriptions#imquerydestinationpath) | [imQueryDestinationPathRec\*](../structure-descriptions#imquerydestinationpathrec) | 未使用 | 否 |

以下选择器用于嵌入式隐藏字幕支持：

| 选择器 | param1 | param2 | Synth |
| --- | --- | --- | --- |
| [imInitiateAsyncClosedCaptionScan](../selector-descriptions#iminitiateasyncclosedcaptionscan) | [imFileRef](../structure-descriptions#imfileref) | [imInitiateAsyncClosedCaptionScanRec\*](../structure-descriptions#iminitiateasyncclosedcaptionscanrec) | 否 |
| [imGetNextClosedCaption](../selector-descriptions#imgetnextclosedcaption) | [imFileRef](../structure-descriptions#imfileref) | [imGetNextClosedCaptionRec\*](../structure-descriptions#imgetnextclosedcaptionrec) | 否 |
| [imCompleteAsyncClosedCaptionScan](../selector-descriptions#imcompleteasyncclosedcaptionscan) | [imFileRef](../structure-descriptions#imfileref) | [imCompleteAsyncClosedCaptionScanRec\*](../structure-descriptions#imcompleteasyncclosedcaptionscanrec) | 否 |

以下选择器是可选的，对部分导入器有用：

| 选择器 | param1 | param2 | Synth |
| --- | --- | --- | --- |
| [imAnalysis](../selector-descriptions#imanalysis) | [imFileRef](../structure-descriptions#imfileref) | [imAnalysisRec\*](../structure-descriptions#imanalysisrec) | 是 |
| [imDataRateAnalysis](../selector-descriptions#imdatarateanalysis) | [imFileRef](../structure-descriptions#imfileref) | [imDataRateAnalysisRec\*](../structure-descriptions#imdatarateanalysisrec) | 否 |
| [imGetTimeInfo8](../selector-descriptions#imgettimeinfo8) | [imFileRef](../structure-descriptions#imfileref) | [imTimeInfoRec8\*](../structure-descriptions#imtimeinforec8) | 否 |
| [imSetTimeInfo8](../selector-descriptions#imsettimeinfo8) | [imFileRef](../structure-descriptions#imfileref) | [imTimeInfoRec8\*](../structure-descriptions#imtimeinforec8) | 否 |
| [imGetFileAttributes](../selector-descriptions#imgetfileattributes) | [imFileAttributesRec\*](../structure-descriptions#imfileattributesrec) | 未使用 | |
| [imGetMetaData](../selector-descriptions#imgetmetadata) | [imFileRef](../structure-descriptions#imfileref) | [imMetaDataRec\*](../structure-descriptions#immetadatarec) | 否 |
| [imSetMetaData](../selector-descriptions#imsetmetadata) | [imFileRef](../structure-descriptions#imfileref) | [imMetaDataRec\*](../structure-descriptions#immetadatarec) | 否 |
| `imGetRollCrawlInfo` | `imRollCrawlInfoRec*` | 未使用 | 是 |
| `imRollCrawlRenderPage` | `rollCrawlRenderRec*` | 未使用 | 是 |
| [imDeferredProcessing](../selector-descriptions#imdeferredprocessing) | [imDeferredProcessingRec\*](../structure-descriptions#imdeferredprocessingrec) | 未使用 | 否 |
| [imGetAudioChannelLayout](../selector-descriptions#imgetaudiochannellayout) | [imFileRef](../structure-descriptions#imfileref) | [imGetAudioChannelLayoutRec\*](../structure-descriptions#imgetaudiochannellayoutrec) | 是 |
| [imGetPeakAudio](../selector-descriptions#imgetpeakaudio) | [imFileRef](../structure-descriptions#imfileref) | [imPeakAudioRec\*](../structure-descriptions#impeakaudiorec) | 是 |
| [imQueryContentState](../selector-descriptions#imquerycontentstate) | [imQueryContentStateRec\*](../structure-descriptions#imquerycontentstaterec) | 未使用 | 否 |
| [imQueryStreamLabel](../selector-descriptions#imquerystreamlabel) | [imQueryStreamLabelRec\*](../structure-descriptions#imquerystreamlabelrec) | 未使用 | 是 |
| [imGetIndColorSpace](../selector-descriptions#imgetindcolorspace) | `(int) index` | [imIndColorSpaceRec\*](../structure-descriptions#imindcolorspacerec) | 是 |

仅在 After Effects 中使用：

| 选择器 | param1 | param2 | Synth |
| --- | --- | --- | --- |
| [imGetSubTypeNames](../selector-descriptions#imgetsubtypenames) | `(csSDK_int32) fileType` | [imSubTypeDescriptionRec\*](../structure-descriptions#imsubtypedescriptionrec) | 否 |
| [imGetIndColorProfile](../selector-descriptions#imgetindcolorprofile) | `(int) index` | [imIndColorProfileRec\*](../structure-descriptions#imindcolorprofilerec) | 否 |
| [imQueryInputFileList](../selector-descriptions#imqueryinputfilelist) | [imQueryInputFileListRec\*](../structure-descriptions#imqueryinputfilelistrec) | 未使用 | 否 |
