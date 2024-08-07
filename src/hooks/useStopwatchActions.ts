import { useContext } from 'react';
import StopwatchActionsContext from '@/contexts/StopwatchActionsContext';

export default function useStopwatchActions() {
  return useContext(StopwatchActionsContext);
}
