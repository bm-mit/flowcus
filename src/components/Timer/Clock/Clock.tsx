'use client';

import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

export default function Clock() {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const now = DateTime.now();
      const formattedTime = now.toFormat('HH:mm:ss');
      setTimeString(formattedTime);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  });

  return <div>{timeString}</div>;
}
