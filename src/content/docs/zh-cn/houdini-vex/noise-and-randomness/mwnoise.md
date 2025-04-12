---
title: mwnoise
order: 18
---

`void  mwnoise(float position, int &seed, float &f1, float &f2)`

`void  mwnoise(float position, int &seed, float &f1, float &f2, float &f3, float &f4)`

生成一维噪声。

`void  mwnoise(float position, int &seed, float &f1, float &f2, int peiod)`

`void  mwnoise(float position, int &seed, float &f1, float &f2, float &f4, float &f4, int period)`

生成周期性一维噪声。

`void  mwnoise(float posx, float posy, int &seed, float &f1, float &f2)`

`void  mwnoise(float posx, float posy, int &seed, float &f1, float &f2, float &f3, float &f4)`

生成二维噪声。与其他形式类似，但使用浮点数对而非向量。

`void  mwnoise(float posx, float posy, int &seed, float &f1, float &f2, int periodx, int periody)`

`void  mwnoise(float posx, float posy, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody)`

生成周期性二维噪声。

`void  mwnoise(vector2 position, int &seed, float &f1, float &f2)`

`void  mwnoise(vector2 position, int &seed, float &f1, float &f2, float &f3, float &f4)`

生成二维噪声。

`void  mwnoise(vector2 position, int &seed, float &f1, float &f2, int periodx, int periody)`

`void  mwnoise(vector2 position, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody)`

生成周期性二维噪声。

`void  mwnoise(vector position, int &seed, float &f1, float &f2)`

`void  mwnoise(vector position, int &seed, float &f1, float &f2, float &f3, float &f4)`

生成三维噪声。

`void  mwnoise(vector position, int &seed, float &f1, float &f2, int periodx, int periody, int periodx)`

`void  mwnoise(vector position, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody, int periodz)`

生成周期性三维噪声。

`void  mwnoise(vector4 position, int &seed, float &f1, float &f2)`

`void  mwnoise(vector4 position, int &seed, float &f1, float &f2, float &f3, float &f4)`

生成四维噪声。

`void  mwnoise(vector4 position, int &seed, float &f1, float &f2, int periodx, int periody, int periodz, int periodw)`

`void  mwnoise(vector4 position, int &seed, float &f1, float &f2, float &f3, float &f4, int periodx, int periody, int periodz, int periodw)`

生成周期性四维噪声。

`position`

采样噪声的位置坐标。

`seed`

输出与最近种子点关联的整数值。该种子值几乎可以保证每个点都是唯一的（意味着附近两个点不太可能具有相同的关联种子值）。

`f1`, `f2`, `f3`, `f4`

这些变量会被按接近程度顺序覆盖为到最近种子点的距离。

您可以通过组合这些距离来生成噪声模式。生成的噪声本质上往往具有明显的"蜂窝"特征。事实上，一个优点是您可以使用表达式 `if (f2 - f1)` 来确定"单元格"边界，当空间中的点跨越两个单元格之间的边界时，该表达式将为真。

`period`, `periodx`, `periody`, `periodz`, `periodw`

如果包含周期参数，函数将生成重复（周期性）噪声。

Worley噪声会根据良好的泊松分布将种子点随机散布在空间中。这些函数输出采样位置到2个（或4个）最近种子点的距离。
