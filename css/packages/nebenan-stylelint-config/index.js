module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-scss",
    "stylelint-order"
  ],
  "rules": {
    "block-opening-brace-newline-after": ["always"],
    "block-closing-brace-newline-before": ["always"],

    "color-named": "never",

    "declaration-property-value-whitelist": {
      "/^transition/": ["/^opacity/", "/^transform/"]
    },
    "declaration-empty-line-before": null,

    "selector-max-id": 0,
    "selector-class-pattern": "^[a-zA-Z]+(-[\\w-]+)?$",
    "function-name-case": null,

    "max-nesting-depth": [3, { ignoreAtRules: ["media"] }],

    "at-rule-no-unknown": null,
    "at-rule-blacklist": ["extend"],
    "scss/at-rule-no-unknown": true,

    "order/order": [
      "dollar-variables",
      "declarations",
      "rules"
    ],
    "order/properties-order": [
      "min-width",
      "min-height",
      "max-width",
      "max-height",

      "width",
      "height",

      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",

      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",

      "content",
      "display",

      "float",
      "clear",
      "vertical-align",

      "flex",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex-direction",

      "flex-order",
      "flex-wrap",
      "flex-flow",

      "order",
      "justify-content",
      "align-self",
      "align-items",
      "align-content",
      "flex-pack",
      "flex-align",

      "overflow",
      "overflow-x",
      "overflow-y",

      "position",
      "top",
      "right",
      "bottom",
      "left",

      "transform",
      "transform-origin",

      "z-index",

      "visibility",
      "opacity",

      "border",
      "border-width",
      "border-top",
      "border-top-width",
      "border-right",
      "border-right-width",
      "border-bottom",
      "border-bottom-width",
      "border-left",
      "border-left-width"
    ],
  },
}