---
title: ClassData 函数
---
# ClassData 函数

所有支持媒体的插件类型都可以使用这些回调来共享与其 classID 关联的信息。

例如，这些插件可以使用 ClassData 函数来确认其硬件是否存在并正常运行。

它们都会在初始化期间调用 `getClassData`。如果 `getClassData` 返回 0，模块会检查并初始化硬件。

然后调用 `setClassData` 来存储有关当前上下文的信息。存储信息时请使用句柄，而不是指针。

```c++
typedef struct {
 SetClassDataFunc setClassData;
 GetClassDataFunc getClassData;
} ClassDataFuncs, *ClassDataFuncsPtr;
```

---

## 方法

### setClassData

`setClassData`

#### 描述

写入类数据，销毁之前的数据。

请注意，所有共享数据的插件必须使用相同的数据结构。

```cpp
int setClassData (
 unsigned int theClass,
 void *info);
```

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `theClass` | 无符号整数 | 要设置的类。使用唯一的 4 字节代码。 |
| `info` | 指针或句柄 | 要设置的类数据。它可以作为指针或句柄使用。 |

---

### getClassData

`getClassData`

#### 描述

检索给定类的类数据。

```cpp
int getClassData (
 unsigned int theClass);
```

#### 参数

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| `theClass` | 无符号整数 | 要检索数据的类。 |
