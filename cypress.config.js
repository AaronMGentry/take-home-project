const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  execTimeout: 60000,
  pageLoadTimeout: 300000000,
  requestTimeout: 5000,
  responseTimeout: 30000,
  screenshotsFolder: 'cypress/screenshots',
  taskTimeout: 60000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://www.dropbox.com',
    specPattern: 'cypress/test/**/*.cy.{js,jsx,ts,tsx}',
  },
})
