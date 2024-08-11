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
};

export default time;
