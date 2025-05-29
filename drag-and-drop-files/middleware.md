### Middleware

Used to intercept or manipulate drag/drop lifecycle.

# Usage

```ts
const middleware: TMiddleware = (payload) => {
  console.log(payload);
};
manager.use(middleware);
```
