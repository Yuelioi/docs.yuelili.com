---
title: chprim_setkeyslope
order: 11
---
`int  chprim_setkeyslope(int geohandle, int prim, float time, float slope)`

`int  chprim_setkeyslope(int geohandle, int prim, float time, float slope, int half)`

This function sets the slope of an existing channel primitive key.

`geohandle`

Handle to the geometry to write to. `geoself()` can be used to get a handle to the current geometry.

`prim`

The primitive number of the channel primitive to be modified.

`time`

The time in seconds of the key to modify.

`slope`

The new slope to apply to the key.

`half`

Which half of the key to set, one of `CHPRIM_KEY_IN`, `CHPRIM_KEY_OUT`, or `CHPRIM_KEY_INOUT`. Defaults to `CHPRIM_KEY_INOUT`.
These values are defined in the `chprim_utils.h` header.
Note that setting this to anything other than `CHPRIM_KEY_INOUT` will create a discontinuity in the slope at the key.
