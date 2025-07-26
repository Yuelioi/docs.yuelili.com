---
title: chprim_eval
order: 4
---
`float  chprim_eval(<geometry>geometry, int prim, float time)`

Returns the evaluated value of the channel primitive at the given time.

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or [geoself](/en/houdini-vex/geometry/geoself "Returns a handle to the current geometry."), which means the current geometry in a node. (This argument may be used in the future to allow writing to other geometries.)

`prim`

The primitive number of the channel primitive to evaluate.

`time`

The time in seconds at which to evaluate.
