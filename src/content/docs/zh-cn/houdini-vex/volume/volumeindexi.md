---
title: volumeindexi
order: 7
---

`int  volumeindexi(<geometry>geometry, int primnum, vector voxel)`

`int  volumeindexi(<geometry>geometry, string volumename, vector voxel)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号的整数（从0开始），用于读取几何体。

或者，该参数也可以是指定要读取的几何体文件（例如`.bgeo`文件）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`形式的引用。

返回值

返回体积图元中特定体素的整数值。

如果`primnum`或`inputnum`超出范围、几何体无效，或给定图元不是体积图元，则返回0。
