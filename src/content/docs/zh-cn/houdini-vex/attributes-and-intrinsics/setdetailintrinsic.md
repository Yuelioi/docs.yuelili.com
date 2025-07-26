---
title: setdetailintrinsic
order: 66
---
| 始于版本 | 18.0 |
| --- | --- |

`int  setdetailintrinsic(int geohandle, string name, <type>value, string mode="set")`

`int  setdetailintrinsic(int geohandle, string name, <type>value[], string mode="set")`

尽管名称如此，但某些细节上的"固有"属性是可写的。

`geohandle`

要写入的几何体句柄。目前唯一有效的值是`0`或[geoself](/zh-cn/houdini-vex/geometry/geoself "返回当前几何体的句柄")，表示节点中的当前几何体。(此参数将来可能用于支持写入其他几何体)

`name`

要设置的固有属性名称。

`mode`

(可选)如果指定，该参数控制函数如何修改属性中的现有值。

| `"set"` | 用给定值覆盖属性 |
| --- | --- |
| `"add"` | 将值添加到属性中 |
| `"min"`, `"minimum"` | 将属性设置为自身和给定值中的较小值 |
| `"max"`, `"maximum"` | 将属性设置为自身和给定值中的较大值 |
| `"mult"`, `"multiply"` | 将属性乘以给定值。对于矩阵，将执行矩阵乘法；对于向量，按分量相乘 |
| `"toggle"` | 切换属性值，与源值无关。适用于切换组成员资格 |
| `"append"` | 适用于字符串、字典和数组属性。对于字符串和数组，将源值追加到原始值末尾；对于字典，用源字典更新原始字典，替换任何匹配的键 |
