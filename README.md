<p align="center">
  <img alt="horizon banner" src="https://i.imgur.com/pwBUCSe.png">
</p>

---

<p align="center">
  <!-- marketplace version -->
  <a href="https://marketplace.visualstudio.com/items?itemName=jolaleye.horizon-theme-vscode">
    <img alt="marketplace version" src="https://img.shields.io/vscode-marketplace/v/jolaleye.horizon-theme-vscode.svg?maxAge=3600&style=for-the-badge&colorA=1C1E26&colorB=FAB38E">
  </a>
  <!-- installs -->
  <a href="https://marketplace.visualstudio.com/items?itemName=jolaleye.horizon-theme-vscode">
    <img alt="installs" src="https://vsmarketplacebadge.apphb.com/installs-short/jolaleye.horizon-theme-vscode.svg?maxAge=3600&style=for-the-badge&colorA=1C1E26&colorB=FAB38E">
  </a>
  <!-- rating -->
  <a href="https://marketplace.visualstudio.com/items?itemName=jolaleye.horizon-theme-vscode">
    <img alt="rating" src="https://vsmarketplacebadge.apphb.com/rating-star/jolaleye.horizon-theme-vscode.svg?maxAge=86400&style=for-the-badge&colorA=1C1E26&colorB=FAB38E">
  </a>
</p>

<p align="center">
  <img alt="preview" src="https://i.imgur.com/y0gi1ez.png" width="90%">
</p>

> The preview above shows the _Horizon_ theme with the _Roboto Mono_ font. Horizon also includes a _Horizon Italic_ variant.

## Installation

1. Open the **Extensions** sidebar in VS Code
2. Search for `Horizon Theme`
3. Click **Install** and **Reload**
4. Open the **Command Palette** with `Ctrl+Shift+P`
5. Select **Preferences: Color Theme** and choose a Horizon variant.
6. Enjoy! 🎉 Also, check out some of the personalization options below...

## Personalization

Themes are highly subjective and tastes change all the time. Luckily, VS Code makes it easy to customize just about every aspect of your editor.
If you want to change something, open the Command Palette with `Ctrl+Shift+P` and select **Preferences: Open Settings (JSON)**. You can then override VS Code's defaults or Horizon's colors in the right side of the settings view.
Check out some of the personalization options below to customize Horizon to suit your taste.

For more info on theming, visit the [Extension Authoring Guide](https://code.visualstudio.com/docs/extensions/themes-snippets-colorizers) and [Theme Color Reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference).

### Sidebar Contrast

```
"workbench.colorCustomizations": {
  "activityBar.background": "#1E2028",
  "activityBar.border": "#1E2028",
  "sideBar.background": "#1E2028",
  "sideBar.border": "#1C1E26"
}
```

### Tag Brackets `<>`

```
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "name": "HTML tag brackets",
      "scope": [
        "punctuation.definition.tag.begin",
        "punctuation.definition.tag.end"
      ],
      "settings": {
        "foreground": "#BBBBBB"
      }
    }
  ]
}
```

## Contributing

### [Code of Conduct](CODE_OF_CONDUCT.md)

Always try your best to make a positive impact on this project and its community. By participating, you are expected to uphold the Code of Conduct.

### [Contributing Guide](CONTRIBUTING.md)

Read the contributing guide to learn about how you can report issues and contribute to changes.

## License

[MIT](LICENSE) © [Jonathan Olaleye](https://github.com/jolaleye)
