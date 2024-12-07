const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wkzney',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wkzney',
  e2e: {
    fixturesFolder: 'cypress/fixtures',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e'
  },
});
