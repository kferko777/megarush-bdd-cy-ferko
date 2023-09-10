import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      require("cypress-mochawesome-reporter/plugin")(on);
      allureWriter(on, config);
      //return config;

      on(
        "file:preprocessor",
       createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    
    includeShadowDom : true,
    chromeWebSecurity: false,
    defaultCommandTimeout: 30000,
    viewportWidth: 1536,
    viewportHeight: 960,
    retries: { runMode: 1, openMode: 0 },
    video: true,
    "env": {
      "url": "https://www.megarush.com/en"
    },
  },
});
