---
title: sensor_panorama_create
order: 1
---
`int  sensor_panorama_create(float time, vector pos, int size, float near, float far, string candidateobj, string includeobj, string excludeobj, int uselit)`

此函数将使用GL渲染器渲染周围环境，并提供一个用于查询结果的句柄。

注意
由于需要渲染场景，此功能仅在Houdini的交互会话中有效。

`time`

执行渲染的时间点。

`pos`

执行渲染的世界空间坐标位置。

`size`

执行渲染的分辨率。

`near`

近平面限制。

`far`

远平面限制。

`candidateobj`

表示当显示设置启用时会被显示的对象的捆绑包、组或表达式。

`includeobj`

表示始终会被显示的对象的捆绑包、组或表达式。

`excludeobj`

表示永远不会被显示的对象的捆绑包、组或表达式。

`uselit`

通常出于AI目的，您可能不希望有任何光照，因为您使用颜色作为区分角色的关键。
但是，如果您想显示生物看到的内容，光照会使视觉效果更准确。
