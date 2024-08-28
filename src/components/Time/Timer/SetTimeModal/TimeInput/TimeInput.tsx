import chroma from 'chroma-js';

import useConfigProfileContext from '@/hooks/useConfigProfileContext';

export interface TimeInputProps {
  children?: React.ReactNode;
}

export default function TimeInput({ children = undefined }: TimeInputProps) {
  const { themeColor } = useConfigProfileContext();
  const dimmedColor = chroma(themeColor).darken(0.25).hex();

  return (
    <div className="rounded p-4" style={{ backgroundColor: dimmedColor }}>
      {children}
    </div>
  );
}
