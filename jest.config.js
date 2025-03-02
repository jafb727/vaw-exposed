/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
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
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      "\\.(gif|ttf|eot|svg|png|jpg|jpeg)$":
         "<rootDir>/src/test/__mocks__/fileMock.js",
   },
   preset: "ts-jest",
   setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.tsx"],
   testEnvironment: "node",
   testMatch: ["**/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)"],
   testPathIgnorePatterns: ["/node_modules/"],
   transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],
   verbose: true,
};
