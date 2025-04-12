---
title: hedge_isequiv
order: 4
---
`int  hedge_isequiv(<geometry>geometry, int hedge1, int hedge2)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`hedge1`

表示第一条半边的整数。

`hedge2`

表示第二条半边的整数。

返回值

如果`hedge1`和`hedge2`是等价的（即表示几何体中的同一条边），则返回`1`。当满足以下任一条件时成立：

- `hedge1`和`hedge2`的源点与目标点分别相同
- `hedge1`的源点与`hedge2`的目标点相同，且`hedge1`的目标点与`hedge2`的源点相同

## 示例

```vex
int opposite = 0;

// 测试半边2和3是否是方向相反的等价半边
if (hedge_isequiv("defgeo.bgeo", 2, 3))
{
if (hedge_srcpoint("defgeo.bgeo", 2) == hedge_dstpoint("defgeo.bgeo", 3))
opposite = 1;
}

```
