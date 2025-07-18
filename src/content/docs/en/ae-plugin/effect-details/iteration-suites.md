---
title: iteration-suites
---
# Iteration Suites

Effects often iterate over all pixels in an image, filtering each one. By taking advantage of After Effects' iteration suites, you make it possible for After Effects to sub-allocate your task to as many processors are present, taking advantage of hardware-specific acceleration.

After Effects will also manage progress reporting and user cancellation automatically.

Use these suites! Make sure the pixel processing functions you pass to these iterator callbacks are re-entrant.

:::note
The October 2021 SDK update increases the number of concurrent iterate threads up to the available system CPU cores instead of the previous hard-coded limit of 32.
:::

---

## PF_Iterate8Suite1, PF_Iterate16Suite1, PF_IterateFloatSuite1

| Function | Purpose |
|---|---|
| `iterate` | Iterates across pixels from a source image, alters them, and populates a destination image. |
| | You may specify a rectangular region of pixels across which to iterate; if you don't, After Effects will iterate over every overlapping pixel. |
| | You give a refcon, and the function is invoked with that refcon, plus the x and y coordinates of the current pixel, plus pointers to that pixel in the source and destination images. |
| | If you pass a NULL source, it will iterate over the dst. This function is quality independent. |
| | Don't depend upon the pixels being traversed in any particular order. |
| | The image may be subset to different CPUs, so consider all the parameters (except dst) to be read-only while After Effects is processing. |
| | This callback automatically includes progress and abort checking, so don't do so in your pixel function. |
| | <pre lang="cpp">iterate(<br/>  PF_InData       \*in_data,<br/>  A_long          progress_base,<br/>  A_long          progress_final,<br/>  PF_EffectWorld  \*src,<br/>  const PF_Rect   \*area,<br/>  void            \*refcon,<br/>  PF_Err (*pix_fn)(<br/>    void      \*refcon,<br/>    A_long    x,<br/>    A_long    y,<br/>    PF_Pixel  \*in,<br/>    PF_Pixel  \*out),<br/>  PF_EffectWorld  \*dst);</pre> |
| `iterate_origin` | Lets you specify an offset from the input into the output. |
| | For example, if your output buffer is smaller than your input buffer, pass `(in_- data>output_origin_x, in_data>output_origin_y)` as the origin, and NULL for area, and this function will offset the src pixel pointer appropriately for your pixel function. |
| | <pre lang="cpp">iterate_origin(<br/>  PF_InData       \*in_data,<br/>  A_long          progress_base,<br/>  A_long          progress_final,<br/>  PF_EffectWorld  \*src,<br/>  const PF_Rect   \*area,<br/>  const PF_Point  \*origin,<br/>  void            \*refcon,<br/>  PF_Err (*pix_fn)(<br/>    void      \*refcon,<br/>    A_long    x,<br/>    A_long    y,<br/>    PF_Pixel  \*in,<br/>    PF_Pixel  \*out),<br/>  PF_EffectWorld  \*dst);</pre> |
| `iterate_lut` | `PF_Iterate8Suite` only. Allows a Look-Up Table (LUT) to be passed for iteration; you can pass the same or different LUTs for each color channel. |
| | If no LUT is passed, an identity LUT is used. |
| | <pre lang="cpp">iterate_lut(<br/>  PF_InData       \*in_data,<br/>  A_long          prog_base,<br/>  A_long          prog_final,<br/>  PF_EffectWorld  \*src,<br/>  const PF_Rect   \*area,<br/>  A_u_char        \*a_lut0,<br/>  A_u_char        \*r_lut0,<br/>  A_u_char        \*g_lut0,<br/>  A_u_char        \*b_lut0,<br/>  PF_EffectWorld  \*dst);</pre> |
| `iterate_origin_non_clip_src` | Allows for iteration across pixels outside the intersection of the source and destination layers. For these pixels, you will be passed a `PF_Pixel` with values {0,0,0,0}. |
| | <pre lang="cpp">iterate_origin_non_clip_src(<br/>  PF_InData       \*in_data,<br/>  A_long          progress_base,<br/>  A_long          progress_final,<br/>  PF_EffectWorld  \*src,<br/>  const PF_Rect   \*area,<br/>  const PF_Point  \*origin,<br/>  void            \*refcon,<br/>  PF_Err (*pix_fn)(<br/>    void      \*refcon,<br/>    A_long    x,<br/>    A_long    y,<br/>    PF_Pixel  \*in,<br/>    PF_Pixel  \*out),<br/>  PF_EffectWorld  \*dst);</pre> |
| `iterate_generic` | `PF_Iterate8Suite` only. If you want to do something once per available CPU, this is the function to use (pass `PF_Iterations_ONCE_PER_PROCESSOR` for `iterationsL`). |
| | Only call abort and progress functions from thread index 0. |
| | !!! note |
| | You can iterate over more than pixels. Internally, we use it for row-based image processing, and for once-per-entity updates of complex sequence data. |
| | <pre lang="cpp">iterate_generic(<br/>  A_long iterationsL,<br/>  void   \*refconPV,<br/>  PF_Err (*fn_func)(<br/>    void    \*refconPV,<br/>    A_long  thread_idxL,<br/>    A_long  i,<br/>    A_long  itrtL));</pre> |
