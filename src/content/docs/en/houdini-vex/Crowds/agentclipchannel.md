---
title: agentclipchannel
order: 7
---
`int  agentclipchannel(<geometry>geometry, int prim, string clipname, string channel)`

`int  agentclipchannel(<geometry>geometry, int prim, int clipindex, string channel)`

Returns the index of a channel in the specified animation clip.
Returns -1 if `clipname` is not one of the agent’s [animation clips](/en/houdini-vex/crowds/agentclipcatalog "Returns all of the animation clips that have been loaded for an agent primitive."), `prim` is out of range, `prim` is not an agent primitive, or `channel` does not exist.

For sampling the clip’s transform channels, use [agentrigfind](/en/houdini-vex/crowds/agentrigfind "Finds the index of a transform in an agent primitive’s rig.") and either [agentclipsamplelocal](/en/houdini-vex/crowds/agentclipsamplelocal "Samples an agent’s animation clip at a specific time.") or [agentclipsampleworld](/en/houdini-vex/crowds/agentclipsampleworld "Samples an agent’s animation clip at a specific time.").

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

`prim`

The primitive number.

`clipname`

The name of the animation clip.

`clipindex`

Index of a clip in the agent’s definition.
A clip’s index can be obtained via [agentfindclip](/en/houdini-vex/crowds/agentfindclip "Finds the index of a clip in an agent’s definition.").

`channel`

Name of a channel in the animation clip.
