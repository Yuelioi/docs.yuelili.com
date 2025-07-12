---
title: isbound
order: 6
---
`int  isbound(string variable_name)`

VEX中的参数可以被几何体属性覆盖（如果渲染的表面存在这些属性）。如果几何体覆盖了默认属性，该函数将返回1，否则返回0。

注意
虽然该函数在所有上下文中都有定义，但它仅在置换(Displacement)、表面(Surface)和SOP上下文中有效。目前其他上下文无法将几何体属性绑定到VEX变量。

示例（在SOP函数中）：

```vex
sop
mycolor(vector uv=0; string map="")
{
if (isbound("uv") && map != "")
{
 // 用户在此处有纹理坐标，因此基于纹理贴图创建速度
 v = colormap(map, uv);
}
else
{
 // 没有纹理坐标，使用随机值
 v = random(id);
}
```

注意
`isbound`不会告诉你属性是否存在，而是告诉你属性是否被绑定。如果你在wrangle中添加了`@a`来绑定`a`属性，那么在CVEX中`isbound`会如预期工作。如果没有`@a`，你的CVEX函数中就没有参数来绑定属性，因此它将处于未绑定状态。
