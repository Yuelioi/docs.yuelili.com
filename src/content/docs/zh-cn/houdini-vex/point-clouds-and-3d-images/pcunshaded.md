---
title: pcunshaded
order: 32
---
`int  pcunshaded(int handle, string channel_name)`

与 [pciterate](/zh-cn/houdini-vex/point-clouds-and-3d-images/pciterate "此函数可用于遍历pcopen查询中找到的所有点。") 类似，此函数可用于遍历 [pcopen](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcopen "返回点云文件的句柄。") 查询中找到的点。第一个参数是 `pcopen` 返回的句柄。

然而，`pciterate` 会遍历所有点，而此函数仅遍历 channel_name 指定通道中尚未被写入数据的点。

当迭代循环中还有剩余点时，函数返回 1；当没有更多点时返回 0。这使得您可以将该函数用作 [while 循环](../statement.html) 的条件。

警告：

- 在多线程 OP 中使用此函数时可能无法正常工作。
 不能对同一个句柄嵌套使用 `pcunshaded` 或 [pciterate](/zh-cn/houdini-vex/point-clouds-and-3d-images/pciterate "此函数可用于遍历pcopen查询中找到的所有点。") 循环。也就是说，对于单个 [pcopen](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcopen "返回点云文件的句柄。") 调用，只能进入一个 `pcunshaded` 或 [pciterate](/zh-cn/houdini-vex/point-clouds-and-3d-images/pciterate "此函数可用于遍历pcopen查询中找到的所有点。") 循环。
- 在 `pcunshaded` 循环内涉及导数的计算可能会得到略微不同的结果。如果需要对未被 [pcimport](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcimport "在pciterate或pcunshaded循环中从点云导入通道数据。") 设置的变量求导数，最好在进入 `pcunshaded` 循环之前预先计算导数。
