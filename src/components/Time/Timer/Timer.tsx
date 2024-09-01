import { HTMLAttributes, useEffect, useState } from 'react';
import { useTimer } from 'react-use-precision-timer';
import { twMerge } from 'tailwind-merge';

import SetTimeModal from '@/components/Time/Timer/SetTimeModal';
import TimerController from '@/components/Time/Timer/TimerController';
import TimerView from '@/components/Time/Timer/TimerView/TimerView';
import { ModalVisibilityProvider } from '@/hooks/useModalVisibility';
import useTimerContext from '@/hooks/useTimerContext';
import useToggle from '@/hooks/useToggle';
import time from '@/utils/time';

interface TimerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Timer({ className }: TimerProps) {
  const [delay] = useTimerContext();
  const timer = useTimer({
    delay,
    runOnce: true,
  });
  const [timeShown, setTimeShown] = useState(0);
  const [isModalOpen, toggleModelOpen, openModal, closeModal] =
    useToggle(false);

  useEffect(() => {
    const useTimeInterval = setInterval(() => {
      const timeValue = delay
        ? timer.getRemainingTime()
        : timer.getElapsedRunningTime();

      setTimeShown(timeValue);
    }, 1);

    return () => clearInterval(useTimeInterval);
  }, [timer, delay]);

  return (
    <div className={twMerge('flex flex-col items-center', className)}>
      <TimerController timer={timer} />
      <TimerView
        units={time.millisToUnits(timeShown)}
        onClick={delay ? toggleModelOpen : undefined}
      />

      {delay !== 0 && (
        <ModalVisibilityProvider
          value={[isModalOpen, toggleModelOpen, openModal, closeModal]}
        >
          <SetTimeModal />
        </ModalVisibilityProvider>
      )}
    </div>
  );
}
