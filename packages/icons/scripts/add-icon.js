const fs = require('fs');
const _ = require('lodash'); // eslint-disable-line lodash/import-scope
const absolutePath = process.cwd(); // icons package root
const svgPath = absolutePath.concat('/src/svgs');

/**
 * Grabs diretories where icons are stored
 * Here object is all the files and directories grabbed from svgPath
 * The endgoal is to only return directories from svgPath
 */
const directories = fs
  .readdirSync(svgPath, { withFileTypes: true })
  .filter((object) => object.isDirectory())
  .map((object) => object.name);

/**
 * Creates a dictionary for the icons: {us-states: [list of icons], quick-actions: [], etc}
 * It also creates a list of all Icons available for importing
 */
const allIcons = [];
let iconDictionary = {};

directories.forEach((directory) => {
  const arrayOfFiles = fs.readdirSync(`${svgPath}/${directory}`);
  iconDictionary[directory] = arrayOfFiles;
  allIcons.push.apply(allIcons, arrayOfFiles);
});

const toPascalCase = (someString) => _.startCase(_.camelCase(someString));

// assuming `fileName` lacks `.svg` suffix and assuming `relativePath`
const generateTemplatesForFile = (fileName, relativePath) => {
  const pascalFileName = toPascalCase(fileName).replace(/ /g, '');
  const alias = `_${pascalFileName}`;
  const importLine = `\nimport ${alias} from '${relativePath}${fileName}.svg';`;
  const typeMapLine = `\nconst ${pascalFileName} = (props?: BoxProps<SVGElement>) => <Box as={${alias}} {...props} />;`;
  const exportLine = `  ${pascalFileName},\n`;

  return { importLine, typeMapLine, exportLine };
};

/**
 * Creates three statements per icon and stores them in the appropriate array
 * Afterwards, they are combined into one array that is written as a file
 */
let importLines = ["import React from 'react';\nimport { Box, BoxProps } from '@air/zephyr';\n"];
let typeMapLines = [];
let exportLines = ['\nexport {\n'];

for (const allIcon of allIcons) {
  let iconPath = '';
  //grabs correct path for Icon
  for (const directory of directories) {
    if (iconDictionary[directory].includes(allIcon)) {
      iconPath = './svgs/' + directory + '/';
    }
  }
  const [iconFileName] = allIcon.split('.');
  const { importLine, typeMapLine, exportLine } = generateTemplatesForFile(iconFileName, iconPath);

  importLines.push(importLine);
  typeMapLines.push(typeMapLine);
  exportLines.push(exportLine);
}

importLines.push('\n');
typeMapLines.push('\n');
exportLines.push('};\n');

const combinedLineArrays = importLines.concat(typeMapLines, exportLines);

//Files is written/overwritten
const writeStream = fs.createWriteStream(absolutePath.concat('/src/index.tsx'));
// write each value of the array on the file breaking line
combinedLineArrays.forEach((value) => writeStream.write(`${value}`));
writeStream.end();
