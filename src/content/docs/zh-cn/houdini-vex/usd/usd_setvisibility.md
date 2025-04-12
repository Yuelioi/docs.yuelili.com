---
title: usd_setvisibility
order: 142
---
| 始于版本 | 19.0 |
| --- | --- |

`int  usd_setvisibility(int stagehandle, string primpath, int code)`

此函数用于设置图元可见性（显示/隐藏）或配置其继承父级可见性。

设置图元可见可能需要修改其祖先节点的可见状态，而设置不可见或配置继承父级可见性只需设置其属性即可。

注意：本函数与`usd_setvisible()`类似，后者等效于使用可见或不可见代码调用本函数。

`stagehandle`

要写入的舞台句柄。当前唯一有效值为`0`，表示节点中的当前舞台。（此参数未来可能用于支持写入其他舞台）

`primpath`

目标图元的路径。

`code`

可见性数值代码：

- 0 - 设置图元不可见
- 1 - 设置图元可见
- 2 - 标记图元继承父级可见性

注意：这些数值代码在"usd.h"头文件中定义为USD_VISIBILITY_INVISIBLE、USD_VISIBILITY_VISIBLE和USD_VISIBILITY_INHERIT。

返回值

成功时返回`stagehandle`值，失败时返回`-1`。

## 示例

```vex
#include <usd.h>
// 设置球体图元可见
usd_setvisibility(0, "/geo/sphere", USD_VISIBILITY_VISIBLE);

// 配置立方体图元继承父级可见性
usd_setvisibility(0, "/geo/cube", USD_VISIBILITY_INHERIT);

```
