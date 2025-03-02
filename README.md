# VAW Exposed

![Build Status](https://img.shields.io/github/actions/workflow/status/your-repo/your-project/ci.yml?branch=main)
![License](https://img.shields.io/github/license/your-repo/your-project)
![Version](https://img.shields.io/npm/v/your-package)

A modern web application built with **React**, **TypeScript**, and **Vite**. This project follows best practices for state management, routing, styling, accessibility, internationalization, and component documentation.

## 🚀 Features

-  **⚡ Vite**: Fast build tool with optimized performance
-  **🛠 TypeScript**: Strongly typed JavaScript for better maintainability
-  **🌍 Internationalization (i18n)**: Multi-language support with `react-i18next`
-  **♿ Accessibility (a11y)**: Compliance with WCAG best practices
-  **💅 Styling**: Tailwind CSS with design tokens
-  **🧩 State Management**: React Query & Zustand
-  **📦 Component Documentation**: Storybook integration
-  **🧪 Testing**: Jest, React Testing Library, Cypress for end-to-end tests

---

## 📦 Installation

```sh
# Clone the repository
git clone https://github.com/jafb727/vaw-exposed.git
cd vaw-exposed

# Install dependencies
# Recommended
pnpm install
# or
yarn install
# or
npm install
```

## 🏃‍♂️ Running the Project

```sh
# Start the development server
pnpm run dev
# or
yarn dev
# or
npm run dev
```

The app will be available at `http://localhost:3000/`

---

## 🛠️ Project Structure

```
├── src/
│   ├── assets/          # Static assets (images, icons, etc.)
│   ├── components/      # Reusable UI components
│   ├── contexts/        # React context providers
│   ├── hooks/           # Custom hooks
│   ├── i18n/            # Internationalization files
│   ├── pages/           # Page components (routed views)
│   ├── routes/          # Application routing
│   ├── services/        # API calls and external services
│   ├── store/           # State management (Zustand/React Query)
│   ├── styles/          # Global styles and Tailwind CSS configuration
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # App entry point
├── public/              # Public static files
├── .storybook/          # Storybook configuration
├── tests/               # Integration and end-to-end tests
└── vite.config.ts       # Vite configuration
```

---

## 🛤 Routing

Routing is handled using `react-router-dom`. Routes are defined dynamically inside `src/routes/index.tsx`.

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

const AppRoutes = () => (
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/about" element={<AboutPage />} />
      </Routes>
   </BrowserRouter>
);

export default AppRoutes;
```

---

## 🎨 Styling

-  **Tailwind CSS** is used for styling.
-  Custom design tokens are defined in `tailwind.config.js`.

```js
module.exports = {
   theme: {
      extend: {
         colors: {
            primary: "#1E40AF",
            secondary: "#9333EA",
         },
      },
   },
};
```

---

## 🌍 Internationalization (i18n)

Localization is managed using `react-i18next`. Language files are stored in `src/i18n/locales/`.

```tsx
import { useTranslation } from "react-i18next";

const MyComponent = () => {
   const { t } = useTranslation();
   return <h1>{t("welcome_message")}</h1>;
};
```

---

## ♿ Accessibility (a11y)

The app follows **WCAG** guidelines:

-  **Semantic HTML**
-  **Keyboard navigation** support
-  **ARIA attributes**
-  **ESLint plugin for a11y checks**

---

## 🧩 State Management

The project uses **Zustand** for global state and **React Query** for asynchronous state.

```tsx
import create from "zustand";

const useStore = create((set) => ({
   count: 0,
   increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default useStore;
```

---

## 📖 Component Documentation

Storybook is used for documenting UI components.

Run Storybook:

```sh
yarn storybook
```

Example Story:

```tsx
import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";

export default {
   title: "Components/Button",
   component: Button,
} satisfies Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
   args: { label: "Click Me" },
};
```

---

## ✅ Testing

The project uses Jest, React Testing Library, and Cypress.

Run tests:

```sh
yarn test
```

Example test:

```tsx
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders app title", () => {
   render(<App />);
   expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});
```

---

## 📜 License

This project is licensed under the MIT License.

---

## 📬 Contact

For questions, open an issue or reach out at [jafb727@gmail.com](mailto:jafb727@gmail.com).
