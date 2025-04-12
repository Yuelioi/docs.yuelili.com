---
title: isvalidindex
order: 6
---
`int  isvalidindex(<type>&array[], int index)`

`int  isvalidindex(string str, int index)`

Returns `1` if `index` is within range for the given string/array, or `0` otherwise.

This is equivalent to `index < len(array) && index >= -len(array)`.

`int  isvalidindex(dict d, string key)`

Returns `1` if the key is in the dictionary, or `0` otherwise.
