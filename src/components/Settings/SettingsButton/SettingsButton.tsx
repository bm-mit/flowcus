import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import useConfigProfileContext from '@/hooks/useConfigProfileContext';
import useHover from '@/hooks/useHover';
import useSettingsPanelVisibilityContext from '@/hooks/useSettingsPanelVisibilityContext';
import SettingsIcon from '@/icons/settings-black.svg';

interface SettingsButtonProps extends HTMLAttributes<HTMLDivElement> {}

export default function SettingsButton({ className }: SettingsButtonProps) {
  const { toggleSettingsPanelVisibility } = useSettingsPanelVisibilityContext();
  const [hoverRef, isHover] = useHover<HTMLButtonElement>();
  const { themeColor } = useConfigProfileContext();

  const style = {
    backgroundColor: isHover ? themeColor : 'transparent',
  };

  return (
    <button
      type="button"
      ref={hoverRef}
      className={twMerge('size-12 rounded-full transition-all', className)}
      style={style}
      onClick={toggleSettingsPanelVisibility}
      aria-label="Settings"
    >
      <SettingsIcon width="32px" height="32px" className="m-auto text-white" />
    </button>
  );
}
