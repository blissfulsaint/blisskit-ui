# Welcome to Blisskit-Ui

This is the home for all UI components independently developed by Brandon Lisonbee for use in his projects. This repository and corresponding package on NPM is publicly available for anyone to use as well.

## Getting Started

This project uses Storybook to display UI components. To run this repository on your device, clone the repository and run the following commands:

```bash
# Install dependencies
npm install

# Start Storybook
npm run dev
```

This will begin a development server in Storybook.

## Consuming this library

This library is published on npm and can be installed as a dependency in your Next.js application. Please note that consuming this library does require Next.js version 15 or higher, as well as React and React-DOM 19 or higher.

```bash
# Install library in Next.js app using npm
npm install blisskit-ui

# Install using pnpm
pnpm add blisskit-ui
```

This library also uses TailwindCSS for styling and requires correct TailwindCSS configuration in the consuming project in order to properly render. Ensure that TailwindCSS is installed in your project (please refer to [Tailwind's Official Website](https://tailwindcss.com/) for documentation on how to do this) and implement the following in your tailwind.config.ts file in the root of your project:

```typescript
content: [
  './node_modules/your-library-name/**/*.{js,jsx,ts,tsx}', // Library files
  // Additional configurations
]
```

This will target the library's components within node_modules. Once applied, TailwindCSS styles from this library should render correctly in the consuming application. 
