---
title: split
order: 34
---
`string [] split(string s)`

`string [] split(string s, string separators)`

`string [] split(string s, string separators, int maxsplits)`

通过移除字符串中的分隔符将字符串分割成若干标记，并为每个由分隔符界定的子字符串创建一个数组条目。当未提供分隔符字符串时，默认按空白字符（空格、制表符和回车符）进行分割。

`maxsplits` 参数用于限制字符串被分割的次数，这在需要从较长字符串中逐个提取标记时非常有用。

注意
这与 Python 的 split() 不同，它接受的是分隔符列表，而非单个分隔字符串。

注意
该方法更像是标记化（tokenize）而非简单的分割方法。
具体来说，如果存在连续的分隔符，它们会被合并处理，仅执行一次分割操作。
