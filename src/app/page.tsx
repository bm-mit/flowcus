'use client';

import Time from '@/components/Time';
import { useMemo, useState } from 'react';
import TimerModeContext from '@/contexts/TimerModeContext';
import TimerMode from '@/types/timer-mode.types';

export default function Home() {
  const [timerMode, setTimerMode] = useState<TimerMode>(TimerMode.clock);

  const memo = useMemo(() => ({ timerMode, setTimerMode }), [timerMode]);

  return (
    <div>
      <TimerModeContext.Provider value={memo}>
        <Time mode={timerMode} />
      </TimerModeContext.Provider>
    </div>
  );
}
