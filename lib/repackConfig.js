"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const addRulesPrefix_1 = require("./scripts/addRulesPrefix");
const getExternalRules_1 = require("./scripts/getExternalRules");
exports.repackConfig = (eslintConfig, options) => {
    const { pluginName = "owvy", nodeModulesDir = __dirname } = options || {};
    const config = new eslint_1.CLIEngine({
        // resolvePluginsRelativeTo: nodeModulesDir,
        cwd: nodeModulesDir,
        baseConfig: eslintConfig,
    }).getConfigForFile(`eslint-plugin-${pluginName}.js`);
    return {
        rules: getExternalRules_1.getExternalRules(config, nodeModulesDir),
        config: addRulesPrefix_1.addRulesPrefix(config, pluginName),
    };
};
//# sourceMappingURL=repackConfig.js.map