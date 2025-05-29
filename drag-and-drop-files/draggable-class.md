### **Draggable** class

## Event

```ts
static EVENTS = {
  willPick: 'willPick',
  didPick: 'didPick',
  down: 'down',
  move: 'move',
  up: 'up',
  upCancelled: 'upCancelled'
}
```

## Methods

- **onWillPick(hook)** — Promise-based hook before pickup.

- **onDidPick(hook)** — Executed after a successful pickup.

- **onWillDrop(hook)** — Pre-drop logic.

- **onDidDrop(hook)** — Post-drop callback.

- **trySetElement(element)** — Initializes element.

- **dispose()** — Cleanup listeners and state.

## Style Application

```ts
private onDownStyle() {
  element?.classList.add(...(config.onDownClasses ?? []))
}

private resetStyle() {
  element?.classList.remove(...(config.onDownClasses ?? []), ...(config.onMoveClasses ?? []))
}
```
