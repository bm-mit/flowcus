import TimerColorContext from '@/contexts/TimerColorContext';
import { useContext } from 'react';

export default function useTimerColorContext() {
  return useContext(TimerColorContext);
}
