---
title: hedge_nextequiv
order: 8
---
`int  hedge_nextequiv(<geometry>geometry, int hedge)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`hedge`

输入半边。

返回值

返回与`hedge`等价的下一个半边，如果没有其他等价半边则返回`hedge`本身。
连续调用`hedge_nextequiv()`会循环遍历所有等价半边。
如果半边无效则返回`-1`。

## 示例

```vex
// 计算与3号半边等价的所有半边数量（包括自身）
int num_equiv = 0;
int h = 3;
do
{
h = hedge_nextequiv("defgeo.bgeo", h);
num_equiv++;
} while (h != 3);

```
