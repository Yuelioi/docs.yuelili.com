---
title: reverse
order: 14
---
`string  reverse(string str)`

Returns a UTF-8 encoded string with the reversed *characters* (not bytes) from `str`. This is different from what `str[::-1]` returns.

`<type>[] reverse(<type>values[])`

Returns a reversed copy of the given array.

Examples

## examples

```vex
reverse("hello") == "olleh";
reverse({1,2,3,4}) == {4, 3, 2, 1};

```
