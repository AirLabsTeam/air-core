import { format, distanceInWordsToNow, differenceInDays } from 'date-fns';

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

export const formatDateForm = (date: any) => format(date, 'YYYY-MM-DD');

export const formatDateVerbose = (date: any) => format(date, 'LL');

export const formatUpdatedAt = (date: Parameters<typeof distanceInWordsToNow>[0]) => {
  if (differenceInDays(date, new Date()) > 2) {
    return format(date, 'M/DD/YYYY');
  } else {
    return distanceInWordsToNow(date);
  }
};
