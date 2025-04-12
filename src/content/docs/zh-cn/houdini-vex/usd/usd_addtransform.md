---
title: usd_addtransform
order: 13
---

| 始于版本 | 17.5 |
| --- | --- |

`int  usd_addtransform(int stagehandle, string primpath, string suffix, matrix xform)`

此函数对图元应用变换。它会创建并设置一个定义该变换的变换操作属性值，并将其追加到图元的变换顺序中。

`stagehandle`

要写入的舞台句柄。当前唯一有效值是`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`primpath`

图元的路径。

`suffix`

变换操作后缀。

USD图元通过一系列变换操作在空间中进行变换，这些操作的全名按顺序列在`xformOpOrder`属性中。全名是带命名空间的，编码了操作变换类型（如平移或旋转），还可以包含后缀。如果图元有多个相同类型的操作，则需要指定后缀以区分它们。此参数即用于指定此类后缀。

`xform`

编码空间变换的矩阵。

返回值

成功时返回`stagehandle`的值，失败时返回`-1`。

## 示例

```vex
// 对立方体进行变换
#include <math.h>
matrix xform = maketransform(XFORM_SRT, XFORM_XYZ, {1,2,3}, {3,45,60}, {0.5,0.25,2});
usd_addtransform(0, "/geo/cube", "my_xform", xform);

```

```vex
// 获取立方体的世界变换
matrix xform = usd_worldtransform(0, "/src/cube");

// 使圆锥体的空间位置与立方体匹配
// 首先需要清除圆锥体当前的变换
// 同时需要阻断从父级继承的变换
usd_cleartransformorder(0, "/dst/cone");
usd_settransformreset(0, "/dst/cone", 1);
usd_addtransform(0, "/dst/cone", "", xform);

```
