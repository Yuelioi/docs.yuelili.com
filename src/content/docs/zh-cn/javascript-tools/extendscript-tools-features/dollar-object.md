---
title: dollar-object
---
# Dollar ($) object

This global ExtendScript object provides a number of debugging facilities and informational methods. The properties of the $ object allow you to get global information such as the most recent run-time error, and set flags that control debugging and localization behavior. The methods allow you to output text to the JavaScript Console during script execution, control execution and other ExtendScript behavior programmatically, and gather statistics on object use.

---

## 属性

### $.appEncoding

`$.appEncoding`

#### 描述

The Internet name of the application's default character encoding, such as "CP1252" or "X-SHIFT-JIS". Valid values are implementation- and OS-dependent.

Set to change the default encoding for the application. The returned value can differ from the value set. In Windows, for example, if set to "x-latin1", the returned value is the synonymous "ISO-8859-1".

#### 类型

String

---

### $.build

`$.build`

#### 描述

#### 类型

String

The version information for the current ExtendScript build.

Read only.

---

### $.buildDate

`$.buildDate`

#### 描述

#### 类型

`Date`

The date the current JavaScript engine was built.

Read only.

---

### $.decimalPoint

`$.decimalPoint`

#### 描述

#### 类型

String

The character used in formatted numeric output for a decimal point, for the current locale.

Read only.

---

### $.engineName

`$.engineName`

#### 描述

#### 类型

String

The name of the current JavaScript engine, if set.

Read only.

---

### $.error

`$.error`

#### 描述

#### 类型

`Error`

String

The most recent run-time error information, contained in a JavaScript Error object.

Assigning error text to this property generates a run-time error; however, the preferred way to generate a run-time error is to throw an Error object.

---

### $.fileName

`$.fileName`

#### 描述

#### 类型

String

The file name of the current script.

Read only.

---

### $.flags

`$.flags`

#### 描述

#### 类型

Number

Gets or sets low-level debug output flags. A logical AND of the following bit flag values:

- `0x0002` (2): Displays each line with its line number as it is executed.
- `0x0040` (64): Enables excessive garbage collection. Usually, garbage collection starts when the number of objects has increased by a certain amount since the last garbage collection. This flag causes ExtendScript to garbage collect after almost every statement. This impairs performance severely, but is useful when you suspect that an object gets released too soon.
- `0x0080` (128): Displays all calls with their arguments and the return value.
- `0x0100` (256): Enables extended error handling (see strict).
- `0x0200` (512): Enables the localization feature of the toString method. Equivalent to the localize property.

:::note
Other bit values are not public and should not be used.
:::

---

### $.global

`$.global`

#### 描述

Provides access to the Global object, which contains the JavaScript global namespace.

#### 类型

Global

---

### $.hiresTimer

`$.hiresTimer`

#### 描述

A high-resolution timer that measures the number of microseconds since this property was last accessed. Value is initialized as early as possible, so the first access returns the startup time for ExtendScript. The property is thread-local; that is, the first access on a thread returns the time needed to create and initialize that thread.

#### 类型

Number. Read only.

---

### $.includePath

`$.includePath`

#### 描述

The path for include files for the current script.

#### 类型

String. Read only.

---

### $.level

`$.level`

#### 描述

The current debugging level, which enables or disables the JavaScript debugger.

#### 类型

Number. Read only. One of:

- `0`: No debugging
- `1`: Break on runtime errors
- `2`: Full debug mode

---

### $.line

`$.line`

#### 描述

The current line of the currently executing script; the first line is number 1.

#### 类型

Number. Read only.

---

### $.locale

`$.locale`

#### 描述

Gets or sets the current locale. The string contains five characters in the form LL_RR, where LL is an ISO 639 language specifier, and RR is an ISO 3166 region specifier.

Initially, this is the value that the application or the platform returns for the current user. You can set it to temporarily change the locale for testing. To return to the application or platform setting, set to Nothing, `null`, or the empty string.

#### 类型

String

---

### $.localize

`$.localize`

#### 描述

Enable or disable the extended localization features of the built-in `toString()` method.

See [Localizing ExtendScript strings](.././localizing-extendscript-strings).

#### 类型

Boolean

---

### $.memCache

`$.memCache`

#### 描述

Gets or sets the ExtendScript memory cache size in bytes.

#### 类型

Number

---

### $.os

`$.os`

#### 描述

The current operating system version information.

#### 类型

String. Read only.

---

### $.screens

`$.screens`

#### 描述

An array of objects containing information about the display screens attached to your computer.

#### 类型

Array of objects

#### Properties

| Property  |    类型    |                    描述                     |
| --------- | ---------- | -------------------------------------------------- |
| `left`    | Coordinate | The left corner of the drawable area               |
| `top`     | Coordinate | The top corner of the drawable area                |
| `right`   | Coordinate | The right corner of the drawable area              |
| `bottom`  | Coordinate | The bottom corner of the drawable area             |
| `primary` | Boolean    | `true` if the object describes the primary display |

---

### $.stack

`$.stack`

#### 描述

The current stack trace.

#### 类型

String

---

### $.strict

`$.strict`

#### 描述

When `true`, any attempt to write to a read-only property causes a runtime error.

Some objects do not permit the creation of new properties when `true`.

#### 类型

Boolean

---

### $.version

`$.version`

#### 描述

The version number of the JavaScript engine as a three-part number and description; for example: "3.92.95 (debug)"

#### 类型

String. Read only.

---

## 函数

### $.about()

`$.about()`

#### 描述

Displays the About box for the ExtendScript component, and returns the text of the About box as a string.

#### 返回

String

---

### $.bp()

`$.bp([condition])`

#### 描述

Executes a breakpoint at the current position.

If no condition is needed, it is recommended that you use the JavaScript `debugger;` statement in the script, rather than this method.

#### 参数

|  参数  |  类型  |                                                                        描述                                                                         |
| ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `condition` | String | Optional. The JavaScript statement to be used as a condition. If the statement evaluates to `true` or nonzero when this point is reached, execution stops. |

#### 返回

Nothing

---

### $.colorPicker()

`$.colorPicker(name)`

#### 描述

Invokes the platform-specific color selection dialog

#### 参数

| 参数 |                类型                |                                 描述                                  |
| --------- | ---------------------------------- | ---------------------------------------------------------------------------- |
| `name`    | Hexadecimal RGB value (`0xRRGGBB`) | The color to be preselected in the dialog, or `-1` for the platform default. |

#### 返回

Hexadecimal RGB value, e.g. `0xRRGGBB`.

---

### $.evalFile()

`$.evalFile(path[, timeout=10000])`

#### 描述

Loads a JavaScript script file from disk, evaluates it, and returns the result of evaluation.

#### 参数

| 参数 |  类型  |                                                          描述                                                           |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `path`    | String | The name and location of the file.                                                                                             |
| `timeout` | Number | Optional. A number of milliseconds to wait before returning undefined, if the script cannot be evaluated. Defaults to `10000`. |

#### 返回

Any type

---

### $.gc()

`$.gc()`

#### 描述

Initiates garbage collection in the JavaScript engine.

#### 返回

Nothing

---

### $.getenv()

`$.getenv(envname)`

#### 描述

Retrieves the value of the specified environment variable, or null if no such variable is defined.

:::note

- Custom environment variables created with `launchctl setenv CUSTOM_VAR "custom_value"`

:::

Any env vars set in .bash_profile, .bashrc, .profile, .zshenv, or .zshrc will be ignored.

#### 参数

| 参数 |  类型  |              描述              |
| --------- | ------ | ------------------------------------- |
| `envname` | String | The name of the environment variable. |

#### 返回

String

---

### $.setenv()

`$.setenv(envname, value)`

#### 描述

Sets the value of the specified environment variable, if no such variable is defined.

#### 参数

| 参数 |  类型  |              描述              |
| --------- | ------ | ------------------------------------- |
| `envname` | String | The name of the environment variable. |
| `value`   | String | The new value, a string.              |

#### 返回

Nothing

---

### $.sleep()

`$.sleep(milliseconds)`

#### 描述

Suspends the calling thread for the given number of milliseconds.

During a sleep period, checks at `100` millisecond intervals to see whether the sleep should be terminated. This can happen if there is a break request, or if the script timeout has expired.

#### 参数

|   参数    |  类型  |             描述             |
| -------------- | ------ | ----------------------------------- |
| `milliseconds` | Number | The number of milliseconds to wait. |

#### 返回

Nothing

---

### $.write()

`$.write(text[, text...]...)`

#### 描述

Writes the specified text to the JavaScript Console.

#### 参数

| 参数 |  类型  |                                  描述                                  |
| --------- | ------ | ----------------------------------------------------------------------------- |
| `text`    | String | One or more strings to write, which are concatenated to form a single string. |

#### 返回

Nothing

---

### $.writeln()

`$.writeln (text[, text...]...)`

#### 描述

Writes the specified text to the JavaScript Console and appends a linefeed sequence.

#### 参数

| 参数 |  类型  |                                  描述                                  |
| --------- | ------ | ----------------------------------------------------------------------------- |
| `text`    | String | One or more strings to write, which are concatenated to form a single string. |

#### 返回

Nothing
