---
title: strings
order: 5
---
| 本页内容 | * [概述](#概述) * [字符串字面量](#字符串字面量) * [Wrangle和VEX表达式中的转义序列](#wrangle和vex表达式中的转义序列) * [声明字符串类型](#声明字符串类型) * [访问和设置字符串值](#访问和设置字符串值) * [遍历字符串](#遍历字符串) * [字符串操作](#字符串操作) |
| --- | --- |

概述

## 概述

VEX包含字符串数据类型，在以下场景中非常有用：

- 文本处理
- 引用文件名和操作节点名称
- 处理二进制数据

字符串字面量

## 字符串字面量

字符串字面量可以用单引号(')或双引号(")括起来。也可以使用Python或C++的原始字符串格式来指定字符串。

```vex
string s = 'foo';
string t = "bar";
string py = r"Hello world\n"; // Python风格，等价于"Hello world\\n"
string cpp = R"(Hello world\n)"; // C++风格，等价于"Hello world\\n"

```

转义字符串（非原始字符串）会自动将已知的转义序列转换为对应的字节序列。例如"\\n"会被转换为ASCII换行符。

原始字符串会忽略转义序列。对于原始字符串，"\\n"会被字面解释为反斜杠和小写字母`n`。

字符串语法可以总结为：

- 转义字符串 `"文本"` 或 `'文本'`
- Python原始字符串 `r"原始文本"`
- C++原始字符串 `R"分隔符(原始文本)分隔符"`
 其中`分隔符`是0到16个字符的可选字符串。与Python原始字符串不同，C++风格的原始字符串可以包含多行文本甚至二进制数据。

```vex
string escaped = 'Line 1\nLine 2';
string raw = r"Line 1\nLine 1 continues"; // "Line 1\\nLine 1 continues"
string cppraw = R"(Line 1\nLine 1 continues)"; // "Line 1\\nLine 1 continues"
string cppmultiline = R"multi(这是一个很长的
 多行字符串。字符串
 还包含一个内嵌的原始字符串 R"(原始字符串)"
 但由于分隔符不匹配，字符串实际上
 直到这里才结束。)multi";

```

Wrangle和VEX表达式中的转义序列

## wrangle和vex表达式中的转义序列

需要注意，在Houdini中很少直接编写VEX代码。相反，编写的代码片段会被通道引用到VOP中，然后用于生成代码。从属性Wrangle到最终VEX的转换过程会进行大量替换。

特别是，'$'会触发环境变量扩展，'\'会触发转义序列，这些操作都发生在VEX接收到代码之前。可以使用VEX中的"查看代码"选项来查看转换的完整结果。

可以使用`chr(92)`生成反斜杠，使用`chr(36)`生成美元符号。

声明字符串类型

## 声明字符串类型

声明字符串变量的一般形式是`string 变量名`：

```vex
// 我的字符串是一个普通字符串
string mystring;

```

声明返回字符串的函数：

```vex
// 返回字符串的函数
string rgb_name()
{
...
}; 

```

要指定字面量数组，请使用双引号或单引号。

```vex
string a_string = "hello world!";
string another_string = 'good-bye!'

```

访问和设置字符串值

## 访问和设置字符串值

使用`string[索引]`通过位置查找字符。

索引是字符串中的字节偏移量，而不是字符偏移量。在处理Unicode字符串时，这是一个重要的区别。VEX假设所有字符串都使用UTF-8编码。如果给定的偏移量不是有效的UTF-8字符，则返回空字符串。否则，返回完整的UTF-8字符——这可能是一个长度大于1的字符串！

字符串边界在运行时检查。越界读取将导致空字符串。未来可能会生成警告或可选的运行时错误。

使用Python风格的索引。这意味着负索引表示从数组末尾开始的位置。

可以使用切片符号与方括号一起提取字符串的范围。这将操作字节序列，绕开普通方括号操作的UTF-8要求。因此，如果你想要第三个字节，无论它是否是有效的UTF-8，都可以使用：

```vex
string a_string = "hello world!";
string thirdbyte = a_string[2:3];

```

不能使用方括号为数组赋值。

（[getcomp](functions/getcomp.html "提取向量类型、矩阵类型或数组的单个分量。")函数相当于使用方括号表示法。）

遍历字符串

## 遍历字符串

参见[foreach](functions/foreach.html "遍历数组中的项，可选择枚举。")。

注意，对于不对应有效Unicode字符的偏移量，你将得到空字符串。

字符串操作

## 字符串操作

以下函数允许你查询和操作数组。

[len](functions/len.html "返回数组的长度。")

返回字符串的长度。

[append](functions/append.html "向数组或字符串添加项。")

将另一个数组添加到此数组的末尾。

[ord](functions/ord.html "将UTF8字符串转换为码位。")

将UTF-8字符串转换为码位。

[chr](functions/chr.html "将Unicode码位转换为UTF8字符串。")

将码位转换为UTF-8字符串。
