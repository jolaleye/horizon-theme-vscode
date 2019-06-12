<p align="center">
  <a href="https://horizontheme.com/">
    <img alt="horizon banner" src="https://i.imgur.com/pwBUCSe.png">
  </a>
</p>

---

<p align="center">
  <!-- marketplace version -->
  <a href="https://marketplace.visualstudio.com/items?itemName=jolaleye.horizon-theme-vscode">
    <img alt="marketplace version" src="https://img.shields.io/vscode-marketplace/v/jolaleye.horizon-theme-vscode.svg?maxAge=3600&style=for-the-badge&labelColor=1C1E26&color=F8C3B4">
  </a>
  <!-- downloads -->
  <a href="https://marketplace.visualstudio.com/items?itemName=jolaleye.horizon-theme-vscode">
    <img alt="downloads" src="https://img.shields.io/visual-studio-marketplace/d/jolaleye.horizon-theme-vscode.svg?maxAge=3600&style=for-the-badge&labelColor=1C1E26&color=F8C3B4">
  </a>
  <!-- rating -->
  <a href="https://marketplace.visualstudio.com/items?itemName=jolaleye.horizon-theme-vscode">
    <img alt="rating" src="https://img.shields.io/visual-studio-marketplace/stars/jolaleye.horizon-theme-vscode.svg?maxAge=86400&style=for-the-badge&labelColor=1C1E26&color=F8C3B4">
  </a>
</p>

<p align="center">
  <img alt="preview" src="https://raw.githubusercontent.com/jolaleye/horizon-theme-vscode/master/preview.png" width="90%">
</p>

## Installation

1. Open the **Extensions** sidebar in VS Code
2. Search for `Horizon Theme`
3. Click **Install**
4. Open the **Command Palette** with `Ctrl+Shift+P` or `⇧⌘P`
5. Select **Preferences: Color Theme** and choose a Horizon variant.
6. Enjoy! 🎉 Also, check out some of the personalization options below...

### Visit [horizontheme.com](https://horizontheme.com/) for some nice previews and a color reference :)

## Personalization

Tastes change all the time. Fortunately, VS Code makes it easy to customize just about every aspect of your editor.
If you want to change something, open the **Command Palette** and select **Preferences: Open Settings (JSON)**. Here, you can override VS Code's defaults or Horizon's colors.
Check out some of the personalization options below to customize Horizon to suit your taste.

_For more info on theming, visit the [Theme Authoring Guide](https://code.visualstudio.com/api/extension-capabilities/theming) and [Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)._

### Sidebar Contrast

```
"workbench.colorCustomizations": {
  "activityBar.background": "#1E2028",
  "activityBar.border": "#1E2028",
  "sideBar.background": "#1E2028",
  "sideBar.border": "#1C1E26"
}
```

### Italics

The normal theme only uses italics in a few places: comments, parameters, and some special keywords (e.g. `this`). If you would prefer no italics at all, you can configure this in your settings...

```
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "name": "No italics",
      "scope": ["comment", "variable.language", "variable.parameter"],
      "settings": {
        "fontStyle": ""
      }
    }
  ]
}
```

### Tag Brackets `<>`

For gray rather than red brackets around HTML tags...

```
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "name": "HTML tag brackets",
      "scope": ["punctuation.definition.tag"],
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
