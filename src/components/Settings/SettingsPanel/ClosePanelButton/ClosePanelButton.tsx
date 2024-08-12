import chroma from 'chroma-js';
import { HTMLAttributes, useEffect, useMemo, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useHover } from 'usehooks-ts';

import useConfigProfileContext from '@/hooks/useConfigProfileContext';
import useSettingsPanelVisibilityContext from '@/hooks/useSettingsPanelVisibilityContext';

interface ClosePanelButtonProps extends HTMLAttributes<HTMLDivElement> {}

export default function ClosePanelButton({
  className = undefined,
}: ClosePanelButtonProps) {
  const { toggleSettingsPanelVisibility } = useSettingsPanelVisibilityContext();
  const { themeColor } = useConfigProfileContext();
  const [, setElementRef] = useState<HTMLElement | null>(null);

  // Create a local ref to store the actual DOM node
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  // Sync local ref with state
  useEffect(() => {
    setElementRef(hoverRef.current);
  }, [hoverRef]);

  const bgColor = useMemo(
    () => chroma(themeColor).darken(0.5).hex('rgb'),
    [themeColor],
  );

  return (
    <div
      ref={hoverRef}
      role="presentation"
      className={twMerge('size-8 rounded-full transition-all', className)}
      style={{ backgroundColor: isHover ? bgColor : 'transparent' }}
      onClick={toggleSettingsPanelVisibility}
    />
  );
}
