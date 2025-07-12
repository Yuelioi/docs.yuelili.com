---
title: metamarch
order: 2
---
`int  metamarch(int &index, string filename, vector &p0, vector &p1, float displace_bound)`

接收由p0和p1定义的射线，并将其划分为零个或多个子区间，每个子区间都与文件名指定的元球簇相交。该区间可能实际上不与任何元球相交，但会为元球簇提供相当紧密的边界。

这使得光线步进算法能够"跳过"无趣区域，只专注于步进可能发现元球的区域。

首次调用该函数时，使用index=-1并将p0和p1设置为射线的端点。如果函数找到一个区间，则返回1并将p0和p1设置为该区间的端点，同时递增index。否则返回0且不修改任何参数。

因此，您可以重复调用该函数，通过不断更新index、p0和p1参数来在感兴趣的区域进行光线步进，跳过空白区域：

```vex
int index;
vector p0, p1;
// 初始化输入值
index = -1;
p0 = Eye; p1 = P;
result = 0;
while (metamarch(index, metaball_file, p0, p1, displace_bound))
{
result += ray_march(metaball_file, p0, p1);
}

```
