---
title: usd_iprimvartimesamples
order: 59
---
| 始于版本 | 19.0 |
| --- | --- |

`float [] usd_iprimvartimesamples(<stage>stage, string primpath, string name)`

此函数返回一个时间码数组，这些时间码记录了在给定图元或其继承自祖先图元的primvar上被赋值的时刻。

`<stage>`

在节点上下文（如wrangle LOP）中运行时，此参数可以是表示输入编号（从0开始）的整数，用于读取对应的stage。该整数等价于引用特定输入的字符串形式，例如"opinput:0"。

也可用此参数引用USD文件（如"/path/to/file.usd"），或通过`op:`路径前缀引用其他LOP节点处理完成的stage（如"op:/stage/lop_node"）。

`primpath`

目标图元的路径。

`name`

Primvar名称。

返回值

记录primvar值被赋值时刻的时间码数组，若primvar不存在或无时间采样则返回空数组。

## 示例

```vex
// 获取foo primvar的时间码
float time_codes[] = usd_primvartimesamples(0, "/geo/cube", "foo");

```

```vex
// 获取指定图元或其祖先图元上记录的时间采样primvar值
float[] usd_iprimvartimesamplevalues(const int input; const string primpath, primvarname)
{
 float result[];

 float time_samples[] = usd_iprimvartimesamples( input, primpath, primvarname );
 foreach( float time_code ; time_samples ) 
 {
 float value = usd_iprimvar( input, primpath, primvarname, time_code );
 push( result, value );
 }

 return result;
}

```
