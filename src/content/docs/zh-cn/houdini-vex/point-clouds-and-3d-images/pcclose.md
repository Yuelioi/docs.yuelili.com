---
title: pcclose
order: 4
---
`void  pcclose(int &handle)`

此函数用于关闭与 pcopen 函数关联的句柄。虽然 VEX 会自动关闭句柄，但最佳实践是主动调用 pcclose。当在循环内执行 pcopen 调用时，如果不再需要句柄却不调用 pcclose，VEX 可能会消耗额外的内存。
