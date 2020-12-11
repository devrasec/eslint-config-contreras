module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'prettier/react',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  rules: {
    'no-alert': 'warn',
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'no-unused-expressions': [
      'error',
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-console': 'warn',
    'import/prefer-default-export': 'off',
    import: 'off',
    'func-names': ['error', 'as-needed'],
    'space-before-function-paren': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'max-len': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prefer-stateless-function': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/require-default-props': 'off',
    radix: 'off',
    'no-shadow': [
      'error',
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        'aspects': ['invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/no-autofocus': [
      'error', {
        'ignoreNonDOM': true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    semi: [1, 'always'],
  },
  plugins: ['html'],
};
