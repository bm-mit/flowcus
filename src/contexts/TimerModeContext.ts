import { createContext, Dispatch, SetStateAction } from 'react';

import TimerMode from '@/types/timer-mode.types';

type TimerModeContextType = {
  timerMode: TimerMode;
  setTimerMode: Dispatch<SetStateAction<TimerMode>>;
};

const TimerModeContext = createContext<TimerModeContextType>({
  timerMode: TimerMode.clock,
  setTimerMode: () => {},
});

export default TimerModeContext;
