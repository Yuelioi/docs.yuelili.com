---
title: addvertex
order: 3
---
`int  addvertex(int geohandle, int prim_num, int point_num)`

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or [geoself](/en/houdini-vex/geometry/geoself "Returns a handle to the current geometry."), which means the current geometry in a node. (This argument may be used in the future to allow writing to other geometries.)

`prim_num`

The primitive number to add the vertex to.

`point_num`

The point number to wire the new vertex to.

Returns

Returns a *linear* vertex index, or `-1` if the vertex could not be added. You can use this number with [setvertexattrib](/en/houdini-vex/attributes-and-intrinsics/setvertexattrib "Sets a vertex attribute in a geometry.") to set attributes on the new vertex, however this number may not be the final vertex index.
