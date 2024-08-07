import { DateTime } from 'luxon';

const time = {
  getCurrentTimeString(format: string): string {
    const current = DateTime.now();
    return current.toFormat(format);
  },

  millisToString(millis: number): string {
    let temp = millis;

    const ms = String(temp % 1000).padStart(3, '0');
    temp = Math.trunc(temp / 1000);

    const s = String(temp % 60).padStart(2, '0');
    temp = Math.trunc(temp / 60);

    const m = String(temp % 60).padStart(2, '0');
    temp = Math.trunc(temp / 60);

    const h = String(temp).padStart(2, '0');

    return `${h}:${m}:${s}:${ms}`;
  },
};

export default time;
