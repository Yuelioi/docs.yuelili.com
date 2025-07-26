---
title: vertexcurveparam
order: 39
---
`float  vertexcurveparam(<geometry>geometry, int linearindex)`

`<geometry>`

在节点上下文（如wrangle SOP）中运行时，该参数可以是表示输入编号的整数（从0开始）以读取几何体。

或者，该参数可以是指定要读取的几何文件（例如`.bgeo`）的字符串。在Houdini内部运行时，可以是`op:/path/to/sop`引用。

`linearindex`

顶点的线性索引

返回值

沿着基元边界的参数坐标。该基元假定为多边形。这是在单位空间中的值（有关参数空间的描述，请参见[primuv](/zh-cn/houdini-vex/attributes-and-intrinsics/primuv "在特定参数（uvw）位置插值属性的值")）。

对于开放多边形（即多边形曲线），返回值可以直接与[primuv](/zh-cn/houdini-vex/attributes-and-intrinsics/primuv "在特定参数（uvw）位置插值属性的值")一起使用。其范围是`[0,1]`。

对于闭合多边形，该值的范围是`[0, (numvtx-1)/numvtx]`，因此没有值为1的顶点。该值不能直接与[primuv](/zh-cn/houdini-vex/attributes-and-intrinsics/primuv "在特定参数（uvw）位置插值属性的值")一起使用，但在需要多边形边界归一化值的场合可能有用。

## 示例

以下代码大致等效：

```vex
int closed = primintrinsic(0, "closed", @primnum);
float u = float(vertexprimindex(opname, @vtxnum)) / (closed ? @numvtx : @numvtx-1);

```

使用当前点在曲线上的位置查找渐变：

```vex
// 查找当前顶点的曲线参数，并用它来查找渐变参数。
// 注意，@vtxnum在迭代点时也适用。
float u = vertexcurveparam(0, @vtxnum);
// 转换为单位长度空间，以校正沿曲线不均匀分布的点
u = primuvconvert(0, u, @primnum, PRIMUV_UNIT_TO_UNITLEN);
@width = chramp("width", u);

```

在另一条曲线的等效位置查找属性。这会校正两条曲线上不均匀分布的点。

```vex
// 注意，@vtxnum在迭代点时也适用。
float u = vertexcurveparam(0, @vtxnum);
// 转换为单位长度空间，以校正沿曲线不均匀分布的点
u = primuvconvert(0, u, @primnum, PRIMUV_UNIT_TO_UNITLEN);

// 在另一条曲线上转换回单位空间。我们使用第二个输入中的等效曲线。
int otherinput = 1;
int otherprim = @primnum;
u = primuvconvert(otherinput, u, otherprim, PRIMUV_UNITLEN_TO_UNIT);

// 使用正确的u坐标查找值。
@P = primuv(otherinput, "P", otherprim, u);

```
