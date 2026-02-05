/**
 * React-specific ESLint configuration
 * Extends base config with React and JSX rules
 */
module.exports = {
  extends: [
    './eslint-base.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // React
    'react/prop-types': 'off', // Use TypeScript for prop validation
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'react/jsx-uses-react': 'off', // Not needed in React 17+
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.tsx'] },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/self-closing-comp': 'error',

    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Accessibility
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
  },
};
