### Custom Drop Factory Example

```ts
draggable.config.droppedItemFactory = (d) => {
  const clone = new Draggable();
  clone.trySetElement(d.element.cloneNode(true));
  return clone;
};
```
