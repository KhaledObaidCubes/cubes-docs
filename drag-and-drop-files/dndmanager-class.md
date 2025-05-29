### DnDManager (Manager class)

Manages multiple draggables and integrates plugin support.

Plugins

- **DragGhostPlugin** — Handles visual ghosting.

- **DropPlugin** — Custom drop logic.

- **ConsiderPlugin** — Drop target highlighting.

## Usage

```ts
const manager = reactive(new DnDManager());
const onDragMiddleware: TMiddleware = (payload: any) => {
  console.log("%c HELLO", "font-size:100px; color:yellow;");
  console.log(payload);
};
manager.use(onDragMiddleware);
```
