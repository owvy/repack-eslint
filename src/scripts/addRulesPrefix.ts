import { Linter } from "eslint";

let Plugins: string[] = [];

const isExternalRule = (ruleName: string) =>
  Plugins.map((plugin) => ruleName.startsWith(plugin)).filter(Boolean)[0];

const removeExternalPlugins = (config: Linter.Config) => {
  Plugins = [...config.plugins];
  return { ...config, plugins: [] as any[] };
};

const overrideRules = (config: Linter.Config, pluginName: string) => {
  const newRules = Object.keys(config.rules).reduce((allRules, ruleKey) => {
    const ruleName = isExternalRule(ruleKey)
      ? `${pluginName}/${ruleKey}`
      : ruleKey;
    return { ...allRules, [ruleName]: config.rules[ruleKey] };
  }, {});
  return { ...config, rules: newRules };
};

export const addRulesPrefix = (config: Linter.Config, pluginName: string) => {
  const nextConfig = removeExternalPlugins(config);
  return overrideRules(nextConfig, pluginName);
};
