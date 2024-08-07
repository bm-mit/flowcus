import { useTimer } from 'react-use-precision-timer';
import { useEffect, useState } from 'react';
import TimerController from '@/components/Time/Timer/TimerController';

interface TimerProps {
  timerColor?: string;
  delay?: number;
}

export default function Timer({ timerColor = 'white', delay = 0 } : TimerProps) {
  const timer = useTimer({ delay });
  const [timeShown, setTimeShown] = useState(0);

  useEffect(() => {
    const useTimeInterval = setInterval(() => {
      const timeValue = delay ? timer.getRemainingTime() : timer.getElapsedRunningTime();

      setTimeShown(timer.isStarted() ? timeValue : timer.getEffectiveDelay());
    }, 1);

    return () => clearInterval(useTimeInterval);
  }, [timer, delay]);

  return (
    <>
      <TimerController timer={timer} />
      <div className="min-h-32 text-9xl" style={{ color: timerColor }}>
        {timeShown}
      </div>
    </>
  );
}
