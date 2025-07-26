---
title: setdetailattrib
order: 65
---

如果事先不知道属性类别，请使用 [setattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/setattrib "将属性值写入几何体。")。

`int  setdetailattrib(int geohandle, string name, <type>value, string mode="set")`

`int  setdetailattrib(int geohandle, string name, <type>value[], string mode="set")`

成功时返回 `geohandle` 的值，失败时返回 `-1`。

注意
如果属性不存在，此函数会**创建该属性**，默认值为零、空字符串或空数组。
如果要控制数值属性的默认值，请在设置属性前使用 [addattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/addattrib "向几何体添加属性。")。

如果属性尚不存在，对于具有[标准名称](/zh-cn/houdini-vex/snippets.html#known)（如 `Cd` 和 `orient`）的属性，其类型信息会自动设置。
如果要控制数值属性的类型信息，请在设置属性前使用 [setattribtypeinfo](/zh-cn/houdini-vex/attributes-and-intrinsics/setattribtypeinfo "设置几何体中属性的含义。")。

`geohandle`

要写入的几何体的句柄。目前唯一有效的值是 `0` 或 [geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄。")，表示节点中的当前几何体。（此参数未来可能用于允许写入其他几何体。）

`name`

要在细节上设置的属性。

`value`

要为属性设置的值。

注意，在 VEX 程序中，只能将一种类型写入单个属性。即，不能混合写入浮点和整数。这可能会令人惊讶，因为像 `1` 这样的字面量会被视为整数写入，如果之前写入的是浮点数，则会被忽略。

`mode`

（可选）如果提供，此参数控制函数如何修改属性中的任何现有值。

| `"set"` | 用给定值覆盖属性。 |
| --- | --- |
| `"add"` | 将值添加到属性中。 |
| `"min"`, `"minimum"` | 将属性设置为其本身和值中的最小值。 |
| `"max"`, `"maximum"` | 将属性设置为其本身和值中的最大值。 |
| `"mult"`, `"multiply"` | 将属性乘以值。对于矩阵，这将执行矩阵乘法。对于向量，按分量相乘。 |
| `"toggle"` | 切换属性，与源值无关。适用于切换组成员资格。 |
| `"append"` | 对字符串、字典和数组属性有效。对于字符串和数组，将源值追加到原始值的末尾。对于字典，用源字典更新原始字典，替换任何匹配的键。 |
