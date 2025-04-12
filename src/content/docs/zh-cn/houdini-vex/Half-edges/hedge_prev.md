---
title: hedge_prev
order: 13
---
`int  hedge_prev(<geometry>geometry, int hedge)`

如果`hedge`无效则返回`-1`。否则返回包含该半边的多边形中前驱（其终点是当前半边起点）的半边编号。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`hedge`

输入的半边。

返回值

返回包含该半边的多边形中前驱（其终点是当前半边起点）的半边编号。
如果半边无效则返回`-1`。

## 示例

```vex
int prev;

// 获取编号为3的半边的上一个半边
prevhedge = hedge_prev("defgeo.bgeo", 3);

```
