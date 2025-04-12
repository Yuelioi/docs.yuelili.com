---
title: chid
order: 12
---
| 始于版本 | 17.5 |
| --- | --- |

`void  chid(string channel_path, int &op_id, int &parm_index, int &vector_index)`

`void  chid(string op_path, string channel_name, int &op_id, int &parm_index, int &vector_index)`

`int  chid(int op_id, int parm_index, int vector_index)`

解析给定的通道路径或操作符路径，并通过输出参数返回对应的操作符ID、参数ID和向量索引。失败时返回-1值。您也可以使用最后一个不接收channel_path的重载函数来测试这些键的有效性。如果ID有效则返回1，否则返回0。
