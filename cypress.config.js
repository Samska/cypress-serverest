const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'iumgsn',
  env: {
    webBaseUrl: 'https://front.serverest.dev',
    apiBaseUrl: 'https://serverest.dev',
  },
  e2e: {
    specPattern: 'cypress/tests'
  }  
});