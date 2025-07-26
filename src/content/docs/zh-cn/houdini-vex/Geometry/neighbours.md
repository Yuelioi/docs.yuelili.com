---
title: neighbours
order: 16
---

`int [] neighbours(<geometry>geometry, int ptnum)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

这是一个基于数组的简化替代方案，用于替代[neighbourcount](/zh-cn/houdini-vex/geometry/neighbourcount "返回连接到指定点的点数")和[neighbour](/zh-cn/houdini-vex/geometry/neighbour "返回连接到给定点的下一个点的编号")的组合。该数组包含所有与`ptnum`共享边的点编号。点编号没有特定顺序。

## 示例

这大致等同于以下代码：

```vex
int []
neighbours(int opinput, int ptnum)
{
 int i, n;
 int result[];
 n = neighbourcount(input, ptnum);
 resize(result, n);
 for (i = 0; i < n; i++)
 result[i] = neighbour(input, ptnum, i);
}
```
