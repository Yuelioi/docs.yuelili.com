---
title: attribdataid
order: 9
---
| 始于版本 | 17.0 |
| --- | --- |

`int [] attribdataid(<geometry>geometry, string attribclass, string attribute_name)`

返回属性对应的数据ID。数据ID可用于高级缓存形式。如果属性的数据ID与之前相同，则可以假定该属性包含的数据与之前一致。这使得加速结构仅在必要时才需要重建。

数组的长度和内容未定义，不应对其布局做任何假设。结果会因Houdini的每次运行而变化，因此只应使用精确相等性进行比较。

除了常规属性类别外，还支持额外的"meta"属性类别。它具有以下附加数据ID：

topology（拓扑结构）

顶点、点和图元的整体连接关系。如果任何点重新连接或添加了顶点，此ID将改变。

primitivelist（图元列表）

如果图元内容发生任何变化，此数据ID将改变。

detail（细节）

此数据ID跟踪整个几何体。如果未改变，则表示几何体未发生任何变化。

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取几何体。

或者，该参数可以是指定几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`attribclass`

可以是`"detail"`（或`"global"`）、`"point"`、`"prim"`或`"vertex"`之一。

也可以使用`"primgroup"`、`"pointgroup"`或`"vertexgroup"`来[从组中读取](../groups.html "在VEX中可以将图元/点/顶点组的内容作为属性读取")。

`attribute_name`

要读取的属性（或固有属性）名称。

返回值

表示属性数据ID的整数数组。
