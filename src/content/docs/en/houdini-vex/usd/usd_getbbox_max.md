---
title: usd_getbbox_max
order: 44
---
| Since | 18.0 |
| --- | --- |

`vector  usd_getbbox_max(<stage>stage, string primpath, string purpose)`

Computes the maximum of the bounding box for the geometry.

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument can be an integer representing the input number (starting at 0) to read the stage from. The integer is equivalent to the string form referencing a particular input, e.g., “opinput:0”.

You can also use this argument to refer to a USD file (e.g., “/path/to/file.usd”), or to another LOP node’s cooked stage using the `op:` as the path prefix (e.g., “op:/stage/lop_node”).

`primpath`

The path to the primitive.

`purpose`

The primitive’s purpose for which to return the bounding box (e.g., “render”).

Returns

The maximum point of the primitive’s bounding box.

Examples

## examples

```vex
// Get the sphere's bounding box.
vector max = usd_getbbox_max(0, "/src/sphere", "render");

```
