---
title: chf
order: 10
---
`float  chf(string channel)`

`float  chf(string channel, float time_in_sec)`

`float  chf(int op_id, int parm_index, int vector_index)`

`float  chf(int op_id, int parm_index, int vector_index, float time_in_sec)`

Evaluates a channel (or parameter) and return its value. The time is specified in *seconds*, not in frames. If you don’t specify the time, the function returns the value at the current time.

Houdini includes several functions to evaluate channels/parameters of different types.

- To get a float or string without needing to know the parameter type, use [ch](/en/houdini-vex/nodes/ch "Evaluates a channel (or parameter) and return its value.").
- To get a float, use [chf](/en/houdini-vex/nodes/chf "Evaluates a channel (or parameter) and return its value.").
- To get a string, use [chs](/en/houdini-vex/nodes/chs "Evaluates a channel (or parameter) and return its value.").
- For integer parameters, use [chi](/en/houdini-vex/nodes/chi "Evaluates a channel (or parameter) and return its value.")
- For matrix type parameters, use [ch3](/en/houdini-vex/nodes/ch3 "Evaluates a channel (or parameter) and return its value.") or [ch4](/en/houdini-vex/nodes/ch4 "Evaluates a channel (or parameter) and return its value.").
- For a ramp parameter, use [chramp](/en/houdini-vex/nodes/chramp "Evaluates a ramp parameter and return its value.") or [chrampderiv](/en/houdini-vex/nodes/chrampderiv "Evaluates the derivative of a parm parameter with respect to position.").
- Use [chid](/en/houdini-vex/nodes/chid "Resolves a channel string (or parameter) and return op_id, parm_index and vector_index.") to get an `op_id`, `parm_index` and `vector_index` to evaluate the channel without having to do string resolution.
