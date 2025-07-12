---
title: vex compiler (vcc)
order: 8
---

| 本页内容 | * [命令行选项](#command-line-options)

+ [编译器选项](#compiler-options)
+ [预处理器选项](#preprocessor-options)
+ [诊断选项](#diagnostic-options)
+ [VEX上下文选项](#vex-context-options)
+ [资产选项](#otl)
+ [对话框脚本选项](#ds)

+ [预处理器](#pre-processor)
  + [预定义宏](#predefined-macros) |
| --- | --- |

`vcc`编译器将VEX源代码编译成Houdini可执行的形式。VEX编译器(vcc)能够编译VEX代码、为VEX函数生成对话框脚本，并通过列出任何给定上下文中可用的全局变量和函数来提供快速帮助。

## 命令行选项

注意

大多数选项都有短格式和长格式。长格式显示在短格式后的方括号中。

`-h [--help]`

显示编译器帮助信息。

### 编译器选项

compiler-options

`-o [--vex-output] [file|-]`

指定需要VEX代码输出。如果给定的文件名是'stdout'，则输出将打印到控制台。如果未指定`--hda-output`、`--otl-output`或`--ds-output`，则默认启用此选项。默认情况下，输出文件名根据上下文函数构造。如果未定义上下文函数，则使用输入文件名作为基础。如果给出多个输入文件，则忽略文件名参数，并根据上述规则构造输出文件名。

`-d [--compile-all]`

将所有函数编译到VEX代码中，即使它们未被上下文函数直接或间接使用。此选项对检查包含文件的语法很有用。

`-z [--no-optimize]`

生成未优化的VEX代码。

`-V [--no-version-id]`

不在VEX代码中嵌入Houdini版本标识符。

### 预处理器选项

preprocessor-options

`-E [--parse-only]`

仅将输入文件解析到标准输出。不进行编译。

`-D [--define] name[=value]`

为预处理器定义一个宏。如果未给出值，则名称定义为1。

`-I [--include-dir] path`

将指定路径添加到包含路径（预处理器搜索`#include`指令引用文件的目录列表）。标准Houdini包含路径位于`vex/include`下。

### 诊断选项

diagnostic-options

`-w id[,id...]`

禁止打印某些警告和信息消息。wlist是逗号分隔的警告编号列表。

`-F [--Werror]`

将所有未禁止的警告视为错误。

`-e [--Werror-output] file`

将所有诊断输出重定向到给定的文件名，而不是打印到标准错误输出。

`-q [--Wno-info]`

禁止信息消息。

`-Q [--Werror-only]`

禁止信息和警告消息。覆盖`--Wno-info`。

`--fmessage-limit <N>`

设置打印消息的最大数量，超过后将停止。设置为0（默认值）表示无限制。

### VEX上下文选项

vex-context-options

`-c [--context] name`

如果未定义上下文函数，此选项可用于指定编译源文件时使用的VEX上下文。

`-X [--list-context] context`

打印给定VEX上下文中定义的全局变量和函数签名。参数值`contexts`可用于列出所有可用的VEX上下文。

### 资产选项

otl

`-L [--hda-append] [file|-]`

将VEX源生成的数字资产附加到指定的操作符类型库文件。如果文件不存在，将创建该文件。

`-l [--hda-output] [file|-]`

将上下文函数的数字资产定义写入指定的操作符类型库文件。如果库文件已存在，将被覆盖。

`-K [--hda-vex-section] name`

将生成的VEX代码存储在HDA中的给定节名称中，而不是给定VEX上下文的标准节名称中。

`-a [--hda-dialog-script] file`

使用给定文件中的参数定义，而不是从VEX源自动生成的参数定义。对话框脚本的操作符定义仍将取自VEX源。

`-U [--hda-dialog-script-only]`

仅将对话框脚本嵌入到OTL中。不添加VEX代码。

`-n [--op-name] name`

使用给定名称作为操作符的名称。覆盖代码中的任何[`#pragma opname`](pragmas.html#opname)语句。

`-S [--op-script-name] name`

使用给定名称作为操作符的脚本名称。覆盖代码中的任何[`#pragma opscript`](pragmas.html#opscript)语句。

`-N [--op-label] name`

使用给定名称作为操作符的UI标签。覆盖代码中的任何[`#pragma oplabel`](pragmas.html#opname)语句。

`-C [--op-icon] name`

使用给定名称作为操作符的图标。覆盖代码中的任何[`#pragma opicon`](pragmas.html#opicon)语句。

`-t [--op-min-inputs] N`

设置操作符的最小输入数。覆盖代码中的任何[`#pragma opmininputs`](pragmas.html#opinputs)语句。最小输入值将调整为适合生成的操作符类型。

`-T [--op-max-inputs] N`

设置操作符的最大输入数。覆盖代码中的任何[`#pragma opmaxinputs`](pragmas.html#opinputs)语句。最大输入值将调整为适合生成的操作符类型。

### 对话框脚本选项

ds

`-u [--ds-output] [file|-]`

将对话框脚本写入给定的文件名。与`--vex-output`和`--hda-output`一样，如果给出多个输入文件，则忽略给定的文件名，并根据上下文函数名称或输入文件名（如果未定义上下文函数）自动构造输出文件名。

## 预处理器

pre-processor

编译器有一个预处理器，用于删除注释、读取包含文件并扩展宏。

预处理器支持许多常见的C预处理器指令：

`#define name token-string`

将后续使用的name替换为token-string。

`#define name(arg,...,arg) token-string`

将后续的name实例替换为token-string。在扩展过程中，name的每个参数都会在token-string中被替换。

`#undef name`

“取消定义”宏，以便后续使用的name不会被扩展。

`#include "filename"`

在此处插入文件内容到源代码中。使用引号时，将在标准位置（包括路径）之前搜索包含当前文件的目录以查找filename。

`#sinclude "filename"`

类似于`include`，但静默（文件未找到时不显示警告或错误）。

`#includeall "filename"`

类似于`include`，但扫描包含搜索路径，包括找到的所有文件。

`#ifdef name`

如果name是已定义的宏，则编译以下行直到下一个`#endif`或`else`指令。

`#ifndef name`

如果name不是已定义的宏，则编译以下行。

`#if constant-expr`

如果constant-expr计算结果为非零，则编译以下行直到下一个`#endif`或`#else`指令。

表达式可以使用以下运算符：

+ 比较（`==`、`!=`、`<=`、`>=`、`<`、`>`）
+ 逻辑AND（`&&`）、OR（`||`）和NOT（`!`）。
+ 位AND（`&`）、OR（`|`）、异或（`^`）和NOT（`~`）。
+ 算术（`+`、`-`、`*`、`/`、`%`）。
+ 括号。

表达式还可以使用以下函数：

`defined(name)`

如果name是已定义的宏，则返回1，否则返回0。

```vex
#if defined(foo) && defined(fum)

```

`environment(name)`

如果name是已定义的环境变量，则返回1。

`access(filename)`

如果应用程序可以读取filename，则返回1，否则返回0。

```vex
#if access("/etc/passwd")
#include </etc/passwd>
#endif

```

`strcmp(str1, str2)`

功能与同名的C/C++函数相同，如果两个字符串内容相同，则函数返回0。每个参数应为引号字符串或扩展为引号字符串的宏。

```vex
#define VALUE "foo"
#if strcmp(VALUE, "bar") != 0
此语句为假，因为"foo" != "bar"
#endif
#if !strcmp(VALUE, "foo")
此语句为真，因为strcmp("foo", "bar") == 0
#endif

```

表达式从左到右求值（**与ANSI C标准的从右到左不同**）。与ANSI预处理器一样，所有数字必须为整数。

`#else`

如果先前的`#if`指令计算结果为零，则编译以下行直到下一个`#endif`指令。

`#endif`

标记条件代码段的结束。每个测试指令必须有一个匹配的`#endif`。

`#pragma ...`

指定扩展语言特性。参见[pragma列表](pragmas.html)。

### 预定义宏

predefined-macros

以下宏是预定义的：

`__vex`

此符号始终定义。可以在`if`预处理器指令中使用此符号来检查程序是否由vcc编译。

`__vex_major`

编译器的主版本号（Houdini版本号）。

`__vex_minor`

编译器的次版本号（Houdini版本号）。

`__vex_build`

编译器的构建版本号（Houdini版本号）。

`__vex_patch`

编译器的补丁版本号（Houdini版本号）。

`__LINE__`

源文件的当前行号。

`__FILE__`

正在编译的文件。

`__DATE__`

当前日期（作为引号字符串）。例如：`"Dec 31 1999"`

`__TIME__`

当前时间（作为引号字符串）。例如：`"23:59:59"`

```vex
printf("Starting shader %s at %s", __FILE__, __DATE__);

```
