import { createContext } from 'react';

type StopwatchActionsContextType = {
  startTimer: () => void,
  resetTimer: () => void,
  pauseTimer: () => void,
};

const StopwatchActionsContext = createContext<StopwatchActionsContextType>({
  startTimer: () => {},
  resetTimer: () => {},
  pauseTimer: () => {},
});

export default StopwatchActionsContext;
