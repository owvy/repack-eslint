import { CLIEngine } from "eslint";
import { addRulesPrefix } from "./scripts/addRulesPrefix";
import { getExternalRules } from "./scripts/getExternalRules";

type RepackOptions = {
  pluginName: string;
  nodeModulesDir: string;
};

type EslintConfig = { [name: string]: any };

export const repackConfig = (
  eslintConfig: EslintConfig,
  options: RepackOptions
) => {
  const { pluginName = "owvy", nodeModulesDir = __dirname } = options || {};
  const config = new CLIEngine({
    cwd: nodeModulesDir,
    baseConfig: eslintConfig,
  }).getConfigForFile(`eslint-plugin-${pluginName}.js`);

  return {
    rules: getExternalRules(config, nodeModulesDir),
    config: addRulesPrefix(config, pluginName),
  };
};
