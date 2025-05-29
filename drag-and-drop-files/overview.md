### Overview

This documentation covers a Vue 3 drag-and-drop system built using composable architecture. It is intended to serve as a reference for integrating, extending, and understanding the core functionalities of the Draggable component and the DnDManager system in VitePress environments.

Installation and Setup

Ensure the project is using Vue 3 and Vite. The following folder structure is assumed:

```
src/
├── components/
│   └── draggable.vue
├── domain/
│   ├── bese/
│   │   └── DndElement(def.ts)
│   ├── dnd-manager/
│   │   └──DnDManager(def.ts)
│   ├── draggable/
│   │   └── Draggable(def.ts)
│   ├── event/
│   │   ├── dispatcher/
│   │   │    └── DispatcherBase(def.ts)Event
│   │   ├── Event(def.ts)
│   │   └── DnDEvent(def.ts)
│   └──middleware WithMiddleware
│       └── WithMiddleware(def.ts)
└── App.vue
```

## Concepts

The drag-and-drop system relies on the following concepts:

<ul>
<li>Draggable: The main interactive component.</li>
<li>DnDManager: Manages state, plugins, and coordination.</li>
<li>Plugins: Optional enhancements (e.g., ghost visuals, drop logic).</li>
</ul>
