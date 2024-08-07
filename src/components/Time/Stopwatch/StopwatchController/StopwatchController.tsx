import useStopwatchActions from '@/hooks/useStopwatchActions';
import clsx from 'clsx';

export default function StopwatchController() {
  const stopwatchActions = useStopwatchActions();

  const isPaused = stopwatchActions.paused;

  return (
    <div className="grid w-60 grid-cols-2 gap-4 text-center text-lg text-white h-8 -mt-8">
      <button
        type="button"
        disabled={!isPaused}
        className={clsx(
          'flex items-center justify-center rounded-full bg-black bg-opacity-40 transition-colors',
          !isPaused && 'text-gray-500',
        )}
        onClick={stopwatchActions.resetTimer}
      >
        Reset
      </button>

      <button
        type="button"
        className="flex items-center justify-center rounded-full bg-black bg-opacity-40"
        onClick={stopwatchActions.pauseTimer}
      >
        {isPaused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
}
