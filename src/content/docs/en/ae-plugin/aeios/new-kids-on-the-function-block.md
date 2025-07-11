---
title: new-kids-on-the-function-block
---
# New Kids On The Function Block

During its main entry point function, each AEIO plug-in must fill in an AEIO_FunctionBlock, providing pointers to the functions After Effects will call for different file-related tasks.

The table below shows which functions are needed for input, and which ones are needed for output. For a bare-bones implementation, start with the functions that are noted as "Required" in the right column. You can often invoke "best-case" behavior by having After Effects handle the call for you (by returning `AEIO_Err_USE_DFLT_CALLBACK`).

For a barebones AEIO for video input only, implement the following functions: `AEIO_InitInSpecFromFile` or `AEIO_InitInSpecInteractive` (depending on whether the source is a file or interactively generated), `AEIO_DisposeInSpec`, `AEIO_GetInSpecInfo`, `AEIO_DrawSparseFrame`, `AEIO_CloseSourceFiles`, and `AEIO_InqNextFrameTime` (using `AEIO_Err_USE_DFLT_CALLBACK` is fine).

Starting from the IO sample, it is best to leave the other functions defined too, and fill them in further as needed.

---

## AEIO_FunctionBlock4

| Function | Response | I or O? | Required? |
|---|---|---|---|
| `AEIO_InitInSpecFromFile` | Given a file path, describe its contents to After Effects in the provided `AEIO_InSpecH`. | Input | Yes, for file-based media |
| | Use all appropriate "set" calls from the [AEGP_IOInSuite](#aegp_ioinsuite5) to do so; if there is image data, set its depth, dimensions, and alpha interpretation. | | |
| | If there is audio, describe its channels and sample rate. | | |
| | The file path is a NULL-terminated UTF-16 string with platform separators. | | |
| | <pre lang="cpp">AEIO_InitInSpecFromFile(<br/>  AEIO_BasicData   \*basic_dataP,<br/>  const A_UTF16Char  \*file_pathZ,<br/>  AEIO_InSpecH   inH);</pre> | | |
| `AEIO_InitInSpecInteractive` | Using some form of user interaction (and not a file path provided by After Effects), describe the audio and video your generated AEIO_InSpecH contains. | Input | Yes, for interactiv ely generated media |
| | <pre lang="cpp">AEIO_InitInSpecInteractive(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH);</pre> | | |
| `AEIO_DisposeInSpec` | Free an `AEIO_InSpecH`. | Input | Yes |
| | <pre lang="cpp">AEIO_DisposeInSpec(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH);</pre> | | |
| `AEIO_FlattenOptions` | For the given `AEIO_InSpecH`, return a flattened version of the data contained in its options handle. | Input | No |
| | Obtain the unflattened options handle using `AEGP_GetInSpecOptionsHandle`. | | |
| | <pre lang="cpp">AEIO_FlattenOptions(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  AEIO_Handle   \*flat_optionsPH);</pre> | | |
| `AEIO_InflateOptions` | For the given `AEIO_InSpecH`, create (using `AEGP_SetInSpecOptionsHandle`) an unflattened version of its flattened option data. | Input | No |
| | <pre lang="cpp">AEIO_InflateOptions(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  AEIO_Handle   flat_optionsH);</pre> | | |
| `AEIO_SynchInSpec` | `AEIO_Err_USE_DFLT_CALLBACK` allowed. Inspect the `AEIO_InSpecH`, (update its options if necessary), and indicate whether or not you made changes. | Input | No |
| | <pre lang="cpp">AEIO_SynchInSpec(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  A_Boolean   \*changed0);</pre> | | |
| `AEIO_GetActiveExtent` | `AEIO_Err_USE_DFLT_CALLBACK` allowed. Populate the provided `A_LRect` with the active extent of the file's pixels at the given time. | Input | Yes |
| | <pre lang="cpp">AEIO_GetActiveExtent(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  const A_Time  \*tr,<br/>  A_LRect   \*extent);</pre> | | |
| `AEIO_GetInSpecInfo` | Provide a few strings in `AEIO_Verbiage` to describe the file, which will appear in the Project panel. This includes the strings used to describe the file type and subtype (the codec). | Input | Yes |
| | <pre lang="cpp">AEIO_GetInSpecInfo(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  AEIO_Verbiage   \*verbiageP);</pre> | | |
| | This function gets called OFTEN; every time we refresh the project panel. Keep allocations to a minimum. | | |
| | In the AEIOs that ship with After Effects, we check for a valid `optionsH` (using `AEGP_GetInSpecOptionsHandle`); if we find one, we use the information from within it. If not, we do nothing. | | |
| | This is important; if your AEIO handles still images, this function *will* get called for the folder containing the stills. Hopefully, there won't be an optionsH associated with it (unless you're writing a truly bizarre AEIO). | | |
| `AEIO_DrawSparseFrame` | Draw a frame from the `AEIO_InSpecH`. | Input | Yes |
| | The `PF_EffectWorld*` contains the width and height to use, but make sure you take the required_region0 into account, if it's not `NULL`. | | |
| | <pre lang="cpp">AEIO_DrawSparseFrame(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  AEIO_Quality  qual,<br/>  const AEIO_RationalScale  \*rs0,<br/>  const A_Time  \*tr,<br/>  const A_Time  \*duration0,<br/>  const A_Rect   \*required_region0,<br/>  PF_EffectWorld  \*wP,<br/>  A_long*   originx,<br/>  A_long*   originy,<br/>  AEIO_DrawingFlags   \*draw_flagsP);</pre> | | |
| | NOTE: return data as linear light (1.0), and After Effects will perform any necessary transformations to bring the footage into the working colorspace. | | |
| `AEIO_GetDimensions` | `AEIO_Err_USE_DFLT_CALLBACK` allowed. Provide the dimensions (and, if necessary, scaling factor) of the video in the AEIO_InSpecH. | Input | No |
| | <pre lang="cpp">AEIO_GetDimensions(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  const AEIO_RationalScale  \*rs0,<br/>  A_long  \*width0,<br/>  A_long  \*height0);</pre> | | |
| `AEIO_GetDuration` | `AEIO_Err_USE_DFLT_CALLBACK` allowed. Provide the duration of an `AEIO_InSpecH`, in seconds. | Input | No |
| | <pre lang="cpp">AEIO_GetDuration(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  A_Time  \*trP);</pre> | | |
| `AEIO_GetTime` | `AEIO_Err_USE_DFLT_CALLBACK` allowed. Provide the timebase of an `AEIO_InSpecH`. | Input | No |
| | <pre lang="cpp">AEIO_GetTime(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  A_Time  \*tr);</pre> | | |
| | Here are the values we use internally for common timebases: | | |
| | - 29.97 fps: `scale = 100; value= 2997;` | | |
| | - 59.94 fps: `scale = 50; value = 2997;` | | |
| | - 23.976 fps: `scale = 125; value = 2997;` | | |
| | - 30 fps: `scale = 1; value = 30;` | | |
| | - 25 fps: `scale = 1; value = 25;` | | |
| `AEIO_GetSound` | `AEIO_Err_USE_DFLT_CALLBACK` allowed. Provide sound from an `AEIO_InSpecH`, at the quality described. | Input | No |
| | <pre lang="cpp">AEIO_GetSound(<br/>  AEIO_BasicData   \*basic_dataP,<br/>  AEIO_InSpecH   inH,<br/>  AEIO_SndQuality  quality,<br/>  const AEIO_InterruptFuncs  \*interrupt_funcsP0,<br/>  const A_Time   \*startPT,<br/>  const A_Time   \*durPT,<br/>  A_u_long   start_sampLu,<br/>  A_u_long   num_samplesLu,<br/>  void   \*dataPV);</pre> | | |
| | `AEIO_SndQuality` may be: | | |
| | - `AEIO_SndQuality_APPROX`, (this quality is used to draw the audio waveform) | | |
| | - `AEIO_SndQuality_LO`, | | |
| | - `AEIO_SndQuality_HI` | | |
| `AEIO_InqNextFrameTime` | `AEIO_Err_USE_DFLT_CALLBACK` allowed. | Input | Yes |
| | Provide the time of the next frame (in the source footage's timebase) within the `AEIO_InSpecH`. | | |
| | <pre lang="cpp">AEIO_InqNextFrameTime(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  const A_Time  \*base_time_tr,<br/>  AEIO_TimeDir  time_dir,<br/>  A_Boolean   \*found0,<br/>  A_Time  \*key_time_tr0);</pre> | | |
| `AEIO_InitOutputSpec` | `AEIO_Err_USE_DFLT_CALLBACK` allowed. | Output | Yes |
| | Perform any initialization necessary for a new `AEIO_OutSpecH`, and indicate whether you made changes. | | |
| | <pre lang="cpp">AEIO_InitOutputSpec(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  A_Boolean   \*user_interacted);</pre> | | |
| | !!! note | | |
| | The first time your AEIO is used, After Effects caches the last-known-good `optionsH` in its preferences. | | |
| | When testing this function, [delete your preferences](../../intro/debugging-plug-ins#deleting-preferences) often. | | |
| `AEIO_GetFlatOutputOptions` | Describe (in an `AEIO_Handle`) the output options for an `AEIO_OutSpecH`, in a disk-safe flat data structure (one that does not reference external memory). | Output | Yes |
| | Note that your output options must be cross-platform, so pay attention to byte ordering issues. | | |
| | <pre lang="cpp">AEIO_GetFlatOutputOptions(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  AEIO_Handle   \*optionsH);</pre> | | |
| `AEIO_DisposeOutputOptions` | `AEIO_Err_USE_DFLT_CALLBACK` allowed. Free the memory for the output options passed in. | Output | No |
| | <pre lang="cpp">AEIO_DisposeOutputOptions(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  void  \*optionsPV);</pre> | | |
| `AEIO_UserOptionsDialog` | Display an output settings dialog (select TIFF output within After Effects to see when this dialog will occur). | Output | No |
| | Store this information in an options handle using `AEGP_SetInSpecOptionsHandle`. | | |
| | <pre lang="cpp">AEIO_UserOptionsDialog(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  PF_EffectWorld  \*sample0,<br/>  A_Boolean   \*interacted0);</pre> | | |
| `AEIO_GetOutputInfo` | Describe (in text) the output options in an `AEIO_OutSpecH`. | | |
| | <pre lang="cpp">AEIO_GetOutputInfo(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  AEIO_Verbiage   \*verbiage);</pre> | | |
| `AEIO_OutputInfoChanged` | Update the `AEIO_OutSpecH` based on the current settings (using the various Get functions to obtain them). | Output | No |
| | <pre lang="cpp">AEIO_OutputInfoChanged(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH);</pre> | | |
| `AEIO_SetOutputFile` | `AEIO_Err_USE_DFLT_CALLBACK` allowed. Set the file path for output of an `AEIO_OutSpecH`. | Output | Yes |
| | Return `AEIO_Err_USE_DEFAULT_CALLBACK` unless you've changed the path. | | |
| | The file path is a NULL-terminated UTF-16 string with platform separators. | | |
| | <pre lang="cpp">AEIO_SetOutputFile(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  A_UTF16Char   \*file_pathZ);</pre> | | |
| `AEIO_StartAdding` | Prepare to add frames to the output file. | Output | Yes, for writing formats that support multiple frames |
| | This is a good time to create the ouput file(s) on disk, and to write any header information to such files. This is also your first opportunity to allocate pixel buffers based on valid output spec values. | | |
| | <pre lang="cpp">AEIO_StartAdding(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  A_long  flags);</pre> | | |
| `AEIO_AddFrame` | Add frame(s) to output file. You may pass a pointer to a function you want called if the user interrupts the render. | Output | Yes, for writing formats that support multiple frames |
| | <pre lang="cpp">AEIO_AddFrame(<br/>  AEIO_BasicData   \*basic_dataP,<br/>  AEIO_OutSpecH  outH,<br/>  A_long   frame_index,<br/>  A_long   frames,<br/>  PF_EffectWorld   \*wP,<br/>  const A_LPoint   \*origin0,<br/>  A_Boolean  was_compressedB,<br/>  AEIO_InterruptFuncs  \*inter0);</pre> | | |
| `AEIO_EndAdding` | Perform any clean-up associated with adding frames. | Output | Yes, for writing formats that support multiple frames |
| | <pre lang="cpp">AEIO_EndAdding(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  A_long  flags);</pre> | | |
| `AEIO_OutputFrame` | Output a single frame. | Output | Yes, for writing formats that support a single frame |
| | <pre lang="cpp">AEIO_OutputFrame(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  PF_EffectWorld  \*wP);</pre> | | |
| `AEIO_WriteLabels` | `AEIO_Err_USE_DFLT_CALLBACK` allowed. Set alpha interpretation and field usage information for the `AEIO_OutSpecH`. | Output | Yes |
| | Indicate in `AEIO_LabelFlags` which flags you wrote. | | |
| | <pre lang="cpp">AEIO_WriteLabels(<br/>  AEIO_BasicData   \*basic_dataP,<br/>  AEIO_OutSpecH  outH,<br/>  AEIO_LabelFlags  \*written);</pre> | | |
| `AEIO_GetSizes` | `AEIO_Err_USE_DFLT_CALLBACK` allowed. Provide information about file size and remaining free space on output volume. | Output | Yes |
| | <pre lang="cpp">AEIO_GetSizes(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  A_u_longlong  \*free_space,<br/>  A_u_longlong  \*file_size);</pre> | | |
| `AEIO_Flush` | Destroy any options or user data associated with the `OutSpecH`. | | |
| | <pre lang="cpp">AEIO_Flush(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH);</pre> | | |
| `AEIO_AddSoundChunk` | Add the given sound to the output file. | Output | Yes, for writing formats with audio |
| | <pre lang="cpp">AEIO_AddSoundChunk(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  const A_Time  \*start,<br/>  AEIO_SndWorldH  swH);</pre> | | |
| `AEIO_Idle` | Optional. Do something with idle time. `AEIO_Err_USE_DFLT_CALLBACK` is not supported. | Output | No |
| | <pre lang="cpp">AEIO_Idle(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_ModuleSignature  sig,<br/>  AEIO_IdleFlags  \*idle_flags0);</pre> | | |
| `AEIO_GetDepths` | Set `AEIO_OptionsFlags` to indicate which pixel and color depths are valid for your output format. | Output | Yes |
| | See the discussion on [Export Bit-Depth](../implementation-details#implementation-details). | | |
| | <pre lang="cpp">AEIO_GetDepths(<br/>  AEIO_BasicData   \*basic_dataP,<br/>  AEIO_OutSpecH  outH,<br/>  AEIO_OptionsFlags  \*which);</pre> | | |
| `AEIO_GetOutputSuffix` | `AEIO_Err_USE_DFLT_CALLBACK` allowed. Describe the three character extension for the output file. | Output | Yes |
| | <pre lang="cpp">AEIO_GetOutputSuffix(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  A_char  \*suffix);</pre> | | |
| `AEIO_SeqOptionsDlg` | Display a footage options dialog, and indicate whether the user made any changes. | Input | No |
| | <pre lang="cpp">AEIO_SeqOptionsDlg(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  A_Boolean   \*interactedPB);</pre> | | |
| `AEIO_GetNumAuxChannels` | Enumerate the auxiliary (beyond red, green, blue and alpha) channels of data contained in an `AEIO_InSpecH`. | Input | No |
| | <pre lang="cpp">AEIO_GetNumAuxChannels(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  A_long  \*num_channelsPL);</pre> | | |
| `AEIO_GetAuxChannelDesc` | Describe the data type, name, channel, and dimensionality of an auxiliary data channel. | Input | No |
| | <pre lang="cpp">AEIO_GetAuxChannelDesc(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  long  chan_indexL,<br/>  PF_ChannelDesc  \*descP);</pre> | | |
| `AEIO_DrawAuxChannel` | Draw the auxiliary channel(s) from an `AEIO_InSpecH`. | | |
| | <pre lang="cpp">AEIO_DrawAuxChannel(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  A_long  chan_indexL,<br/>  const AEIO_DrawFramePB  \*pbP,<br/>  PF_ChannelChunk   \*chunkP);</pre> | | |
| `AEIO_FreeAuxChannel` | Free data associated with an auxiliary channel. | Input | No |
| | <pre lang="cpp">AEIO_FreeAuxChannel(<br/>  AEIO_BasicData   \*basic_dataP,<br/>  AEIO_InSpecH   inH,<br/>  PF_ChannelChunk  \*chunkP);</pre> | | |
| `AEIO_Num` AuxFiles | Enumerate the files needed to render the given `AEIO_InSpecH`. | Input | No |
| | This function and `AEIO_GetNthAuxFileSpec` will be called when the user chooses `File > Dependencies > Collect Files...`. Here your AEIO tells AE what the associated files are. | | |
| | <pre lang="cpp">AEIO_NumAuxFiles(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  seqH,<br/>  A_long  \*files_per_framePL);</pre> | | |
| `AEIO_GetNthAuxFileSpec` | Retrieve data from the nth auxiliary file, for the specified frame. | Input | No, if no aux files |
| | The path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`. | | |
| | <pre lang="cpp">AEIO_GetNthAuxFileSpec(<br/>  AEIO_BasicData \*basic_dataP,<br/>  AEIO_InSpecH   seqH,<br/>  A_long   frame_numL,<br/>  A_long   n,<br/>  AEGP_MemHandle \*pathPH);</pre> | | |
| `AEIO_CloseSourceFiles` | Close (or open, depending upon closeB) the source files for an `AEIO_InSpecH`. | Input | Yes |
| | When the user Collects Files, the AEIO will first be asked to close its source files, then re-open them. | | |
| | <pre lang="cpp">AEIO_CloseSourceFiles(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  seqH,<br/>  A_Boolean   closeB);</pre> | | |
| | - `TRUE` for close | | |
| | - `FALSE` for open. | | |
| `AEIO_CountUserData` | Enumerate the units of user data associated with the `AEIO_InSpecH`. | | |
| | <pre lang="cpp">AEIO_CountUserData(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  A_u_long  typeLu,<br/>  A_u_long  max_sizeLu,<br/>  A_u_long  \*num_of_typePLu);</pre> | | |
| `AEIO_SetUserData` | Set user data (of the given index and type) for the given `AEIO_OutSpecH`. | Output | No |
| | <pre lang="cpp">AEIO_SetUserData(<br/>  AEIO_BasicData   \*basic_dataP,<br/>  AEIO_OutSpecH  outH,<br/>  A_u_long   typeLu,<br/>  A_u_long   indexLu,<br/>  const AEIO_Handle  dataH);</pre> | | |
| `AEIO_GetUserData` | Describe the user data (at the index and of the type given) associated with the `AEIO_InSpecH`. | Input | No |
| | <pre lang="cpp">AEIO_GetUserData(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_InSpecH  inH,<br/>  A_u_long  typeLu,<br/>  A_u_long  indexLu,<br/>  A_u_long  max_sizeLu,<br/>  AEIO_Handle   \*dataPH);</pre> | | |
| `AEIO_AddMarker` | Associate a marker of the specified type, at the specified frame, with the `AEIO_OutSpecH`. | Output | No |
| | You may provide an interrupt function to handle user cancellation of this action. | | |
| | <pre lang="cpp">AEIO_AddMarker(<br/>  AEIO_BasicData   \*basic_dataP,<br/>  AEIO_OutSpecH  outH,<br/>  A_long   frame_index,<br/>  AEIO_MarkerType  marker_type,<br/>  void   \*marker_dataPV,<br/>  AEIO_InterruptFuncs  \*inter0);</pre> | | |
| `AEIO_VerifyFileImportable` | Indicate (by setting `importablePB`) whether or not the plug-in can import the file. | Input | No |
| | Note that After Effects has already done basic extension checking; you may wish to open the file and determine whether or not it's valid. | | |
| | This can be a time-consuming process; most AEIOs that ship with After Effects simply return TRUE, and deal with bad files during `AEIO_InitInSpecFromFile`. | | |
| | The file path is a NULL-terminated UTF-16 string with platform separators. | | |
| | <pre lang="cpp">AEIO_VerifyFileImportable(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_ModuleSignature  sig,<br/>  const A_UTF16Char   \*file_pathZ,<br/>  A_Boolean   \*importablePB);</pre> | | |
| `AEIO_UserAudioOptionsDialog` | Display an audio options dialog. | Output | No |
| | <pre lang="cpp">AEIO_UserAudioOptionsDialog(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  A_Boolean   \*interacted0);</pre> | | |
| `AEIO_AddMarker3` | Add a marker, with a flag specifying whether or not this is a composition marker. | Output | No |
| | <pre lang="cpp">AEIO_AddMarker3(<br/>  AEIO_BasicData   \*basic_dataP,<br/>  AEIO_OutSpecH  outH,<br/>  A_long   frame_index,<br/>  AEGP_ConstMarkerValP   marker_valP,<br/>  AEIO_RenderMarkerFlag  marker_flag,<br/>  AEIO_InterruptFuncs  \*inter0);</pre> | | |
| `AEIO_GetMimeType` | Describe the output mime type. This is used for XMP support. | Output | No |
| | <pre lang="cpp">AEIO_GetMimeType(<br/>  AEIO_BasicData  \*basic_dataP,<br/>  AEIO_OutSpecH   outH,<br/>  A_long  mime_type_sizeL,<br/>  char  \*mime_typeZ);</pre> | | |

---

## What Goes In

These functions manage an input specification, After Effects' internal representation of data gathered from any source.

Any image or audio data in After Effects (except solids) is obtained from an input specification handle, or `AEIO_InSpecH`.

### AEGP_IOInSuite5

| Function | Purpose |
|---|---|
| `AEGP_GetInSpecOptionsHandle` | Retrieves the options data (created by your AEIO) for the given `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_GetInSpecOptionsHandle(<br/>  AEIO_InSpecH  inH,<br/>  void  \*optionsPPV);</pre> |
| `AEGP_SetInSpecOptionsHandle` | Sets the options data for the given `AEIO_InSpecH`. |
| | Must be allocated using the [Memory Suite](../../aegps/aegp-suites#aegp_memorysuite1). |
| | <pre lang="cpp">AEGP_SetInSpecOptionsHandle(<br/>  AEIO_InSpecH  inH,<br/>  void  \*optionsPV,<br/>  void  \*old_optionsPPV);</pre> |
| `AEGP_GetInSpecFilePath` | Retrieves the file path for the `AEIO_InSpecH`. |
| | The file path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`. |
| | <pre lang="cpp">AEGP_GetInSpecFilePath(<br/>  AEIO_InSpecH  inH,<br/>  AEGP_MemHandle  \*file_nameZ);</pre> |
| `AEGP_GetInSpecNativeFPS` | Retrieves the frame rate of the `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_GetInSpecNativeFPS(<br/>  AEIO_InSpecH  inH,<br/>  A_Fixed   \*native_fpsP);</pre> |
| `AEGP_SetInSpecNativeFPS` | Sets the frame rate of the `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_SetInSpecNativeFPS(<br/>  AEIO_InSpecH  inH,<br/>  A_Fixed   native_fpsP);</pre> |
| `AEGP_GetInSpecDepth` | Retrieves the bit depth of the image data in the `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_GetInSpecDepth(<br/>  AEIO_InSpecH  inH,<br/>  A_short   \*depthPS);</pre> |
| `AEGP_SetInSpecDepth` | Indicates to After Effects the bit depth of the image data in the `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_SetInSpecDepth(<br/>  AEIO_InSpecH  inH,<br/>  A_short   depthS);</pre> |
| `AEGP_GetInSpecSize` | Retrieves the size (in bytes) of the data referenced by the `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_GetInSpecSize(<br/>  AEIO_InSpecH   inH,<br/>  AEIO_FileSize  \*sizePLLu);</pre> |
| `AEGP_SetInSpecSize` | Indicates to After Effects the size (in bytes) of the data referenced by the `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_SetInSpecSize(<br/>  AEIO_InSpecH   inH,<br/>  AEIO_FileSize  sizeL);</pre> |
| `AEGP_GetInSpecInterlaceLabel` | Retrieves field information for the `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_GetInSpecInterlaceLabel(<br/>  AEIO_InSpecH  inH,<br/>  FIEL_Label  \*interlaceP);</pre> |
| `AEGP_SetInSpecInterlaceLabel` | Specifies field information for the `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_SetInSpecInterlaceLabel(<br/>  AEIO_InSpecH  inH,<br/>  const FIEL_Label  \*interlaceP);</pre> |
| `AEGP_GetInSpecAlphaLabel` | Retrieves alpha channel interpretation information for the `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_GetInSpecAlphaLabel(<br/>  AEIO_InSpecH   inH,<br/>  AEIO_AlphaLabel  \*alphaP);</pre> |
| `AEGP_SetInSpecAlphaLabel` | Sets alpha channel interpretation information for the `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_SetInSpecAlphaLabel(<br/>  AEIO_InSpecH   inH,<br/>  const AEIO_AlphaLabel* alphaP);</pre> |
| `AEGP_GetInSpecDuration` | Retrieves the duration of the `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_GetInSpecDuration(<br/>  AEIO_InSpecH  inH,<br/>  A_Time  \*durationP);</pre> |
| `AEGP_SetInSpecDuration` | Sets the duration of the `AEIO_InSpecH`. |
| | !!! note |
| | As of 5.5, this must be called, even for frame-based file formats. |
| | If you don't set the `A_Time.scale` to something other than zero, your file(s) will not import. |
| | This will be fixed in future versions. |
| | <pre lang="cpp">AEGP_SetInSpecDuration(<br/>  AEIO_InSpecH  inH,<br/>  const A_Time  \*durationP);</pre> |
| `AEGP_GetInSpecDimensions` | Retrieves the width and height of the image data in the `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_GetInSpecDimensions(<br/>  AEIO_InSpecH  inH,<br/>  A_long  \*widthPL0,<br/>  A_long  \*heightPL0);</pre> |
| `AEGP_SetInSpecDimensions` | Indicates to After Effects the width and height of the image data in the `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_SetInSpecDimensions(<br/>  AEIO_InSpecH  inH,<br/>  A_long  widthL,<br/>  A_long  heightL);</pre> |
| `AEGP_InSpecGetRational` Dimensions | Retrieves the width, height, bounding rect, and scaling factor applied to an `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_InSpecGetRationalDimensions(<br/>  AEIO_InSpecH  inH,<br/>  const AEIO_RationalScale  \*rs0,<br/>  A_long  \*width0,<br/>  A_long  \*height0,<br/>  A_Rect  \*r0);</pre> |
| `AEGP_GetInSpecHSF` | Retrieves the horizontal scaling factor applied to an `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_GetInSpecHSF(<br/>  AEIO_InSpecH  inH,<br/>  A_Ratio   \*hsf);</pre> |
| `AEGP_SetInSpecHSF` | Sets the horizontal scaling factor of an `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_SetInSpecHSF(<br/>  AEIO_InSpecH   inH,<br/>  const A_Ratio  \*hsf);</pre> |
| `AEGP_GetInSpecSoundRate` | Obtains the sampling rate (in samples per second) for the audio data referenced by the `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_GetInSpecSoundRate(<br/>  AEIO_InSpecH  inH,<br/>  A_FpLong  \*ratePF);</pre> |
| `AEGP_SetInSpecSoundRate` | Sets the sampling rate (in samples per second) for the audio data referenced by the `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_SetInSpecSoundRate(<br/>  AEIO_InSpecH  inH,<br/>  A_FpLong  rateF);</pre> |
| `AEGP_GetInSpecSoundEncoding` | Obtains the encoding method (signed PCM, unsigned PCM, or floating point) from an AEIO_InSpecH. |
| | <pre lang="cpp">AEGP_GetInSpecSoundEncoding(<br/>  AEIO_InSpecH  inH,<br/>  AEIO_SndEncoding  \*encodingP);</pre> |
| `AEGP_SetInSpecSoundEncoding` | Sets the encoding method of an AEIO_InSpecH. |
| | <pre lang="cpp">AEGP_SetInSpecSoundEncoding(<br/>  AEIO_InSpecH  inH,<br/>  AEIO_SndEncoding  encoding);</pre> |
| `AEGP_GetInSpecSoundSampleSize` | Retrieves the bytes-per-sample (1,2, or 4) from an `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_GetInSpecSoundSampleSize(<br/>  AEIO_InSpecH  inH,<br/>  AEIO_SndSampleSize  \*bytes_per_smpP);</pre> |
| `AEGP_SetInSpecSoundSampleSize` | Set the bytes per sample of an `AEIO_InSpecH`. |
| | <pre lang="cpp">AEGP_SetInSpecSoundSampleSize(<br/>  AEIO_InSpecH  inH,<br/>  AEIO_SndSampleSize  bytes_per_sample);</pre> |
| `AEGP_GetInSpecSoundChannels` | Determines whether the audio in the `AEIO_SndChannels` is mono or stereo. |
| | <pre lang="cpp">AEGP_GetInSpecSoundChannels(<br/>  AEIO_InSpecH  inH,<br/>  AEIO_SndChannels  \*num_channelsP);</pre> |
| `AEGP_SetInSpecSoundChannels` | Sets the audio in an `AEIO_SndChannels` to mono or stereo. |
| | <pre lang="cpp">AEGP_SetInSpecSoundChannels(<br/>  AEIO_InSpecH  inH,<br/>  AEIO_SndChannels  num_channels);</pre> |
| `AEGP_AddAuxExtMap` | If your file format has auxiliary files which you want to prevent users from opening directly, pass it's extension, file type and creator to this function to keep it from appearing in input dialogs. |
| | <pre lang="cpp">AEGP_AddAuxExtMap(<br/>  const A_char  \*extension,<br/>  A_long  file_type,<br/>  A_long  creator);</pre> |
| `AEGP_SetInSpecEmbeddedColorProfile` | In case of RGB data, if there is an embedded icc profile, build an `AEGP_ColorProfile` out of this icc profile using `AEGP_GetNewColorProfileFromICCProfile` from [AEGP_ColorSettingsSuite5](../../aegps/aegp-suites#aegp_colorsettingssuite5) and set the profile description set to NULL. |
| | In case of non-RGB data, if there is an embedded non-RGB icc profile or you know the color space the data is in, set the color profile set to NULL, and provide the description as a NULL-terminated unicode string. Doing this disables color management UI that allows user to affect profile choice in the application UI. |
| | If you are unpacking non-RGB data directly into working space (to get working space use `AEGP_GetNewWorkingSpaceColorProfile`), you are done. |
| | If you are unpacking non-RGB data into specific RGB color space, you must pass the profile describing this space to `AEGP_SetInSpecAssignedColorProfile` below. Otherwise, your RGB data will be incorrectly interpreted as being in working space. |
| | Either color profile or profile description should be NULL in this function. You cannot use both. |
| | <pre lang="cpp">AEGP_SetInSpecEmbeddedColorProfile(<br/>  AEIO_InSpecH   inH,<br/>  AEGP_ConstColorProfileP  color_profileP0,<br/>  const A_UTF16Char  \*profile_descP0);</pre> |
| `AEGP_SetInSpecAssignedColorProfile` | Assign a valid RGB color profile to the footage. |
| | <pre lang="cpp">AEGP_SetInSpecAssignedColorProfile(<br/>  AEIO_InSpecH   inH,<br/>  AEGP_ConstColorProfileP  color_profileP);</pre> |
| `AEGP_GetInSpecNativeStartTime` | New in CC. Retrieves the native start time of the footage. |
| | <pre lang="cpp">AEGP_GetInSpecNativeStartTime(<br/>  AEIO_InSpecH  inH,<br/>  A_Time  \*startTimeP);</pre> |
| `AEGP_SetInSpecNativeStartTime` | New in CC. Assign a native start time to the footage. |
| | <pre lang="cpp">AEGP_SetInSpecNativeStartTime(<br/>  AEIO_InSpecH  inH,<br/>  const A_Time  \*startTimeP);</pre> |
| `AEGP_ClearInSpecNativeStartTime` | New in CC. Clear the native start time of the footage. |
| | Setting the native start time to 0 using `AEGP_SetInSpecNativeStartTime` doesn't do this. |
| | It still means there is a special native start time provided. |
| | <pre lang="cpp">AEGP_ClearInSpecNativeStartTime(<br/>  AEIO_InSpecH  inH);</pre> |
| `AEGP_GetInSpecNativeDisplayDropFrame` | New in CC. Retrieve the drop-frame setting of the footage. |
| | <pre lang="cpp">AEGP_GetInSpecNativeDisplayDropFrame(<br/>  AEIO_InSpecH  inH,<br/>  A_Boolean   \*displayDropFrameBP);</pre> |
| `AEGP_SetInSpecNativeDisplayDropFrame` | New in CC. Assign the drop-frame setting of the footage. |
| | <pre lang="cpp">AEGP_SetInSpecNativeDisplayDropFrame(<br/>  AEIO_InSpecH  inH,<br/>  A_Boolean   displayDropFrameB);</pre> |

---

## What Goes Out

These functions manage all interactions with an output specification in After Effects' render queue.

### AEGPIOOutSuite4

| Function | Purpose |
|---|---|
| `AEGP_GetOutSpecOptionsHandle` | Retrieves the Options for the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_GetOutSpecOptionsHandle(<br/>  AEIO_OutSpecH  outH,<br/>  void   \*optionsPPV);</pre> |
| `AEGP_SetOutSpecOptionsHandle` | Sets the Options for the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_SetOutSpecOptionsHandle(<br/>  AEIO_OutSpecH  outH,<br/>  void   \*optionsPV,<br/>  void   \*old_optionsPPV);</pre> |
| `AEGP_GetOutSpecFilePath` | Obtains the path for the `AEIO_OutSpecH`. |
| | The file path is a handle to a NULL-terminated A_UTF16Char string, and must be disposed with `AEGP_FreeMemHandle`. |
| | If `file_rsrvdPB` returns `TRUE`, the plug-in should not overwrite it (After Effects has already created an empty file); doing so can cause network renders to fail. |
| | <pre lang="cpp">AEGP_GetOutSpecFilePath(<br/>  AEIO_OutSpecH   outH,<br/>  AEGP_MemHandle  \*unicode_pathPH,<br/>  A_Boolean   \*file_rsrvdPB);</pre> |
| `AEGP_GetOutSpecFPS` | Obtains the frames per second of the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_GetOutSpecFPS(<br/>  AEIO_OutSpecH  outH,<br/>  A_Fixed  \*native_fpsP);</pre> |
| `AEGP_SetOutSpecNativeFPS` | Sets the frames per second of the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_SetOutSpecNativeFPS(<br/>  AEIO_OutSpecH  outH,<br/>  A_Fixed  native_fpsP);</pre> |
| `AEGP_GetOutSpecDepth` | Obtains the pixel bit depth of the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_GetOutSpecDepth(<br/>  AEIO_OutSpecH  outH,<br/>  A_short  \*depthPS);</pre> |
| `AEGP_SetOutSpecDepth` | Sets the pixel bit depth of the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_SetOutSpecDepth(<br/>  AEIO_OutSpecH  outH,<br/>  A_short  depthPS);</pre> |
| `AEGP_GetOutSpecInterlaceLabel` | Obtains field information for the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_GetOutSpecInterlaceLabel(<br/>  AEIO_OutSpecH  outH,<br/>  FIEL_Label   \*interlaceP);</pre> |
| `AEGP_SetOutSpecInterlaceLabel` | Set the field information for the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_SetOutSpecInterlaceLabel(<br/>  AEIO_OutSpecH   outH,<br/>  const FIEL_Label  \*interlaceP);</pre> |
| `AEGP_GetOutSpecAlphaLabel` | Obtains alpha interpretation information for the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_GetOutSpecAlphaLabel(<br/>  AEIO_OutSpecH  outH,<br/>  AEIO_AlphaLabel  \*alphaP);</pre> |
| `AEGP_SetOutSpecAlphaLabel` | Sets the alpha interpretation for the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_SetOutSpecAlphaLabel(<br/>  AEIO_OutSpecH  outH,<br/>  const AEIO_AlphaLabel  \*alphaP);</pre> |
| `AEGP_GetOutSpecDuration` | Obtains the duration of the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_GetOutSpecDuration(<br/>  AEIO_OutSpecH  outH,<br/>  A_Time   \*durationP);</pre> |
| `AEGP_SetOutSpecDuration` | Sets the duration of the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_SetOutSpecDuration(<br/>  AEIO_OutSpecH  outH,<br/>  const A_Time   \*durationP);</pre> |
| `AEGP_GetOutSpecDimensions` | Obtains the dimensions of the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_GetOutSpecDimensions(<br/>  AEIO_OutSpecH  outH,<br/>  A_long   \*widthPL0,<br/>  A_long   \*heightPL0);</pre> |
| `AEGP_GetOutSpecHSF` | Obtains the horizontal scaling factor of the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_GetOutSpecHSF(<br/>  AEIO_OutSpecH  outH,<br/>  A_Ratio  \*hsf);</pre> |
| `AEGP_SetOutSpecHSF` | Sets the horizontal scaling factor of the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_SetOutSpecHSF(<br/>  AEIO_OutSpecH  outH,<br/>  const A_Ratio  \*hsf);</pre> |
| `AEGP_GetOutSpecSoundRate` | Obtains the sampling rate for the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_GetOutSpecSoundRate(<br/>  AEIO_OutSpecH  outH,<br/>  A_FpLong   \*ratePF);</pre> |
| `AEGP_SetOutSpecSoundRate` | Sets the sampling rate for the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_SetOutSpecSoundRate(<br/>  AEIO_OutSpecH  outH,<br/>  A_FpLong   rateF);</pre> |
| `AEGP_GetOutSpecSoundEncoding` | Obtains the sound encoding format of the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_GetOutSpecSoundEncoding(<br/>  AEIO_OutSpecH   outH,<br/>  AEIO_SndEncoding  \*encodingP);</pre> |
| `AEGP_SetOutSpecSoundEncoding` | Sets the sound encoding format of the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_SetOutSpecSoundEncoding(<br/>  AEIO_OutSpecH   outH,<br/>  AEIO_SndEncoding  encoding);</pre> |
| `AEGP_GetOutSpecSoundSampleSize` | Obtains the bytes-per-sample of the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_GetOutSpecSoundSampleSize(<br/>  AEIO_OutSpecH   outH,<br/>  AEIO_SndSampleSize  \*bpsP);</pre> |
| `AEGP_SetOutSpecSoundSampleSize` | Sets the bytes-per-sample of the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_SetOutSpecSoundSampleSize(<br/>  AEIO_OutSpecH   outH,<br/>  AEIO_SndSampleSize  bpsP);</pre> |
| `AEGP_GetOutSpecSoundChannels` | Obtains the number of sounds channels in the  `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_GetOutSpecSoundChannels(<br/>  AEIO_OutSpecH   outH,<br/>  AEIO_SndChannels  \*channelsP);</pre> |
| `AEGP_SetOutSpecSoundChannels` | Sets the number of sounds channels in the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_SetOutSpecSoundChannels(<br/>  AEIO_OutSpecH   outH,<br/>  AEIO_SndChannels  channels);</pre> |
| `AEGP_GetOutSpecIsStill` | Determines whether the `AEIO_OutSpecH` is a still. |
| | <pre lang="cpp">AEGP_GetOutSpecIsStill(<br/>  AEIO_OutSpecH  outH,<br/>  A_Boolean  \*is_stillPB);</pre> |
| `AEGP_GetOutSpecPosterTime` | Obtains the time of the `AEIO_OutSpecH's` poster frame. |
| | <pre lang="cpp">AEGP_GetOutSpecPosterTime(<br/>  AEIO_OutSpecH  outH,<br/>  A_Time   \*poster_timeP);</pre> |
| `AEGP_GetOutSpecStartFrame` | Obtains the time of the first frame in the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_GetOutSpecStartFrame(<br/>  AEIO_OutSpecH  outH,<br/>  A_long   \*start_frameP);</pre> |
| `AEGP_GetOutSpecPullDown` | Obtains the pulldown phase of the `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_GetOutSpecPullDown(<br/>  AEIO_OutSpecH  outH,<br/>  AEIO_Pulldown  \*pulldownP);</pre> |
| `AEGP_GetOutSpecIsMissing` | Passes back TRUE if there is no `AEIO_OutSpecH`. |
| | <pre lang="cpp">AEGP_GetOutSpecIsMissing(<br/>  AEIO_OutSpecH  outH,<br/>  A_Boolean  \*missingPB);</pre> |
| `AEGP_GetOutSpecShouldEmbedICCProfile` | Returns TRUE if the AEIO should embed a color profile in the output. |
| | <pre lang="cpp">AEGP_GetOutSpecShouldEmbedICCProfile(<br/>  AEIO_OutSpecH  outH,<br/>  A_Boolean  \*embedPB);</pre> |
| `AEGP_GetNewOutSpecColorProfile` | Returns an (opaque) ICC color profile for embedding in the AEIO's output. |
| | Must be disposed with `AEGP_DisposeColorProfile`. |
| | <pre lang="cpp">AEGP_GetNewOutSpecColorProfile(<br/>  AEGP_PluginID   aegp_plugin_id,<br/>  AEIO_OutSpecH   outH,<br/>  AEGP_ColorProfileP  \*color_profilePP);</pre> |
| `AEGP_GetOutSpecOutputModule` | Returns the `AEGP_RQItemRefH` and `AEGP_OutputModuleRefH` associated with the given `AEIO_OutSpecH`. |
| | Fails if the render queue item is not found, or if `AEIO_OutSpecH` is not a confirmed outH and is a copy, i.e. if the Output Module settings dialog is open and the user hasn't hit OK. |
| | <pre lang="cpp">AEGP_GetOutSpecOutputModule(<br/>  AEIO_OutSpecH  outH,<br/>  AEGP_RQItemRefH  \*rq_itemP,<br/>  AEGP_OutputModuleRefH  \*om_refP);</pre> |
