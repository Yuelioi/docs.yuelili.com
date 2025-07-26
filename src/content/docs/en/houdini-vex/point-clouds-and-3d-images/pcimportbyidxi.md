---
title: pcimportbyidxi
order: 18
---
`int  pcimportbyidxi(int handle, string channel_name, int idx)`

After a [pcopen](/en/houdini-vex/point-clouds-and-3d-images/pcopen "Returns a handle to a point cloud file.") and a [pcnumfound](/en/houdini-vex/point-clouds-and-3d-images/pcnumfound "This node returns the number of points found by pcopen."), this can be used to extract specific search results from the found points.

This will return 0 if the channel doesn’t exist.
