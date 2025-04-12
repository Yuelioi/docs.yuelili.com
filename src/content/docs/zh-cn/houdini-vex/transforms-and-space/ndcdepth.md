---
title: ndcdepth
order: 8
---
| 始于版本 | 18.0 |
| --- | --- |

`float  ndcdepth(float z)`

当Karma将位置坐标转换为NDC空间时，z深度值会根据渲染相机投影和剪裁平面进行转换。该函数可将NDC空间的z深度值转换回相机空间中的z轴距离值。

函数会返回传入的参数。

## 示例

```vex
vector ndc = ptransform("space:ndc", P);
float pz_camera = ndcspace(ndc.z);

// 该值也可以通过以下方式计算
float pz_camera = -ptransform("space:camera", P).z;

```

（说明：翻译时保持了所有代码块、函数名、变量名不变，仅对说明性文字进行了中文化处理。技术术语如"NDC space"保留英文形式，因其在中文技术文档中通常不翻译。"Karma"作为渲染器名称保留原样。）
