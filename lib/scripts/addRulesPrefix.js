"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Plugins = [];
const isExternalRule = (ruleName) => Plugins.map((plugin) => ruleName.startsWith(plugin)).filter(Boolean)[0];
const removeExternalPlugins = (config) => {
    Plugins = [...config.plugins];
    return { ...config, plugins: [] };
};
const overrideRules = (config, pluginName) => {
    const newRules = Object.keys(config.rules).reduce((allRules, ruleKey) => {
        const ruleName = isExternalRule(ruleKey)
            ? `${pluginName}/${ruleKey}`
            : ruleKey;
        return { ...allRules, [ruleName]: config.rules[ruleKey] };
    }, {});
    return { ...config, rules: newRules };
};
exports.addRulesPrefix = (config, pluginName) => {
    const nextConfig = removeExternalPlugins(config);
    return overrideRules(nextConfig, pluginName);
};
//# sourceMappingURL=addRulesPrefix.js.map