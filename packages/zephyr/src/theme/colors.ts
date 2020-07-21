import tinycolor from 'tinycolor2';

export type ColorName =
  | 'white'
  | 'pigeon0.5'
  | 'pigeon0'
  | 'pigeon1'
  | 'pigeon2'
  | 'pigeon3'
  | 'pigeon4'
  | 'pigeon5'
  | 'pigeon6'
  | 'pigeon7'
  | 'pigeon8'
  | 'pigeon9'
  | 'black'
  | 'peacock0'
  | 'peacock1'
  | 'peacock2'
  | 'peacock3'
  | 'peacock4'
  | 'peacock5'
  | 'peacock6'
  | 'peacock7'
  | 'peacock8'
  | 'peacock9'
  | 'jay0'
  | 'jay1'
  | 'jay2'
  | 'jay3'
  | 'jay4'
  | 'jay5'
  | 'jay6'
  | 'jay7'
  | 'jay8'
  | 'jay9'
  | 'flamingo0'
  | 'flamingo1'
  | 'flamingo2'
  | 'flamingo3'
  | 'flamingo4'
  | 'flamingo5'
  | 'flamingo6'
  | 'flamingo7'
  | 'flamingo8'
  | 'flamingo9'
  | 'canary0'
  | 'canary1'
  | 'canary2'
  | 'canary3'
  | 'canary4'
  | 'canary5'
  | 'canary6'
  | 'canary7'
  | 'canary8'
  | 'canary9'
  | 'transparent'
  | 'transparentSafariHack'
  | 'focus'
  | 'dropbox'
  | 'googleDrive';

/**
 * Universal color palette for Air's suite of apps
 * @example
 * // return #01eae1
 * Colors.peacock3
 * @returns {string} A hexcode or rgba color value
 */
const lights = {
  white: '#ffffff',
};

const pigeons = {
  'pigeon0.5': '#f7f7f7',
  pigeon0: '#f1f1f1',
  pigeon1: '#dcdcdc',
  pigeon2: '#c1c1c1',
  pigeon3: '#a4a4a4',
  pigeon4: '#808080',
  pigeon5: '#666666',
  pigeon6: '#4d4d4d',
  pigeon7: '#333333',
  pigeon8: '#262626',
  pigeon9: '#0f0f0f',
};

const darks = {
  black: '#000000',
};

const peacocks = {
  peacock0: '#ccfdea',
  peacock1: '#9bfbdf',
  peacock2: '#68f4d8',
  peacock3: '#42ead7',
  peacock4: '#0addd7',
  peacock5: '#07b3be',
  peacock6: '#05889f',
  peacock7: '#036280',
  peacock8: '#01486a',
  peacock9: '#033b51',
};

const jays = {
  jay0: '#deeefc',
  jay1: '#bfdbf9',
  jay2: '#9bc1ef',
  jay3: '#7ea6e0',
  jay4: '#4c85d8',
  jay5: '#2954af',
  jay6: '#1b3889',
  jay7: '#142a72',
  jay8: '#102261',
  jay9: '#0b1953',
};

const flamingos = {
  flamingo0: '#fcf0f0',
  flamingo1: '#ffd9d9',
  flamingo2: '#ff8383',
  flamingo3: '#ff6969',
  flamingo4: '#ff5050',
  flamingo5: '#ed3b3b',
  flamingo6: '#d23939',
  flamingo7: '#a1222f',
  flamingo8: '#841328',
  flamingo9: '#511421',
};

const canaries = {
  canary0: '#fff1b9',
  canary1: '#ffe784',
  canary2: '#fdd778',
  canary3: '#ffbe3c',
  canary4: '#ffac00',
  canary5: '#ff9d00',
  canary6: '#ef7600',
  canary7: '#ce4d13',
  canary8: '#833602',
  canary9: '#4c2103',
};

const singles = {
  transparent: 'transparent',
  transparentSafariHack: 'rgba(255, 255, 255, 0.001)',
};

const accessibility = {
  focus: jays.jay4,
};

const integrations = {
  dropbox: '#0061ff',
  googleDrive: '#0061ff',
};

// TODO: Remove legacy colors below

const charcoals = {
  charcoal50: pigeons.pigeon0,
  charcoal100: pigeons.pigeon1,
  charcoal200: pigeons.pigeon2,
  charcoal300: pigeons.pigeon3,
  charcoal400: pigeons.pigeon4,
  charcoal500: pigeons.pigeon5,
  charcoal600: pigeons.pigeon6,
  charcoal700: pigeons.pigeon7,
  charcoal800: pigeons.pigeon8,
  charcoal900: pigeons.pigeon9,
};

const greens = {
  green50: peacocks.peacock0,
  green100: peacocks.peacock1,
  green200: peacocks.peacock2,
  green300: peacocks.peacock3,
  green400: peacocks.peacock4,
  green500: peacocks.peacock5,
  green600: peacocks.peacock6,
  green700: peacocks.peacock7,
  green800: peacocks.peacock8,
  green900: peacocks.peacock9,
  greenAccent100: peacocks.peacock0,
  greenAccent200: peacocks.peacock1,
  greenAccent400: peacocks.peacock2,
  greenAccent700: peacocks.peacock3,
};

const transparencies = {
  transBlack40: `${tinycolor(darks.black).setAlpha(0.4)}`,
  transBlack50: `${tinycolor(darks.black).setAlpha(0.5)}`,
  transBlack60: `${tinycolor(darks.black).setAlpha(0.6)}`,
  transBlack70: `${tinycolor(darks.black).setAlpha(0.7)}`,
  transBlack80: `${tinycolor(darks.black).setAlpha(0.8)}`,
  transWhite25: `${tinycolor(lights.white).setAlpha(0.25)}`,
  transWhite30: `${tinycolor(lights.white).setAlpha(0.3)}`,
  transWhite35: `${tinycolor(lights.white).setAlpha(0.35)}`,
  transWhite50: `${tinycolor(lights.white).setAlpha(0.5)}`,
  transWhite60: `${tinycolor(lights.white).setAlpha(0.6)}`,
  transWhite70: `${tinycolor(lights.white).setAlpha(0.7)}`,
  transWhite80: `${tinycolor(lights.white).setAlpha(0.8)}`,
  transWhite90: `${tinycolor(lights.white).setAlpha(0.9)}`,
  transGray80: `${tinycolor(pigeons.pigeon3).setAlpha(0.8)}`,
  transCharcoal700_80: `${tinycolor(pigeons.pigeon4).setAlpha(0.8)}`,
  transPeacock3_30: `${tinycolor(peacocks.peacock3).setAlpha(0.3)}`,
};

const borders = {
  border50: pigeons.pigeon1,
  border100: pigeons.pigeon2,
};

const blues = {
  blue50: jays.jay1,
  blue100: jays.jay2,
  blue200: jays.jay2,
  blue300: jays.jay3,
  blue400: jays.jay4,
  blue500: jays.jay5,
  blue600: jays.jay6,
  blue700: jays.jay7,
  blue800: jays.jay7,
  blue900: jays.jay8,
  blueAccent100: jays.jay0,
  blueAccent200: jays.jay1,
  blueAccent400: jays.jay2,
  blueAccent700: jays.jay3,
  slate: pigeons.pigeon5,
  lightBlue: jays.jay0,
};

const reds = {
  softRed: flamingos.flamingo4,
  red: flamingos.flamingo6,
  deepRed: flamingos.flamingo6,
};

const pinks = {
  pink: '#bc8ca0',
  darkPink: '#5e4e53',
};

export const colors: { [key in ColorName]: string } = {
  ...lights,
  ...pigeons,
  ...darks,
  ...peacocks,
  ...jays,
  ...flamingos,
  ...canaries,
  ...singles,
  ...accessibility,
  ...integrations,
  ...charcoals,
  ...greens,
  ...transparencies,
  ...borders,
  ...blues,
  ...reds,
  ...pinks,
};
