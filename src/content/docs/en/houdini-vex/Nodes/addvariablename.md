---
title: addvariablename
order: 1
---
`void  addvariablename(string aname, string vname)`

In contexts with current geometry, this adds a mapping to the geometry.

`int  addvariablename(int geohandle, string aname, string vname)`

Adds the mapping to the given geometry. Returns the `geohandle` on success.

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or [geoself](/en/houdini-vex/geometry/geoself "Returns a handle to the current geometry."), which means the current geometry in a node. (This argument may be used in the future to allow writing to other geometries.)

Adds the mapping of the attribute `aname` to the local variable `vname`. In
SOPs that support this, you will then have the
local variable `$vname` referencing the attribute aname. This
emulates the behavior of the [AttribCreate SOP](../../nodes/sop/attribcreate.html "Adds or edits user defined attributes.").
