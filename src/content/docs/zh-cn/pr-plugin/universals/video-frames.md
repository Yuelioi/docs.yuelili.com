---
title: 视频帧
---
# 视频帧

Premiere 将每个视频帧存储在 PPix 结构中。PPixHand 是 PPix 的句柄。不应直接访问此结构，而应使用各种套件（如 [PPix 套件](../sweetpea-suites#ppix-suite)、[PPix 2 套件](../sweetpea-suites#ppix-2-suite)、[PPix Creator 套件](../sweetpea-suites#ppix-creator-suite) 和 [PPix Creator 2 套件](../sweetpea-suites#ppix-creator-2-suite)）来操作它。

PPix 远不仅仅是一个无聊的 RGB 数据缓冲区，它可以包含有关视频帧的大量信息，包括：矩形边界（宽度、高度）、像素宽高比、像素格式、场优势、Alpha 解释、色彩空间、伽马编码等。

在像素缓冲区本身中，相邻水平像素行之间可能存在填充。因此，在遍历缓冲区中的像素时，不要假设下一行的第一个像素紧接在当前行的最后一个像素之后。请遵循 rowbytes，它是衡量一行像素大小的字节数，包括任何额外的填充。

帧保证是 16 字节对齐的。
