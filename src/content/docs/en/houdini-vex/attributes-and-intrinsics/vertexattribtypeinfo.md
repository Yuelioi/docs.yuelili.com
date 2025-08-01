---
title: vertexattribtypeinfo
order: 81
---
`string  vertexattribtypeinfo(<geometry>geometry, string attribute_name)`

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

See [attribtypeinfo](/en/houdini-vex/attributes-and-intrinsics/attribtypeinfo "Returns the transformation metadata of a geometry attribute.") for more information.
