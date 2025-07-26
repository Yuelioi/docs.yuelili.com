---
title: expand_udim
order: 4
---
`string  expand_udim(float u, float v, string path, ...)`

扫描输入路径中的特殊转换字符，执行UDIM或UVTILE风格的文件名扩展。

这与[texprintf](/zh-cn/houdini-vex/texturing/texprintf "类似于sprintf，但执行UDIM或UVTILE纹理文件名扩展。")类似，但有两点显著区别：

- 没有可变打印参数。仅执行UDIM/UVTILE扩展。
- 如果执行了UDIM/UVTILE扩展，该函数会检查纹理是否存在且可访问。

`u`, `v`

要转换为UDIM瓦片规格的纹理坐标。

`path`

文件路径。路径中的特殊字符序列将根据给定的UV坐标扩展为UDIM标识符。特殊转换序列包括：

| `%(UDIM)d` 或 `<UDIM>` | UDIM坐标，计算公式为 `1000 + int(u)+1 + int(v)*10` |
| --- | --- |
| `%(U)d` | UVTILE风格的u坐标 (`int(u)+1`) |
| `%(V)d` | UVTILE风格的v坐标 (`int(v)+1`) |
| `%(UVTILE)d` 或 `<UVTILE>` | 以 `u%d_v%d` 形式扩展u和v坐标。 |

用于纹理标识的 `d` 转换说明符可以通过字段修饰符进行修改。例如 `%(U)02d` 或 `%(V)04d`。

"checkfile",
`int`
`=1`

通常，该函数会检查扩展后的路径是否存在且可读。如果传入 `"checkfile", 0` 参数对，函数将不执行此检查。

返回值

替换了所有UDIM控制序列的路径。

如果扩展后的文件路径不存在或不可读，函数将返回空字符串，除非关闭 `checkfile` 可变参数。

## 示例

- `expand_udim(3.1, 4.15, "map_<UDIM>.rat")` - 返回 "map_1044.rat"
- `expand_udim(3.1, 4.15, "map_%(U)02d_%(V)02d.rat")` - 返回 "map_04_05.rat"
- `expand_udim(3.14, 11.5, "map_u%(U)d_v%(V)d.rat")` - 返回 "map_u4_v12.rat"
- `expand_udim(3.14, 11.5, "missing_file<UDIM>.rat")` - 对于缺失文件返回 ""
- `expand_udim(3.14, 11.5, "missing_file<UDIM>.rat", "checkfile", 0)` - 返回 "missing_file1044.rat"，因为禁用了"checkfile"
- `expand_udim(3.14, 11.5, "/path/file.rat")` - 返回 "/path/file.rat"（无论文件是否存在），因为没有UDIM/UVTILE扩展

```vex
// sprintf()会保留%(UDIM)d格式序列不做修改
string map = sprintf("%s/%s_%(UDIM)d.rat", texture_path, texture_base);
// 扩展<UDIM>，如果贴图不存在则返回空字符串
map = expand_udim(u, v, map);
if (map != "")
Cf = texture(map, u, v);

```
