---
title: hedge_primary
order: 15
---
`int  hedge_primary(<geometry>geometry, int hedge)`

每组等价半边边中恰好有一个主半边边。特别地，不与任何其他半边边等价的半边边总是主半边边。主半边边可用于确保每条边只被统计一次，因为每条边可能由任意数量的等价半边边表示。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个整数，表示要读取几何体的输入编号（从0开始）。

或者，该参数可以是一个指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`hedge`

输入的半边边。

返回值

返回与`hedge`共享源点和目标点（可能顺序相反）的主半边边。
如果半边边无效，则返回`-1`。

## 示例

```vex
int primhedge;

// 获取与3号半边边等价的主半边边
primhedge = hedge_primary("defgeo.bgeo", 3);

```
