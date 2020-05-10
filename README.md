# repack-eslint

Repack eslint dependencies **supporting plugins as dependencies in shareable config**.

_Eslint does not resolve plugins from sharable configuration, forcing the project to have all the dependencies installed. `repack-eslint` is a way around that._

## Quickstart

`npm install @owvy/repack-eslint`

Usage Examples:

1. [How does it work?](#how-does-it-work)
2. [Important Details](#basic-usage)

### How does it work

It basically convert your config to a **plugin** and import all the rules from its dependencies.

- Standard config file:

```js
// package: eslint-config-simple

module.exports = {
  plugins: ['prettier']
  rules: {
      "prettier/prettier": "error"
  }

// project: eslintrc.js

  module.exports = {
    extends: ['simple']
  }
}
```

- Config/Plugin with eslint-repack:

```js
// package: eslint-plugin-simple

const myConfig = repackConfig(require("./eslint-config-simple"), {
  pluginName: "simple",
  nodeModulesDir: path.join(__dirname, "node_modules"),
});

module.exports = {
  rules: myConfig.rules,
  configs: {
    all: myConfig.config,
  },
};

// project: eslintrc.js

  module.exports = {
    extends: ['plugin:simple/all'],
    plugins: ['simple']
  }
}
```

#### Basic Usage

If you are planning to add new rules or override any of rules that is coming from the plugin, you will need to **add your plugin name** as prefix:

```js
// Prettier used on: eslint-plugin-simple
{
  ...
  rules: {
      "simple/prettier/prettier": "error"
  }
}
```

###### PR, Comments & feedback are welcome :)
