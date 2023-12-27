import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  verbose: true,
  transform: {
    ".(ts|tsx)": ["ts-jest", {
      tsconfig: "tsconfig.json",
    }],
    ".(js|jsx)": "babel-jest",
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  modulePathIgnorePatterns: ["dist/"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  },
  coverageReporters: ["text", "lcov"],
  coverageDirectory: "."
};
export default config;
