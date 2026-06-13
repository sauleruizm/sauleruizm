import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import reactCompiler from 'eslint-plugin-react-compiler';

export default defineConfig([
  globalIgnores(['dist',"node_modules/**"]),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      reactCompiler.configs.recommended,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'react-compiler/react-compiler': 'error',
    },
    ignores: ["node_modules/**"]
  },  
])
