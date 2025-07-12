---
title: premiere-elements
---
# Premiere Elements

Premiere Elements（但不是 Premiere Pro）会为每个效果显示视觉图标。你需要为你的效果提供图标，否则你的效果将显示一个空的黑色图标，甚至在 Premiere Elements 8 中可能会出现更糟糕的行为。

图标是 60x45 的 PNG 文件，放置在以下路径：

`/[Program Files]/Adobe/Adobe Premiere Elements [version]/Plug-in/Common/Effect/Previews/`

文件名应与效果的匹配名称一致，该名称在 [PiPL Resources](../../intro/pipl-resources) 中指定，并以 "AE" 为前缀。因此，如果匹配名称是 "MatchName"，那么文件名应为 "AE.MatchName.png"。
