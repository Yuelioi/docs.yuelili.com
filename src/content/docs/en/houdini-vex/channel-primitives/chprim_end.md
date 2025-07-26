---
title: chprim_end
order: 3
---
`float  chprim_end(<geometry>geometry, int prim)`

Returns the end time in seconds of a channel primitive.

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or [geoself](/en/houdini-vex/geometry/geoself "Returns a handle to the current geometry."), which means the current geometry in a node. (This argument may be used in the future to allow writing to other geometries.)

`prim`

The primitive number of the channel primitive.
