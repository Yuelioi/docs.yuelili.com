---
title: re_split
order: 28
---
`string [] re_split(string regex, string input, int maxsplits=0)`

将输入字符串 `input` 按照正则表达式 `regex` 的匹配项进行分割。

如果指定了非零的 `maxsplits` 参数，则表示最大分割次数。

注意：此方法与Python等其他分割方法不同，它对尾部分隔符的处理方式不同。例如 `a,b,` 只会分割成两个字符串。可以通过在正则表达式后添加 `|($(?!\s))` 来分割出三个标记。在VEX中通常需要使用 \\s，而在wrangle节点中需要额外转义，因此需要使用 \\\\s。
