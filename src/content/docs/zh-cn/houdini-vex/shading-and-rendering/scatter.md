---
title: scatter
order: 67
---
| 上下文环境 | [置换](../contexts/displace.html)  [雾效](../contexts/fog.html)  [光照](../contexts/light.html)  [阴影](../contexts/shadow.html)  [表面](../contexts/surface.html) |
| --- | --- |

`int  scatter(vector ipoint, vector inormal, vector idirection, vector idistribution, float time, float maxdist, vector &opoint, vector &onormal, vector &odirection)`

评估几何体中的单次散射事件。返回值为1表示散射成功。

`ipoint`

散射的入射点。

`inormal`

入射点处的表面法线（仅限表面）。用于确定散射平面的方向。

`idirection`

入射点处的主要散射方向。用于确定散射平面的方向。

`idistribution`

入射点处的初始散射分布。如果传入零向量，将使用随机散射分布。

`maxdist`

最大散射距离。

`opoint`

散射的出射点。

`onormal`

散射出射点处的法线（仅限表面）。

`odirection`

散射出射点处的出射方向（仅限表面）。

```vex
// 检测与场景的交点
vector hitP = 0;
vector hitN = 0;
int hit = trace(P, I, Time, "P", hitP, "N", hitN);

// 从交点处随机散射一段距离
vector idistribution = 0;
int sid = israytrace ? SID : newsampler();
vector s;
nextsample(sid, s.x, s.y, "mode", "nextpixel");
float maxdist = 2.0 * s.x;
vector opoint = 0;
vector onormal = 0;
vector odirection = 0;
hit = scatter(hitP, hitN, I, idistribution, Time, maxdist, opoint, onormal, odirection);

// 从散射出射点再次进行检测
hit = trace(opoint, odirection, Time, "P", hitP, "N", hitN);

```
