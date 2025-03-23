---
title: 选择器表
---
# 选择器表

在为某个选择器实现处理程序之前，请确保它确实对您的导入器是必要的。许多选择器是可选的，仅在某些特殊需求时有用。

Synth 列指示该选择器是否适用于合成导入器。自定义导入器可以响应任何选择器。

|                                      选择器                                      |                                       param1                                       |                                      param2                                      | Synth |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ----- |
| [imInit](selector-descriptions.md#iminit)                                        | [imImportInfoRec\*](structure-descriptions.md#imimportinforec)                    | 未使用                                                                           | 是    |
| [imShutdown](selector-descriptions.md#imshutdown)                                | 未使用                                                                            | 未使用                                                                           | 是    |
| [imGetIndFormat](selector-descriptions.md#imgetindformat)                        | `(int) index`                                                                     | [imIndFormatRec\*](structure-descriptions.md#imindformatrec)                     | 是    |
| [imGetSupports8](selector-descriptions.md#imgetsupports8)                        | 未使用                                                                            | 未使用                                                                           | 是    |
| [imGetSupports7](selector-descriptions.md#imgetsupports7)                        | 未使用                                                                            | 未使用                                                                           | 是    |
| [imGetInfo8](selector-descriptions.md#imgetinfo8)                                | [imFileAccessRec8\*](structure-descriptions.md#imfileaccessrec8)                  | [imFileInfoRec8\*](structure-descriptions.md#imfileinforec8)                     | 是    |
| [imCloseFile](selector-descriptions.md#imclosefile)                              | [imFileRef\*](structure-descriptions.md#imfileref)                                | `(void*) PrivateData**`                                                          | 否    |
| [imGetIndPixelFormat](selector-descriptions.md#imgetindpixelformat)              | `(int) index`                                                                     | [imIndPixelFormatRec\*](structure-descriptions.md#imindpixelformatrec)           | 是    |
| [imGetPreferredFrameSize](selector-descriptions.md#imgetpreferredframesize)      | [imPreferredFrameSizeRec\*](structure-descriptions.md#impreferredframesizerec)    | 未使用                                                                           | 是    |
| [imSelectClipFrameDescriptor](selector-descriptions.md#imselectclipframedescriptor) | [imFileRef](structure-descriptions.md#imfileref)                                  | [imClipFrameDescriptorRec\*](structure-descriptions.md#imclipframedescriptorrec) | 是    |
| [imGetSourceVideo](selector-descriptions.md#imgetsourcevideo)                    | [imFileRef](structure-descriptions.md#imfileref)                                  | [imSourceVideoRec\*](structure-descriptions.md#imsourcevideorec)                 | 是    |
| [imCreateAsyncImporter](selector-descriptions.md#imcreateasyncimporter)          | [imAsyncImporterCreationRec\*](structure-descriptions.md#imasyncimportercreationrec) | 未使用                                                                           | 是    |
| [imImportImage](selector-descriptions.md#imimportimage)                          | [imFileRef](structure-descriptions.md#imfileref)                                  | [imImportImageRec\*](structure-descriptions.md#imimportimagerec)                 | 是    |
| [imImportAudio7](selector-descriptions.md#imimportaudio7)                        | [imFileRef](structure-descriptions.md#imfileref)                                  | [imImportAudioRec7\*](structure-descriptions.md#imimportaudiorec7)               | 是    |
| `imResetSequentialAudio`                                                         | [imFileRef](structure-descriptions.md#imfileref)                                  | [imImportAudioRec7\*](structure-descriptions.md#imimportaudiorec7)               | 是    |
| `imGetSequentialAudio`                                                           | [imFileRef](structure-descriptions.md#imfileref)                                  | [imImportAudioRec7\*](structure-descriptions.md#imimportaudiorec7)               | 是    |
| [imGetPrefs8](selector-descriptions.md#imgetprefs8)                              | [imFileAccessRec8\*](structure-descriptions.md#imfileaccessrec8)                  | [imGetPrefsRec\*](structure-descriptions.md#imgetprefsrec)                       | 是    |
| [imGetEmbeddedLUT](selector-descriptions.md#imgetembeddedlut)                    | `(int) index`                                                                     | [imIndEmbeddedLUTRec\*](structure-descriptions.md#embeddedlutrec)                | 是    |

以下选择器是可选的，用于提供自定义文件处理：

|                       选择器                       |                             param1                             |                            param2                            | Synth |
| -------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------ | ----- |
| [imOpenFile8](selector-descriptions.md#imopenfile8) | [imFileRef\*](structure-descriptions.md#imfileref)             | [imFileOpenRec8\*](structure-descriptions.md#imfileopenrec8) | 否    |
| [imQuietFile](selector-descriptions.md#imquietfile) | [imFileRef\*](structure-descriptions.md#imfileref)             | `(void*) PrivateData**`                                      | 否    |
| [imSaveFile8](selector-descriptions.md#imsavefile8) | [imSaveFileRec8\*](structure-descriptions.md#imsavefilerec8)   | 未使用                                                       | 否    |
| [imDeleteFile](selector-descriptions.md#imdeletefile) | [imDeleteFileRec\*](structure-descriptions.md#imdeletefilerec) | 未使用                                                       | 否    |

以下选择器是可选的，用于更好地支持使用项目管理器进行文件复制和修剪：

|                                 选择器                                 |                                       param1                                       |                              param2                              | Synth |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----- |
| [imCalcSize8](selector-descriptions.md#imcalcsize8)                    | [imCalcSizeRec\*](structure-descriptions.md#imcalcsizerec)                         | [imFileAccessRec8\*](structure-descriptions.md#imfileaccessrec8) | 否    |
| [imCheckTrim8](selector-descriptions.md#imchecktrim8)                  | [imCheckTrimRec\*](structure-descriptions.md#imchecktrimrec)                       | [imFileAccessRec8\*](structure-descriptions.md#imfileaccessrec8) | 否    |
| [imTrimFile8](selector-descriptions.md#imtrimfile8)                    | [imFileAccessRec8\*](structure-descriptions.md#imfileaccessrec8)                   | [imTrimFileRec8\*](structure-descriptions.md#imtrimfilerec8)     | 否    |
| [imCopyFile](selector-descriptions.md#imcopyfile)                      | [imCopyFileRec\*](structure-descriptions.md#imcopyfilerec)                         | 未使用                                                           | 否    |
| [imRetargetAccelerator](selector-descriptions.md#imretargetaccelerator) | [imAcceleratorRec\*](structure-descriptions.md#imacceleratorrec)                   | 未使用                                                           | 否    |
| [imQueryDestinationPath](selector-descriptions.md#imquerydestinationpath) | [imQueryDestinationPathRec\*](structure-descriptions.md#imquerydestinationpathrec) | 未使用                                                           | 否    |

以下选择器用于嵌入式隐藏字幕支持：

|                                           选择器                                           |                      param1                      |                                                 param2                                                 | Synth |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ----- |
| [imInitiateAsyncClosedCaptionScan](selector-descriptions.md#iminitiateasyncclosedcaptionscan) | [imFileRef](structure-descriptions.md#imfileref) | [imInitiateAsyncClosedCaptionScanRec\*](structure-descriptions.md#iminitiateasyncclosedcaptionscanrec) | 否    |
| [imGetNextClosedCaption](selector-descriptions.md#imgetnextclosedcaption)                   | [imFileRef](structure-descriptions.md#imfileref) | [imGetNextClosedCaptionRec\*](structure-descriptions.md#imgetnextclosedcaptionrec)                     | 否    |
| [imCompleteAsyncClosedCaptionScan](selector-descriptions.md#imcompleteasyncclosedcaptionscan) | [imFileRef](structure-descriptions.md#imfileref) | [imCompleteAsyncClosedCaptionScanRec\*](structure-descriptions.md#imcompleteasyncclosedcaptionscanrec) | 否    |

以下选择器是可选的，对部分导入器有用：

|                                  选择器                                  |                                     param1                                     |                                        param2                                        | Synth |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ----- |
| [imAnalysis](selector-descriptions.md#imanalysis)                        | [imFileRef](structure-descriptions.md#imfileref)                               | [imAnalysisRec\*](structure-descriptions.md#imanalysisrec)                           | 是    |
| [imDataRateAnalysis](selector-descriptions.md#imdatarateanalysis)        | [imFileRef](structure-descriptions.md#imfileref)                               | [imDataRateAnalysisRec\*](structure-descriptions.md#imdatarateanalysisrec)           | 否    |
| [imGetTimeInfo8](selector-descriptions.md#imgettimeinfo8)                | [imFileRef](structure-descriptions.md#imfileref)                               | [imTimeInfoRec8\*](structure-descriptions.md#imtimeinforec8)                         | 否    |
| [imSetTimeInfo8](selector-descriptions.md#imsettimeinfo8)                | [imFileRef](structure-descriptions.md#imfileref)                               | [imTimeInfoRec8\*](structure-descriptions.md#imtimeinforec8)                         | 否    |
| [imGetFileAttributes](selector-descriptions.md#imgetfileattributes)      | [imFileAttributesRec\*](structure-descriptions.md#imfileattributesrec)         | 未使用                                                                               |       |
| [imGetMetaData](selector-descriptions.md#imgetmetadata)                  | [imFileRef](structure-descriptions.md#imfileref)                               | [imMetaDataRec\*](structure-descriptions.md#immetadatarec)                           | 否    |
| [imSetMetaData](selector-descriptions.md#imsetmetadata)                  | [imFileRef](structure-descriptions.md#imfileref)                               | [imMetaDataRec\*](structure-descriptions.md#immetadatarec)                           | 否    |
| `imGetRollCrawlInfo`                                                     | `imRollCrawlInfoRec*`                                                          | 未使用                                                                               | 是    |
| `imRollCrawlRenderPage`                                                  | `rollCrawlRenderRec*`                                                          | 未使用                                                                               | 是    |
| [imDeferredProcessing](selector-descriptions.md#imdeferredprocessing)    | [imDeferredProcessingRec\*](structure-descriptions.md#imdeferredprocessingrec) | 未使用                                                                               | 否    |
| [imGetAudioChannelLayout](selector-descriptions.md#imgetaudiochannellayout) | [imFileRef](structure-descriptions.md#imfileref)                               | [imGetAudioChannelLayoutRec\*](structure-descriptions.md#imgetaudiochannellayoutrec) | 是    |
| [imGetPeakAudio](selector-descriptions.md#imgetpeakaudio)                | [imFileRef](structure-descriptions.md#imfileref)                               | [imPeakAudioRec\*](structure-descriptions.md#impeakaudiorec)                         | 是    |
| [imQueryContentState](selector-descriptions.md#imquerycontentstate)      | [imQueryContentStateRec\*](structure-descriptions.md#imquerycontentstaterec)   | 未使用                                                                               | 否    |
| [imQueryStreamLabel](selector-descriptions.md#imquerystreamlabel)        | [imQueryStreamLabelRec\*](structure-descriptions.md#imquerystreamlabelrec)     | 未使用                                                                               | 是    |
| [imGetIndColorSpace](selector-descriptions.md#imgetindcolorspace)        | `(int) index`                                                                  | [imIndColorSpaceRec\*](structure-descriptions.md#imindcolorspacerec)                 | 是    |

仅在 After Effects 中使用：

|                               选择器                               |                                     param1                                     |                                     param2                                     | Synth |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ----- |
| [imGetSubTypeNames](selector-descriptions.md#imgetsubtypenames)    | `(csSDK_int32) fileType`                                                       | [imSubTypeDescriptionRec\*](structure-descriptions.md#imsubtypedescriptionrec) | 否    |
| [imGetIndColorProfile](selector-descriptions.md#imgetindcolorprofile) | `(int) index`                                                                  | [imIndColorProfileRec\*](structure-descriptions.md#imindcolorprofilerec)       | 否    |
| [imQueryInputFileList](selector-descriptions.md#imqueryinputfilelist) | [imQueryInputFileListRec\*](structure-descriptions.md#imqueryinputfilelistrec) | 未使用                                                                         | 否    |