'use client';

import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

export default function Clock() {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const currentTime = DateTime.now();
      const formattedTime = currentTime.toFormat('HH:mm');
      setTimeString(formattedTime);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  });

  return (
    <div className="text-9xl dark:text-white z-10">
      {timeString}
    </div>
  );
}
