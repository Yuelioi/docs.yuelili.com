---
title: hedge_postdstpoint
order: 9
---
`int  hedge_postdstpoint(<geometry>geometry, int hedge)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是一个指定几何文件（例如`.bgeo`）的字符串以从中读取。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`hedge`

输入半边。

返回值

返回包含半边`hedge`的图元中，位于该半边目标顶点之后的下一个顶点所连接的点编号。
如果半边无效则返回`-1`。

## 示例

```vex
int postdstpt;

// 获取编号为3的半边的目标顶点之后的下一个顶点连接的点
postdstpt = hedge_postdstpoint("defgeo.bgeo", 3);

```
