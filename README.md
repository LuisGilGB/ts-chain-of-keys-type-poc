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

## Resources

- [TypeScript](https://www.typescriptlang.org/) – Strongly typed JavaScript.
- [React](https://react.dev/) – UI library for building interactive interfaces.
- [Vite](https://vitejs.dev/) – Fast frontend tooling and dev server.
- [ESLint](https://eslint.org/) – Pluggable JavaScript linter.
