---
title: graphics-utility-suites
---
# Graphics Utility Suites

After Effects exposes its internal transform and graphic utility routines through the following function suites.

---

## Transform Worlds

These functions combine `PF_EffectWorlds` in interesting ways. When you use these, you're using the same code After Effects does internally.

### PF_WorldTransformSuite1

| Function | Purpose |
|---|---|
| `composite_rect` | Composite a rectangle from one `PF_EffectWorld` into another, using one of After Effects' transfer modes. |
| | <pre lang="cpp">PF_Err composite_rect (<br/>  PF_ProgPtr      effect_ref,<br/>  PF_Rect         \*src_rect,<br/>  A_long          src_opacity,<br/>  PF_EffectWorld  \*src_world,<br/>  A_long          dst_x,<br/>  A_long          dst_y,<br/>  PF_Field        field_rdr,<br/>  PF_XferMode     xfer_mode,<br/>  PF_EffectWorld  \*dst);</pre> |
| | `field_rdr` can be upper, lower or both. |
| | `xfer_mode` is one of the following: |
| | - `PF_Xfer_COPY` |
| | - `PF_Xfer_BEHIND` |
| | - `PF_Xfer_IN_FRONT` |
| `blend` | Blends two images, alpha-weighted. Does not deal with different-sized sources, though the destination may be either `PF_EffectWorld`. |
| | <pre lang="cpp">PF_Err blend (<br/>  PF_ProgPtr            effect_ref,<br/>  const PF_EffectWorld  \*src1,<br/>  const PF_EffectWorld  \*src2,<br/>  PF_Fixed              ratio,<br/>  PF_EffectWorld        \*dst);</pre> |
| `convolve` | Convolve an image with an arbitrary size kernel on each of the a, r, g, and b channels separately. |
| | You can specify a rectangle to convolve (for instance, the `extent_hint` from [PF_EffectWorld Structure](../../effect-basics/pf_effectworld#pf_effectworld-structure)), or pass 0 to convolve the entire image. |
| | Do not use if the source *is* the destination. |
| | Describe the convolution using [Kernel Flags](#kernel-flags). |
| | <pre lang="cpp">PF_Err convolve(<br/>  PF_EffectWorld  \*src,<br/>  const PF_Rect   \*area,<br/>  PF_KernelFlags  flags,<br/>  A_long          kernel_size,<br/>  void            \*a_kernel,<br/>  void            \*r_kernel,<br/>  void            \*g_kernel,<br/>  void            \*b_kernel,<br/>  PF_EffectWorld  \*dst);</pre> |
| `copy` | Copies a region from one `PF_EffectWorld` to another, preserving alpha (unlike the macOS CopyBits). |
| | <pre lang="cpp">PF_Err copy (<br/>  PF_EffectWorld  \*src,<br/>  PF_EffectWorld  \*dst,<br/>  PF_Rect         \*src_r,<br/>  PF_Rect         \*dst_r);</pre> |
| `copy_hq` | A higher fidelity version of the above (using the same parameters). |
| `transfer_rect` | Blends using a transfer mode, with an optional mask. |
| | <pre lang="cpp">PF_Err transfer_rect (<br/>  PF_ProgPtr              effect_ref,<br/>  PF_Quality              quality,<br/>  PF_ModeFlags            m_flags,<br/>  PF_Field                field,<br/>  const PF_Rect           \*src_rec,<br/>  const PF_EffectWorld    \*src_world,<br/>  const PF_CompositeMode  \*comp_mode,<br/>  const PF_MaskWorld      \*mask_world0,<br/>  A_long                  dest_x,<br/>  A_long                  dest_y,<br/>  PF_EffectWorld          \*dst_world);</pre> |
| `transform_world` | Given a `PF_EffectWorld` and a matrix (or array of matrices), transforms and blends using an After Effects transfer mode, with an optional mask. |
| | The matrices pointer points to a matrix array used for motion-blur. |
| | When is a transform not a transform? A Z-scale transform is not a transform, unless the transformed layer is a parent of other layers that do not all lie in the z=0 plane. |
| | <pre lang="cpp">PF_Err transform_world (<br/>  PF_InData               \*in_data,<br/>  PF_Quality              quality,<br/>  PF_ModeFlags            m_flags,<br/>  PF_Field                field,<br/>  const PF_EffectWorld    \*src_world,<br/>  const PF_CompositeMode  \*comp_mode,<br/>  const PF_MaskWorld      \*mask_world0,<br/>  const PF_FloatMatrix    \*matrices,<br/>  A_long                  num_matrices,<br/>  Boolean                 src2dst_matrix,<br/>  const PF_Rect           \*dest_rect,<br/>  PF_EffectWorld          \*dst_world);</pre> |

---

## Kernel Flags

Functions such as `convolve` or gaussian kernel work with kernels, or matrices of filter weight values. These matrices can be in any format. The kernel flags describe how the matrices should be created and used. OR together any flags you need.

The flags relevant to given routines are documented along with the routine prototype.The first entry in the left column is always the default and has value 0.

| Kernel Flags | Indicates |
|---|---|
| `PF_KernelFlag_2D` | Specifies a one or two dimensional kernel. |
| `PF_KernelFlag_1D` | |
| `PF_KernelFlag_UNNORMALIZED` | `NORMALIZED` equalizes the kernel; the volume under the kernel surface is the same as the volume under the covered area of pixels. |
| `PF_KernelFlag_NORMALIZED` | |
| `PF_KernelFlag_CLAMP` | `CLAMP` restricts values to the valid range for their data type. |
| `PF_KernelFlag_NO_CLAMP` | |
| `PF_KernelFlag_USE_LONG` | `USE_LONG` defines the kernel as an array of longs valued from 0 to 255. `USE_LONG` is the only implemented flag. |
| `PF_KernelFlag_USE_CHAR` | `USE_CHAR` defines the kernel as an array of unsigned chars from 0 to 255. |
| `PF_KernelFlag_USE_FIXED` | `USE_FIXED` defines the kernel as an array of fixeds from 0 to 1. |
| `PF_KernelFlag_USE_UNDEFINED` | |
| `PF_KernelFlag_HORIZONTAL` | Specifies the direction of the convolution. |
| `PF_KernelFlag_VERTICAL` | |
| `PF_KernelFlag_TRANSPARENT_BORDERS` | Use `TRANSPARENT_BORDERS` to treat pixels off the edge as alpha zero (black). |
| `PF_KernelFlag_REPLICATE_BORDERS` | Use `REPLICATE_BORDERS` to replicate border pixels when sampling off the edge. |
| | `REPLICATE_BORDERS` is not implemented and will be ignored. |
| `PF_KernelFlag_STRAIGHT_CONVOLVE` | Use `STRAIGHT_CONVOLVE` to indicate straight convolution. |
| `PF_KernelFlag_ALPHA_WEIGHT_CONVOLVE` | Use `ALPHA_WEIGHT_CONVOLVE` to tell the convolution code to alpha-weight the contributions of pixels to the resulting convolved output. |
| | `ALPHA_WEIGHT_CONVOLVE` is not implemented and will be ignored. |

---

## Fill 'Em Up!

The FillMatteSuite can be used to fill a `PF_EffectWorld`, either with a specific color or premultiplied with an alpha value.

### PF_FillMatteSuite2

| Function | Purpose |
|---|---|
| `fill` | Fills a rect with a color (or, if the color pointer is null, fills with black and alpha zero). |
| | If the rect is null, it fills the entire image. |
| | <pre lang="cpp">PF_Err fill (<br/>  PF_ProgPtr      effect_ref,<br/>  const PF_Pixel  \*color,<br/>  const PF_Rect   \*dst_rect,<br/>  PF_EffectWorld  \*world);</pre> |
| `fill16` | Same as fill, but takes a pointer to a `PF_Pixel16` color. |
| `fill_float` | Takes a pointer to a `PF_PixelFloat` color. |
| `premultiply` | Converts to (and from) r, g, and b color values pre-multiplied with black to represent the alpha channel. |
| | Quality independent. |
| | - `forward` is used as a boolean |
| | - `true` means convert non-premultiplied to pre-multiplied |
| | - `false` mean un-pre-multiply. |
| | <pre lang="cpp">PF_Err premultiply (<br/>  A_long          forward,<br/>  PF_EffectWorld  \*dst);</pre> |
| `premultiply_color` | Converts to (and from) having r, g, and b color values premultiplied with any color to represent the alpha channel. |
| | <pre lang="cpp">PF_Err premultiply_color (<br/>  PF_ProgPtr      effect_ref,<br/>  PF_EffectWorld  \*src,<br/>  PF_Pixel        \*color,<br/>  A_long          forward,<br/>  PF_EffectWorld  \*dst);</pre> |
| `premultiply_color16` | Same as above, but takes a pointer to a `PF_Pixel16` color. |
| `premultiply_color_float` | Takes a pointer to a `PF_PixelFloat` color. |

---

## Sampling Images

Note: areas outside the bounds of the image being sampled are treated as zero alpha. For convenience, the functions from `PF_Sampling8Suite1`, `PF_Sampling16Suite1`, and `PF_SamplingFloatSuite1` are all listed in this table.

### PF_SamplingSuite Functions (Multiple Suites)

| Function | Purpose |
|---|---|
| `nn_sample` | Performs nearest neighbor sampling. |
| | <pre lang="cpp">PF_Err nn_sample (<br/>  PF_ProgPtr       effect_ref,<br/>  PF_Fixed         x,<br/>  PF_Fixed         y,<br/>  const PF_SampPB  \*params,<br/>  PF_Pixel         \*dst_pixel );</pre> |
| `nn_sample16` | Same as above, but takes a pointer to a `PF_Pixel16` `dst_pixel`. |
| `nn_sample_float` | Takes a pointer to a `PF_PixelFloat` `dst_pixel`. |
| `subpixel_sample` | Queries the appropriate alpha-weighted interpolation of colors at a non-integral point in a source image, in high quality. Nearest neighbor sampling is used in low quality. |
| | Because the sampling routine, if used, will typically be called many times, it is convenient to copy the function pointer out to the callbacks structure and into a register or onto the stack to speed up your inner loop. |
| | See the sample code for an example. |
| | !!! note |
| | The sampling assumes that 0,0 is the center of the top left pixel. |
| | <pre lang="cpp">PF_Err subpixel_sample (<br/>  PF_ProgPtr       effect_ref,<br/>  PF_Fixed         x,<br/>  PF_Fixed         y,<br/>  const PF_SampPB  \*params,<br/>  PF_Pixel         \*dst_pixel);</pre> |
| `subpixel_sample16` | Same as above, but takes a pointer to a `PF_Pixel16*` `dst_pixel`. |
| `subpixel_sample_float` | Takes a pointer to a `PF_PixelFloat*` `dst_pixel`. |
| `area_sample` | Use this to calculate the appropriate alpha weighted average of an axis-aligned non-integral rectangle of color in a source image, in high quality. |
| | Nearest neighbor sampling is used in low quality. Because of overflow issues, this can only average a maximum of a 256 x 256 pixel area (i.e. x and y radius < 128 pixels). |
| | !!! note |
| | The sampling radius must be at least one in both x and y. |
| | <pre lang="cpp">PF_Err area_sample (<br/>  PF_ProgPtr       effect_ref,<br/>  PF_Fixed         x,<br/>  PF_Fixed         y,<br/>  const PF_SampPB  \*params,<br/>  PF_Pixel         \*dst_pixel);</pre> |
| | !!! note |
| | Areas outside the boundaries of the layer are considered the same as zero alpha, for sampling purposes. |
| `area_sample16` | Same as above, but takes a `PF_Pixel16*` `dst_pixel`. |

### PF_BatchSamplingSuite1 Functions

| Function | Purpose |
|---|---|
| `begin_sampling` | Your effect is going to perform some batch sampling; After Effects will perform setup tasks to optimize your sampling. |
| | <pre lang="cpp">PF_Err (*begin_sampling)(<br/>  PF_ProgPtr    effect_ref,<br/>  PF_Quality    qual,<br/>  PF_ModeFlags  mf,<br/>  PF_SampPB     \*params);</pre> |
| `end_sampling` | Tells After Effects you're done sampling. |
| | <pre lang="cpp">PF_Err (*end_sampling)(<br/>  PF_ProgPtr    effect_ref,<br/>  PF_Quality    qual,<br/>  PF_ModeFlags  mf,<br/>  PF_SampPB     \*params);</pre> |
| `get_batch_func` | Obtains a pointer to After Effects' batch sampling function (highly optimized). |
| | <pre lang="cpp">PF_Err (*get_batch_func)(<br/>  PF_ProgPtr          effect_ref,<br/>  PF_Quality          quality,<br/>  PF_ModeFlags        mode_flags,<br/>  const PF_SampPB     \*params,<br/>  PF_BatchSampleFunc  \*batch);</pre> |
| `get_batch_func16` | Obtains a pointer to After Effects' 16-bpc batch sampling function (also highly optimized). |
| | <pre lang="cpp">PF_Err (*get_batch_func16)(<br/>  PF_ProgPtr            effect_ref,<br/>  PF_Quality            quality,<br/>  PF_ModeFlags          mode_flags,<br/>  const PF_SampPB       \*params,<br/>  PF_BatchSample16Func  \*batch);</pre> |

---

## Do The Math For Me

Along with the variety of graphics utilities, we also provide a block of ANSI standard routines so that plug-ins will not need to include other libraries to use standard functions.

We give function pointers to a large number of math functions (trig functions, square root, logs, etc.).

Using our suite functions provides for some (application level) error handling, and prevents problems with including different versions of multiple "standard" libraries.

All functions return a double. All angles are expressed in radians, use `PF_RAD_PER_DEGREE` (a constant from AE_EffectCB.h) to convert from degrees to radians if necessary.

### PF_ANSICallbackSuite1

| Function | Purpose | Replaces |
| --- | --- | --- |
| `acos` | Returns the arc cosine of x. | `PF_ACOS` |
| `asin` | Returns the arc sine of x. | `PF_ASIN` |
| `atan` | Returns the arc tangent of x. | `PF_ATAN` |
| `atan2` | Returns atan(y/x). | `PF_ATAN2` |
| `ceil` | Returns the next integer above x. | `PF_CEIL` |
| `cos` | Returns the cosine of x. | `PF_COS` |
| `exp` | Returns e to the power of x. | `PF_EXP` |
| `fabs` | Returns the absolute value of x. | `PF_FABS` |
| `floor` | Returns the closest integer below x. | `PF_FLOOR` |
| `fmod` | Returns x modulus y. | `PF_FMOD` |
| `hypot` | Returns the hypotenuse of x and y, which is sqrt(x\*x + y\*y). | `PF_HYPOT` |
| `log` | Returns the natural log (ln) of x. | `PF_LOG` |
| `log10` | Returns the log (base 10) of x. | `PF_LOG10` |
| `pow` | Returns x to the power of y. | `PF_POW` |
| `sin` | Returns the sine of x. | `PF_SIN` |
| `sqrt` | Returns the square root of x. | `PF_SQRT` |
| `tan` | Returns the tangent of x. | `PF_TAN` |
| *(while not strictly math functions, these emulate ANSI functionality)* | | |
| `sprintf` | Emulates the C sprintf function. | `PF_SPRINTF` |
| `strcpy` | Emulates the C strcpy function. | `PF_STRCPY` |
