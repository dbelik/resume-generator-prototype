module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        '@typescript-eslint/no-var-requires': 0, // @NOTE: Allow "require" imports.
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
