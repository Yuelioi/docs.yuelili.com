---
title: usd_isstage
order: 80
---
| 始于版本 | 17.5 |
| --- | --- |

`int  usd_isstage(<stage>stage)`

该函数用于验证给定输入是否包含有效的USD舞台(stage)。若有效，则其他所有USD函数都能访问该舞台进行查询和操作；否则这些操作将会失败。

`<stage>`

在节点上下文环境中运行时（如wrangle LOP节点），该参数可以是表示输入编号的整数（从0开始）以读取对应输入的舞台。该整数等价于引用特定输入的字符串形式，例如"opinput:0"。

此参数也可用于引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已烹饪的舞台（如"op:/stage/lop_node"）。

返回值

若舞台有效则返回1，否则返回0。

## 示例

```vex
// 检查第一个输入是否包含有效舞台
int is_valid_stage_on_first_input = usd_isstage(0);

```
