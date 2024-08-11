import clsx from 'clsx';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';

import TimerModeContext from '@/contexts/TimerModeContext';
import TimerMode from '@/types/timer-mode.types';

export default function TimeModeSelector() {
  const { timerMode, setTimerMode } = useContext(TimerModeContext);

  function changeMode(mode: TimerMode): void {
    setTimerMode(mode);
  }

  return (
    <div className="relative box-content grid h-10 w-60 grid-cols-3 rounded-full border-2 border-gray-200">
      <button
        type="button"
        onClick={() => changeMode(TimerMode.clock)}
        aria-label="clock mode"
        className={twMerge(
          'rounded-full transition-colors',
          'hover:bg-white/50 hover:outline-none',
          'focus:bg-white/50 focus:outline-none',
          timerMode === TimerMode.clock &&
            'hover:bg-transparent focus:bg-transparent',
        )}
      />

      <button
        type="button"
        onClick={() => changeMode(TimerMode.stopwatch)}
        aria-label="stopwatch mode"
        className={twMerge(
          'rounded-full transition-colors',
          'hover:bg-white/50 hover:outline-none',
          'focus:bg-white/50 focus:outline-none',
          timerMode === TimerMode.stopwatch &&
            'hover:bg-transparent focus:bg-transparent',
        )}
      />

      <button
        type="button"
        onClick={() => changeMode(TimerMode.timer)}
        aria-label="timer mode"
        className={twMerge(
          'rounded-full transition-colors',
          'hover:bg-white/50 hover:outline-none',
          'focus:bg-white/50 focus:outline-none',
          timerMode === TimerMode.timer &&
            'hover:bg-transparent focus:bg-transparent',
        )}
      />

      <div
        className={clsx(
          'absolute -z-10 h-full w-20 rounded-full bg-blue-600 transition-all',
          timerMode === TimerMode.stopwatch && 'translate-x-20',
          timerMode === TimerMode.timer && 'translate-x-40',
        )}
      />
    </div>
  );
}
