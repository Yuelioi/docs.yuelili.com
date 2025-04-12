---
title: removeindex
order: 10
---
`<type> removeindex(<type>&array[], int index)`

Removes the item at `index` from `array` and returns its value. This is the same as `pop(array, index)` but has a slightly clearer name.

A negative index counts from the end of the array, so `removeindex(array, -2)` removes the second-to-last item.

`int  removeindex(dict &dictionary, string index)`

Removes the dictionary entry of `index` from `dictionary`.

Returns `0` if no such entry was present, `1` if something was
removed.
