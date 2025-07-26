---
title: trunc
order: 88
---
`float  trunc(float x)`

If the argument is negative, this returns [ceil(x)](/en/houdini-vex/math/ceil "Returns the smallest integer greater than or equal to the argument."), otherwise it returns
[floor(x)](/en/houdini-vex/math/floor "Returns the largest integer less than or equal to the argument.").

`vector2  trunc(vector2 x)`

`vector  trunc(vector x)`

`vector4  trunc(vector4 x)`

Returns a new vector with the `trunc()` of each component.
