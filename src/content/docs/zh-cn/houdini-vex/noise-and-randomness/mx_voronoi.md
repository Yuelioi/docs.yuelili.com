---
title: mx_voronoi
order: 21
---
`void  mx_voronoi(vector2 position, float jitter, int metric, float &d1, float &d2, float &d3, vector2 &p1, vector2 &p2, vector2 &p3)`

`void  mx_voronoi(vector2 position, float jitter, int metric, float &d1, float &d2, vector2 &p1, vector2 &p2)`

`void  mx_voronoi(vector2 position, float jitter, int metric, float &d1, vector2 &p1)`

`void  mx_voronoi(vector2 position, float jitter, int metric, float &d1, float &d2, float &d3, vector2 &p1, vector2 &p2, vector2 &p3, int periodx, int periody)`

`void  mx_voronoi(vector2 position, float jitter, int metric, float &d1, float &d2, vector2 &p1, vector2 &p2, int periodx, int periody)`

`void  mx_voronoi(vector2 position, float jitter, int metric, float &d1, vector2 &p1, int periodx, int periody)`

生成3D噪声。

`void  mx_voronoi(vector position, float jitter, int metric, float &d1, float &d2, float &d3, vector &p1, vector &p2, vector &p3)`

`void  mx_voronoi(vector position, float jitter, int metric, float &d1, float &d2, vector &p1, vector &p2)`

`void  mx_voronoi(vector position, float jitter, int metric, float &d1, vector &p1)`

`void  mx_voronoi(vector position, float jitter, int metric, float &d1, float &d2, float &d3, vector &p1, vector &p2, vector &p3, int periodx, int periody, int periodz)`

`void  mx_voronoi(vector position, float jitter, int metric, float &d1, float &d2, vector &p1, vector &p2, int periodx, int periody, int periodz)`

`void  mx_voronoi(vector position, float jitter, int metric, float &d1, vector &p1, int periodx, int periody, int periodz)`

返回类似Worley噪声的Voronoi噪声距离值，但额外输出细胞位置。
标准MaterialX库中目前还没有类似的噪声函数。

`position`

采样噪声的位置坐标。

`jitter`

抖动值通常应限制在0到1之间。

`metric`

表示Worley噪声距离测量方式的整数值：

- 0 - 欧几里得距离
- 1 - 平方距离
- 2 - 曼哈顿距离
- 3 - 切比雪夫距离

`d1`, `d2`, `d3`

这些变量将被覆写为按接近程度排序的最近细胞点距离值。

`p1`, `p2`, `p3`

这些变量将被覆写为按输入位置接近程度排序的细胞位置坐标。
