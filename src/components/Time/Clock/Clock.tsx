'use client';

import { HTMLAttributes, useEffect, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import useConfigProfileContext from '@/hooks/useConfigProfileContext';
import time from '@/utils/time';

interface ClockProps extends HTMLAttributes<HTMLDivElement> {}

export default function Clock({ className }: ClockProps) {
  const { timerColor } = useConfigProfileContext();
  const timeFormat = useMemo(() => 'HH:mm', []);

  const [timeString, setTimeString] = useState<string>('00:00');

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimeString(time.getCurrentTimeString(timeFormat));
    }, 10);

    return () => {
      clearInterval(timeInterval);
    };
  });

  return (
    <div
      className={twMerge('min-h-32 select-none text-9xl', className)}
      style={{ color: timerColor }}
    >
      {timeString}
    </div>
  );
}
