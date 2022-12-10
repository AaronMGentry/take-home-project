const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  "baseUrl" : "https://www.dropbox.com",
  "defaultCommandTimeout": 5000,
  "execTimeout": 60000,
  "integrationFolder": "cypress/test",
  "pageLoadTimeout": 300000000,
  "requestTimeout": 5000,
  "responseTimeout": 30000,
  "screenshotsFolder": "cypress/screenshots",
  "taskTimeout": 60000,
  "viewportHeight": 1080, 
  "viewportWidth": 1920
  }
})