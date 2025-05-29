### Custom Ghost Example

```ts
draggable.config.dragGhostFactory = (draggable) => {
  const ghost = document.createElement("div");
  ghost.innerHTML = "+";
  ghost.className = "ghost";
  ghost.style.position = "fixed";
  return ghost;
};
```
