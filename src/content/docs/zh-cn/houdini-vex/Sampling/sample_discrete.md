---
title: sample_discrete
order: 15
---
`int  sample_discrete(int nvalues, float u)`

`int  sample_discrete(float weights[], float u)`

`nvalues`

返回的整数将在 `[0,nvalues-1]` 范围内均匀分布，
当 `u==0` 时返回 0，当 `u==1` 时返回 `nvalues-1`。
如果 `u` 超出 `[0,1)` 范围，输出将被限制在该范围内，
以减少 `u` 的舍入误差导致的问题。

`weights`

相对权重数组（总和不需要为 1），对应 `[0,len(weights)-1]` 范围内每个整数值的权重。

`u`

一个介于 0 和 1 之间的数。

根据 `u` 返回一个整数，要么是从 0 到 `nvalues-1` 均匀加权，
要么是基于 `weights` 数组从 0 到 `len(weights)-1` 加权返回。
给定 `[0,1)` 范围内均匀随机的 `u` 值，接受 `nvalues` 的版本
将返回 `[0,nvalues-1]` 范围内的均匀随机整数，而接受 `weights` 的版本
将返回 `[0,len(weights)-1]` 范围内的随机整数，其中
`i` 的概率为 `weights[i]/sum_of_weights`。
