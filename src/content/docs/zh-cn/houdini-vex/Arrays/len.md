---
title: len
order: 7
---
`int  len(<vector>v)`

`int  len(<matrix>m)`

`int  len(<type>array[])`

`int  len(string s)`

`int  len(dict d)`

Returns the number of items/components in the given object. For an array, this is the number of items in the array. For a matrix or vector, this is the number of components.

For a string, this returns the number of *bytes* (not characters).

For a dictionary, this returns the number of keys in the dictionary.

Don’t confuse this function with [length](length.html "Returns the magnitude of a vector."), which returns the magnitude of a vector.

Examples

## examples

```vex
len("hello") == 5;
len({ {1,0,0}, {0,1,0}, {0,0,1} }) == 9;
len({0, 10, 20, 30}) == 4;

```
