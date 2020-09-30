import { format, formatDistanceToNow, differenceInDays, parse } from 'date-fns';

// Why doesn't JS have stringf? Just the worst really
const prependZero = (val: number, override = true) => (override && val < 10 ? `0${val}` : val);

/**
 * Takes a number of milliseconds (like the current or remaining seconds in a video clip) and returns a pretty timestamp
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

export const parseAirDateString = (date: string): Date => {
  const strippedDate = date.split('+')[0].split('.')[0].replace('T', ' ').replace('Z', '');

  return parse(strippedDate, 'yyyy-MM-dd HH:mm:ss', new Date());
};

export const formatDateForm = (date: string) => format(parseAirDateString(date), 'yyyy-MM-dd');

export const formatDateVerbose = (date: string) =>
  format(parseAirDateString(date), 'MMMM dd, yyyy');

interface RelativeLocale {
  lessThanXSeconds: string;
  xSeconds: string;
  halfAMinute: string;
  lessThanXMinutes: string;
  xMinutes: string;
  aboutXHours: string;
  xHours: string;
  xDays: string;
  aboutXWeeks: string;
  xWeeks: string;
  aboutXMonths: string;
  xMonths: string;
  aboutXYears: string;
  xYears: string;
  overXYears: string;
  almostXYears: string;
}

export const formatUpdatedAt = (date: Parameters<typeof formatDistanceToNow>[0]) => {
  if (differenceInDays(date, new Date()) > 2) {
    return format(date, 'M/DD/YYYY');
  } else {
    const formatRelativeLocale: RelativeLocale = {
      lessThanXSeconds: 'just now',
      xSeconds: 'just now',
      halfAMinute: 'just now',
      lessThanXMinutes: 'just now',
      xMinutes: '{{count}}m',
      aboutXHours: '{{count}}h',
      xHours: '{{count}}h',
      xDays: '{{count}}d',
      aboutXWeeks: '{{count}}w',
      xWeeks: '{{count}}w',
      aboutXMonths: '{{count}}mo',
      xMonths: '{{count}}mo',
      aboutXYears: '{{count}}yr',
      xYears: '{{count}}yr',
      overXYears: '{{count}}yr',
      almostXYears: '{{count}}yr',
    };

    return formatDistanceToNow(date, {
      locale: {
        formatDistance: (token: keyof RelativeLocale, count: number) =>
          formatRelativeLocale[token].replace('{{count}}', `${count}`),
      },
    });
  }
};
