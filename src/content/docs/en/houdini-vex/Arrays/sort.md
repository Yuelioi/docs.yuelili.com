---
title: sort
order: 16
---
`int [] sort(int values[])`

`float [] sort(float values[])`

`string [] sort(string values[])`

Returns a version of the given array sorted in increasing order.

- [argsort](/en/houdini-vex/arrays/argsort "Returns the indices of a sorted version of an array.") and [sort](/en/houdini-vex/arrays/sort "Returns the array sorted in increasing order.") use a stable sort.
- Use [reverse](/en/houdini-vex/arrays/reverse "Returns an array or string in reverse order.") to reverse the order of the sort.

Examples

## examples

Sort an array of numbers in descending order

```vex
int numbers[] = {5, 2, 90, 3, 1};
int descending_nums[] = reverse(sort(numbers)); // {90, 5, 3, 2, 1}

```
