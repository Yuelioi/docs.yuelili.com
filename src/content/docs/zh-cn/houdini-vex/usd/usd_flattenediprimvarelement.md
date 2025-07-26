---
title: usd_flattenediprimvarelement
order: 39
---

| 始于版本 | 19.0 | 
| --- | --- | 

`<type> usd_flattenediprimvarelement(<stage>stage, string primpath, string name, int index)` 

`<type> usd_flattenediprimvarelement(<stage>stage, string primpath, string name, int index, float timecode)` 

此函数返回指定图元或其继承自祖先图元的扁平化数组primvar中某个元素的值。 

部分primvar支持索引机制——primvar本身存储唯一值的压缩数组，并通过索引数组实现实体到值的映射。本函数通过索引数组展开压缩数组，并返回展开数组中指定索引处的元素值。 

`<stage>` 

在节点上下文（如wrangle LOP节点）中运行时，该参数可接收表示输入编号的整数（从0开始）以读取对应阶段。整数形式等效于引用特定输入的字符串形式（例如"opinput:0"）。 

该参数也可用于引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理阶段（如"op:/stage/lop_node"）。 

`primpath` 

目标图元的路径。 

`name` 

Primvar名称（不包含命名空间）。 

`index` 

展开数组中的索引位置。 

`timecode` 

评估属性时使用的USD时间码。USD时间码大致对应Houdini中的帧号。若未指定，则使用当前帧对应的时间码。 

返回值 

返回现有primvar扁平化值数组中的元素。若primvar不存在则返回零值/空值。如需检查primvar是否存在，请使用[usd_isiprimvar](/zh-cn/houdini-vex/usd/usd_isiprimvar "检查指定图元或其祖先是否包含给定名称的primvar")。 

示例 

## 示例 

```vex 
// 获取立方体图元或其祖先上的扁平化primvar值 
float flat_value = usd_flattenediprimvarelement(0, "/geo/cube", "primvar_name", 3); 

// 当前帧获取球体图元"bar"primvar第10个元素 
f@flat_primvar_element_10_at_current_frame = usd_flattenediprimvarelement(0, "/geo/sphere", "bar", 10); 
// 第7帧获取球体图元"bar"primvar第10个元素 
f@flat_primvar_element_10_at_frame_7 = usd_flattenediprimvarelement(0, "/geo/sphere", "bar", 10, 7.0); 
``` 

（注：保持所有代码块、函数名、参数名及技术术语原文不变，仅对描述性文本进行本地化处理）
