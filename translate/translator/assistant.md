---
title: Frontend Languages
---

### **Frontend Languages**

#### **HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello, World!</title>
  </head>
  <body>
    <!-- Output "Hello, World!" in the page -->
    <h1>Hello, World!</h1>
  </body>
</html>
```

#### **CSS**

```css
/* Set styles for the h1 element in HTML */
h1 {
  color: blue; /* Text color is blue */
  text-align: center; /* Text is centered */
}
```

#### **JavaScript**

```javascript
// Output "Hello, World!" to the browser's console
console.log('Hello, World!');
```

#### **TypeScript**

```typescript
// Output "Hello, World!" in TypeScript
let message: string = 'Hello, World!'; // Declare a string variable
console.log(message); // Print to the console
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
# Output "Hello, World!" to the terminal
print("Hello, World!")
```

#### **Go**

```go
// Output "Hello, World!" to the terminal
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!") // Print string
}
```

#### inline code

`<type>[] detail(<geometry>geometry, string attribute_name, int ignored=0)`
