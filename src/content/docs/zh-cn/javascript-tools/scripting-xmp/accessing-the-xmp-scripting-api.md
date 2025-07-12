---
title: 访问XMP脚本API
---
# 访问XMP脚本API

要使用XMP对象，您必须将XMP库作为ExtendScript的ExternalObject加载。为了避免加载多个库实例，请使用如下代码：

```javascript
// 加载库
if ( ExternalObject.AdobeXMPScript == undefined ) {
 ExternalObject.AdobeXMPScript = new ExternalObject( "lib:AdobeXMPScript");
}
```

加载库后，以下主要的XMP类将在全局JavaScript命名空间中可用：

| 对象 | 描述 |
| --- | --- |
| [XMPMeta对象](../xmpscript-object-reference#xmpmeta-object) | 提供XMP Toolkit的核心服务。允许您创建和删除元数据属性，并检索和修改属性值。 |
| [XMPFile对象](../xmpscript-object-reference#xmpfile-object) | 提供对文件的主文档级别XMP的便捷I/O访问。允许您从文件中检索现有元数据，更新文件元数据，并向文件添加新元数据。 |

其他顶级对象包括数组处理工具、日期时间对象以及包含命名空间常量的常量定义。顶级对象提供了对封装单个元数据属性、文件信息和XMP数据包信息的附加支持类的访问，以及允许遍历属性的工具。

有关类、它们的属性和方法的详细信息，请参阅[XMPScript对象参考](../xmpscript-object-reference)。

---

## 使用XMP脚本API

[XMPMeta对象](../xmpscript-object-reference#xmpmeta-object)是访问XMP元数据包的命名空间和属性的主要方式。通过此对象，您可以创建和删除命名空间和属性，并检查和修改属性值。

您可以通过以下几种方式获取或创建[XMPMeta对象](../xmpscript-object-reference#xmpmeta-object)：

- 您可以使用[XMPFile对象](../xmpscript-object-reference#xmpfile-object)直接从文件中检索现有元数据。`XMPFile.`[getXMP()](../xmpscript-object-reference#xmpfilegetxmp)方法会创建一个[XMPMeta对象](../xmpscript-object-reference#xmpmeta-object)，您可以使用它来检查或修改属性及其值。然后，您可以使用`XMPFile.`[putXMP()](../xmpscript-object-reference#xmpfileputxmp)将修改后的元数据写回文件。
- 您可以使用构造函数创建一个[XMPMeta对象](../xmpscript-object-reference#xmpmeta-object)，并使用在其他地方创建或获取的XMP数据包初始化它。
- 您可以使用构造函数创建一个新的空[XMPMeta对象](../xmpscript-object-reference#xmpmeta-object)，并使用其方法创建全新的命名空间和属性。然后，您可以使用`XMPFile.`[putXMP()](../xmpscript-object-reference#xmpfileputxmp)将新元数据注入文件。

在Adobe Bridge中，您可以使用序列化的XMP在内置的`Metadata`对象和XMPScript的[XMPMeta对象](../xmpscript-object-reference#xmpmeta-object)之间传递XMP元数据。

- 您可以使用XMPScript通过从`Thumbnail`对象存储的元数据创建[XMPMeta对象](../xmpscript-object-reference#xmpmeta-object)来检查缩略图元数据，使用对象构造函数。为了确保元数据是最新的，请使用同步模式（默认情况下关闭）：

 ```javascript
 var thumb = new Thumbnail( new File( "/C/myImage.jpg") );
 app.synchronousMode = true;

 var xmp = new XMPMeta( thumb.metadata.serialize() );
 ```

 或：

 ```javascript
 var xmp = new XMPMeta( thumb.synchronousMetadata.serialize() );
 ```

- 您可以通过使用序列化的XMP创建一个新的`Metadata`对象来修改Adobe Bridge缩略图中的元数据。继续前面的示例：

 ```javascript
 // 创建一个紧凑的XMP数据包
    var newPacket = xmp.serialize( XMPConst.SERIALIZE_OMIT_PACKET_WRAPPER | XMPConst.SERIALIZE_USE_COMPACT_FORMAT ) );
 thumb.metadata = new Metadata( newPacket );
 ```

- 要将元数据写回缩略图的文件，您可以访问缩略图的文件并创建一个[XMPFile对象](../xmpscript-object-reference#xmpfile-object)对象以直接访问嵌入的元数据：

 ```javascript
 var xmp = new XMPFile( thumb.spec.fsName, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_UPDATE );
 ```

:::注意
`XMPFile`对象不支持Adobe Bridge支持的所有文件格式。
:::

---

### 创建新元数据

此代码创建一个空的[XMPMeta对象](../xmpscript-object-reference#xmpmeta-object)，使用它设置元数据属性，并将其序列化为字符串，您可以将其传递给创作工具，或存储在文件中。

```javascript
var xmp = new XMPMeta();
xmp.setProperty( XMPConst.NS_XMP, "CreatorTool", "My Script" );
var xmpStr = xmp.serialize(); // 将XMP数据包序列化为XML

// 检索属性
var prop = xmp.getProperty(XMPConst.NS_XMP, "CreatorTool");
$.writeln( "命名空间: " + prop.namespace + "\n" +
 "属性路径 + 名称: " + prop.path + "\n" +
 "值: " + prop ); // 与prop.value相同
```

---

### 修改现有元数据

此代码访问现有的XMP数据包，假设位置已分配给字符串变量。它将修改日期属性设置为当前日期和时间，并将更新后的XMP数据包存储回字符串，使其尽可能小。

```javascript
var xmp = new XMPMeta( xmpStr ); // 使用XMP数据包字符串初始化对象
var dateTime = new XMPDateTime( new Date() ); // 现在
var oldModificationDate = mp.getProperty( XMPConst.NS_XMP, "ModifyDate", "xmpdate" );

$.writeln( "旧的修改日期: " + oldModificationDate );
xmp.setProperty( XMPConst.NS_XMP, "ModifyDate", dateTime, "xmpdate" );

// 序列化为XML，使用紧凑样式
var xmpStr = xmp.serialize( XMPConst.SERIALIZE_USE_COMPACT_FORMAT );
```

---

### 使用XMPFile进行批处理

此示例遍历文件夹中的图像文件并处理元数据。脚本按以下方式处理每张图片：

- 读取并解析元数据。如果图像文件不包含XMP元数据，则自动将旧元数据转换为XMP。
- 删除现有的创建者列表，并添加一个新的创建者值。
- 将修改后的元数据写回文件。

```javascript
$.writeln( "XMPFiles批处理示例" );

// 定义包含图像的文件夹（确保使用副本）
var picFolder = "/c/temp/photos";

// 加载XMPScript库
if ( ExternalObject.AdobeXMPScript == undefined ) {
 ExternalObject.AdobeXMPScript = new ExternalObject( "lib:AdobeXMPScript" );
}

// 遍历文件夹中的照片
var pics = Folder(picFolder).getFiles();
for ( var i = 0; i < pics.length; i++ ) {
 var file = pics[i];
 $.writeln( "处理文件: " + file.fsName );

 // 仅适用于文件，不适用于文件夹
 if ( file instanceof File ) {
 var xmpFile = new XMPFile( file.fsName, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_UPDATE );
 var xmp = xmpFile.getXMP();

 // 删除现有作者并添加一个新作者
 // 现有元数据保持不变
 xmp.deleteProperty( XMPConst.NS_DC, "creator" );
 xmp.appendArrayItem( XMPConst.NS_DC, "creator", "Judy", 0, XMPConst.ARRAY_IS_ORDERED );

 // 将更新后的元数据写入文件
 if ( xmpFile.canPutXMP( xmp ) ) {
 xmpFile.putXMP( xmp );
 }
 xmpFile.closeFile( XMPConst.CLOSE_UPDATE_SAFELY );
 }
}
```

---

### 将XMPScript与Adobe Bridge集成

此脚本为缩略图的上下文菜单添加了一个命令，显示一些XMP属性。

它演示了如何检索与`Thumbnail`对象一起存储的XMP元数据，并使用它创建一个[XMPMeta对象](../xmpscript-object-reference#xmpmeta-object)，然后使用该对象检索不同类型的属性值。

要使用此脚本，请将其放置在Adobe Bridge的“启动脚本”文件夹中（请参阅[启动脚本](../../introduction/scripting-for-specific-applications#startup-scripts)）。当您启动Adobe Bridge时，选择一个包含XMP元数据的文档的缩略图，右键单击，然后从菜单中选择**显示XMP属性**。

```javascript
$.writeln("XMPFiles批处理示例");

// 定义包含图像的文件夹（确保使用副本）
var picFolder = "/c/temp/photos";

// 加载XMPScript库
$.writeln("XMPScript Adobe Bridge集成示例");

// 加载XMPScript库
if ( ExternalObject.AdobeXMPScript == undefined ) {
 ExternalObject.AdobeXMPScript = new ExternalObject( "lib:AdobeXMPScript" );
}
// 为缩略图添加上下文菜单项
var xmpCommand = new MenuElement( "command", "显示XMP属性", "在缩略图末尾", "showProperties" );

// 定义命令行为
xmpCommand.onSelect = function(m) {

// 获取第一个选中的缩略图
var thumb = app.document.selections[0];

// 如果存在且包含元数据
if ( thumb && thumb.metadata ) {

 // 从缩略图检索元数据到XMPMeta对象中`
 // （如果app.synchronousMode已设置，则使用thumb.metadata）

 var xmp = new XMPMeta( thumb.synchronousMetadata.serialize() );

 // 检索一些XMP属性值
 // 一个带有本地化字符串值的简单属性
 var msg = "标题: " + xmp.getLocalizedText( XMPConst.NS_DC, "title", null, "en" ) + "\n";

 // 一个数组属性
 msg += "文档的作者:\n";
 var num = xmp.countArrayItems( XMPConst.NS_DC, "creator" );

 for ( var i = 1; i <= num; i++ ) {}
 msg += "* " + xmp.getArrayItem( XMPConst.NS_DC, "creator", i ) + "\n";
 }

 // 一个带有日期值的简单属性
 msg += "创建日期: " + xmp.getProperty( XMPConst.NS_XMP, "CreateDate" )

 // 显示值
 Window.alert( msg );
} else {
 Window.alert( "未选择缩略图或不包含XMP" );
}
```
