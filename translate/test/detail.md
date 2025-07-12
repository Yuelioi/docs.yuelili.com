# pragma opname 和 #pragma oplabel

## opname

`#pragma opname "文本"`

指定此运算符类型的内部运算符名称。默认情况下编译器使用源文件名。vcc的`-n`[命令行选项](vcc.html#otl)会覆盖此编译指令。

`#pragma oplabel "文本"`

为此运算符类型指定描述性名称。默认情况下编译器使用内部运算符名称。vcc的`-N`[命令行选项](vcc.html#otl)会覆盖此编译指令。

```vex
#pragma opname "myshop"
#pragma oplabel "我的新商店"

```

# pragma opscript

## opscript

`#pragma opscript "文本"`

如果此运算符类型是可以被非mantra渲染器使用的着色器，此编译指令允许您设置渲染器应查找的着色器文件名。如果使用此编译指令，运算符类型名称不需要匹配着色器文件名。vcc的`-S`[命令行选项](vcc.html#otl)会覆盖此编译指令。

```vex
#pragma opscript "rman_myshader"

```

# pragma parmhelp 参数名 "文本"

## pragma-parmhelp-参数名-文本

`#pragma parmhelp 参数名 "文本"`

设置当用户悬停在参数名上时显示的工具提示。

```vex
#pragma parmhelp amp "增加此值以添加更多噪波。"
displacement bumpy(float amp=0) {
...
}

```

# pragma parmtag

## pragma-parmtag

`#pragma parmtag 参数名 标记 值`

运算符中定义的每个参数都有一组相关联的标记/值对。此编译指令为参数添加标记/值对。

可用标记如下：

autoscope

由0和1组成的*字符串*(例如"1011")，对应参数的每个分量。1表示当节点被选中时参数会自动添加到通道列表。

如果字符串中的字符数少于分量数，最后一个字符将扩展到剩余分量。这允许您指定"1"来自动范围所有分量，"0"表示不自动范围任何分量。

如果未为参数定义此标记，Houdini会猜测参数是否应被范围化。

editor

对于字符串参数，可用于显示多行编辑器而非单行输入字段。指定"1"启用。

editorlines

如果显示多行编辑器，可用于指定显示多少行文本。默认值为`10`。

opfilter

对于引用对象路径的参数，提供OP选择器中显示的OP类型过滤器。如果设置此标记，还应设置oprelative标记。

此标记也可由`[#pragma hint oppath|/vex/pragmas]`编译指令设置，但使用不同格式。

可能值包括：

!!OBJ!!

仅显示对象

!!OBJ/GEOMETRY!!

仅显示几何对象

!!OBJ/LIGHT!!

仅显示灯光对象

!!OBJ/CAMERA!!

仅显示相机对象(灯光被视为相机)

!!OBJ/BONE!!

仅显示骨骼对象

!!OBJ/FORCE!!

仅显示力对象

!!SOP!!

仅显示SOPs

!!CHOP!!

仅显示CHOPs

!!COP2!!

仅显示COPs

!!VOP!!

仅显示VOPs

!!ROP!!

仅显示输出驱动(ROPs)

!!DOP!!

仅显示DOPs

!!SHOP!!

仅显示SHOPs

!!SHOP/ATMOSPHERE!!

仅显示大气着色器SHOPs

!!SHOP/BACKGROUND!!

仅显示背景着色器SHOPs

!!SHOP/CONTOUR!!

仅显示轮廓着色器SHOPs

!!SHOP/CONTOUR_CONTRAST!!

仅显示轮廓对比着色器SHOPs

!!SHOP/CONTOUR_STORE!!

仅显示轮廓存储着色器SHOPs

!!SHOP/DISPLACEMENT!!

仅显示位移着色器SHOPs

!!SHOP/EMITTER!!

仅显示发射器着色器SHOPs

!!SHOP/GEOMETRY!!

仅显示几何着色器SHOPs

!!SHOP/IMAGE3D!!

仅显示3D图像着色器SHOPs

!!SHOP/LENS!!

仅显示镜头着色器SHOPs

!!SHOP/LIGHT!!

仅显示灯光着色器SHOPs

!!SHOP/LIGHT_SHADOW!!

仅显示灯光阴影着色器SHOPs

!!SHOP/OUTPUT!!

仅显示输出着色器SHOPs

!!SHOP/PHOTON!!

仅显示光子着色器SHOPs

!!SHOP/PHOTON_VOLUME!!

仅显示光子体积着色器SHOPs

!!SHOP/SURFACE!!

仅显示表面着色器SHOPs

!!SHOP/SURFACE_SHADOW!!

仅显示表面阴影着色器SHOPs

oprelative

路径解析方式。通常此标记值为"."，使路径相对于当前运算符解析。但在引用对象时，可将标记设置为"/obj"。参见下方示例。

opexpand

在SHOP中，使"oplist"参数扩展为完整路径名。如果选择捆绑或模式，在发送到渲染器前会扩展模式。参见下方示例。

opfullpath

与opexpand标记一起使用时，使对象路径名完全限定而非相对于oprelative标记的值。参见下方示例。

rampshowcontrolsdefault

允许您自动隐藏渐变参数控件，使用值`1`或`0`。

script_callback

与参数关联的回调脚本。参见[#pragma callback](pragmas.html#callback)。

script_ritype

生成RIB流时将参数映射到适当的renderman类型规范时使用。值应为有效的renderman类型(例如"uniform color")。

script_unquoted

在VOP定义中，指示字符串参数应以未引用形式使用。这允许菜单中的字符串直接放入代码块(参见trig VOP)。

sop_input

SOP内部使用，确定在构建点/基元组菜单时搜索组的位置。

```vex
#pragma parmtag lightmask opfilter "!!OBJ/LIGHT!!"
#pragma parmtag lightmask oprelative "/obj"
#pragma parmtag lightmask opexpand 1
#pragma parmtag reflectmask opfilter "!!OBJ/GEOMETRY!!"
#pragma parmtag reflectmask opexpand 1
#pragma parmtag reflectmask opfullpath 1

```

# pragma ramp

## ramp

创建[渐变参数](../network/ramps.html "解释处理渐变参数的技巧。")并连接到着色器函数参数。

- `#pragma ramp_rgb 渐变参数 基础参数 键参数 值参数`
- `#pragma ramp_flt 渐变参数 基础参数 键参数 值参数`

```vex
#pragma ramp_rgb color color_the_basis_strings color_the_key_positions color_the_key_values

surface
sky(
 string color_the_basis_strings[] = { "linear", "linear" };
 float color_the_key_positions[] = { 0, 1};
 vector color_the_key_values[] = { {0,0,0}, {0,0,1} };
) { ... }

```

与大多数其他设置着色器参数UI的编译指令不同，渐变编译指令在Houdini中创建新的UI元素。

渐变参数

Houdini UI中渐变参数的名称。不能与着色器上定义的任何参数(或其他渐变)冲突。

基础参数

包含字符串数组的参数。这些字符串确定每个键的基础值(即"linear"、"constant")。如果要指定常量基础，则基础参数参数可以给定为空字符串(即"")。但UI可能不一定反映这一事实。

键参数

包含浮点数数组的参数。如果样条是均匀的(即没有键)，键参数参数可以给定为空字符串(即"")。但UI可能不一定反映这一事实。

值参数

包含浮点数数组或向量数组的参数。与基础或键参数不同，这是强制性的。

Houdini渐变参数目前不支持默认值，因此给定的初始值不会传递到UI。

虽然值不传递，但值参数中给定的键数将用于设置渐变中的初始键数。

参见[渐变参数](../network/ramps.html "解释处理渐变参数的技巧。")获取更多信息。

# pragma range

## pragma-range

`#pragma range 参数名[!] 最小值 最大值[!]`

定义参数的理想范围。如果在值后附加`!`，参数值将在该范围处被钳制。UI也使用此信息设置滑块范围。

```vex
#pragma range seed 0 10
#pragma range roughness 0.001! 1!
#pragma range gamma 0.001! 10

```

# pragma rendermask

## pragma-rendermask

`#pragma rendermask (VMantra | RIB | OGL)`

此编译指令仅对SHOP对话框生成有用。每个SHOP都有一个掩码，定义哪些渲染器可以使用该SHOP。可能有类似的着色器用RenderMan着色语言和VEX(或其他着色语言)编写。在这种情况下，可以指定rendermask以包含不仅仅是VMantra。

rendermask参数与为渲染器生成场景描述的代码紧密绑定。因此，渲染器名称非常具体。支持SHOP的渲染器有...

RIB

为RenderMan兼容渲染器生成RIB。

VMantra

使用VEX进行着色的mantra版本。

OGL

OpenGL渲染。这是一个特殊渲染器，会自动添加到大多数渲染掩码中。目前无法阻止这一点。

# pragma optable

## pragma-optable

`#pragma optable vop`

此编译指令可用于指示生成哪种运算符类型。目前唯一支持的选项是`vop`，表示创建VOP运算符。

使用此选项生成的VOP otl具有非常特定的结构：

- VOP上的输入从非导出着色器参数生成
- VOP上的输出从导出着色器参数生成
- VOP上的参数为所有非导出着色器参数创建，UI生成方式与SHOP运算符相同
- 外部代码使用[import](shadercalls.html)指令从外部文件导入着色器函数
- 内部代码使用[shader call](shadercalls.html)语法调用此着色器

由于着色器的实现实际上不存储在生成的VOP中，必须通过外部.vfl或.vex文件访问才能使VOP正常工作。将着色器的.vfl或编译后的.vex文件放在VEX搜索路径可访问的位置将满足此要求。

# pragma rename

## pragma-rename

`#pragma rename 旧名称 新名称`

为运算符参数指定与着色器接口中使用的名称不同的名称。此指令应出现在引用该参数的所有其他`#pragmas`之后。

当使用`#pragma optable vop`时，这可以允许VOP输入或输出使用与VEX全局变量相同的名称，因为这种名称冲突在VOP中有效但在VEX中无效。

如何为参数创建菜单

## 如何为参数创建菜单

您可以定义choice编译指令来为参数创建菜单UI。

通过以下方式之一构建参数的列表：

- 为参数使用多个choice编译指令创建菜单项(`choice`、`choicescript`、`choicereplace`、`choicetoggle`)。
- 为参数使用一个choicescript编译指令创建生成菜单项的脚本(`choicescript`、`choicereplacescript`、`choicetogglescript`)。
每当Houdini需要生成菜单条目时就会运行此脚本(即生成的值不会被缓存)，因此此脚本应尽可能高效。脚本的输出必须是一系列值/标签对，其含义与choice编译指令中的值和标签字段相同。

普通`choice`编译指令创建仅允许用户从菜单中选择值的UI。`choicereplace`编译指令创建带有菜单但也允许用户手动输入不同值的UI。`choicetoggle`编译指令允许用户输入，但也提供菜单，选择菜单项会将其添加到输入或从输入中移除。

`#pragma choice 参数名 "值" "标签"`

为参数名添加菜单项。显示互斥选择的菜单。

`#pragma choicescript 参数名 语言 "脚本行"`

定义将为参数名生成菜单项的脚本。语言可以是`python`或`hscript`。显示互斥选择的菜单。

`#pragma choicereplace 参数名 "值" "标签"`

为参数名添加菜单项。
显示用户可以从菜单中选择项目或输入自己的UI。

`#pragma choicereplacescript 参数名 "脚本行"`

定义将为参数名生成菜单项的脚本行。
显示用户可以从菜单中选择项目或输入自己的UI。

`#pragma choicetoggle 参数名 "值" "标签"`

为参数名添加菜单项。
显示可以添加/移除项目到/从用户输入的菜单选择。

`#pragma choicetogglescript 参数名 "脚本行"`

定义将为参数名生成菜单项的脚本行。
显示可以添加/移除项目到/从用户输入的菜单选择。

```vex
#pragma choice operation "over" "A覆盖B合成"
#pragma choice operation "under" "A在B下合成"
#pragma choice operation "add" "A和B相加"
#pragma choice operation "sub" "A减去B"
cop texture(string operation="over")
{
if (operation == "over") ... // 纹理坐标
if (operation == "under") ... // 参数坐标
if (operation == "add") ... // 正交
if (operation == "sub") ... // 极坐标
}

```

这将为参数"operation"定义菜单。菜单将包含4个条目。字符串参数的值将是"over"、"under"、"add"或"sub"之一。但用户将看到操作类型的更有意义的标签。

```vex
#pragma choice operation "0" "使用纹理坐标"
#pragma choice operation "1" "使用参数坐标"
#pragma choice operation "2" "正交投影"
#pragma choice operation "3" "极坐标投影"
sop texture(int operation=0)
{
if (operation == 0) ... // 纹理坐标
if (operation == 1) ... // 参数坐标
if (operation == 2) ... // 正交
if (operation == 3) ... // 极坐标
}

```

注意
您可以使用除choicereplace和choicetoggle之外的编译指令为整数参数创建菜单，但菜单项会忽略标签，仅从0开始编号选择。choicereplace和choicetoggle编译指令仅对字符串参数有效。

`#pragma ophidewhen 1`

将此编译指令添加到VOP的外部代码中，使VOP输入可见性遵循由hidewhen条件定义的参数可见性。输入必须具有匹配名称的参数。

`#pragma opextraparm 类型 名称格式 参数名0 参数名1 ...`

将此编译指令添加到VOP的外部代码中以定义外部参数绑定。
类型是vex变量类型。
名称格式是不含空格的简单格式化字符串，可以包含%d或%s特殊字符以引用节点参数值。
参数名0和其他尾随参数是用于填充名称格式中%d和%s特殊字符的参数名称。

运算符列表过滤器

## 运算符列表过滤器

这些是可用于某些编译指令的opfilter参数的参数。

obj

任何对象。

sop

任何SOP。

chop

任何CHOP。

cop

任何COP。

vop

任何VOP。

rop

任何ROP。

obj/geo

任何几何对象。

obj/null

任何Null对象。

obj/light

任何灯光。

obj/camera

任何相机。

obj/fog

任何雾对象。

obj/bone

任何骨骼。

shop/surface

任何表面SHOP。

shop/displace

任何位移SHOP。

shop/interior

任何内部SHOP。

shop/light

任何灯光SHOP。

shop/shadow

任何阴影SHOP。

shop/fog

任何大气SHOP。

shop/photon

任何光子SHOP。

shop/image3d

任何3D图像SHOP。