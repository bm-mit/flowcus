import { useTimer } from 'react-use-precision-timer';
import { useEffect, useState } from 'react';
import TimerController from '@/components/Time/Timer/TimerController';
import time from '@/utils/time';

interface TimerProps {
  timerColor?: string;
  delay?: number;
}

export default function Timer({ timerColor = 'white', delay = 0 }: TimerProps) {
  const timer = useTimer({ delay });
  const [timeShown, setTimeShown] = useState(0);

  useEffect(() => {
    const useTimeInterval = setInterval(() => {
      const timeValue = delay
        ? timer.getRemainingTime()
        : timer.getElapsedRunningTime();

      setTimeShown(timer.isStarted() ? timeValue : timer.getEffectiveDelay());
    }, 1);

    return () => clearInterval(useTimeInterval);
  }, [timer, delay]);

  return (
    <>
      <TimerController timer={timer} />
      <div
        className="font-mono text-9xl min-h-32"
        style={{ color: timerColor }}
      >
        {time.millisToString(timeShown)}
      </div>
    </>
  );
}
