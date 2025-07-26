---
title: argsort
order: 2
---
`int [] argsort(<type>value[])`

返回一个索引列表，当这些索引应用于给定数组时，将产生一个按升序排列的序列。

这允许根据数组中元素的某些属性而非值本身对数组进行排序。

- [argsort](/zh-cn/houdini-vex/arrays/argsort "返回排序后数组的索引") 和 [sort](/zh-cn/houdini-vex/arrays/sort "返回按升序排列的数组") 使用稳定排序算法。
- 使用 [reverse](/zh-cn/houdini-vex/arrays/reverse "返回反转顺序的数组或字符串") 可以反转排序顺序。

## 示例

按字符串长度排序

```vex
cvex main()
{
 // 给定一个字符串数组...
 string colors[] = {"Red", "Green", "Blue", "Orange", "Violet", "Indigo"};

 // 创建包含对应长度的数组
 int[] lengths = {};
 foreach (string name; colors) {
 push(lengths, len(name));
 }

 // 对长度进行排序并返回包含新排序的数组
 int[] ordering = argsort(lengths);

 // 获取按名称长度排序的颜色名称数组
 string colors_by_len[] = reorder(colors, ordering);

 printf("%s\n", colors_by_len);
}

// 输出 {Red, Blue, Green, Orange, Violet, Indigo}

```
