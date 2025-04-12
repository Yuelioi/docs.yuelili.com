---
title: hedge_equivcount
order: 3
---
`int  hedge_equivcount(<geometry>geometry, int hedge)`

注意
等价半边可能方向相反，即一个的源可以是另一个的目标，反之亦然。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`hedge`

输入的半边。

返回值

与`hedge`具有相同端点（包括`hedge`）的半边数量，如果半边无效则返回`-1`。

## 示例

```vex
int is_boundary = 0;
int is_interior = 0;
int is_nonmanifold = 0;

// 确定由半边编号3表示的边类型：
int numeq;
numeq = hedge_equivcount("defgeo.bgeo", 3);
if (numeq == 1)
is_boundary = 1;
else if (numeq >= 3)
is_nonmanifold = 1;
else
is_interior = 1;

```
