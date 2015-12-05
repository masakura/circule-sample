const JUnitXmlReporter = require('jasmine-reporters').JUnitXmlReporter;

exports.config = {
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
  },
  specs: ['spec/**/*.spec.js'],

  onPrepare: () => {
    jasmine.getEnv()
      .addReporter(new JUnitXmlReporter({
        savePath: 'reports/tests',
      }));
  },
};
