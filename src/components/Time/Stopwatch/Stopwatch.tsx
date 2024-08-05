'use client';

import { useEffect, useState } from 'react';
import localStorage from '@/utils/local-storage';
import { START_STOPWATCH_TIME } from '@/utils/local-storage/keys';
import StopwatchController from './StopwatchController';

interface StopwatchProps {
  timerColor?: string;
}

export default function Stopwatch({ timerColor = 'white' }: StopwatchProps) {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    let startTime = Date.now();

    (async () => {
      startTime = await localStorage.getItem(START_STOPWATCH_TIME);
    })();

    const updateTimeInterval = setInterval(() => {
      setTimeElapsed(Date.now() - startTime);
    }, 1);

    return () => clearInterval(updateTimeInterval);
  }, []);

  return (
    <>
      <StopwatchController />
      <div className="text-9xl min-h-32" style={{ color: timerColor }}>
        {timeElapsed}
      </div>
    </>
  );
}
