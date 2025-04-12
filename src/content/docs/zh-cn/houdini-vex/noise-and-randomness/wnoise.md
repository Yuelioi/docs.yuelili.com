---
title: wnoise
order: 39
---
`void  wnoise(float position, int &seed, float &f1, float &f2)`

`void  wnoise(float position, int &seed, float &f1, float &f2, float &f3, float &f4)`

生成一维噪声。

`void  wnoise(float position, int &seed, float &f1, float &f2, int peiod)`

`void  wnoise(float position, int &seed, float &f1, float &f2, float &f4, float &f4, int period)`

生成周期性一维噪声。

`void  wnoise(float posx, float posy, int &seed, float &f1, float &f2)`

`void  wnoise(float posx, float posy, int &seed, float &f1, float &f2, float &f3, float &f4)`

生成二维噪声。与其他形式类似，但使用浮点数对而非向量。

`void  wnoise(float posx, float posy, int &seed, float &f1, float &f2, int periodx, int periody)`

`void  wnoise(float posx, float posy, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody)`

生成周期性二维噪声。

`void  wnoise(vector2 position, int &seed, float &f1, float &f2)`

`void  wnoise(vector2 position, int &seed, float &f1, float &f2, float &f3, float &f4)`

生成二维噪声。

`void  wnoise(vector2 position, int &seed, float &f1, float &f2, int periodx, int periody)`

`void  wnoise(vector2 position, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody)`

生成周期性二维噪声。

`void  wnoise(vector position, int &seed, float &f1, float &f2)`

`void  wnoise(vector position, int &seed, float &f1, float &f2, float &f3, float &f4)`

生成三维噪声。

`void  wnoise(vector position, int &seed, float &f1, float &f2, int periodx, int periody, int periodx)`

`void  wnoise(vector position, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody, int periodz)`

生成周期性三维噪声。

`void  wnoise(vector4 position, int &seed, float &f1, float &f2)`

`void  wnoise(vector4 position, int &seed, float &f1, float &f2, float &f3, float &f4)`

生成四维噪声。

`void  wnoise(vector4 position, int &seed, float &f1, float &f2, int periodx, int periody, int periodz, int periodw)`

`void  wnoise(vector4 position, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody, int periodz, int periodw)`

生成周期性四维噪声。

`position`

采样噪声的位置坐标。

`seed`

输出与最近种子点关联的整数值。该种子值几乎保证每个点都是唯一的（意味着相邻两个点不太可能具有相同的种子值）。

`f1`, `f2`, `f3`, `f4`

这些变量会被覆写为到最近种子点的距离值，按接近程度排序。

您可以组合这些距离值来生成噪声模式。生成的噪声本质上具有明显的"细胞"特征。实际上，一个有用的特性是可以通过表达式 `if (f2 - f1)` 来确定"细胞"边界，当空间中的点跨越两个细胞边界时该表达式为真。

`period`, `periodx`, `periody`, `periodz`, `periodw`

如果包含周期参数，函数将生成重复（周期性）噪声。

Worley噪声会根据泊松分布将种子点随机散布在空间中。这些函数会输出采样位置到最近2个（或4个）种子点的距离值。
