/**
 * Shared Prettier configuration
 * Ensures consistent code formatting across projects
 */
module.exports = {
  // Print width - line wrap at 100 characters
  printWidth: 100,

  // Use 2 spaces for indentation
  tabWidth: 2,

  // Use spaces instead of tabs
  useTabs: false,

  // Add semicolons at the end of statements
  semi: true,

  // Use single quotes instead of double quotes
  singleQuote: true,

  // Quote object properties only when necessary
  quoteProps: 'as-needed',

  // Use single quotes in JSX
  jsxSingleQuote: false,

  // Add trailing commas where valid in ES5 (objects, arrays, etc.)
  trailingComma: 'es5',

  // Add spaces inside object brackets
  bracketSpacing: true,

  // Put the > of a multi-line JSX element at the end of the last line
  bracketSameLine: false,

  // Include parentheses around a sole arrow function parameter
  arrowParens: 'always',

  // Format only valid code
  requirePragma: false,

  // Don't add @format pragma
  insertPragma: false,

  // Use default line ending
  endOfLine: 'lf',

  // Format embedded code in markdown
  embeddedLanguageFormatting: 'auto',

  // Enforce single attribute per line in JSX
  singleAttributePerLine: false,
};
