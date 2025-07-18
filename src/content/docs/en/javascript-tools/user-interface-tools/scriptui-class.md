---
title: scriptui-class
---
# ScriptUI class

The globally available ScriptUI class provides central information about the ScriptUI module. This object is not instantiable.

---

## ScriptUI Classs Attributes

### ScriptUI.Alignment

`ScriptUI.Alignment`

Collects the enumerated values that can be used in the [alignment](../window-object#alignment) and [alignChildren](../window-object#alignchildren) properties of controls and containers, and in the alignment property used to set a control's [titleLayout](../control-objects#titlelayout) property.

Use these constants to set the alignment.

When you query the [alignment](../window-object#alignment) property, it returns index values that correspond to the constants as shown. Constant values are:

- `ScriptUI.Alignment.TOP` (1)
- `ScriptUI.Alignment.BOTTOM` (2)
- `ScriptUI.Alignment.LEFT` (3)
- `ScriptUI.Alignment.RIGHT` (4)
- `ScriptUI.Alignment.FILL` (5)
- `ScriptUI.Alignment.CENTER` (6)

#### Type

Object. Read only.

#### Example

```javascript
myGroup.alignment = [ScriptUI.Alignment.LEFT, ScriptUI.Alignment.TOP]
```

---

### ScriptUI.applicationFonts

`ScriptUI.applicationFonts`

#### Description

Collects the enumerated values that specify the default application fonts.

The available fonts vary according to the application and system configuration.

#### Type

Object

---

### ScriptUI.compatability

`ScriptUI.compatability`

#### Description

An object whose properties are the names of compatibility modes supported by the host application. For example, the presence of `ScriptUI.compatability.su1PanelCoordinates` means that the application allows backward compatibility with the coordinate system of Panel elements in ScriptUI version 1.

#### Type

Object

---

### ScriptUI.coreVersion

`ScriptUI.coreVersion`

#### Description

The internal core version number of the ScriptUI components.

#### Type

String. Read only.

---

### ScriptUI.environment

`ScriptUI.environment`

#### Description

A JavaScript object that provides access to attributes of the ScriptUI environment; contains a Keyboard state object that reports the active state of the keyboard at any time, independent of the event-handling framework.

#### Type

[Environment object](../environment#environment-object)

---

### ScriptUI.events

`ScriptUI.events`

#### Description

A JavaScript object that contains one function, [ScriptUI.events.createEvent()](#scriptuieventscreateevent), which allows you to create event objects in order to simulate user-interaction events.

#### Type

Object

---

### ScriptUI.FontStyle

`ScriptUI.FontStyle`

#### Description

Collects the enumerated values that can be used as the style argument to the [ScriptUI.newFont()](#scriptuinewfont) method. For example:

```javascript
var font = ScriptUI.newFont( "Helvetica", ScriptUI.FontStyle.BOLD )
```

Values are:

- `REGULAR`
- `BOLD`
- `ITALIC`
- `BOLDITALIC`

#### Type

String. Read only.

---

### ScriptUI.frameworkName

`ScriptUI.frameworkName`

#### Description

The name of the user-interface framework with which this ScriptUI component is compatible.

#### Type

String. Read only.

---

### ScriptUI.version

`ScriptUI.version`

#### Description

The main version number of the ScriptUI component framework.

#### Type

String. Read only.

---

## ScriptUI Class Methods

### ScriptUI.events.createEvent()

`ScriptUI.events.createEvent(eventType)`

#### Description

This function is in the JavaScript object contained in the [events](#scriptuievents) property.

This object is passed to a function that you register to respond to events of a certain type that occur in a window or control. Use [windowObj.addEventListener()](../window-object#addeventlistener) or [controlObj.addEventListener()](../control-objects#addeventlistener) to register a handler function.

See [Registering event listeners for windows or controls](../defining-behavior-with-event-callbacks-and-listeners#registering-event-listeners-for-windows-or-controls).

#### Parameters

| Parameter | Type | Description |
|---|---|---|
| `eventType` | String | The type of event, one of: |
| | | - `UIEvent` |
| | | - `KeyboardEvent` |
| | | - `MouseEvent` |
| --- | --- | --- |

#### Returns

It returns an event object of the appropriate type:

- A [UIEvent base class](../event-handling#uievent-base-class) encapsulates input event information for an event that propagates through a container and control hierarchy. This is a base class for the more specialized keyboard and mouse event types.
- A [KeyboardEvent object](../event-handling#keyboardevent-object) encapsulates information about keyboard input events.
- A [MouseEvent object](../event-handling#mouseevent-object) encapsulates information about mouse events.

---

### ScriptUI.getResourceText()

`ScriptUI.getResourceText(text)`

#### Description

Finds and returns the resource for a given text string from the host application's resource data. If no string resource matches the given text, the text itself is returned.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | String | The text to match. |

#### Returns

String

---

### ScriptUI.newFont()

`ScriptUI.newFont(name, style, size);`

#### Description

Creates a new font object for use in text controls and titles.

#### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | String | The font or font family name string. |
| `style` | String | The font style string or an enumerated value from [ScriptUI.FontStyle](#scriptuifontstyle) |
| `size` | Number | The font size in points, a number. |

#### Returns

[ScriptUIFont object](../graphic-customization-objects#scriptuifont-object)

---

### ScriptUI.newImage()

`ScriptUI.newImage( normal, disabled, pressed, rollover );`

#### Description

Creates a new image object for use in controls that can display images, loading the associated images from the specified resources or image files.

#### Parameter

| Parameter | Type | Description |
| --- | --- | --- |
| `normal` | String | The resource name or path to the image to use for the normal or default state. |
| `disabled` | String | The resource name or path to the image to use for the disabled state, shown when the control containing the image is disabled (enabled=false). |
| `pressed` | String | The resource name or path to the image to use for the pressed state, shown when the user clicks on the image. |
| `rollover` | String | The resource name or path to the image to use for the rollover state, which is shown when the cursor moves over the image. |

#### Returns

[ScriptUIImage object](../graphic-customization-objects#scriptuiimage-object)
