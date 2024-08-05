import { useContext } from 'react';
import TimerModeContext from '@/contexts/TimerModeContext';

export default function useTimerModeContext() {
  return useContext(TimerModeContext);
}
