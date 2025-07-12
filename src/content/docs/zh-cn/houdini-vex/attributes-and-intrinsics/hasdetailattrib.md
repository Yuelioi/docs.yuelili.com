---
title: hasdetailattrib
order: 25
---
`int  hasdetailattrib(<geometry>geometry, string attribute_name)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

如果给定属性存在则返回`1`，否则返回`0`。

## 示例

```vex
int exists;
// 判断P属性是否存在
exists = hasdetailattrib("defgeo.bgeo", "P");

```
