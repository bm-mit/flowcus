import chroma from 'chroma-js';
import { HTMLAttributes, useContext, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import { ModalVisibilityContext } from '@/components/Modal/Modal';
import useConfigProfileContext from '@/hooks/useConfigProfileContext';
import useHover from '@/hooks/useHover';
import CloseIcon from '@/icons/close-black.svg';

interface ClosePanelButtonProps extends HTMLAttributes<HTMLDivElement> {}

export default function ClosePanelButton({
  className = undefined,
}: ClosePanelButtonProps) {
  const [, toggleModal] = useContext(ModalVisibilityContext);
  const { themeColor } = useConfigProfileContext();
  const [hoverRef, isHover] = useHover();

  const hoverFgColor = useMemo(
    () => chroma(themeColor).darken(1).hex('rgb'),
    [themeColor],
  );

  return (
    <div
      ref={hoverRef}
      role="presentation"
      className={twMerge(
        'flex size-8 items-center rounded-full transition-all',
        className,
      )}
      style={{ backgroundColor: isHover ? hoverFgColor : 'transparent' }}
      onClick={toggleModal}
    >
      <CloseIcon
        className="m-auto size-6 transition-all"
        style={{ color: isHover ? themeColor : hoverFgColor }}
      />
    </div>
  );
}
