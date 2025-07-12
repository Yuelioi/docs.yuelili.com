---
title: pcfind
order: 11
---
`int [] pcfind(<geometry>geometry, string Pchannel, vector P, float radius, int maxpoints)`

`int [] pcfind(<geometry>geometry, string ptgroup, string Pchannel, vector P, float radius, int maxpoints)`

`int [] pcfind(<geometry>geometry, string Pchannel, vector P, float radius, int maxpoints, float &distances[])`

`int [] pcfind(<geometry>geometry, string ptgroup, string Pchannel, vector P, float radius, int maxpoints, float &distances[])`

`<geometry>`

在节点上下文(如wrangle SOP)中运行时，此参数可以是表示输入编号(从0开始)的整数，用于读取几何体。

或者，该参数可以是指定要读取的几何文件(例如`.bgeo`)的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

这些函数会打开几何文件，并基于Pchannel中的点位置，返回位置P在半径范围内的点列表。仅返回给定半径内最近的maxpoints个点。文件名可以使用`op:`语法来引用OP上下文中的SOP几何体。Pchannel参数指定包含要搜索位置的属性。

`ptgroup`是限制搜索点的点组。这是SOP样式的组模式，因此可以是类似`0-10`或`@Cd.x>0.5`的内容。空字符串被视为匹配所有点。

该函数还可以选择性地接受一个浮点数组`distances`，并用每个点的距离修改它。

最近的点位于返回数组的第0个条目中，其他点按距离递增排序。

## 示例

执行邻近查询：

```vex
int closept[] = pcfind(filename, "P", P, maxdistance, maxpoints);
P = 0;
foreach (int ptnum; closept)
{
 vector closepos = point(filename, "P", ptnum);
 P += closepos;
}
P /= len(closept);
```
