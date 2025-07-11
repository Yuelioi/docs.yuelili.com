---
title: pcwrite
order: 33
---
`int  pcwrite(string filename, ...)`

Writes data for the current shading point out to a point cloud file.

`filename`

The name of the file to write to. You can read the resulting file into a geometry network with the [File surface node](../../nodes/sop/file.html "Reads, writes, or caches geometry on disk."). This file should have a `.pc` extension (Houdini will use the extension to determine how to import the file).

`…`

Subsequent arguments specify one or more pairs of a channel name (a string naming the attribute you're saving, such as `"P"`, `"N"`, `"v"`, `"area"`, `"u"`, etc.) and value (the value you wish to store).

```vex
pcwrite("out.pc", "P", P, "N", N)

```

To write a variable as a vector type instead of a triple, append `:vector` to the channel name.

```vex
pcwrite("out.pc", "P", P, "N:vector", N)

```

In micropolygon rendering, points are interpolated with neighbor points so that duplicate vertices on corners and edges are eliminated in the point cloud. If you want to disable this behavior, use the `"interpolate"` argument described below.

"interpolate",
`int`
`=1`

When you pass this argument a value of `1` (the default), one interpolated point is written representing the four corners of a micropolygon. This prevents writing out overlapping values.

```vex
pcwrite("out.pc", "P", P, "interpolate", 1)

```

Using a value of `0` will disable interpolation, which can be useful when writing points that are not based on `P`. Interpolation will have no effect in ray tracing mode.

(Note that this means you can’t use `interpolate` as the name of a data channel.)

"countphotons",
`int`

For photon generation modes, add the number of points stored
to the total number of photons, for the purposes of progress reporting and termination
of photon map generation.

"mkdir",
`int`
`=0`

When you pass an argument of `1`, the function will automatically create missing sub-directories/paths.

Examples

## examples

```vex
surface
dumpsomepoints(string fname = "points.$F4.pc"; int do_cull = 0; float keepamt = 0.05)
{
 vector nn = normalize(frontface(N, I));
 int rval=0;
 float A = area(P,"smooth",0); // area without smoothed derivs

    if( !do_cull || do_cull & (nrandom()<keepamt) )
 {
 if( do_cull && keepamt > 0 )
 {
 A = A/keepamt;
 }
 rval = pcwrite(fname, "interpolate", 1,
 "P", ptransform("space:camera","space:world", P),
 "N", ntransform("space:camera","space:world", normalize(N)),
 "area", A); // output an "area" channel in pc
 }
 Cf =abs(nn)*rval;
}

```
