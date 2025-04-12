---
title: smooth
order: 15
---
`float  smooth(float value1, float value2, float amount)`

`float  smooth(float value1, float value2, float amount, float rolloff)`

计算一个介于0和1之间的数值。当传入的amount小于等于value1时返回0，当amount大于等于value2时返回1。

如果amount介于value1和value2之间，则计算平滑（缓入/缓出）插值。如果指定了rolloff参数，混合的拐点将会发生偏移。

当rolloff大于1时，拐点会向右偏移；当rolloff小于1（且大于0）时，拐点会向左偏移。
