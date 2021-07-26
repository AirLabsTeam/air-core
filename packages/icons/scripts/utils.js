const fs = require('fs');
const _ = require('lodash'); // eslint-disable-line lodash/import-scope
const absolutePath = process.cwd(); // icons package root
const svgPath = `${absolutePath}/src/svgs`;

/**
 * Grabs diretories where icons are stored
 * Here object is all the files and directories grabbed from svgPath
 * The endgoal is to only return directories from svgPath
 */
const getDirectories = () =>
  fs
    .readdirSync(svgPath, { withFileTypes: true })
    .filter((object) => object.isDirectory())
    .map((object) => object.name);

/**
 * Creates a dictionary for the icons: {us-states: [list of icons], quick-actions: [], etc}
 * It also creates a list of all Icons available for importing
 */
const getIconDictionary = (directories) => {
  const allIcons = [];
  const iconDictionary = {};

  directories.forEach((directory) => {
    const arrayOfFiles = fs
      .readdirSync(`${svgPath}/${directory}`)
      .filter((name) => !!name.match(/.svg/));

    iconDictionary[directory] = arrayOfFiles;
    allIcons.push.apply(allIcons, arrayOfFiles);
  });

  return { allIcons, iconDictionary };
};

module.exports = { getDirectories, getIconDictionary };
