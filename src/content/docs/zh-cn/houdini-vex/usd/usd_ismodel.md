---
title: usd_ismodel
order: 76
---
| 始于版本 | 19.0 |
| --- | --- |

`int  usd_ismodel(<stage>stage, string primpath)`

此函数根据图元（primitive）的kind元数据判断给定的图元是否为模型。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，该参数可以是表示输入编号的整数（从0开始），用于读取对应的stage。该整数等价于引用特定输入的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（例如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点已烹饪的stage（例如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

返回值

如果图元属于模型类型则返回1，否则返回0。

## 示例

```vex
// 检查球体图元是否为模型
int is_model = usd_ismodel(0, "/geometry/sphere");

```
