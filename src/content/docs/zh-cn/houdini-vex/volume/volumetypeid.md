---
title: volumetypeid
order: 22
---
`int  volumetypeid(<geometry>geometry, int primnum)`

`int  volumetypeid(<geometry>geometry, string volumename)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是一个整数，表示要读取几何体的输入编号（从0开始）。

或者，该参数可以是一个指定几何体文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

返回值

存储在体积或VDB中的数据的整数类型ID。
这将与具有相同类型的VEX typeid()函数的结果匹配。

如果不是体积或VDB，或者不是VEX兼容类型，则返回-1。
