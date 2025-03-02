/**
 * @author Jose A Felix
 * @name app.test
 * @description Main application component unit testing file
 * @see https://jestjs.io/docs/configuration
 */

/** -------------------------------------------------------- */

/** @import Types */
import type { Config } from "jest";

/** -------------------------------------------------------- */

/**
 * @name config
 * @description Jest configuration
 */
const config: Config = {
   automock: false,
   bail: 2,
   clearMocks: true,
   collectCoverage: true,
   collectCoverageFrom: [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts",
      "!src/index.tsx",
      "!src/serviceWorker.ts",
   ],
   coverageDirectory: "coverage",
   coveragePathIgnorePatterns: ["/node_modules/"],
   coverageProvider: "babel",
   coverageReporters: ["json", "text", "lcov", "clover"],
   moduleDirectories: ["node_modules", "src"],
   moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
   moduleNameMapper: {
      ".(css|less|scss|sass)$": "identity-obj-proxy",
      ".(gif|ttf|eot|svg|png)$": "<rootDir>/src/test/__mocks__/fileMock.js",
   },
   setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.tsx"],
   testEnvironment: "node",
   testMatch: ["**/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)"],
   testPathIgnorePatterns: ["/node_modules/"],
   transform: {
      "^.+.tsx?$": ["ts-jest", {}],
   },
   transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],
   verbose: true,
};

/** -------------------------------------------------------- */

/** @exports @default configuration */
export default config;
