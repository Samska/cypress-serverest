const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'iumgsn',
  env: {
    webBaseUrl: 'https://front.serverest.dev',
    apiBaseUrl: '',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});