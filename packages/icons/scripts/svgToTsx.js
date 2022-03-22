const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { pascal } = require('case'); // eslint-disable-line lodash/import-scope
const prompts = require('prompts');
const { optimize } = require('svgo');
const tsxFromTemplate = require('./tsxFromTemplate');
const generateStoryList = require('./generateStoryList');
const generateExports = require('./generateExports');
const svgoConfig = require('./svgoConfig');

async function promptIconName() {
  function onCancel() {
    console.log('Aborting icon creation');
    process.exit(1);
  }
  const response = await prompts(
    [
      {
        type: 'text',
        name: 'rawName',
        message: `What is the name of this icon? Example: MyIcon`,
        validate: (val) => (!val ? 'Please provide a value' : true),
      },
      {
        type: 'confirm',
        name: 'confirm',
        message: (prev) => `Your icon name will be ${chalk.yellow(pascal(prev))}
    Confirm: `,
        initial: true,
      },
    ],
    {
      onCancel,
    },
  );
  if (!response.confirm) {
    onCancel();
  }
  const iconName = pascal(response.rawName);
  return {
    iconName,
  };
}

function validateSvgPath(pathToSvg) {
  if (!pathToSvg) {
    console.log(
      chalk.red(`
    Please provide a path to a .svg file. Example:
        ${chalk.white('yarn add:icon path/to/icon.svg')}
    `),
    );
    process.exit(1);
  }

  if (!fs.existsSync(pathToSvg)) {
    console.log(
      chalk.red(`
    Provided path does not exist
        ${chalk.white(pathToSvg)}
    `),
    );
    process.exit(1);
  }

  if (path.extname(pathToSvg) !== '.svg') {
    console.log(
      chalk.red(`
    File must be '.svg'. Received:
        ${chalk.white(pathToSvg)}
    `),
    );
    process.exit(1);
  }

  console.log(chalk.green('Valid path to SVG provided'));
}

async function formatSvg(pathToSvg) {
  console.log(chalk.green('Formatting SVG with SVGO library'));
  const svgData = fs.readFileSync(pathToSvg, 'utf8');
  const result = await optimize(svgData, svgoConfig);
  if (result.error) throw `Something went wrong: ${result.error}`;
  // @ts-ignore data should be there
  return result.data;
}

async function svgToTsx() {
  const pathToSvg = process.argv[2];
  validateSvgPath(pathToSvg);
  const { iconName } = await promptIconName();
  const outputPath = path.resolve('src/svgComponents', iconName + '.tsx');
  if (fs.existsSync(outputPath)) {
    console.log(chalk.red(`An icon with the name of ${chalk.yellow(iconName)} already exists.`));
    process.exit(1);
  }
  const formattedSvg = await formatSvg(pathToSvg);
  const output = await tsxFromTemplate(iconName, formattedSvg);
  console.log(chalk.green(`Generating tsx file at path ${chalk.yellow(outputPath)}`));
  fs.writeFileSync(outputPath, output);
  generateExports();
  generateStoryList();
}

svgToTsx();
