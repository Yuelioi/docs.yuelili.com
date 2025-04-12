---
title: agentmetadata
order: 32
---

| 版本 | 18.5 |
| --- | --- |

`dict  agentmetadata(<geometry>geometry, int prim)`

返回代理定义中的共享[元数据字典](../../crowds/agents.html#metadata)。
如果`prim`超出范围或不是代理图元，则返回空字典。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`prim`

图元编号。
