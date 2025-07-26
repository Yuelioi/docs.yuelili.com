---
title: setagentcollisionlayers
order: 57
---
| Since | 19.0 |
| --- | --- |

`int  setagentcollisionlayers(int geohandle, int prim, string layernames[])`

`int  setagentcollisionlayers(int geohandle, int prim, int layer_ids[])`

`geohandle`

Handle to the geometry to write to. `geoself()` can be used to get a handle to the current geometry.

`prim`

The primitive number.

`layernames`

A list of agent layer names.

`layer_ids`

A list of agent layer indices, as returned by [agentfindlayer](/en/houdini-vex/crowds/agentfindlayer "Finds the index of a layer in an agent’s definition.").
