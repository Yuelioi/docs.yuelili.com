---
title: texprintf
order: 12
---
`string  texprintf(float u, float v, string format, ...)`

格式化字符串的方式类似于 [sprintf](/zh-cn/houdini-vex/strings/sprintf "类似printf格式化字符串，但以字符串形式返回结果而非直接打印")，但会扫描特殊转换字符来执行UDIM或UVTILE风格的文件名扩展。

这比直接调用sprintf()效率要高得多。

特殊转换序列包括：

`<UDIM>`

UDIM坐标，计算公式为 `1000 + int(u)+1 + int(v)*10`

`%(U)d`

UVTILE风格的u坐标（`int(u)+1`）

`%(V)d`

UVTILE风格的v坐标（`int(v)+1`）

`%(UVTILE)d`

扩展为u和v坐标，格式为 `u%d_v%d`

用于纹理识别的`d`转换说明符可以使用字段修饰符进行修改。例如 `%(U)02d` 或 `%(V)04d`。

## 示例

```vex
!vex
// 返回 "map_1044.rat"
texprintf(3.1, 4.15, "map_<UDIM>.rat");

// 返回 "map_04_05.rat"
texprintf(3.1, 4.15, "map_%(U)02d_%(V)02d.rat");

// 返回 "map_u4_v12.rat"
texprintf(3.14, 11.5, "map_u%(U)d_v%(V)d.rat");

// 返回 "/path/basename_04_05.rat"
texprintf(3.1, 4.1, "%s/%s_%(U)02d_%(V)02d.rat", "/path", "basename");

// 返回 "/path/basename_u04_v05.rat"
texprintf(3.1, 4.1, "%s/%s_%(UVTILE)02d.rat", "/path", "basename")
```

```vex
string map = texprintf(u, v, "%s/%s_<UDIM>.rat", texture_path, texture_base);
Cf = texture(map, u, v);
```
