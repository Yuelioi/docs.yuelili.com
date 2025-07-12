---
title: Selector Table
---
# Selector Table

Before implementing a handler for a certain selector, make sure that it is really necessary for your importer. Many selectors are optional, and only useful for certain special needs.

The Synth column indicates whether or not the selector is applicable to synthetic importers. Custom importers can respond to any of the selectors.

| Selector | param1 | param2 | Synth |
| --- | --- | --- | --- |
| [imInit](../selector-descriptions#iminit) | [imImportInfoRec\*](../structure-descriptions#imimportinforec) | unused | Yes |
| [imShutdown](../selector-descriptions#imshutdown) | unused | unused | Yes |
| [imGetIndFormat](../selector-descriptions#imgetindformat) | `(int) index` | [imIndFormatRec\*](../structure-descriptions#imindformatrec) | Yes |
| [imGetSupports8](../selector-descriptions#imgetsupports8) | unused | unused | Yes |
| [imGetSupports7](../selector-descriptions#imgetsupports7) | unused | unused | Yes |
| [imGetInfo8](../selector-descriptions#imgetinfo8) | [imFileAccessRec8\*](../structure-descriptions#imfileaccessrec8) | [imFileInfoRec8\*](../structure-descriptions#imfileinforec8) | Yes |
| [imCloseFile](../selector-descriptions#imclosefile) | [imFileRef\*](../structure-descriptions#imfileref) | `(void*) PrivateData**` | No |
| [imGetIndPixelFormat](../selector-descriptions#imgetindpixelformat) | `(int) index` | [imIndPixelFormatRec\*](../structure-descriptions#imindpixelformatrec) | Yes |
| [imGetPreferredFrameSize](../selector-descriptions#imgetpreferredframesize) | [imPreferredFrameSizeRec\*](../structure-descriptions#impreferredframesizerec) | unused | Yes |
| [imSelectClipFrameDescriptor](../selector-descriptions#imselectclipframedescriptor) | [imFileRef](../structure-descriptions#imfileref) | [imClipFrameDescriptorRec\*](../structure-descriptions#imclipframedescriptorrec) | Yes |
| [imGetSourceVideo](../selector-descriptions#imgetsourcevideo) | [imFileRef](../structure-descriptions#imfileref) | [imSourceVideoRec\*](../structure-descriptions#imsourcevideorec) | Yes |
| [imCreateAsyncImporter](../selector-descriptions#imcreateasyncimporter) | [imAsyncImporterCreationRec\*](../structure-descriptions#imasyncimportercreationrec) | unused | Yes |
| [imImportImage](../selector-descriptions#imimportimage) | [imFileRef](../structure-descriptions#imfileref) | [imImportImageRec\*](../structure-descriptions#imimportimagerec) | Yes |
| [imImportAudio7](../selector-descriptions#imimportaudio7) | [imFileRef](../structure-descriptions#imfileref) | [imImportAudioRec7\*](../structure-descriptions#imimportaudiorec7) | Yes |
| `imResetSequentialAudio` | [imFileRef](../structure-descriptions#imfileref) | [imImportAudioRec7\*](../structure-descriptions#imimportaudiorec7) | Yes |
| `imGetSequentialAudio` | [imFileRef](../structure-descriptions#imfileref) | [imImportAudioRec7\*](../structure-descriptions#imimportaudiorec7) | Yes |
| [imGetPrefs8](../selector-descriptions#imgetprefs8) | [imFileAccessRec8\*](../structure-descriptions#imfileaccessrec8) | [imGetPrefsRec\*](../structure-descriptions#imgetprefsrec) | Yes |
| [imGetEmbeddedLUT](../selector-descriptions#imgetembeddedlut) | `(int) index` | [imIndEmbeddedLUTRec\*](../structure-descriptions#embeddedlutrec) | Yes |

The following selectors are optional, to provide custom file handling:

| Selector | param1 | param2 | Synth |
| --- | --- | --- | --- |
| [imOpenFile8](../selector-descriptions#imopenfile8) | [imFileRef\*](../structure-descriptions#imfileref) | [imFileOpenRec8\*](../structure-descriptions#imfileopenrec8) | No |
| [imQuietFile](../selector-descriptions#imquietfile) | [imFileRef\*](../structure-descriptions#imfileref) | `(void*) PrivateData**` | No |
| [imSaveFile8](../selector-descriptions#imsavefile8) | [imSaveFileRec8\*](../structure-descriptions#imsavefilerec8) | unused | No |
| [imDeleteFile](../selector-descriptions#imdeletefile) | [imDeleteFileRec\*](../structure-descriptions#imdeletefilerec) | unused | No |

The following selectors are optional, for better support copying and trimming files using the Project Manager:

| Selector | param1 | param2 | Synth |
| --- | --- | --- | --- |
| [imCalcSize8](../selector-descriptions#imcalcsize8) | [imCalcSizeRec\*](../structure-descriptions#imcalcsizerec) | [imFileAccessRec8\*](../structure-descriptions#imfileaccessrec8) | No |
| [imCheckTrim8](../selector-descriptions#imchecktrim8) | [imCheckTrimRec\*](../structure-descriptions#imchecktrimrec) | [imFileAccessRec8\*](../structure-descriptions#imfileaccessrec8) | No |
| [imTrimFile8](../selector-descriptions#imtrimfile8) | [imFileAccessRec8\*](../structure-descriptions#imfileaccessrec8) | [imTrimFileRec8\*](../structure-descriptions#imtrimfilerec8) | No |
| [imCopyFile](../selector-descriptions#imcopyfile) | [imCopyFileRec\*](../structure-descriptions#imcopyfilerec) | unused | No |
| [imRetargetAccelerator](../selector-descriptions#imretargetaccelerator) | [imAcceleratorRec\*](../structure-descriptions#imacceleratorrec) | unused | No |
| [imQueryDestinationPath](../selector-descriptions#imquerydestinationpath) | [imQueryDestinationPathRec\*](../structure-descriptions#imquerydestinationpathrec) | unused | No |

The following selectors are used for embedded Closed Captioning support:

| Selector | param1 | param2 | Synth |
| --- | --- | --- | --- |
| [imInitiateAsyncClosedCaptionScan](../selector-descriptions#iminitiateasyncclosedcaptionscan) | [imFileRef](../structure-descriptions#imfileref) | [imInitiateAsyncClosedCaptionScanRec\*](../structure-descriptions#iminitiateasyncclosedcaptionscanrec) | No |
| [imGetNextClosedCaption](../selector-descriptions#imgetnextclosedcaption) | [imFileRef](../structure-descriptions#imfileref) | [imGetNextClosedCaptionRec\*](../structure-descriptions#imgetnextclosedcaptionrec) | No |
| [imCompleteAsyncClosedCaptionScan](../selector-descriptions#imcompleteasyncclosedcaptionscan) | [imFileRef](../structure-descriptions#imfileref) | [imCompleteAsyncClosedCaptionScanRec\*](../structure-descriptions#imcompleteasyncclosedcaptionscanrec) | No |

The following selectors are optional, useful for a subset of importers:

| Selector | param1 | param2 | Synth |
| --- | --- | --- | --- |
| [imAnalysis](../selector-descriptions#imanalysis) | [imFileRef](../structure-descriptions#imfileref) | [imAnalysisRec\*](../structure-descriptions#imanalysisrec) | Yes |
| [imDataRateAnalysis](../selector-descriptions#imdatarateanalysis) | [imFileRef](../structure-descriptions#imfileref) | [imDataRateAnalysisRec\*](../structure-descriptions#imdatarateanalysisrec) | No |
| [imGetTimeInfo8](../selector-descriptions#imgettimeinfo8) | [imFileRef](../structure-descriptions#imfileref) | [imTimeInfoRec8\*](../structure-descriptions#imtimeinforec8) | No |
| [imSetTimeInfo8](../selector-descriptions#imsettimeinfo8) | [imFileRef](../structure-descriptions#imfileref) | [imTimeInfoRec8\*](../structure-descriptions#imtimeinforec8) | No |
| [imGetFileAttributes](../selector-descriptions#imgetfileattributes) | [imFileAttributesRec\*](../structure-descriptions#imfileattributesrec) | unused | |
| [imGetMetaData](../selector-descriptions#imgetmetadata) | [imFileRef](../structure-descriptions#imfileref) | [imMetaDataRec\*](../structure-descriptions#immetadatarec) | No |
| [imSetMetaData](../selector-descriptions#imsetmetadata) | [imFileRef](../structure-descriptions#imfileref) | [imMetaDataRec\*](../structure-descriptions#immetadatarec) | No |
| `imGetRollCrawlInfo` | `imRollCrawlInfoRec*` | unused | Yes |
| `imRollCrawlRenderPage` | `rollCrawlRenderRec*` | unused | Yes |
| [imDeferredProcessing](../selector-descriptions#imdeferredprocessing) | [imDeferredProcessingRec\*](../structure-descriptions#imdeferredprocessingrec) | unused | No |
| [imGetAudioChannelLayout](../selector-descriptions#imgetaudiochannellayout) | [imFileRef](../structure-descriptions#imfileref) | [imGetAudioChannelLayoutRec\*](../structure-descriptions#imgetaudiochannellayoutrec) | Yes |
| [imGetPeakAudio](../selector-descriptions#imgetpeakaudio) | [imFileRef](../structure-descriptions#imfileref) | [imPeakAudioRec\*](../structure-descriptions#impeakaudiorec) | Yes |
| [imQueryContentState](../selector-descriptions#imquerycontentstate) | [imQueryContentStateRec\*](../structure-descriptions#imquerycontentstaterec) | unused | No |
| [imQueryStreamLabel](../selector-descriptions#imquerystreamlabel) | [imQueryStreamLabelRec\*](../structure-descriptions#imquerystreamlabelrec) | unused | Yes |
| [imGetIndColorSpace](../selector-descriptions#imgetindcolorspace) | `(int) index` | [imIndColorSpaceRec\*](../structure-descriptions#imindcolorspacerec) | Yes |

Used only in After Effects:

| Selector | param1 | param2 | Synth |
| --- | --- | --- | --- |
| [imGetSubTypeNames](../selector-descriptions#imgetsubtypenames) | `(csSDK_int32) fileType` | [imSubTypeDescriptionRec\*](../structure-descriptions#imsubtypedescriptionrec) | No |
| [imGetIndColorProfile](../selector-descriptions#imgetindcolorprofile) | `(int) index` | [imIndColorProfileRec\*](../structure-descriptions#imindcolorprofilerec) | No |
| [imQueryInputFileList](../selector-descriptions#imqueryinputfilelist) | [imQueryInputFileListRec\*](../structure-descriptions#imqueryinputfilelistrec) | unused | No |
