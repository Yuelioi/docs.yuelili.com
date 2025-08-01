---
title: cone
order: 6
---
`bsdf  cone(vector normal, vector dir, float angle, ...)`

Returns a `bsdf` representing a cone reflection along a given direction vector. This BSDF is constant within the given angle, producing a similar result to the [gather](/en/houdini-vex/shading-and-rendering/gather "Sends rays into the scene and returns information from the shaders of
surfaces hit by the rays.") or [irradiance](/en/houdini-vex/shading-and-rendering/irradiance "Computes irradiance (global illumination) at the point P with the normal N.") loops.

`bsdf  cone(vector dir, float angle, ...)`

In shading contexts, fills in the current surface normal automatically.

![](../_static/rendering/cone.png)

`normal`

The surface normal direction.

`dir`

The direction of specularity.

`angle`

Cone angle **in radians**.
