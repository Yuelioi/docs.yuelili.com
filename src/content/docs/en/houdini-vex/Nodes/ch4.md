---
title: ch4
order: 5
---
`matrix  ch4(string channel)`

`matrix  ch4(string channel, float time)`

If the node parameter referenced by `channel` is a matrix type, the base parameter name
can be used to return the all components as a matrix.

Evaluates a channel (or parameter) and return its value. The time is specified in *seconds*, not in frames. If you don’t specify the time, the function returns the value at the current time.

Houdini includes several functions to evaluate channels/parameters of different types.

- To get a float or string without needing to know the parameter type, use [ch](./ch "Evaluates a channel (or parameter) and return its value.").
- To get a float, use [chf](./chf "Evaluates a channel (or parameter) and return its value.").
- To get a string, use [chs](./chs "Evaluates a channel (or parameter) and return its value.").
- For integer parameters, use [chi](./chi "Evaluates a channel (or parameter) and return its value.")
- For matrix type parameters, use [ch3](./ch3 "Evaluates a channel (or parameter) and return its value.") or [ch4](./ch4 "Evaluates a channel (or parameter) and return its value.").
- For a ramp parameter, use [chramp](./chramp "Evaluates a ramp parameter and return its value.") or [chrampderiv](./chrampderiv "Evaluates the derivative of a parm parameter with respect to position.").
- Use [chid](./chid "Resolves a channel string (or parameter) and return op_id, parm_index and vector_index.") to get an `op_id`, `parm_index` and `vector_index` to evaluate the channel without having to do string resolution.
