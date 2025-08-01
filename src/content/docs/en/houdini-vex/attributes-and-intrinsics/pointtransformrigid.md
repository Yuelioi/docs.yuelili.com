---
title: pointtransformrigid
order: 41
---
| Since | 18.5 |
| --- | --- |

`matrix  pointtransformrigid(<geometry>geometry, int pnt)`

Returns a rigid transform associated with the point index.
This function uses the [standard instancing point attributes](../../copy/instanceattrs.html) to build the matrix, and [polar decomposition](/en/houdini-vex/transforms-and-space/polardecomp "Computes the polar decomposition of a matrix.") is performed to make it rigid.

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

`pnt`

The point index to query.
