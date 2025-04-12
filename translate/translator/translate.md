---
title: 前端语言
---

### **前端语言**

#### **HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello, World!</title>
  </head>
  <body>
    <!-- 输出 "Hello, World!" 在页面中 -->
    <h1>Hello, World!</h1>
  </body>
</html>
```

#### **CSS**

```css
/* 为HTML中的h1元素设置样式 */
h1 {
  color: blue; /* 文本颜色为蓝色 */
  text-align: center; /* 文本居中 */
}
```

#### **JavaScript**

```javascript
// 输出 "Hello, World!" 在浏览器的控制台中
console.log('Hello, World!');
```

#### **TypeScript**

```typescript
// TypeScript 中输出 "Hello, World!"
let message: string = 'Hello, World!'; // 声明一个字符串变量
console.log(message); // 打印到控制台
```

```ts
type CommonRequest = Omit<RequestInit, 'body'> & { body?: URLSearchParams };

export async function request(url: string, init?: CommonRequest) {
  if (import.meta.env.DEV) {
    const nodeFetch = await import('node-fetch');
    const https = await import('node:https');

    const agent = url.startsWith('https')
      ? new https.Agent({ rejectUnauthorized: false })
      : undefined;

    return nodeFetch.default(url, { ...init, agent });
  }

  return fetch(url, init);
}
```

#### **Python**

```python
# 输出 "Hello, World!" 到终端
print("Hello, World!")
```

#### **Go**

```go
// 输出 "Hello, World!" 到终端
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!") // 打印字符串
}
```

#### inline code

`<type>[] detail(<geometry>geometry, string attribute_name, int ignored=0)`
