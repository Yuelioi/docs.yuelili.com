---
title: ninput
order: 30
---

| 上下文 | [cop2](../contexts/cop2.html) |
| --- | --- |

`matrix3  ninput(int opinput, int plane, int component, int array_index, int u, int v, int frame, ...)`

`matrix3  ninput(int opinput, int plane, int component, int array_index, float u, float v, int frame, ...)`

从目标像素及其八个相邻像素读取指定分量，并返回一个3×3矩阵。
注意：该函数每次只能读取一个分量（例如红色、绿色或蓝色）。
要采样完整颜色，您需要分别调用该函数三次，将`component`参数设置为0、1和2。

`opinput`

要读取的输入编号，从0开始。例如，第一个输入是0，第二个输入是1，依此类推。

`plane`

要读取的平面索引。

`component`

要读取的分量索引。例如，在RGB平面中，0表示红色，1表示绿色，2表示蓝色。

`array_index`

当平面包含数组值时使用。通常只需传入`0`。

`u`, `v`

如果传入浮点型UV坐标，则值被解释为单位值（0-1范围）。例如，`0.5, 0.5`表示图像中心。
如果传入整型UV坐标，则值以像素为单位，范围从`0,0`到`XRES-1, YRES-1`。
