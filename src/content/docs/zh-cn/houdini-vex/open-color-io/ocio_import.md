---
title: ocio_import
order: 3
---

| 本页内容 | * [可查询属性](#queryable-attributes) * [示例](#examples) |
| --- | --- |

`int  ocio_import(string space, string property, int &value)`

`int  ocio_import(string space, string property, vector &value)`

`int  ocio_import(string space, string property, string &value)`

此函数用于查询与色彩空间相关的数据。

如果函数执行失败，value变量将不会被修改，且可能保持未初始化状态。

## 可查询属性

可查询属性列表包含OCIO配置文件中定义的大多数属性：

`string name`

色彩空间的名称。

`string family`

色彩空间所属的族系。

`string equalitygroup`

色彩空间的等价组。

`string description`

色彩空间的描述信息。

`int isdata`

如果色彩空间适合非色彩像素数据（如法线、点位置等），则返回true。

`string bitdepth`

表示色彩空间位深的字符串。

`string allocation`

分配方式，可以是`uniform`或`lg2`（log2）。

`vector allocationvars`

分配变量（最小值、最大值、偏移量）。

## 示例

```vex
cvex test()
{
 string token;
 string sval;
 int ival;
 vector vval;

 // 可以通过名称或角色指定色彩空间
 foreach(space; { "sRGB", "color_picker" })
 {
 foreach(token; { "name",
 "description",
 "isdata",
 "allocation",
 "allocationvars",
 "description",
 } )
 {
 printf("----------------- %s ---------------------\n", token);
 if (teximport(map, token, sval))
 fprintf(stderr, "'%s' = %s\n", token, sval);
 if (teximport(map, token, ival))
 fprintf(stderr, "'%s' = %d\n", token, ival);
 else if (teximport(map, token, vval))
 fprintf(stderr, "'%s' = %g\n", token, vval);
 }
 }
```
