---
title: ashikhmin
order: 2
---
`bsdf  ashikhmin(float exponentx, float exponenty, vector framex, vector framey, ...)`

`bsdf  ashikhmin(vector nml, float exponentx, float exponenty, vector framex, vector framey, ...)`

![](../_static/rendering/ashikhmin1.png)
![](../_static/rendering/ashikhmin2.png)
An anisotropic `bsdf` similar to `phong()` but with independent controls for the highlight size along 2 tangent vectors.

`exponentx`

Phong exponent along the `framex` vector.

`exponenty`

Phong exponent along the `framey` vector.

`framex`

Highlight X direction.

`framey`

Highlight Y direction.
