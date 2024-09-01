import clsx from 'clsx';
import { Timer } from 'react-use-precision-timer';

interface StopwatchControllerProps {
  timer: Timer;
}

export default function TimerController({ timer }: StopwatchControllerProps) {
  function togglePlayState() {
    if (!timer.isStarted()) timer.start();
    else if (timer.isPaused()) timer.resume();
    else timer.pause();
  }

  return (
    <div className="-mt-8 grid h-8 w-60 grid-cols-2 gap-4 text-center text-lg text-white">
      <button
        type="button"
        disabled={timer.isRunning()}
        className={clsx(
          'flex items-center justify-center rounded-full bg-black/40 transition-colors disabled:text-gray-500',
        )}
        onClick={timer.stop}
      >
        Reset
      </button>

      <button
        type="button"
        className="flex items-center justify-center rounded-full bg-black/40"
        onClick={togglePlayState}
      >
        {!timer.isStarted() && 'Start'}
        {timer.isStarted() && (timer.isPaused() ? 'Resume' : 'Pause')}
      </button>
    </div>
  );
}
