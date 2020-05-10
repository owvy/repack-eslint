declare type RepackOptions = {
    pluginName: string;
    nodeModulesDir: string;
};
declare type EslintConfig = {
    [name: string]: any;
};
export declare const repackConfig: (eslintConfig: EslintConfig, options: RepackOptions) => {
    rules: import("eslint").Linter.RulesRecord;
    config: {
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
        overrides?: import("eslint").Linter.ConfigOverride<import("eslint").Linter.RulesRecord>[];
        parser?: string;
        parserOptions?: import("eslint").Linter.ParserOptions;
        plugins?: string[];
        processor?: string;
        reportUnusedDisableDirectives?: boolean;
        settings?: {
            [name: string]: any;
        };
    };
};
export {};
