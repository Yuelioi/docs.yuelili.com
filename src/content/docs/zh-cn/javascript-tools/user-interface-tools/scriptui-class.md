---
title: scriptui-class
---
# ScriptUI class

The globally available ScriptUI class provides central information about the ScriptUI module. This object is not instantiable.

---

## ScriptUI Classs Attributes

### ScriptUI.Alignment

`ScriptUI.Alignment`

Collects the enumerated values that can be used in the [alignment](window-object.md#alignment) and [alignChildren](window-object.md#alignchildren) properties of controls and containers, and in the alignment property used to set a control's [titleLayout](control-objects.md#titlelayout) property.

Use these constants to set the alignment.

When you query the [alignment](window-object.md#alignment) property, it returns index values that correspond to the constants as shown. Constant values are:

- `ScriptUI.Alignment.TOP` (1)
- `ScriptUI.Alignment.BOTTOM` (2)
- `ScriptUI.Alignment.LEFT` (3)
- `ScriptUI.Alignment.RIGHT` (4)
- `ScriptUI.Alignment.FILL` (5)
- `ScriptUI.Alignment.CENTER` (6)

#### 类型

Object. Read only.

#### 示例

```javascript
myGroup.alignment = [ScriptUI.Alignment.LEFT, ScriptUI.Alignment.TOP]
```

---

### ScriptUI.applicationFonts

`ScriptUI.applicationFonts`

#### 描述

Collects the enumerated values that specify the default application fonts.

The available fonts vary according to the application and system configuration.

#### 类型

Object

---

### ScriptUI.compatability

`ScriptUI.compatability`

#### 描述

An object whose properties are the names of compatibility modes supported by the host application. For example, the presence of `ScriptUI.compatability.su1PanelCoordinates` means that the application allows backward compatibility with the coordinate system of Panel elements in ScriptUI version 1.

#### 类型

Object

---

### ScriptUI.coreVersion

`ScriptUI.coreVersion`

#### 描述

The internal core version number of the ScriptUI components.

#### 类型

String. Read only.

---

### ScriptUI.environment

`ScriptUI.environment`

#### 描述

A JavaScript object that provides access to attributes of the ScriptUI environment; contains a Keyboard state object that reports the active state of the keyboard at any time, independent of the event-handling framework.

#### 类型

[Environment object](environment.md#environment-object)

---

### ScriptUI.events

`ScriptUI.events`

#### 描述

A JavaScript object that contains one function, [ScriptUI.events.createEvent()](#scriptuieventscreateevent), which allows you to create event objects in order to simulate user-interaction events.

#### 类型

Object

---

### ScriptUI.FontStyle

`ScriptUI.FontStyle`

#### 描述

Collects the enumerated values that can be used as the style argument to the [ScriptUI.newFont()](#scriptuinewfont) method. For example:

```javascript
var font = ScriptUI.newFont( "Helvetica", ScriptUI.FontStyle.BOLD )
```

Values are:

- `REGULAR`
- `BOLD`
- `ITALIC`
- `BOLDITALIC`

#### 类型

String. Read only.

---

### ScriptUI.frameworkName

`ScriptUI.frameworkName`

#### 描述

The name of the user-interface framework with which this ScriptUI component is compatible.

#### 类型

String. Read only.

---

### ScriptUI.version

`ScriptUI.version`

#### 描述

The main version number of the ScriptUI component framework.

#### 类型

String. Read only.

---

## ScriptUI Class Methods

### ScriptUI.events.createEvent()

`ScriptUI.events.createEvent(eventType)`

#### 描述

This function is in the JavaScript object contained in the [events](#scriptuievents) property.

This object is passed to a function that you register to respond to events of a certain type that occur in a window or control. Use [windowObj.addEventListener()](window-object.md#addeventlistener) or [controlObj.addEventListener()](control-objects.md#addeventlistener) to register a handler function.

See [Registering event listeners for windows or controls](defining-behavior-with-event-callbacks-and-listeners.md#registering-event-listeners-for-windows-or-controls).

#### 参数

|  参数  |  类型  |        描述         |
|-------------|--------|----------------------------|
| `eventType` | String | The type of event, one of: |
|             |        | - `UIEvent`                |
|             |        | - `KeyboardEvent`          |
|             |        | - `MouseEvent`             |
| ----------- | ------ | -------------------------- |

#### 返回

It returns an event object of the appropriate type:

- A [UIEvent base class](event-handling.md#uievent-base-class) encapsulates input event information for an event that propagates through a container and control hierarchy. This is a base class for the more specialized keyboard and mouse event types.
- A [KeyboardEvent object](event-handling.md#keyboardevent-object) encapsulates information about keyboard input events.
- A [MouseEvent object](event-handling.md#mouseevent-object) encapsulates information about mouse events.

---

### ScriptUI.getResourceText()

`ScriptUI.getResourceText(text)`

#### 描述

Finds and returns the resource for a given text string from the host application's resource data. If no string resource matches the given text, the text itself is returned.

#### 参数

| 参数 |  类型  |    描述     |
| --------- | ------ | ------------------ |
| `text`    | String | The text to match. |

#### 返回

String

---

### ScriptUI.newFont()

`ScriptUI.newFont(name, style, size);`

#### 描述

Creates a new font object for use in text controls and titles.

#### 参数

| 参数 |  类型  |                                        描述                                         |
| --------- | ------ | ------------------------------------------------------------------------------------------ |
| `name`    | String | The font or font family name string.                                                       |
| `style`   | String | The font style string or an enumerated value from [ScriptUI.FontStyle](#scriptuifontstyle) |
| `size`    | Number | The font size in points, a number.                                                         |

#### 返回

[ScriptUIFont object](graphic-customization-objects.md#scriptuifont-object)

---

### ScriptUI.newImage()

`ScriptUI.newImage( normal, disabled, pressed, rollover );`

#### 描述

Creates a new image object for use in controls that can display images, loading the associated images from the specified resources or image files.

#### Parameter

| 参数  |  类型  |                                                                  描述                                                                   |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `normal`   | String | The resource name or path to the image to use for the normal or default state.                                                                 |
| `disabled` | String | The resource name or path to the image to use for the disabled state, shown when the control containing the image is disabled (enabled=false). |
| `pressed`  | String | The resource name or path to the image to use for the pressed state, shown when the user clicks on the image.                                  |
| `rollover` | String | The resource name or path to the image to use for the rollover state, which is shown when the cursor moves over the image.                     |

#### 返回

[ScriptUIImage object](graphic-customization-objects.md#scriptuiimage-object)
