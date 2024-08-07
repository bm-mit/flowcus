import useStopwatchActions from '@/hooks/useStopwatchActions';

export default function StopwatchController() {
  const stopwatchActions = useStopwatchActions();

  return (
    <div className="flex gap-4">
      <div role="presentation" className="size-8 bg-gray-300 rounded-full" onClick={stopwatchActions.startTimer} />
      <div role="presentation" className="size-8 bg-gray-300 rounded-full" onClick={stopwatchActions.pauseTimer} />
      <div role="presentation" className="size-8 bg-gray-300 rounded-full" onClick={stopwatchActions.resetTimer} />
    </div>
  );
}
