---
title: setpointattrib
order: 67
---

如果事先不知道属性类别，请使用[setattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/setattrib "向几何体写入属性值")。

`int  setpointattrib(int geohandle, string name, int point_num, <type>value, string mode="set")`

`int  setpointattrib(int geohandle, string name, int point_num, <type>value[], string mode="set")`

成功时返回`geohandle`的值，失败时返回`-1`。

注意
如果属性不存在，此函数会**创建该属性**，默认值为零、空字符串或空数组。
如果要控制数值属性的默认值，请在设置属性前使用[addattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/addattrib "向几何体添加属性")。

如果属性尚不存在，对于具有[标准名称](/zh-cn/houdini-vex/snippets.html#known)（如`Cd`和`orient`）的属性，其类型信息会自动设置。
如果要控制数值属性的类型信息，请在设置属性前使用[setattribtypeinfo](/zh-cn/houdini-vex/attributes-and-intrinsics/setattribtypeinfo "设置几何体中属性的含义")。

`geohandle`

要写入的几何体句柄。目前唯一有效的值是`0`或[geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄")，表示节点中的当前几何体。（此参数未来可能用于支持写入其他几何体。）

`name`

要在给定点上设置的属性名称。

`point_num`

要设置属性的点编号。

`value`

要设置的属性值。

注意在VEX程序中，单个属性只能写入一种类型。例如，不能混合写入浮点和整数值。这可能会令人意外，因为像`1`这样的字面量会被视为整数写入，如果之前写入的是浮点数，则会被忽略。

`mode`

（可选）如果提供，此参数控制函数如何修改属性中的现有值。

| `"set"` | 用给定值覆盖属性。 |
| --- | --- |
| `"add"` | 将值添加到属性中。 |
| `"min"`, `"minimum"` | 将属性设置为其本身与给定值中的较小者。 |
| `"max"`, `"maximum"` | 将属性设置为其本身与给定值中的较大者。 |
| `"mult"`, `"multiply"` | 将属性乘以给定值。对于矩阵，这将执行矩阵乘法；对于向量，则是分量相乘。 |
| `"toggle"` | 切换属性，与源值无关。适用于切换组成员资格。 |
| `"append"` | 适用于字符串、字典和数组属性。对于字符串和数组，将源值追加到原始值的末尾。对于字典，用源字典更新原始字典，替换任何匹配的键。 |
