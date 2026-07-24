import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import { type Linter } from 'eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import {
  createNodeResolver,
  flatConfigs as importFlatConfigs,
} from 'eslint-plugin-import-x';
import prettier from 'eslint-plugin-prettier/recommended';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export const eslintConfig: Linter.Config[] = defineConfig([
  globalIgnores(['**/node_modules/**', '**/dist/**', '**/build/**']),
  eslint.configs.recommended,
  tseslint.configs.recommended,
  importFlatConfigs.recommended,
  prettier,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      'unused-imports': unusedImports,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
    },
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver(),
        createNodeResolver(),
      ],
    },
    rules: {
      'no-console': 'error',
      'import-x/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports' },
      ],
    },
  },
]) as Linter.Config[];
