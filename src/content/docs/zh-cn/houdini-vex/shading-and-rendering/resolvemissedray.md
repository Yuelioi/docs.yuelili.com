---
title: resolvemissedray
order: 66
---

| 上下文 | [着色](../contexts/shading.html) |
| --- | --- |

`vector  resolvemissedray(vector dir, float time, int mask, ...)`

返回场景中射出光线的背景环境颜色。当未指定环境或背景颜色时，将使用场景中设置为"光线追踪背景"模式的环境光来查找环境颜色。mask参数以整数掩码形式表示正在解析的光线类型。

使用默认背景(环境光)处理反射光线的示例：

```vex
resolvemissedray(I, 0.0, PBR_REFLECT_MASK);
```

自定义背景的示例：

```vex
resolvemissedray(I, 0.0, PBR_ALL_MASK, "environment", "Mandril.rat", "envtint", {1,2,1});
resolvemissedray(I, 0.0, PBR_ALL_MASK, "background", {1,1,1});
```
