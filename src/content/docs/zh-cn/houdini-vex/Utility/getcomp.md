---
title: getcomp
order: 5
---

`float  getcomp(<vector>v, int index)`

返回给定索引处的向量分量。
等同于 `v[index]`。

`float  getcomp(<matrix>m, int row, int column)`

返回给定位置处的矩阵分量。

`<type> getcomp(<type>array[], int index)`

返回给定索引处的数组元素。
等同于 `array[index]`。

`<type> getcomp(<vector>array[], int i, int j)`

返回指定数组索引和位置处的向量分量。等同于 `getcomp(array[i], j)`。

`<type> getcomp(<matrix>array[], int i, int j, int k)`

返回指定数组索引和位置处的矩阵分量。等同于 `getcomp(array[i], j, k)`。

`<type> getcomp(dict d, string index)`

`<type>[] getcomp(dict d, string index)`

返回字典中给定索引处的项。
等同于 `d[index]`。

`<type> getcomp(dict d, string index, <type>defvalue)`

`<type>[] getcomp(dict d, string index, <type>defvalue[])`

返回字典中给定索引处的项。若不存在则返回 `defvalue`。
等同于 `isvalidindex(d, index) ? d[index] : defvalue`。

`string  getcomp(string value, int index)`

返回字符串中指定索引处的*字符*。
等同于 `value[index]`。

在VEX中，字符也是字符串形式。使用UTF-8编码，
如果索引位于UTF-8编码的中间位置，则返回空字符串。
否则返回完整的有效UTF-8字符。
