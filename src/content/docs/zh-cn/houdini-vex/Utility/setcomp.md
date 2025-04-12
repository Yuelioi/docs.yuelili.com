---
title: setcomp
order: 18
---

`float|void setcomp(<vector>&target, float value, int index)`

通过将`index`处的分量修改为`value`，原地修改`target`向量。

如果以`float`返回类型调用，则返回`value`。

`float|void setcomp(<matrix>&target, float value, int row, int column)`

通过将`row`和`column`指定的分量修改为`value`，原地修改`target`矩阵。

如果以`float`返回类型调用，则返回`value`。

`<type> setcomp(<type>&array[], <type>value, int index)`

将`array`中`index`处的项设置为`value`，并返回`value`。

这等同于`array[index] = value`。

`float  setcomp(<vector>&array[], float value, int i, int j)`

通过将`j`处的分量修改为`value`，原地修改`array[i]`向量，并返回`value`。

这等同于`setcomp(array[i], value, j)`。

`float  setcomp(<matrix>&array[], float value, int i, int j, int k)`

通过将`j`和`k`指定的分量修改为`value`，原地修改`array[i]`矩阵，并返回`value`。

这等同于`setcomp(array[i], value, j, k)`。

`<type> setcomp(dict &d, <type>value, string index)`

`<type>[] setcomp(dict &d, <type>value[], string index)`

将字典`d`中`index`处的项设置为`value`，并返回`value`。

这等同于`d[index] = value`。

注意：由于要设置的类型不是由左侧决定的，可能需要完整指定`value`的类型以避免歧义。
