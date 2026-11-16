import type { Config } from 'jest'

const config: Config = {
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            { tsconfig: { module: 'commonjs', jsx: 'react-jsx' } },
        ],
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    testPathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/.worktrees/',
        '/dist/',
    ],
}

export default config
