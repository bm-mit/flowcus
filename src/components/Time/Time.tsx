'use client';

import clsx from 'clsx';
import Image from 'next/image';

import Timer from '@/components/Time/Timer';
import useConfigProfileContext from '@/hooks/useConfigProfileContext';
import { TimerContextProvider } from '@/hooks/useTimerContext';
import useTimerModeContext from '@/hooks/useTimerModeContext';
import TimerMode from '@/types/timer-mode.types';

import Clock from './Clock';
import TimeModeSelector from './TimeModeSelector';

export default function Time() {
  const { timerMode } = useTimerModeContext();
  const { backgroundDim, backgroundImageUrl } = useConfigProfileContext();

  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <Image
        src={backgroundImageUrl}
        fill
        priority
        style={{
          objectFit: 'cover',
          filter: `brightness(${1 - backgroundDim})`,
        }}
        alt="background image"
      />

      <div className="z-10 flex flex-col items-center">
        <Clock className={clsx(timerMode !== TimerMode.clock && 'hidden')} />

        <Timer
          className={clsx(timerMode !== TimerMode.stopwatch && 'hidden')}
        />

        <TimerContextProvider>
          <Timer className={clsx(timerMode !== TimerMode.timer && 'hidden')} />
        </TimerContextProvider>

        <TimeModeSelector />
      </div>
    </div>
  );
}
