---
title: append
order: 1
---
`void  append(string &array, string value)`

Appends the second string to the first.

`void  append(<type>&array[], <type>value)`

Appends the given value to the end of the array. Increases the size of `array` by 1. This is the same as [push(array, value)](push.html "Adds an item to an array.").

`void  append(<type>&array[], <type>values[])`

Concatenates the values from the `values` array to the end of `array`. Increases the size of `array` by `len(values)`. This is the same as [push(array, values)](push.html "Adds an item to an array.").

Tip

You can set an individual item in an array using `array[n] = x`.
