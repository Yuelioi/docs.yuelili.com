---
title: 应用程序和命名空间标识符
---
# 应用程序和命名空间标识符

所有形式的应用程序间通信都使用[应用程序标识符](#application-specifiers)来识别 Adobe 应用程序。

在所有 ExtendScript 脚本中，#target 指令可以使用标识符来指定应运行该脚本的应用程序。请参阅[预处理器指令](../../extendscript-tools-features/preprocessor-directives)。

在应用程序间消息中，标识符用作消息对象的 target 属性的值，以标识消息的目标应用程序。

Adobe Bridge（与许多 Adobe 应用程序集成）使用应用程序标识符作为 `document.owner` 属性的值，以标识创建或打开 Adobe Bridge 浏览器窗口的其他应用程序。详情请参阅 *Adobe Bridge JavaScript 参考*。

当一个应用程序的脚本调用跨 DOM 或导出的函数时，它使用[命名空间标识符](#namespace-specifiers)来标识导出应用程序。

---

## 应用程序标识符

应用程序标识符是编码应用程序名称、版本号和语言代码的字符串。它们采用以下形式：`appname[_instance[[-version[-locale]]]`

| 标识符 | 描述 |
|---|---|
| `appname` | Adobe 应用程序名称。例如，以下是 Creative Suite 4 中可以使用 ExtendScript Toolkit 的应用程序的标识字符串： |
| | - `aftereffects` |
| | - `bridge` |
| | - `estoolkit` |
| | - `illustrator` |
| | - `incopy` |
| | - `indesign` |
| | - `indesignserver` |
| | - `photoshop` |
| `instance` | 可选。附加的字符串，用下划线连接，用于区分支持启动和运行多个实例的应用程序（如 InDesign Server）的实例。 |
| | 例如，对于使用 SOAP 端口 12345 启动的服务器，标识符将是 `indesignserver_configuration_12345`。 |
| `version` | 可选。表示至少主版本号的数字。数字应包括用点分隔的主版本号和次版本号；例如，1.5。 |
| | 如果未提供，则假定与发送应用程序相同的套件版本（如果可能）；否则，使用最高可用版本号。 |
| | 以下是 Creative Suite 4 中可以使用应用程序间消息传递的应用程序的完整标识名称和版本号列表： |
| | - `acrobat-9.0` |
| | - `aftereffects-9.0` |
| | - `soundbooth-2.0` |
| | - `bridge-3.0` |
| | - `contribute-5.0` |
| | - `devicecentral-2.0` |
| | - `dreamweaver-10.0` |
| | - `encore-4.0` |
| | - `estoolkit-3.0` |
| | - `fireworks-10.0` |
| | - `flash-10.0` |
| | - `illustrator-14.0` |
| | - `indesign-6.0` |
| | - `indesignserver-6.0` |
| | - `incopy-6.0` |
| | - `photoshop-11.0` |
| | - `premierepro-4.0` |
| | - `audition-4.0` |
| | - `ame-1.0` |
| | - `exman-2.0` |
| `locale` | 可选。Adobe 区域代码，由 2 个字母的 ISO-639 语言代码和可选的 2 个字母的 ISO 3166 国家代码组成，用下划线分隔。大小写敏感。 |
| | 例如，`en_us`、`en_uk`、`ja_jp`、`de_de`、`fr_fr`。如果未提供，ExtendScript 使用当前平台的区域设置。 |
| | 不要为多语言应用程序（如 Bridge）指定区域设置，因为其所有区域版本都包含在单个安装中。 |

以下是合法的标识符示例：

- `photoshop`
- `bridge-3.0`
- `indesign_1-6.0`
- `illustrator-14.0`
- `illustrator-14.0-de_de`

如果标识符未提供特定的版本和区域信息，框架会尝试找到最合适的可用安装。它按以下顺序尝试匹配可用应用程序：

1. 同级应用程序（来自同一套件）
2. 具有最高可用版本号的应用程序
3. 当前正在运行的应用程序
4. 与当前区域设置匹配的应用程序
5. 任何区域设置的应用程序

---

## 命名空间标识符

当从其他应用程序调用跨 DOM 和导出的函数时，命名空间标识符限定函数调用，将其定向到适当的应用程序。

命名空间标识符由应用程序名称（如应用程序标识符中使用的名称）和可选的主版本号组成。使用 JavaScript 点符号将其作为导出函数名称的前缀。appname[majorVersion].functionName(args)

例如：

- 要在 Photoshop 中调用跨 DOM 函数 quit，使用 photoshop.quit()，在 Adobe Illustrator® 中调用，使用 illustrator.quit()。
- 要调用为 Illustrator CS5 版本 15 定义的导出函数 place，使用 illustrator15.place(myFiles)。

有关跨 DOM 和导出函数的信息，请参阅[远程函数调用](../communications-overview#remote-function-calls)。
