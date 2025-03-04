# Welcome to BlissKit-UI

This is the home for all UI components independently developed by Brandon Lisonbee for use in his projects. This repository and corresponding package on NPM is publicly available for anyone to use as well. You may also view the BlissKit-UI [Storybook documentation](https://blisskit-ui-storybook.vercel.app/) to learn more about the individual components contained in this library.

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

## TailwindCSS Configuration
This library also uses TailwindCSS for styling and requires correct TailwindCSS configuration in the consuming project in order to properly render. Ensure that TailwindCSS is installed in your project (please refer to [Tailwind's Official Website](https://tailwindcss.com/) for documentation on how to do this) and implement the following in your tailwind.config.ts file in the root of your project:

```typescript
content: [
  './node_modules/blisskit-ui/**/*.{js,jsx,ts,tsx}', // Library files
  // Additional configurations
]
```

This will target the library's components within node_modules. Once applied, TailwindCSS styles from this library should render correctly in the consuming application.

Once installed and configured, the library should be ready to use. You can test implementation by importing a component from the library:

```typescript
import { CardLink } from 'blisskit-ui';

function App() {
    return <CardLink title="Click Me" />
}
```

### Additional configurations
Certain components dynamically create TailwindCSS classes based on prop values, such as the `Form` components with `FormContext`. Since TailwindCSS 'purges' classnames that are dynamically created by default, it is necessary to configure TailwindCSS to 'safelist' certain classname patterns in order for some components in this library to work properly. 

As of right now, the only special configuration that is required is to safelist color-related classes in order for the `Form` and its related components to make effective use of the `FormContext`. The configuration needed to accommodate all base colors TailwindCSS offers is as follows:

```typescript
safelist: [
  { 
    pattern: /(border|text|bg)-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|slate|gray|zinc|neutral|stone)/,
    variants: ['hover']
  },
],
```

This will also accommodate custom theme configurations so long as the custom themes are included in the regex. For example, if a project consuming this library and the `FormContext` has a custom theme called `primaryColor`, it should be added to the regex as follows:

```typescript
safelist: [
  { 
    pattern: /(border|text|bg)-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|slate|gray|zinc|neutral|stone|primaryColor)/,
    variants: ['hover']
  },
],
```

One may also elect to remove certain colors from the configuration entirely in order to save space in the generated CSS file if they are not to be used in the project.