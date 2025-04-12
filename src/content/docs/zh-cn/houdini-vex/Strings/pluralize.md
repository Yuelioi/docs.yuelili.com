---
title: pluralize
order: 23
---
`string  pluralize(string noun)`

英语中存在大量非标准的名词复数变化规则。此函数将为输入字符串正确地生成复数形式。仅会处理输入字符串的末尾部分。

## 示例

```vex
string boxes = pluralize("box");
string women = pluralize("woman");
string geometries = pluralize("geometry");

// 返回字符串"Pluralize the last words"
string phrase = pluralize("Pluralize the last word");

```
