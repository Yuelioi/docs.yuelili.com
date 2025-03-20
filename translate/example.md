---
title: global
---
### posterizeTime()

`posterizeTime(updatesPerSecond)`

#### Description

This expression allows you to set the frame rate for a `property` to be lower than the frame rate of the composition.

#### Parameters

| Parameter            | Type   | Description                                                      |
| -------------------- | ------ | ---------------------------------------------------------------- |
| `updatesPerSecond` | Number | The*number of times per second* the expression should evaluate |

#### Returns

Number

#### Example

To change a property to a random value 1 time per second:

```js
posterizeTime(1);

random()
```

To change a 2d property (such as Position or Scale) to a random value 3 times per second:

```js
posterizeTime(3);

const newValue = random(0, 100);
[newValue, newValue];
```

To change a property to a random value within a specified range, every 12 frames:

```js
const holdFrames = 12;
const minValue = 50;
const maxValue = 100;

posterizeTime(1 / framesToTime(holdFrames));

const newValue = random(minValue, maxValue);
newValue;
```
