import clsx from 'clsx';
import { Timer } from 'react-use-precision-timer';

interface StopwatchControllerProps {
  stopwatch: Timer
}

export default function StopwatchController({ stopwatch } : StopwatchControllerProps) {
  function togglePlayState() {
    if (!stopwatch.isStarted()) stopwatch.start();
    else if (stopwatch.isPaused()) stopwatch.resume();
    else stopwatch.pause();
  }

  return (
    <div className="grid w-60 grid-cols-2 gap-4 text-center text-lg text-white h-8 -mt-8">
      <button
        type="button"
        disabled={!stopwatch.isPaused()}
        className={clsx(
          'flex items-center justify-center rounded-full bg-black bg-opacity-40 transition-colors',
          !stopwatch.isPaused() && 'text-gray-500',
        )}
        onClick={stopwatch.stop}
      >
        Reset
      </button>

      <button
        type="button"
        className="flex items-center justify-center rounded-full bg-black bg-opacity-40"
        onClick={togglePlayState}
      >
        {!stopwatch.isStarted() && 'Start'}
        {stopwatch.isStarted() && (stopwatch.isPaused() ? 'Resume' : 'Pause')}
      </button>
    </div>
  );
}
