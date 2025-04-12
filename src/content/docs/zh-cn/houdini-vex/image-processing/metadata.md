---
title: metadata
order: 29
---
| 上下文 | [cop2](../contexts/cop2.html) |
| --- | --- |

`<type> metadata(int opinput, string name)`

`float|int metadata(int opinput, string name, int index)`

返回与元数据`name`关联的值，如果元数据不存在、输入未连接或索引超出范围（矩阵版本的单位矩阵），则返回零。

`opinput`

要读取的输入编号，从0开始。例如，第一个输入是0，第二个输入是1，依此类推。

`name`

要获取的元数据名称。

`index`

对于复合数据类型，这表示要获取的向量/矩阵分量或数组项。
