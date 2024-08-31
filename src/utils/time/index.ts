import { DateTime } from 'luxon';

import { TimeUnits } from '@/types/time.types';

const time = {
  getCurrentTimeString(format: string): string {
    const current = DateTime.now();
    return current.toFormat(format);
  },

  millisToUnits(millis: number): TimeUnits {
    let temp = millis;

    const milliseconds = temp % 1000;
    temp = Math.floor(temp / 1000);

    const seconds = temp % 60;
    temp = Math.floor(temp / 60);

    const minutes = temp % 60;
    temp = Math.floor(temp / 60);

    const hours = temp;

    return {
      milliseconds,
      seconds,
      minutes,
      hours,
    };
  },
  unitsToMillis({ hours, minutes, seconds }: { hours: number; minutes: number; seconds: number }) {
    const m = hours * 60 + minutes;
    const s = m * 60 + seconds;
    const ms = s * 1000;
    return ms;
  }
};

export default time;
