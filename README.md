# TypeScript Chain of Keys Type – Proof of Concept

This project is a proof of concept demonstrating how to use TypeScript to strictly type objects that contain all the texts used throughout an application. The goal is to ensure type safety, maintainability, and scalability when managing app-wide textual content, such as UI labels, messages, and other strings, by leveraging TypeScript's advanced type system.

## Purpose

- **Centralize all app texts** in a single, type-safe object structure.
- **Enable type-safe access** to any text key throughout the codebase, reducing runtime errors due to typos or missing keys.
- **Facilitate internationalization/localization** by making it easy to swap out or extend text objects.
- **Showcase advanced TypeScript techniques** for typing deeply nested objects and generating key chains.

## What You'll Find Here

- Example implementation of a typed text object for the whole app.
- Utility types to extract all possible key paths as string literals.
- Usage examples in React components.
- Guidance on how to extend or adapt the pattern for your own projects.

## Example: Type-Safe Translation Keys

Suppose you have a nested object containing all the texts used in your app:

```ts
const copies = {
  header: {
    nav: {
      users: {
        tooltip: 'Manage users',
      },
      settings: {
        tooltip: 'Change settings',
      },
    },
  },
  footer: {
    copyright: 'All rights reserved',
  },
} as const;
```

Using advanced TypeScript types, you can extract all valid key paths as string literals (e.g., `"header.nav.users.tooltip"`, `"footer.copyright"`).

The translation function `t` is then typed so that only valid key paths are allowed:

```ts
// Example type for all valid key paths
type CopyKey = 'header.nav.users.tooltip' | 'header.nav.settings.tooltip' | 'footer.copyright';

// Translation function signature
t: (key: CopyKey) => string;

// Usage
const tooltip = t('header.nav.users.tooltip'); // ✅ Type-safe
const copyright = t('footer.copyright');      // ✅ Type-safe

// This will cause a TypeScript error:
t('header.nav.invalid'); // ❌ Error: Argument of type '"header.nav.invalid"' is not assignable to parameter of type 'CopyKey'
```

This ensures you only use valid keys, preventing runtime errors due to typos or missing texts.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or above recommended)
- [Bun](https://bun.sh/)

### Installation

1. Clone this repository:
```sh
git clone https://github.com/LuisGilGB/ts-chain-of-keys-type-poc.git
cd ts-chain-of-keys-type-poc
```
2. Install dependencies:
```sh
bun install
```

### Running the Development Server

Start the app in development mode:

```sh
bun run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Resources

- [TypeScript](https://www.typescriptlang.org/) – Strongly typed JavaScript.
- [React](https://react.dev/) – UI library for building interactive interfaces.
- [Vite](https://vitejs.dev/) – Fast frontend tooling and dev server.
- [ESLint](https://eslint.org/) – Pluggable JavaScript linter.
