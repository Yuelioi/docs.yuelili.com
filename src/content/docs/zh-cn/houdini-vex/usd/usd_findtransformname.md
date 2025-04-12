---
title: usd_findtransformname
order: 37
---
| 始于版本 | 18.0 |
| --- | --- |

`string  usd_findtransformname(<stage>stage, string primpath, string suffix)`

该函数根据给定的变换操作后缀，返回该操作属性的完整名称（如果指定图元上存在该操作属性）。

`<stage>`

在节点上下文（如wrangle LOP节点）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取对应输入的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

也可用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点处理后的stage（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`suffix`

变换操作的后缀。

USD图元通过一系列变换操作进行空间变换，这些操作的完整名称按顺序列在`xformOpOrder`属性中。完整名称包含命名空间、编码操作变换类型（如平移或旋转），并可包含后缀。若图元有多个同类型操作，则需通过后缀区分。此参数即指定此类后缀。

返回值

返回具有给定后缀的图元变换操作的完整名称，若未找到则返回空字符串。

可能存在多个具有相同后缀的变换操作（如平移和旋转），此时将返回首个匹配项。

## 示例

```vex
// 查找枢轴平移的变换操作名称，并为其添加逆操作
string xform_name = usd_findtransformname(0, "/geo/cone", "cone_pivot");
usd_addinversetotransformorder(0, "/geo/cone", xform_name);

```
