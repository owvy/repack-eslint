import { Linter } from "eslint";
export declare const addRulesPrefix: (config: Linter.Config<Linter.RulesRecord>, pluginName: string) => {
    rules: {};
    ignorePatterns?: string | string[];
    root?: boolean;
    $schema?: string;
    env?: {
        [name: string]: boolean;
    };
    extends?: string | string[];
    globals?: {
        [name: string]: boolean;
    };
    noInlineConfig?: boolean;
    overrides?: Linter.ConfigOverride<Linter.RulesRecord>[];
    parser?: string;
    parserOptions?: Linter.ParserOptions;
    plugins?: string[];
    processor?: string;
    reportUnusedDisableDirectives?: boolean;
    settings?: {
        [name: string]: any;
    };
};
