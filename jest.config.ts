export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    testEnvironmentOptions: {
        customExportConditions: [''],
      },
    transform: {
        "^.+\\.tsx?$": "ts-jest" 
    // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
        "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js"
    },
    setupFilesAfterEnv: [
        "<rootDir>/setupTests.ts"
      ]
}