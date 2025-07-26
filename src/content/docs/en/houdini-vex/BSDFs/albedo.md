---
title: albedo
order: 1
---
`vector  albedo(bsdf b, ...)`

`vector  albedo(bsdf b, int mask, ...)`

`vector  albedo(bsdf b, vector viewer, ...)`

`vector  albedo(bsdf b, vector viewer, int mask, ...)`

`viewer`

Vector toward viewer.

`mask`

A bitmask composed from values representing different shading components.

See [bouncemask](/en/houdini-vex/shading-and-rendering/bouncemask) for information on component label bitmasks.
