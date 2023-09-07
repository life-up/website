const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:8090", // 默认测试域名
    fixturesFolder: "test/e2e/fixtures", // 外部静态数据
    screenshotsFolder: "test/e2e/screenshots", // 屏幕快照
    videosFolder: "test/e2e/videos", // 录制视频
    specPattern: "test/e2e/specs/*.cy.{js,jsx,ts,tsx}", // 测试用例文件
    supportFile: "test/e2e/support/e2e.{js,jsx,ts,tsx}", // 配置全局注入
    viewportHeight: 768, // 测试浏览器视口高度
    viewportWidth: 1366, // 测试浏览器视口宽度
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
