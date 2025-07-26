---
title: warning
order: 22
---
`void  warning(string format, ...)`

报告自定义的运行时VEX警告。该函数使用与[printf](/zh-cn/houdini-vex/utility/printf "将值打印到启动VEX程序的控制台。")相同的格式化字符串语法。

如果某个问题非常严重以至于没有可接受的备选行为，那么可能值得报告一个[错误](/zh-cn/houdini-vex/utility/error "报告自定义的运行时VEX错误。")，而不是警告。

注意
很容易意外地报告数千条不同的警告。

## 示例

```vex
if (primintrinsic(0,"typeid",@primnum) != 1) {
 warning("非多边形图元将被忽略。");
 return;
}
if (primintrinsic(0,"closed",@primnum) == 0 || @numvtx < 3) {
 warning("开放或退化的多边形将被忽略。");
 return;
}
float minimumValue = chf("min");
float maximumValue = chf("max");
if (minimumValue > maximumValue) {
 warning("最小值(%f)不能大于最大值(%f)；将最小值替换为最大值。", minimumValue, maximumValue);
 minimumValue = maximumValue;
}

```
