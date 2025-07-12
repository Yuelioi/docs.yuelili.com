---
title: threedmodellayer
---
# ThreeDModelLayer 对象

`app.project.item(index).layer(index)`

:::note
该方法添加于 After Effects 24.4
:::

#### 描述

ThreeDModelLayer 对象表示合成中的 3D 模型图层。

:::info
ThreeDModelLayer 是 [AVLayer 对象](../avlayer) 的子类。在使用 ThreeDModelLayer 时，AVLayer 的所有方法和属性都可用。
:::

#### AE 属性

ThreeDModelLayer 从 [AVLayer 对象](../avlayer) 继承了以下属性和属性组：

- 标记
- 时间重映射
- 变换
 - 锚点
 - 位置
 - 缩放
 - 方向
 - X 旋转
 - Y 旋转
 - 旋转
 - 不透明度
- 图层样式
- 音频
 - 音频电平

#### 示例

如果项目中的第一个项目是 CompItem，并且该 CompItem 的第一个图层是 ThreeDModelLayer，则以下代码检查其类型。

```javascript
var modelLayer = app.project.item(1).layer(1);
if (modelLayer instanceof ThreeDModelLayer)
{
 // 执行某些操作
}
```
