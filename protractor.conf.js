// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  onPrepare() {
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
System.config({
  paths: {
      'syncfusion:': './node_modules/@syncfusion/',
  },
  map: {
      app: 'app',
   
      //Syncfusion packages mapping
      "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
      "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js"
  },
  packages: {
      'app': { main: 'app', defaultExtension: 'js' }
  }
  });
  
  System.import('app');
