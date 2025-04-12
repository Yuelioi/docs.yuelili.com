---
title: hedge_prim
order: 14
---
`int  hedge_prim(<geometry>geometry, int hedge)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，该参数可以是一个整数，表示要读取几何体的输入编号（从0开始）。

或者，该参数可以是一个指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`形式的引用。

`hedge`

输入半边。

返回值

包含`hedge`（源顶点和目标顶点）的图元编号。
如果半边无效则返回`-1`。

## 示例

```vex
int prim;

// 获取编号为3的半边所属图元编号
prim = hedge_prim("defgeo.bgeo", 3);

```
