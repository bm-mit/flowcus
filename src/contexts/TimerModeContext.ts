import { createContext, Dispatch, SetStateAction } from 'react';

import TimerModeEnum from '@/types/timer-mode.types';

type TimerMode = {
  timerMode: TimerModeEnum;
  setTimerMode: Dispatch<SetStateAction<TimerModeEnum>>;
};

const TimerModeContext = createContext<TimerMode>({
  timerMode: TimerModeEnum.clock,
  setTimerMode: () => {},
});

export default TimerModeContext;
