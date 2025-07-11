---
title: Return Codes
---
# Return Codes

| Return Code | Reason |
|---|---|
| `imNoErr` | Operation has completed without error. |
| `imTooWide` | File dimensions too large. |
| `imBadFile` | Bad file format. |
| | To defer an unsupported subtype to a lower priority importer, return this during `imOpenFile8` or `imGetInfo8`. |
| `imUnsupported` | Unsupported selector. |
| `imMemErr` | Memory error. |
| `imOtherErr` | Unknown error. |
| `imNoContent` | No audio or video. |
| `imBadRate` | Bad audio rate. |
| `imBadCompression` | Bad compression. |
| `imBadCodec` | Codec not found. |
| `imNotFlat` | Unflattened QuickTime movie. |
| `imBadSndComp` | Bad sound compression. |
| `imNoTimecode` | Timecode supported, but not found. |
| `imMissingComponent` | Missing component needed to open the file. |
| `imSaveErr` | Error saving file. |
| `imDeleteErr` | Error deleting file. |
| `imNotFoundErr` | The requested metadata chunk was not found. |
| `imSetFile` | Return this from `imGetPrefs8` only if you are a custom importer and you need Premiere to alter it's file access information (e.g. a new path or filename is created). |
| `imIterateStreams` | Return from `imGetInfo8` to indicate that there are more streams to describe. |
| | Premiere will send `imGetInfo8` for the next stream. |
| `imBadStreamIndex` | Return from `imGetInfo8` after interating through streams to indicate that there are no more streams to describe. |
| `imCantTrim` | Return from `imCheckTrim` if the file cannot be trimmed by the importer. |
| `imDiskFull` | Return from `imTrimFile8` if there is not enough space to complete the trim operation. |
| `imDiskErr` | Return from `imTrimFile8` if there is a general disk or I/O error during the trim operation. |
| `imFileShareViolation` | Return from `imOpenFile8` if file cannot be opened due to another process having exclusive read access |
| `imIterateFrameSizes` | Return from `imGetPreferredFrameSize`, to be called again to describe more frame sizes for a particular pixel format. |
| `imMediaPending` | Return from `imGetSourceVideo` or `imCreateAsyncImporter` if the importer is still processing the file and cannot return video frames yet. |
| `imDRMControlled` | Return from `imOpenFile8` if the file cannot be opened because it is under rights management. |
| `imActivationFailed` | Activation of a component failed (usually due to user cancellation). |
| | This is used by Premiere Elements. |
| `imFrameNotFound` | New in CS4. Return if an importer could not find the requested frame (typically used with async importers) |
| `imBadHeader` | New in CS5. The file cannot be opened because of a header error |
| `imUnsupportedCompression` | New in CS5. The file has a compression type that the importer does not support |
| `imFileOpenFailed` | New in CS5. The importer was unable to open the file on disk |
| `imFileHasNoImportableStreams` | New in CS5. The file has no audio or video stream |
| `imFileReadFailed` | New in CS5. A read from an open file failed |
| `imUnsupportedAudioFormat` | New in CS5. The importer cannot import something in the audio format |
| `imUnsupportedVideoBitDepth` | New in CS5. The video bit depth of this file is unsupported by the importer |
| `imDecompressionError` | New in CS5. The importer hit an error decompressing the audio or video |
| `imInvalidPreferences` | New in CS5. Invalid prefs data was passed to the importer |
| `inFileNotAvailable` | New in CS5. Return from `imQueryContentState` if the file/stream is no longer available because it is offline or deleted |
| `imRequiresProtectedContent` | New in CS5.5. Return from `imInit` if the importer depends on a library that has not been activated yet. |
| `imNoCaptions` | New in CC. Return from `imInitiateAsyncClosedCaptionScan` if the clip has no closed captions, or return from `imGetNextClosedCaption` when there are no more captions. |
| `imCancel` | Return from `imGetPrefs8` if user cancels or the plugin cannot open the file (custom/synthetic importer). |
| `imBadFormatIndex` | Return this when given an out of range format index, and from `imGetIndFormat` when plugin has no more formats to enumerate. |
| `imIsCacheable` | Return from `imInit` if a plugin does not need to be called to initialize every time Premiere is launched. |
| | This will help reduce the time to launch the application. |
