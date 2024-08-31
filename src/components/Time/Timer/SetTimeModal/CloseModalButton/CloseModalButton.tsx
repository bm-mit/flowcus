import chroma from 'chroma-js';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import useConfigProfileContext from '@/hooks/useConfigProfileContext';
import useHover from '@/hooks/useHover';
import { useModalVisibilityContext } from '@/hooks/useModalVisibility';
import CloseIcon from '@/icons/close-black.svg';
import colors from '@/utils/colors';

interface ClosePanelButtonProps extends HTMLAttributes<HTMLDivElement> {}

export default function ClosePanelButton({
  className = undefined,
  onClick = undefined
}: ClosePanelButtonProps) {
  const { themeColor } = useConfigProfileContext();
  const [hoverRef, isHover] = useHover();
  const fgColor = colors.textColor(themeColor);

  const hoverFgColor = chroma(fgColor).darken(1).hex('rgb');

  return (
    <div
      ref={hoverRef}
      role="presentation"
      className={twMerge(
        'flex size-8 items-center rounded-full transition-all',
        className,
      )}
      style={{ backgroundColor: isHover ? hoverFgColor : 'transparent' }}
      onClick={onClick}
    >
      <CloseIcon
        className="m-auto size-6 transition-all"
        style={{ color: isHover ? themeColor : hoverFgColor }}
      />
    </div>
  );
}
