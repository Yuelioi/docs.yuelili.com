---
title: vex functions
order: 1
---

请参阅[VEX上下文](../contexts/index.html "编写VEX程序的不同上下文指南")了解各种函数和[语句](../statement.html)可用的不同上下文（如表面着色器或置换着色器）。

函数

## 子主题

数组

## array_group

- [append](append.html)
  向数组或字符串添加项。
- [argsort](argsort.html)
  返回数组排序后的索引。
- [array](array.html)
  高效地从参数创建数组。
- [foreach](foreach.html)
  遍历数组中的项，可选枚举。
- [insert](insert.html)
  向数组或字符串插入项、数组或字符串。
- [isvalidindex](isvalidindex.html)
  检查给定索引对数组或字符串是否有效。
- [len](len.html)
  返回数组长度。
- [pop](pop.html)
  移除数组最后一个元素并返回。
- [push](push.html)
  向数组添加项。
- [removeindex](removeindex.html)
  从数组中移除指定索引的项。
- [removevalue](removevalue.html)
  从数组中移除项。
- [reorder](reorder.html)
  重排数组或字符串中的项。
- [resize](resize.html)
  设置数组长度。
- [reverse](reverse.html)
  返回数组或字符串的逆序。
- [slice](slice.html)
  切片字符串或数组的子串或子数组。
- [sort](sort.html)
  返回按升序排序的数组。
- [upush](upush.html)
  向数组添加统一项。

属性和内禀属性

## attrib_group

- [addattrib](addattrib.html)
  向几何体添加属性。
- [adddetailattrib](adddetailattrib.html)
  向几何体添加细节属性。
- [addpointattrib](addpointattrib.html)
  向几何体添加点属性。
- [addprimattrib](addprimattrib.html)
  向几何体添加图元属性。
- [addvertexattrib](addvertexattrib.html)
  向几何体添加顶点属性。
- [addvisualizer](addvisualizer.html)
  追加到几何体的可视化器细节属性。
- [attrib](attrib.html)
  从几何体读取属性值。
- [attribclass](attribclass.html)
  返回几何体属性的类别。
- [attribdataid](attribdataid.html)
  返回几何体属性的数据ID。
- [attribsize](attribsize.html)
  返回几何体属性的大小。
- [attribtype](attribtype.html)
  返回几何体属性的类型。
- [attribtypeinfo](attribtypeinfo.html)
  返回几何体属性的变换元数据。
- [curvearclen](curvearclen.html)
  使用参数化uv坐标评估由点数组定义的图元上的弧长。
- [detail](detail.html)
  从几何体读取细节属性值。
- [detailattrib](detailattrib.html)
  从几何体读取细节属性值。
- [detailattribsize](detailattribsize.html)
  返回几何体细节属性的大小。
- [detailattribtype](detailattribtype.html)
  返回几何体细节属性的类型。
- [detailattribtypeinfo](detailattribtypeinfo.html)
  返回几何体属性的类型信息。
- [detailintrinsic](detailintrinsic.html)
  从几何体读取细节内禀属性。
- [findattribval](findattribval.html)
  查找具有特定属性值的图元/点/顶点。
- [findattribvalcount](findattribvalcount.html)
  返回整数或字符串属性具有特定值的元素数量。
- [getattrib](getattrib.html)
  从几何体读取属性值，带有效性检查。
- [getattribute](getattribute.html)
  将几何体属性值复制到变量并返回成功标志。
- [hasattrib](hasattrib.html)
  检查几何体属性是否存在。
- [hasdetailattrib](hasdetailattrib.html)
  返回几何体细节属性是否存在。
- [haspointattrib](haspointattrib.html)
  返回几何体点属性是否存在。
- [hasprimattrib](hasprimattrib.html)
  返回几何体图元属性是否存在。
- [hasvertexattrib](hasvertexattrib.html)
  返回几何体顶点属性是否存在。
- [idtopoint](idtopoint.html)
  通过id属性查找点。
- [idtoprim](idtoprim.html)
  通过id属性查找图元。
- [nametopoint](nametopoint.html)
  通过名称属性查找点。
- [nametoprim](nametoprim.html)
  通过名称属性查找图元。
- [nuniqueval](nuniqueval.html)
  返回整数或字符串属性的唯一值数量。
- [point](point.html)
  从几何体读取点属性值。
- [pointattrib](pointattrib.html)
  从几何体读取点属性值并输出成功/失败标志。
- [pointattribsize](pointattribsize.html)
  返回几何体点属性的大小。
- [pointattribtype](pointattribtype.html)
  返回几何体点属性的类型。
- [pointattribtypeinfo](pointattribtypeinfo.html)
  返回几何体属性的类型信息。
- [pointlocaltransforms](pointlocaltransforms.html)
  从点索引数组返回点局部变换数组。
- [pointtransform](pointtransform.html)
  从点索引返回点变换。
- [pointtransformrigid](pointtransformrigid.html)
  从点索引返回刚体点变换。
- [pointtransforms](pointtransforms.html)
  从点索引数组返回点变换数组。
- [pointtransformsrigid](pointtransformsrigid.html)
  从点索引数组返回刚体点变换数组。
- [prim](prim.html)
  从几何体读取图元属性值。
- [prim_attribute](prim_attribute.html)
  在特定参数化(u, v)位置插值属性值并复制到变量。
- [primarclen](primarclen.html)
  使用参数化uv坐标评估图元上的弧长。
- [primattrib](primattrib.html)
  从几何体读取图元属性值，输出成功标志。
- [primattribsize](primattribsize.html)
  返回几何体图元属性的大小。
- [primattribtype](primattribtype.html)
  返回几何体图元属性的类型。
- [primattribtypeinfo](primattribtypeinfo.html)
  返回几何体属性的类型信息。
- [primduv](primduv.html)
  返回图元在特定参数化(u, v)位置的导数。
- [priminteriorweights](priminteriorweights.html)
  给定UVW坐标，找到将计算内部点的顶点索引和权重。
- [primintrinsic](primintrinsic.html)
  从几何体读取图元内禀属性。
- [primuv](primuv.html)
  在特定参数化(uvw)位置插值属性值。
- [primuvconvert](primuvconvert.html)
  在曲线图元上转换参数化UV位置到不同空间。
- [removedetailattrib](removedetailattrib.html)
  从几何体移除细节属性。
- [removepointattrib](removepointattrib.html)
  从几何体移除点属性。
- [removepointgroup](removepointgroup.html)
  从几何体移除点组。
- [removeprimattrib](removeprimattrib.html)
  从几何体移除图元属性。
- [removeprimgroup](removeprimgroup.html)
  从几何体移除图元组。
- [removevertexattrib](removevertexattrib.html)
  从几何体移除顶点属性。
- [removevertexgroup](removevertexgroup.html)
  从几何体移除顶点组。
- [setattrib](setattrib.html)
  向几何体写入属性值。
- [setattribtypeinfo](setattribtypeinfo.html)
  设置几何体中属性的含义。
- [setdetailattrib](setdetailattrib.html)
  设置几何体中的细节属性。
- [setdetailintrinsic](setdetailintrinsic.html)
  设置可写细节内禀属性的值。
- [setpointattrib](setpointattrib.html)
  设置几何体中的点属性。
- [setpointlocaltransforms](setpointlocaltransforms.html)
  在给定点索引处设置点局部变换数组。
- [setpointtransform](setpointtransform.html)
  设置给定点的世界空间变换。
- [setpointtransforms](setpointtransforms.html)
  在给定点索引处设置点变换数组。
- [setprimattrib](setprimattrib.html)
  设置几何体中的图元属性。
- [setprimintrinsic](setprimintrinsic.html)
  设置可写图元内禀属性的值。
- [setvertexattrib](setvertexattrib.html)
  设置几何体中的顶点属性。
- [uniqueval](uniqueval.html)
  返回int或string属性所有值中的唯一值之一。
- [uniquevals](uniquevals.html)
  返回int或string属性所有值的唯一值集合。
- [uvsample](uvsample.html)
  使用UV属性在特定UV坐标处插值属性值。
- [vertex](vertex.html)
  从几何体读取顶点属性值。
- [vertexattrib](vertexattrib.html)
  从几何体读取顶点属性值。
- [vertexattribsize](vertexattribsize.html)
  返回几何体顶点属性的大小。
- [vertexattribtype](vertexattribtype.html)
  返回几何体顶点属性的类型。
- [vertexattribtypeinfo](vertexattribtypeinfo.html)
  返回几何体属性的类型信息。

BSDFs

## bsdf_group

- [albedo](albedo.html)
  给定出射光方向，返回BSDF的反照率（反射光百分比）。
- [ashikhmin](ashikhmin.html)
  使用Ashikhmin着色模型返回镜面BSDF。
- [blinn](blinn.html)
  返回Blinn BSDF或计算Blinn着色。
- [chiang](chiang.html)
  返回chiang BSDF。
- [chiang_fur](chiang_fur.html)
  返回chiang_fur BSDF。
- [cone](cone.html)
  返回锥形反射BSDF。
- [cvex_bsdf](cvex_bsdf.html)
  从两个CVEX着色器字符串创建bsdf对象。
- [diffuse](diffuse.html)
  返回漫反射BSDF或计算漫反射着色。
- [eval_bsdf](eval_bsdf.html)
  给定两个向量，评估bsdf。
- [getbounces](getbounces.html)
- [ggx](ggx.html)
  返回ggx BSDF。
- [hair](hair.html)
  返回用于头发着色的BSDF。
- [henyeygreenstein](henyeygreenstein.html)
  返回各向异性体积BSDF，可以向前或向后散射光。
- [isotropic](isotropic.html)
  返回各向同性BSDF，在所有方向上均匀散射光。
- [mask_bsdf](mask_bsdf.html)
  返回仅包含掩码指定组件的新BSDF。
- [normal_bsdf](normal_bsdf.html)
  返回BSDF漫反射组件的法线。
- [phong](phong.html)
  返回Phong BSDF或计算Phong着色。
- [phonglobe](phonglobe.html)
- [sample_bsdf](sample_bsdf.html)
  采样BSDF。
- [solid_angle](solid_angle.html)
  计算BSDF函数所对的立体角（球面度）。
- [split_bsdf](split_bsdf.html)
  将bsdf拆分为其组件瓣。
- [sssapprox](sssapprox.html)
  创建近似SSS BSDF。

BSDFs

## BSDFs_group

- [specular](specular.html)
  返回镜面BSDF或计算镜面着色。

CHOP

## CHOP_group

- [chadd](chadd.html)
  向CHOP节点添加新通道。
- [chattr](chattr.html)
  读取CHOP属性。
- [chattrnames](chattrnames.html)
  从CHOP输入读取给定属性类的CHOP属性名称。
- [chend](chend.html)
  返回给定CHOP输入中最后一个样本的样本编号。
- [chendf](chendf.html)
  返回指定输入最后一个样本对应的帧。
- [chendt](chendt.html)
  返回指定输入最后一个样本对应的时间。
- [chindex](chindex.html)
  给定通道名称，从输入返回通道索引。
- [chinput](chinput.html)
  返回指定样本处通道的值。
- [chinputlimits](chinputlimits.html)
  计算输入通道中样本的最小值和最大值。
- [chnames](chnames.html)
  返回给定CHOP输入的所有CHOP通道名称。
- [chnumchan](chnumchan.html)
  返回指定输入中的通道数量。
- [chop](chop.html)
  返回指定样本处CHOP通道的值。
- [choplocal](choplocal.html)
  返回指定样本处CHOP局部变换通道的值。
- [choplocalt](choplocalt.html)
  返回指定样本和评估时间处CHOP局部变换通道的值。
- [chopt](chopt.html)
  返回指定样本和评估时间处CHOP通道的值。
- [chrate](chrate.html)
  返回指定输入的采样率。
- [chreadbuf](chreadbuf.html)
  返回指定索引处CHOP上下文临时缓冲区的值。
- [chremove](chremove.html)
  从CHOP节点移除通道。
- [chremoveattr](chremoveattr.html)
  移除CHOP属性。
- [chrename](chrename.html)
  重命名CHOP通道。
- [chresizebuf](chresizebuf.html)
  调整CHOP上下文临时缓冲区大小。
- [chsetattr](chsetattr.html)
  设置CHOP属性的值。
- [chsetlength](chsetlength.html)
  设置CHOP通道数据的长度。
- [chsetrate](chsetrate.html)
  设置CHOP通道数据的采样率。
- [chsetstart](chsetstart.html)
  设置CHOP通道数据的起始样本。
- [chstart](chstart.html)
  返回指定输入的起始样本。
- [chstartf](chstartf.html)
  返回指定输入第一个样本对应的帧。
- [chstartt](chstartt.html)
  返回指定输入第一个样本对应的时间。
- [chwritebuf](chwritebuf.html)
  在指定索引处写入CHOP上下文临时缓冲区的值。
- [isframes](isframes.html)
  如果Vex CHOP的单位菜单当前设置为'frames'返回1，否则返回0。
- [issamples](issamples.html)
  如果Vex CHOP的单位菜单当前设置为'samples'返回1，否则返回0。
- [isseconds](isseconds.html)
  如果Vex CHOP的单位菜单当前设置为'seconds'返回1，否则返回0。
- [ninputs](ninputs.html)
  返回输入数量。

通道图元

## chprim_group

- [chprim_clear](chprim_clear.html)
  清除通道图元，移除所有关键帧。
- [chprim_destroykey](chprim_destroykey.html)
  从通道图元销毁现有关键帧。
- [chprim_end](chprim_end.html)
  获取通道图元的结束时间。
- [chprim_eval](chprim_eval.html)
  在给定时间评估通道图元。
- [chprim_insertkey](chprim_insertkey
