<div align="center">

<img src="icon.png" alt="" width="125">

# Horizon

### A beautifully warm dark theme for Visual Studio Code.

![preview](https://i.imgur.com/Bwqnpp6.png)

</div>

## Installation

1. Open the **Extensions** sidebar in VS Code
2. Search for `Horizon` and choose "Horizon Theme" by Jonathan Olaleye
3. Click **Install**
4. Click **Reload** to reload VS Code
5. Navigate to File > Preferences > Color Theme and select **Horizon**
6. You're all set! Enjoy! 🎉 P.S. Check out some of the tweaks below... :)

## Tweaks

Everyone has their own tastes which is why I've added a few tweaks that you can make to enjoy Horizon even more 😄. Each tweak only requires that you open your editor's JSON settings and copy & paste the snippet. You can get there by opening the command palette with `Ctrl+Shift+P` and finding **Preferences: Open Settings (JSON)**. Just copy and paste the snippet into the right side of the settings editor and you're good to go!

For more info on theming and personalization visit the [Extension Authoring Guide](https://code.visualstudio.com/docs/extensions/themes-snippets-colorizers) and the [VS Code Theme Color Reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference).

### Font
The font used in the preview is **Roboto Mono**, available on [Google Fonts](https://fonts.google.com/specimen/Roboto+Mono).

After you've downloaded and installed it, open your editor's settings and add the following...
```
"editor.fontFamily": "Roboto Mono"
```

### Sidebar contrast
Horizon has a seamless appearance across the different elements of VS Code. If you would like to add borders or tweak background colors, you can do so in your editor's settings. The following is my recommendation for sidebar contrast, but feel free to use whatever colors you want.
```
"workbench.colorCustomizations": {
  "activityBar.background": "#1E2028",
  "activityBar.border": "#1E2028",
  "sideBar.background": "#1E2028",
  "sideBar.border": "#1C1E26"
}
```

### Tag brackets
To customize the color of brackets `<>` around HTML tags, add the following to your settings...
```
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "name": "Tag brackets",
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

If you find anything weird please [open an issue](https://github.com/jolaleye/horizon-theme-vscode/issues). Include a screenshot if possible for clarity. For larger problems, consider making a short demo like the ones found in `demos`. The community is what makes projects like this one great. 😉

<div align="center">

Designed by [Jonathan Olaleye](https://github.com/jolaleye)

</div>
