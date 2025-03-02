/**
 * @author Jose A Felix
 * @name jest.config
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
   bail: 1,
   clearMocks: true,
   moduleDirectories: ["node_modules", "src"],
   moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
   moduleNameMapper: {
      ".(css|less|scss|sass)$": "identity-obj-proxy",
      ".(gif|ttf|eot|svg|png)$": "<rootDir>/src/test/__mocks__/fileMock.ts",
   },
   preset: "ts-jest",
   setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.tsx"],
   testEnvironment: "jsdom",
   testMatch: ["**/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)"],
   testPathIgnorePatterns: ["/node_modules/"],
   transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],
   verbose: true,
};

/** -------------------------------------------------------- */

/** @exports @default configuration */
export default config;
