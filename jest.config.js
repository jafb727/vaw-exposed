module.exports = {
   testEnvironment: "jsdom",
   setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.js"],
   moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
   moduleDirectories: ["node_modules", "src"],
   testMatch: ["**/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)"],
   transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
   },
   transformIgnorePatterns: ["/node_modules/"],
   moduleNameMapper: {
      ".(css|less|scss|sass)$": "identity-obj-proxy",
      ".(gif|ttf|eot|svg|png)$": "<rootDir>/src/__mocks__/fileMock.js",
   },
   collectCoverage: true,
   collectCoverageFrom: [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts",
      "!src/index.tsx",
      "!src/serviceWorker.ts",
   ],
   coverageReporters: ["json", "lcov", "text", "clover"],
   verbose: true,
};
