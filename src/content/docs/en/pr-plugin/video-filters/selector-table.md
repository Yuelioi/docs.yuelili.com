---
title: Selector Table
---
# Selector Table

This table summarizes the various selector commands a video filter can receive.

| Selector | Optional? | Description |
|---|---|---|
| [fsInitSpec](../selector-descriptions#fsinitspec) | Yes | Allocate and initialize your parameters with default values without popping a modal setup dialog. |
| [fsHasSetupDialog](../selector-descriptions#fshassetupdialog) | Yes | New for Premiere Pro CS3. Specify whether or not the filter has a setup dialog. |
| [fsSetup](../selector-descriptions#fssetup) | Yes | Allocate memory for your parameters if necessary. |
| | | Display your modal setup dialog with default parameter values or previously stored values. |
| | | Save the new values to `specsHandle`. |
| [fsExecute](../selector-descriptions#fsexecute) | No | Filter the video using the stored parameters from `specsHandle`. |
| | | Be aware of interlaced video, and don't overlook the alpha channel! |
| [fsDisposeData](../selector-descriptions#fsdisposedata) | Yes | Dispose of any instance data created during `fsExecute`. |
| [fsCanHandlePAR](../selector-descriptions#fscanhandlepar) | Yes | Tell Premiere how your effect handles pixel aspect ratio. |
| [fsGetPixelFormatsSupported](../selector-descriptions#fsgetpixelformatssupported) | Yes | Gets pixel formats supported. Called iteratively until all formats have been given. |
| [fsCacheOnLoad](../selector-descriptions#fscacheonload) | Yes | Return fsDoNotCacheOnLoad to disable plugin caching for this filter. |
