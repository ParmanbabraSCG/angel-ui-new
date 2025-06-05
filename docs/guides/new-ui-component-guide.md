# Guide: Creating Reusable UI Components

This guide outlines the best practices and steps for creating new, reusable UI components in this project. Adhering to these guidelines ensures consistency, maintainability, and reusability across the application.

## 1. Component Location

Reusable UI components should be placed in the following directories:

*   **`src/components/ui/`**: For general-purpose UI components that are not specific to forms (e.g., `Button`, `Modal`, `Table`, `Badge`).
*   **`src/components/form/`**: For UI components specifically designed for form inputs (e.g., `InputField`, `Select`, `Checkbox`, `FormControl`).

## 2. Naming Conventions

*   **File Names**: Use `PascalCase` for component file names (e.g., `MyComponent.tsx`).
*   **Component Names**: Use `PascalCase` for the component function/class name (e.g., `const MyComponent: React.FC<MyComponentProps> = (...)`).

## 3. Defining Props

Always define an explicit TypeScript interface for your component's props. This provides clear documentation for how to use the component and enables type-checking.

```typescript
interface MyComponentProps {
  // Required string prop
  text: string;
  // Optional number prop with a default value
  value?: number;
  // Callback function prop
  onClick: () => void;
  // ReactNode for child elements
  children?: React.ReactNode;
  // Custom CSS classes
  className?: string;
}
```

## 4. Styling

**Primary Styling Method: Tailwind CSS Utility Classes**

All styling for UI components should primarily use [Tailwind CSS utility classes](https://tailwindcss.com/docs/utility-first). This ensures a consistent design system and rapid development.

*   **Direct Application**: Apply utility classes directly to your JSX elements using the `className` prop.
    ```typescript
    <div className="bg-white p-4 rounded-lg shadow-md">
      <p className="text-lg font-semibold text-gray-800">Component Title</p>
    </div>
    ```
*   **Conditional Styling**: For conditional classes, use `clsx` (or `classnames`) and `tailwind-merge`.
    *   Install: `npm install clsx tailwind-merge`
    *   Import: `import { clsx } from "clsx"; import { twMerge } from "tailwind-merge";`
    *   Usage:
        ```typescript
        <button
          className={twMerge(
            clsx(
              "py-2 px-4 rounded-md font-medium",
              isDisabled ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-brand-500 text-white",
              customClassName // from props
            )
          )}
        >
          {children}
        </button>
        ```

**Adhering to the Project Theme (`src/index.css`)**

Refer to `src/index.css` for predefined CSS custom properties (variables) that define the project's color palette, typography, and other design tokens. Tailwind utility classes are configured to map to these variables.

*   **Colors**: Use semantic color utilities (e.g., `bg-brand-500`, `text-error-500`).
*   **Font Family**: The primary font is 'Outfit'. Use Tailwind's font utilities.
*   **Breakpoints**: Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, etc.).
*   **Dark Mode**: Ensure components support dark mode by using Tailwind's `dark:` variants.
    ```typescript
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    ```

## 5. Reusability and Genericity

*   Design components to be as generic and reusable as possible. Avoid hardcoding values or logic that could be passed as props.
*   If a component is only used in one specific feature, consider placing it within that feature's `components/` directory (`src/features/your-feature/components/`) instead of the global `src/components/`.

## 6. Accessibility (A11y)

Consider accessibility best practices during component development:

*   **Semantic HTML**: Use appropriate HTML tags (e.g., `button` for buttons, `a` for links, `form` for forms, `label` with `htmlFor` for inputs).
*   **ARIA Attributes**: Use ARIA attributes when standard HTML semantics are insufficient (e.g., `aria-label`, `aria-expanded`).
*   **Keyboard Navigation**: Ensure components are fully navigable and operable using only the keyboard.
*   **Focus Management**: Manage focus appropriately for interactive elements (e.g., modals).

## 8. Documentation and Examples

To ensure new UI components are easily discoverable and understood, always follow these steps:

*   **Update `components-guide.md`**: After creating a new UI component, add a detailed entry for it in `docs/guides/components-guide.md`. This entry should include its purpose, props, and any relevant notes.
*   **Create an Example Component**: For every new UI component, create a corresponding example implementation within the `src/features/example/forms/form-elements/components/` (for form components) or `src/features/example/ui-elements/` (for general UI components) directory. This example should demonstrate the component's usage with various props and states, and then be integrated into the respective example page (e.g., `src/features/example/forms/form-elements/pages/FormElements.tsx`).

### Overview of Example Implementations

To help you find relevant examples, here is a brief overview of what is demonstrated in the `src/features/example/` directory:

*   **`src/features/example/calendar/`**:
    *   Demonstrates a full-featured calendar using `@fullcalendar/react`.
    *   Includes event creation, editing, and display.
    *   Located in `src/features/example/calendar/pages/Calendar.tsx`.
*   **`src/features/example/charts/`**:
    *   Contains examples of different chart types (Bar, Line) using `react-apexcharts`.
    *   Bar charts are in `src/features/example/charts/bar-chart/`.
    *   Line charts are in `src/features/example/charts/line-chart/`.
*   **`src/features/example/dashboard/`**:
    *   Showcases a sample dashboard layout.
    *   Includes various metric cards, charts (`MonthlySalesChart`, `StatisticsChart`, `MonthlyTarget`), a `CountryMap` (using `@react-jvectormap`), and a `RecentOrders` table.
    *   The main page is `src/features/example/dashboard/pages/Home.tsx`.
*   **`src/features/example/forms/`**:
    *   **`form-elements/`**: This is the primary location for demonstrating individual form components.
        *   Includes examples for `InputField`, `Select`, `TextArea`, `Checkbox`, `Radio`, `Switch`, `FileInput`, `DropzoneComponent`, and the `FormControl` wrapper.
        *   Components are in `src/features/example/forms/form-elements/components/` and aggregated in `src/features/example/forms/form-elements/pages/FormElements.tsx`.
*   **`src/features/example/tables/`**:
    *   Provides examples of table implementations.
    *   `basic-tables/` demonstrates a basic table with sorting and pagination.
    *   Located in `src/features/example/tables/basic-tables/pages/BasicTables.tsx`.
*   **`src/features/example/ui-elements/`**:
    *   This directory showcases various general UI components.
    *   **`alerts/`**: Examples of `Alert` components with different variants. (`src/features/example/ui-elements/alerts/pages/Alerts.tsx`)
    *   **`avatars/`**: Examples of `Avatar` components with different sizes and statuses. (`src/features/example/ui-elements/avatars/pages/Avatars.tsx`)
    *   **`badges/`**: Examples of `Badge` components with different variants and icons. (`src/features/example/ui-elements/badges/pages/Badges.tsx`)
    *   **`buttons/`**: Examples of `Button` components with different sizes, variants, and states. (`src/features/example/ui-elements/buttons/pages/Buttons.tsx`)
    *   **`images/`**: Examples of responsive images and image grids. (`src/features/example/ui-elements/images/pages/Images.tsx`)
    *   **`videos/`**: Examples of embedded videos with different aspect ratios. (`src/features/example/ui-elements/videos/pages/Videos.tsx`)
*   **`src/features/example/userProfile/`**:
    *   Demonstrates a user profile page with editable sections for personal information and address.
    *   Includes `UserInfoCard`, `UserAddressCard`, and `UserMetaCard`.
    *   The main page is `src/features/example/userProfile/pages/UserProfiles.tsx`.

This overview should make it easier to find an appropriate example when developing new UI components. Remember to update or add to these examples as new patterns or components are introduced.

---
*This guide should be updated as the project evolves and new conventions are established.*

## 7. Example Component Structure

Here's a basic structure for a simple `CustomButton.tsx`:

```typescript
// src/components/ui/CustomButton.tsx

import React from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

interface CustomButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className,
}) => {
  const baseClasses = 'font-medium rounded-md transition-colors duration-200';
  const sizeClasses = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };
  const variantClasses = {
    primary: 'bg-brand-500 text-white hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-opacity-50',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
    danger: 'bg-error-500 text-white hover:bg-error-600 focus:outline-none focus:ring-2 focus:ring-error-500 focus:ring-opacity-50',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        clsx(
          baseClasses,
          sizeClasses[size],
          variantClasses[variant],
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )
      )}
    >
      {children}
    </button>
  );
};

export default CustomButton;
``` 