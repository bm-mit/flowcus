'use client';

import { useStopwatch } from 'react-use-precision-timer';
import time from '@/utils/time';
import { useEffect, useState } from 'react';
import StopwatchController from './StopwatchController';

interface StopwatchProps {
  timerColor?: string;
}

export default function Stopwatch({ timerColor = 'white' }: StopwatchProps) {
  const stopwatch = useStopwatch();
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const updateTimeInterval = setInterval(() => {
      setTimeElapsed(stopwatch.getElapsedRunningTime());
    }, 1);

    return () => clearInterval(updateTimeInterval);
  }, [stopwatch]);

  return (
    <>
      <StopwatchController stopwatch={stopwatch} />
      <div className="text-9xl min-h-32 font-mono" style={{ color: timerColor }}>
        {time.millisToString(timeElapsed)}
      </div>
    </>
  );
}
