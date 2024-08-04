import Clock from './Clock';
import '@/utils/indexed-db/db';

interface TimerProps {
  mode: 'clock';
  background: string;
  opacity: number;
}

export default function Timer({ mode, background, opacity = 0 }: TimerProps) {
  return (
    <div
      className="flex items-center justify-center w-screen h-screen relative"
      style={{ background: `url(${background})` }}
    >
      {mode === 'clock' ? <Clock /> : null}
      <div className="absolute w-full h-full bg-black" style={{ opacity }} />
    </div>
  );
}
