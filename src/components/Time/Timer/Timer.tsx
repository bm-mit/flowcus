import { HTMLAttributes, useEffect, useState } from 'react';
import { useTimer } from 'react-use-precision-timer';
import { twMerge } from 'tailwind-merge';

import SetTimeModal from '@/components/Time/Timer/SetTimeModal';
import TimerController from '@/components/Time/Timer/TimerController';
import TimerView from '@/components/Time/Timer/TimerView/TimerView';
import useToggle from '@/hooks/useToggle';
import time from '@/utils/time';

interface TimerProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
}

export default function Timer({ delay = 0, className }: TimerProps) {
  const timer = useTimer({ delay });
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
