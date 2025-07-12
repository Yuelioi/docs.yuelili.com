---
title: dictionaries
order: 2
---
| 本页内容 | * [概述](#概述) * [字典字面量](#字典字面量) * [声明字典类型](#声明字典类型) * [字典值](#字典值) * [访问和设置字典值](#访问和设置字典值) * [字典操作](#字典操作) |
| --- | --- |

概述

## 概述

VEX包含字典(dict)数据类型。由于VEX是强类型语言，处理参数值和类型会随参数变化的参数集较为困难。`dict`类型为此提供了解决方案。

`dict`类型的效率远低于将字典展开为每个条目的变量，因此仅应在变量集合和类型变化的情况下使用。

字典字面量

## 字典字面量

唯一支持的字典字面量是空字典：`{}`。

```vex
dict s = {};

```

声明字典类型

## 声明字典类型

声明字典变量的通用形式为`dict 变量名`：

```vex
// 普通字典声明
dict mydict;

```

声明返回字典的函数：

```vex
// 返回字典的函数
dict rgb_table()
{
...
}; 

```

字典值

## 字典值

字典的索引或键(key)始终是字符串。字符串可以取任意值，但为便于处理，建议避免使用空字符串或包含`.`的字符串。

字典值可以是大多数基本VEX类型：`int`、`float`、`vector2`、`vector`、`vector4`、`matrix2`、`matrix3`、`matrix`、`string`、`int[]`、`float[]`、`string[]`、`dict`、`dict[]`。

访问和设置字典值

## 访问和设置字典值

使用`dict[索引]`通过键查找字典中的值。

索引是用于查找值的字符串。如果键不存在于字典中，则返回默认初始化的值。

VEX要求类型在编译时已知，但实际存储类型可能在运行时变化。因此通常需要显式类型转换函数来指定提取类型。在可能的情况下，原生类型将被转换为所需类型。

```vex
dict dictionary; // 创建空字典
dictionary['key'] = 3; // 在key索引处存储3
float three = dictionary['key']; // 提取key
dictionary['newkey'] = dictionary['key']; // 错误：类型不明确！
dictionary['newkey'] = int(dictionary['key']); // 以int类型提取key并复制

```

`getcomp`函数可使用默认参数来指定类型，并在键缺失时提供不同结果。如果键存在但类型错误，仍会使用默认初始化值。

```vex
dict dictionary;
dictionary['key'] = 3;
int three = getcomp(dictionary, 'key', 52);
int fiftytwo = getcomp(dictionary, 'nonkey', 52);

```

`typeid`函数可用于识别字典值的类型。此ID可与特定VEX数据类型的`typeid()`比较，从而根据值的具体类型执行不同代码路径。

```vex
dict dictionary;
dictionary['key'] = set(1, 2, 3);

int value_type = typeid(dictionary, 'key');
if (value_type == typeid(vector()))
{
 // 当key为'vector'类型时执行此路径
 vector val = dictionary['key'];
 // ... 对向量值进行操作
}
else if (value_type == typeid(vector4()))
{
 vector4 val = dictionary['key'];
 // ... 对vector4值进行操作
}

```

可通过`insert`命令将一个字典中键的内容复制到另一个字典，而无需向VEX暴露类型。此方法也可用于合并两个字典。

```vex
dict a, b;
a['key'] = 3;
b['oldkey'] = 5;
insert(b, 'newkey', a, 'key'); // 使b['newkey'] == 3
insert(b, 'oldkey', a, 'nonkey'); // 删除b['oldkey']，因为a中缺少nonkey
insert(b, a); // 将a的所有条目添加到b，冲突时覆盖

```

可使用`set`命令构建字典。

```vex
dict a;
a = set("key", 3.0, "nextkey", 5.0, "lastkey", "stringvalue");

```

字典操作

## 字典操作

以下函数可用于查询和操作字典：

[len](functions/len.html "返回数组长度")

返回字典中的键数量。

[keys](functions/keys.html "返回字典中所有键")

返回按字母排序的字典所有键的字符串数组。

[isvalidindex](functions/isvalidindex.html "检查给定索引对数组或字符串是否有效")

判断键是否存在于字典中。

[insert](functions/insert.html "将项目、数组或字符串插入数组或字符串")

将值从一个字典复制到另一个字典，也可合并整个字典。

[removeindex](functions/removeindex.html "从数组中移除指定索引处的项目")

从字典中删除键。

[set](functions/set.html "根据参数创建新值，如从其分量创建向量")

通过键值列表构建字典。
