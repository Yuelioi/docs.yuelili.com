---
title: argsort
order: 2
---
`int [] argsort(<type>value[])`

Returns a list of indices that, if applied to the given array, will give a sorted sequence in increasing order.

This lets sort an array by some property of the items in the array rather than by the values themselves.

- [argsort](/en/houdini-vex/arrays/argsort "Returns the indices of a sorted version of an array.") and [sort](/en/houdini-vex/arrays/sort "Returns the array sorted in increasing order.") use a stable sort.
- Use [reverse](/en/houdini-vex/arrays/reverse "Returns an array or string in reverse order.") to reverse the order of the sort.

Examples

## examples

Sort strings by their length

```vex
cvex main()
{
 // Given an array of strings...
 string colors[] = {"Red", "Green", "Blue", "Orange", "Violet", "Indigo"};

 // Create an array with the corresponding lengths
 int[] lengths = {};
 foreach (string name; colors) {
 push(lengths, len(name));
 }

 // Sort the lengths and return an array containing the new ordering
 int[] ordering = argsort(lengths);

 // Get the array of color names but sorted by name length
 string colors_by_len[] = reorder(colors, ordering);

 printf("%s\n", colors_by_len);
}

// Prints {Red, Blue, Green, Orange, Violet, Indigo}

```
