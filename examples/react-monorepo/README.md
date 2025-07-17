# React Monorepo Example

This directory demonstrates a simple React component monorepo configured with Yarn workspaces and Storybook. It includes thirty small React components that can be used as a playground for experimentation.

## Getting Started

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Run Storybook:
   ```bash
   yarn storybook
   ```
   Storybook will start at [http://localhost:6006](http://localhost:6006).

## Project Structure

```
react-monorepo/
├── .storybook/            # Storybook configuration
├── package.json           # Workspace configuration
├── packages/              # Individual component packages
│   ├── component-01/
│   │   ├── package.json
│   │   └── src/
│   │       ├── index.tsx
│   │       └── Component01.stories.tsx
│   ├── component-02/
│   │   └── ...
│   └── component-30/
│       └── ...
└── README.md
```

Each component package exports a simple React component and a matching Storybook story so that it can be previewed in the playground.

## Creating New Components

To add additional components, create a new folder inside `packages/` with a `package.json` and `src` directory that exports your React component. Storybook automatically discovers stories from `src/*.stories.tsx`.

