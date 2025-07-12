---
title: polyneighbours
order: 24
---

| 始于版本 | 17.0 |
| --- | --- |

`int [] polyneighbours(<geometry>geometry, int primnum)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于指定读取几何体的来源。

或者，该参数也可以是一个指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`形式的引用路径。

该函数返回与指定多边形共享边的所有多边形的图元编号数组。它使用半边（Half-Edge）数据结构，因此适用于支持该结构的几何体（即多边形）。

## 示例

以下代码大致等效于该函数的功能：

```vex
int[] polyneighbours(const string opname; const int primnum)
{
 int result[] = {};

 int start = primhedge(opname, primnum);

 for (int hedge = start; hedge != -1; )
 {
 for (int nh = hedge_nextequiv(opname, hedge);
 nh != hedge;
 nh = hedge_nextequiv(opname, nh))
 {
 int prim = hedge_prim(opname, nh);
 if (prim != -1 && prim != primnum)
 {
 append(result, prim);
 }
 }
 hedge = hedge_next(opname, hedge);
 if (hedge == start)
 break;
 }

 return result;
}
```
