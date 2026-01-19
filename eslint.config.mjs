// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  ignores: [
    'node_modules',
    'dist',
    '.output',
    '.nuxt',
    '.nitro',
    '.cache'
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/unified-signatures': 'off'
  }
})
