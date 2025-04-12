---
title: osd_facecount
order: 1
---
`int  osd_facecount(<geometry>geometry)`

返回细分外壳中的粗略面数。这与细分曲面中的面片数量不同。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是一个指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。
