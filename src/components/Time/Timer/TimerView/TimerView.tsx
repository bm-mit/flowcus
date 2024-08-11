import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import useTimerColorContext from '@/hooks/useTimerColorContext';
import { TimeUnits } from '@/types/time.types';

interface TimerViewProps extends HTMLAttributes<HTMLDivElement> {
  units: TimeUnits;
}

export default function TimerView({ units, className }: TimerViewProps) {
  const { timerColor } = useTimerColorContext();

  return (
    <div
      className={twMerge('min-h-32 select-none font-mono text-9xl', className)}
      style={{ color: timerColor }}
    >
      {units.hours !== 0 && `${units.hours}:`}
      {String(units.minutes).padStart(2, '0')}:
      {String(units.seconds).padStart(2, '0')}
    </div>
  );
}
