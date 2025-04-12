---
title: hedge_next
order: 7
---
`int  hedge_next(<geometry>geometry, int hedge)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，该参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`hedge`

输入半边。

返回值

返回包含该半边的多边形中跟随（其源点是目标点）`hedge`的半边编号。如果半边无效则返回`-1`。

## 示例

```vex
int nexthedge;

// 获取编号为3的半边的下一条半边
nexthedge = hedge_next("defgeo.bgeo", 3);

```
