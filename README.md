# @miskoune/config

[![npm](https://img.shields.io/npm/v/@miskoune/config)](https://www.npmjs.com/package/@miskoune/config)

Reusable ESLint and Prettier configuration for TypeScript and React projects.

## Features

- **ESLint**: TypeScript, import ordering, unused-import removal, and Prettier integration in a single flat config.
- **Prettier**: Consistent formatting defaults.

## Installation

```bash
npm install --save-dev @miskoune/config eslint typescript
```

## Usage

### ESLint

Create an `eslint.config.js` in your project root:

```javascript
import { eslintConfig } from '@miskoune/config';

export default eslintConfig;
```

Or extend it:

```javascript
import { eslintConfig } from '@miskoune/config';

export default [
  ...eslintConfig,
  {
    rules: {
      'custom-rule': 'error',
    },
  },
];
```

### Prettier

Create a `prettier.config.js` in your project root:

```javascript
import { prettierConfig } from '@miskoune/config';

export default prettierConfig;
```

Or extend it:

```javascript
import { prettierConfig } from '@miskoune/config';

export default {
  ...prettierConfig,
  printWidth: 100,
};
```

## Peer dependencies

- `eslint` >= 10
- `typescript` >= 5

## Supported file types

- JavaScript (`.js`, `.mjs`, `.cjs`)
- TypeScript (`.ts`)
- JSX (`.jsx`), TSX (`.tsx`)

## License

MIT
