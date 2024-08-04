import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",

  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    // Find the existing rule that handles SVGs
    const fileLoaderRule = config!.module!.rules!.find(
      (rule) => rule!.test && rule!.test.test(".svg"),
    );

    // Modify the existing rule to ignore SVGs
    fileLoaderRule!.exclude = /\.svg$/;

    // Add a new rule for handling SVGs using SVGR
    config!.module!.rules!.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
export default config;
