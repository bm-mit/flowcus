'use client';

import { useEffect, useState } from 'react';
import time from '@/utils/time';

interface ClockProps {
  timerColor?: string
}

const timeFormat = 'HH:mm';

export default function Clock({ timerColor = 'white' }: ClockProps) {
  const [timeString, setTimeString] = useState<string>(time.getCurrentTimeString(timeFormat));

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimeString(time.getCurrentTimeString(timeFormat));
    }, 10);

    return () => {
      clearInterval(timeInterval);
    };
  });

  return (
    <div className="text-9xl min-h-32" style={{ color: timerColor }}>
      {timeString}
    </div>
  );
}
