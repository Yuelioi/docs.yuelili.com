---
title: reflectlight
order: 62
---
| On this page | * [Area sampling options](#area-sampling-options) * [Ray options](#ray-options) * [Image filtering options](#image-filtering-options) * [Examples](#examples) |
| --- | --- |
| Context(s) | [shading](../contexts/shading.html) |

`vector  reflectlight(float bias, float max_contrib, ...)`

bias is typically a small number (for example 0.005) used to help
eliminate self-reflection. If bias is less than 0, the default
ray tracing bias specified with the `vm_raybias` setting will be used
instead.

max_contrib tells the renderer how much the reflected light will
contribute to the final color of the pixel. This is typically the
maximum of the reflection component of a lighting model. This has no
effect on the resultant color. This value should typically be less than
1\.

`vector  reflectlight(vector P, vector D, float bias, float max_contrib, ...)`

A general form which takes a position P and a direction D.

`vector  reflectlight(vector P, vector N, vector I, float bias, float max_contrib, ...)`

A general form which takes a position P, direction D, and
incident angle I and returns the reflection vector.

Area sampling options

## area-sampling-options

For area sampling, you must specify both the angle and sample variadic parameters. For example:

```vex
surface
blurry_mirror(float angle = 3; int samples = 16; float bias=0.05)
{
 Cf = reflectlight(bias, 1, "angle", angle, "samples", samples);
}

```

Ray options

## ray-options

Tip
When you specify a texture, such as with the `"environment"` keyword,
you can also use the image filtering keyword arguments. See [environment](/en/houdini-vex/texturing/environment "Returns the color of the environment texture.")
for a listing of the image filter keyword arguments.

"`scope`",
`string`

A list of objects which can be hit by the rays. When specified, `scope` overrides the default scope that would have been selected for the given `raystyle`. The `"scope:default"` value will cause the `scope` argument to use the default scope for the current context - as if the argument were not specified.

Allows an override of the [scope](/en/houdini-vex/contexts/shading_contexts.html#scope) for ray-intersections.
A special scope argument, `scope:self`, will match the currently
shading object.

"`currentobject`",
`material`

Used to specify what the current shading object is. For example, when used with the scope argument, `scope:self` will match the object passed in by this argument.

"`maxdist`",
`float`
`=-1`

The maximum distance to search for objects. This can be used to limit the search of objects to nearby objects only. If the `maxdist` given is negative, then it will act as if there is no maximum distance.

Allows an override of the maximum distance the ray can
travel when testing for intersections. Some functions (such as
[fastshadow](/en/houdini-vex/light/fastshadow "Sends a ray from the position P along the direction specified by the
direction D.")) have the maximum distance implicitly defined (by
the length of the ray) and should probably avoid using this
option. However, this option can be used effectively when
computing reflections, global illumination, refraction etc.

"`variancevar`",
`string`

The name of a VEX export variable to use for variance anti-aliasing. The renderer compares the value with adjacent micropolygons in micropolygon rendering to decide what shading points need additional samples (using `vm_variance` [property](../../props/index.html "Properties let you set up flexible and powerful hierarchies of rendering, shading, lighting, and camera parameters.") as a threshold). If more samples are required, the algorithm takes samples up to the specified maximum ray samples.

This variable must be imported from the hit surface, so it must be in the list of imported names (see “importing information back from the ray” below). If the named variable is not imported, this option will be ignored.

Variance antialiasing puts more samples in areas of the image with high variance, for example a sharp shadow edge. It is only used when `vm_dorayvariance` is enabled. Otherwise, only the min ray samples (or an explicitly supplied `"samples"` value) are used for antialiasing of the gather loop.

Overrides the global variance control (mantra’s -v option)
which is used to determine anti-aliasing quality of ray tracing.
For more information please refer to the documentation on
mantra.

"`angle`",
`float`
`=0`

The distribution angle (specified in radians). For gather(), rays will be distributed over this angle. For trace(), the angle is used to indicate the rate at which the filter width should increase with increasing intersection distance. Larger angles will cause farther hit surfaces to use larger derivatives, leading to improved texturing and displacement performance.

To be effective, the samples parameter should also be specified.

"`samples`",
`int|float`
`=1`

How many samples should be sent out to filter rays. For the
irradiance and occlusion functions, specifying a samples
parameter will override the default irradiance sampling.

"`environment`",
`string`

If the ray sent out to the scene misses everything, then
it’s possible to specify an environment map to evaluate.

Using the ray’s direction, the environment map specified
will be evaluated and the resulting color will be returned.
Most likely, it will be necessary to specify a transform
space for the environment map evaluations.

In the case of refractlight and trace the Of and Af
variables will be set to 0 regardless of the background
color specified. the resulting color.

When an environment map is specified, the filtering options
from texture() are also supported.

See [how to create an environment/reflection map](../../render/envmaps.html).

"`envobject`",
`string`

If an environment map is used, the orientation of the
environment map can be specified by transforming the ray
into the space of another object, light or fog object in the
scene. In Houdini, null objects can be used to specify the
orientation. For example:

```vex
Cf = R*reflectlight(bias, max(R), "environment", "map.rat", "envobject", "null_object_name");

```

"`envlight`",
`string`

If an environment map is used, the orientation of the
environment map can be specified by transforming the ray
into the space of a light in the scene.

"`envtint`",
`vector`

If an environment map is used, tint it with this color.

"`background`",
`vector`

If a ray misses all objects, use this as the
background color of the scene. In the case of refractlight and
trace the Of and Af variables will be set to 0 regardless of the
background color specified.

"`distribution`",
`string`

**Functions**: [irradiance](/en/houdini-vex/shading-and-rendering/irradiance "Computes irradiance (global illumination) at the point P with the normal N."), [occlusion](/en/houdini-vex/shading-and-rendering/occlusion "Computes ambient occlusion.")

Distribution for computing irradiance. The default is to use
a cosine distribution (diffuse illumination). The possible
values for the style are `"nonweighted"` for uniform sampling
or `"cosine"` for cosine weighted sampling.

Image filtering options

## image-filtering-options

Examples of specifying filter parameters:

```vex
colormap(map, u, v, "smode", "decal", "tmode", "repeat", "border", {.1,1,1});
colormap(map, u, v, "mode", "clamp", "width", 1.3);
colormap(map, u, v, "filter", "gauss", "width", 1.3, "mode", "repeat");

```

If the texture is a deep `.rat` file, you can use the `"channel"` keyword argument
to specify a channel in the file:

```vex
string channelname = "N";
cf = colormap(map, u, v, "channel", channelname);
```

- When you read a texture in a format other than Houdini’s native `.pic` or `.rat`, Houdini uses [OpenImageIO](http://en.wikipedia.org/wiki/OpenImageIO) to read the image data from the file. In that case, some of the variadic arguments below may not have any effect.

- When the texture function evaluates non-houdini format textures, Houdini switches to use OpenImageIO for texture evaluation. While there are corresponding values to many of the variadic keywords, some keywords don’t have an equivalent function in OpenImageIO.

 - OIIO will *not* create MIP maps for images that don’t have multi-resolution images by default. You can turn this on by adding `automip=1` to the content of the the `OPENIMAGEIO_IMAGECACHE_OPTIONS` environment variable.

Without MIP maps, blurring and filtering may not work as expected.
\* You can also use `OPENIMAGEIO_IMAGECACHE_OPTIONS` to override the amount of memory OIIO uses for caching.

By default, Houdini will set the cache memory to 1/8th of the physical computer memory. If you set the `OPENIMAGEIO_IMAGECACHE_OPTIONS` variable it overrides that computed cache size.

"`wrap`",
`string`
`="repeat"`

`repeat` or `periodic`

The image map will repeat outside the range 0 to 1.
Basically, the integer component of the texture
coordinate is ignored. This is the default.

`clamp` or `edge` or `streak`

The texture coordinates will be clamped to the range 0
to 1. This causes evaluations outside the range to
evaluate to the color at the closest edge of the image
(the border pixels are streaked outside the range).

`black` or `decal` or `color`

Coordinates outside the range 0 to 1 will evaluate to
the border color (rather than a color in the image). The
border color is black (i.e. 0) by default.

"`uwrap`",
`string`

(AKA `swrap`)
Specifies the behavior when the u coordinate is outside
the range 0 to 1. The values are the same as with `wrap`.

"`vwrap`",
`string`

(AKA `twrap`)
Specifies the behavior when the v coordinate is outside
the range 0 to 1. The values are the same as with `wrap`.

"`border`",
`float|vector|vector4`
`=0`

Specifies the border color when Black/Decal/Color wrapping is used.
**Has no effect for OpenImageIO formats**.

"`default_color`",
`float|vector|vector4`

Specifies the color to use when the texture map cannot be found. If this
argument is not given, the color is set by the
HOUDINI_DEFAULT_TEXTURE_COLOR variable.

"`channel`",

Specifies the color channel for textures that have multiple color
planes (for example, `diffuse_indirect` or `N`).
For ptex images, this specifies the index of the first channel
(for example, `0` or `4`).

"`blur`",
`float`

Blurs in x and y directions. Blur is measured as a percentage
of the image size - so a blur of 0.1 will blur 10% of the image
width. Use `xblur` and `yblur` if you need different blur
amounts in either dimension.

"`xblur`",

(AKA `ublur`, `sblur`)
Blur amount in the x image direction.

"`yblur`",

(AKA `vblur`, `tblur`)
Blur amount in the y image direction.

"`pixelblur`",
`float`

Blurs the texture by a floating point number of pixels.
**Has no effect for OpenImageIO formats**.

```vex
Cf = texture("map.rat", ss, tt, "pixelblur", 2.0);

```

"`xpixelblur`",
`float`

Blurs the texture by a floating point number of pixels in the X direction.

"`ypixelblur`",
`float`

Blurs the texture by a floating point number of pixels in the Y direction.

"`filter`",
`string`
`="box"`

Specifies the type of anti-aliasing filter to be used for
evaluation.

**For Houdini native formats**, the following value should be a string specifying one of:

`"point"`

Point sampling (i.e. no filtering)

`"box"`

Box filter (default)

`"gauss"`

Gaussian filter

`"bartlett"`

Bartlett/Triangular filter

`"sinc"`

Sinc sharpening filter

`"hanning"`

Hanning filter

`"blackman"`

Blackman filter

`"catrom"`

Catmull-Rom filter

**For all other formats (loaded by OpenImageIO)**, specifying the `"point"` filter sets the OIIO interpolation mode to `"closest"` and disables MIP mapping. Any other value uses OIIO smart-bicubic interpolation. You can get finer control using the `"filtermode"` variadic argument (see below).

"`xfilter`",
`string`

(AKA `ufilter`, `sfilter`)
Specifies the filter for the X direction. The filters are
the same as with `filter`.

"`yfilter`",
`string`

(AKA `vfilter`, `tfilter`)
Specifies the filter for the Y direction. The filters are
the same as with `filter`.

"`filtermode`",
`string`

**For Houdini native formats**, VEX also supports simpler filtering. The
`filtermode` can be set to one of:

`filter`

Use the filter specified by the `filter` keyword argument.

`bilinear`

Use simple bilinear filtering. This is the fastest specialized filtering mode, but provides the lowest quality filtering.

`biquadratic`

Use simple quadratic filtering (order 3 filtering).

`bicubic`

Use simple bicubic filtering.

When the `filtermode` is set to `bilinear`, `biquadratic` or `bicubic`,
several arguments (like `filter` and `width`) are ignored and a fixed
interpolation filter is used instead. Other arguments (notably the `lerp`
and `blur` keywords) are still valid.

**For all other formats (loaded by OpenImageIO)** you can set the `filtermode` to `"filter"` (see `"filter"` above), `"bilinear"`, `"biquadratic"`, or `"bicubic"`.

"`width`",
`float`
`=1.0`

**For Houdini native formats**, this sets the filter width in both X and Y directions.

**For all other formats (loaded by OpenImageIO)**, this sets the OIIO `swidth` and `twidth` options.

"`xwidth`",
`float`

(AKA `uwidth`, `swidth`)
Filter width in the X direction.

"`ywidth`",
`float`

(AKA `vwidth`, `twidth`)
Filter width in the Y direction.

"`zwidth`",
`float`

Filter width in the Z direction (for shadow maps).
This is measured in world space units, unlike the other width arguments.

"`extrapolate`",
`int`

whether to use derivative extrapolation
when computing anti-aliasing information. Extrapolation of
derivatives is on by default. The argument should be either 0 or
1\.

"`lerp`",
`int`

**For Houdini native formats**, this specifies whether RAT files should interpolate between different MIP levels. By default, this is turned off. Turning interpolation on will help remove discontinuities when different
MIP levels of a `.rat` file are accessed. However, the results of texture evaluation will be slightly softer (i.e. blurrier) and will take more time.

There are three possible values for this argument.

`0`

Disable MIP map interpolation (fastest).

`1`

Approximate MIP map interpolation (fast).

`2`

High Quality MIP map interpolation (slower but highest quality).

**For all other formats (loaded by OpenImageIO)**, a value of 0 specifies a single MIP level, any other value specifies trilinear interpolation.

"`depthinterp`",
`string`

Specifies the depth interpolation mode for deep shadow maps,
to control the opacity value that will be returned when the
map is sampled between two z-records.

The argument must be a string.

`discrete`

(default) Return the first z-record before the sample
point.

`linear`

Linearly interpolate the opacities of the z-records
before and after the sample point.

See [deep shadow maps](../../render/lights.html) for more on
the difference between the two modes.

"`beerlambert`",
`int`

When evaluating volumetric deep shadow maps, this will enable Beer-Lambert
interpolation of opacity. Beer-Lambert is more a accurate but more
expensive form of interpolation.

The argument should be either 0 or 1.

"`srccolorspace`",
`string`

Specifies the color space in which the texture is stored.
When texture values are accessed, they will be translated from
this space into linear space for rendering if needed.

`auto`

(default) Determine the source color space based on the
file. Currently, this will assume sRGB color space for
8-bit textures and linear for all other textures.

`linear`

Transform to linear space. This currently only affects
8-bit textures, since all others are assumed to be already
in linear space. Use this option to force linear
interpretation of textures used for bump or displacement
maps.

`sRGB`

Forcibly translate from sRGB color space to linear space regardless of
the bit-depth or number of channels in the the texture.

`rec709`

Convert from Rec709 color space to linear space.

`gamma22`

Convert from Gamma 2.2 color space to linear space.

`raw`

Use map colors untransformed

The `srccolorspace` argument can also be any color space known to OpenColorIO.

"`face`",

When using a Ptex texture map, the `face` argument is used to specify the face for ptexture lookup.
**Has no effect for OpenImageIO formats**.

"`ptexorient`",
`int`

When using Ptex textures, the implicit texture coordinates on
polygons are used as the interpolants for texture lookup (combined
with the `face`). However, different software may have different
beliefs about winding and orientation. This keyword argument
allows you to control the interpretation of orientation for Houdini
polygons. The `ptexorient` expects an integer argument which is
composed of a bit-field

- bit 0×01: Complement the `s` coordinate
- bit 0×02: Complement the `t` coordinate
- bit 0×04: Swap the `s` and `t` coordinates

For example, a value of 6 (0×4|0×2) is equivalent to calling
`texture(map, 1-t, s)` instead of `texture(map, s, t)`.

The default `ptexorient` is 0, which works correctly with the
examples found at <http://ptex.us>.

**Has no effect for OpenImageIO formats**.

"`iesnormalization`",
`string`
`="maxvalue"`

Select different methods of normalizing IES map’s output values when
querying via `environment()` function.

`none`

Use raw values scaled by the candela multiplier in the header.

`maxvalue`

(default) Normalized by the maximum value. This is legacy behavior used
by mantra’s default light shader.

`preserveenergy`

Normalized by values integrated over coverage angles, so that IES
profile affects shaping of the light while preserving its overall
energy output.

Examples

## examples

```vex
surface mirror(vector refl_color=1; float bias=.005)
{
 Cf = refl_color * reflectlight(bias, max(refl_color));
}

```
