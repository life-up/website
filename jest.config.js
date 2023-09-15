module.exports = {
  testMatch: ["**/unit/?(*.)(spec|test).ts?(x)"],
  reporters: ["default", "jest-stare"],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  coverageDirectory: './docs/jest-coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],
  rootDir: ".",
  transform: {
    '.(ts|tsx)': '@swc/jest'
  }
}