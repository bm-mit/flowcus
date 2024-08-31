import { useContext, useMemo, useState } from 'react';

import TimerContext, { TimerContextType } from '@/contexts/TimerContext';
import ProviderProps from '@/hooks/ProviderProps';

export default function useTimerContext() {
  return useContext(TimerContext);
}

export function TimerContextProvider({ children }: ProviderProps) {
  const [timer, setTimer] = useState<number>(10000);

  const timerMemo = useMemo(
    (): TimerContextType => [timer, setTimer],
    [timer, setTimer],
  );

  return (
    <TimerContext.Provider value={timerMemo}>{children}</TimerContext.Provider>
  );
}
