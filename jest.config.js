/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ["<rootDir>/__test__/use-cases"],
    verbose: true,
    collectCoverage: true,
    testTimeout:20000
};


