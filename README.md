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

Currently, there is a known issue where tailwind styles used in components within this library do not apply once consumed, even when tailwind has been independently configured in the consuming application. A fix is being worked on, but in the meantime, you can target the components themselves by modifying the content array in the tailwind.config.ts file in your application:

```typescript
content: [
  // Additional configurations
  './node_modules/your-library-name/**/*.{js,jsx,ts,tsx}', // Library files
]
```

Once applied, tailwind styles from this library should show up in the consuming application. 
