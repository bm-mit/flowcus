'use client';

import { useContext, useMemo, useState } from 'react';

import TimerModeContext from '@/contexts/TimerModeContext';
import ProviderProps from '@/hooks/ProviderProps';
import TimerMode from '@/types/timer-mode.types';

export default function useTimerModeContext() {
  return useContext(TimerModeContext);
}

export function TimerModeProvider({ children }: ProviderProps) {
  const [timerMode, setTimerMode] = useState<TimerMode>(TimerMode.clock);

  const timerModeMemo = useMemo(
    () => ({ timerMode, setTimerMode }),
    [timerMode],
  );

  return (
    <TimerModeContext.Provider value={timerModeMemo}>
      {children}
    </TimerModeContext.Provider>
  );
}
