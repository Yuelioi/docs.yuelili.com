---
title: setsamplestore
order: 69
---

| 上下文 | [着色](../contexts/shading.html) |
| --- | --- |

`int  setsamplestore(string channel, vector P, int value)`

`int  setsamplestore(string channel, vector P, float value)`

`int  setsamplestore(string channel, vector P, vector value)`

`int  setsamplestore(string channel, vector P, vector4 value)`

在指定点的命名通道中存储一个值。
成功时返回非零值，如果数据无法设置则返回0。

采样存储可以被视为内存中的点云，在点处存储着色数据。这使得数据可以跨着色器边界访问，与内部导出/导入系统不同。例如，
镜头着色器可以存储要传递给表面着色器的数据，由于着色管线的布局，这种操作不支持使用导出变量。

请注意，存储的样本只能在同一个渲染图块内访问。

## 示例

```vex
cvex displacedlens(
 // 输入
 float x = 0;
 float y = 0;
 float Time = 0;
 float dofx = 0;
 float dofy = 0;
 float aspect = 1;

 float displaceScale = 1.0;
 float displaceGain = 0.1;

 // 输出
 export vector P = 0;
 export vector I = 0;
)
{
 P = {x, y, 0};
 I = {1, 0, 0};

 vector displace = noise(P * displaceScale) * displaceGain;
 I += displace;

 // 在眼点 'P' 处存储位移
 int status = setsamplestore("displacedlens_d", P, displace);
}

surface mysurface()
{
 // 在眼点 'Eye' 处获取位移
 vector displace = 0;
 int status = getsamplestore("displacedlens_d", Eye, displace);

 //...
}

```
