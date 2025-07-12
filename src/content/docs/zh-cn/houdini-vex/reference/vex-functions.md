---
title: vex functions
order: 1
---

请参阅[VEX上下文](../contexts/index.html "编写VEX程序的不同上下文指南")了解各种函数和[语句](../statement.html)可用的不同上下文（如表面着色器或置换着色器）。

函数

## 子主题

数组

## array_group

- [append](../arrays/append)
 向数组或字符串添加项。
- [argsort](../arrays/argsort)
 返回数组排序后的索引。
- [array](../arrays/array)
 高效地从参数创建数组。
- [foreach](../arrays/foreach)
 遍历数组中的项，可选枚举。
- [insert](../arrays/insert)
 向数组或字符串插入项、数组或字符串。
- [isvalidindex](../arrays/isvalidindex)
 检查给定索引对数组或字符串是否有效。
- [len](../arrays/len)
 返回数组长度。
- [pop](../arrays/pop)
 移除数组最后一个元素并返回。
- [push](../arrays/push)
 向数组添加项。
- [removeindex](../arrays/removeindex)
 从数组中移除指定索引的项。
- [removevalue](../arrays/removevalue)
 从数组中移除项。
- [reorder](../arrays/reorder)
 重排数组或字符串中的项。
- [resize](../arrays/resize)
 设置数组长度。
- [reverse](../arrays/reverse)
 返回数组或字符串的逆序。
- [slice](../arrays/slice)
 切片字符串或数组的子串或子数组。
- [sort](../arrays/sort)
 返回按升序排序的数组。
- [upush](../arrays/upush)
 向数组添加统一项。

属性和内禀属性

## attrib_group

- [addattrib](../attributes-and-intrinsics/addattrib)
 向几何体添加属性。
- [adddetailattrib](../attributes-and-intrinsics/adddetailattrib)
 向几何体添加细节属性。
- [addpointattrib](../attributes-and-intrinsics/addpointattrib)
 向几何体添加点属性。
- [addprimattrib](../attributes-and-intrinsics/addprimattrib)
 向几何体添加图元属性。
- [addvertexattrib](../attributes-and-intrinsics/addvertexattrib)
 向几何体添加顶点属性。
- [addvisualizer](../attributes-and-intrinsics/addvisualizer)
 追加到几何体的可视化器细节属性。
- [attrib](../attributes-and-intrinsics/attrib)
 从几何体读取属性值。
- [attribclass](../attributes-and-intrinsics/attribclass)
 返回几何体属性的类别。
- [attribdataid](../attributes-and-intrinsics/attribdataid)
 返回几何体属性的数据ID。
- [attribsize](../attributes-and-intrinsics/attribsize)
 返回几何体属性的大小。
- [attribtype](../attributes-and-intrinsics/attribtype)
 返回几何体属性的类型。
- [attribtypeinfo](../attributes-and-intrinsics/attribtypeinfo)
 返回几何体属性的变换元数据。
- [curvearclen](../attributes-and-intrinsics/curvearclen)
 使用参数化uv坐标评估由点数组定义的图元上的弧长。
- [detail](../attributes-and-intrinsics/detail)
 从几何体读取细节属性值。
- [detailattrib](../attributes-and-intrinsics/detailattrib)
 从几何体读取细节属性值。
- [detailattribsize](../attributes-and-intrinsics/detailattribsize)
 返回几何体细节属性的大小。
- [detailattribtype](../attributes-and-intrinsics/detailattribtype)
 返回几何体细节属性的类型。
- [detailattribtypeinfo](../attributes-and-intrinsics/detailattribtypeinfo)
 返回几何体属性的类型信息。
- [detailintrinsic](../attributes-and-intrinsics/detailintrinsic)
 从几何体读取细节内禀属性。
- [findattribval](../attributes-and-intrinsics/findattribval)
 查找具有特定属性值的图元/点/顶点。
- [findattribvalcount](../attributes-and-intrinsics/findattribvalcount)
 返回整数或字符串属性具有特定值的元素数量。
- [getattrib](../attributes-and-intrinsics/getattrib)
 从几何体读取属性值，带有效性检查。
- [getattribute](../attributes-and-intrinsics/getattribute)
 将几何体属性值复制到变量并返回成功标志。
- [hasattrib](../attributes-and-intrinsics/hasattrib)
 检查几何体属性是否存在。
- [hasdetailattrib](../attributes-and-intrinsics/hasdetailattrib)
 返回几何体细节属性是否存在。
- [haspointattrib](../attributes-and-intrinsics/haspointattrib)
 返回几何体点属性是否存在。
- [hasprimattrib](../attributes-and-intrinsics/hasprimattrib)
 返回几何体图元属性是否存在。
- [hasvertexattrib](../attributes-and-intrinsics/hasvertexattrib)
 返回几何体顶点属性是否存在。
- [idtopoint](../attributes-and-intrinsics/idtopoint)
 通过id属性查找点。
- [idtoprim](../attributes-and-intrinsics/idtoprim)
 通过id属性查找图元。
- [nametopoint](../attributes-and-intrinsics/nametopoint)
 通过名称属性查找点。
- [nametoprim](../attributes-and-intrinsics/nametoprim)
 通过名称属性查找图元。
- [nuniqueval](../attributes-and-intrinsics/nuniqueval)
 返回整数或字符串属性的唯一值数量。
- [point](../attributes-and-intrinsics/point)
 从几何体读取点属性值。
- [pointattrib](../attributes-and-intrinsics/pointattrib)
 从几何体读取点属性值并输出成功/失败标志。
- [pointattribsize](../attributes-and-intrinsics/pointattribsize)
 返回几何体点属性的大小。
- [pointattribtype](../attributes-and-intrinsics/pointattribtype)
 返回几何体点属性的类型。
- [pointattribtypeinfo](../attributes-and-intrinsics/pointattribtypeinfo)
 返回几何体属性的类型信息。
- [pointlocaltransforms](../attributes-and-intrinsics/pointlocaltransforms)
 从点索引数组返回点局部变换数组。
- [pointtransform](../attributes-and-intrinsics/pointtransform)
 从点索引返回点变换。
- [pointtransformrigid](../attributes-and-intrinsics/pointtransformrigid)
 从点索引返回刚体点变换。
- [pointtransforms](../attributes-and-intrinsics/pointtransforms)
 从点索引数组返回点变换数组。
- [pointtransformsrigid](../attributes-and-intrinsics/pointtransformsrigid)
 从点索引数组返回刚体点变换数组。
- [prim](../attributes-and-intrinsics/prim)
 从几何体读取图元属性值。
- [prim_attribute](../attributes-and-intrinsics/prim_attribute)
 在特定参数化(u, v)位置插值属性值并复制到变量。
- [primarclen](../attributes-and-intrinsics/primarclen)
 使用参数化uv坐标评估图元上的弧长。
- [primattrib](../attributes-and-intrinsics/primattrib)
 从几何体读取图元属性值，输出成功标志。
- [primattribsize](../attributes-and-intrinsics/primattribsize)
 返回几何体图元属性的大小。
- [primattribtype](../attributes-and-intrinsics/primattribtype)
 返回几何体图元属性的类型。
- [primattribtypeinfo](../attributes-and-intrinsics/primattribtypeinfo)
 返回几何体属性的类型信息。
- [primduv](../attributes-and-intrinsics/primduv)
 返回图元在特定参数化(u, v)位置的导数。
- [priminteriorweights](../attributes-and-intrinsics/priminteriorweights)
 给定UVW坐标，找到将计算内部点的顶点索引和权重。
- [primintrinsic](../attributes-and-intrinsics/primintrinsic)
 从几何体读取图元内禀属性。
- [primuv](../attributes-and-intrinsics/primuv)
 在特定参数化(uvw)位置插值属性值。
- [primuvconvert](../attributes-and-intrinsics/primuvconvert)
 在曲线图元上转换参数化UV位置到不同空间。
- [removedetailattrib](../attributes-and-intrinsics/removedetailattrib)
 从几何体移除细节属性。
- [removepointattrib](../attributes-and-intrinsics/removepointattrib)
 从几何体移除点属性。
- [removepointgroup](../attributes-and-intrinsics/removepointgroup)
 从几何体移除点组。
- [removeprimattrib](../attributes-and-intrinsics/removeprimattrib)
 从几何体移除图元属性。
- [removeprimgroup](../attributes-and-intrinsics/removeprimgroup)
 从几何体移除图元组。
- [removevertexattrib](../attributes-and-intrinsics/removevertexattrib)
 从几何体移除顶点属性。
- [removevertexgroup](../attributes-and-intrinsics/removevertexgroup)
 从几何体移除顶点组。
- [setattrib](../attributes-and-intrinsics/setattrib)
 向几何体写入属性值。
- [setattribtypeinfo](../attributes-and-intrinsics/setattribtypeinfo)
 设置几何体中属性的含义。
- [setdetailattrib](../attributes-and-intrinsics/setdetailattrib)
 设置几何体中的细节属性。
- [setdetailintrinsic](../attributes-and-intrinsics/setdetailintrinsic)
 设置可写细节内禀属性的值。
- [setpointattrib](../attributes-and-intrinsics/setpointattrib)
 设置几何体中的点属性。
- [setpointlocaltransforms](../attributes-and-intrinsics/setpointlocaltransforms)
 在给定点索引处设置点局部变换数组。
- [setpointtransform](../attributes-and-intrinsics/setpointtransform)
 设置给定点的世界空间变换。
- [setpointtransforms](../attributes-and-intrinsics/setpointtransforms)
 在给定点索引处设置点变换数组。
- [setprimattrib](../attributes-and-intrinsics/setprimattrib)
 设置几何体中的图元属性。
- [setprimintrinsic](../attributes-and-intrinsics/setprimintrinsic)
 设置可写图元内禀属性的值。
- [setvertexattrib](../attributes-and-intrinsics/setvertexattrib)
 设置几何体中的顶点属性。
- [uniqueval](../attributes-and-intrinsics/uniqueval)
 返回int或string属性所有值中的唯一值之一。
- [uniquevals](../attributes-and-intrinsics/uniquevals)
 返回int或string属性所有值的唯一值集合。
- [uvsample](../attributes-and-intrinsics/uvsample)
 使用UV属性在特定UV坐标处插值属性值。
- [vertex](../attributes-and-intrinsics/vertex)
 从几何体读取顶点属性值。
- [vertexattrib](../attributes-and-intrinsics/vertexattrib)
 从几何体读取顶点属性值。
- [vertexattribsize](../attributes-and-intrinsics/vertexattribsize)
 返回几何体顶点属性的大小。
- [vertexattribtype](../attributes-and-intrinsics/vertexattribtype)
 返回几何体顶点属性的类型。
- [vertexattribtypeinfo](../attributes-and-intrinsics/vertexattribtypeinfo)
 返回几何体属性的类型信息。

BSDFs

## bsdf_group

- [albedo](../bsdfs/albedo)
 给定出射光方向，返回BSDF的反照率（反射光百分比）。
- [ashikhmin](../bsdfs/ashikhmin)
 使用Ashikhmin着色模型返回镜面BSDF。
- [blinn](../bsdfs/blinn)
 返回Blinn BSDF或计算Blinn着色。
- [chiang](../bsdfs/chiang)
 返回chiang BSDF。
- [chiang_fur](../bsdfs/chiang_fur)
 返回chiang_fur BSDF。
- [cone](../bsdfs/cone)
 返回锥形反射BSDF。
- [cvex_bsdf](../bsdfs/cvex_bsdf)
 从两个CVEX着色器字符串创建bsdf对象。
- [diffuse](../bsdfs/diffuse)
 返回漫反射BSDF或计算漫反射着色。
- [eval_bsdf](../bsdfs/eval_bsdf)
 给定两个向量，评估bsdf。
- [getbounces](../bsdfs/getbounces)
- [ggx](../bsdfs/ggx)
 返回ggx BSDF。
- [hair](../bsdfs/hair)
 返回用于头发着色的BSDF。
- [henyeygreenstein](../bsdfs/henyeygreenstein)
 返回各向异性体积BSDF，可以向前或向后散射光。
- [isotropic](../bsdfs/isotropic)
 返回各向同性BSDF，在所有方向上均匀散射光。
- [mask_bsdf](../bsdfs/mask_bsdf)
 返回仅包含掩码指定组件的新BSDF。
- [normal_bsdf](../bsdfs/normal_bsdf)
 返回BSDF漫反射组件的法线。
- [phong](../bsdfs/phong)
 返回Phong BSDF或计算Phong着色。
- [phonglobe](../bsdfs/phonglobe)
- [sample_bsdf](../bsdfs/sample_bsdf)
 采样BSDF。
- [solid_angle](../bsdfs/solid_angle)
 计算BSDF函数所对的立体角（球面度）。
- [split_bsdf](../bsdfs/split_bsdf)
 将bsdf拆分为其组件瓣。
- [sssapprox](../bsdfs/sssapprox)
 创建近似SSS BSDF。

BSDFs

## BSDFs_group

- [specular](../bsdfs/specular)
 返回镜面BSDF或计算镜面着色。

CHOP

## CHOP_group

- [chadd](../chop/chadd)
 向CHOP节点添加新通道。
- [chattr](../chop/chattr)
 读取CHOP属性。
- [chattrnames](../chop/chattrnames)
 从CHOP输入读取给定属性类的CHOP属性名称。
- [chend](../chop/chend)
 返回给定CHOP输入中最后一个样本的样本编号。
- [chendf](../chop/chendf)
 返回指定输入最后一个样本对应的帧。
- [chendt](../chop/chendt)
 返回指定输入最后一个样本对应的时间。
- [chindex](../chop/chindex)
 给定通道名称，从输入返回通道索引。
- [chinput](../chop/chinput)
 返回指定样本处通道的值。
- [chinputlimits](../chop/chinputlimits)
 计算输入通道中样本的最小值和最大值。
- [chnames](../chop/chnames)
 返回给定CHOP输入的所有CHOP通道名称。
- [chnumchan](../chop/chnumchan)
 返回指定输入中的通道数量。
- [chop](../chop/chop)
 返回指定样本处CHOP通道的值。
- [choplocal](../chop/choplocal)
 返回指定样本处CHOP局部变换通道的值。
- [choplocalt](../chop/choplocalt)
 返回指定样本和评估时间处CHOP局部变换通道的值。
- [chopt](../chop/chopt)
 返回指定样本和评估时间处CHOP通道的值。
- [chrate](../chop/chrate)
 返回指定输入的采样率。
- [chreadbuf](../chop/chreadbuf)
 返回指定索引处CHOP上下文临时缓冲区的值。
- [chremove](../chop/chremove)
 从CHOP节点移除通道。
- [chremoveattr](../chop/chremoveattr)
 移除CHOP属性。
- [chrename](../chop/chrename)
 重命名CHOP通道。
- [chresizebuf](../chop/chresizebuf)
 调整CHOP上下文临时缓冲区大小。
- [chsetattr](../chop/chsetattr)
 设置CHOP属性的值。
- [chsetlength](../chop/chsetlength)
 设置CHOP通道数据的长度。
- [chsetrate](../chop/chsetrate)
 设置CHOP通道数据的采样率。
- [chsetstart](../chop/chsetstart)
 设置CHOP通道数据的起始样本。
- [chstart](../chop/chstart)
 返回指定输入的起始样本。
- [chstartf](../chop/chstartf)
 返回指定输入第一个样本对应的帧。
- [chstartt](../chop/chstartt)
 返回指定输入第一个样本对应的时间。
- [chwritebuf](../chop/chwritebuf)
 在指定索引处写入CHOP上下文临时缓冲区的值。
- [isframes](../chop/isframes)
 如果Vex CHOP的单位菜单当前设置为'frames'返回1，否则返回0。
- [issamples](../chop/issamples)
 如果Vex CHOP的单位菜单当前设置为'samples'返回1，否则返回0。
- [isseconds](../chop/isseconds)
 如果Vex CHOP的单位菜单当前设置为'seconds'返回1，否则返回0。
- [ninputs](../chop/ninputs)
 返回输入数量。

通道图元

## chprim_group

- [chprim_clear](../channel-primitives/chprim_clear)
 清除通道图元，移除所有关键帧。
- [chprim_destroykey](../channel-primitives/chprim_destroykey)
 从通道图元中销毁现有关键帧。
- [chprim_end](../channel-primitives/chprim_end)
 获取通道图元的结束时间。
- [chprim_eval](../channel-primitives/chprim_eval)
 在给定时间评估通道图元。
- [chprim_insertkey](../channel-primitives/chprim_insertkey)
 向通道图元插入关键帧。
- [chprim_keycount](../channel-primitives/chprim_keycount)
 获取通道图元中的关键帧数量。
- [chprim_keytimes](../channel-primitives/chprim_keytimes)
 获取通道图元的关键帧时间。
- [chprim_keyvalues](../channel-primitives/chprim_keyvalues)
 获取通道图元的关键帧值。
- [chprim_length](../channel-primitives/chprim_length)
 获取通道图元的长度。
- [chprim_setkeyaccel](../channel-primitives/chprim_setkeyaccel)
 设置通道图元关键帧的加速度。
- [chprim_setkeyslope](../channel-primitives/chprim_setkeyslope)
 设置通道图元关键帧的斜率。
- [chprim_setkeyvalue](../channel-primitives/chprim_setkeyvalue)
 设置通道图元关键帧的值。
- [chprim_start](../channel-primitives/chprim_start)
 获取通道图元的开始时间。

color

## color_group

- [blackbody](../color/blackbody)
 计算白炽黑体的颜色值。
- [ctransform](../color/ctransform)
 在色彩空间之间转换。
- [luminance](../color/luminance)
 计算由参数指定的RGB颜色的亮度。

Conversion

## convert_group

- [atof](../conversion/atof)
 将字符串转换为浮点数。
- [atoi](../conversion/atoi)
 将字符串转换为整数。
- [cracktransform](../conversion/cracktransform)
 根据c的值返回变换(xform)的平移(c=0)、旋转(c=1)、缩放(c=2)或剪切(c=3)分量。
- [degrees](../conversion/degrees)
 将参数从弧度转换为角度。
- [eulertoquaternion](../conversion/eulertoquaternion)
 从欧拉角创建表示四元数的vector4。
- [hsvtorgb](../conversion/hsvtorgb)
 将HSV色彩空间转换为RGB色彩空间。
- [qconvert](../conversion/qconvert)
 将由vector4表示的四元数转换为matrix3表示。
- [quaterniontoeuler](../conversion/quaterniontoeuler)
 创建表示四元数的欧拉角。
- [radians](../conversion/radians)
 将参数从角度转换为弧度。
- [rgbtohsv](../conversion/rgbtohsv)
 将RGB色彩空间转换为HSV色彩空间。
- [rgbtoxyz](../conversion/rgbtoxyz)
 将线性sRGB三元组转换为CIE XYZ三刺激值。
- [serialize](../conversion/serialize)
 将向量或矩阵类型的数组展平为浮点数数组。
- [unserialize](../conversion/unserialize)
 将浮点数平面数组转换为向量或矩阵数组。
- [xyztorgb](../conversion/xyztorgb)
 将CIE XYZ三刺激值转换为线性sRGB三元组。

Crowds

## crowd_group

- [agentaddclip](../crowds/agentaddclip)
 向代理定义添加动画片段。
- [agentchannelcount](../crowds/agentchannelcount)
 返回代理图元骨骼中的通道数量。
- [agentchannelnames](../crowds/agentchannelnames)
 返回代理图元骨骼中的通道名称。
- [agentchannelvalue](../crowds/agentchannelvalue)
 返回代理图元通道的当前值。
- [agentchannelvalues](../crowds/agentchannelvalues)
 返回代理图元通道的当前值。
- [agentclipcatalog](../crowds/agentclipcatalog)
 返回已加载到代理图元中的所有动画片段。
- [agentclipchannel](../crowds/agentclipchannel)
 查找代理动画片段中的通道索引。
- [agentclipchannelnames](../crowds/agentclipchannelnames)
 返回代理动画片段中的通道名称。
- [agentcliplayerblend](../crowds/agentcliplayerblend)
 根据代理的动画层混合值。
- [agentcliplength](../crowds/agentcliplength)
 返回代理动画片段的长度(以秒为单位)。
- [agentclipnames](../crowds/agentclipnames)
 返回代理图元的当前动画片段。
- [agentclipsample](../crowds/agentclipsample)
 在特定时间对代理片段的通道进行采样。
- [agentclipsamplelocal](../crowds/agentclipsamplelocal)
 在特定时间对代理的动画片段进行采样。
- [agentclipsamplerate](../crowds/agentclipsamplerate)
 返回代理动画片段的采样率。
- [agentclipsampleworld](../crowds/agentclipsampleworld)
 在特定时间对代理的动画片段进行采样。
- [agentclipstarttime](../crowds/agentclipstarttime)
 返回代理动画片段的开始时间(以秒为单位)。
- [agentcliptimes](../crowds/agentcliptimes)
 返回代理图元动画片段的当前时间。
- [agentcliptransformgroups](../crowds/agentcliptransformgroups)
 返回代理图元当前动画片段的变换组。
- [agentclipweights](../crowds/agentclipweights)
 返回代理图元动画片段的混合权重。
- [agentcollisionlayer](../crowds/agentcollisionlayer)
 返回代理图元的碰撞层名称。
- [agentcollisionlayers](../crowds/agentcollisionlayers)
 返回代理图元的碰撞层名称。
- [agentcurrentlayer](../crowds/agentcurrentlayer)
 返回代理图元的当前层名称。
- [agentcurrentlayers](../crowds/agentcurrentlayers)
 返回代理图元的当前层名称。
- [agentfindclip](../crowds/agentfindclip)
 查找代理定义中的片段索引。
- [agentfindlayer](../crowds/agentfindlayer)
 查找代理定义中的层索引。
- [agentfindtransformgroup](../crowds/agentfindtransformgroup)
 查找代理定义中的变换组索引。
- [agentlayerbindings](../crowds/agentlayerbindings)
 返回代理层中每个形状绑定到的变换。
- [agentlayers](../crowds/agentlayers)
 返回已加载到代理图元中的所有层。
- [agentlayershapes](../crowds/agentlayershapes)
 返回代理图元层引用的形状名称。
- [agentlocaltransform](../crowds/agentlocaltransform)
 返回代理图元骨骼的当前局部空间变换。
- [agentlocaltransforms](../crowds/agentlocaltransforms)
 返回代理图元的当前局部空间变换。
- [agentmetadata](../crowds/agentmetadata)
 返回代理定义的元数据字典。
- [agentrestlocaltransform](../crowds/agentrestlocaltransform)
 返回代理图元关节的局部空间静止变换。
- [agentrestworldtransform](../crowds/agentrestworldtransform)
 返回代理图元关节的世界空间静止变换。
- [agentrigchildren](../crowds/agentrigchildren)
 返回代理图元骨骼中变换的子变换。
- [agentrigfind](../crowds/agentrigfind)
 查找代理图元骨骼中的变换索引。
- [agentrigfindchannel](../crowds/agentrigfindchannel)
 查找代理图元骨骼中的通道索引。
- [agentrigparent](../crowds/agentrigparent)
 返回代理图元骨骼中变换的父变换。
- [agentsolvefbik](../crowds/agentsolvefbik)
 对代理骨骼应用全身逆向运动学算法。
- [agenttransformcount](../crowds/agenttransformcount)
 返回代理图元骨骼中的变换数量。
- [agenttransformgroupmember](../crowds/agenttransformgroupmember)
 返回变换是否为指定变换组的成员。
- [agenttransformgroupmemberchannel](../crowds/agenttransformgroupmemberchannel)
 返回通道是否为指定变换组的成员。
- [agenttransformgroups](../crowds/agenttransformgroups)
 返回代理定义中的变换组名称。
- [agenttransformgroupweight](../crowds/agenttransformgroupweight)
 返回指定变换组成员的权重。
- [agenttransformnames](../crowds/agenttransformnames)
 返回代理图元骨骼中每个变换的名称。
- [agenttransformtolocal](../crowds/agenttransformtolocal)
 将代理图元的变换从世界空间转换为局部空间。
- [agenttransformtoworld](../crowds/agenttransformtoworld)
 将代理图元的变换从局部空间转换为世界空间。
- [agentworldtransform](../crowds/agentworldtransform)
 返回代理图元骨骼的当前世界空间变换。
- [agentworldtransforms](../crowds/agentworldtransforms)
 返回代理图元的当前世界空间变换。
- [setagentchannelvalue](../crowds/setagentchannelvalue)
 覆盖代理图元通道的值。
- [setagentchannelvalues](../crowds/setagentchannelvalues)
 覆盖代理图元通道的值。
- [setagentclipnames](../crowds/setagentclipnames)
 设置代理图元的当前动画片段。
- [setagentclips](../crowds/setagentclips)
 设置代理用于计算其变换的动画片段。
- [setagentcliptimes](../crowds/setagentcliptimes)
 设置代理图元动画片段的当前时间。
- [setagentclipweights](../crowds/setagentclipweights)
 设置代理图元动画片段的混合权重。
- [setagentcollisionlayer](../crowds/setagentcollisionlayer)
 设置代理图元的碰撞层。
- [setagentcollisionlayers](../crowds/setagentcollisionlayers)
 设置代理图元的碰撞层。
- [setagentcurrentlayer](../crowds/setagentcurrentlayer)
 设置代理图元的当前层。
- [setagentcurrentlayers](../crowds/setagentcurrentlayers)
 设置代理图元的当前显示层。
- [setagentlocaltransform](../crowds/setagentlocaltransform)
 覆盖代理图元骨骼的局部空间变换。
- [setagentlocaltransforms](../crowds/setagentlocaltransforms)
 覆盖代理图元的局部空间变换。
- [setagentworldtransform](../crowds/setagentworldtransform)
 覆盖代理图元骨骼的世界空间变换。
- [setagentworldtransforms](../crowds/setagentworldtransforms)
 覆盖代理图元的世界空间变换。

dict

## dict_group

- [json_dumps](../dict/json_dumps)
 将VEX字典转换为JSON字符串。
- [json_loads](../dict/json_loads)
 将JSON字符串转换为VEX字典。
- [keys](../dict/keys)
 返回字典中的所有键。
- [typeid](../dict/typeid)
 返回标识VEX数据类型的数字代码。

displace

## displace_group

- [dimport](../displace/dimport)
 从表面的置换着色器中读取变量。

File I/O

## file_group

- [file_stat](../file-i/file_stat)
 返回给定文件的文件系统状态。

filter

## filter_group

- [filter_remap](../filter/filter_remap)
 根据给定的过滤器类型和输入uv计算重要性样本。

Fuzzy Logic

## fuzzy_group

- [fuzzify](../fuzzy-logic/fuzzify)
- [fuzzy_and](../fuzzy-logic/fuzzy_and)
- [fuzzy_defuzz_centroid](../fuzzy-logic/fuzzy_defuzz_centroid)
- [fuzzy_nand](../fuzzy-logic/fuzzy_nand)
- [fuzzy_nor](../fuzzy-logic/fuzzy_nor)
- [fuzzy_not](../fuzzy-logic/fuzzy_not)
- [fuzzy_nxor](../fuzzy-logic/fuzzy_nxor)
- [fuzzy_or](../fuzzy-logic/fuzzy_or)
- [fuzzy_xor](../fuzzy-logic/fuzzy_xor)

Geometry

## geo_group

- [addpoint](../geometry/addpoint)
 向几何体添加点。
- [addprim](../geometry/addprim)
 向几何体添加图元。
- [addvertex](../geometry/addvertex)
 向几何体中的图元添加顶点。
- [clip](../geometry/clip)
 裁剪p0和p1之间的线段。
- [geoself](../geometry/geoself)
 返回当前几何体的句柄。
- [geounwrap](../geometry/geounwrap)
 返回一个oppath:字符串以就地展开几何体。
- [inedgegroup](../geometry/inedgegroup)
 如果由点对指定的边在由字符串指定的组中，则返回1。
- [intersect](../geometry/intersect)
 此函数计算光线与几何体的第一个交点。
- [intersect_all](../geometry/intersect_all)
 计算指定光线与几何体的所有交点。
- [minpos](../geometry/minpos)
 给定世界空间中的位置，返回给定几何体上最近点的位置。
- [nearpoint](../geometry/nearpoint)
 查找几何体中最接近的点。
- [nearpoints](../geometry/nearpoints)
 查找几何体中所有最接近的点。
- [nedgesgroup](../geometry/nedgesgroup)
 返回组中的边数。
- [neighbour](../geometry/neighbour)
 返回连接到给定点的下一个点的点号。
- [neighbourcount](../geometry/neighbourcount)
 返回连接到指定点的点数。
- [neighbours](../geometry/neighbours)
 返回点邻居的点号数组。
- [npoints](../geometry/npoints)
 返回输入或几何文件中的点数。
- [nprimitives](../geometry/nprimitives)
 返回输入或几何文件中的图元数。
- [nvertices](../geometry/nvertices)
 返回输入或几何文件中的顶点数。
- [nverticesgroup](../geometry/nverticesgroup)
 返回组中的顶点数。
- [pointprims](../geometry/pointprims)
 返回包含点的图元列表。
- [pointvertex](../geometry/pointvertex)
 返回几何体中点的线性顶点号。
- [pointvertices](../geometry/pointvertices)
 返回连接到点的顶点列表。
- [polyneighbours](../geometry/polyneighbours)
 返回多边形边邻居的图元号数组。
- [primfind](../geometry/primfind)
 返回可能与给定边界框相交的图元列表。
- [primpoint](../geometry/primpoint)
 将图元/顶点对转换为点号。
- [primpoints](../geometry/primpoints)
 返回图元上的点列表。
- [primvertex](../geometry/primvertex)
 将图元/顶点对转换为线性顶点。
- [primvertexcount](../geometry/primvertexcount)
 返回几何体中图元的顶点数。
- [primvertices](../geometry/primvertices)
 返回图元上的顶点列表。
- [removeattrib](../geometry/removeattrib)
 从几何体中移除属性或组。
- [removepoint](../geometry/removepoint)
 从几何体中移除点。
- [removeprim](../geometry/removeprim)
 从几何体中移除图元。
- [removevertex](../geometry/removevertex)
 从几何体中移除顶点。
- [setedgegroup](../geometry/setedgegroup)
 设置几何体中边的组成员资格。
- [setprimvertex](../geometry/setprimvertex)
 将几何体中的顶点重新连接到不同的点。
- [setvertexpoint](../geometry/setvertexpoint)
 将几何体中的顶点重新连接到不同的点。
- [uvintersect](../geometry/uvintersect)
 此函数计算指定光线与uv空间中几何体的交点。
- [vertexcurveparam](../geometry/vertexcurveparam)
 返回顶点沿其图元周长的参数坐标。
- [vertexindex](../geometry/vertexindex)
 将图元/顶点对转换为线性顶点。
- [vertexnext](../geometry/vertexnext)
 返回与给定顶点共享点的下一个顶点的线性顶点号。
- [vertexpoint](../geometry/vertexpoint)
 返回几何体中线性顶点的点号。
- [vertexprev](../geometry/vertexprev)
 返回与给定顶点共享点的前一个顶点的线性顶点号。
- [vertexprim](../geometry/vertexprim)
 返回包含给定顶点的图元号。
- [vertexprimindex](../geometry/vertexprimindex)
 将线性顶点索引转换为图元顶点号。

groups

## groups_group

- [expandedgegroup](../groups/expandedgegroup)
- [expandpointgroup](../groups/expandpointgroup)
 返回与组字符串对应的点号数组。
- [expandprimgroup](../groups/expandprimgroup)
 返回与组字符串对应的图元号数组。
- [expandvertexgroup](../groups/expandvertexgroup)
 返回与组字符串对应的线性顶点号数组。
- [inpointgroup](../groups/inpointgroup)
 如果由点号指定的点在由字符串指定的组中，则返回1。
- [inprimgroup](../groups/inprimgroup)
 如果由图元号指定的图元在由字符串指定的组中，则返回1。
- [invertexgroup](../groups/invertexgroup)
 如果由顶点号指定的顶点在由字符串指定的组中，则返回1。
- [npointsgroup](../groups/npointsgroup)
 返回组中的点数。
- [nprimitivesgroup](../groups/nprimitivesgroup)
 返回组中的图元数。
- [setpointgroup](../groups/setpointgroup)
 向几何体中的组添加/移除点。
- [setprimgroup](../groups/setprimgroup)
 向几何体中的组添加/移除图元。
- [setvertexgroup](../groups/setvertexgroup)
 向几何体中的组添加/移除顶点。

Half-edges

## 半边组

- [hedge_dstpoint](../half-edges/hedge_dstpoint)
 返回半边的目标点。
- [hedge_dstvertex](../half-edges/hedge_dstvertex)
 返回半边的目标顶点。
- [hedge_equivcount](../half-edges/hedge_equivcount)
 返回与给定半边等效的半边数量。
- [hedge_isequiv](../half-edges/hedge_isequiv)
 判断两个半边是否等效（表示同一条边）。
- [hedge_isprimary](../half-edges/hedge_isprimary)
 判断半边编号是否对应主半边。
- [hedge_isvalid](../half-edges/hedge_isvalid)
 判断半边编号是否对应有效半边。
- [hedge_next](../half-edges/hedge_next)
 返回给定半边在其多边形中的下一条半边。
- [hedge_nextequiv](../half-edges/hedge_nextequiv)
 返回与给定半边等效的下一条半边。
- [hedge_postdstpoint](../half-edges/hedge_postdstpoint)
 返回半边目标顶点在其图元中后续顶点所连接的点。
- [hedge_postdstvertex](../half-edges/hedge_postdstvertex)
 返回半边目标顶点在其图元中的后续顶点。
- [hedge_presrcpoint](../half-edges/hedge_presrcpoint)
 返回半边源顶点在其图元中前驱顶点所连接的点。
- [hedge_presrcvertex](../half-edges/hedge_presrcvertex)
 返回半边源顶点在其图元中的前驱顶点。
- [hedge_prev](../half-edges/hedge_prev)
 返回给定半边在其多边形中的前一条半边。
- [hedge_prim](../half-edges/hedge_prim)
 返回包含半边的图元。
- [hedge_primary](../half-edges/hedge_primary)
 返回与给定半边等效的主半边。
- [hedge_srcpoint](../half-edges/hedge_srcpoint)
 返回半边的源点。
- [hedge_srcvertex](../half-edges/hedge_srcvertex)
 返回半边的源顶点。
- [pointedge](../half-edges/pointedge)
 查找并返回具有给定端点的半边。
- [pointhedge](../half-edges/pointhedge)
 查找并返回具有给定源点或源点和目标点的半边。
- [pointhedgenext](../half-edges/pointhedgenext)
 返回与给定半边具有相同源点的下一条半边。
- [primhedge](../half-edges/primhedge)
 返回图元中包含的一条半边。
- [vertexhedge](../half-edges/vertexhedge)
 返回以某顶点为源点的半边。

六面体

## 六面体组

- [hex_adjacent](../hex/hex_adjacent)
 返回相邻六面体的图元编号。
- [hex_faceindex](../hex/hex_faceindex)
 返回六面体每个面的顶点索引。

图像处理

## 图像组

- [accessframe](../image-processing/accessframe)
 告知COP管理器需要访问指定帧。
- [alphaname](../image-processing/alphaname)
 返回alpha通道的默认名称（如合成器首选项中所示）。
- [binput](../image-processing/binput)
 在给定UV位置周围采样2×2像素块，并进行双线性插值。
- [bumpname](../image-processing/bumpname)
 返回凹凸通道的默认名称（如合成器首选项中所示）。
- [chname](../image-processing/chname)
 返回编号通道的名称。
- [cinput](../image-processing/cinput)
 在给定坐标处采样精确（未过滤）的像素颜色。
- [colorname](../image-processing/colorname)
 返回颜色通道的默认名称（如合成器首选项中所示）。
- [depthname](../image-processing/depthname)
 返回深度通道的默认名称（如合成器首选项中所示）。
- [dsmpixel](../image-processing/dsmpixel)
 读取深度阴影图或深度相机图中像素存储的z记录。
- [finput](../image-processing/finput)
 返回完全过滤的像素输入。
- [hasmetadata](../image-processing/hasmetadata)
 查询合成操作器上是否存在元数据。
- [hasplane](../image-processing/hasplane)
 如果该COP中存在参数指定的平面则返回1。
- [iaspect](../image-processing/iaspect)
 返回指定输入的宽高比。
- [ichname](../image-processing/ichname)
 返回给定输入的索引平面的通道名称。
- [iend](../image-processing/iend)
 返回指定输入的结束帧。
- [iendtime](../image-processing/iendtime)
 返回指定输入的结束时间。
- [ihasplane](../image-processing/ihasplane)
 如果指定输入有名为planename的平面则返回1。
- [inumplanes](../image-processing/inumplanes)
 返回给定输入中的平面数量。
- [iplaneindex](../image-processing/iplaneindex)
 返回指定输入中名为'planename'的平面索引。
- [iplanename](../image-processing/iplanename)
 返回给定输入的planeindex指定的平面名称。
- [iplanesize](../image-processing/iplanesize)
 返回指定输入中名为planename的平面的分量数量。
- [irate](../image-processing/irate)
 返回指定输入的帧率。
- [istart](../image-processing/istart)
 返回指定输入的起始帧。
- [istarttime](../image-processing/istarttime)
 返回指定输入的起始时间。
- [ixres](../image-processing/ixres)
 返回指定输入的X分辨率。
- [iyres](../image-processing/iyres)
 返回指定输入的Y分辨率。
- [lumname](../image-processing/lumname)
 返回亮度通道的默认名称（如合成器首选项中所示）。
- [maskname](../image-processing/maskname)
 返回遮罩通道的默认名称（如合成器首选项中所示）。
- [metadata](../image-processing/metadata)
 从合成操作器返回元数据值。
- [ninput](../image-processing/ninput)
 从像素及其八个相邻像素读取分量。
- [normalname](../image-processing/normalname)
 返回法线通道的默认名称（如合成器首选项中所示）。
- [planeindex](../image-processing/planeindex)
 返回参数指定的平面索引（从零开始）。
- [planename](../image-processing/planename)
 返回索引指定的平面名称。
- [planesize](../image-processing/planesize)
 返回平面中的分量数量（标量平面为1，矢量平面最多为4）。
- [pointname](../image-processing/pointname)
 返回点通道的默认名称（如合成器首选项中所示）。
- [velocityname](../image-processing/velocityname)
 返回速度通道的默认名称（如合成器首选项中所示）。

插值

## 插值组

- [ckspline](../interpolation/ckspline)
 采样由位置/值键定义的Catmull-Rom（Cardinal）样条。
- [clamp](../interpolation/clamp)
 返回限制在最小值和最大值之间的值。
- [cspline](../interpolation/cspline)
 采样由均匀间距键定义的Catmull-Rom（Cardinal）样条。
- [efit](../interpolation/efit)
 将值从一个范围转换到新范围的对应值。
- [fit](../interpolation/fit)
 将值从一个范围转换到新范围的对应值。
- [fit01](../interpolation/fit01)
 将范围(0,1)中的值转换到新范围的对应值。
- [fit10](../interpolation/fit10)
 将范围(1,0)中的值转换到新范围的对应值。
- [fit11](../interpolation/fit11)
 将范围(-1,1)中的值转换到新范围的对应值。
- [invlerp](../interpolation/invlerp)
 对值进行反向线性插值。
- [lerp](../interpolation/lerp)
 对值进行线性插值。
- [lkspline](../interpolation/lkspline)
 采样关键点之间的折线。
- [lspline](../interpolation/lspline)
 采样由线性间距值定义的折线。
- [slerp](../interpolation/slerp)
 基于偏置在q1和q2之间进行四元数混合。
- [slerpv](../interpolation/slerpv)
 基于偏置在两个向量之间进行球面混合。
- [smooth](../interpolation/smooth)
 计算值之间的缓入/缓出插值。

灯光

## 灯光组

- [ambient](../light/ambient)
 返回场景中环境光的颜色。
- [atten](../light/atten)
 计算衰减衰减。
- [fastshadow](../light/fastshadow)
 从位置P沿方向D发送光线。
- [filtershadow](../light/filtershadow)
 从位置P沿方向D发送光线。

数学

## 数学组

- [abs](../math/abs)
 返回参数的绝对值。
- [acos](../math/acos)
 返回参数的反余弦。
- [asin](../math/asin)
 返回参数的反正弦。
- [atan](../math/atan)
 返回参数的反正切。
- [atan2](../math/atan2)
 返回y/x的反正切。
- [avg](../math/avg)
 返回输入的平均值。
- [cbrt](../math/cbrt)
 返回参数的立方根。
- [ceil](../math/ceil)
 返回大于或等于参数的最小整数。
- [combinelocaltransform](../math/combinelocaltransform)
 将局部变换和父变换与缩放继承结合。
- [cos](../math/cos)
 返回参数的余弦。
- [cosh](../math/cosh)
 返回参数的双曲余弦。
- [cross](../math/cross)
 返回两个向量之间的叉积。
- [determinant](../math/determinant)
 计算矩阵的行列式。
- [diag](../math/diag)
 提取对角线条目或构造对角矩阵。
- [diagonalizesymmetric](../math/diagonalizesymmetric)
 对称矩阵对角化。
- [distance_pointline](../math/distance_pointline)
 返回点Q与通过O平行于向量D的无限直线之间的最近距离。
- [distance_pointray](../math/distance_pointray)
 返回点Q与从O开始沿D方向延伸的半无限射线之间的最近距离。
- [distance_pointsegment](../math/distance_pointsegment)
 返回点Q与点P0和P1之间的有限线段之间的最近距离。
- [dot](../math/dot)
 返回参数之间的点积。
- [Du](Du.html)
 返回给定值相对于U的导数。
- [Dv](Dv.html)
 返回给定值相对于V的导数。
- [Dw](Dw.html)
 返回给定值相对于第三轴（用于体积渲染）的导数。
- [eigenvalues](../math/eigenvalues)
 计算3×3矩阵的特征值。
- [erf](../math/erf)
 高斯误差函数。
- [erf_inv](../math/erf_inv)
 反高斯误差函数。
- [erfc](../math/erfc)
 高斯误差函数的补函数。
- [exp](../math/exp)
 返回参数的指数函数。
- [extractlocaltransform](../math/extractlocaltransform)
 从具有缩放继承的世界变换中提取局部变换。
- [floor](../math/floor)
 返回小于或等于参数的最大整数。
- [frac](../math/frac)
 返回浮点数的小数部分。
- [ident](../math/ident)
 返回单位矩阵。
- [invert](../math/invert)
 求矩阵的逆。
- [isfinite](../math/isfinite)
 检查值是否为正常有限数。
- [isinf](../math/isinf)
 检查值是否为正或负无穷大。
- [isnan](../math/isnan)
 检查值是否为非数字。
- [kspline](../math/kspline)
 返回沿由基和键/位置对定义的曲线的插值。
- [length](../math/length)
 返回向量的长度。
- [length2](../math/length2)
 返回向量或vector4的平方距离。
- [log](../math/log)
 返回参数的自然对数。
- [log10](../math/log10)
 返回参数的对数（以10为底）。
- [makebasis](../math/makebasis)
 给定z轴向量创建正交基。
- [max](../math/max)
- [min](../math/min)
- [norm_1](../math/norm_1)
 返回诱导矩阵1-范数。
- [norm_fro](../math/norm_fro)
 返回矩阵的Frobenius范数。
- [norm_inf](../math/norm_inf)
 返回诱导矩阵无穷范数。
- [norm_max](../math/norm_max)
 返回矩阵最大范数。
- [norm_spectral](../math/norm_spectral)
 返回矩阵谱范数。
- [normalize](../math/normalize)
 返回归一化向量。
- [outerproduct](../math/outerproduct)
 返回参数之间的外积。
- [pinvert](../math/pinvert)
 计算矩阵的伪逆。
- [planesphereintersect](../math/planesphereintersect)
 计算3D球体与无限3D平面的交点。
- [pow](../math/pow)
 将第一个参数提升到第二个参数的幂。
- [predicate_incircle](../math/predicate_incircle)
 判断点是否在三角形外接圆内或外。
- [predicate_insphere](../math/predicate_insphere)
 判断点是否在四面体外接球内或外。
- [predicate_orient2d](../math/predicate_orient2d)
 判断点相对于直线的方向。
- [predicate_orient3d](../math/predicate_orient3d)
 判断点相对于平面的方向。
- [premul](../math/premul)
 矩阵预乘。
- [product](../math/product)
 返回数字列表的乘积。
- [ptlined](../math/ptlined)
 返回点Q与点P0和P1之间的有限线段之间的最近距离。
- [qdistance](../math/qdistance)
 查找两个四元数之间的距离。
- [qinvert](../math/qinvert)
 反转四元数旋转。
- [qmultiply](../math/qmultiply)
 将两个四元数相乘并返回结果。
- [qrotate](../math/qrotate)
 用四元数旋转向量。
- [quaternion](../math/quaternion)
 创建表示四元数的vector4。
- [resample_linear](../math/resample_linear)
- [rint](../math/rint)
 将数字四舍五入到最接近的整数。
- [shl](../math/shl)
 将整数左移。
- [shr](../math/shr)
 将整数右移。
- [shrz](../math/shrz)
 将整数右移。
- [sign](../math/sign)
 根据参数的符号返回-1、0或1。
- [sin](../math/sin)
 返回参数的正弦。
- [sinh](../math/sinh)
 返回参数的双曲正弦。
- [slideframe](../math/slideframe)
 查找沿曲线滑动的帧的法线分量。
- [solvecubic](../math/solvecubic)
 求解三次函数，返回实根数量。
- [solvepoly](../math/solvepoly)
 查找多项式的实根。
- [solvequadratic](../math/solvequadratic)
 求解二次函数，返回实根数量。
- [solvetriangleSSS](solvetriangleSSS.html)
 从三角形的边查找角度。
- [spline](../math/spline)
 沿折线或样条曲线采样值。
- [spline_cdf](../math/spline_cdf)
 通过采样样条曲线生成累积分布函数（CDF）。
- [sqrt](../math/sqrt)
 返回参数的平方根。
- [sum](../math/sum)
 返回数字列表的总和。
- [svddecomp](../math/svddecomp)
 计算给定矩阵的奇异值分解。
- [tan](../math/tan)
 返回参数的三角正切。
- [tanh](../math/tanh)
 返回参数的双曲正切。
- [tr](../math/tr)
 返回给定矩阵的迹。
- [transpose](../math/transpose)
 转置给定矩阵。
- [trunc](../math/trunc)
 移除浮点数的小数部分。

测量

## 测量组

- [distance](../measure/distance)
 返回两点之间的距离。
- [distance2](../measure/distance2)
 返回两点之间的平方距离。
- [getbbox](../measure/getbbox)
 将两个向量设置为几何体边界框的最小和最大角。
- [getbbox_center](../measure/getbbox_center)
 返回几何体边界框的中心。
- [getbbox_max](../measure/getbbox_max)
 返回几何体边界框的最大值。
- [getbbox_min](../measure/getbbox_min)
 返回几何体边界框的最小值。
- [getbbox_size](../measure/getbbox_size)
 返回几何体边界框的大小。
- [getbounds](../measure/getbounds)
 返回文件名指定的几何体的边界框。
- [getpointbbox](../measure/getpointbbox)
 将两个向量设置为几何体边界框的最小和最大角。
- [getpointbbox_center](../measure/getpointbbox_center)
 返回几何体边界框的中心。
- [getpointbbox_max](../measure/getpointbbox_max)
 返回几何体边界框的最大值。
- [getpointbbox_min](../measure/getpointbbox_min)
 返回几何体边界框的最小值。
- [getpointbbox_size](../measure/getpointbbox_size)
 返回几何体边界框的大小。
- [planepointdistance](../measure/planepointdistance)
 计算点到无限平面的距离和最近点。
- [relbbox](../measure/relbbox)
 返回给定点相对于几何体边界框的相对位置。
- [relpointbbox](../measure/relpointbbox)
 返回给定点相对于几何体边界框的相对位置。
- [surfacedist](../measure/surfacedist)
 查找点到几何体表面上点群的距离。
- [uvdist](../measure/uvdist)
 查找uv坐标到几何体在uv空间中的距离。
- [windingnumber](../measure/windingnumber)
 计算网格绕点的环绕数。环绕数表示几何体绕点包裹的次数。用于内外测试，环绕数在网格内部等于1，在外部等于0。
- [windingnumber2d](../measure/windingnumber2d)
 计算XY平面中曲线绕点的环绕数。环绕数表示曲线绕点包裹的次数。用于内外测试，环绕数在曲线内部等于1，在外部等于0。
- [xyzdist](../measure/xyzdist)
 查找点到表面几何体上最近位置的距离。

元球

## 元球组

- [metaimport](../metaball/metaimport)
 使用 metastart 和 metanext 获取元球句柄后，可以通过 metaimport 查询元球的属性。
- [metamarch](../metaball/metamarch)
 接收由 p0 和 p1 定义的射线，并将其分割为零个或多个子区间，每个区间与文件名中元球簇相交。
- [metanext](../metaball/metanext)
 在 metastart() 函数返回的元球列表中迭代到下一个元球。
- [metastart](../metaball/metastart)
 打开几何文件并返回位于位置 p 处目标元球的句柄。
- [metaweight](../metaball/metaweight)
 返回几何体在位置 p 处的元权重。

节点

## 节点组

- [addvariablename](../nodes/addvariablename)
 为属性添加局部变量映射。
- [ch](../nodes/ch)
 评估通道（或参数）并返回其值。
- [ch2](../nodes/ch2)
 评估通道（或参数）并返回其值。
- [ch3](../nodes/ch3)
 评估通道（或参数）并返回其值。
- [ch4](../nodes/ch4)
 评估通道（或参数）并返回其值。
- [chdict](../nodes/chdict)
 评估键值字典参数并返回其值。
- [chexpr](../nodes/chexpr)
 使用新段表达式评估通道。
- [chexprf](../nodes/chexprf)
 在给定帧处使用新段表达式评估通道。
- [chexprt](../nodes/chexprt)
 在给定时间使用新段表达式评估通道。
- [chf](../nodes/chf)
 评估通道（或参数）并返回其值。
- [chi](../nodes/chi)
 评估通道（或参数）并返回其值。
- [chid](../nodes/chid)
 解析通道字符串（或参数）并返回 op_id、parm_index 和 vector_index。
- [chp](../nodes/chp)
 评估通道（或参数）并返回其值。
- [chramp](../nodes/chramp)
 评估斜坡参数并返回其值。
- [chrampderiv](../nodes/chrampderiv)
 评估 parm 参数相对于位置的导数。
- [chs](../nodes/chs)
 评估通道（或参数）并返回其值。
- [chsop](../nodes/chsop)
 评估操作符路径参数并返回操作符的路径。
- [chsraw](../nodes/chsraw)
 返回原始字符串通道（或参数）。
- [chu](../nodes/chu)
 评估通道或参数，并返回其值。
- [chv](../nodes/chv)
 评估通道或参数，并返回其值。
- [cregioncapturetransform](../nodes/cregioncapturetransform)
 返回与捕获区域 SOP 关联的捕获变换。
- [cregiondeformtransform](../nodes/cregiondeformtransform)
 返回与捕获区域 SOP 关联的变形变换。
- [cregionoverridetransform](../nodes/cregionoverridetransform)
 根据全局捕获覆盖标志，返回与捕获区域 SOP 关联的捕获或变形变换。
- [isconnected](../nodes/isconnected)
 如果 input_number 已连接则返回 1，如果输入未连接则返回 0。
- [opfullpath](../nodes/opfullpath)
 返回给定相对路径的完整路径
- [opid](../nodes/opid)
 解析操作符路径字符串并返回其 op_id。
- [opparentbonetransform](../nodes/opparentbonetransform)
 返回与 OP 关联的父骨骼变换。
- [opparenttransform](../nodes/opparenttransform)
 返回与 OP 关联的父变换。
- [opparmtransform](../nodes/opparmtransform)
 返回与 OP 关联的参数变换。
- [oppreconstrainttransform](../nodes/oppreconstrainttransform)
 返回与 OP 关联的预约束变换。
- [oppreparmtransform](../nodes/oppreparmtransform)
 返回与 OP 关联的预参数变换。
- [opprerawparmtransform](../nodes/opprerawparmtransform)
 返回与 OP 关联的预原始参数变换。
- [oppretransform](../nodes/oppretransform)
 返回与 OP 关联的预变换。
- [oprawparmtransform](../nodes/oprawparmtransform)
 返回与 OP 关联的原始参数变换。
- [optransform](../nodes/optransform)
 返回与 OP 关联的变换。

噪波与随机

## 噪波组

- [anoise](../noise-and-randomness/anoise)
 生成鳄鱼噪波。
- [curlgxnoise](../noise-and-randomness/curlgxnoise)
 基于单纯形噪波计算无散度噪波。
- [curlgxnoise2d](../noise-and-randomness/curlgxnoise2d)
 基于单纯形噪波在平面中计算无散度噪波。
- [curlnoise](../noise-and-randomness/curlnoise)
 基于柏林噪波计算无散度噪波。
- [curlnoise2d](../noise-and-randomness/curlnoise2d)
 基于柏林噪波计算二维无散度噪波。
- [curlxnoise](../noise-and-randomness/curlxnoise)
 基于单纯形噪波计算无散度噪波。
- [curlxnoise2d](../noise-and-randomness/curlxnoise2d)
 基于单纯形噪波计算二维无散度噪波。
- [cwnoise](../noise-and-randomness/cwnoise)
 使用切比雪夫距离度量生成沃利（细胞）噪波。
- [flownoise](../noise-and-randomness/flownoise)
 从三维和四维数据生成一维和三维柏林流噪波。
- [flowpnoise](../noise-and-randomness/flowpnoise)
 有两种形式的柏林风格噪波：一种是在N维空间中随机变化的非周期性噪波，另一种是在给定空间范围内重复的周期性噪波。
- [gxnoise](../noise-and-randomness/gxnoise)
 评估单纯形噪波场。
- [gxnoised](../noise-and-randomness/gxnoised)
 评估单纯形噪波场及其导数。
- [hscript_noise](../noise-and-randomness/hscript_noise)
 生成与Hscript noise()表达式函数输出匹配的噪波。
- [hscript_rand](../noise-and-randomness/hscript_rand)
 产生与同名Houdini表达式函数完全相同的结果。
- [hscript_snoise](../noise-and-randomness/hscript_snoise)
- [hscript_sturb](../noise-and-randomness/hscript_sturb)
- [hscript_turb](../noise-and-randomness/hscript_turb)
 生成与HScript turb()表达式函数输出匹配的湍流。
- [mwnoise](../noise-and-randomness/mwnoise)
 使用曼哈顿距离度量生成沃利（细胞）噪波。
- [mx_cellnoise](../noise-and-randomness/mx_cellnoise)
 兼容MaterialX的细胞噪波
- [mx_perlin](../noise-and-randomness/mx_perlin)
 兼容MaterialX的柏林噪波
- [mx_voronoi](../noise-and-randomness/mx_voronoi)
 兼容MaterialX的沃罗诺伊噪波
- [mx_worley](../noise-and-randomness/mx_worley)
 兼容MaterialX的沃利噪波
- [noise](../noise-and-randomness/noise)
 有两种形式的柏林风格噪波：一种是在N维空间中随机变化的非周期性噪波，另一种是在给定空间范围内重复的周期性噪波。
- [noised](../noise-and-randomness/noised)
 柏林噪波的导数。
- [nrandom](../noise-and-randomness/nrandom)
 非确定性随机数生成函数。
- [onoise](../noise-and-randomness/onoise)
 这些函数类似于wnoise和vnoise。
- [pnoise](../noise-and-randomness/pnoise)
 有两种形式的柏林风格噪波：一种是在N维空间中随机变化的非周期性噪波，另一种是在给定空间范围内重复的周期性噪波。
- [pxnoised](../noise-and-randomness/pxnoised)
 单纯形噪波的周期性导数。
- [rand](../noise-and-randomness/rand)
 根据种子创建0到1之间的随机数。
- [random](../noise-and-randomness/random)
 基于1-4D空间中的整数位置生成随机数。
- [random_brj](../noise-and-randomness/random_brj)
 生成均匀分布的随机数。
- [random_fhash](../noise-and-randomness/random_fhash)
 将浮点数哈希为整数。
- [random_ihash](../noise-and-randomness/random_ihash)
 将整数哈希为整数。
- [random_poisson](../noise-and-randomness/random_poisson)
 给定分布的均值和种子，生成随机泊松变量。
- [random_shash](../noise-and-randomness/random_shash)
 将字符串哈希为整数。
- [random_sobol](../noise-and-randomness/random_sobol)
 生成均匀分布的随机数。
- [snoise](../noise-and-randomness/snoise)
 这些函数类似于wnoise。
- [vnoise](../noise-and-randomness/vnoise)
 生成沃罗诺伊（细胞）噪波。
- [wnoise](../noise-and-randomness/wnoise)
 生成沃利（细胞）噪波。
- [xnoise](pxnoise.html)
 单纯形噪波与柏林噪波非常相似，不同之处在于样本位于单纯形网格而非网格上。这减少了网格伪影。它还使用更高阶的B样条来提供更好的导数。这是周期性单纯形噪波
- [xnoise](../noise-and-randomness/xnoise)
 单纯形噪波与柏林噪波非常相似，不同之处在于样本位于单纯形网格而非网格上。这减少了网格伪影。它还使用更高阶的B样条来提供更好的导数。
- [xnoised](../noise-and-randomness/xnoised)
 单纯形噪波的导数。

法线

## 法线组

- [computenormal](../normals/computenormal)
 在着色上下文中计算法线。在SOP上下文中，设置是否/如何重新计算法线。
- [prim_normal](../normals/prim_normal)
 返回图元(prim_number)在参数位置u,v处的法线。

Open Color IO

## OCIO组

- [ocio_activedisplays](../open-color-io/ocio_activedisplays)
 返回Open Color IO支持的活动显示名称
- [ocio_activeviews](../open-color-io/ocio_activeviews)
 返回Open Color IO支持的活动视图名称
- [ocio_import](../open-color-io/ocio_import)
 从OpenColorIO空间导入属性。
- [ocio_parsecolorspace](../open-color-io/ocio_parsecolorspace)
 从字符串解析色彩空间
- [ocio_roles](../open-color-io/ocio_roles)
 返回Open Color IO支持的角色名称
- [ocio_spaces](../open-color-io/ocio_spaces)
 返回Open Color IO支持的色彩空间名称。
- [ocio_transform](../open-color-io/ocio_transform)
 使用Open Color IO转换颜色
- [ocio_transformview](../open-color-io/ocio_transformview)
 使用Open Color IO将颜色转换为视图

粒子

## 粒子组

- [filamentsample](../particles/filamentsample)
 采样由一组涡旋丝定义的速度场。

点云与3D图像

## 点云组

- [mattrib](../point-clouds-and-3d-images/mattrib)
 如果为i3dgen指定了元球几何体，则返回元球的点属性值。
- [mdensity](../point-clouds-and-3d-images/mdensity)
 如果为i3dgen指定了元球几何体，则返回元球场的密度。
- [mspace](../point-clouds-and-3d-images/mspace)
 将指定位置转换到元球的局部空间。
- [pcclose](../point-clouds-and-3d-images/pcclose)
 此函数关闭与pcopen函数关联的句柄。
- [pccone](../point-clouds-and-3d-images/pccone)
 返回文件中指定锥体内最接近点的列表。
- [pccone_radius](../point-clouds-and-3d-images/pccone_radius)
 考虑半径后返回文件中锥体内最接近点的列表
- [pcconvex](../point-clouds-and-3d-images/pcconvex)
- [pcexport](../point-clouds-and-3d-images/pcexport)
 在pciterate或pcunshaded循环中将数据写入点云。
- [pcfarthest](../point-clouds-and-3d-images/pcfarthest)
 返回pcopen搜索中找到的最远点的距离。
- [pcfilter](../point-clouds-and-3d-images/pcfilter)
 使用简单重建过滤器过滤pcopen找到的点。
- [pcfind](../point-clouds-and-3d-images/pcfind)
 返回文件中最接近点的列表。
- [pcfind_radius](../point-clouds-and-3d-images/pcfind_radius)
 考虑半径后返回文件中最接近点的列表。
- [pcgenerate](../point-clouds-and-3d-images/pcgenerate)
 生成点云。
- [pcimport](../point-clouds-and-3d-images/pcimport)
 在pciterate或pcunshaded循环中从点云导入通道数据。
- [pcimportbyidx3](../point-clouds-and-3d-images/pcimportbyidx3)
 在pciterate或pcunshaded循环外从点云导入通道数据。
- [pcimportbyidx4](../point-clouds-and-3d-images/pcimportbyidx4)
 在pciterate或pcunshaded循环外从点云导入通道数据。
- [pcimportbyidxf](../point-clouds-and-3d-images/pcimportbyidxf)
 在pciterate或pcunshaded循环外从点云导入通道数据。
- [pcimportbyidxi](../point-clouds-and-3d-images/pcimportbyidxi)
 在pciterate或pcunshaded循环外从点云导入通道数据。
- [pcimportbyidxp](../point-clouds-and-3d-images/pcimportbyidxp)
 在pciterate或pcunshaded循环外从点云导入通道数据。
- [pcimportbyidxs](../point-clouds-and-3d-images/pcimportbyidxs)
 在pciterate或pcunshaded循环外从点云导入通道数据。
- [pcimportbyidxv](../point-clouds-and-3d-images/pcimportbyidxv)
 在pciterate或pcunshaded循环外从点云导入通道数据。
- [pciterate](../point-clouds-and-3d-images/pciterate)
 此函数可用于迭代pcopen查询中找到的所有点。
- [pcline](../point-clouds-and-3d-images/pcline)
 返回文件中无限线的最接近点列表
- [pcline_radius](../point-clouds-and-3d-images/pcline_radius)
 考虑半径后返回文件中无限线的最接近点列表
- [pcnumfound](../point-clouds-and-3d-images/pcnumfound)
 此节点返回pcopen找到的点数。
- [pcopen](../point-clouds-and-3d-images/pcopen)
 返回点云文件的句柄。
- [pcopenlod](../point-clouds-and-3d-images/pcopenlod)
 返回点云文件的句柄。
- [pcsampleleaf](../point-clouds-and-3d-images/pcsampleleaf)
 将当前迭代点更改为当前聚合点的叶子后代。
- [pcsegment](../point-clouds-and-3d-images/pcsegment)
 返回文件中线段的最接近点列表
- [pcsegment_radius](../point-clouds-and-3d-images/pcsegment_radius)
 考虑半径后返回文件中线段的最接近点列表
- [pcsize](../point-clouds-and-3d-images/pcsize)
- [pcunshaded](../point-clouds-and-3d-images/pcunshaded)
 迭代读写通道中尚未写入数据的点。
- [pcwrite](../point-clouds-and-3d-images/pcwrite)
 将数据写入点云文件。
- [pgfind](../point-clouds-and-3d-images/pgfind)
 返回文件中最接近点的列表。
- [photonmap](../point-clouds-and-3d-images/photonmap)
 从光子贴图采样颜色。
- [texture3d](../point-clouds-and-3d-images/texture3d)
 返回由P指定的位置处3D图像的值。
- [texture3dBox](texture3dBox.html)
 此函数查询指定的3D纹理贴图并返回文件的边界框信息。

采样

## 采样组

- [create_cdf](../sampling/create_cdf)
 从概率密度函数(PDF)值数组创建累积分布函数(CDF)
- [create_pdf](../sampling/create_pdf)
 从输入值数组创建概率密度函数
- [limit_sample_space](../sampling/limit_sample_space)
 以保持均匀性和范围内一致性的方式限制单位值
- [newsampler](../sampling/newsampler)
 为nextsample函数初始化采样序列
- [nextsample](../sampling/nextsample)
- [sample_cauchy](../sampling/sample_cauchy)
 采样柯西(洛伦兹)分布
- [sample_cdf](../sampling/sample_cdf)
 采样累积分布函数(CDF)
- [sample_circle_arc](../sampling/sample_circle_arc)
 给定0到1之间的均匀数，生成中心maxangle范围内的均匀单位向量2
- [sample_circle_edge_uniform](../sampling/sample_circle_edge_uniform)
 给定0到1之间的均匀数，生成均匀单位向量2
- [sample_circle_ring_uniform](../sampling/sample_circle_ring_uniform)
 给定0到1之间的均匀向量2，生成alpha < 长度 < 1的均匀向量2，其中0 < alpha < 1
- [sample_circle_slice](../sampling/sample_circle_slice)
 给定0到1之间的均匀向量2，生成长度 < 1且在中心maxangle范围内的均匀向量2
- [sample_circle_uniform](../sampling/sample_circle_uniform)
 给定0到1之间的均匀向量2，生成长度 < 1的均匀向量2
- [sample_direction_cone](../sampling/sample_direction_cone)
 给定0到1之间的均匀向量2，生成中心maxangle范围内的均匀单位向量
- [sample_direction_uniform](../sampling/sample_direction_uniform)
 给定0到1之间的均匀向量2，生成均匀单位向量
- [sample_discrete](../sampling/sample_discrete)
 给定0到1之间的均匀数，返回均匀或加权的整数
- [sample_exponential](../sampling/sample_exponential)
 采样指数分布
- [sample_geometry](../sampling/sample_geometry)
 采样场景中的几何体并返回被采样表面的着色器信息
- [sample_hemisphere](../sampling/sample_hemisphere)
 给定0到1之间的均匀向量2，生成半球内可选的偏置单位向量
- [sample_hypersphere_cone](../sampling/sample_hypersphere_cone)
 给定0到1之间的均匀向量4，生成长度 < 1且在中心maxangle范围内的均匀向量4
- [sample_hypersphere_uniform](../sampling/sample_hypersphere_uniform)
 给定0到1之间的均匀向量4，生成长度 < 1的均匀向量4
- [sample_light](../sampling/sample_light)
 在光源上采样3D位置并在该点运行光源着色器
- [sample_lognormal](../sampling/sample_lognormal)
 基于基础正态分布参数采样对数正态分布
- [sample_lognormal_by_median](../sampling/sample_lognormal_by_median)
 基于中位数和标准差采样对数正态分布
- [sample_normal](../sampling/sample_normal)
 采样正态(高斯)分布
- [sample_orientation_cone](../sampling/sample_orientation_cone)
 给定0到1之间的均匀向量，生成中心maxangle范围内的均匀单位向量4
- [sample_orientation_uniform](../sampling/sample_orientation_uniform)
 给定0到1之间的均匀向量，生成均匀单位向量4
- [sample_photon](../sampling/sample_photon)
 在光源上采样3D位置并在该点运行光源着色器
- [sample_sphere_cone](../sampling/sample_sphere_cone)
 给定0到1之间的均匀向量，生成长度 < 1且在中心maxangle范围内的均匀向量
- [sample_sphere_shell_uniform](../sampling/sample_sphere_shell_uniform)
 给定0到1之间的均匀向量，生成alpha < 长度 < 1的均匀向量，其中0 < alpha < 1
- [sample_sphere_uniform](../sampling/sample_sphere_uniform)
 给定0到1之间的均匀向量，生成长度 < 1的均匀向量
- [sampledisk](../sampling/sampledisk)
 将均匀随机样本扭曲到圆盘上
- [variance](../sampling/variance)
 计算值的平均值和方差

传感器输入

## 传感器组

- [sensor_panorama_create](../sensor-input/sensor_panorama_create)
 渲染GL场景并查询结果的传感器函数
- [sensor_panorama_getcolor](../sensor-input/sensor_panorama_getcolor)
 查询渲染GL场景的传感器函数
- [sensor_panorama_getcone](../sensor-input/sensor_panorama_getcone)
 从渲染GL场景查询平均值的传感器函数
- [sensor_panorama_getdepth](../sensor-input/sensor_panorama_getdepth)
 查询渲染GL场景的传感器函数
- [sensor_save](../sensor-input/sensor_save)
 保存渲染GL场景的传感器函数

着色与渲染

## 着色组

- [area](../shading-and-rendering/area)
 返回包含变量(如P)的微多边形的面积
- [blinnBRDF](blinnBRDF.html)
- [bouncelabel](../shading-and-rendering/bouncelabel)
- [bouncemask](../shading-and-rendering/bouncemask)
- [diffuseBRDF](diffuseBRDF.html)
- [filterstep](../shading-and-rendering/filterstep)
 返回阶跃函数的抗锯齿权重
- [fresnel](../shading-and-rendering/fresnel)
 给定入射向量、表面法线(均已归一化)和折射率(eta)，计算菲涅耳反射/折射贡献
- [frontface](../shading-and-rendering/frontface)
 如果dot(I, Nref)小于零，N将被取反
- [gather](../shading-and-rendering/gather)
 向场景发送光线并返回被光线击中的表面着色器信息
- [getblurP](getblurP.html)
 返回运动模糊曝光时间内分数时间的模糊点位置(P)向量
- [getcomponents](../shading-and-rendering/getcomponents)
- [getderiv](../shading-and-rendering/getderiv)
 评估属性的表面导数
- [getfogname](../shading-and-rendering/getfogname)
 返回当前运行着色器的对象名称
- [getglobalraylevel](../shading-and-rendering/getglobalraylevel)
 返回用于计算全局照明的光线树深度
- [getgroupid](../shading-and-rendering/getgroupid)
 返回包含当前图元的组ID
- [getlight](../shading-and-rendering/getlight)
 返回指定光源标识符的光源结构体
- [getlightid](../shading-and-rendering/getlightid)
 返回命名光源的光源ID(无效名称返回-1)
- [getlightname](../shading-and-rendering/getlightname)
 在illuminance循环内调用时返回当前光源名称，或将整数光源ID转换为光源名称
- [getlights](../shading-and-rendering/getlights)
 返回当前着色表面的光源标识符数组
- [getlightscope](../shading-and-rendering/getlightscope)
 返回照亮给定材质的光源选择
- [getlocalcurvature](../shading-and-rendering/getlocalcurvature)
 使用与Measure SOP相同的曲率评估方法评估图元网格的局部曲率
- [getmaterial](../shading-and-rendering/getmaterial)
 返回当前表面的材质结构体
- [getmaterialid](../shading-and-rendering/getmaterialid)
 返回着色图元的材质ID
- [getobjectid](../shading-and-rendering/getobjectid)
 返回当前着色上下文的对象ID
- [getobjectname](../shading-and-rendering/getobjectname)
 返回当前运行着色器的对象名称
- [getphotonlight](../shading-and-rendering/getphotonlight)
 返回用于光子着色的光源整数ID
- [getprimid](../shading-and-rendering/getprimid)
 返回当前图元的编号
- [getptextureid](../shading-and-rendering/getptextureid)
 返回当前图元的ptexture面ID
- [getraylevel](../shading-and-rendering/getraylevel)
 返回当前着色的光线树深度
- [getrayweight](../shading-and-rendering/getrayweight)
 返回光线对最终像素颜色贡献的近似值
- [getsamplestore](../shading-and-rendering/getsamplestore)
 通过点引用查找通道中的样本数据
- [getscope](../shading-and-rendering/getscope)
 返回给定材质对射线可见的对象选择
- [getsmoothP](getsmoothP.html)
 基于平滑函数返回修改后的表面位置
- [getuvtangents](../shading-and-rendering/getuvtangents)
 在任意对象上的点评估UV切线
- [gradient](../shading-and-rendering/gradient)
 返回场的梯度
- [haslight](../shading-and-rendering/haslight)
 返回光源是否照亮给定材质
- [illuminance](../shading-and-rendering/illuminance)
 循环遍历场景中的所有光源，为每个光源调用光源着色器以设置Cl和L全局变量
- [integratehoseksky](../shading-and-rendering/integratehoseksky)
 计算给定Hosek天空在水平表面上的辐照度
- [interpolate](../shading-and-rendering/interpolate)
 在当前着色的微多边形上插值
- [intersect_lights](../shading-and-rendering/intersect_lights)
 查找光线与(区域)光源列表中任何光源的最近交点，并在交点处运行光源着色器
- [irradiance](../shading-and-rendering/irradiance)
 计算点P处法线为N的辐照度(全局照明)
- [isfogray](../shading-and-rendering/isfogray)
 如果着色器被调用以评估雾对象的照明则返回1，如果光源或阴影着色器被调用以评估表面照明则返回0
- [islpeactive](../shading-and-rendering/islpeactive)
 如果启用光路表达式则返回1。否则返回0
- [israytracing](../shading-and-rendering/israytracing)
 指示着色器是否正在为光线追踪执行
- [isshadingRHS](isshadingRHS.html)
 检测默认着色空间的方向
- [isshadowray](../shading-and-rendering/isshadowray)
 如果着色器被调用以评估阴影射线的不透明度则返回1，如果着色器被调用以评估表面颜色则返回0
- [isuvrendering](../shading-and-rendering/isuvrendering)
 指示着色器是否在UV渲染(如纹理展开)期间被评估
- [lightbounces](../shading-and-rendering/lightbounces)
 返回光源结构体的反弹掩码
- [lightid](../shading-and-rendering/lightid)
 返回光源结构体的光源ID
- [lightstate](../shading-and-rendering/lightstate)
 向渲染器查询命名属性
- [limport](../shading-and-rendering/limport)
 从表面的光源着色器导入变量
- [matchvex_blinn](../shading-and-rendering/matchvex_blinn)
 返回与传统VEX blinn函数输出匹配的BSDF
- [matchvex_specular](../shading-and-rendering/matchvex_specular)
 返回与传统VEX specular函数输出匹配的BSDF
- [nbouncetypes](../shading-and-rendering/nbouncetypes)
- [objectstate](../shading-and-rendering/objectstate)
 向渲染器查询命名属性
- [occlusion](../shading-and-rendering/occlusion)
 计算环境光遮蔽
- [pathtrace](../shading-and-rendering/pathtrace)
 使用PBR计算二次反弹的全局照明
- [phongBRDF](phongBRDF.html)
- [rayhittest](../shading-and-rendering/rayhittest)
 从位置P沿方向D发送射线
- [rayimport](../shading-and-rendering/rayimport)
 导入gather循环中着色器发送的值
- [reflect](../shading-and-rendering/reflect)
 返回方向相对于法线的反射向量
- [reflectlight](../shading-and-rendering/reflectlight)
 计算击中表面的反射光量
- [refract](../shading-and-rendering/refract)
 给定入射方向、归一化法线和折射率，返回折射光线
- [refractlight](../shading-and-rendering/refractlight)
 计算被当前表面折射的表面的照明
- [renderstate](../shading-and-rendering/renderstate)
 向渲染器查询命名属性
- [resolvemissedray](../shading-and-rendering/resolvemissedray)
 返回退出场景的光线的背景颜色
- [scatter](../shading-and-rendering/scatter)
 通过几何对象的域评估散射事件
- [setcurrentlight](../shading-and-rendering/setcurrentlight)
 设置当前光源
- [setsamplestore](../shading-and-rendering/setsamplestore)
 通过点引用将样本数据存储在通道中
- [shadow](../shading-and-rendering/shadow)
 调用当前光源的阴影着色器
- [shadow_light](../shading-and-rendering/shadow_light)
 执行给定光源的阴影着色器，并将阴影量作为着色颜色的乘数返回
- [shimport](../shading-and-rendering/shimport)
 从表面的阴影着色器导入变量
- [simport](../shading-and-rendering/simport)
 导入illuminance循环中表面着色器发送的变量
- [specularBRDF](specularBRDF.html)
 返回VEX着色中使用的不同光照模型的BRDF计算结果
- [storelightexport](../shading-and-rendering/storelightexport)
 存储光源的导出数据
- [switch](../shading-and-rendering/switch)
 对直接或间接照明使用不同的bsdf
- [trace](../shading-and-rendering/trace)
 从P沿归一化向量D发送射线
- [translucent](../shading-and-rendering/translucent)
 返回朗伯半透明BSDF
- [uvunwrap](../shading-and-rendering/uvunwrap)
 计算给定(u, v)坐标处的位置和法线，用于镜头着色器
- [wireblinn](../shading-and-rendering/wireblinn)
- [wirediffuse](../shading-and-rendering/wirediffuse)
- [writepixel](../shading-and-rendering/writepixel)
 将颜色信息写入输出图像中的像素

字符串

## 字符串处理

- [abspath](../strings/abspath)
 返回文件的完整路径。
- [chr](../strings/chr)
 将Unicode码点转换为UTF8字符串。
- [concat](../strings/concat)
 连接所有指定字符串形成一个单独字符串。
- [decode](../strings/decode)
 解码先前编码过的变量名。
- [decodeattrib](../strings/decodeattrib)
 解码先前编码过的几何体属性名。
- [decodeparm](../strings/decodeparm)
 解码先前编码过的节点参数名。
- [decodeutf8](../strings/decodeutf8)
 将UTF8字符串解码为一系列码点。
- [encode](../strings/encode)
 将任意字符串编码为有效的变量名。
- [encodeattrib](../strings/encodeattrib)
 将任意字符串编码为有效的几何体属性名。
- [encodeparm](../strings/encodeparm)
 将任意字符串编码为有效的节点参数名。
- [encodeutf8](../strings/encodeutf8)
 从一系列码点编码生成UTF8字符串。
- [endswith](../strings/endswith)
 判断字符串是否以指定字符串结尾。
- [find](../strings/find)
 在数组或字符串中查找项目。
- [isalpha](../strings/isalpha)
 如果字符串中所有字符都是字母则返回1。
- [isdigit](../strings/isdigit)
 如果字符串中所有字符都是数字则返回1。
- [itoa](../strings/itoa)
 将整数转换为字符串。
- [join](../strings/join)
 连接数组中的所有字符串，并插入共同的分隔符。
- [lstrip](../strings/lstrip)
 去除字符串开头的空白字符。
- [makevalidvarname](../strings/makevalidvarname)
 强制字符串符合变量名命名规则。
- [match](../strings/match)
 如果主题匹配指定模式则返回1，否则返回0。
- [opdigits](../strings/opdigits)
 返回字符串中最后一段数字的整数值。
- [ord](../strings/ord)
 将UTF8字符串转换为码点。
- [pluralize](../strings/pluralize)
 将英文名词转换为复数形式。
- [re_find](../strings/re_find)
 在字符串中匹配正则表达式。
- [re_findall](../strings/re_findall)
 查找字符串中所有匹配给定正则表达式的实例。
- [re_match](../strings/re_match)
 如果整个输入字符串匹配表达式则返回1。
- [re_replace](../strings/re_replace)
 用regex_replace替换regex_find的实例。
- [re_split](../strings/re_split)
 基于正则表达式匹配拆分给定字符串。
- [relativepath](../strings/relativepath)
 计算两个完整路径的相对路径。
- [relpath](../strings/relpath)
 返回文件的相对路径。
- [replace](../strings/replace)
 替换子字符串的出现。
- [replace_match](../strings/replace_match)
 用另一个模式替换匹配的字符串模式。
- [rstrip](../strings/rstrip)
 去除字符串末尾的空白字符。
- [split](../strings/split)
 将字符串拆分为标记。
- [splitpath](../strings/splitpath)
 将文件路径拆分为目录和名称部分。
- [sprintf](../strings/sprintf)
 像printf一样格式化字符串，但将结果作为字符串返回而不是打印。
- [startswith](../strings/startswith)
 如果字符串以指定字符串开头则返回1。
- [strip](../strings/strip)
 去除字符串开头和末尾的空白字符。
- [strlen](../strings/strlen)
 返回字符串的长度。
- [titlecase](../strings/titlecase)
 返回输入字符串的首字母大写版本。
- [tolower](../strings/tolower)
 将字符串中所有字符转换为小写。
- [toupper](../strings/toupper)
 将字符串中所有字符转换为大写。

细分曲面

## 细分曲面组

- [osd_facecount](../subdivision-surfaces/osd_facecount)
- [osd_firstpatch](../subdivision-surfaces/osd_firstpatch)
- [osd_limitsurface](../subdivision-surfaces/osd_limitsurface)
 使用Open Subdiv在细分极限曲面上评估点属性。
- [osd_limitsurfacevertex](../subdivision-surfaces/osd_limitsurfacevertex)
 使用Open Subdiv在细分极限曲面上评估顶点属性。
- [osd_lookupface](../subdivision-surfaces/osd_lookupface)
 输出与OSD补片上给定坐标对应的Houdini面和UV坐标。
- [osd_lookuppatch](../subdivision-surfaces/osd_lookuppatch)
 输出与Houdini多边形面上给定坐标对应的OSD补片和UV坐标。
- [osd_patchcount](../subdivision-surfaces/osd_patchcount)
- [osd_patches](../subdivision-surfaces/osd_patches)
 返回细分外壳中补片的补片ID列表。

四面体

## 四面体组

- [tet_adjacent](../tetrahedrons/tet_adjacent)
 返回相邻四面体的图元编号。
- [tet_faceindex](../tetrahedrons/tet_faceindex)
 返回四面体每个面的顶点索引。

纹理

## 纹理组

- [colormap](../texturing/colormap)
 从纹理文件中查找(过滤后的)颜色。
- [depthmap](../texturing/depthmap)
 深度图函数处理从mantra渲染的z深度图像。
- [environment](../texturing/environment)
 返回环境纹理的颜色。
- [expand_udim](../texturing/expand_udim)
 执行UDIM或UVTILE纹理文件名扩展。
- [has_udim](../texturing/has_udim)
 测试字符串是否包含UDIM或UVTILE模式。
- [importance_remap](../texturing/importance_remap)
 将纹理坐标重新映射到图中的另一个坐标以优化较亮区域的采样。
- [ocean_sample](../texturing/ocean_sample)
 评估海洋频谱并在给定时间和位置采样结果。
- [ptexture](../texturing/ptexture)
 从ptex纹理贴图计算过滤样本。请改用texture函数。
- [rawcolormap](../texturing/rawcolormap)
 从纹理文件中查找未过滤的颜色。
- [shadowmap](../texturing/shadowmap)
 阴影图函数将阴影图视为从光源渲染的图像。
- [teximport](../texturing/teximport)
 从纹理文件导入属性。
- [texprintf](../texturing/texprintf)
 类似于sprintf，但执行UDIM或UVTILE纹理文件名扩展。
- [texture](../texturing/texture)
 计算指定纹理贴图的过滤样本。

变换与空间

## 变换组

- [dihedral](../transforms-and-space/dihedral)
 计算将向量a旋转到向量b的旋转矩阵或四元数。
- [fromNDC](fromNDC.html)
 将位置从标准设备坐标转换为适当空间中的坐标。
- [getpackedtransform](../transforms-and-space/getpackedtransform)
 获取打包图元的变换。
- [getspace](../transforms-and-space/getspace)
 返回从一个空间到另一个空间的变换。
- [instance](../transforms-and-space/instance)
 创建实例变换矩阵。
- [lookat](../transforms-and-space/lookat)
 计算旋转矩阵或角度，使负z轴在变换下沿向量(to-from)定向。
- [maketransform](../transforms-and-space/maketransform)
 构建3×3或4×4变换矩阵。
- [ndcdepth](../transforms-and-space/ndcdepth)
 返回NDC z深度值对应的相机空间z深度。
- [ntransform](../transforms-and-space/ntransform)
 变换法线向量。
- [orthographic](../transforms-and-space/orthographic)
 创建正交投影矩阵。
- [ow_nspace](../transforms-and-space/ow_nspace)
 将法线向量从对象空间变换到世界空间。
- [ow_space](../transforms-and-space/ow_space)
 将位置值从对象空间变换到世界空间。
- [ow_vspace](../transforms-and-space/ow_vspace)
 将方向向量从对象空间变换到世界空间。
- [packedtransform](../transforms-and-space/packedtransform)
 变换打包图元。
- [perspective](../transforms-and-space/perspective)
 创建透视投影矩阵。
- [polardecomp](../transforms-and-space/polardecomp)
 计算矩阵的极分解。
- [prerotate](../transforms-and-space/prerotate)
 对给定矩阵应用预旋转。
- [prescale](../transforms-and-space/prescale)
 同时在三个方向(X,Y,Z - 由scale_vector的分量给出)上预缩放给定矩阵。
- [pretranslate](../transforms-and-space/pretranslate)
 用向量预平移矩阵。
- [ptransform](../transforms-and-space/ptransform)
 将向量从一个空间变换到另一个空间。
- [rotate](../transforms-and-space/rotate)
 对给定矩阵应用旋转。
- [rotate_x_to](../transforms-and-space/rotate_x_to)
 通过将x轴旋转到给定方向的旋转来旋转向量。
- [scale](../transforms-and-space/scale)
 同时在三个方向(X,Y,Z - 由scale_vector的分量给出)上缩放给定矩阵。
- [setpackedtransform](../transforms-and-space/setpackedtransform)
 设置打包图元的变换。
- [smoothrotation](../transforms-and-space/smoothrotation)
 返回与参考旋转最接近的等效欧拉旋转。
- [solveconstraint](../transforms-and-space/solveconstraint)
 对骨架应用逆运动学算法。
- [solvecurve](../transforms-and-space/solvecurve)
 对骨架应用曲线逆运动学算法。
- [solvefbik](../transforms-and-space/solvefbik)
 对骨架应用全身逆运动学算法。
- [solveik](../transforms-and-space/solveik)
 对骨架应用逆运动学算法。
- [solvephysfbik](../transforms-and-space/solvephysfbik)
 对骨架应用全身逆运动学算法，可选择控制质心。
- [toNDC](toNDC.html)
 将位置变换为标准设备坐标。
- [translate](../transforms-and-space/translate)
 用向量平移矩阵。
- [tw_nspace](../transforms-and-space/tw_nspace)
 将法线向量从纹理空间变换到世界空间。
- [tw_space](../transforms-and-space/tw_space)
 将位置值从纹理空间变换到世界空间。
- [tw_vspace](../transforms-and-space/tw_vspace)
 将方向向量从纹理空间变换到世界空间。
- [vtransform](../transforms-and-space/vtransform)
 变换方向向量。
- [wo_nspace](../transforms-and-space/wo_nspace)
 将法线向量从世界空间变换到对象空间。
- [wo_space](../transforms-and-space/wo_space)
 将位置值从世界空间变换到对象空间。
- [wo_vspace](../transforms-and-space/wo_vspace)
 将方向向量从世界空间变换到对象空间。
- [wt_nspace](../transforms-and-space/wt_nspace)
 将法线向量从世界空间变换到纹理空间。
- [wt_space](../transforms-and-space/wt_space)
 将位置值从世界空间变换到纹理空间。
- [wt_vspace](../transforms-and-space/wt_vspace)
 将方向向量从世界空间变换到纹理空间。

USD

## USD组

- [usd_addattrib](../usd/usd_addattrib)
 在基元上创建指定类型的属性。
- [usd_addcollectionexclude](../usd/usd_addcollectionexclude)
 从集合中排除对象。
- [usd_addcollectioninclude](../usd/usd_addcollectioninclude)
 将对象包含到集合中。
- [usd_addinversetotransformorder](../usd/usd_addinversetotransformorder)
 向基元的变换顺序添加反向变换操作。
- [usd_addorient](../usd/usd_addorient)
 向基元应用四元数方向。
- [usd_addprim](../usd/usd_addprim)
 创建指定类型的基元。
- [usd_addprimvar](../usd/usd_addprimvar)
 在基元上创建指定类型的primvar。
- [usd_addrelationshiptarget](../usd/usd_addrelationshiptarget)
 向基元的关系添加目标。
- [usd_addrotate](../usd/usd_addrotate)
 向基元应用旋转。
- [usd_addscale](../usd/usd_addscale)
 向基元应用缩放。
- [usd_addschemaattrib](../usd/usd_addschemaattrib)
 在基元上创建指定类型的属性，并将自定义元数据标志设为False。
- [usd_addtotransformorder](../usd/usd_addtotransformorder)
 向基元的变换顺序添加变换操作。
- [usd_addtransform](../usd/usd_addtransform)
 向基元应用变换。
- [usd_addtranslate](../usd/usd_addtranslate)
 向基元应用平移。
- [usd_applyapi](../usd/usd_applyapi)
 向基元应用API模式。
- [usd_attrib](../usd/usd_attrib)
 从USD基元读取属性值。
- [usd_attribelement](../usd/usd_attribelement)
 从数组属性中读取元素值。
- [usd_attriblen](../usd/usd_attriblen)
 返回数组属性的长度。
- [usd_attribnames](../usd/usd_attribnames)
 返回基元上可用的属性名称。
- [usd_attribsize](../usd/usd_attribsize)
 返回属性的元组大小。
- [usd_attribtimesamples](../usd/usd_attribtimesamples)
 返回属性值被编写时的时间码。
- [usd_attribtypename](../usd/usd_attribtypename)
 返回属性类型的名称。
- [usd_blockattrib](../usd/usd_blockattrib)
 阻塞属性。
- [usd_blockprimvar](../usd/usd_blockprimvar)
 阻塞primvar。
- [usd_blockprimvarindices](../usd/usd_blockprimvarindices)
 阻塞primvar。
- [usd_blockrelationship](../usd/usd_blockrelationship)
 阻塞基元的关系。
- [usd_boundmaterialpath](../usd/usd_boundmaterialpath)
 返回绑定到给定基元的材质路径。
- [usd_childnames](../usd/usd_childnames)
 返回基元的子级名称。
- [usd_clearmetadata](../usd/usd_clearmetadata)
 清除元数据的值。
- [usd_cleartransformorder](../usd/usd_cleartransformorder)
 清除基元的变换顺序。
- [usd_collectioncomputedpaths](../usd/usd_collectioncomputedpaths)
 获取属于集合的所有对象列表。
- [usd_collectioncontains](../usd/usd_collectioncontains)
 检查对象路径是否属于集合。
- [usd_collectionexcludes](../usd/usd_collectionexcludes)
 获取集合排除列表中的对象路径。
- [usd_collectionexpansionrule](../usd/usd_collectionexpansionrule)
 获取集合的扩展规则。
- [usd_collectionincludes](../usd/usd_collectionincludes)
 获取集合包含列表中的对象路径。
- [usd_drawmode](../usd/usd_drawmode)
 返回基元的绘制模式。
- [usd_findtransformname](../usd/usd_findtransformname)
 根据变换操作后缀返回基元变换操作的完整名称。
- [usd_flattenediprimvar](../usd/usd_flattenediprimvar)
 直接从USD基元或其祖先读取扁平化primvar的值。
- [usd_flattenediprimvarelement](../usd/usd_flattenediprimvarelement)
 直接从USD基元或其祖先读取扁平化数组primvar的元素值。
- [usd_flattenedprimvar](../usd/usd_flattenedprimvar)
 直接从USD基元读取扁平化primvar的值。
- [usd_flattenedprimvarelement](../usd/usd_flattenedprimvarelement)
 直接从USD基元读取扁平化数组primvar的元素值。
- [usd_getbbox](../usd/usd_getbbox)
 将两个向量设置为基元边界框的最小和最大角。
- [usd_getbbox_center](../usd/usd_getbbox_center)
 返回基元边界框的中心。
- [usd_getbbox_max](../usd/usd_getbbox_max)
 返回基元边界框的最大值。
- [usd_getbbox_min](../usd/usd_getbbox_min)
 返回基元边界框的最小值。
- [usd_getbbox_size](../usd/usd_getbbox_size)
 返回基元边界框的大小。
- [usd_getbounds](../usd/usd_getbounds)
 获取基元的边界。
- [usd_getpointinstancebounds](../usd/usd_getpointinstancebounds)
 获取基元的边界。
- [usd_hasapi](../usd/usd_hasapi)
 检查基元是否遵循给定的API。
- [usd_haspayload](../usd/usd_haspayload)
 检查基元是否遵循给定的API。
- [usd_iprimvar](../usd/usd_iprimvar)
 直接从USD基元或其祖先读取primvar的值。
- [usd_iprimvarelement](../usd/usd_iprimvarelement)
 直接从USD基元或其祖先读取数组primvar的元素值。
- [usd_iprimvarelementsize](../usd/usd_iprimvarelementsize)
 直接从USD基元或其祖先返回primvar的元素大小。
- [usd_iprimvarindices](../usd/usd_iprimvarindices)
 直接在USD基元或其祖先上返回索引primvar的索引数组。
- [usd_iprimvarinterpolation](../usd/usd_iprimvarinterpolation)
 直接在USD基元或其祖先上返回primvar的元素大小。
- [usd_iprimvarlen](../usd/usd_iprimvarlen)
 直接在USD基元或其祖先上返回数组primvar的长度。
- [usd_iprimvarnames](../usd/usd_iprimvarnames)
 返回给定USD基元或其祖先上可用的primvar名称。
- [usd_iprimvarsize](../usd/usd_iprimvarsize)
 直接在USD基元或其祖先上返回primvar的元组大小。
- [usd_iprimvartimesamples](../usd/usd_iprimvartimesamples)
 返回给定基元或其祖先上primvar值被编写时的时间码。
- [usd_iprimvartypename](../usd/usd_iprimvartypename)
 返回给定基元或其祖先上找到的primvar类型的名称。
- [usd_isabstract](../usd/usd_isabstract)
 检查基元是否为抽象。
- [usd_isactive](../usd/usd_isactive)
 检查基元是否处于活动状态。
- [usd_isarray](../usd/usd_isarray)
 检查属性是否为数组。
- [usd_isarrayiprimvar](../usd/usd_isarrayiprimvar)
 检查USD基元或其祖先上是否存在数组primvar。
- [usd_isarraymetadata](../usd/usd_isarraymetadata)
 检查给定的元数据是否为数组。
- [usd_isarrayprimvar](../usd/usd_isarrayprimvar)
 检查USD基元上是否存在数组primvar。
- [usd_isattrib](../usd/usd_isattrib)
 检查基元是否具有给定名称的属性。
- [usd_iscollection](../usd/usd_iscollection)
 检查集合是否存在。
- [usd_iscollectionpath](../usd/usd_iscollectionpath)
 检查路径是否为有效的集合路径。
- [usd_isindexediprimvar](../usd/usd_isindexediprimvar)
 检查USD基元或其祖先上是否存在索引primvar。
- [usd_isindexedprimvar](../usd/usd_isindexedprimvar)
 检查USD基元上是否存在索引primvar。
- [usd_isinstance](../usd/usd_isinstance)
 检查基元是否为实例。
- [usd_isiprimvar](../usd/usd_isiprimvar)
 检查基元或其祖先是否具有给定名称的primvar。
- [usd_iskind](../usd/usd_iskind)
 检查基元是否为给定种类。
- [usd_ismetadata](../usd/usd_ismetadata)
 检查基元是否具有给定名称的元数据。
- [usd_ismodel](../usd/usd_ismodel)
 检查基元是否为模型。
- [usd_isprim](../usd/usd_isprim)
 检查路径是否引用有效的基元。
- [usd_isprimvar](../usd/usd_isprimvar)
 检查基元是否具有给定名称的primvar。
- [usd_isrelationship](../usd/usd_isrelationship)
 检查基元是否具有给定名称的关系。
- [usd_isstage](../usd/usd_isstage)
 检查阶段是否有效。
- [usd_istransformreset](../usd/usd_istransformreset)
 检查基元变换是否重置。
- [usd_istype](../usd/usd_istype)
 检查基元是否为给定类型。
- [usd_isvisible](../usd/usd_isvisible)
 检查基元是否可见。
- [usd_kind](../usd/usd_kind)
 返回基元的种类。
- [usd_localtransform](../usd/usd_localtransform)
 获取基元的局部变换。
- [usd_makeattribpath](../usd/usd_makeattribpath)
 从基元路径和属性名称构造属性路径。
- [usd_makecollectionpath](../usd/usd_makecollectionpath)
 从基元路径和集合名称构造集合路径。
- [usd_makepropertypath](../usd/usd_makepropertypath)
 从基元路径和属性名称构造属性路径。
- [usd_makerelationshippath](../usd/usd_makerelationshippath)
 从基元路径和关系名称构造关系路径。
- [usd_makevalidprimname](../usd/usd_makevalidprimname)
 强制字符串符合USD基元命名规则。
- [usd_makevalidprimpath](../usd/usd_makevalidprimpath)
 强制字符串符合USD基元路径规则。
- [usd_metadata](../usd/usd_metadata)
 从USD对象读取元数据值。
- [usd_metadataelement](../usd/usd_metadataelement)
 从数组元数据中读取元素值。
- [usd_metadatalen](../usd/usd_metadatalen)
 返回数组元数据的长度。
- [usd_metadatanames](../usd/usd_metadatanames)
 返回对象上可用的元数据名称。
- [usd_name](../usd/usd_name)
 返回基元的名称。
- [usd_parentpath](../usd/usd_parentpath)
 返回基元父级的路径。
- [usd_pointinstance_getbbox](../usd/usd_pointinstance_getbbox)
 将两个向量设置为点实例化器中给定实例的边界框的最小和最大角。
- [usd_pointinstance_getbbox_center](../usd/usd_pointinstance_getbbox_center)
 返回点实例化器基元中实例的边界框中心。
- [usd_pointinstance_getbbox_max](../usd/usd_pointinstance_getbbox_max)
 返回点实例化器基元中实例的边界框最大位置。
- [usd_pointinstance_getbbox_min](../usd/usd_pointinstance_getbbox_min)
 返回点实例化器基元中实例的边界框最小位置。
- [usd_pointinstance_getbbox_size](../usd/usd_pointinstance_getbbox_size)
 返回点实例化器基元中实例的边界框大小。
- [usd_pointinstance_relbbox](../usd/usd_pointinstance_relbbox)
 返回给定点相对于几何体边界框的相对位置。
- [usd_pointinstancetransform](../usd/usd_pointinstancetransform)
 获取给定点实例的变换。
- [usd_primvar](../usd/usd_primvar)
 直接从USD基元读取primvar的值。
- [usd_primvarattribname](../usd/usd_primvarattribname)
 返回给定primvar的命名空间属性名称。
- [usd_primvarelement](../usd/usd_primvarelement)
 直接从USD基元读取数组primvar的元素值。
- [usd_primvarelementsize](../usd/usd_primvarelementsize)
 直接从USD基元返回primvar的元素大小。
- [usd_primvarindices](../usd/usd_primvarindices)
 直接在USD基元上返回索引primvar的索引数组。
- [usd_primvarinterpolation](../usd/usd_primvarinterpolation)
 直接在USD基元上返回primvar的元素大小。
- [usd_primvarlen](../usd/usd_primvarlen)
 直接在USD基元上返回数组primvar的长度。
- [usd_primvarnames](../usd/usd_primvarnames)
 返回给定USD基元上可用的primvar名称。
- [usd_primvarsize](../usd/usd_primvarsize)
 直接在USD基元上返回primvar的元组大小。
- [usd_primvartimesamples](../usd/usd_primvartimesamples)
 返回给定基元上primvar值被编写时的时间码。
- [usd_primvartypename](../usd/usd_primvartypename)
 返回给定基元上找到的primvar类型的名称。
- [usd_purpose](../usd/usd_purpose)
 返回基元的用途。
- [usd_relationshipforwardedtargets](../usd/usd_relationshipforwardedtargets)
 获取关系转发目标。
- [usd_relationshipnames](../usd/usd_relationshipnames)
 返回基元上可用的关系名称。
- [usd_relationshiptargets](../usd/usd_relationshiptargets)
 获取关系目标。
- [usd_relbbox](../usd/usd_relbbox)
 返回给定点相对于几何体边界框的相对位置。
- [usd_removerelationshiptarget](../usd/usd_removerelationshiptarget)
 从基元的关系中移除目标。
- [usd_setactive](../usd/usd_setactive)
 设置基元的活动状态。
- [usd_setattrib](../usd/usd_setattrib)
 设置属性值。
- [usd_setattribelement](../usd/usd_setattribelement)
 设置数组属性中的元素值。
- [usd_setcollectionexcludes](../usd/usd_setcollectionexcludes)
 设置集合的排除列表。
- [usd_setcollectionexpansionrule](../usd/usd_setcollectionexpansionrule)
 设置集合的扩展规则。
- [usd_setcollectionincludes](../usd/usd_setcollectionincludes)
 设置集合的包含列表。
- [usd_setdrawmode](../usd/usd_setdrawmode)
 设置基元的绘制模式。
- [usd_setkind](../usd/usd_setkind)
 设置基元的种类。
- [usd_setmetadata](../usd/usd_setmetadata)
 设置元数据值。
- [usd_setmetadataelement](../usd/usd_setmetadataelement)
 设置数组元数据中的元素值。
- [usd_setprimvar](../usd/usd_setprimvar)
 设置primvar值。
- [usd_setprimvarelement](../usd/usd_setprimvarelement)
 设置数组primvar中的元素值。
- [usd_setprimvarelementsize](../usd/usd_setprimvarelementsize)
 设置primvar的元素大小。
- [usd_setprimvarindices](../usd/usd_setprimvarindices)
 设置给定primvar的索引。
- [usd_setprimvarinterpolation](../usd/usd_setprimvarinterpolation)
 设置primvar的插值。
- [usd_setpurpose](../usd/usd_setpurpose)
 设置基元的用途。
- [usd_setrelationshiptargets](../usd/usd_setrelationshiptargets)
 设置基元关系中的目标。
- [usd_settransformorder](../usd/usd_settransformorder)
 设置基元的变换顺序。
- [usd_settransformreset](../usd/usd_settransformreset)
 设置/清除基元的变换重置标志。
- [usd_setvariantselection](../usd/usd_setvariantselection)
 在给定的变体集中设置选定的变体。
- [usd_setvisibility](../usd/usd_setvisibility)
 配置基元为可见、不可见或继承父级的可见性。
- [usd_setvisible](../usd/usd_setvisible)
 使基元可见或不可见。
- [usd_specifier](../usd/usd_specifier)
 返回基元的说明符。
- [usd_transformname](../usd/usd_transformname)
 构造变换操作的完整名称。
- [usd_transformorder](../usd/usd_transformorder)
 获取基元的变换顺序。
- [usd_transformsuffix](../usd/usd_transformsuffix)
 从完整名称中提取变换操作后缀。
- [usd_transformtype](../usd/usd_transformtype)
 从完整名称推断变换操作类型。
- [usd_typename](../usd/usd_typename)
 返回基元类型的名称。
- [usd_uniquetransformname](../usd/usd_uniquetransformname)
 构造变换操作的唯一完整名称。
- [usd_variants](../usd/usd_variants)
 返回给定基元上某个变体集所包含的变体。
- [usd_variantselection](../usd/usd_variantselection)
 返回当前在指定变体集中选中的变体。
- [usd_variantsets](../usd/usd_variantsets)
 返回某个基元上可用的变体集。
- [usd_worldtransform](../usd/usd_worldtransform)
 获取基元的世界变换（world transform）。

## utility_group（实用工具组）

- [assert_enabled](../utility/assert_enabled)
 如果启用了VEX断言（参见HOUDINI_VEX_ASSERT）则返回1，否则返回0。用于实现assert宏。
- [assign](../utility/assign)
 一种高效提取向量或矩阵分量到浮点变量的方法。
- [error](../utility/error)
 报告自定义的运行时VEX错误。
- [forpoints](../utility/forpoints)
- [getcomp](../utility/getcomp)
 提取向量类型、矩阵类型或数组的单个分量。
- [isbound](../utility/isbound)
 VEX中的参数可以被几何体属性覆盖（如果渲染的表面存在这些属性）。
- [isvarying](../utility/isvarying)
 检查VEX变量是变化的还是统一的。
- [opend](../utility/opend)
 结束一个长时间操作。
- [opstart](../utility/opstart)
 开始一个长时间操作。
- [pack_inttosafefloat](../utility/pack_inttosafefloat)
 可逆地将整数打包成有限的非规格化浮点数。
- [print_once](../utility/print_once)
 仅打印一次消息，即使在循环中也是如此。
- [printf](../utility/printf)
 将值打印到启动VEX程序的控制台。
- [ramp_lookup](../utility/ramp_lookup)
 在特定位置评估Houdini风格的渐变。
- [ramp_pack](../utility/ramp_pack)
 将一组数组打包成字符串编码的渐变。
- [ramp_unpack](../utility/ramp_unpack)
 将字符串编码的渐变解包为一组数组。
- [select](../utility/select)
 根据条件返回两个参数中的一个。
- [set](../utility/set)
 根据其参数创建一个新值，例如从其分量创建向量。
- [setcomp](../utility/setcomp)
 设置向量或矩阵类型的单个分量，或数组中的项。
- [sleep](../utility/sleep)
 让出处理一定毫秒数。
- [swizzle](../utility/swizzle)
 重新排列向量的分量。
- [unpack_intfromsafefloat](../utility/unpack_intfromsafefloat)
 反转pack_inttosafefloat的打包以获取原始整数。
- [warning](../utility/warning)
 报告自定义的运行时VEX警告。

volume（体积）

## volume_group（体积组）

- [volume](../volume/volume)
 返回包含变量（如P）的微体素的体积。
- [volumecubicsample](../volume/volumecubicsample)
 采样体积图元的浮点值。
- [volumecubicsamplev](../volume/volumecubicsamplev)
 采样体积图元的向量值。
- [volumegradient](../volume/volumegradient)
 计算体积图元的梯度。
- [volumeindex](../volume/volumeindex)
 获取特定体素的值。
- [volumeindexactive](../volume/volumeindexactive)
 获取特定体素的活动设置。
- [volumeindexi](../volume/volumeindexi)
 获取特定体素的整数值。
- [volumeindexorigin](../volume/volumeindexorigin)
 获取体积图元左下角的索引。
- [volumeindexp](../volume/volumeindexp)
 获取特定体素的vector4值。
- [volumeindextopos](../volume/volumeindextopos)
 将体积体素索引转换为位置。
- [volumeindexu](../volume/volumeindexu)
 获取特定体素的vector2值。
- [volumeindexv](../volume/volumeindexv)
 获取特定体素的向量值。
- [volumepostoindex](../volume/volumepostoindex)
 将位置转换为体积体素索引。
- [volumeres](../volume/volumeres)
 获取体积图元的分辨率。
- [volumesample](../volume/volumesample)
 采样体积图元的浮点值。
- [volumesamplei](../volume/volumesamplei)
 采样体积图元的整数值。
- [volumesamplep](../volume/volumesamplep)
 采样体积图元的vector4值。
- [volumesampleu](../volume/volumesampleu)
 采样体积图元的vector2值。
- [volumesamplev](../volume/volumesamplev)
 采样体积图元的向量值。
- [volumesmoothsample](../volume/volumesmoothsample)
 平滑采样体积图元的值。
- [volumesmoothsamplev](../volume/volumesmoothsamplev)
 平滑采样体积图元的向量值。
- [volumetypeid](../volume/volumetypeid)
 获取体积或VDB图元数据的类型ID。
- [volumevoxeldiameter](../volume/volumevoxeldiameter)
 计算体素的近似直径。

weightarray（权重数组）

## weightarray_group（权重数组组）

- [weightarrayblend](../weightarray/weightarrayblend)
 将现有的名称/权重数组对与另一个数组或命名项混合。
- [weightarrayfromname](../weightarray/weightarrayfromname)
 使用单个命名项初始化索引数组和权重数组对。
- [weightarraynormalize](../weightarray/weightarraynormalize)
 归一化浮点数组使其总和为1.0。
- [weightarraythreshold](../weightarray/weightarraythreshold)
 从名称/权重数组对中丢弃低于阈值的权重。
