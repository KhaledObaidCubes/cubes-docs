### Drop Area Configuration

Drop zones are defined by the `data-drop_type` attribute:

```vue
<div data-drop_type="DropArea">Drop Target</div>
```

A dropAreaId can be provided to match specific drop zones:

```vue
<draggable drop-area-id="X" :manager="manager">
  <div>X-Zone</div>
</draggable>
```
