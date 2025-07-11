---
title: objectmodel
---
# The After Effects Object Model

As you look through this reference section, which is organized alphabetically by object, you can refer to the following diagrams for an overview of where the various objects fall within the hierarchy, and their correspondence to the user interface.

![After Effects Object Model](../_static/objectmodel.png "After Effects Object Model")
*Hierarchy diagram of the main After Effects scripting objects*

Note that the [Extendscript File](https://extendscript.docsforadobe.dev/file-system-access/file-object.html), Folder, and Socket objects are defined by ExtendScript, and are documented in the [JavaScript Tools Guide](https://extendscript.docsforadobe.dev/).

ExtendScript also defines the ScriptUI module, a set of window and user-interface control objects, which are available to After Effects scripts. These are also documented in the [JavaScript Tools Guide](https://extendscript.docsforadobe.dev/).

The hierarchy of objects in scripting corresponds to the hierarchy in the user interface.

![After Effects User Interface](../_static/application.png "After Effects User Interface")

The application contains a Project panel, which displays a project. The project contains compositions, which contain layers. The source for a layer can be a footage file, placeholder, or solid, also listed in the Project panel. Each layer contains settings known as properties, and these can contain markers and keyframes. The renderqueue contains render-queue items as well as render settings and output modules. All of these entities are represented by objects in scripting.

:::note
To avoid ambiguity, this manual uses the term "attribute" to refer to JavaScript object properties, and the term "property" or "AE property" to refer to After Effects layer properties.
:::

#### Object summary

The following table lists all objects alphabetically, with links to the documentation page for each.

| Object | Description |
| --- | --- |
| [Global functions](../../general/globals) | Globally available functions that allow you to display text for script debugging purposes, and help convert time values between seconds and frames. |
| [Application object](../../general/application) | A single global object, available by its name (app), that provides access to objects and application settings within the After Effects application. |
| [AVItem object](../../item/avitem) | Represents audio/visual files imported into After Effects. |
| [AVLayer object](../../layer/avlayer) | Represents those layers that contain AVItem objects (composition layers, footage layers, solid layers, text layers, and sound layers). |
| [CameraLayer object](../../layer/cameralayer) | Represents a camera layer within a composition. |
| [Collection object](../../other/collection) | Associates a set of objects or values as a logical group and provides access to them by index. |
| [CompItem object](../../item/compitem) | Represents a composition, and allows you to manipulate it and get information about it. |
| [FileSource object](../../sources/filesource) | Describes footage that comes from a file. |
| [FolderItem object](../../item/folderitem) | Represents a folder in the Project panel. |
| [FootageItem object](../../item/footageitem) | Represents a footage item imported into a project, which appears in the Project panel. |
| [FootageSource object](../../sources/footagesource) | Describes the file source of some footage. |
| [ImportOptions object](../../other/importoptions) | Encapsulates options for importing files into After Effects. |
| [Item object](../../item/item) | Represents an item in a project that appears in the Project panel. |
| [ItemCollection object](../../item/itemcollection) | Collects items in a project. |
| [KeyframeEase object](../../other/keyframeease) | Encapsulates keyframe ease values in an After Effects property. |
| [Layer object](../../layer/layer) | A base class for layer classes. |
| [LayerCollection object](../../layer/layercollection) | Collects layers in a project. |
| [LightLayer object](../../layer/lightlayer) | Represents a light layer within a composition. |
| [MarkerValue object](../../other/markervalue) | Encapsulates marker values in an After Effects property. |
| [MaskPropertyGroup object](../../property/maskpropertygroup) | Encapsulates mask attributes in a layer. |
| [OMCollection object](../../renderqueue/omcollection) | Collects output modules in a render queue. |
| [OutputModule object](../../renderqueue/outputmodule) | Represents an output module for a render queue. |
| [PlaceholderSource object](../../sources/placeholdersource) | Describes a placeholder for footage. |
| [Project object](../../general/project) | Represents an After Effects project. |
| [Property object](../../property/property) | Represents an After Effects property. |
| [PropertyBase object](../../property/propertybase) | A base class for After Effects property and property group classes. |
| [PropertyGroup object](../../property/propertygroup) | Represents an After Effects property group. |
| [RenderQueue object](../../renderqueue/renderqueue) | Represents the After Effects render queue. |
| [RenderQueueItem object](../../renderqueue/renderqueueitem) | Represents a renderable item in a render queue. |
| [RenderQueueItem object](../../renderqueue/renderqueueitem) | Collects render-queue items in a render queue. |
| [RQItemCollection object](../../renderqueue/rqitemcollection) | Provides access to application settings and preferences. |
| [Shape object](../../other/shape) | Encapsulates the outline shape information for a mask. |
| [ShapeLayer object](../../layer/shapelayer) | Represents a shape layer within a composition. |
| [SolidSource object](../../sources/solidsource) | Describes a solid color that is the source of some footage. |
| [System object](../../general/system) | Provides access to the operating system from the application. |
| [TextDocument object](../../text/textdocument) | Encapsulates the text in a text layer. |
| [TextLayer object](../../layer/textlayer) | Represents a text layer within a composition. |
| [Viewer object](../../other/viewer) | Represents a Composition, Layer, or Footage panel. |
