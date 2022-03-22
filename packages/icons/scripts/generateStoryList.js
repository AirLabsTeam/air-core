'use strict';

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const prettier = require('prettier');

/**
 * Builds a JSON list of all the SVGs and writes to file. Important to include in the package in case someone needs a
 * list of all the icons ie. you want to render all of them.
 */
function generateStoryList() {
  console.log(chalk.green('Generating list of icons for stories'));
  const svgsPath = path.resolve('src/svgComponents');
  const storyPath = path.resolve('stories');
  const list = fs.readdirSync(svgsPath).filter((filename) => path.extname(filename) === '.tsx');
  const output =
    'export const iconList = ' +
    JSON.stringify(
      list.map((l) => l.replace('.tsx', '')),
      null,
      4,
    ) +
    `\n`;
  const outputPath = path.join(storyPath, 'iconList.ts');
  return prettier.resolveConfig(__filename).then((options) => {
    const prettyOutput = prettier.format(output, {
      ...options,
      parser: 'babel-ts',
    });
    fs.writeFileSync(outputPath, prettyOutput);
  });
}

module.exports = generateStoryList;
