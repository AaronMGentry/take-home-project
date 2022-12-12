const { defineConfig } = require('cypress')

module.exports = {
  projectId: '3py3zt',
  defaultCommandTimeout: 20000,
  execTimeout: 60000,
  pageLoadTimeout: 300000000,
  requestTimeout: 20000,
  responseTimeout: 30000,
  taskTimeout: 60000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://www.dropbox.com',
    specPattern: 'cypress/test/**/*.cy.{js,jsx,ts,tsx}',
  },
  env: {
    EMAIL: '${{ secrets.EMAIL }}',
    PASSWORD: '${{ secrets.PASSWORD }}',
  }
}
