---
title: abspath
order: 1
---
| 版本 | 18.0 |
| --- | --- |

`string  abspath(string relpath)`

将提供的相对路径转换为绝对路径。相对路径会被视为相对于Houdini当前工作目录的路径。如果提供的路径已经是绝对路径，则直接返回原路径。该文件不需要实际存在。
