---
title: ocio_import
order: 3
---
| On this page | * [Queryable attributes](#queryable-attributes) * [Examples](#examples) |
| --- | --- |

`int  ocio_import(string space, string property, int &value)`

`int  ocio_import(string space, string property, vector &value)`

`int  ocio_import(string space, string property, string &value)`

This function queries data associated with a color space.

If the function fails, the value variable will not be modified,
and may be left uninitialized.
Queryable attributes

## queryable-attributes

There list of properties includes most of the properties defined in the OCIO configuration file:

`string name`

The name of the color space.

`string family`

The color space family.

`string equalitygroup`

The equality group for the color space.

`string description`

A description of the color space.

`int isdata`

True if the color space is suitable for non-color pixel data (such as normals, point positions, etc.)

`string bitdepth`

A string representing the color space bit depth.

`string allocation`

Either `uniform` or `lg2` (log2).

`vector allocationvars`

The allocation variables (min, max, offset).

Examples

## examples

```vex
cvex test()
{
 string token;
 string sval;
 int ival;
 vector vval;

 // Color spaces may be specified by name or by role
 foreach(space; { "sRGB", "color_picker" })
 {
 foreach(token; { "name",
 "description",
 "isdata",
 "allocation",
 "allocationvars",
 "description",
 } )
 {
 printf("----------------- %s ---------------------\n", token);
 if (teximport(map, token, sval))
 fprintf(stderr, "'%s' = %s\n", token, sval);
 if (teximport(map, token, ival))
 fprintf(stderr, "'%s' = %d\n", token, ival);
 else if (teximport(map, token, vval))
 fprintf(stderr, "'%s' = %g\n", token, vval);
 }
 }

```
