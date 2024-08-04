import '@/utils/indexed-db/db';
import { useState } from 'react';
import localStorage from '@/utils/local-storage';
import Clock from './Clock';

interface TimerProps {
  mode: 'clock';
  background: string;
  opacity?: number;
  overlayColor?: string;
}

export default async function Timer({
  mode, background, opacity, overlayColor,
}: TimerProps) {
  const [configProfileId, setConfigProfileId] = useState<number>(await localStorage.getItem<number>('configProfileId'));

  return (
    <div
      className="flex items-center justify-center w-screen h-screen relative"
      style={{ background: `url(${background})` }}
    >
      {mode === 'clock' ? <Clock /> : null}
      <div className="absolute w-full h-full" style={{ opacity, backgroundColor: overlayColor }} />
    </div>
  );
}

Timer.defaultProps = {
  opacity: 0,
  overlayColor: 'black',
};
