---
title: vnoise
order: 38
---
`void  vnoise(float position, float jitter, int &seed, float &f1, float &f2, float &pos1, float &pos2)`

生成一维噪声。

`void  vnoise(float position, float jitter, int &seed, float &f1, float &f2, float &pos1, float &pos2, int period)`

生成周期性一维噪声。

`void  vnoise(float posx, float posy, float jittx, float jitty, int &seed, float &f1, float &f2, float &pos1x, float &pos1y, float &pos2x, float &pos2y)`

生成二维噪声。与其他形式类似，但使用浮点数对而非向量。

`void  vnoise(float posx, float posy, float jittx, float jitty, int &seed, float &f1, float &f2, float &pos1x, float &pos1y, float &pos2x, float &pos2, int periodx, int periody)`

生成周期性二维噪声。

`void  vnoise(vector position, vector jitter, int &seed, float &f1, float &f2, vector &pos1, vector &pos2)`

生成三维噪声。

`void  vnoise(vector position, vector jitter, int &seed, float &f1, float &f2, vector &pos1, vector &pos2, int periodx, int periody, int periodz)`

`void  vnoise(vector position, vector jitter, int &seed, float &f1, float &f2, vector &pos1, vector &pos2, vector period)`

生成周期性三维噪声。

`void  vnoise(vector4 position, vector4 jitter, int &seed, float &f1, float &f2, vector4 &pos1, vector4 &pos2)`

生成四维噪声。

`void  vnoise(vector4 position, vector4 jitter, int &seed, float &f1, float &f2, vector4 &pos1, vector4 &pos2, int periodx, int periody, int periodz, int periodw)`

`void  vnoise(vector4 position, vector4 jitter, int &seed, float &f1, float &f2, vector4 &pos1, vector4 &pos2, vector4 period)`

生成周期性四维噪声。

`position`

采样噪声的位置坐标。

`jitter`

各轴上添加的随机扰动强度。

`seed`

输出与最近种子点关联的整数值。该种子值几乎能保证每个点都具有唯一性（即相邻两点不太可能具有相同种子值）。

`pos1`, `pos2`

这两个变量会被覆写为按距离排序的两个最近种子点的位置坐标。

`f1`, `f2`

这两个变量会被覆写为按距离排序的到最近种子点的距离值。

可通过组合这些距离值来生成噪声图案。生成的噪声本质上具有明显的"细胞"特征。特别地，您可以使用表达式 `if (f2 - f1)` 来确定"细胞"边界，当空间中的点跨越两个细胞边界时该表达式为真。

`period`, `periodx`, `periody`, `periodz`, `periodw`

当包含周期参数时，函数会生成重复（周期性）噪声。

Voronoi噪声与Worley噪声函数([wnoise](/zh-cn/houdini-vex/noise-and-randomness/wnoise "生成Worley（细胞）噪声。"))的结果几乎相同。但本函数提供了扰动控制（即空间中点的随机散布程度），并返回两个最近种子点的实际位置，而[wnoise](/zh-cn/houdini-vex/noise-and-randomness/wnoise "生成Worley（细胞）噪声。")仅返回到最近种子点的距离。

虽然本函数比[wnoise](/zh-cn/houdini-vex/noise-and-randomness/wnoise "生成Worley（细胞）噪声。")稍耗资源，但由于返回实际点位置，可以克服Worley噪声的一些伪影。例如，要获得沿细胞边界的均匀边界：

```vex
if (f2 - f1 < tolerance * (distance(p1, p2) / (f1 + f2)) ...
```

这将根据空间中两个随机点之间的距离"标准化"边界宽度。

vnoise()也有周期性形式。

## 示例

```vex
// 一维噪声
float fp0, fp1, p1x, p1y, p2x, p2y;
vector vp0, vp1;
vnoise(s*10, 0.8, seed, f1, f2, fp0, fp1);
vnoise(s*10, t*10, 0.8, 0.8, seed, f1, f2, p1x, p1y, p2x, p2y);
vnoise(P*10, {.8, .8, .8}, seed, f1, f2, vp0, vp1);
```
