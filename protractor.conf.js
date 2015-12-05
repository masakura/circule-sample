const path = require('path');
const JUnitXmlReporter = require('jasmine-reporters').JUnitXmlReporter;
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

exports.config = {
  multiCapabilities: [
    { browserName: 'firefox' },
    { browserName: 'chrome' },
  ],
  specs: ['spec/**/*.spec.js'],

  onPrepare: () => {
    var info = {};

    // https://github.com/mlison/protractor-jasmine2-screenshot-reporter/issues/4#issuecomment-146556304
    browser.getCapabilities().then(c => {
      info.base = path.join(c.get('platform'),
                            c.get('browserName'),
                            c.get('version'));
    });

    jasmine.getEnv()
      .addReporter(new JUnitXmlReporter({
        savePath: 'reports/tests',
      }));
    jasmine.getEnv()
      .addReporter(new HtmlScreenshotReporter({
        dest: 'reports/tests/screenshot',
        filename: 'index.html',
        pathBuilder: spec => path.join(info.base, spec.fullName),
      }));
  },
};
