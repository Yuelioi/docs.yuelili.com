---
title: 示例
---
# Examples

:::note
本节中的许多示例基于 Dan Ebberts 提供的表达式。
:::

---

## 获取项目的 AEP 名称（仅限 AE 15.1+）

虽然没有直接访问 AEP 名称的方法，但你可以获取 AEP 的完整路径。

通过一些字符串操作，你可以从中推导出 AEP 名称：

```js
var aepName = thisProject.fullPath.split($.os.indexOf("Windows") > -1 ? "\\" : "/").pop();
```

如果你想在未保存的情况下显示 "Unsaved"，可以使用以下表达式：

```js
var aepName = thisProject.fullPath.split($.os.indexOf("Windows") > -1 ? "\\" : "/").pop();
aepName = aepName === "" ? "Unsaved" : aepName;
```

---

## 让图层绕圈旋转

你可以创建不依赖其他图层属性的表达式。例如，你可以让一个图层绕一个完美的圆圈旋转。

1. 选择一个图层，按 P 键在时间轴面板中显示其位置属性，然后按住 Alt 键（Windows）或 Option 键（Mac OS）点击属性名称左侧的秒表图标。
2. 在表达式字段中输入以下内容：

 ```js
 [(thisComp.width/2), (thisComp.height/2)] + [Math.sin(time)*50, -Math.cos(time)*50]
 ```

---

## 旋转时钟的指针

你可以使用拾取器将图层之间的旋转值链接起来，以动画时钟的指针——当时针从一个小时移动到下一个小时，分针会绕时钟表面旋转一整圈。如果你需要为两个指针图层设置每个关键帧，这种类型的动画会花费很长时间，但使用拾取器，你可以在几分钟内完成。

1. 导入或创建两个长而窄的纯色图层：一个时针和一个分针。
2. 将图层的锚点设置在图层的一端。
3. 移动图层，使锚点位于合成的中心。
4. 为时针设置旋转关键帧。
5. 选择分针的旋转属性，然后选择 `动画 > 添加表达式`。
6. 将拾取器拖动到时针的旋转属性。以下表达式将出现：

 ```js
 thisComp.layer("hour hand").rotation
 ```

7. 为了让分针的旋转速度是时针的 12 倍，在表达式末尾添加 `* 12`，如下所示：

 ```js
 thisComp.layer("hour hand").rotation * 12
 ```

---

## 将一个图层定位在另外两个图层之间

此示例表达式将一个图层定位并保持在另外两个图层之间的平衡距离。

1. 从三个图层开始。
2. 在时间轴面板中为前两个图层设置位置动画。
3. 选择第三个图层，按 P 键显示位置属性，然后按住 Alt 键（Windows）或 Option 键（Mac OS）点击属性名称左侧的秒表图标。
4. 在表达式字段中输入以下内容：

 ```js
 (thisComp.layer(1).position + thisComp.layer(2).position)/2
 ```

---

## 创建图像轨迹

此示例表达式指示一个图层位于时间轴面板中下一个更高图层的位置，但延迟指定的时间量（在本例中为 0.5 秒）。你可以为其他几何属性设置类似的表达式。

1. 从两个纯色图层开始，将它们缩放到大约合成大小的 30%。（参见纯色图层和纯色素材项。）
2. 为第一个图层设置位置动画。
3. 选择第二个图层，按 P 键显示位置属性，然后按住 Alt 键（Windows）或 Option 键（Mac OS）点击属性名称左侧的秒表图标。
4. 在表达式字段中输入以下内容：

 ```js
 thisComp.layer(thisLayer, -1).position.valueAtTime(time - .5)
 ```

5. 通过选择最后一个图层并按 Ctrl+D（Windows）或 Command+D（Mac OS）五次，复制该图层五次。

所有图层都遵循相同的路径，每个图层都比前一个延迟 0.5 秒。

:::note
Dan Ebberts 在他的 [MotionScript](http://www.motionscript.com/mastering-expressions/follow-the-leader.html) 上提供了更多创建图像轨迹的示例和技术。
:::

---

## 在两个图层之间创建凸起效果

此示例表达式将一个图层中的 Bulge 效果的 Bulge Center 参数与另一个图层的位置同步。例如，你可以创建一个效果，看起来像一个放大镜在一个图层上移动，放大镜下的内容随着镜头（即上方的图层）移动而凸起。此表达式使用 fromWorld 方法，无论你移动放大镜图层还是底层图层，表达式都能正常工作。你可以旋转或缩放底层图层，表达式仍然有效。

你也可以将此表达式与其他效果（如 Ripple）一起使用。

1. 从两个图层开始。将一个图层设置为放大镜或类似的对象，中间有一个洞，并将其命名为 Magnifier。（参见创建图层。）
2. 为放大镜图层设置位置动画。（参见运动路径。）
3. 将 Bulge 效果应用到另一个图层。（参见应用效果或动画预设。）
4. 在时间轴面板中选择 Bulge 效果的 Bulge Center 属性，然后选择 `动画 > 添加表达式`，或按住 Alt 键（Windows）或 Option 键（Mac OS）点击属性的秒表图标。
5. 选择默认的表达式文本并输入以下内容：

 ```js
 fromWorld(thisComp.layer("Magnifier").position)
 ```

---

## 根据与摄像机的距离淡出 3D 图层的不透明度

将以下表达式应用于 3D 图层的不透明度属性：

```js
startFade = 500; // 从摄像机 500 像素处开始淡出。
endFade = 1500; // 从摄像机 1500 像素处结束淡出。

try { // 检查是否有摄像机
C = thisComp.activeCamera.toWorld([0,0,0]);
} catch (err) { // 没有摄像机，因此假设为 50mm
w = thisComp.width * thisComp.pixelAspect;
z = (w/2)/Math.tan(degreesToRadians(19.799));
C = [0,0,-z];
}

P = toWorld(anchorPoint);
d = length(C,P);

linear(d,startFade,endFade,100,0)
```

淡出从距离摄像机 `500` 像素处开始，在距离摄像机 `1500` 像素处完成。使用线性插值方法将距离值映射到不透明度值。

---

## 如果 3D 图层背对摄像机则使其不可见

将以下表达式应用于 3D 图层的不透明度属性：

```js
if (toCompVec([0, 0, 1])[2] > 0 ) value else 0
```

:::note Dan Ebberts 在他的 [网站](http://www.adobe.com/go/learn_ae_motionscriptinvisiblelayer) 上解释了此表达式。 :::---

## 如果 3D 图层背对摄像机则水平翻转

将以下表达式应用于 3D 图层的缩放属性：

```js
if (toCompVec([0, 0, 1])[2] > 0 ) value else [-value[0], value[1], value[2]]
```

---

## 在每个图层标记处动画缩放

将以下表达式应用于缩放属性，使图层在每个标记处晃动：

```js
n = 0;
t = 0;

if (marker.numKeys > 0){
 n = marker.nearestKey(time).index;
 if (marker.key(n).time > time) n--;
}

if (n > 0) t = time - marker.key(n).time;

amp = 15;
freq = 5;
decay = 3.0;

angle = freq * 2 * Math.PI * t;
scaleFact = (100 + amp * Math.sin(angle) / Math.exp(decay * t)) / 100;
[value[0] * scaleFact, value[1] / scaleFact];
```

---

## 在特定时间开始或停止摆动

你可以用任何表达式替换此处使用的摆动表达式，以在特定时间开始和结束任何表达式的影响。

将以下表达式应用于属性，以在 2 秒时开始摆动：

```js
timeToStart = 2;
if (time > timeToStart) {
wiggle(3,25);
} else {
 value;
}
```

将以下表达式应用于属性，以在 4 秒时停止摆动：

```js
timeToStop = 4;

if (time > timeToStop) {
 value;
} else {
 wiggle(3,25);
}
```

将以下表达式应用于属性，以在 2 秒时开始摆动并在 4 秒时停止摆动：

```js
timeToStart = 2;
timeToStop = 4;

if ((time > timeToStart) && (time < timeToStop)) {
 wiggle(3,25);
} else {
 value;
}
```

---

## 将摄像机焦平面匹配到另一个图层

将以下表达式应用于摄像机图层的 Focus Distance 属性，使其焦点距离与名为 "target" 的图层的锚点距离匹配：

```js
target = thisComp.layer("target");
V1 = target.toWorld(target.anchorPoint) - toWorld([0,0,0]);
V2 = toWorldVec([0,0,1]);
dot(V1,V2);
```

:::
note Dan Ebberts 在他的 [网站](http://motionscript.com/design-guide/auto-focus.html) 上详细解释了这个表达式示例。
:::
