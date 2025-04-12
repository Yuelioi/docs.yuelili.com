---
title: cwnoise
order: 8
---

`void  cwnoise(float position, int &seed, float &f1, float &f2)`

`void  cwnoise(float position, int &seed, float &f1, float &f2, float &f3, float &f4)`

生成一维噪声。

`void  cwnoise(float position, int &seed, float &f1, float &f2, int peiod)`

`void  cwnoise(float position, int &seed, float &f1, float &f2, float &f4, float &f4, int period)`

生成周期性一维噪声。

`void  cwnoise(float posx, float posy, int &seed, float &f1, float &f2)`

`void  cwnoise(float posx, float posy, int &seed, float &f1, float &f2, float &f3, float &f4)`

生成二维噪声。与其他形式类似，但使用浮点数对而非向量。

`void  cwnoise(float posx, float posy, int &seed, float &f1, float &f2, int periodx, int periody)`

`void  cwnoise(float posx, float posy, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody)`

生成周期性二维噪声。

`void  cwnoise(vector2 position, int &seed, float &f1, float &f2)`

`void  cwnoise(vector2 position, int &seed, float &f1, float &f2, float &f3, float &f4)`

生成二维噪声。

`void  cwnoise(vector2 position, int &seed, float &f1, float &f2, int periodx, int periody)`

`void  cwnoise(vector2 position, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody)`

生成周期性二维噪声。

`void  cwnoise(vector position, int &seed, float &f1, float &f2)`

`void  cwnoise(vector position, int &seed, float &f1, float &f2, float &f3, float &f4)`

生成三维噪声。

`void  cwnoise(vector position, int &seed, float &f1, float &f2, int periodx, int periody, int periodx)`

`void  cwnoise(vector position, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody, int periodz)`

生成周期性三维噪声。

`void  cwnoise(vector4 position, int &seed, float &f1, float &f2)`

`void  cwnoise(vector4 position, int &seed, float &f1, float &f2, float &f3, float &f4)`

生成四维噪声。

`void  cwnoise(vector4 position, int &seed, float &f1, float &f2, int periodx, int periody, int periodz, int periodw)`

`void  cwnoise(vector4 position, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody, int periodz, int periodw)`

生成周期性四维噪声。

`position`

采样噪声的位置。

`seed`

输出与最近种子点关联的整数值。该种子值几乎可以保证每个点都是唯一的（意味着附近的两个点不太可能具有相同的关联种子值）。

`f1`, `f2`, `f3`, `f4`

这些变量会被覆盖为按接近顺序排列的到最近种子点的距离。

您可以通过组合这些距离来生成噪声模式。生成的噪声本质上往往非常“蜂窝状”。事实上，一个很好的特点是，您可以通过表达式 `if (f2 - f1)` 来确定“单元”边界，如果空间中的点正在跨越两个单元之间的边界，则该表达式为真。

`period`, `periodx`, `periody`, `periodz`, `periodw`

如果包含周期参数，则该函数会生成重复（周期性）噪声。

Worley噪声将种子点随机散布在空间中（根据良好的泊松分布）。这些函数输出到采样位置最近的2个（或4个）种子点的距离。