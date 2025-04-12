---
title: chinput
order: 8
---
| 上下文 | [chop](../contexts/chop.html) |
| --- | --- |

`<type> chinput(int channel_index, float|intsample)`

`<type> chinput(int opinput, int channel_index, float|intsample)`

从指定索引的通道读取一个采样值。
不带`opinput`参数的版本默认使用第一个输入(0)。

`<type> chinput(string channel_name, float|intsample)`

`<type> chinput(int opinput, string channel_name, float|intsample)`

从指定名称的通道读取一个采样值。
不带`opinput`参数的版本默认使用第一个输入(0)。

`int  chinput(int channel_index, float|intsample, vector &t, vector &r, vector &s)`

`int  chinput(int opinput, int channel_index, float|intsample, vector &t, vector &r, vector &s)`

从指定索引开始的9个通道读取采样值。
采样值通过3个vector输出参数返回。
成功返回1，失败返回0。
不带`opinput`参数的版本默认使用第一个输入(0)。

`int  chinput(string channel_name, float|intsample, vector &t, vector &r, vector &s)`

`int  chinput(int opinput, string channel_name, float|intsample, vector &t, vector &r, vector &s)`

从指定通道名开始的9个通道读取采样值。
采样值通过3个vector输出参数返回。
成功返回1，失败返回0。
不带`opinput`参数的版本默认使用第一个输入(0)。

`opinput`

要读取的输入编号，从0开始计数。例如第一个输入是0，第二个输入是1，以此类推。

`sample`

如果该值是分数，则会从最近的两个点进行线性插值计算。

返回值

返回指定输入中某个通道在特定采样点的值。
