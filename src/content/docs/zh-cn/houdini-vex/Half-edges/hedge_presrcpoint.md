---
title: hedge_presrcpoint
order: 11
---
`int  hedge_presrcpoint(<geometry>geometry, int hedge)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是一个指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`hedge`

输入的半边。

返回值

返回包含`hedge`的图元中，位于`hedge`源顶点之前的顶点所连接的点。
如果半边无效，则返回`-1`。

## 示例

```vex
int presrcpt;

// 获取编号为3的半边的预源点
presrcpt = hedge_presrcpoint("defgeo.bgeo", 3);

```
