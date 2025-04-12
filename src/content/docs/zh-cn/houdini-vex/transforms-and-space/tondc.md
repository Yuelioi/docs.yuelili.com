---
title: tondc
order: 31
---
`vector  toNDC(vector point)`

`vector  toNDC(string camera_name, vector point)`

将位置转换为相机的标准化设备坐标。
该点应位于对象的局部空间中（即不在相机空间中）。

toNDC() 会返回超出相机或灯光视野范围外的0-1范围之外的值。相机右侧的值大于1，左侧的值小于0。同理适用于相机或灯光上方和下方的范围。

将位置转换为标准化设备坐标。该空间仅
在[着色上下文](../contexts/shading_contexts.html)中有明确定义。
