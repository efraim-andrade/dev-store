module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',

    '!src/app/**/page.ts(x)?', // Should be tested in e2e
    '!src/app/**/layout.ts(x)?', // Should be tested in e2e

    '!src/**/*.stories.ts(x)?',

    '!src/lib/*.ts(x)?',
    '!src/@types/*.ts(x)?',
    '!src/styles/*.ts(x)?',
    '!src/services/*.ts(x)?'
  ],

  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],

  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
}
