const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  projectId: 'iumgsn',
  defaultCommandTimeout: 20000,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quite: true,
      overwrite: false,
      html: false,
      json: true
    }
  },
  env: {
    webBaseUrl: 'https://front.serverest.dev',
    apiBaseUrl: 'https://serverest.dev',
  },
  e2e: {
    specPattern: 'cypress/tests'
  }
});