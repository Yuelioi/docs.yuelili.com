---
title: usd_attribtimesamples
order: 21
---
| 始于版本 | 18.0 |
| --- | --- |

`float [] usd_attribtimesamples(<stage>stage, string primpath, string name)`

此函数返回记录属性值的时间码数组。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取对应输入的场景。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

也可用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点的已处理场景（如"op:/stage/lop_node"）。

`primpath`

图元路径。

`name`

属性名称。

返回值

记录属性值的时间码数组，若属性不存在或无时间采样则返回空数组。

## 示例

```vex
// 获取foo属性的时间码
float time_codes[] = usd_attribtimesamples(0, "/geo/cube", "foo");

```

```vex
// 获取已记录时间采样点的属性值
float[] usd_attribtimesamplevalues(const int input; const string primpath, attribname)
{
 float result[];

 float time_samples[] = usd_attribtimesamples( input, primpath, attribname );
 foreach( float time_code ; time_samples ) 
 {
 float value = usd_attrib( input, primpath, attribname, time_code );
 push( result, value );
 }

 return result;
}

```
