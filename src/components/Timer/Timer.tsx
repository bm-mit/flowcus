import { cva, VariantProps } from 'class-variance-authority';
import Clock from './Clock';

const timerVariants = cva([''], {
  variants: {
    mode: {
      clock: [],
    },
  },
});

type TimerVariantsProps = VariantProps<typeof timerVariants>;

interface TimerProps extends TimerVariantsProps {}

export default function Timer({ mode } : TimerProps) {
  return mode === 'clock' ? <Clock /> : null;
}
