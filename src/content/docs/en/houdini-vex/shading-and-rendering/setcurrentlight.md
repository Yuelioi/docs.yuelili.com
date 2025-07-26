---
title: setcurrentlight
order: 68
---
| Context(s) | [displace](../contexts/displace.html)  [fog](../contexts/fog.html)  [surface](../contexts/surface.html) |
| --- | --- |

`int  setcurrentlight(int lightid)`

Sets the current light, and returns true when the light exists and was successfully set. The lightid should be in the set of the values returned by [getlights](/en/houdini-vex/shading-and-rendering/getlights "Returns an array of light identifiers for the currently shaded surface."). The current light is used by the following shading functions:

- [renderstate](/en/houdini-vex/shading-and-rendering/renderstate "Queries the renderer for a named property.")
- [getlightname](/en/houdini-vex/shading-and-rendering/getlightname "Returns the name of the current light when called from within an illuminance loop, or converts an integer light ID into the light’s name.")
