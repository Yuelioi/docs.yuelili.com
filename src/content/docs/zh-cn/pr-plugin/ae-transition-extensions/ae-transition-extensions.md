---
title: AE 转场扩展
---
# AE 转场扩展

本章描述了如何基于 After Effects API 在 Premiere Pro 中构建原生转场。从用户的角度来看，以这种方式构建的插件可以直接在效果控制面板中显示其参数，甚至可以在该面板或序列监视器中提供自定义参数 UI。此类插件不仅可以在 Premiere Pro 中运行，还可以在 After Effects 中运行，尽管它们会显示为效果而不是转场。

转场扩展基于使用 After Effects SDK 构建的效果。由于 AE 效果只有一个输入，因此第二个输入是由插件定义的图层参数。
