---
title: metastart
order: 4
---

`int  metastart(string filename, vector p)`

打开一个几何体文件，并返回在位置p处感兴趣的元球的"句柄"。然后您可以使用
[metanext](/zh-cn/houdini-vex/metaball/metanext "迭代到由metastart()函数返回的元球列表中的下一个元球。")将句柄移动到下一个待评估的元球，
并使用[metaimport](/zh-cn/houdini-vex/metaball/metaimport "当您通过metastart和metanext获取到元球句柄后，可以通过metaimport查询该元球的属性。")
来查询该元球的属性。
