---
title: agentcollisionlayer
order: 20
---
Warning
This function has been deprecated. Use [agentcollisionlayers](/en/houdini-vex/crowds/agentcollisionlayers "Returns the names of an agent primitive’s collision layers.") instead.

Returns an empty string if `prim` is out of range or is not an agent primitive.

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

`prim`

The primitive number.
