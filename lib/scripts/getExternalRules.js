"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const getRules = (config, nodeModulesDir) => {
    const rules = {};
    config.plugins.forEach((pluginName) => {
        const pluginPath = pluginName.includes("@")
            ? `${pluginName}/eslint-plugin`
            : `eslint-plugin-${pluginName}`;
        rules[pluginName] = require(path_1.join(nodeModulesDir, pluginPath)).rules;
    });
    return rules;
};
/**
 *
 * Flat Rules
 * will transform this: { prettier: { prettier: {} } }
 * to: 'prettier/prettier': {}
 */
const flatRules = (rules) => {
    const newRulesRecord = {};
    Object.keys(rules).forEach((pluginName) => {
        const pluginRules = rules[pluginName];
        Object.keys(pluginRules).forEach((ruleName) => {
            const flatName = `${pluginName}/${ruleName}`;
            newRulesRecord[flatName] = pluginRules[ruleName];
        });
    });
    return newRulesRecord;
};
exports.getExternalRules = (config, nodeModulesDir) => {
    const nextRules = getRules(config, nodeModulesDir);
    return flatRules(nextRules);
};
//# sourceMappingURL=getExternalRules.js.map