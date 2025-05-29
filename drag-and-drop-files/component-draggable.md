### Component: draggable.vue

## Props

<ul>
<li>manager: IDndManager — Required manager instance.</li>

<li>dropAreaId?: string — Filter target areas.</li>

<li>onConsiderClasses?: string[] — Classes applied when an item is considered for drop.</li>

<li>onDownClasses?: string[] — Classes applied on pointer down.</li>

<li>onMoveClasses?: string[] — Classes applied during drag.</li>

<li>behaviour?: 'move' | 'copy' — Defines the drop behavior.</li>

<li>onWillDrop?: (hook) => void — Hook for conditional drop logic.</li>

<li>onWillPick?: (hook) => void — Hook for conditional pickup logic.</li>

<li>dropFactory?: IDraggableConfig['droppedItemFactory'] — Custom dropped item creation.</li>

<li>ghostFactory?: IDraggableConfig['dragGhostFactory'] — Custom ghost creation.</li>

</ul>

## Usage Example

```vue
<draggable :manager="manager" behaviour="copy" :on-down-classes="['down']" :on-move-classes="['move']" drop-area-id="DropArea">
  <template #default>
    <div>Draggable Item</div>
  </template>
</draggable>
```

## Lifecycle

<ul>
<li>Registers itself with the provided manager on mount.</li>

<li>Unregisters and cleans up on unmount.</li>

<li>Hooks for drop/pick behavior are registered during setup.</li>
</ul>
## Event Binding

Emits `down`, `move`, `up` events derived from the internal Draggable.EVENTS
