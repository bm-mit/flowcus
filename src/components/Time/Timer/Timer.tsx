import { HTMLAttributes, useEffect, useState } from 'react';
import { useTimer } from 'react-use-precision-timer';
import { twMerge } from 'tailwind-merge';

import SetTimeModal from '@/components/Time/Timer/SetTimeModal';
import TimerController from '@/components/Time/Timer/TimerController';
import TimerView from '@/components/Time/Timer/TimerView/TimerView';
import useTimerContext from '@/hooks/useTimerContext';
import useToggle from '@/hooks/useToggle';
import time from '@/utils/time';

interface TimerProps extends HTMLAttributes<HTMLDivElement> {
  mode?: 'timer' | 'stopwatch';
}

export default function Timer({ className, mode = 'timer' }: TimerProps) {
  const [delay] = useTimerContext();
  const timer = useTimer({ delay: mode === 'timer' ? delay : 0 });
  const [timeShown, setTimeShown] = useState(0);
  const [timeModalVisibility, toggleTimeModalVisibility] = useToggle(false);

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
    <div className={twMerge('flex flex-col items-center', className)}>
      <TimerController timer={timer} />
      <TimerView
        units={time.millisToUnits(timeShown)}
        onClick={toggleTimeModalVisibility}
      />
      {timeModalVisibility && <SetTimeModal />}
    </div>
  );
}
