# Components Guide

This document provides an overview of the reusable UI components available in the `src/components` directory.

## Form Components (`src/components/form`)

### `Checkbox.tsx`
- **Purpose**: Renders a customizable checkbox input.
- **Props**:
    - `label` (string, optional): Text label displayed next to the checkbox.
    - `checked` (boolean, required): Whether the checkbox is currently checked.
    - `className` (string, optional): Custom CSS classes for the input element.
    - `id` (string, optional): ID for the checkbox input.
    - `onChange` (function, required): Callback function `(checked: boolean) => void` triggered when the checkbox state changes.
    - `disabled` (boolean, optional): If true, the checkbox is disabled. Defaults to `false`.
- **Notes**: Includes an SVG icon for the checkmark.

### `InputField.tsx`
- **Purpose**: Renders a general-purpose input field.
- **Props**:
    - `type` (string, optional): Input type (e.g., "text", "number", "email", "password"). Defaults to "text".
    - `id` (string, optional): ID for the input field.
    - `name` (string, optional): Name for the input field.
    - `placeholder` (string, optional): Placeholder text.
    - `value` (string | number, optional): Current value of the input.
    - `onChange` (function, optional): Callback `(e: React.ChangeEvent<HTMLInputElement>) => void` on value change.
    - `className` (string, optional): Custom CSS classes.
    - `min` (string, optional): Minimum value (for number/date types).
    - `max` (string, optional): Maximum value (for number/date types).
    - `step` (number, optional): Step value (for number types).
    - `disabled` (boolean, optional): If true, the input is disabled. Defaults to `false`.
    - `success` (boolean, optional): If true, applies success styling. Defaults to `false`.
    - `error` (boolean, optional): If true, applies error styling. Defaults to `false`.
    - `hint` (string, optional): Hint text displayed below the input.
- **Notes**: Styling changes based on `disabled`, `success`, and `error` props.

### `RadioSm.tsx`
- **Purpose**: Renders a small-sized radio button.
- **Props**:
    - `id` (string, required): Unique ID for the radio button.
    - `name` (string, required): Group name for the radio button.
    - `value` (string, required): Value of the radio button.
    - `checked` (boolean, required): Whether the radio button is checked.
    - `label` (string, required): Label text for the radio button.
    - `onChange` (function, required): Callback `(value: string) => void` when the radio button is toggled.
    - `className` (string, optional): Optional custom classes.
- **Notes**: Styled for a compact appearance.

### `date-picker.tsx` (DatePicker)
- **Purpose**: Renders a date picker input using `flatpickr`.
- **Props**:
    - `id` (string, required): ID for the input element that `flatpickr` will attach to.
    - `mode` ("single" | "multiple" | "range" | "time", optional): Mode for `flatpickr`. Defaults to "single".
    - `onChange` (Hook | Hook[], optional): `flatpickr` onChange hook.
    - `defaultDate` (DateOption, optional): `flatpickr` defaultDate option.
    - `label` (string, optional): Label for the date picker.
    - `placeholder` (string, optional): Placeholder for the input.
- **Dependencies**: `flatpickr`, `src/components/form/Label.tsx`, `src/icons/CalenderIcon`.
- **Notes**: Uses `flatpickr` library for date selection. Includes a calendar icon.

### `DropZone.tsx` (DropzoneComponent)
- **Purpose**: Implements a file dropzone area for uploads using `react-dropzone`.
- **Props**: (Implicitly from `useDropzone`)
    - `onDrop` (function): Callback `(acceptedFiles: File[]) => void` when files are dropped.
    - `accept` (object, optional): Specifies accepted file types (e.g., `{"image/png": []}`).
- **Dependencies**: `react-dropzone`.
- **Notes**: Handles drag-and-drop and click-to-browse. Currently configured to accept PNG, JPEG, WebP, and SVG images.

### `PhoneInput.tsx`
- **Purpose**: Renders an input field for phone numbers with a country code selector.
- **Props**:
    - `countries` (CountryCode[], required): Array of country objects `{ code: string, label: string }`.
    - `placeholder` (string, optional): Placeholder for the phone number input. Defaults to "+1 (555) 000-0000".
    - `onChange` (function, optional): Callback `(phoneNumber: string) => void` when the phone number (including country code) changes.
    - `selectPosition` ("start" | "end", optional): Position of the country code dropdown. Defaults to "start".
- **Notes**: Manages selected country and phone number state internally.

### `Select.tsx`
- **Purpose**: Renders a standard HTML select dropdown.
- **Props**:
    - `options` (Option[], required): Array of option objects `{ value: string, label: string }`.
    - `placeholder` (string, optional): Placeholder text for the select. Defaults to "Select an option".
    - `onChange` (function, required): Callback `(value: string) => void` when the selection changes.
    - `className` (string, optional): Custom CSS classes.
    - `defaultValue` (string, optional): Default selected value. Defaults to `""`.
- **Notes**: Manages its selected value internally.

### `MultiSelect.tsx`
- **Purpose**: Renders a multi-select dropdown component.
- **Props**:
    - `label` (string, required): Label for the multi-select field.
    - `options` (Option[], required): Array of option objects `{ value: string, text: string }`.
    - `defaultSelected` (string[], optional): Array of default selected values. Defaults to `[]`.
    - `onChange` (function, optional): Callback `(selected: string[]) => void` when selection changes.
    - `disabled` (boolean, optional): If true, the multi-select is disabled. Defaults to `false`.
- **Notes**: Allows selecting multiple options. Displays selected options as tags. Includes a clear button for each selected option.

### `Switch.tsx`
- **Purpose**: Renders a toggle switch component.
- **Props**:
    - `label` (string, required): Label for the switch.
    - `defaultChecked` (boolean, optional): Initial checked state. Defaults to `false`.
    - `disabled` (boolean, optional): If true, the switch is disabled. Defaults to `false`.
    - `onChange` (function, optional): Callback `(checked: boolean) => void` when the switch state changes.
    - `color` ("blue" | "gray", optional): Color theme for the switch. Defaults to "blue".
- **Notes**: Manages its checked state internally. Clickable on the label as well.

### `Radio.tsx`
- **Purpose**: Renders a standard radio button.
- **Props**:
    - `id` (string, required): Unique ID for the radio button.
    - `name` (string, required): Radio group name.
    - `value` (string, required): Value of the radio button.
    - `checked` (boolean, required): Whether the radio button is checked.
    - `label` (string, required): Label for the radio button.
    - `onChange` (function, required): Callback `(value: string) => void` on value change.
    - `className` (string, optional): Optional additional classes.
    - `disabled` (boolean, optional): If true, the radio button is disabled. Defaults to `false`.

### `TextArea.tsx`
- **Purpose**: Renders a multi-line text input area.
- **Props**:
    - `placeholder` (string, optional): Placeholder text. Defaults to "Enter your message".
    - `rows` (number, optional): Number of rows. Defaults to 3.
    - `value` (string, optional): Current value. Defaults to `""`.
    - `onChange` (function, optional): Callback `(value: string) => void` on value change.
    - `className` (string, optional): Additional CSS classes.
    - `disabled` (boolean, optional): Disabled state. Defaults to `false`.
    - `error` (boolean, optional): Error state. Defaults to `false`.
    - `hint` (string, optional): Hint text to display below the textarea. Defaults to `""`.
- **Notes**: Styling changes based on `disabled` and `error` props.

### `FileInput.tsx`
- **Purpose**: Renders a styled file input field.
- **Props**:
    - `className` (string, optional): Custom CSS classes.
    - `onChange` (function, optional): Callback `(event: React.ChangeEvent<HTMLInputElement>) => void` on file selection.
- **Notes**: Provides styling for the native file input.

### `Label.tsx`
- **Purpose**: Renders a label for form elements.
- **Props**:
    - `htmlFor` (string, optional): Associates the label with an input ID.
    - `children` (ReactNode, required): Content of the label.
    - `className` (string, optional): Custom CSS classes.
- **Dependencies**: `tailwind-merge`, `clsx`.

### `Form.tsx`
- **Purpose**: A wrapper component for forms that prevents default submission.
- **Props**:
    - `onSubmit` (function, required): Callback `(event: FormEvent<HTMLFormElement>) => void` triggered on form submission.
    - `children` (ReactNode, required): Content of the form (form fields).
    - `className` (string, optional): Custom CSS classes.
- **Notes**: Calls `event.preventDefault()` on submit.

### `FormControl.tsx`
- **Purpose**: A generic wrapper component for form elements, providing consistent styling for labels, input fields, hint text, and error/success messages.
- **Props**:
    - `label` (string, required): The main label text for the form control.
    - `htmlFor` (string, optional): Associates the label with an input ID. This should match the `id` of the input element it wraps.
    - `children` (ReactNode, required): The actual form input element (e.g., `InputField`, `Select`, `TextArea`, etc.) that this control wraps.
    - `hint` (string, optional): Text displayed below the input, often used for additional instructions or examples.
    - `error` (boolean, optional): If true, applies error styling to the hint text. Defaults to `false`.
    - `required` (boolean, optional): If true, displays a visual indicator (an asterisk *) next to the label to mark the field as mandatory. Defaults to `false`.
    - `success` (boolean, optional): If true, applies success styling to the hint text. Defaults to `false`.
    - `className` (string, optional): Custom CSS classes for the container div of the form control.
- **Notes**: Centralizes styling and logic for form field presentation, reducing repetition in form markup.

## UI Components (`src/components/ui`)

### `Avatar.tsx`
- **Purpose**: Displays a user avatar image with an optional status indicator.
- **Props**:
    - `src` (string, required): URL of the avatar image.
    - `alt` (string, optional): Alt text for the avatar. Defaults to "User Avatar".
    - `size` ("xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge", optional): Avatar size. Defaults to "medium".
    - `status` ("online" | "offline" | "busy" | "none", optional): Status indicator. Defaults to "none".
- **Notes**: Status indicator color and size adjust based on props.

### `Alert.tsx`
- **Purpose**: Displays alert messages with different variants (success, error, warning, info).
- **Props**:
    - `variant` ("success" | "error" | "warning" | "info", required): Alert type, determines styling and icon.
    - `title` (string, required): Title of the alert.
    - `message` (string, required): Message of the alert.
    - `showLink` (boolean, optional): Whether to show a "Learn More" link. Defaults to `false`.
    - `linkHref` (string, optional): URL for the link. Defaults to "#".
    - `linkText` (string, optional): Text for the link. Defaults to "Learn more".
- **Dependencies**: `react-router` (for `Link`).
- **Notes**: Includes different SVG icons for each variant. The SVG for the 'warning' icon has an empty `fill` attribute, which might be unintentional.

### `AspectRatioVideo.tsx`
- **Purpose**: Embeds a video in an iframe with a specified aspect ratio.
- **Props**:
    - `videoUrl` (string, required): URL of the video to embed.
    - `aspectRatio` (string, optional): Aspect ratio class (e.g., "video" for 16/9, or Tailwind's `aspect-[width/height]`). Defaults to "video".
    - `title` (string, optional): Video title for accessibility. Defaults to "Embedded Video".
- **Notes**: The `aspectRatio` prop should correspond to Tailwind CSS aspect ratio classes like `aspect-video` or `aspect-[16/9]`. The default "video" implies `aspect-video`.

### `DefaultTab.tsx`
- **Purpose**: Renders a set of tabs where clicking a tab displays its associated content.
- **Props**:
    - `tabs` (TabItem[], required): Array of tab objects `{ label: string, component: ReactNode }`.
- **Notes**: Manages the active tab state internally. The content of the active tab is rendered below the tab buttons.

### `Table.tsx` (Table, TableHeader, TableBody, TableRow, TableCell)
- **Purpose**: Provides a set of composable components for building HTML tables with consistent styling.
- **Components**:
    - `Table`: Main table container.
        - `children` (ReactNode, required): Table content (e.g., `TableHeader`, `TableBody`).
        - `className` (string, optional): Custom classes.
    - `TableHeader`: `<thead>` equivalent.
        - `children` (ReactNode, required): Header row(s) (`TableRow`).
        - `className` (string, optional): Custom classes.
    - `TableBody`: `<tbody>` equivalent.
        - `children` (ReactNode, required): Body row(s) (`TableRow`).
        - `className` (string, optional): Custom classes.
    - `TableRow`: `<tr>` equivalent.
        - `children` (ReactNode, required): Cells (`TableCell`).
        - `className` (string, optional): Custom classes.
    - `TableCell`: `<th>` or `<td>` equivalent.
        - `children` (ReactNode, required): Cell content.
        - `isHeader` (boolean, optional): If true, renders as `<th>`. Defaults to `false` (renders as `<td>`).
        - `className` (string, optional): Custom classes.

### `Modal.tsx`
- **Purpose**: Displays content in a modal dialog.
- **Props**:
    - `isOpen` (boolean, required): Controls the visibility of the modal.
    - `onClose` (function, required): Callback function to close the modal.
    - `children` (ReactNode, required): Content to be displayed within the modal.
    - `className` (string, optional): Custom CSS classes for the modal content container.
    - `showCloseButton` (boolean, optional): If true, shows a close button. Defaults to `true`.
    - `isFullscreen` (boolean, optional): If true, modal takes up the full screen. Defaults to `false`.
- **Notes**:
    - Closes on 'Escape' key press.
    - Disables body scroll when open.
    - Clicking the backdrop (if not fullscreen) closes the modal.

### `DropdownItem.tsx`
- **Purpose**: Renders an individual item within a dropdown menu. Can be a link or a button.
- **Props**:
    - `tag` ("a" | "button", optional): HTML tag to render. Defaults to "button".
    - `to` (string, optional): Link destination if `tag` is "a".
    - `onClick` (function, optional): Click handler.
    - `onItemClick` (function, optional): Additional click handler, often used by the parent `Dropdown` to close itself.
    - `baseClassName` (string, optional): Base CSS classes. Defaults to standard dropdown item styling.
    - `className` (string, optional): Additional custom CSS classes.
    - `children` (ReactNode, required): Content of the dropdown item.
- **Dependencies**: `react-router` (for `Link` if `tag` is "a").

### `Dropdown.tsx`
- **Purpose**: Provides a container for dropdown menus.
- **Props**:
    - `isOpen` (boolean, required): Controls the visibility of the dropdown.
    - `onClose` (function, required): Callback function to close the dropdown.
    - `children` (ReactNode, required): Content of the dropdown (usually `DropdownItem` components).
    - `className` (string, optional): Custom CSS classes for the dropdown container.
- **Notes**: Closes when clicking outside the dropdown content, unless the click target has the class `.dropdown-toggle`.

### `Button.tsx`
- **Purpose**: Renders a versatile button component with different sizes and styles.
- **Props**:
    - `children` (ReactNode, required): Button text or content.
    - `size` ("sm" | "md", optional): Button size. Defaults to "md".
    - `variant` ("primary" | "outline" | "success" | "danger", optional): Button style variant. Defaults to "primary".
    - `startIcon` (ReactNode, optional): Icon to display before the text.
    - `endIcon` (ReactNode, optional): Icon to display after the text.
    - `onClick` (function, optional): Click handler.
    - `disabled` (boolean, optional): If true, the button is disabled. Defaults to `false`.
    - `className` (string, optional): Additional custom CSS classes.
    - `isLoading` (boolean, optional): If true, the button shows a loading spinner and is disabled. Defaults to `false`.
    - `type` ("button" | "submit" | "reset", optional): The type of the button. Defaults to "button".
    - `fullWidth` (boolean, optional): If true, the button takes up the full width of its parent container. Defaults to `false`.
- **Notes**: Supports `forwardRef` to allow direct DOM access to the button element.

### `Badge.tsx`
- **Purpose**: Displays a badge, typically for status indicators or labels.
- **Props**:
    - `variant` ("light" | "solid", optional): Badge style. Defaults to "light".
    - `size` ("sm" | "md", optional): Badge size. Defaults to "md".
    - `color` ("primary" | "success" | "error" | "warning" | "info" | "light" | "dark", optional): Badge color scheme. Defaults to "primary".
    - `startIcon` (ReactNode, optional): Icon at the start of the badge.
    - `endIcon` (ReactNode, optional): Icon at the end of the badge.
    - `children` (ReactNode, required): Badge content.

## Layout Components (`src/components/layout`)

### `AppLayout.tsx`
- **Purpose**: The main layout structure for the application.
- **Composition**:
    - Uses `SidebarProvider` to manage sidebar state.
    - Integrates `AppSidebar`, `Backdrop`, and `AppHeader`.
    - Renders `Outlet` from `react-router` for nested routes.
- **Notes**: The main content area's margin adjusts based on the sidebar's expanded/hovered state.

### `AppHeader.tsx`
- **Purpose**: The application's primary header.
- **Features**:
    - Sidebar toggle button (adapts for mobile/desktop via `useSidebar` context).
    - Logo link (visible on mobile).
    - Search input with `Cmd/Ctrl + K` shortcut.
    - Application menu toggle for mobile view.
- **Integrates**:
    - `ThemeToggleButton`
    - `NotificationDropdown`
    - `UserDropdown`
- **Context**: Uses `useSidebar` from `../../context/SidebarContext`.
- **Notes**: This component is used within `AppLayout.tsx`. Its search input `ref={inputRef}` allows programmatic focus.

### `AppSidebar.tsx`
- **Purpose**: Renders the main navigation sidebar.
- **Features**:
    - Dynamic width and content visibility based on `isExpanded`, `isHovered`, `isMobileOpen` states from `SidebarContext`.
    - Displays a logo that changes based on sidebar state.
    - Navigation items organized into "Menu" and "Others" sections.
    - Collapsible submenus with animation, active state determined by current route.
    - `SidebarWidget` is conditionally rendered at the bottom.
- **Context**: Uses `useSidebar` from `../../context/SidebarContext`.
- **Dependencies**: `react-router` (for `Link`, `useLocation`), various icons from `../../icons`.
- **Structure**: Defines `NavItem` type for menu items. `navItems` and `othersItems` arrays hold the menu structure.

### `Backdrop.tsx`
- **Purpose**: Renders an overlay, typically used when a mobile sidebar is open.
- **Behavior**:
    - Visible only when `isMobileOpen` (from `SidebarContext`) is true.
    - Hidden on large screens (`lg:hidden`).
    - Clicking the backdrop calls `toggleMobileSidebar` to close the mobile sidebar.
- **Context**: Uses `useSidebar` from `../../context/SidebarContext`.

### `SidebarWidget.tsx`
- **Purpose**: A presentational widget displayed in the sidebar.
- **Content**: Contains a title, a paragraph of text, and a "Purchase Plan" link.
- **Notes**: Likely a promotional element. Used within `AppSidebar.tsx`.

## Header Components (`src/components/header`)

### `UserDropdown.tsx`
- **Purpose**: Displays user avatar and a dropdown menu for user-related actions.
- **Features**:
    - Button shows user avatar and name.
    - Dropdown shows full name, email, and links for "Edit profile", "Account settings", "Support", and "Sign out".
- **Dependencies**: `../ui/Dropdown`, `../ui/DropdownItem`, `react-router` (for `Link`).
- **Notes**:
    - Currently uses hardcoded user data (name: "Musharof Chowdhury", email: "randomuser@pimjo.com", avatar: "/images/user/owner.jpg").
    - Profile, settings, and support links point to `/profile`. Sign out links to `/signin`.
    - SVG icons within this component have empty `fill=""` attributes, which might need review.

### `NotificationDropdown.tsx`
- **Purpose**: Displays a dropdown for notifications.
- **Features**:
    - Notification bell icon button with a "notifying" indicator (pinging dot).
    - Dropdown lists notifications, each with an avatar, message, and timestamp.
    - "View All Notifications" link at the bottom.
- **Dependencies**: `../ui/Dropdown`, `../ui/DropdownItem`, `react-router` (for `Link`).
- **Notes**:
    - Notification items seem to be hardcoded examples using image paths like `/images/user/user-02.jpg`.
    - "View All Notifications" links to `/`.
    - Clicking the bell icon clears the "notifying" ping animation.

### `Header.tsx`
- **Purpose**: A general header component.
- **Props**:
    - `onClick` (function, optional): Handler, likely for a primary action like a desktop sidebar toggle.
    - `onToggle` (function, required): Handler, likely for a mobile sidebar toggle.
- **Features**:
    - Sidebar toggle buttons (one for mobile via `onToggle`, one for desktop via `onClick`).
    - Logo link for mobile.
    - Search input with "⌘ K" shortcut display.
    - Application menu toggle for mobile view.
- **Integrates**:
    - `ThemeToggleButton`
    - `NotificationDropdown`
    - `UserDropdown`
- **Notes**:
    - This component is very similar in structure to `AppHeader.tsx`. `AppHeader.tsx` is used in `AppLayout.tsx` and handles its toggle logic via context, while this `Header.tsx` expects toggle handlers via props.
    - The search form has an `action="https://formbold.com/s/unique_form_id"`, which might be a placeholder.
    - Some SVG icons have empty `fill=""` attributes.

## Common Components (`src/components/common`)

### `ThemeTogglerTwo.tsx`
- **Purpose**: A theme (light/dark) toggle button with a specific visual style.
- **Features**:
    - Uses `useTheme` context to call `toggleTheme`.
    - Displays sun (light mode) and moon (dark mode) SVG icons.
    - Styled as a circular button with a brand color background.
- **Context**: Uses `useTheme` from `../../context/ThemeContext`.

### `ThemeToggleButton.tsx`
- **Purpose**: A theme (light/dark) toggle button, styled to fit with other header action buttons.
- **Features**:
    - Uses `useTheme` context to call `toggleTheme`.
    - Displays sun (light mode) and moon (dark mode) SVG icons.
    - Styled as a circular button with a border, matching the style of `NotificationDropdown` and `UserDropdown` buttons in the header.
- **Context**: Uses `useTheme` from `../../context/ThemeContext`.
- **Notes**: This is the theme toggler used in `AppHeader.tsx` and `Header.tsx`.

### `ScrollToTop.tsx`
- **Purpose**: A utility component that scrolls the window to the top on route changes.
- **Behavior**:
    - Uses `useEffect` and `useLocation` from `react-router`.
    - On `pathname` change, calls `window.scrollTo({ top: 0, left: 0, behavior: "smooth" })`.
    - Renders `null` (no visual output).
- **Dependencies**: `react-router`.

### `PageMeta.tsx`
- **Purpose**: Provides components for managing page metadata (title, description) using `react-helmet-async`.
- **Components**:
    - `PageMeta`: Sets the document title and meta description.
        - `title` (string, required): Page title.
        - `description` (string, required): Page meta description.
    - `AppWrapper`: Provides the `HelmetProvider` context.
        - `children` (ReactNode, required): The application content.
- **Dependencies**: `react-helmet-async`.
- **Notes**: `AppWrapper` should ideally wrap the root of the application.

### `PageBreadCrumb.tsx`
- **Purpose**: Displays a breadcrumb navigation trail for the current page.
- **Props**:
    - `pageTitle` (string, required): The title of the current page.
- **Features**:
    - Shows "Home" as a link to `/`.
    - Displays the `pageTitle` as the current page in the breadcrumb and as a heading.
    - Uses an SVG icon as a separator.
- **Dependencies**: `react-router` (for `Link`).
- **Notes**: The SVG path for the separator has `stroke=""`, which might need review.

### `GridShape.tsx`
- **Purpose**: Renders decorative grid images in the background.
- **Features**:
    - Displays two instances of `/images/shape/grid-01.svg`.
    - One is positioned top-right, the other bottom-left (rotated).
    - Styled with `z-index: -1` to appear behind other content.
- **Notes**: Purely presentational.

### `ComponentCard.tsx`
- **Purpose**: A card container for showcasing UI components, often used in documentation.
- **Props**:
    - `title` (string, required): Title for the card.
    - `children` (ReactNode, required): The component(s) to display within the card.
    - `className` (string, optional): Additional custom CSS classes for the card.
    - `desc` (string, optional): A description displayed below the title.
- **Features**: Renders a bordered card with a header (title, description) and a body (children).

### `ChartTab.tsx`
- **Purpose**: Displays a set of tab-like buttons, likely for selecting a time range for a chart (Monthly, Quarterly, Annually).
- **Features**:
    - Buttons for "Monthly", "Quarterly", "Annually".
    - Manages the selected tab state internally.
    - Applies different styling to the selected button.
- **Notes**: Does not take any props. The selected state (`selected`) is local to the component and doesn't seem to be exposed or used to control other elements (like an actual chart) in this component itself. 