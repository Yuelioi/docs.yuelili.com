---
title: usd_isinstance
order: 72
---
| Since | 18.0 |
| --- | --- |

`int  usd_isinstance(<stage>stage, string primpath)`

此函数用于检查给定图元是否为实例。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应输入端的stage。该整数等价于引用特定输入端的字符串形式，例如"opinput:0"。

您也可以使用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理stage（如"op:/stage/lop_node"）。

`primpath`

图元的路径。

返回值

如果图元是实例则返回1，否则返回0。

## 示例

```vex
// 检查球体图元是否为实例
int is_instance = usd_isinstance(0, "/geometry/sphere");

```
