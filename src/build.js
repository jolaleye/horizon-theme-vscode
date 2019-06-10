const fs = require('fs');
const mustache = require('mustache');

const colors = require('./colors.json');
const template = JSON.stringify(require(`${__dirname}/template.json`));
const themeNames = ['horizon'];

for (themeName of themeNames) {
  const content = require(`${__dirname}/${themeName}.json`);
  const theme = mustache.render(template, { ...content, ...colors });
  fs.writeFileSync(`${__dirname}/../themes/${themeName}2.json`, theme); // REMOVE 2s
}
