import { createContext } from 'react';

type StopwatchActionsContextType = {
  resetTimer: () => void,
  pauseTimer: () => void,
  paused: boolean
};

const StopwatchActionsContext = createContext<StopwatchActionsContextType>({
  resetTimer: () => {},
  pauseTimer: () => {},
  paused: true,
});

export default StopwatchActionsContext;
