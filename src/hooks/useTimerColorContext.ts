import { useContext } from 'react';

import TimerColorContext from '@/contexts/TimerColorContext';

export default function useTimerColorContext() {
  return useContext(TimerColorContext);
}
