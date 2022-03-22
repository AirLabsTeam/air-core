/**
 * SVGO Options
 *
 * @type {import('svgo').OptimizeOptions}
 */
const svgoConfig = {
  plugins: [
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            'aria-hidden': 'true',
          },
          {
            fill: 'currentColor',
          },
        ],
      },
    },
    {
      name: 'prefixIds',
      params: {
        delim: '_',
      },
    },
    {
      name: 'cleanupIDs',
      params: {
        minify: true,
      },
    },
    'cleanupListOfValues',
    'convertColors',
    'convertStyleToAttrs',
    'convertTransform',
    'mergePaths',
    'minifyStyles',
    'moveElemsAttrsToGroup',
    'removeComments',
    'removeDimensions',
    'removeDoctype',
    'removeEditorsNSData',
    'removeEmptyAttrs',
    'removeEmptyContainers',
    'removeEmptyText',
    'removeNonInheritableGroupAttrs',
    'removeTitle',
    'removeUnusedNS',
    'removeUselessDefs',
    'removeUselessStrokeAndFill',
    'removeXMLProcInst',
    'sortAttrs',
    {
      name: 'removeAttrs',
      params: { attrs: ['fill-rule', 'fillRule'] },
    },
    { name: 'removeDesc', params: { removeAny: true } },
    { name: 'removeUnknownsAndDefaults', params: { keepDataAttrs: false } },
  ],
  floatPrecision: 3,
  multipass: true,
};

module.exports = svgoConfig;
