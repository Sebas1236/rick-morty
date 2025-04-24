// filepath: /Users/sebas1236/Documents/rick-morty/rick-morty/jest.config.ts
import { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom', // Ensure this is correct
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest to transform TypeScript files
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

export default config;