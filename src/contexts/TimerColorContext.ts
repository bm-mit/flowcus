import { createContext } from 'react';

type TimerColorContextType = {
  timerColor: string;
};

const TimerColorContext = createContext<TimerColorContextType>({
  timerColor: 'white',
});

export default TimerColorContext;
