module.exports = {
  stories: ["../packages/**/src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react",
    options: {}
  }
};
