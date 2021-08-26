export type ColorName =
  | 'black'
  | 'canary050'
  | 'canary100'
  | 'canary200'
  | 'canary300'
  | 'canary400'
  | 'canary500'
  | 'canary600'
  | 'canary700'
  | 'canary800'
  | 'canary900'
  | 'cuckoo050'
  | 'cuckoo100'
  | 'cuckoo200'
  | 'cuckoo300'
  | 'cuckoo400'
  | 'cuckoo500'
  | 'cuckoo600'
  | 'cuckoo700'
  | 'cuckoo800'
  | 'cuckoo900'
  | 'cockatoo025'
  | 'cockatoo050'
  | 'cockatoo100'
  | 'cockatoo200'
  | 'cockatoo300'
  | 'cockatoo400'
  | 'cockatoo500'
  | 'cockatoo600'
  | 'cockatoo700'
  | 'cockatoo800'
  | 'dropbox'
  | 'flamingo050'
  | 'flamingo100'
  | 'flamingo200'
  | 'flamingo300'
  | 'flamingo400'
  | 'flamingo500'
  | 'flamingo600'
  | 'flamingo700'
  | 'flamingo800'
  | 'flamingo900'
  | 'focus'
  | 'googleDrive'
  | 'jay050'
  | 'jay100'
  | 'jay200'
  | 'jay300'
  | 'jay400'
  | 'jay500'
  | 'jay600'
  | 'jay700'
  | 'jay800'
  | 'jay900'
  | 'macaw020'
  | 'macaw040'
  | 'macaw060'
  | 'macaw080'
  | 'macaw100'
  | 'macaw200'
  | 'macaw300'
  | 'macaw350'
  | 'macaw400'
  | 'macaw500'
  | 'macaw600'
  | 'parrot025'
  | 'parrot050'
  | 'parrot100'
  | 'parrot200'
  | 'parrot300'
  | 'parrot400'
  | 'parrot500'
  | 'parrot600'
  | 'parrot700'
  | 'parrot800'
  | 'peacock050'
  | 'peacock100'
  | 'peacock200'
  | 'peacock300'
  | 'peacock400'
  | 'peacock500'
  | 'peacock600'
  | 'peacock700'
  | 'peacock800'
  | 'peacock900'
  | 'pigeon025'
  | 'pigeon050'
  | 'pigeon100'
  | 'pigeon200'
  | 'pigeon300'
  | 'pigeon400'
  | 'pigeon500'
  | 'pigeon600'
  | 'pigeon700'
  | 'pigeon800'
  | 'pigeon900'
  | 'robin050'
  | 'robin100'
  | 'robin200'
  | 'robin300'
  | 'robin400'
  | 'transparent'
  | 'white';

const canaries = {
  canary050: '#fff1b9',
  canary100: '#ffe784',
  canary200: '#fdd778',
  canary300: '#ffbe3c',
  canary400: '#ffac00',
  canary500: '#ff9d00',
  canary600: '#ef7600',
  canary700: '#ce4d13',
  canary800: '#833602',
  canary900: '#4c2103',
};

const cockatoos = {
  cockatoo025: '#FDD2FF',
  cockatoo050: '#FFAEF9',
  cockatoo100: '#FF83F3',
  cockatoo200: '#FF4AE6',
  cockatoo300: '#FF00D5',
  cockatoo400: '#E004BC',
  cockatoo500: '#B702A0',
  cockatoo600: '#86017C',
  cockatoo700: '#5D034E',
  cockatoo800: '#3E0234',
};

const cuckoos = {
  cuckoo050: '#C6A9FF',
  cuckoo100: '#EDE6FF',
  cuckoo200: '#D7C6FF',
  cuckoo300: '#C1A1FF',
  cuckoo400: '#AC78FF',
  cuckoo500: '#9F5CFF',
  cuckoo600: '#9640FF',
  cuckoo700: '#8029EF',
  cuckoo800: '#5618B7',
  cuckoo900: '#341078 ',
};

const darks = {
  black: '#000000',
};

const flamingos = {
  flamingo050: '#fcf0f0',
  flamingo100: '#ffd9d9',
  flamingo200: '#ff8383',
  flamingo300: '#ff6969',
  flamingo400: '#ff5050',
  flamingo500: '#ed3b3b',
  flamingo600: '#d23939',
  flamingo700: '#a1222f',
  flamingo800: '#841328',
  flamingo900: '#511421',
};

const integrations = {
  dropbox: '#0061ff',
  googleDrive: '#0061ff',
};

const jays = {
  jay020: '#E7F1FF',
  jay050: '#DDE9FF',
  jay100: '#B4CFFF',
  jay150: '#90B8FF',
  jay200: '#6FA2FF',
  jay250: '#448AFF',
  jay300: '#2E77FF',
  jay350: '#2160FF',
  jay400: '#034BFF',
  jay450: '#052DE1',
  jay500: '#0018CC',
  jay600: '#0204A4',
  jay700: '#000177',
  jay800: '#010256',
  jay900: '#020039',
};

const accessibility = {
  focus: jays.jay400,
};

const lights = {
  white: '#ffffff',
};

const macaws = {
  macaw020: '#E7F1FF',
  macaw040: '#D7E5FF',
  macaw060: '#BFD1FF',
  macaw080: '#91AEFF',
  macaw100: '#667EFF',
  macaw200: '#5466FF',
  macaw300: '#4A51FF',
  macaw350: '#4030FF',
  macaw400: '#3820EA',
  macaw500: '#280DBC',
  macaw600: '#1C0694',
};

const parrots = {
  parrot025: '#DEFABB',
  parrot050: '#C6F68D',
  parrot100: '#AAF255',
  parrot200: '#90EE02',
  parrot300: '#75E900',
  parrot400: '#61D800',
  parrot500: '#41C300',
  parrot600: '#09AF00',
  parrot700: '#008B00',
  parrot800: '#026802',
};

const peacocks = {
  peacock050: '#E6F4F6',
  peacock100: '#CEEDEF',
  peacock200: '#B2ECED',
  peacock300: '#70E7E7',
  peacock400: '#33DBDB',
  peacock500: '#07B3BE',
  peacock600: '#05889F',
  peacock700: '#036280',
  peacock800: '#01486A',
  peacock900: '#033B51',
};

const pigeons = {
  pigeon025: '#F7F7F7',
  pigeon050: '#EFEFEF',
  pigeon100: '#DCDCDC',
  pigeon200: '#C1C1C1',
  pigeon300: '#A4A4A4',
  pigeon400: '#808080',
  pigeon500: '#666666',
  pigeon600: '#4D4D4D',
  pigeon700: '#333333',
  pigeon800: '#262626',
  pigeon900: '#0F0F0F',
};

const robins = {
  robin050: '#FFAA3B',
  robin100: '#FF9800',
  robin200: '#FB8800',
  robin300: '#FB7D00',
  robin400: '#FF6D00',
};

const miscellaneous = {
  /** @see https://stackoverflow.com/questions/46309641/what-happens-in-safari-with-the-transparent-color */
  transparent: 'rgba(255, 255, 255, 0.001)',
};

export const colors: { [key in ColorName]: string } = {
  ...canaries,
  ...cockatoos,
  ...cuckoos,
  ...darks,
  ...flamingos,
  ...integrations,
  ...jays,
  ...accessibility,
  ...lights,
  ...macaws,
  ...parrots,
  ...peacocks,
  ...pigeons,
  ...robins,
  ...miscellaneous,
};
