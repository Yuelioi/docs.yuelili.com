---
title: opdigits
order: 21
---
`int  opdigits(string str)`

`int  opdigits()`

返回输入字符串中最后一组连续数字的整数值。

如果没有传递参数，则代码等同于：

```vex
string dir, name;
splitpath(opfullpath("."), dir, name);
return opdigits(name);

```

## 示例

- `opdigits("/obj/geo34/box21")` - 返回 21
- `opdigits("/obj/geo34/box")` - 返回 34
- `opdigits("/obj/geo34/box2.1")` - 返回 1（"."不是数字）
