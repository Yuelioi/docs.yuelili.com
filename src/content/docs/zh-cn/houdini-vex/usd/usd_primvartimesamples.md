---
title: usd_primvartimesamples
order: 114
---
| 版本 | 18.0 |
| --- | --- |

`float [] usd_primvartimesamples(<stage>stage, string primpath, string name)`

此函数返回一个时间码数组，表示在给定图元上直接找到的primvar被赋予数值的时间点。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号的整数（从0开始）以读取对应输入端的stage。该整数等效于引用特定输入的字符串形式，例如"opinput:0"。

也可用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点处理完成的stage（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`name`

Primvar名称。

返回值

返回primvar数值被赋予的时间码数组，若primvar不存在或没有时间采样则返回空数组。

## 示例

```vex
// 获取foo primvar的时间码
float time_codes[] = usd_primvartimesamples(0, "/geo/cube", "foo");

```

```vex
// 获取指定图元上已赋值的primvar在各时间采样点的数值
float[] usd_primvartimesamplevalues(const int input; const string primpath, primvarname)
{
 float result[];

 float time_samples[] = usd_primvartimesamples( input, primpath, primvarname );
 foreach( float time_code ; time_samples ) 
 {
 float value = usd_primvar( input, primpath, primvarname, time_code );
 push( result, value );
 }

 return result;
}

```
