import { useContext } from 'react';
import TimerModeContext from '@/contexts/TimerModeContext';
import TimerMode from '@/types/timer-mode.types';
import clsx from 'clsx';

export default function TimerModeSelector() {
  const { timerMode, setTimerMode } = useContext(TimerModeContext);

  function changeMode(mode: TimerMode): void {
    setTimerMode(mode);
  }

  return (
    <div className="relative box-content grid h-10 w-60 grid-cols-3 rounded-full border-2 border-gray-200">
      <div role="presentation" onClick={() => changeMode(TimerMode.clock)} />
      <div role="presentation" onClick={() => changeMode(TimerMode.stopwatch)} />
      <div role="presentation" onClick={() => changeMode(TimerMode.timer)} />

      <div className={clsx(
        'absolute w-20 h-full bg-blue-600 -z-10 rounded-full transition-all',
        timerMode === TimerMode.stopwatch && 'translate-x-20',
        timerMode === TimerMode.timer && 'translate-x-40',
      )}
      />
    </div>
  );
}
