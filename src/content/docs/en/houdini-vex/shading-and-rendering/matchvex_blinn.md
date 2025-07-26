---
title: matchvex_blinn
order: 52
---
`bsdf  matchvex_blinn(float exponent, ...)`

`bsdf  matchvex_blinn(vector nml, float exponent, ...)`

![](../_static/rendering/matchvex_blinn.png)
The BSDF produced by [blinn](/en/houdini-vex/bsdfs/blinn "Returns a Blinn BSDF or computes Blinn shading.") is not the same as the traditional VEX
`blinn()` output. Use this function to produce a closer approximate match to
the traditional VEX `blinn()`.
