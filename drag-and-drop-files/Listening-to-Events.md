### Listening to Events

```ts
manager.on(new DnDEvent(DnDManager.EVENTS.complete), (e) => {
  e.info!.draggable.config.dropBehaviour = "move";
});
```
