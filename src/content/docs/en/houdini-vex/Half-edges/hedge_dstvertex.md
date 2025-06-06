---
title: hedge_dstvertex
order: 2
---
`int  hedge_dstvertex(<geometry>geometry, int hedge)`

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument can be an integer representing the input number (starting at 0) to read the geometry from.

Alternatively, the argument can be a string specifying a geometry file (for example, a `.bgeo`) to read from. When running inside Houdini, this can be an `op:/path/to/sop` reference.

`hedge`

Input half-edge.

Returns

The vertex number of the half-edge’s destination vertex, or `-1` if the half-edge is not valid.

Examples

## examples

```vex
int dstvtx;

// Get the destination vertex half-edge number 3.
dstvtx = hedge_dstvertex("defgeo.bgeo", 3);

```
