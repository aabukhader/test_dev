# Shared ESLint and Prettier Configuration

A shareable configuration package for ESLint and Prettier to ensure consistent code style and quality across all projects.

## Features

- Base JavaScript/ES6+ configuration
- React-specific rules with hooks support
- TypeScript configuration with type-aware linting
- Prettier integration with sensible defaults
- Import sorting and organization
- Accessibility checking for React components

## Installation

Install the package and its peer dependencies:

```bash
npm install --save-dev @myproject/eslint-config eslint prettier
```

### For React projects

```bash
npm install --save-dev react react-dom
```

### For TypeScript projects

```bash
npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Usage

### Basic JavaScript Project

Create an `.eslintrc.js` file in your project root:

```javascript
module.exports = {
  extends: ['@myproject/eslint-config'],
};
```

### React Project

```javascript
module.exports = {
  extends: ['@myproject/eslint-config/eslint-react'],
};
```

### TypeScript Project

```javascript
module.exports = {
  extends: ['@myproject/eslint-config/eslint-typescript'],
};
```

### React + TypeScript Project

```javascript
module.exports = {
  extends: [
    '@myproject/eslint-config/eslint-typescript',
    '@myproject/eslint-config/eslint-react',
  ],
};
```

### Prettier Configuration

Create a `prettier.config.js` file in your project root:

```javascript
module.exports = require('@myproject/eslint-config/prettier.config');
```

Or add to your `package.json`:

```json
{
  "prettier": "@myproject/eslint-config/prettier.config"
}
```

## NPM Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,css,md}\"",
    "format:check": "prettier --check \"**/*.{js,jsx,ts,tsx,json,css,md}\""
  }
}
```

## Editor Integration

### VS Code

Install the ESLint and Prettier extensions, then add to your `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

## Configuration Files Included

- `index.js` - Main entry point (extends base config)
- `eslint-base.js` - Base JavaScript/ES6+ rules
- `eslint-react.js` - React and JSX rules
- `eslint-typescript.js` - TypeScript rules
- `prettier.config.js` - Prettier formatting rules

## Rule Philosophy

- Enforce consistent code style with Prettier
- Catch common errors and anti-patterns with ESLint
- Encourage modern JavaScript/TypeScript best practices
- Support React hooks and accessibility
- Allow flexibility where team preferences vary

## Customization

You can override any rules in your project's `.eslintrc.js`:

```javascript
module.exports = {
  extends: ['@myproject/eslint-config'],
  rules: {
    // Your custom rules here
    'no-console': 'off',
  },
};
```

## Publishing

This package is published to npm and can be updated by the team:

```bash
npm version patch|minor|major
npm publish
```

## License

MIT
