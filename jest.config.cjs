module.exports = {
  // preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "./",
  moduleDirectories: ["node_modules", "src", "tests"],
  testMatch: [
    "<rootDir>/**/*.(test).{js,jsx,ts,tsx}",
    "<rootDir>/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
  ],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  // testMatch: ["<rootDir>/**/tests/*.(test|spec).ts"],
};
