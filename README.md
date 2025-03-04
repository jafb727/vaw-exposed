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
-  **📂 Monorepo Support**: Turborepo setup for scalable development
-  **🔐 Security Best Practices**: Helmet for HTTP security headers, environment variable management
-  **📊 Analytics & Monitoring**: Google Analytics, Sentry integration

---

## 📦 Installation

```sh
# Clone the repository
git clone https://github.com/jafb727/vaw-exposed.git
cd vaw-exposed

# Install dependencies
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
│   ├── hooks/           # Custom hooks
│   ├── i18n/            # Internationalization files
│   ├── pages/           # Page components (routed views)
│   ├── routes/          # Application routing
│   ├── services/        # API calls and external services
│   ├── store/           # State management (Zustand/React Query)
│   ├── styles/          # Global styles and Tailwind CSS configuration
│   ├── test/            # Testing environment utilities
│   ├── types/           # Global application types
│   ├── utils/           # Utility functions
│   ├── index.tsx        # App entry point
├── public/              # Public static files
├── coverage/            # Jest coverage configuration
├── .storybook/          # Storybook configuration
├── tests/               # Integration and end-to-end tests
├── .gitignore           # Git ignore configuration
├── eslint.config.js      # ESLint configuration
├── index.html           # App entry html
├── jest.config.js        # Jest configuration
├── LICENSE              # License
├── package.json         # Node app configuration
├── README.md            # Readme
├── tsconfig.app.json     # Typescript application configuration
├── tsconfig.json         # Typescript configuration
├── tsconfig.node.json    # Typescript node configuration
└── vite.config.ts        # Vite configuration
```

---

## 🏗 Build & Deployment

To build the project:

```sh
# Build app
pnpm run build
# or
yarn build
# or
npm run build
```

For production deployment, configure a CI/CD pipeline with GitHub Actions, Vercel, Netlify, or Docker.

Example Docker setup:

```sh
FROM node:18-alpine
WORKDIR /app
COPY package.json pnpm-lock ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build
CMD ["pnpm", "preview"]
```

---

## 🛤 Routing

Routing is handled using `react-router-dom`. Routes are defined dynamically inside `src/routes/index.tsx`.

```tsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
]);

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

## 🔐 Security Best Practices

-  Environment Variables: Use .env files and dotenv package.
-  Helmet: Adds security headers.
-  CORS Handling: Configurable via middleware.

---

## 📊 Analytics & Monitoring

-  Google Analytics integration for usage tracking.
-  Sentry for error tracking and monitoring.

Example setup:

```tsx
import * as Sentry from "@sentry/react";

Sentry.init({ dsn: process.env.SENTRY_DSN });
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
pnpm run storybook
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
`pnpm` test
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
