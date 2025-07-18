---
title: AEIO_ModuleInfo
---
# AEIO_ModuleInfo

This is the structure where your AEIO will define its basic properties.

Notice that, in addition to describing the filetypes and extensions supported by your AEIO, you also describe your signature and behavior using the AEIO_ModuleFlags. We love flags.

---

## AEIO_ModuleInfo Members

| Member | Purpose |
|---|---|
| `sig` | A long, uniquely identifying your plug-in. |
| | Many developers prefer to use a decidedly Mac-ish four character code here. |
| | Please [let us know](mailto:zlam@adobe.com) what sig you're using. |
| `name` | Descriptive name for your AEIO plug-in. |
| `flags` | Set of `AEIO_ModuleFlags`. |
| `flags2` | Set of `AEIO_ModuleFlags2`. |
| `max_width`, `max_height` | The maximum dimensions supported by your format. |
| `num_filetypes` | The number of filetypes supported by your AEIO. |
| `num_extensions` | The number of file extensions supported by your AEIO. |
| `num_clips` | The number of clipboard formats supported by your AEIO. |
| `create_kind` | The macOS four character code for files created by your AEIO. |
| `create_ext` | The file extension for files created by your AEIO. |
| `read_kinds` | This array of 16 `AEIO_FileKinds` need not be entirely filled out, but the first `[num_filetypes + num_extensions + num_clips]` ones must be populated, in that order. |
| `num_aux_extensions` | The number of auxiliary extensions supported by your AEIO. |
| | Say, for example, that you're writing an AEIO to import information from a 3D program that saves scene information into a .123 file, and camera information into a .xyz file. |
| | The .xyz would be an auxiliary extension; it's not necessary to get the rest of the scene information, but it's associated with the .123 files. |
| `aux_ext` | The file extension of the auxiliary filetype(s) supported by your AEIO. |

---

## Behavior Flags

AEIOs set these flags (like effect plug-ins use global outflags) in AEIO_ModuleInfo.flags to indicate their behavior to After Effects. Some flags are only relevant to input, and some are only relevant to output.

### AEIO_ModuleFlags

| Flag | Purpose | I or O? |
|---|---|---|
| `AEIO_MFlag_INPUT` | AEIO is an input module. | Input! |
| `AEIO_MFlag_OUTPUT` | AEIO is an output module (one plug-in can be both). | Output! |
| `AEIO_MFlag_FILE` | Each clip imported directly corresponds to a file, somewhere. | Both |
| `AEIO_MFlag_STILL` | Supports still images, not video. | Output |
| `AEIO_MFlag_VIDEO` | Supports video images, not stills. | Output |
| `AEIO_MFlag_AUDIO` | Supports audio. | Output |
| `AEIO_MFlag_NO_TIME` | Time information isn't part of the file format. | Input |
| | This would be the case with numbered stills, with individual frames imported based on the composition's time settings. | |
| `AEIO_MFlag_INTERACTIVE_GET` | A new input sequence necessitates user interaction. | Input |
| | This would be the case for a non-file-based input module. | |
| `AEIO_MFlag_INTERACTIVE_PUT` | A new output sequence necessitates user interaction. | Output |
| | This would be the case for a non-file-based output module. | |
| `AEIO_MFlag_CANT_CLIP` | The AEIO's drawing functions cannot accept dimensions smaller than the requested dimensions. | Input |
| `AEIO_MFlag_MUST_INTERACT_PUT` | The AEIO must display a dialog box, even if a valid options data handle is available. | Output |
| `AEIO_MFlag_CANT_SOUND_INTERLEAVE` | The AEIO requires that all video data be processed, then sound data (instead of interleaving the processing the video and audio). | Output |
| `AEIO_MFlag_CAN_ADD_FRAMES_NON_LINEAR` | The AEIO supports adding non-sequential frames. | Output |
| `AEIO_MFlag_HOST_DEPTH_DIALOG` | The AEIO wants After Effects to display a bit-depth selection dialog. | Input |
| `AEIO_MFlag_HOST_FRAME_START_DIALOG` | The AEIO wants After Effects to display a dialog requesting that the user specify a starting frame. | Input |
| `AEIO_MFlag_NO_OPTIONS` | The AEIO does not accept output options. | Output |
| `AEIO_MFlag_NO_PIXELS` | The AEIO's file format doesn't actually store pixels. Currently unused as of CS6. | (unused) |
| `AEIO_MFlag_SEQUENCE_OPTIONS_OK` | The AEIO will adopt the sequence options of its parent if a folder is selected. | Input |
| `AEIO_MFlag_INPUT_OPTIONS` | The AEIO has user options associated with each input sequence. | Input |
| | !!! note | |
| | The options information must be flat (not referring to any data contained in external pointers or handles). | |
| `AEIO_MFlag_HSF_AWARE` | The AEIO will provide horizontal scaling factor (pixel aspect ratio) information for each new sequence. | Input |
| | This prevents After Effects from guessing. | |
| `AEIO_MFlag_HAS_LAYERS` | The AEIO supports multiple layers in a single document. | Input |
| `AEIO_MFlag_SCRAP` | The AEIO has a clipboard parsing component. | Input |
| `AEIO_MFlag_NO_UI` | After Effects should display no UI for this module | Input |
| | (do not combine this flag with `AEIO_MFlag_HOST_DEPTH_DIALOG` or `AEIO_MFlag_HOST_FRAME_START_DIALOG`) | |
| `AEIO_MFlag_SEQ_OPTIONS_DLG` | The AEIO has sequence options accessible from the More Options button in the Interpret Footage dialog. | Input |
| `AEIO_MFlag_HAS_AUX_DATA` | The file format supported by the AEIO has depth information, normals, or some other non-color information related to each pixel. | Input |
| `AEIO_MFlag_HAS_META_DATA` | The file format supported by the AEIO supports user-definable metadata. | Output |
| | If this flag is set, the embed pop-up in the output module dialog will be enabled. | |
| `AEIO_MFlag_CAN_DO_MARKERS` | The file format support by the AEIO supports markers, url flips, and/or chapters. | Output |
| `AEIO_MFlag_CAN_DRAW_DEEP` | The AEIO can draw into 16bpc ("deep") `PF_EffectWorlds`. | Input |
| `AEIO_MFlag_RESERVED4` | Special super-secret flag. Doesn't do anything...or does it? | ??? |
| | (*No, it doesn't.*) | |

### AEIO_ModuleFlags2

Gotta have dem flags...

| Flag | Purpose | I or O? |
| --- | --- | --- |
| `AEIO_MFlag2_AUDIO_OPTIONS` | The AEIO has an audio options dialog. | Output |
| `AEIO_MFlag2_SEND_ADDMARKER_BEFORE_ADDFRAME` | The AEIO wants to receive marker data before outputting video or audio (useful for MPEG streams). | Output |
| `AEIO_MFlag2_CAN_DO_MARKERS_2` | The AEIO supports combined markers; URL flips, chapters, and comments. | Output |
| `AEIO_MFlag2_CAN_DRAW_FLOAT` | The AEIO can draw into float (32-bpc) worlds. | Input |
| `AEIO_MFlag2_CAN_DO_AUDIO_32` | Supports 32-bit audio output. | Output |
| `AEIO_MFlag2_SUPPORTS_ICC_PROFILES` | Supports ICC profiles. | Both |
| `AEIO_MFlag2_CAN_DO_MARKERS_3` | The AEIO supports combined markers; URL flips, chapters, comments, and cue points. | Output |
| `AEIO_MFlag2_SEND_ADDMARKER_BEFORE_STARTADDING` | The AEIO wants to process markers before video during export. | Output |
| `AEIO_MFlag2_USES_QUICKTIME` | On MacOS, prior to the host calling `AEIO_AddFrame` or `AEIO_OutputFrame` from [AEIO_FunctionBlock4](../new-kids-on-the-function-block#aeio_functionblock4), it will lock the global QuickTime mutex. | Output |
