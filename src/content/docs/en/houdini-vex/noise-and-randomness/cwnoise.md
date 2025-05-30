---
title: cwnoise
order: 8
---
`void  cwnoise(float position, int &seed, float &f1, float &f2)`

`void  cwnoise(float position, int &seed, float &f1, float &f2, float &f3, float &f4)`

Generates 1D noise.

`void  cwnoise(float position, int &seed, float &f1, float &f2, int peiod)`

`void  cwnoise(float position, int &seed, float &f1, float &f2, float &f4, float &f4, int period)`

Generates periodic 1D noise.

`void  cwnoise(float posx, float posy, int &seed, float &f1, float &f2)`

`void  cwnoise(float posx, float posy, int &seed, float &f1, float &f2, float &f3, float &f4)`

Generates 2D noise. This is similar to the other forms but uses pairs of floats instead of a vector.

`void  cwnoise(float posx, float posy, int &seed, float &f1, float &f2, int periodx, int periody)`

`void  cwnoise(float posx, float posy, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody)`

Generates periodic 2D noise.

`void  cwnoise(vector2 position, int &seed, float &f1, float &f2)`

`void  cwnoise(vector2 position, int &seed, float &f1, float &f2, float &f3, float &f4)`

Generates 2D noise.

`void  cwnoise(vector2 position, int &seed, float &f1, float &f2, int periodx, int periody)`

`void  cwnoise(vector2 position, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody)`

Generates periodic 2D noise.

`void  cwnoise(vector position, int &seed, float &f1, float &f2)`

`void  cwnoise(vector position, int &seed, float &f1, float &f2, float &f3, float &f4)`

Generates 3D noise.

`void  cwnoise(vector position, int &seed, float &f1, float &f2, int periodx, int periody, int periodx)`

`void  cwnoise(vector position, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody, int periodz)`

Generates periodic 3D noise.

`void  cwnoise(vector4 position, int &seed, float &f1, float &f2)`

`void  cwnoise(vector4 position, int &seed, float &f1, float &f2, float &f3, float &f4)`

Generates 4D noise.

`void  cwnoise(vector4 position, int &seed, float &f1, float &f2, int periodx, int periody, int periodz, int periodw)`

`void  cwnoise(vector4 position, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody, int periodz, int periodw)`

Generates periodic 4D noise.

`position`

The position at which to sample the noise.

`seed`

Outputs an integer value associated with the nearest seed point. This seed is pretty much guaranteed to be unique for every point (meaning that it’s unlikely that two points close by have the same seed associated with them).

`f1`, `f2`, `f3`, `f4`

These variables are overwritten with the distances to the nearest seed points, in order of closeness.

You can combine these distances to generate noise patterns. The noise generated tends to be very “cellular” in nature. In fact, one of the nice things is that you can determine “cell” boundaries by using the expression: `if (f2 - f1)` which will be true if the point in space is crossing the boundary between two cells.

`period`, `periodx`, `periody`, `periodz`, `periodw`

If you include the period argument(s), the function generates repeating (periodic) noise.

Worley noise scatters seed points randomly through space (according to a nice Poisson distribution). The functions outputs the distances to the 2 (or 4) seed points nearest to the sample position.
