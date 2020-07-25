const fs = require('fs');

const nativeFile = './src-native/index.tsx';

fs.readFile(nativeFile, 'utf8', (readError, data) => {
  if (readError) return console.log(readError);

  const result = data

    // Add React Native import
    .replace(/react';/g, "react';\nimport { View } from 'react-native';")

    // Update SVG dependency
    .replace(/svgs/g, 'react-native-svg')

    // Replace `div` with `View`
    .replace(/div/g, 'View')

    // Remove web-specific styles
    .replace(/boxSizing: 'border-box',/g, '')
    .replace(/display: 'inline-block',/g, '')
    .replace(/verticalAlign: 'middle',/g, '')
    .replace(/lineHeight: 0,/g, '');

  fs.writeFile(nativeFile, result, 'utf8', (writeError) => writeError && console.log(writeError));
});
