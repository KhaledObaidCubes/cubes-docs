import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CUBES Documentation",
  head: [['link', { rel: 'icon', href: '../assets/cubesplatform.ico' }]],
  description: "Welcome to the official documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Get started", link: "/introduction" },
    ],

    sidebar: [
      {items: [{ text: "Introduction", link: "/introduction" }]},
      {
        text: "Tree Data structure",
        items: [
          { text: "Usage", link: "/tree-files/usage" },
          { text: "Requirements", link: "/tree-files/requirements" },
          { text: "Nest Deeper Levels", link: "/tree-files/nestDeeperLevels" },
          { text: "Export as JSON", link: "/tree-files/exportJSON" },
          { text: "Tree with check boxes", link: "/tree-files/checkedTree" },
        ],
      },
      {
        text: "Drag-Drop",
        items: [
          { text: "Overview", link: "/drag-and-drop-files/overview.md" },
          { text: "Draggable component", link: "/drag-and-drop-files/component-draggable.md" },
          { text: "Draggable class", link: "/drag-and-drop-files/draggable-class.md" },
          { text: "Manager class", link: "/drag-and-drop-files/dndmanager-class.md" },
          { text: "Middleware", link: "/drag-and-drop-files/middleware.md" },
          { text: "Listening to Events", link: "/drag-and-drop-files/Listening-to-Events.md" },
          { text: "Drop Area Configuration", link: "/drag-and-drop-files/drag-config.md" },
          { text: "Export as JSON", link: "/exportJSON" },
          { text: "Tree with check boxes", link: "/checkedTree" },
        ],
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/KhaledObaidCubes/cubes-docs" },
    ],
  },
});
