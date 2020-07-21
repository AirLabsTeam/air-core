import moment from 'moment';

// Why doesn't JS have stringf? Just the worst really
const prependZero = (val: number, override = true) => (override && val < 10 ? `0${val}` : val);

/**
 * Takes a number of milliseconds (like the current or remaining seconds in a video clip) and returns a pretty timestamp
 * Moment format gets janky beyond 24h & Dan had already written this code
 * @example
 * // return '7:02'
 * formatDuration(422)
 * @returns {string} A pretty timestamp like '7:02' or '1:12:10'
 */
export const formatDuration = (seconds: number): string => {
  const hours = Math.trunc(seconds / 3600); // 3,600 seconds in 1 hour
  const minutes = Math.trunc((seconds / 60) % 60); // 60 seconds in 1 minute
  const hoursString = hours ? `${hours}:` : ``;
  return `${hoursString}${prependZero(minutes, !!hours)}:${prependZero(Math.trunc(seconds % 60))}`;
};

export const formatMilliseconds = (milliseconds: number) => formatDuration(milliseconds / 1000);

// https://momentjs.com/docs/#/parsing/string-format/ and https://devhints.io/moment
export const formatDate = (date: any, format = 'L') =>
  date ? moment.utc(date).format(format) : '';

export const formatDateForm = (date: any) => formatDate(date, 'YYYY-MM-DD');

export const formatDateVerbose = (date: any) => formatDate(date, 'LL');

export const formatUpdatedAt = (updatedAt: any) => moment(updatedAt).fromNow();

export const updateLocale = () =>
  moment.updateLocale('en', {
    relativeTime: {
      future: 'in %s',
      past: '%s',
      s: 'just now',
      ss: '%ds',
      m: '1m',
      mm: '%dm',
      h: '1h',
      hh: '%dh',
      d: '1d',
      dd: '%dd',
      M: '1mo',
      MM: '%dmo',
      y: '1yr',
      yy: '%dyr',
    },
  });

export const normalizeDateString = (dateString: string) => moment(dateString).toDate();
