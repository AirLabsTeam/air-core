'use strict';

/**
 * Converts HTML to a react component (string).
 * Returns a promise which resolves with a string to you can write to the file system.
 */
const chalk = require('chalk');
const { camelCase, isString } = require('lodash'); // eslint-disable-line lodash/import-scope
const prettier = require('prettier');
const Xml = require('xml2js');
const attrKey = 'attributes';
const styleKey = 'style';
const parser = new Xml.Parser({ attrkey: attrKey });
const builder = new Xml.Builder({ attrkey: attrKey, headless: true });

const template = (iconName, data) => {
  return `import React, { forwardRef, SVGProps } from 'react';

export interface ${iconName}Props extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const ${iconName} = forwardRef<SVGSVGElement, ${iconName}Props>((props, ref) => (
  ${data}
));
${iconName}.displayName = '${iconName}';
`;
};

const convertStyleStringToObjectString = (node) => {
  Object.keys(node).forEach((key) => {
    const potentialChild = node[key];
    if (Array.isArray(potentialChild)) {
      potentialChild.forEach((child) => convertStyleStringToObjectString(child));
    }
  });

  const attributes = node[attrKey];
  if (!attributes) {
    return;
  }
  const correctables = {
    class: { correctedName: 'className' },
    'fill-opacity': { correctedName: 'fillOpacity' },
    'fill-rule': { correctedName: 'fillRule' },
    'stop-color': { correctedName: 'stopColor' },
  };

  Object.keys(correctables).forEach((badAttrName) => {
    if (attributes[badAttrName]) {
      const correctedName = correctables[badAttrName].correctedName;
      attributes[correctedName] = attributes[badAttrName];
      delete attributes[badAttrName];
    }
  });
  const styleAttr = attributes[styleKey];
  if (styleAttr && isString(styleAttr)) {
    const styleStrings = styleAttr.split(';').filter(Boolean);
    const keysAndValues = styleStrings
      .map((styleString) => {
        let [key, rawValue] = styleString.split(':');
        key = camelCase(key.trim());
        rawValue = rawValue.trim();

        let value;
        if (isNaN(Number(rawValue))) {
          value = `'${rawValue}'`;
        } else {
          value = rawValue;
        }

        return `${key}: ${value}`;
      })
      .join(',');
    attributes[styleKey] = `{{${keysAndValues}}}`;
  }
};

const tsxFromTemplate = (iconName, formattedSvg) => {
  console.log(chalk.green(`Generating formatted tsx for ${iconName}`));
  return new Promise((resolve, reject) => {
    parser.parseString(formattedSvg, (err, obj) => {
      if (err) {
        return reject(err);
      }
      const attr = obj.svg[attrKey];
      const openingTagWithProps = `<svg  ref={ref} {...props} `;

      ['version', 'class', 'xmlns', 'xmlns:xlink'].forEach((str) => {
        delete attr[str];
      });

      Object.keys(obj.svg).forEach((key) => {
        const potentialChild = obj.svg[key];
        if (Array.isArray(potentialChild)) {
          potentialChild.forEach((child) => convertStyleStringToObjectString(child));
        }
      });

      const xml = builder.buildObject(obj);

      const xmlString = xml
        .replace('"{{', '{{') // remove quotes surrounding style objects, example:
        .replace('}}"', '}}') // style="{{ opacity: .25 }}" => style={{ opacity: .25 }}
        .replace('<svg ', openingTagWithProps);

      return prettier.resolveConfig(__filename).then((options) => {
        const uglyTemplateString = template(iconName, xmlString);
        const templateString = prettier.format(uglyTemplateString, {
          ...options,
          parser: 'babel-ts',
        });
        resolve(templateString);
        return true;
      });
    });
  });
};

module.exports = tsxFromTemplate;
