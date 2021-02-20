module.exports = {
  verbose: true,
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
    '^assets(.*)$': '<rootDir>/src/assets$1',
  },
  setupFiles: [
    './jestsetup.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  transformIgnorePatterns: [
    // Change MODULE_NAME_HERE to your module that isn't being compiled
    // '/node_modules/(?!omtv-react-input).+\\.js$'
  ],
};
