---
title: typeid
order: 4
---
| 始于版本 | 20.0 |
| --- | --- |

`int  typeid(<type>value)`

`int  typeid(<type>value[])`

返回标识值类型的数字代码。

`int  typeid(dict dictionary, string key)`

返回标识字典中键值类型的数字代码，如果键不存在则返回-1。
可以与特定VEX数据类型的`typeid()`进行比较。

## 示例

```vex
// 检查"foo"的值是否为矩阵类型
int type = typeid(d, "foo");
if (type == typeid(matrix())
{
 matrix m = d["foo"];
}

```
