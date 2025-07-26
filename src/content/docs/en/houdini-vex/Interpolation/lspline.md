---
title: lspline
order: 12
---
`float  lspline(float sample_pos, float value1, ...)`

Samples a polyline defined by a series of (linearly spaced) values.
This is useful for specifying a 1D data ramp.

`vector  lspline(float sample_pos, vector value1, ...)`

`vector4  lspline(float sample_pos, vector4 value1, ...)`

Samples a polyline defined by a series of (linearly spaced) vector values.
This is useful for specifying a color ramp.

If you need variably-spaced keys, use [lkspline](/en/houdini-vex/interpolation/lkspline "Samples a polyline between the key points.") instead.

`sample_pos`

The position along the curve at which to sample the value.

`valuen`

To define the shape of the curve, you pass a number of values specifying the key points through which the curve passes. The function automatically spaces the keys evenly.

Tip
The [spline](/en/houdini-vex/math/spline "Samples a value along a polyline or spline curve.") function is a more flexible superset of this function.
