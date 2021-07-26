const fs = require('fs');
const _ = require('lodash'); // eslint-disable-line lodash/import-scope
const absolutePath = process.cwd(); // icons package root
const { getDirectories, getIconDictionary } = require('./utils');
const directories = getDirectories();

const { iconDictionary } = getIconDictionary(directories);

//reads and stores index.tsx file as an array of lines
let indexLines = fs.readFileSync(`${absolutePath}/src/index.tsx`, 'utf-8');

//Adds the imported IconName to the iconDictionary
//{us-states: [{icon.svg : importedName}], etc}
for (const directory of directories) {
  indexLines
    .toString()
    .split(/\n/)
    .forEach(function (line) {
      for (let j = 0; j < iconDictionary[directory].length; j += 1) {
        if (line.includes('import _')) {
          const tempLineData = line.split(' ');
          const tempPathVariable = tempLineData[1];
          const tempPathData = tempLineData[3].split('/');

          if (tempPathData[3].slice(0, -2) === iconDictionary[directory][j]) {
            let innerObject = {};
            innerObject[iconDictionary[directory][j]] = tempPathVariable;
            iconDictionary[directory][j] = innerObject;
          }
        }
      }
    });
}

//Directory reformatted to titlecase
for (const directory in iconDictionary) {
  iconDictionary[_.startCase(_.toLower(directory))] = iconDictionary[directory];
  delete iconDictionary[directory];
}

//File is Written
let dictstring = JSON.stringify(iconDictionary);
fs.writeFile(`${absolutePath}/src/IconPathData.json`, dictstring, function (err) {
  if (err) throw err;
});
