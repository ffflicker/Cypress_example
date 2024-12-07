const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wkzney',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: 'cypress/support/e2e.js',
    specPattern: [
      "cypress/e2e/Auth_form/*.cy.{js,jsx,ts,tsx}",
      "cypress/e2e/Pokemons/*.cy.{js,jsx,ts,tsx}"
    ]
  },
});