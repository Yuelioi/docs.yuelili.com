---
title: mask_bsdf
order: 15
---
`bsdf  mask_bsdf(bsdf b, int mask)`

`b`

BSDF to mask.

`mask`

A bitmask indicating which types of shading component bounces to evaluate.

See [bouncemask](/en/houdini-vex/shading-and-rendering/bouncemask) for information on component label bitmasks.

Examples

## examples

```vex
// outF will have every component from inF except refraction
bsdf outF = mask_bsdf(inF, PBR_ALL_MASK & ~PBR_REFRACT_MASK);

```
