---
title: vex compiler pragmas
order: 6
---

| 本页内容 | * [#pragma c++rawstring](#pragma-c-rawstring) * [#pragma bindhandle](#pragma-bindhandle) * [#pragma bindhandlereserved](#pragma-bindhandlereserved) * [#pragma bindselector](#pragma-bindselector) * [#pragma bindselectorreserved](#pragma-bindselectorreserved) * [#pragma callback](#callback) * [#pragma disablewhen和#pragma hidewhen](#pragma-disablewhen-and-pragma-hidewhen) * [#pragma export](#pragma-export) * [#pragma group](#pragma-group) * [#pragma help和#pragma info](#pragma-help-and-pragma-info) * [#pragma hint](#pragma-hint) * [#pragma inputlabel](#pragma-inputlabel) * [#pragma label](#pragma-label) * [#pragma name "text"](#pragma-name-text) * [#pragma opicon](#opicon) * [#pragma opmininputs和#pragma opmaxinputs](#opinputs) * [#pragma opname和#pragma oplabel](#opname) * [#pragma opscript](#opscript) * [#pragma parmhelp parameter_name "text"](#pragma-parmhelp-parameter_name-text) * [#pragma parmtag](#pragma-parmtag) * [#pragma ramp](#ramp) * [#pragma range](#pragma-range) * [#pragma rendermask](#pragma-rendermask) * [#pragma optable](#pragma-optable) * [#pragma rename](#pragma-rename) * [如何为参数创建菜单](#how-to-create-menus-for-parameters) * [运算符列表过滤器](#operator-list-filters) |
| --- | --- |

[VEX编译器(vcc)](vcc.html "概述VEX语言编译器vcc及其预处理器和指令语句的使用方法")支持用于自动构建UI对话框脚本的指令。除非在vcc命令行中指定了-u选项，这些指令通常会被忽略。这些指令允许您指定帮助信息、参数表示方式的提示、组织结构以及其他信息。

指令可以通过两种方式指定：作为`#pragma`预处理器指令，或作为`_Pragma` VEX语句。第二种形式允许在单个宏中捆绑多个指令。

以下预处理器形式：

```vex
#pragma label parm "参数标签"
```

在功能上等同于以下VEX语句：

```vex
_Pragma("label parm \"参数标签\"");
```

请注意，指令参数需要用引号括起来，原始引号需要转义。

# pragma c++rawstring

## pragma-c-rawstring

`#pragma c++rawstring 0|1`

VEX支持C++风格的原始字符串。`c++rawstring`指令可用于禁用或重新启用原始字符串支持。例如：

```vex
string a = R"(Hello world\n)";
string b = "Hello world\\n";
#pragma c++rawstrings 0 // 禁用C++风格原始字符串支持
string b = R"(这将产生错误!)";
#pragma c++rawstrings 1 // 重新启用C++风格原始字符串支持
```

# pragma bindhandle

## pragma-bindhandle

`#pragma bindhandle channel_name h_name h_label h_index h_settings`

默认将句柄绑定到特定参数（用户可以覆盖绑定）。

`channel_name`

要绑定到句柄的VEX运算符中的通道名称。

`h_name`

句柄名称。这是预定义的Houdini句柄之一（例如`ladder`）。您可以使用[omls](../commands/omls.html "列出运算符类型的可用句柄。") HScript命令获取可用句柄的完整列表。

`h_label`

句柄的简短描述。

`h_index`

许多句柄（例如xform）有多个关联参数。这允许您选择哪个句柄参数绑定到VEX参数。

`h_settings`

可选的句柄特定字符串，可用于设置句柄的某些默认行为。

```vex
#pragma bindhandle offset1 xform "平移" tx "invisible(1)"
#pragma bindhandle offset2 xform "平移" ty
#pragma bindhandle offset3 xform "平移" tz
sop translate(vector offset=0) { P += offset; }
```

# pragma bindhandlereserved

## pragma-bindhandlereserved

`#pragma bindhandlereserved reserved_channel_name h_name h_label h_index h_settings`

每个脚本化运算符类型都有一些参数，这些参数会添加到该类型的每个运算符中（无论对话框脚本文件的内容如何）。要将句柄绑定到这些参数之一，必须使用bindhandlereserved指令。此指令的参数与bindhandle指令完全相同。唯一的例外是通道名称参数必须指定保留参数的名称。

# pragma bindselector

## pragma-bindselector

`#pragma bindselector [parm_name] sel_type sel_name sel_prompt sel_mask allow_dragging group_type_parm asterisk_sel_all [input_index input_required]`

当在Houdini中交互式创建运算符时，可以提示用户选择要处理的数据。这些提示由选择器处理。选择器可以基于每个OP或每个参数定义。

对于基于OP的选择器，bindselector指令需要7个参数。对于基于参数的选择器，需要10个参数。

parm_name

要绑定选择器的VEX参数（用于基于参数的选择器）。

sel_type

要选择的实体。使用[omsls](../commands/omsls.html "列出运算符类型的可用选择器。") HScript命令打印可能值的列表。

sel_name

选择器的简短描述。

sel_prompt

提示用户选择几何体的文本。

sel_mask

允许选择特定基元类型的模式。可能的基元类型包括：

all

所有基元类型

face

多边形、NURBs或Bezier曲线。

surface

网格、NURBs或Bezier曲面

quadric

基本圆、球体或管状体。

poly

多边形

nurbscurve

NURBS曲线

bezcurve

Bezier曲线

mesh

网格

nurbs

NURBS曲面

bezier

Bezier曲面

circle

基本圆

sphere

基本球体

tube

基本管状体

meta

元球

particle

粒子系统

基元类型可以使用标准的Houdini分组机制组合。例如：

- `all,^p*`: 选择除多边形和粒子外的所有基元类型。
- `face,surface`: 选择面和曲面基元。
- `*,^quad*,^meta`: 选择除二次曲面和元球外的任何基元。

allow_dragging

如果设置为1，可以在不强制用户点击`RMB`完成选择的情况下修改选择。

这允许用户在一个步骤中选择和修改（拖动鼠标完成选择并将鼠标移动传递给运算符句柄）。

group_type_parm

指示选择组将具有的几何类型的参数名称。通常，此值将命名一个带有菜单的参数，用于选择“点”、“基元”或“从组猜测”。请参阅[Blast SOP](../nodes/sop/blast.html "删除基元、点、边或断点。")的OMbindings文件。

asterisk_sel_all

如果设置为1，选择器需要将选择字符串设置为“\*”以指示选择了所有几何体。如果为0，选择器假定空组参数表示选择了所有几何体。

input_index

用于基于参数的选择器。当用户选择几何体时，选择器必须将所选运算符的输出连接到此运算符的输入。此参数指定应连接运算符的输入编号索引。如果选择器需要将多个输入运算符连接到此运算符，请使用-1。

input_required

用于基于参数的选择器。如果用户必须为此输入选择几何体，则设置为1。

```vex
#pragma bindselector prims "切换几何体" \
 "选择要切换的几何体" \
 all 0 "" 0
#pragma bindhandle input_number 0 ladder 输入 parm0
sop switcher(int input_number=0) { import("P", P, input_number) }
```

# pragma bindselectorreserved

## pragma-bindselectorreserved

`#pragma bindselectorreserved reserved_parm_name sel_type sel_name sel_prompt sel_mask allow_dragging group_type_parm asterisk_sel_all input_index input_required`

类似于bindhandlereserved指令，这将选择器绑定到脚本化运算符中的保留参数。此指令的参数与传递给bindselector指令的参数相同。唯一的区别是参数名称参数必须指定保留参数。

# pragma callback

## callback

`#pragma callback name "script"`

将回调HScript脚本或Python函数绑定到名称参数。当参数更改时，Houdini执行脚本字符串。

由于Houdini的架构限制，参数和脚本必须满足某些条件：

- 对话框脚本需要绑定到Houdini节点（例如SHOP、SOP等）。
- 参数必须是切换按钮，或具有绑定到它的菜单（请参阅`#pragma hint`和`#pragma choice`）。

要指示回调的语言（`hscript`或`python`），请使用`#pragma parmtag`。如果不为回调使用`#pragma parmtag`，则默认为`hscript`。但是，编程回调脚本的推荐方法是`python`。

```vex
#pragma callback parm1 "message $script_parm"
#pragma parmtag parm1 script_callback_language hscript

#pragma callback parm2 "import hou; hou.ui.displayMessage(kwargs)"
#pragma parmtag initialize_menu script_callback_language hscript
```

- 对于HScript回调，脚本可以是HScript语句或`$HOUDINI_PATH/scripts`路径上的脚本名称。
- 对于Python回调，脚本应为Python源代码。

Houdini在具有某些可用变量的上下文中执行脚本，这些变量指示哪个参数已更改。

- 对于HScript回调，Houdini创建变量，如`$node`，其中包含参数更改的节点路径。
- 对于Python回调，Houdini创建`kwargs`变量，其中包含有关已更改参数的信息字典。

有关更多信息，请参阅[回调脚本](../hom/locations.html#parameter_callback_scripts)。

# pragma disablewhen和#pragma hidewhen

## pragma-disablewhen-and-pragma-hidewhen

`#pragma disablewhen parm_name conditional_expression`

当conditional_expression评估为true时，禁用parm_name。

`#pragma hidewhen parm_name conditional_expression`

当conditional_expression评估为true时，从UI中隐藏parm_name。

conditional_expression的语法与参数上的**禁用条件**和**隐藏条件**选项相同。有关条件语法的更多信息，请参阅[条件规则帮助](../ref/windows/optype.html#conditionals)。

```vex
// 当'enable'参数切换为关闭时，禁用'samples'参数
#pragma disablewhen samples { enable == 0 }

// 当字符串菜单'choice'设置为'off'时，隐藏'choice_dep1'参数。
#pragma hidewhen choice_dep1 { choice == "off" }
```

# pragma export

## pragma-export

`#pragma export parm_name (none | dialog | all)`

将参数UI添加到操作参数对话框，并可选择添加到运算符工具栏。

`none`或0

不导出。参数仅出现在运算符的标准对话框中。

`dialog`或1

参数出现在运算符的参数窗口中。

`all`或2

参数出现在运算符的参数窗口和运算符工具栏中。

您可以结合使用`#pragma hint hidden`和此指令。

# pragma group

## pragma-group

`#pragma group group_name parameter_name1 parameter_name2 ...`

将命名参数分组到UI中的选项卡中。

```vex
// 将Ka、Kd、Ks、roughness分组到名为BRDF的文件夹中
#pragma group BRDF Ka Kd Ks
#pragma group BRDF roughness
```

注意
您可以在组名中使用`/`创建嵌套组。例如，以下创建一个带有两个子选项卡的`Group`选项卡。

```vex
#pragma group "Group/子组1" p1 p2
#pragma group "Group/子组2" p3 p4
```

# pragma help和#pragma info

## pragma-help-and-pragma-info

`#pragma help "text"`

将文本添加到对话框脚本的帮助中。您可以使用此功能为最终用户记录函数和参数。

```vex
#pragma help "这是VEX函数的帮助。"
#pragma help "它会自动添加到帮助文本中"
```

与`#pragma help`类似，`#pragma info`文本会添加到对话框脚本的帮助中。但是，信息文本位于帮助开头的单独部分中。您可以使用此功能指定版权、版本信息等。

```vex
#pragma info "由Bob Loblaw创建 - (c) 2006"
```

目前，只有SOP显示信息文本。

# pragma hint

## pragma-hint

`#pragma hint parameter_name hint_type`

添加有关参数表示的值类型的信息（例如，VEX向量可以表示空间中的点、颜色或方向）。提示用于专门化编辑值的UI。

hint_type可以是以下之一：

`none`

无提示。

`toggle`

整数或浮点数表示开/关切换（其中1为开，0为关）。

`color`

参数是颜色。UI将提供颜色滑块。

`direction`

参数是方向。UI将提供指定方向的小工具。

`vector`

参数是空间中的3D向量。UI与具有3个浮点数的参数的默认UI相同，但通道名称将以x、y、z结尾，而不是1、2、3。

`vector`

参数是空间中的4D向量。UI与具有4个浮点数的参数的默认UI相同，但通道名称将以x、y、z、w结尾，而不是1、2、3、4。

`uv`

向量参数是UV坐标。UI是两个输入字段而不是三个（传递给VEX的第三个分量始终为0），通道名称将以u、v结尾，而不是1、2。

`uvw`

向量参数是UV坐标。UI是两个输入字段而不是三个（传递给VEX的第三个分量始终为0），通道名称将以u、v结尾，而不是1、2。

`angle`

参数是方向向量。UI将提供方向小工具。

`file`

字符串参数是文件名。UI添加用于指定文件的浏览器按钮。（另请参阅下面的`image`和`geometry`。）

`image`

字符串参数是图像文件的文件名。UI添加用于指定文件的浏览器按钮，浏览器仅显示图像文件类型。

`geometry`

字符串参数是几何文件的文件名。UI添加用于指定文件的浏览器按钮，浏览器仅显示几何文件类型。

`hidden`

不要在参数列表中包含此参数。当您希望参数被几何属性覆盖时，这很有用。这与`invisible`不同，因为不会创建底层场景参数。

`invisible`

创建的参数将存在于运算符中，但对用户界面隐藏。与`hidden`不同，将创建一个实际的场景参数，只是不显示。

`inputinvisible`

对于使用`#pragma optable vop`构建的VOP运算符，此提示指示在创建新节点时默认情况下应隐藏VOP输入连接器。输入仍可通过VOP底部的`更多...`连接器访问。此提示在构建非VOP运算符类型或导出参数时无效。

`oplist [opfilter]`

参数是对象列表。您可以可选地指定opfilter以限制列表中允许的运算符类型。使用`#pragma parmtag`解析对象列表中的任何捆绑包或组。

请参阅下面可能的运算符过滤器列表。

`oppath [opfilter]`

参数是对象路径。您可以可选地指定opfilter以限制可以选择的运算符类型。

请参阅下面可能的运算符过滤器列表。

`joinnext`

将此参数后面的参数放在GUI中的同一行上。对于窄控件，这可以节省参数编辑器中的空间。

示例：`#pragma hint myParm joinnext`

```vex
#pragma hint __nondiffuse toggle // 定义为切换按钮
#pragma hint specularcolor color // 这表示颜色
#pragma hint rest hidden // 不在UI中显示rest参数
#pragma hint mapname image // 这表示图像文件
#pragma hint nullobject oppath "obj/null" // 仅空对象
```

# pragma inputlabel

## pragma-inputlabel

`#pragma inputlabel inputnum "label"`

对于VEX运算符类型，设置运算符输入的标签。当用户在其中一个运算符输入上按下鼠标中键时，此标签会出现。inputnum是输入的索引，从1开始。

```vex
#pragma inputlabel 1 "要修改的几何体"
```

# pragma label

## pragma-label

`#pragma label parameter_name "text"`

指定参数的描述性标签。

```vex
#pragma label amp "噪声幅度"
displacement bumpy(float amp=0) {
...
}
```

# pragma name "text"

## pragma-name-text

设置出现在UI中的标签。此指令已过时，因为标签现在在运算符表定义中定义。

# pragma opicon

## opicon

`#pragma opicon "text"`

使用此指令设置此运算符类型使用的图标。它可以是外部.icon或.bicon文件的路径，或标准图标之一的名称。

vcc的`-C` [命令行选项](vcc.html#otl)覆盖此指令。

# pragma opmininputs和#pragma opmaxinputs

## opinputs

`#pragma opmininputs num`

对于VEX运算符类型，这设置必须连接到运算符的*最小*输入数。此值对于SHOPs（不接受输入）被忽略。如果连接的输入节点少于这个数量，运算符将生成错误。`-t` [命令行选项](vcc.html#otl)覆盖此指令。

`#pragma opmaxinputs num`

对于VEX运算符类型，这设置可以连接到运算符的*最大*输入数。此值对于SHOPs（不接受输入）被忽略。`-T` [命令行选项](vcc.html#otl)覆盖此指令。

```vex
#pragma opmininputs 1
#pragma opmaxinputs 4
```

# pragma opname和#pragma oplabel

## opname

`#pragma opname "text"`

指定此运算符类型的内部运算符名称。默认情况下，编译器使用源文件的名称。vcc的`-n` [命令行选项](vcc.html#otl)覆盖此指令。

`#pragma oplabel "text"`

指定此运算符类型的描述性名称。默认情况下，编译器使用内部运算符名称。vcc的`-N` [命令行选项](vcc.html#otl)覆盖此指令。

```vex
#pragma opname "myshop"
#pragma oplabel "我的新商店
