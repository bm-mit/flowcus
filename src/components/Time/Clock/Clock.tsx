'use client';

import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

interface ClockProps {
  timerColor: string
}

export default function Clock({ timerColor }: ClockProps) {
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
    <div className="text-9xl" style={{ color: timerColor }}>
      {timeString}
    </div>
  );
}
