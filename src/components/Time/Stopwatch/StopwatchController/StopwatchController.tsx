import localStorage from '@/utils/local-storage';
import { START_STOPWATCH_TIME } from '@/utils/local-storage/keys';

export default function StopwatchController() {
  function startTiming() {
    (async () => localStorage.setItem<number>(START_STOPWATCH_TIME, Date.now()))();
  }

  return (
    <div className="flex gap-4">
      <div role="presentation" className="size-8 bg-gray-300 rounded-full" onClick={startTiming} />
      <div role="presentation" className="size-8 bg-gray-300 rounded-full" onClick={startTiming} />
      <div role="presentation" className="size-8 bg-gray-300 rounded-full" onClick={startTiming} />
    </div>
  );
}
