---
title: chr
order: 2
---
`string  chr(int value)`

返回一个将给定 Unicode 码位编码为 UTF8 值的字符串。对于小于 128 的值，这将是一个单字节的字符串。更高的值将产生多字节字符串。

如果给定的码位不是有效的码位，则返回空字符串。
