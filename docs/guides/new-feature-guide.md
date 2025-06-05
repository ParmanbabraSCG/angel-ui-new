# Guide: Adding a New Feature

This guide outlines the steps and conventions for adding a new feature to the Warehouse Management System (WMS) project. It follows the project structure defined in the `PROJECT_OVERVIEW.md`.

## 1. Overview

Adding a new feature typically involves creating a dedicated module within the `src/features/` directory. This modular approach helps in organizing code, promoting reusability, and ensuring separation of concerns.

## 2. Directory Structure for a New Feature

When creating a new feature, let's say `new-feature-name`, you should create the following directory structure under `src/features/`:

```
src/
└── features/
    └── new-feature-name/
        ├── components/     # React components specific to this feature
        ├── hooks/          # Custom React hooks for this feature
        ├── services/       # API calls or other services related to this feature
        ├── store/          # Zustand store for this feature's state management
        ├── types/          # TypeScript type definitions specific to this feature
        └── utils/          # Utility functions used only within this feature
```

## 3. Purpose of Each Subdirectory

*   **`components/`**: Contains React components that are exclusively used within this feature. If a component is intended to be shared across multiple features, it should be placed in the global `src/components/` directory.

*   **`hooks/`**: Holds custom React hooks that encapsulate logic specific to this feature. For hooks that might be useful in other parts of the application, consider placing them in `src/hooks/`.

*   **`services/`**: This directory is for modules that handle external interactions, primarily API calls. For example, functions to fetch data from or send data to the backend related to this feature.

*   **`store/`**: Contains the Zustand store specifically for managing the state of this feature. This includes the state definition, actions, and selectors relevant to the feature.
    *   Example: `useNewFeatureStore.ts`

*   **`types/`**: Store TypeScript type definitions and interfaces that are unique to this feature. Global types shared across the application should reside in `src/types/`.

*   **`utils/`**: Includes utility functions that are only used by this feature. Global utility functions should be in `src/utils/`.

## 4. Steps to Create and Integrate a New Feature

1.  **Create the Feature Directory**: Create a new folder for your feature under `src/features/your-feature-name/`.

2.  **Set up Subdirectories**: Inside your feature folder, create only the necessary subdirectories based on your feature's requirements. Common directories include:
    * `components/` - For React components
    * `hooks/` - For custom React hooks
    * `services/` - For API calls
    * `store/` - For Zustand state management
    * `types/` - For TypeScript types
    * `utils/` - For utility functions

    Only create the directories you actually need - there's no requirement to create empty directories that won't be used.

3.  **Develop Feature Components**: Implement the UI components for your feature in the `components/` directory. This typically includes creating a main page component for the feature (e.g., `YourFeaturePage.tsx` or `HomePage.tsx`).

4.  **Implement Feature Logic**: 
    *   Create custom hooks in `hooks/` for reusable component logic.
    *   Develop service functions in `services/` for API interactions.
    *   Define specific types in `types/`.
    *   Write utility functions in `utils/`.

5.  **Manage State with Zustand**: 
    *   Create a new Zustand store in `store/` (e.g., `useMyFeatureStore.ts`).
    *   Define the necessary state variables and actions within this store.

6.  **Routing (Frontend)**: 
    *   Define new routes related to your feature. This typically involves:
        *   Importing your main feature page component (e.g., `import YourFeaturePage from './features/your-feature-name/components/YourFeaturePage';`) at the top of `src/App.tsx`.
        *   Adding a new `<Route>` definition within the `<Routes>` section of `src/App.tsx`, linking a path to your feature's main component (e.g., `<Route path="/your-feature" element={<YourFeaturePage />} />`).

7.  **Add Menu Item to Sidebar (Optional)**:
    *   If your new feature needs an entry in the main navigation sidebar, you'll need to update `src/components/layout/AppSidebar.tsx`.
    *   Locate the `navItems` or `othersItems` arrays within this file.
    *   Add a new object to the appropriate array, following the `NavItem` type structure:
        ```typescript
        type NavItem = {
          name: string; // Display name of the menu item
          icon: React.ReactNode; // JSX for the icon
          path?: string; // Route path if it's a direct link
          subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[]; // For dropdown sub-menus
        };
        ```
    *   **Example - Adding a top-level item to `navItems`**:
        ```typescript
        // Before (Example)
        const navItems: NavItem[] = [
          {
            icon: <GridIcon />,
            name: "Dashboard",
            subItems: [{ name: "Ecommerce", path: "/", pro: false }],
          },
          // ... other items
        ];

        // After (Example - adding "My New Feature")
        import { YourNewFeatureIcon } from '../../icons'; // Make sure to import your icon

        const navItems: NavItem[] = [
          {
            icon: <GridIcon />,
            name: "Dashboard",
            subItems: [{ name: "Ecommerce", path: "/", pro: false }],
          },
          {
            icon: <YourNewFeatureIcon />,
            name: "My New Feature",
            path: "/my-new-feature", // Path to your feature's main page
          },
          // ... other items
        ];
        ```
    *   **Example - Adding an item with sub-menu to `othersItems`**:
        ```typescript
        // Before (Example)
        const othersItems: NavItem[] = [
          {
            icon: <PieChartIcon />,
            name: "Charts",
            subItems: [
              { name: "Line Chart", path: "/line-chart", pro: false },
            ],
          },
          // ... other items
        ];

        // After (Example - adding "Utilities Feature")
        import { UtilitiesIcon } from '../../icons'; // Make sure to import your icon

        const othersItems: NavItem[] = [
          {
            icon: <PieChartIcon />,
            name: "Charts",
            subItems: [
              { name: "Line Chart", path: "/line-chart", pro: false },
            ],
          },
          {
            icon: <UtilitiesIcon />,
            name: "Utilities Feature",
            subItems: [
              { name: "Utility One", path: "/utilities/one" },
              { name: "Utility Two", path: "/utilities/two", new: true },
            ],
          },
          // ... other items
        ];
        ```
    *   Remember to import any new icons you might use for your menu item.

8.  **Integration with Shared Components/Services**: 
    *   If your feature needs to use shared components, hooks, or utilities, import them from the global `src/components/`, `src/hooks/`, etc., directories.
    *   If your feature contributes a component or utility that could be useful for other features, consider refactoring it into the shared directories.

9.  **Styling**: 
    *   Utilize **Tailwind CSS utility classes** for all styling directly within your React components. This is the primary method for styling in the project.
        *   **Example**: `className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"`
    *   Refer to `src/index.css` for a comprehensive set of predefined **CSS custom properties (variables)**. While you'll primarily use Tailwind classes, understanding these variables helps in understanding the theme.
        *   **Font Family**: The primary font is 'Outfit'. Tailwind's font utilities (e.g., `font-sans` if `Outfit` is mapped to it, or a custom utility like `font-outfit`) should be used. Charts components (e.g., ApexCharts) might require direct font family specification: `fontFamily: "Outfit, sans-serif"`.
        *   **Colors**: An extensive color palette is available (e.g., `--color-brand-500`, `--color-gray-200`, `--color-error-500`). Tailwind utility classes like `bg-brand-500`, `text-gray-200`, `border-error-500` directly map to these.
            *   Use semantic color utilities for statuses: `bg-success-500` for success, `bg-warning-500` for warnings, `bg-error-500` for errors.
        *   **Text Sizes & Line Heights**: Use Tailwind's typographic utilities (e.g., `text-sm`, `text-lg`, `leading-tight`). The custom variables in `index.css` (e.g., `--text-title-lg`) are generally applied through Tailwind's theme configuration.
        *   **Breakpoints**: Use Tailwind's responsive prefixes (e.g., `sm:`, `md:`, `lg:`, `xl:`) for responsive design: `className="grid grid-cols-1 md:grid-cols-2 lg:gap-6"`.
        *   **Shadows**: Use Tailwind's shadow utilities (e.g., `shadow-md`, `shadow-lg`).
        *   **Z-Indexes**: Use Tailwind's z-index utilities (e.g., `z-10`, `z-50`).
    *   `src/index.css` also contains **custom utility classes** (e.g., `menu-item`, `menu-item-icon`, `custom-scrollbar`). Prefer these shared utilities for common UI patterns.
    *   The project supports **Dark Mode**. Ensure your components adapt correctly by using Tailwind's `dark:` variants.
        *   **Example**: `className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"`
    *   **Leverage Reusable UI Components**: Utilize existing components from `src/components/ui/` (e.g., `Button`, `Badge`, `Modal`) and `src/components/form/` (e.g., `Input`, `Select`, `Checkbox`). These components already encapsulate project-consistent styling.
        *   **Example**: `<Button variant="primary" size="md">Submit</Button>`
    *   **Styling SVG Icons**: Import SVGs as React components and style them using Tailwind classes via the `className` prop.
        *   **Example**: `<MyIcon className="size-5 text-brand-500 dark:text-brand-400" />`
    *   **Styling Third-Party Libraries**: 
        *   For libraries like FullCalendar, some global styles are already in `src/index.css`. You might need to add minimal custom CSS or use the library's JS API to apply Tailwind classes to specific elements if direct class application isn't possible.
        *   For charting libraries like ApexCharts, pass style properties (colors, fonts) directly in their configuration options, using values from the project's theme (e.g., hex color codes from `src/index.css` like `#465fff` for `brand-500`).
    *   If more complex or shared styles are needed beyond utility classes, consider whether a new custom utility in `src/index.css` would be appropriate. Avoid adding feature-specific CSS files unless absolutely necessary and discuss with the team. Global styles should generally reside in `src/index.css`.

10. **Testing**: 
    *   Add unit tests for your components, hooks, store, and utilities in the relevant subdirectories within `tests/unit/features/your-feature-name/`.
    *   If applicable, create integration tests in `tests/integration/features/your-feature-name/`.
    *   For end-to-end tests covering user flows of your feature, add them to `tests/e2e/features/your-feature-name/`.

## 5. Example File Structure for a "Products" Feature

```
src/
└── features/
    └── products/
        ├── components/
        │   ├── ProductList.tsx
        │   ├── ProductDetail.tsx
        │   └── ProductForm.tsx
        ├── hooks/
        │   └── useProductFilters.ts
        ├── services/
        │   └── productService.ts
        ├── store/
        │   └── useProductStore.ts
        ├── types/
        │   └── productTypes.ts
        └── utils/
            └── productUtils.ts
```

## 6. Best Practices

*   **Keep Features Independent**: Aim to make feature modules as self-contained as possible to reduce coupling between different parts of the application.
*   **Shared vs. Feature-Specific**: Be mindful of when to place code in a feature's directory versus a global directory. If it's only used by one feature, keep it local to that feature.
*   **Follow Naming Conventions**: Use consistent naming conventions for files and directories (e.g., PascalCase for components, camelCase for hooks and functions).
*   **Update Documentation**: If your new feature introduces significant changes or new concepts, update relevant project documentation, including `PROJECT_OVERVIEW.md` or API documentation if applicable.

---
*This guide should be updated as the project evolves and new conventions are established.* 