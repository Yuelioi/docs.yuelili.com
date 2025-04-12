---
title: removevalue
order: 11
---
`int  removevalue(<type>&array[], <type>value)`

Removes the first instance of `value` found from the array. Returns `1` if an item was removed, or `0` otherwise.

Examples

## examples

```vex
float nums[] = {0, 1, 2, 3, 1, 2, 3};
removevalue(nums, 2);  // == 1
// nums == {0, 1, 3, 1, 2, 3}

```
