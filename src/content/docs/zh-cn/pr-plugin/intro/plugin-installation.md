---
title: 插件安装
---
# 插件安装

插件必须有一个安装程序。这简化了用户的安装过程，提供了更紧凑的分发方式，并确保所有部分都正确安装。

为您的插件创建一个容器文件夹，以尽量减少用户的困惑。

不要无意中覆盖现有的插件，或替换较新的版本。

安装程序应找到默认的安装目录，如下所述。

当安装程序允许用户指定一个替代目录时，这也是值得赞赏的。

插件应安装在常见的插件位置。

安装在此处的受支持的Premiere和After Effects插件将被Premiere Pro、After Effects、Audition和Media Encoder加载。

其他插件类型，如QuickTime和VfW编解码器，应安装在操作系统级别。

---

## Windows

从Premiere Pro 22.0版本开始，`\Plug-ins`目录已更名为`\Plugins`，以更好地符合苹果的人机界面指南。在可预见的未来，Premiere Pro将继续尝试从`\Plug-Ins`目录加载插件。我们将继续指定

从CC开始，每个版本的Premiere Pro都会创建一个唯一的注册表键，提供该版本的第三方安装感兴趣的文件夹位置。

例如，以下是**CC 2015.3**的注册表值：

键：`HKEY_LOCAL_MACHINE/Software/Adobe/Premiere Pro/10.0/`

值名称：`CommonPluginInstallPath`

值数据：`C:\Program Files\Adobe\Common\Plugins\7.0\MediaCore\\`（或适当的MediaCore插件文件夹；请注意，这与After Effects安装程序为相应的注册表键提供的内容相同）

从CC 2015.3开始，**控制表面插件**应安装在此处：

`/Library/Application Support/Adobe/Common/Plug-ins/ControlSurface/`

**对于序列预设：**

值名称：`SequencePresetsPath`

值数据：`[Adobe Premiere Pro安装路径]\Settings\SequencePresets\`

**对于序列预览预设：**

值名称：`SequencePreviewPresetsPath`

值数据：`[Adobe Premiere Pro安装路径]\Settings\EncoderPresets\SequencePreview\`

**对于导出器预设：**

值名称：`CommonExporterPresetsPath`

值数据：**[用户文件夹]AppDataRoamingAdobeCommonAME7.0Presets\\**

**效果预设：**

值名称：`PluginInstallPath`

值数据：`[Adobe Premiere Pro安装路径]\Adobe Premiere Pro\Plugins\Common`

第三方安装程序可以从此路径开始，然后修改字符串以构建特定语言的效果预设路径。

**在CC之前**，注册表中给出的唯一路径是最近安装的Premiere Pro版本的通用插件路径：

HKEY_LOCAL_MACHINE/Software/Adobe/Premiere Pro/CurrentVersion

值名称：`Plug-InsDir`

值数据：`REG_SZ`包含插件文件夹的完整路径。

例如：`C:\Program Files\Adobe\Common\Plugins\7.0\MediaCore\`

定位其他预设文件夹的最佳方法是从注册表中的Premiere Pro根路径开始

`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\\ Adobe Premiere Pro.exe`。

然后，只需添加适当的子目录，如macOS部分所述。

---

## macOS

从Premiere Pro 22.0版本开始，**通用插件位置**是：

`/Library/Application Support/Adobe/Common/Plugins/[version]/MediaCore/`

从CC 2015.3开始，**控制表面插件**应安装在此处：

`/Library/Application Support/Adobe/Common/Plugins/ControlSurface/`

以前，从CC 2015开始，Premiere Pro为Mac提供了安装提示。您可以在`/Library/Preferences`找到`com.Adobe.Premiere Pro.paths.plist`，其中包含您的Mac安装程序知道在哪里安装插件的提示，类似于我们在Win上提供的注册表条目。

**通用插件位置**位于：

`/Library/Application Support/Adobe/Common/Plug-ins/[version]/MediaCore/`

从CC 2015.3开始，**控制表面插件**应安装在此处：

`/Library/Application Support/Adobe/Common/Plug-ins/ControlSurface/`

遵循OS X代码签名指南，插件应安装在此单独的共享位置，而不是应用程序包中。

**对于序列预设：**

`/Settings/SequencePresets/[您的特定文件夹]/`

**序列预览预设：**

`/Settings/EncoderPresets/SequencePreview/[您的编辑模式GUID]/`

**编码器预设：**

`/MediaIO/systempresets/[您的导出器文件夹]/`

**效果预设：**

`/Plugins/[语言子目录]/Effect Presets/`（参见[本地化](../localization)以获取语言代码列表）

**编辑模式：**

`/Settings/Editing Modes/`

---

## 插件命名约定

在Windows上，Premiere Pro插件必须具有文件扩展名“.prm”。在macOS上，它们具有文件扩展名“.bundle”。其他支持的插件标准使用其常规文件扩展名：After Effects插件为“.aex”，VST插件为“.dll”。

虽然您的插件不需要加载，但使用插件类型作为前缀命名您的插件（例如ImporterSDK，FilterSDK等）将有助于减少用户的困惑。

---

## 插件阻止列表（以前称为黑名单）

可以使用阻止列表阻止特定插件在特定应用程序中被MediaCore加载。

:::注意
这不适用于由AE加载的After Effects插件，尽管它适用于在Premiere Pro中加载的AE插件。
:::

在插件文件夹中，查找适当的阻止列表文件，并将插件的文件名附加到文件中（例如BadPlugin，而不是BadPlugin.prm）。如果文件不存在，请先创建它。“Blocklist.txt”包含从所有应用程序中阻止的插件名称。可以通过将插件包含在“Blocklist Adobe Premiere Pro.txt”或“Blocklist After Effects.txt”等中来阻止插件在特定应用程序中加载。

---

## 创建序列预设

不要与编码器预设或序列预览编码器预设混淆，序列预设是项目预设的继承者。它们包含创建新序列时使用的视频、音频、时间码和轨道布局信息。

如果您希望为“新建序列”对话框添加序列预设，请使用描述性名称和注释保存设置。模仿我们的设置文件。按照本节所述安装预设。

---

## 应用程序级首选项

对于Windows 7受限用户帐户，代码保证可以写入文件夹的唯一位置是用户文档文件夹及其子文件夹内。

..Users[用户名]AppDataRoamingAdobePremiere Pro[版本]\\

这意味着您无法在应用程序文件夹中保存数据或文档。目前没有插件API用于在应用程序首选项文件夹中存储首选项。插件可以在用户的Premiere首选项目录中创建自己的首选项文件，如下所示：

```cpp
HRESULT herr = SHGetKnownFolderPath(FOLDERID_RoamingAppData, 0, NULL, preferencesPath);
strcat(preferencesPath, "\\Adobe\\Premiere Pro\\[version]\\MyPlugin.preferences");
```

在MacOS上：`NSSearchPathForDirectoriesInDomains(NSApplicationSupportDirector y,NSLocalDomainMask,…)`

这应该可以帮助您开始获取应用程序支持文件夹，您可以在此基础上创建类似的内容：

`/Library/Application Support/Adobe/Premiere Pro/[version]/ MyPlugin.preferences`

---

## 狗耳朵

Premiere Pro的内置播放器有一种显示统计信息的模式，历史上称为“狗耳朵”，这在调试和调整导入器、效果、过渡和发射器的性能时非常有用。统计信息包括每秒帧数、播放期间丢帧、渲染的像素格式、渲染大小和正在渲染的场类型。

您可以在Premiere Pro中调出调试控制台。您可以通过Ctrl/Cmd-F12执行此操作。要启用狗耳朵，请键入以下内容：

```cpp
debug.set EnableDogEars=true
```

要禁用，请使用以下内容：

```cpp
debug.set EnableDogEars=false
```

如果回车键似乎进入了错误的面板，这是一个间歇性的面板焦点问题。在控制台面板中键入之前，单击工具或信息面板，回车键将被正确处理。

一旦启用，播放器将显示统计信息为黑色文本在部分透明背景上。这使您仍然可以看到底层视频（在一定程度上）并且还可以阅读文本。当您关闭狗耳朵时，设置可能不会生效，直到您切换或重新打开当前序列。

:::注意
如果您正在开发发射器，显示狗耳朵将导致对同一帧的PushVideo重复调用。这是因为播放器定期在计时器上更新狗耳朵，即使帧没有更改以更新统计信息。从CS6开始，这会触发PushVideo到活动发射器作为副作用。
:::
