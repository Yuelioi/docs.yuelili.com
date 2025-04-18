---
title: usd_isarrayiprimvar
order: 64
---
| Since | 19.0 |
| --- | --- |

`int  usd_isarrayiprimvar(<stage>stage, string primpath, string name)`

This function checks whether the primvar is an array, if it’s found directly on the given primitive or is inherited from primitive’s ancestor.

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument can be an integer representing the input number (starting at 0) to read the stage from. The integer is equivalent to the string form referencing a particular input, e.g., “opinput:0”.

You can also use this argument to refer to a USD file (e.g., “/path/to/file.usd”), or to another LOP node’s cooked stage using the `op:` as the path prefix (e.g., “op:/stage/lop_node”).

`primpath`

The path to the primitive.

`name`

Primvar name (without namespace).

Returns

`1` if the primvar exists and is an array, or `0` otherwise.

Examples

## examples

```vex
// Check if primvar "some_primvar" is an array.
int is_array = usd_isarrayiprimvar(0, "/geometry/sphere", "some_primvar");

```
