export type ColorName =
  | 'black'
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
  | 'cuckoo0'
  | 'cuckoo1'
  | 'cuckoo2'
  | 'cuckoo3'
  | 'cuckoo4'
  | 'dropbox'
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
  | 'focus'
  | 'googleDrive'
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
  | 'macaw0'
  | 'macaw1'
  | 'macaw2'
  | 'macaw3'
  | 'macaw4'
  | 'parrot0'
  | 'parrot1'
  | 'parrot2'
  | 'parrot3'
  | 'parrot4'
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
  | 'pigeonLighter0'
  | 'robin0'
  | 'robin0'
  | 'robin1'
  | 'robin1'
  | 'robin2'
  | 'robin2'
  | 'robin3'
  | 'robin3'
  | 'robin4'
  | 'robin4'
  | 'transparent'
  | 'transparentSafariHack'
  | 'white';

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

const cuckoos = {
  cuckoo0: '#C6A9FF',
  cuckoo1: '#B088FF',
  cuckoo2: '#A072F8',
  cuckoo3: '#945EEA',
  cuckoo4: '#7E41E0',
};

const darks = {
  black: '#000000',
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

const integrations = {
  dropbox: '#0061ff',
  googleDrive: '#0061ff',
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

const accessibility = {
  focus: jays.jay4,
};

const lights = {
  white: '#ffffff',
};

const macaws = {
  macaw0: '#90B8FF',
  macaw1: '#6FA2FF',
  macaw2: '#448AFF',
  macaw3: '#2979FF',
  macaw4: '#2962FF',
};

const parrots = {
  parrot0: '#A9F482',
  parrot1: '#8CEA65',
  parrot2: '#5EE92A',
  parrot3: '#3AD202',
  parrot4: '#50B83C',
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

const pigeonLighters = {
  pigeonLighter0: '#F7F7F7',
};

const pigeons = {
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

const robins = {
  robin0: '#FFAA3B',
  robin1: '#FF9800',
  robin2: '#FB8800',
  robin3: '#FB7D00',
  robin4: '#FF6D00',
};

const singles = {
  transparent: 'transparent',
  transparentSafariHack: 'rgba(255, 255, 255, 0.001)',
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
  ...pigeonLighters,
  ...pigeons,
  ...robins,
  ...singles,
};
