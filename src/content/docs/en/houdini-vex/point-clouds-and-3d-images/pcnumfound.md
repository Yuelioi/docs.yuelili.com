---
title: pcnumfound
order: 25
---
This node returns the number of points found by a [pcopen](/en/houdini-vex/point-clouds-and-3d-images/pcopen "Returns a handle to a point cloud file.") query.

For example, if 10 points are being filtered, and 6 are within the
search radius, `pcnumfound` will return 6.

`int  pcnumfound(int handle)`

Returns the number of found points from the search performed by
[pcopen](/en/houdini-vex/point-clouds-and-3d-images/pcopen "Returns a handle to a point cloud file.").
