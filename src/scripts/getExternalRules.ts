import { Linter } from "eslint";
import { join } from "path";

const getRules = (config: Linter.Config, nodeModulesDir: string) => {
  const rules: Linter.RulesRecord = {};
  config.plugins.forEach((pluginName) => {
    const pluginPath = pluginName.includes("@")
      ? `${pluginName}/eslint-plugin`
      : `eslint-plugin-${pluginName}`;

    rules[pluginName] = require(join(nodeModulesDir, pluginPath)).rules;
  });

  return rules;
};

/**
 *
 * Flat Rules
 * will transform this: { prettier: { prettier: {} } }
 * to: 'prettier/prettier': {}
 */
const flatRules = (rules: Linter.RulesRecord) => {
  const newRulesRecord: Linter.RulesRecord = {};

  Object.keys(rules).forEach((pluginName) => {
    const pluginRules = (rules[pluginName] as unknown) as Linter.RulesRecord;
    Object.keys(pluginRules).forEach((ruleName) => {
      const flatName = `${pluginName}/${ruleName}`;
      newRulesRecord[flatName] = pluginRules[ruleName];
    });
  });
  return newRulesRecord;
};

export const getExternalRules = (
  config: Linter.Config,
  nodeModulesDir: string
) => {
  const nextRules = getRules(config, nodeModulesDir);
  return flatRules(nextRules);
};
