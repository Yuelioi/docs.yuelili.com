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
  从通道图元销毁现有关键帧。
- [chprim_end](../channel-primitives/chprim_end)
  获取通道图元的结束时间。
- [chprim_eval](../channel-primitives/chprim_eval)
  在给定时间评估通道图元。
- [chprim_insertkey](chprim_insertkey
