---
title: usd_primvarlen
order: 111
---
| Since | 18.0 |
| --- | --- |

`int  usd_primvarlen(<stage>stage, string primpath, string name)`

`int  usd_primvarlen(<stage>stage, string primpath, string name, float timecode)`

This function returns the length of a given primvar found directly on the given primitive.

For array primvars it is the length of an array, and for non-array primvars the length is 1.

`<stage>`

When running in the context of a node (such as a wrangle LOP), this argument can be an integer representing the input number (starting at 0) to read the stage from. The integer is equivalent to the string form referencing a particular input, e.g., “opinput:0”.

You can also use this argument to refer to a USD file (e.g., “/path/to/file.usd”), or to another LOP node’s cooked stage using the `op:` as the path prefix (e.g., “op:/stage/lop_node”).

`primpath`

The path to the primitive.

`name`

Primvar name (without namespace).

`timecode`

The USD time code at which to evaluate the attribute. A USD time code roughly corresponds to a frame in Houdini. If not given, the time code corresponding to the current frame is used.

Returns

The length of the array primvar, or `1` if the primvar is not an array, or `0` if the primvar does not exist. Use [usd_isarrayprimvar](/en/houdini-vex/usd/usd_isarrayprimvar "Checks if there is an array primvar directly on the USD primitive.") to check if the primvar is an array.

Examples

## examples

```vex
// Get the array length of the primvar on cube.
int array_length = usd_primvarlen(0, "/geo/cube", "array_primvar_name");

```
