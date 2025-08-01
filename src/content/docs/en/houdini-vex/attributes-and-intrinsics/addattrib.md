---
title: addattrib
order: 1
---
If you know the class of attribute you want to add ahead of time, using [adddetailattrib](/en/houdini-vex/attributes-and-intrinsics/adddetailattrib "Adds a detail attribute to a geometry."), [addprimattrib](/en/houdini-vex/attributes-and-intrinsics/addprimattrib "Adds a primitive attribute to a geometry."), [addpointattrib](/en/houdini-vex/attributes-and-intrinsics/addpointattrib "Adds a point attribute to a geometry."), or [addvertexattrib](/en/houdini-vex/attributes-and-intrinsics/addvertexattrib "Adds a vertex attribute to a geometry.") may be faster.

`int  addattrib(int geohandle, string attribclass, string name, <type>defvalue)`

`int  addattrib(int geohandle, string attribclass, string name, <type>defvalue[])`

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or [geoself](/en/houdini-vex/geometry/geoself "Returns a handle to the current geometry."), which means the current geometry in a node. (This argument may be used in the future to allow writing to other geometries.)

`attribclass`

One of `"detail"` (or `"global"`), `"point"`, `"prim"`, or `"vertex"`.

You can also use `"primgroup"`, `"pointgroup"` or `"vertexgroup"` to [read from groups](../groups.html "You can read the contents of primitive/point/vertex groups in VEX as if they were attributes.").

`name`

The name of the attribute to create.

`defvalue`

The default value for the attribute and determines the type of attribute to create. String and array attributes cannot have defaults, so only the type is used in those cases.

Returns

`geohandle` on success, or `-1` on failure.

- If an attribute of the same name already exists, the function will try to convert it to the new type.
