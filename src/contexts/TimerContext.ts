import { createContext, Dispatch, SetStateAction } from 'react';

export type TimerContextType = [number, Dispatch<SetStateAction<number>>];

const TimerContext = createContext<TimerContextType>([0, () => {}]);
export default TimerContext;
