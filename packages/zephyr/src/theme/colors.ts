export type ColorName =
  | 'black'
  | 'canary0'
  | 'canary100'
  | 'canary200'
  | 'canary300'
  | 'canary400'
  | 'canary500'
  | 'canary600'
  | 'canary700'
  | 'canary800'
  | 'canary900'
  | 'cuckoo0'
  | 'cuckoo100'
  | 'cuckoo200'
  | 'cuckoo300'
  | 'cuckoo400'
  | 'dropbox'
  | 'flamingo0'
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
  | 'jay0'
  | 'jay100'
  | 'jay200'
  | 'jay300'
  | 'jay400'
  | 'jay500'
  | 'jay600'
  | 'jay700'
  | 'jay800'
  | 'jay900'
  | 'macaw0'
  | 'macaw100'
  | 'macaw200'
  | 'macaw300'
  | 'macaw400'
  | 'parrot0'
  | 'parrot100'
  | 'parrot200'
  | 'parrot300'
  | 'parrot400'
  | 'peacock0'
  | 'peacock100'
  | 'peacock200'
  | 'peacock300'
  | 'peacock400'
  | 'peacock500'
  | 'peacock600'
  | 'peacock700'
  | 'peacock800'
  | 'peacock900'
  | 'pigeon0'
  | 'pigeon50'
  | 'pigeon100'
  | 'pigeon200'
  | 'pigeon300'
  | 'pigeon400'
  | 'pigeon500'
  | 'pigeon600'
  | 'pigeon700'
  | 'pigeon800'
  | 'pigeon900'
  | 'robin0'
  | 'robin100'
  | 'robin200'
  | 'robin300'
  | 'robin400'
  | 'transparent'
  | 'white';

const canaries = {
  canary0: '#fff1b9',
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

const cuckoos = {
  cuckoo0: '#C6A9FF',
  cuckoo100: '#B088FF',
  cuckoo200: '#A072F8',
  cuckoo300: '#945EEA',
  cuckoo400: '#7E41E0',
};

const darks = {
  black: '#000000',
};

const flamingos = {
  flamingo0: '#fcf0f0',
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
  jay0: '#deeefc',
  jay100: '#bfdbf9',
  jay200: '#9bc1ef',
  jay300: '#7ea6e0',
  jay400: '#4c85d8',
  jay500: '#2954af',
  jay600: '#1b3889',
  jay700: '#142a72',
  jay800: '#102261',
  jay900: '#0b1953',
};

const accessibility = {
  focus: jays.jay400,
};

const lights = {
  white: '#ffffff',
};

const macaws = {
  macaw0: '#90B8FF',
  macaw100: '#6FA2FF',
  macaw200: '#448AFF',
  macaw300: '#2979FF',
  macaw400: '#2962FF',
};

const parrots = {
  parrot0: '#A9F482',
  parrot100: '#8CEA65',
  parrot200: '#5EE92A',
  parrot300: '#3AD202',
  parrot400: '#50B83C',
};

const peacocks = {
  peacock0: '#ccfdea',
  peacock100: '#9bfbdf',
  peacock200: '#68f4d8',
  peacock300: '#42ead7',
  peacock400: '#0addd7',
  peacock500: '#07b3be',
  peacock600: '#05889f',
  peacock700: '#036280',
  peacock800: '#01486a',
  peacock900: '#033b51',
};

const pigeons = {
  pigeon0: '#F1F1F1',
  pigeon50: '#F7F7F7',
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
  robin0: '#FFAA3B',
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
