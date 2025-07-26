---
title: setattrib
order: 63
---
如果提前知道属性类别，使用[setdetailattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/setdetailattrib "设置几何体中的细节属性")、[setprimattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/setprimattrib "设置几何体中的基元属性")、[setpointattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/setpointattrib "设置几何体中的点属性")或[setvertexattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/setvertexattrib "设置几何体中的顶点属性")可能更快。

`int  setattrib(int geohandle, string attribclass, string attribute_name, int element_num, int vertex_num, <type>value, string mode="set")`

`int  setattrib(int geohandle, string attribclass, string attribute_name, int element_num, int vertex_num, <type>value[], string mode="set")`

成功时返回`geohandle`的值，失败时返回`-1`。

注意
如果属性不存在，该函数会**创建属性**，默认值为零、空字符串或空数组。
如果要控制数值属性的默认值，请在设置属性前使用[addattrib](/zh-cn/houdini-vex/attributes-and-intrinsics/addattrib "向几何体添加属性")。

如果属性尚不存在，对于具有[标准名称](/zh-cn/houdini-vex/snippets.html#known)（如`Cd`和`orient`）的属性，其类型信息会自动设置。
如果要控制数值属性的类型信息，请在设置属性前使用[setattribtypeinfo](/zh-cn/houdini-vex/attributes-and-intrinsics/setattribtypeinfo "设置几何体中属性的含义")。

`geohandle`

要写入的几何体的句柄。目前唯一有效的值是`0`或[geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄")，表示节点中的当前几何体。（该参数未来可能用于允许写入其他几何体。）

`attribclass`

可以是`"detail"`（或`"global"`）、`"point"`、`"prim"`或`"vertex"`之一。

也可以使用`"primgroup"`、`"pointgroup"`或`"vertexgroup"`来[从组中读取](../groups.html "在VEX中，可以像读取属性一样读取基元/点/顶点组的内容")。

`attribute_name`

要更改的属性名称。

`element_num`

要更改属性的点或基元编号。

对于细节属性，将其设置为`0`（该参数对细节属性无效）。

对于顶点属性，将其设置为包含该顶点的基元的基元编号。

`vertex_num`

对于顶点属性，这是`element_num`指定的基元上的顶点编号。

要使用线性顶点索引，将`element_num`设置为`-1`，并在此处使用线性顶点索引。

对于其他细节、基元或点属性，将其设置为`0`（该参数在这些情况下无效）。

`value`

要设置的值。如果此参数的类型与属性类型不兼容，设置将失败，函数将返回`-1`。

注意，在VEX程序中，只能向单个属性写入一种类型。例如，不能混合写入浮点数和整数。这可能令人惊讶，因为像`1`这样的字面量将是整数写入，因此如果之前写入的是浮点数，则会被忽略。

`mode`

（可选）如果给定，该参数控制函数如何修改属性中的现有值。

| `"set"` | 用给定值覆盖属性。 |
| --- | --- |
| `"add"` | 将值添加到属性中。 |
| `"min"`, `"minimum"` | 将属性设置为其本身和值中的最小值。 |
| `"max"`, `"maximum"` | 将属性设置为其本身和值中的最大值。 |
| `"mult"`, `"multiply"` | 将属性乘以值。对于矩阵，这将进行矩阵乘法。对于向量，按分量相乘。 |
| `"toggle"` | 切换属性，与源值无关。适用于切换组成员资格。 |
| `"append"` | 对字符串、字典和数组属性有效。对于字符串和数组，将源值追加到原始值的末尾。对于字典，用源字典更新原始字典，替换任何匹配的键。 |
