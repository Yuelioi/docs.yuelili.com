---
title: working-with-paths
---
# Working With Paths

## Accessing Path Data

Paths differ from other parameter types, in that their values are not directly accessible. In addition to checking them out and in (like layer parameters), you must use our path data function suites to obtain the details of the path at a given time. See [PF_PathQuerySuite1](#pf_pathquerysuite1) and [PF_PathDataSuite](#pf_pathdatasuite). Never use the values present in a path parameter when it's passed to you, without first checking it out; while deleted paths will not be available, further updating is done "lazily" (later); your effect won't see these changes unless it checks out the path.

---

## Manipulating Path Data

You can also use the [AEGP_MaskOutlineSuite3](../../aegps/aegp-suites#aegp_maskoutlinesuite3) to manipulate paths. See [Cheating Effect Usage of AEGP Suites](../../aegps/cheating-effect-usage-of-aegp-suites). Path parameters are treated as opaque blobs of data; get and set functions must be used to access and manipulate them. Like layer parameters, they must be checked out (and in!) by effects which access them.

---

## Vertices

Path vertices are more complex than simple points. All member variables are PF_FpLongs (doubles), and are in the layer's coordinate space.

---

## PF_PathVertex

| Member | Description |
| --- | --- |
| `x` | The location of the vertex. |
| `y` | |
| `tan_in_x` | The incoming tangent point. |
| `tan_in_y` | |
| `tan_out_x` | The outgoing tangent point. |
| `tan_out_y` | |

---

## PF_PathDataSuite

This suite provides information about paths (sequences of vertices).

| Function | Description |
|---|---|
| `PF_PathIsOpen` | Returns `TRUE` if the path is not closed (if the beginning and end vertex are not identical). |
| | <pre lang="cpp">PF_PathIsOpen(<br/>  PF_ProgPtr         effect_ref0,<br/>  PF_PathOutlinePtr  pathP,<br/>  PF_Boolean         \*openPB);</pre> |
| `PF_PathNumSegments` | Retrieves the number of segments in the path. |
| | N segments means there are segments `[0.N-1];` segment J is defined by vertex `J` and `J+1`. |
| | <pre lang="cpp">PF_PathNumSegments(<br/>  PF_ProgPtr         effect_ref0,<br/>  PF_PathOutlinePtr  pathP,<br/>  A_long     \*num_segmentsPL);</pre> |
| `PF_PathVertexInfo` | Retrieves the `PF_PathVertex` for the specified path. |
| | The range of points is `[0.num_segments];` for closed paths, `vertex[0] == vertex[num_segments]`. |
| | <pre lang="cpp">PF_PathVertexInfo(<br/>  PF_ProgPtr         effect_ref0,<br/>  PF_PathOutlinePtr  pathP,<br/>  A_long     which_pointL,<br/>  PF_PathVertex      \*vertexP);</pre> |
| `PF_PathPrepareSegLength` | This fairly counter-intuitive function informs After Effects that you're going to ask for the length of a segment (using `PF_PathGetSegLength` below), and it'd better get ready. |
| | `frequencyL` indicates how many times you'd like us to sample the length; our internal effects use 100. |
| | <pre lang="cpp">PF_PathPrepareSegLength(<br/>  PF_ProgPtr         effect_ref0,<br/>  PF_PathOutlinePtr  pathP,<br/>  A_long     which_segL,<br/>  A_long     frequencyL,<br/>  PF_PathSegPrepPtr  \*lengthPrepPP);</pre> |
| `PF_PathGetSegLength` | Retrieves the length of the given segment. |
| | <pre lang="cpp">PF_PathGetSegLength(<br/>  PF_ProgPtr         effect_ref0,<br/>  PF_PathOutlinePtr  pathP,<br/>  A_long     which_segL,<br/>  PF_PathSegPrepPtr  \*lengthPrepP0,<br/>  PF_FpLong          \*lengthPF);</pre> |
| `PF_PathEvalSegLength` | Retrieves the location of a point lengthF along the given path segment. |
| | <pre lang="cpp">PF_PathEvalSegLength(<br/>  PF_ProgPtr         effect_ref0,<br/>  PF_PathOutlinePtr  pathP,<br/>  PF_PathSegPrepPtr  \*lengthPrepPP0,<br/>  A_long     which_segL,<br/>  PF_FpLong          lengthF,<br/>  PF_FpLong          \*x,<br/>  PF_FpLong          \*y);</pre> |
| `PF_PathEvalSegLengthDeriv1` | Retrieves the location, and the first derivative, of a point `lengthF` along the given path segment. |
| | If you're not sure why you'd ever need this, don't use it. Math is hard. |
| | <pre lang="cpp">PF_PathEvalSegLengthDeriv1(<br/>  PF_ProgPtr         effect_ref0,<br/>  PF_PathOutlinePtr  pathP,<br/>  PF_PathSegPrepPtr  \*lengthPrepPP0,<br/>  A_long     which_segL,<br/>  PF_FpLong          lengthF,<br/>  PF_FpLong          \*x,<br/>  PF_FpLong          \*y,<br/>  PF_FpLong          \*deriv1x,<br/>  PF_FpLong          \*deriv1y);</pre> |
| `PF_PathCleanupSegLength` | Call this when you're finished evaluating that segment length, so After Effects can properly clean up the `PF_PathSegPrepPtr`. |
| | <pre lang="cpp">PF_PathCleanupSegLength(<br/>  PF_ProgPtr         effect_ref0,<br/>  PF_PathOutlinePtr  pathP,<br/>  A_long     which_segL,<br/>  PF_PathSegPrepPtr  \*lengthPrepPP);</pre> |
| `PF_PathIsInverted` | Returns `TRUE` if the path is inverted. |
| | <pre lang="cpp">PF_PathIsInverted(<br/>  PF_ProgPtr  effect_ref,<br/>  PF_PathID   unique_id,<br/>  PF_Boolean  \*invertedB);</pre> |
| `PF_PathGetMaskMode` | Retrieves the mode for the given path. |
| | <pre lang="cpp">PF_PathGetMaskMode(<br/>  PF_ProgPtr   effect_ref,<br/>  PF_PathID    unique_id,<br/>  PF_MaskMode  \*modeP);</pre> |
| | Mask mode is one of the following: |
| | - `PF_MaskMode_NONE` |
| | - `PF_MaskMode_ADD` |
| | - `PF_MaskMode_SUBTRACT` |
| | - `PF_MaskMode_INTERSECT` |
| | - `PF_MaskMode_LIGHTEN` |
| | - `PF_MaskMode_DARKEN` |
| | - `PF_MaskMode_DIFFERENCE` |
| | - `PF_MaskMode_ACCUM` |
| `PF_PathGetName` | Retrieves the name of the path (up to `PF_MAX_PATH_NAME_LEN` long). |
| | <pre lang="cpp">PF_PathGetName(<br/>  PF_ProgPtr  effect_ref,<br/>  PF_PathID   unique_id,<br/>  A_char      \*nameZ);</pre> |

---

## PF_PathQuerySuite1

This suite is used to identify and access the paths associated with the effect's source layer.

| Function | Purpose |
|---|---|
| `PF_NumPaths` | Retrieves the number of paths associated with the effect's source layer. |
| | <pre lang="cpp">PF_NumPaths(<br/>  PF_ProgPtr  effect_ref,<br/>  A_long      \*num_pathsPL);</pre> |
| `PF_PathInfo` | Retrieves the PF_PathID for the specified path. |
| | <pre lang="cpp">PF_PathInfo(<br/>  PF_ProgPtr  effect_ref,<br/>  A_long      indexL,<br/>  PF_PathID   \*unique_idP);</pre> |
| `PF_CheckoutPath` | Acquires the PF_PathOutlinePtr for the path at the specified time. |
| | <pre lang="cpp">PF_CheckoutPath(<br/>  PF_ProgPtr         effect_ref,<br/>  PF_PathID          unique_id,<br/>  A_long     what_time,<br/>  A_long     time_step,<br/>  A_u_long   time_scale,<br/>  PF_PathOutlinePtr  \*pathPP);</pre> |
| `PF_CheckinPath` | Releases the path back to After Effects. Always do this, regardless of any error conditions encountered. |
| | Every checkout must be balanced by a checkin, or pain will ensue. |
| | <pre lang="cpp">PF_CheckinPath(<br/>  PF_ProgPtr         effect_ref,<br/>  PF_PathID          unique_id,<br/>  PF_Boolean         changedB,<br/>  PF_PathOutlinePtr  pathP);</pre> |
