const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    viewportHeight:1020,
    viewportWidth:1920,
    testIsolation:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});
