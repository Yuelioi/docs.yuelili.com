---
title: detailattribsize
order: 16
---
`int  detailattribsize(<geometry>geometry, string attribute_name)`

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

See [attribsize](/en/houdini-vex/attributes-and-intrinsics/attribsize "Returns the size of a geometry attribute.") for more information.

Returns `0` if the attribute cannot be found.
