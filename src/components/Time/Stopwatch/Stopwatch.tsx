'use client';

import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import localStorage from '@/utils/local-storage';
import { START_STOPWATCH_TIME, STOPWATCH_RECORDED_TIME } from '@/utils/local-storage/keys';
import StopwatchActionsContext from '@/contexts/StopwatchActionsContext';
import StopwatchController from './StopwatchController';

interface StopwatchProps {
  timerColor?: string;
}

export default function Stopwatch({ timerColor = 'white' }: StopwatchProps) {
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [timeRecorded, setTimeRecorded] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [paused, setPaused] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setStartTime(await localStorage.getItem(START_STOPWATCH_TIME));
      setTimeRecorded(await localStorage.getItem(STOPWATCH_RECORDED_TIME));
    })();

    const updateTimeInterval = setInterval(() => {
      if (!paused) setTimeElapsed(Date.now() - startTime);
    }, 1);

    return () => clearInterval(updateTimeInterval);
  }, [paused, startTime]);

  const resetTimer = useCallback(() => {
    setPaused(true);
    setTimeRecorded(0);
    setTimeElapsed(0);

    (async () => {
      await localStorage.setItem(START_STOPWATCH_TIME, 0);
      await localStorage.setItem(STOPWATCH_RECORDED_TIME, 0);
    })();
  }, []);

  const pauseTimer = useCallback(() => {
    if (!paused) {
      const currentTime = timeElapsed + timeRecorded;
      setTimeRecorded(currentTime);

      (async () => {
        await localStorage.setItem(STOPWATCH_RECORDED_TIME, currentTime);
      })();
    } else {
      const now = Date.now();
      setStartTime(now);

      (async () => {
        await localStorage.setItem(START_STOPWATCH_TIME, now);
      })();
    }

    setPaused(!paused);
  }, [timeElapsed, timeRecorded, paused]);

  const startTimer = useCallback(() => {
    setPaused(false);

    (async () => {
      await localStorage.setItem(START_STOPWATCH_TIME, Date.now());
      await localStorage.setItem(STOPWATCH_RECORDED_TIME, 0);
    })();
  }, []);

  const stopwatchActions = useMemo(
    () => ({ resetTimer, pauseTimer, startTimer }),
    [resetTimer, pauseTimer, startTimer],
  );

  return (
    <StopwatchActionsContext.Provider value={stopwatchActions}>
      <StopwatchController />
      <div className="text-9xl min-h-32" style={{ color: timerColor }}>
        {paused ? timeRecorded : timeRecorded + timeElapsed}
      </div>
    </StopwatchActionsContext.Provider>
  );
}
