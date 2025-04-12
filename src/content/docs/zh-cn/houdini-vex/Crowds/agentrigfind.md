---
title: agentrigfind
order: 36
---
`int  agentrigfind(<geometry>geometry, int prim, string transformname)`

如果在骨骼绑定中未找到`transformname`，或`prim`超出范围，或`prim`不是代理图元，则返回`-1`。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个整数，表示要读取几何体的输入编号（从0开始）。

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如`.bgeo`）。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

图元编号。

`transformname`

代理骨骼绑定中的变换名称。

## 示例

查找给定骨骼的当前局部变换。

```vex
int idx = agentrigfind(0, @primnum, "Hips");
if (idx >= 0) {
matrix local_xforms[] = agentlocaltransforms(0, @primnum);
matrix xform = local_xforms[idx];
}

```
