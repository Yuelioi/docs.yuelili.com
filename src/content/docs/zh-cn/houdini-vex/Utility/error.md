---
title: error
order: 3
---

`void  error(string format, ...)`

报告自定义的运行时VEX错误。该函数使用与[printf](/zh-cn/houdini-vex/utility/printf "将值打印到启动VEX程序的控制台。")相同的格式化字符串语法。

如果某些操作仍可作为可接受的备选方案执行，而非完全失败，则考虑使用[warning](/zh-cn/houdini-vex/utility/warning "报告自定义的运行时VEX警告。")而非错误报告可能更为合适。

## 示例

```vex
if (!pointattribtype(0,chs("nameattrib")) != 2) {
 error("名称属性 %s 必须是字符串类型！", chs("nameattrib"));
 return;
}
if (chf("distance") < 0) {
 error("")
}
float minimumValue = chf("min");
float maximumValue = chf("max");
if (minimumValue >= maximumValue) {
 error("最小值 (%f) 必须严格小于最大值 (%f)! 当前无法确定应执行的操作。", minimumValue, maximumValue);
 return;
}

```
