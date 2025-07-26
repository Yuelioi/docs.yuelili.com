---
title: error
order: 3
---
`void  error(string format, ...)`

Reports a custom runtime VEX error. This uses the same format string syntax as [printf](/en/houdini-vex/utility/printf "Prints values to the console which started the VEX program.").

If something can still be done as an acceptable fallback, instead of outright failing,
it may be worth reporting a [warning](/en/houdini-vex/utility/warning "Reports a custom runtime VEX warning."), instead of an error.

Examples

## examples

```vex
if (!pointattribtype(0,chs("nameattrib")) != 2) {
 error("Name attribute %s must be a string attribute!", chs("nameattrib"));
 return;
}
if (chf("distance") < 0) {
 error("")
}
float minimumValue = chf("min");
float maximumValue = chf("max");
if (minimumValue >= maximumValue) {
 error("Minimum (%f) must be strictly less than maximum (%f)! It's unclear what should be done.", minimumValue, maximumValue);
 return;
}

```
