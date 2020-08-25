export type IconName =
  | 'Add member'
  | 'Air'
  | 'All boards'
  | 'Arrow'
  | 'At'
  | 'Bell'
  | 'Boards'
  | 'Boards grid'
  | 'Boards list'
  | 'Bookmark'
  | 'Camera filled'
  | 'Camera'
  | 'Caution'
  | 'Check'
  | 'Chevron down'
  | 'Chevron left'
  | 'Chevron right'
  | 'Chevron up'
  | 'Circled plus'
  | 'Circled minus'
  | 'Clips'
  | 'Clock'
  | 'Close'
  | 'Cloud offline'
  | 'Cloud upload'
  | 'Comment'
  | 'Dashed plus'
  | 'Delete'
  | 'Devices'
  | 'Document'
  | 'Double chevron down'
  | 'Double chevron left'
  | 'Double chevron right'
  | 'Double chevron up'
  | 'Download'
  | 'Downtick'
  | 'Dropbox'
  | 'Edit'
  | 'Ellipsis'
  | 'Email'
  | 'Eye'
  | 'Eye closed'
  | 'Facebook'
  | 'Filters'
  | 'Flash'
  | 'Folder'
  | 'Folder open'
  | 'Full screen enter'
  | 'Full screen exit'
  | 'Gear'
  | 'GitHub'
  | 'Google Drive'
  | 'Hamburger'
  | 'Help'
  | 'Hide'
  | 'Home'
  | 'Import'
  | 'Info'
  | 'Instagram'
  | 'Library'
  | 'Line graph'
  | 'Link'
  | 'LinkedIn'
  | 'Log out'
  | 'Magic wand'
  | 'Maximize'
  | 'Medium'
  | 'Minimize'
  | 'Move'
  | 'Notion'
  | 'Padlock'
  | 'Pause'
  | 'PDF'
  | 'Photos'
  | 'Play pause'
  | 'Play'
  | 'Plus'
  | 'Radar'
  | 'Refresh'
  | 'Remove'
  | 'Save'
  | 'Search'
  | 'Selects'
  | 'Send'
  | 'Send filled'
  | 'Share'
  | 'Show'
  | 'Skip'
  | 'Sort ascending'
  | 'Sort descending'
  | 'Star'
  | 'Swap'
  | 'Tag'
  | 'Team'
  | 'Toggle list'
  | 'Toggle grid'
  | 'Triangle down'
  | 'Triangle left'
  | 'Triangle right'
  | 'Triangle up'
  | 'Twitter'
  | 'Uploads'
  | 'User'
  | 'Video'
  | 'Volume high'
  | 'Volume low'
  | 'Volume muted';

const Icons: { [key in IconName]: string } = {
  'Add member':
    'M20,9.7c0,3.72-2.51,6.8-5.6,6.8s-5.6-2.9-5.6-6.8A5.7,5.7,0,0,1,14.4,4,5.7,5.7,0,0,1,20,9.7ZM24.8,28a11,11,0,0,0-10.42-7.7A11,11,0,0,0,4,28H14.42M24.7,13V19.5M28,16.2H21.5',
  Air:
    'M2.93,20.48a.51.51,0,0,1-.85-.55s1.73-2.67,3.82-5.28C8.82,11,11,9.24,12.52,9.24c.72,0,1.58.39,1.58,2.28a14.64,14.64,0,0,1-.28,2.4c-.44,0-1,0-1,0a13.1,13.1,0,0,0,.3-2.4c0-1.27-.4-1.27-.57-1.27C10.35,10.25,5.48,16.52,2.93,20.48ZM19,13.75a.79.79,0,0,0,.8-.79.8.8,0,0,0-.8-.8.79.79,0,0,0-.79.8A.79.79,0,0,0,19,13.75Zm2.21,4a5.9,5.9,0,0,1-3.82,2c-.59,0-.89-.25-.89-.75s.29-1.55,1.68-3.35a.53.53,0,0,0,.07-.5.54.54,0,0,0-.39-.31c-3.42-.57-8-.84-10.34,1.15a3.24,3.24,0,0,0-1.26,2.42,2.31,2.31,0,0,0,2.38,2.35c1.84,0,3.35-1.39,4.37-4,.11-.27.2-.54.29-.82l-1.08,0c-.68,2-1.82,3.78-3.58,3.78a1.31,1.31,0,0,1-1.37-1.34,2.33,2.33,0,0,1,.9-1.65c1.08-.91,3.47-1.81,8.71-1.05A6.16,6.16,0,0,0,15.49,19a1.74,1.74,0,0,0,1.91,1.76,6.77,6.77,0,0,0,4.54-2.31A9.71,9.71,0,0,0,23.15,17a2.13,2.13,0,0,1-1-.29A10.11,10.11,0,0,1,21.22,17.75Zm8.65.51a.5.5,0,0,0-.71,0A5.3,5.3,0,0,1,26,19.75a.71.71,0,0,1-.79-.81c0-.59.31-1.69,1.8-3.63a.49.49,0,0,0,0-.65.5.5,0,0,0-.66-.07,5.22,5.22,0,0,1-2.74.87c-1.12,0-1.63-.68-1.63-1.31,0-.78.4-1,.61-1,.54,0,.6.6.6.79a2.85,2.85,0,0,1-.14.91,2.1,2.1,0,0,0,1,.05,3.48,3.48,0,0,0,.12-1,1.65,1.65,0,0,0-1.61-1.77,1.76,1.76,0,0,0-1.62,2,2.15,2.15,0,0,0,.87,1.75,2.88,2.88,0,0,0,1.77.57,5.5,5.5,0,0,0,1.57-.24,5.62,5.62,0,0,0-.95,2.71A1.71,1.71,0,0,0,26,20.76,6.46,6.46,0,0,0,29.83,19,.51.51,0,0,0,29.87,18.26Z',
  'All boards': 'M4,28H24V8H4ZM24,16.3H4.19M17.3,28V16.7M24,24.2h4V4H8V8',
  Arrow: 'M24.13,16.6H8.87m9,6,6.25-6-6.25-6',
  At:
    'M21,27A12,12,0,1,1,17,4C23,4.42,28,9,28,16.56c0,2.3-1.53,4.87-4.1,5h0A3.65,3.65,0,0,1,20.3,18V13c.07-1.8-3.4-2.5-5.6-1.61A5.61,5.61,0,0,0,11,16.6c-.11,3.4,2.52,4.8,4.3,4.7,5.4-.23,5-8.5,5-8.5',
  Bell:
    'M21.43,20.07l.89.89a2.5,2.5,0,0,1,0,3.53h0a2.49,2.49,0,0,1-3.53,0l-.89-.89ZM7.42,5.42l-.36-.36a1.42,1.42,0,0,0-2,0h0a1.42,1.42,0,0,0,0,2l.36.36m0,0C3,10.81,3.83,14.92,6.66,18.52q.16.21.33.45A13.75,13.75,0,0,1,9,23.3a9.84,9.84,0,0,0,2.09,4.14,1.81,1.81,0,0,0,2.58,0l7-6.88,6.86-7a1.81,1.81,0,0,0,0-2.58A9.84,9.84,0,0,0,23.3,9,13.75,13.75,0,0,1,19,7l-.45-.33C14.92,3.83,10.81,3,7.42,5.42l-.57.46a6.16,6.16,0,0,0-1,.94C5.65,7.11,5.41,7.41,5.42,7.42Z',
  Boards: 'M4,28H28V4H4ZM28,17H4M20,28V17',
  'Boards grid': 'M28,14H18V4H28Zm0,4H18V28H28ZM14,4H4V14H14Zm0,14H4V28H14Z',
  'Boards list': 'M28,21H17m11.13,5.06H17M12,20H4v8h8ZM28,5H17M28,10H17M12,4H4v8h8Z',
  Bookmark: 'M25,28l-9-8L7,28V4H25Z',
  'Camera filled':
    'M16.2,11.6c-2.7,0-4.9,2.2-4.9,4.9c0,2.7,2.2,4.9,4.9,4.9c2.7,0,4.9-2.2,4.9-4.9C21.1,13.8,18.9,11.6,16.2,11.6z M28.1,7h-4.7l-1.9-3.2c-0.3-0.5-0.8-0.8-1.4-0.8h-7.9c-0.5,0-1,0.3-1.3,0.7L8.8,7H4.2c0,0,0,0,0,0C2.4,7,1,8.4,1,10.1v14.1 c0,0,0,0,0,0c0,1.7,1.4,3.1,3.2,3.1h23.7c1.7,0,3.1-1.4,3.1-3.1V10C31,8.4,29.7,7,28.1,7z M16.2,23.4c-3.8,0-6.9-3.1-6.9-6.9 s3.1-6.9,6.9-6.9c3.8,0,6.9,3.1,6.9,6.9S20,23.4,16.2,23.4z M28.1,12.8H27c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h1.1c0.6,0,1,0.4,1,1 C29.1,12.4,28.6,12.8,28.1,12.8z',
  Camera:
    'M27.82,27.05H4.09A2.14,2.14,0,0,1,2,24.91V10.82A2.14,2.14,0,0,1,4.09,8.68H9a.6.6,0,0,0,.5-.27L11.64,5a.6.6,0,0,1,.5-.27H20a.6.6,0,0,1,.51.29l2,3.35a.61.61,0,0,0,.51.28H28a2,2,0,0,1,2,2V24.91A2.13,2.13,0,0,1,27.82,27.05ZM16.13,11.28A5.86,5.86,0,1,0,22,17.14,5.86,5.86,0,0,0,16.13,11.28Zm9.45,1.18h.78m-.78,0h.78Z',
  Caution:
    'M29,26.6,16.8,4.5a1,1,0,0,0-1.6,0L3.11,26.6A.92.92,0,0,0,3.9,28H28a.92.92,0,0,0,.82-1.4ZM17.3,23.29a1.26,1.26,0,0,1-2.52,0v0a1.26,1.26,0,0,1,2.52,0Zm-.33-3.7a.93.93,0,0,1-1.8,0L15,13a1,1,0,1,1,2.1,0Z',
  Check: 'M26 8 12 24 6 17',
  'Chevron down': 'M22,14l-6,6-6-6',
  'Chevron left': 'M18,22l-6-6,6-6',
  'Chevron right': 'M14,10l6,6-6,6',
  'Chevron up': 'M10,18l6-6,6,6',
  'Circled plus':
    'M11.03 16H20.92M15.97 11.06V20.95M28 16C28 22.63 22.63 28 16 28C9.37 28 4 22.63 4 16C4 9.37 9.37 4 16 4C22.63 4 28 9.37 28 16Z',
  'Circled minus':
    'M11.03 16H20.92M28 16C28 22.63 22.63 28 16 28C9.37 28 4 22.63 4 16C4 9.37 9.37 4 16 4C22.63 4 28 9.37 28 16Z',
  Clips:
    'M27.17,23.82H4.63v-16H27.17ZM10,7.84V23M21.93,7.84V23M4.63,13.16h5m-5,5.33h5m12.56-5.33h5m-5,5.33h5',
  Clock: 'M16,4.24A11.76,11.76,0,1,0,27.8,16,11.76,11.76,0,0,0,16,4.24Zm7.05,15.6L16,16l.09-6.38',
  Close: 'M10,10 22,22M22,10 10,22',
  'Cloud offline':
    'M25.41,24a6,6,0,0,1-1.42.17H8a6,6,0,0,1-6-6H2a6,6,0,0,1,6-6h.17v-.25a4.91,4.91,0,0,1,.18-1.68M9.55,7.42a7.76,7.76,0,0,1,6.38-3.31h0a7.8,7.8,0,0,1,7.8,7.8v.25H24a6,6,0,0,1,6,6h0a6,6,0,0,1-1.55,4M5,7.28,27,24.6',
  'Cloud upload':
    'M24,24.22H8a6,6,0,0,1-6-6H2a6,6,0,0,1,6-6h.17V12a7.8,7.8,0,0,1,7.8-7.8h0a7.8,7.8,0,0,1,7.8,7.8v.26H24a6,6,0,0,1,6,6h0A6,6,0,0,1,24,24.22Zm-8.26-12.7v8.61m3.11-5.41-3.12-3.2-3.09,3.2',
  Comment:
    'M19,28C25,23,28,20,28,14.7v-.3A10.31,10.31,0,0,0,17.7,4H14.4A10.4,10.4,0,0,0,4,14.4c0,6,5,9,10.4,9.1h4.2Z',
  'Dashed plus':
    'M16,11V21m5-5H11M4,13v6m24-6v6M19,4H13m6,24H13M8.4,28H4V24.5m24,0V28H23.64m0-24H28V7.5M4,7.5V4H8.4',
  Delete:
    'M26,7.7,23.4,28h-15L6.2,7.7m10,4.3V22.6m-4,0L10.7,12.5m10.7,0L20.2,22.6M5,7.6H27m-6.4-.16L19,4h-5.5L11.4,7.4',
  Devices: 'M16,8V16.5m3.2-5L16,8l-3.2,3.3M7,21.1H25M11,24.6h0m3.6,0H21M7,28V4H25V28Z',
  Document: 'M6,28V4H26V28Zm4-16H22M10,16H22M10,20h5',
  'Double chevron down': 'M22,18l-6,6-6-6m12-8-6,6-6-6',
  'Double chevron left': 'M14,22,8,16l6-6m8,12-6-6,6-6',
  'Double chevron right': 'M18,10l6,6-6,6M10,10l6,6-6,6',
  'Double chevron up': 'M10,14l6-6,6,6M10,22l6-6,6,6',
  Download: 'M16,23V4m-6,12,6,7,6-7M8,28H24',
  Downtick: 'M28.47 9.76 16 22.22 3.53 9.76 28.47 9.76z',
  Dropbox:
    'M4.99976 0L0 3.1875L4.99976 6.375L0 9.5625L4.99976 12.75L10.0003 9.56252L15.0001 12.75L19.9998 9.5625L15.0001 6.375L19.9998 3.1875L15.0001 0L10.0003 3.18748L4.99976 0ZM15.0001 6.375L10.0003 9.56248L4.99976 6.375L10.0003 3.18752L15.0001 6.375ZM10.0001 17L4.99949 13.8125L10.0001 10.625L14.9999 13.8125L10.0001 17Z',
  Edit: 'M13,26,4,28l2.2-8.6,14-14a4.6,4.6,0,0,1,6.5,0h0a4.6,4.6,0,0,1,0,6.5ZM18,7.5,24.5,14',
  Ellipsis:
    'M23,16.89a2.52,2.52,0,1,1,2.51,2.52A2.51,2.51,0,0,1,23,16.89Zm-6.83,2.52a2.52,2.52,0,1,0-2.52-2.52A2.52,2.52,0,0,0,16.15,19.41Zm-9.64,0A2.52,2.52,0,1,0,4,16.89,2.51,2.51,0,0,0,6.51,19.41Z',
  Email: 'M27.23,23.12H4.69v-16H27.23ZM4.69,7.14,16.55,17.26,27.23,7.14',
  Eye:
    'M16,11c-6.6,0-12,7.6-12,7.6S9.4,26,16,26s12-7.6,12-7.6S22.63,11,16,11ZM16,6V7.4M7.4,9.59l.56.59m15.91.07.65-.66m-8.4,8.5h4a4,4,0,1,1-4-4Z',
  'Eye closed':
    'M20.5,11.8A10.4,10.4,0,0,0,16,10.7c-6.6,0-12,7.6-12,7.6a24.4,24.4,0,0,0,4,4.14m3.3,2.22A10.6,10.6,0,0,0,16,26c6.6,0,12-7.6,12-7.6a24.5,24.5,0,0,0-3.7-4M16,6V7.4M7.4,9.6l.56.59m4.28,8.7a4,4,0,0,1,3.9-4.8m1,4h3a4,4,0,0,1-4,4,4,4,0,0,1-2.2-.7M27.53,6.4,8.3,22.4,4.5,26',
  Facebook:
    'M28.5,16A12.5,12.5,0,1,0,14.05,28.36V19.63H10.87V16h3.18V13.26c0-3.13,1.86-4.86,4.72-4.86a19.54,19.54,0,0,1,2.8.24v3.08H20a1.81,1.81,0,0,0-2,1.95V16h3.47l-.55,3.61H18v8.73A12.49,12.49,0,0,0,28.5,16Z',
  Filters:
    'M17.67,10.48H4m24,0H24.67m-11.3,11H28m-24,0H6.4M21.17,7a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,21.2,7ZM9.9,18a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,9.9,18Z',
  Flash: 'M17.16,4V14.55H24L15.25,28V18.41H7.93Z',
  Folder: 'M29,26H3V6H14L16,9H29Z',
  'Folder open':
    'M5,15.33V8.65H6.6m20.3,6.7V8.6H25.2m0,6.7V4H6.83V15.33m21.2,0H4L5,28H27ZM10.16,11.4H20M10.19,7.6h5',
  'Full screen enter': 'M4.42,12.2V5h7m-7,15.32V27h7m8,0h7V20.3m0-8.1V5h-7',
  'Full screen exit': 'M11.71,5V12.2h-7m7,14.82V20.3h-7m22,0h-7V27m0-22V12.2h7',
  GitHub:
    'M16,3.59a12.66,12.66,0,0,0-4,24.67c.63.12.86-.27.86-.61s0-1.09,0-2.15c-3.53.77-4.27-1.7-4.27-1.7A3.33,3.33,0,0,0,7.18,22c-1.15-.78.08-.77.08-.77A2.66,2.66,0,0,1,9.2,22.49a2.71,2.71,0,0,0,3.69,1.05,2.66,2.66,0,0,1,.8-1.69c-2.81-.32-5.77-1.41-5.77-6.26a4.92,4.92,0,0,1,1.31-3.4,4.53,4.53,0,0,1,.12-3.35s1.06-.34,3.48,1.3a12.17,12.17,0,0,1,6.34,0c2.42-1.64,3.48-1.3,3.48-1.3a4.53,4.53,0,0,1,.12,3.35,4.91,4.91,0,0,1,1.3,3.4c0,4.86-3,5.93-5.78,6.25a3,3,0,0,1,.86,2.34c0,1.69,0,3.06,0,3.47s.23.74.87.61A12.66,12.66,0,0,0,16,3.59Z',
  Gear:
    'M26.63,18.54l2.95,1.7-3.11,5.39-2.92-1.69a11,11,0,0,1-4.44,2.58v3.36H12.89v-3l-.13-.41a10.4,10.4,0,0,1-4.31-2.54L5.53,25.63,2.42,20.24l3-1.7a11.29,11.29,0,0,1-.29-2.48,11.15,11.15,0,0,1,.32-2.6l-3-1.72L5.53,6.35l3,1.75a10.9,10.9,0,0,1,4.35-2.51V2.1h6.22V5.59A10.9,10.9,0,0,1,23.46,8.1l3-1.75,3.11,5.39-3,1.72a11.15,11.15,0,0,1,.32,2.6A11.29,11.29,0,0,1,26.63,18.54ZM16,11.65A4.34,4.34,0,1,0,20.34,16,4.34,4.34,0,0,0,16,11.65Z',
  'Google Drive':
    'M24,26.5H9.61l3.8-6.6H28Zm-4.48-21H12.23l7.6,13.3h7.5ZM15,13.77,11.21,7.13,4,19.9,7.9,26.5Z',
  Hamburger: 'M8.51,10.24h15m-15,11.52h15M8.51,16h15',
  Hide: 'M28,28H4V4H28Zm-5-4.92H9',
  Help:
    'M17.6,25.8a2.2,2.2,0,1,1-4.4,0,2.2,2.2,0,1,1,4.4,0ZM16,4C12.51,4,10,5.61,9.1,8.43a1.7,1.7,0,0,0,.24,1.51,1.7,1.7,0,0,0,1.4.7h.11a1.8,1.8,0,0,0,1.6-1.3,3.3,3.3,0,0,1,3.31-2.17c2,0,3.4,1.2,3.4,3,0,1.6-.6,2.4-2.5,3.6-2.2,1.4-3.2,2.91-3.1,5.13v.5a1.9,1.9,0,0,0,.6,1.4,1.6,1.6,0,0,0,1.14.5h.08a1.8,1.8,0,0,0,1.7-2c0-1.6.6-2.4,2.5-3.6A6.2,6.2,0,0,0,23,10.1C23,6.5,20.1,4,16,4Z',
  Home:
    'M27.63,29H19.4l-.08-5.73A3.31,3.31,0,0,0,16,20h0a3.3,3.3,0,0,0-3.29,3.3V29H4.37A1.45,1.45,0,0,1,3,27.48v-14a1.59,1.59,0,0,1,.51-1.18L15,1.87a1.53,1.53,0,0,1,1.92,0l11.53,10.4A1.59,1.59,0,0,1,29,13.45v14A1.45,1.45,0,0,1,27.63,29Z',
  Import:
    'M28,19.25v5.6A3.12,3.12,0,0,1,24.9,28H7.11A3.12,3.12,0,0,1,4,24.9V19.25m12,1.4V4M10.21,14.71,16,20.61l5.8-6',
  Info: 'M16,8.8a.6.6,0,0,1-.6-.6.6.6,0,1,1,1.2,0,.6.6,0,0,1-.6.6M16,25v-9',
  Instagram:
    'M16,5.75c3.34,0,3.73,0,5.05.08a6.55,6.55,0,0,1,2.32.43,3.73,3.73,0,0,1,1.44.93,3.73,3.73,0,0,1,.93,1.44A6.55,6.55,0,0,1,26.17,11c.07,1.32.08,1.71.08,5.05s0,3.73-.08,5.05a6.55,6.55,0,0,1-.43,2.32,4.07,4.07,0,0,1-2.37,2.37,6.55,6.55,0,0,1-2.32.43c-1.32.07-1.71.08-5.05.08s-3.73,0-5.05-.08a6.55,6.55,0,0,1-2.32-.43,3.73,3.73,0,0,1-1.44-.93,3.73,3.73,0,0,1-.93-1.44,6.55,6.55,0,0,1-.43-2.32c-.07-1.32-.08-1.71-.08-5.05s0-3.73.08-5.05a6.55,6.55,0,0,1,.43-2.32,3.73,3.73,0,0,1,.93-1.44,3.73,3.73,0,0,1,1.44-.93A6.55,6.55,0,0,1,11,5.83c1.32-.07,1.71-.08,5.05-.08M16,3.5c-3.39,0-3.82,0-5.15.08a9.2,9.2,0,0,0-3,.58A6,6,0,0,0,5.6,5.6,6,6,0,0,0,4.16,7.81a9.2,9.2,0,0,0-.58,3C3.51,12.18,3.5,12.61,3.5,16s0,3.82.08,5.15a9.2,9.2,0,0,0,.58,3A6,6,0,0,0,5.6,26.4a6,6,0,0,0,2.21,1.44,9.2,9.2,0,0,0,3,.58c1.33.07,1.76.08,5.15.08s3.82,0,5.15-.08a9.2,9.2,0,0,0,3-.58,6.39,6.39,0,0,0,3.65-3.65,9.2,9.2,0,0,0,.58-3c.07-1.33.08-1.76.08-5.15s0-3.82-.08-5.15a9.2,9.2,0,0,0-.58-3A6,6,0,0,0,26.4,5.6a6,6,0,0,0-2.21-1.44,9.2,9.2,0,0,0-3-.58C19.82,3.51,19.39,3.5,16,3.5Zm0,6.08A6.42,6.42,0,1,0,22.42,16,6.41,6.41,0,0,0,16,9.58Zm0,10.59A4.17,4.17,0,1,1,20.17,16,4.17,4.17,0,0,1,16,20.17ZM22.67,7.83a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,22.67,7.83Z',
  Library:
    'M16,14.5m7.1,4-7.1,4-7.1-4L4,21,16,28l12-6.7-5-2.76L28,15.8l-4.5-2.54L28,10.6,16,4,4,10.7l4.5,2.54L4,16,9,18.5m14.5-5.3L16,17.42l-8.5-4.8,12-6.7',
  'Line graph': 'M3 16.31 7.46 16.31 10.95 9 18.37 22.95 22.73 16.31 29 16.31',
  Link:
    'M14.56,17.43h0a5.77,5.77,0,0,1,0-8.17l2.53-2.54a5.79,5.79,0,0,1,8.17,0h0a5.79,5.79,0,0,1,0,8.17l-2.6,2.6m-13.29-3-2.6,2.6a5.76,5.76,0,0,0,0,8.16h0a5.77,5.77,0,0,0,8.17,0l2.53-2.53a5.77,5.77,0,0,0,0-8.17h0',
  LinkedIn:
    'M24.6,28H7.4A3.4,3.4,0,0,1,4,24.6V7.4A3.4,3.4,0,0,1,7.4,4H24.6A3.4,3.4,0,0,1,28,7.4V24.6A3.4,3.4,0,0,1,24.6,28ZM11.93,24.09V13.25H8.33V24.09Zm2,0h3.6V18a2.6,2.6,0,0,1,.12-.88,2,2,0,0,1,1.85-1.32c1.3,0,1.83,1,1.83,2.45v5.8h3.6V17.88c0-3.33-1.78-4.88-4.15-4.88a3.6,3.6,0,0,0-3.27,1.82h0V13.25H13.92c.05,1,0,10.84,0,10.84ZM12.17,9.9h0A1.88,1.88,0,0,0,10.29,8H10A1.88,1.88,0,0,0,8.11,9.9h0A1.87,1.87,0,0,0,10,11.77h.3A1.87,1.87,0,0,0,12.17,9.9Z',
  'Log out': 'M20.24,23v3.48H6.73V5.65H20.24V9m9.27,7H11.31m14.08,3.94L29.51,16l-4.12-3.94',
  'Magic wand':
    'M8.4,8.26l5.5,1.5,4.82-3.14L19,12.35,23.5,16l-5.4,2-2,5.4-3.6-4.5-5.7-.24L9.9,13.8Zm1.1,16.11.3-.56M24.3,9.5l.5-.28M12.8,4l.08.4M18.1,18,28,28M4,12.8l.34.1',
  Maximize: 'M4,28H28V4H4ZM28,10H4',
  Medium:
    'M16,3.35A12.65,12.65,0,0,0,3.35,16h0a12.65,12.65,0,0,0,25.3,0h0A12.65,12.65,0,0,0,16,3.35Zm7.47,6.87-1.21,1.16a.35.35,0,0,0-.14.34v8.51a.35.35,0,0,0,.14.34l1.18,1.16V22H17.5v-.26l1.22-1.19c.12-.12.12-.15.12-.33V13.32L15.44,22H15l-4-8.64v5.79a.8.8,0,0,0,.22.66l1.59,1.93V22H8.32V21.7l1.59-1.93a.76.76,0,0,0,.21-.66v-6.7a.61.61,0,0,0-.19-.49l-1.42-1.7V10H12.9l3.4,7.45,3-7.45h4.19Z',
  Minimize: 'M28,28h-24',
  Notion:
    'M16,3.81a12.5,12.5,0,0,0-3.95,24.36c.62.11.85-.27.85-.6s0-1.09,0-2.13c-3.48.76-4.22-1.67-4.22-1.67a3.26,3.26,0,0,0-1.38-1.83c-1.14-.78.08-.76.08-.76a2.63,2.63,0,0,1,1.92,1.29,2.65,2.65,0,0,0,3.63,1,2.73,2.73,0,0,1,.8-1.67C10.94,21.52,8,20.45,8,15.66A4.83,4.83,0,0,1,9.31,12.3,4.49,4.49,0,0,1,9.43,9s1.05-.33,3.44,1.28A12.56,12.56,0,0,1,16,9.85a12.56,12.56,0,0,1,3.13.42C21.52,8.66,22.56,9,22.56,9a4.46,4.46,0,0,1,.13,3.31A4.82,4.82,0,0,1,24,15.66c0,4.8-2.92,5.85-5.7,6.16a3,3,0,0,1,.84,2.32c0,1.67,0,3,0,3.43s.22.72.86.6A12.5,12.5,0,0,0,16,3.81Z',
  Move: 'M4,28H24V8H4Zm24-6.81v3H24m4-8v-4M28,7V4H25M20,4H15M11,4H8V8',
  Padlock:
    'M16,20.1A1,1,0,0,1,16,18a1,1,0,0,1,0,2v4M26,12H6V28H26Zm-4,0V10a6,6,0,0,0-6-6h0a6,6,0,0,0-6,6v2',
  Pause: 'M8,24V8h5V24Zm11,0V8H24V24Z',
  PDF:
    'M27 13C27 12.9 27 12.9 27 13C27 12.8 27 12.7 26.9 12.6C26.8 12.5 26.8 12.4 26.7 12.3L17.8 3.4C17.6 3.1 17.4 3 17.1 3H6C5.4 3 5 3.5 5 4V28C5 28.6 5.4 29 6 29H26C26.6 29 27 28.6 27 28V13ZM18.1 6.4L23.6 12H18.1V6.4ZM16.1 5V13C16.1 13.6 16.5 14 17.1 14H25V16.4H7V5H16.1ZM8.4 25.2V19.1H10.7C12.1 19.1 12.9 20 12.9 21.1C12.9 22.3 12.1 23.1 10.7 23.1H9.5V25.2H8.4ZM14 25.2V19.1H16.1C17.9 19.1 19 20.2 19 22.1C19 24 17.9 25.2 16 25.2H14ZM24 21.7V22.6H21.5V25.2H20.4V19.1H24.3V20H21.5V21.7H24ZM17.9 22.1C17.9 23.5 17.3 24.2 16 24.2H15.1V20H16C17.3 20 17.9 20.7 17.9 22.1ZM10.5 22.2H9.5V20H10.5C11.3 20 11.7 20.4 11.7 21.1C11.7 21.7 11.4 22.2 10.5 22.2Z',
  Photos:
    'M4,24.63l6.9-7.5,5.31,4.4,3.6-3.2,4.2,5m-3.7-9.9a1.1,1.1,0,1,0,0,.14H19.2M4,8H24V28H4ZM24,24.2h4V4H8V8',
  'Play pause':
    'M8.88,7.91,19.71,15.4a.61.61,0,0,1,0,1L8.88,23.91A.6.6,0,0,1,8,23.4v-15A.6.6,0,0,1,8.88,7.91ZM24.1,24h-2A1,1,0,0,1,21,23V9.06A1,1,0,0,1,22.07,8h2a1,1,0,0,1,1,1.05V23A1,1,0,0,1,24.1,24Z',
  Play: 'M25,16 10,8 10,24z',
  Plus: 'M16,8 16,24 M8,16 24,16',
  Radar:
    'M19,27.63l.7-.22a11.16,11.16,0,0,0,1.4-.55M28,16A12,12,0,1,0,16,28M18,16a2,2,0,1,1-2-2A2,2,0,0,1,18,16ZM16,23.5A7.5,7.5,0,1,1,23.5,16m-4,6.6,0,0M18,16H28',
  Refresh:
    'M24,9.5a11,11,0,0,0-16,0,11,11,0,0,0,0,15,11,11,0,0,0,15,0A11,11,0,0,0,27,16m-9-6,6-.5L22,4',
  Remove: 'M24,16.08,8,15.92',
  Save:
    'M25.86,10V25.9H6.06V6.1H21.94ZM10.06,25.9V18.18H21.94V25.9M21.05,6.1v6.76H10.87V6.1M12.61,21h3.94',
  Search: 'M21,21.06l6.49,6.49M14.15,4.8a9.4,9.4,0,1,0,9.4,9.4A9.4,9.4,0,0,0,14.15,4.8Z',
  Selects:
    'M21.05,12.21C17,14.6,14,19.8,14,19.8l-3-3.4M4,13v6m24-6v6M19,4H13m6,24H13M4,24.5V28H8.4m15.3,0H28V24.5m0-17V4H23.7M8.4,4H4V7.5',
  Send:
    'M20.32,11.68l-5.19,5.19a1.45,1.45,0,0,1-1.78.21L4,11.33,28,4,20.67,28l-5.75-9.34a1.44,1.44,0,0,1,.21-1.78l1.08-1.08',
  'Send filled':
    'M20.66,11.32a1.54,1.54,0,0,0-2.19.08L14,16a1.45,1.45,0,0,1-1.78.21L4,11.33,28,4,20.67,28l-4.91-8.22A1.44,1.44,0,0,1,16,18l4.55-4.55A1.47,1.47,0,0,0,20.66,11.32Z',
  Show: 'M23,28H9M28,4H4V23.08H28Z',
  Share:
    'M28,13,18,4V8.7L14,8.7A10,10,0,0,0,4,18.4,10,10,0,0,0,14,28a.51.5,0,0,0,.31-1c-1.5-1-3.6-2.65-3.6-5,0-3.2,2.22-5.3,5.6-5.3h1.85v5Z',
  Skip: 'M21.6,28V7.24M17.13,23.4,21.57,28,26,23.4M10.44,4V24.8M14.9,8.6,10.4,4,6,8.6',
  'Sort ascending':
    'M28.47,7.21H16M13.67,19.48,8.58,24.79,3.51,19.48M8.58,7.21V22.45m19.89,2.34H21.91M19.63,16H28.5',
  'Sort descending':
    'M3.48,12.48,8.55,7.16l5.08,5.32m-5.08-3V24.75m7.39,0H28.43M21.87,7.16h6.56M19.56,16h8.87',
  Star: 'M24,28.5l-8-3.76L8,28.5l.8-9L3,13.05l8.6-2.14L16,3.5l4.4,7.4L29,13.1l-5.8,6.41Z',
  Swap:
    'M20.2,27.26l3.71-3.55L20.2,20.17M10.78,4.73,7.07,8.28l3.71,3.54M23.91,23.71H15.19a6.87,6.87,0,0,1-6.86-6.87v-.59m-.43-8h9.81a7,7,0,0,1,7,7v1.2',
  Tag:
    'M17.8,10m0,18L28,17.8,16,5.8,7.67,7.67,5.8,16ZM4,4l8.17,8.18-.51.51a.72.72,0,0,1,0-1,.72.7,0,1,1,1,1,.72.7,0,0,1-1,0',
  Team:
    'M15,10.4c0,2.8-1.9,5.1-4.3,5.1s-4.2-2.2-4.2-5.1A4.3,4.3,0,0,1,10.7,6,4.3,4.3,0,0,1,15,10.4ZM19.8,26a8.37,8.37,0,0,0-8-5.81A8.4,8.4,0,0,0,4,26h7.9M21.7,6.2a3.43,3.43,0,0,1,3.4,3.48c0,2.35-1.5,4.1-3.4,4.1s-3.4-1.9-3.4-4.1A3.4,3.4,0,0,1,21.7,6.2Zm1.61,16.6H28a6.7,6.7,0,0,0-6.3-4.7,6.3,6.3,0,0,0-2.1.4',
  'Toggle list':
    'M12.09,15.83H28M12.09,7.43H28M11.89,24.22H27.81M4,7.71a1,1,0,0,0,1,.84,1,1,0,1,0-1-1H5m1,8.23a1,1,0,0,0-1-.84,1,1,0,1,0,1,1H5m1,8.36a1.12,1.12,0,1,0,0,.19H5',
  'Toggle grid':
    'M13.16,4H4.54A.54.54,0,0,0,4,4.54v8.62a.54.54,0,0,0,.54.54h8.62a.54.54,0,0,0,.54-.54V4.54A.54.54,0,0,0,13.16,4Zm14.3,0H18.84a.54.54,0,0,0-.54.54v8.62a.54.54,0,0,0,.54.54h8.62a.54.54,0,0,0,.54-.54V4.54A.54.54,0,0,0,27.46,4ZM13.16,18.3H4.54a.54.54,0,0,0-.54.54v8.62a.54.54,0,0,0,.54.54h8.62a.54.54,0,0,0,.54-.54V18.84A.54.54,0,0,0,13.16,18.3Zm14.3,0H18.84a.54.54,0,0,0-.54.54v8.62a.54.54,0,0,0,.54.54h8.62a.54.54,0,0,0,.54-.54V18.84A.54.54,0,0,0,27.46,18.3Z',
  'Triangle down': 'M22,14l-6,6-6-6Z',
  'Triangle left': 'M18,22l-6-6,6-6Z',
  'Triangle right': 'M14,10l6,6-6,6Z',
  'Triangle up': 'M10,18l6-6,6,6Z',
  Twitter:
    'M11.18,26.56A15.07,15.07,0,0,0,26.35,11.39c0-.24,0-.47,0-.69A11,11,0,0,0,29,7.93a10.24,10.24,0,0,1-3.06.84,5.33,5.33,0,0,0,2.34-2.95,10.83,10.83,0,0,1-3.39,1.3A5.34,5.34,0,0,0,15.8,12a15.12,15.12,0,0,1-11-5.57,5.33,5.33,0,0,0,1.65,7.12A5.14,5.14,0,0,1,4,12.86v.07a5.33,5.33,0,0,0,4.28,5.23,5.31,5.31,0,0,1-2.41.09,5.36,5.36,0,0,0,5,3.71,10.65,10.65,0,0,1-6.62,2.28A10.81,10.81,0,0,1,3,24.17a15.19,15.19,0,0,0,8.18,2.39',
  Uploads:
    'M16,14V21.2m3-4.4-3-2.92L13,17m9.6-2.27V13.3a6.6,6.6,0,1,0-13.3,0v1.3A5.5,5.5,0,0,0,9.4,26H23a5.5,5.5,0,0,0,0-11Z',
  User:
    'M21.6,9.7c0,3.72-2.51,6.8-5.6,6.8s-5.6-2.9-5.6-6.8a5.6,5.6,0,1,1,11.2,0ZM26,28A10.5,10.5,0,0,0,6,28H16',
  Video: 'M28,26H4V6H28Zm-8.1-9.7-5.8-3.5v7Z',
  'Volume high':
    'M4,11H7.7C9.3,9.7,12.3,6.2,15.4,4.4a3.15,3.15,0,0,1,4.7,2.73V24.8a3.15,3.15,0,0,1-4.73,2.73c-3.05-1.8-6.1-5.21-7.73-6.5H4Zm19.91,6.22a1.53,1.53,0,0,0,0-2.54m0,6.86a5.8,5.8,0,0,0,0-11.07',
  'Volume low':
    'M4,11h3.7c1.6-1.3,4.6-4.8,7.7-6.6c1.5-0.9,3.4-0.3,4.3,1.2c0.3,0.5,0.4,1,0.4,1.5v17.7c0,1.7-1.4,3.2-3.1,3.2c-0.6,0-1.1-0.1-1.6-0.4c-3.1-1.8-6.1-5.2-7.7-6.5H4V11z M23.9,17.2c0.7-0.5,0.9-1.4,0.4-2.1c-0.1-0.2-0.3-0.3-0.4-0.4',
  'Volume muted':
    'M28,14l-4.28,4.3m4.3,0-4.3-4.3M4,10.9H7.7C9.3,9.7,12.4,6.2,15.4,4.44a3.15,3.15,0,0,1,4.73,2.73V24.8a3.15,3.15,0,0,1-4.7,2.7c-3.05-1.8-6.1-5.21-7.7-6.5H4Z',
};

// eslint-disable-next-line import/no-default-export
export default Icons;
