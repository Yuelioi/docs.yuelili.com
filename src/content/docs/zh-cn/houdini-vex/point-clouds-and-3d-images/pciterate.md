---
title: pciterate
order: 22
---
`int  pciterate(int handle)`

此函数用于遍历 [pcopen](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcopen "返回点云文件的句柄。") 查询中找到的所有点。第一个参数是 `pcopen` 返回的句柄。
当迭代循环中还有剩余点时，函数返回 1；当没有更多点时返回 0。这使得您可以将该函数用作 [while 循环](../statement.html) 的条件。

警告：

- 不能为同一个句柄嵌套 pcunshaded 或 pciterate 循环。也就是说，对于单个 [pcopen](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcopen "返回点云文件的句柄。") 调用，只能进入一个 [pcunshaded](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcunshaded "遍历读写通道中尚未写入任何数据的点。") 或 `pciterate` 循环。
- 在 [pcunshaded](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcunshaded "遍历读写通道中尚未写入任何数据的点。") 循环内涉及导数的计算可能会产生略微不同的结果。如果需要对不由 [pcimport](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcimport "在 pciterate 或 pcunshaded 循环中从点云导入通道数据。") 设置的变量求导，最好在进入 [pcunshaded](/zh-cn/houdini-vex/point-clouds-and-3d-images/pcunshaded "遍历读写通道中尚未写入任何数据的点。") 循环之前预先计算导数。
