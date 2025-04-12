---
title: match
order: 20
---
`int  match(string pattern, string subject)`

如果subject匹配指定的pattern，该函数返回1；如果不匹配则返回0。使用标准的Houdini模式匹配语法。多个模式可以用空格或逗号分隔。匹配的特殊字符包括：

- `?` 匹配任意单个字符
- `*` 匹配任意子字符串
- `[list]` 匹配列表中指定的任意字符
- 如果模式以脱字符(^)开头，则匹配该模式的subject将被排除在匹配结果之外

示例：

- `a*` - 匹配所有以a开头的字符串
- `a*,^aardvark` - 匹配所有以a开头的字符串，除了aardvark
- `[abc]*z` - 匹配所有以a、b或c开头并以z结尾的字符串
- `g*,^geo*` - 匹配所有以g开头的字符串，但不匹配以geo开头的字符串
