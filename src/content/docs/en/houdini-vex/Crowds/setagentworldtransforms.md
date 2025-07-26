---
title: setagentworldtransforms
order: 63
---
`void  setagentworldtransforms(int geohandle, int prim, matrix transforms[])`

When modifying a single transform, using [setagentworldtransform](/en/houdini-vex/crowds/setagentworldtransform "Overrides the world space transform of an agent primitive’s bone.") instead can be significantly faster.

`geohandle`

Handle to the geometry to write to. `geoself()` can be used to get a handle to the current geometry.

`prim`

The primitive number.

`transforms`

The new transform (in world space) of each bone in the agent’s rig.
