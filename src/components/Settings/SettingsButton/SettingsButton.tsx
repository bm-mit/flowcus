import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import useSettingsPanelVisibility from '@/hooks/useSettingsPanelVisibility';
import SettingsIcon from '@/icons/settings-black.svg';

interface SettingsButtonProps extends HTMLAttributes<HTMLDivElement> {}

export default function SettingsButton({ className }: SettingsButtonProps) {
  const { toggleSettingsPanelVisibility } = useSettingsPanelVisibility();

  return (
    <button
      type="button"
      className={twMerge(
        'size-12 rounded-full transition-all hover:bg-teal-900',
        className,
      )}
      onClick={toggleSettingsPanelVisibility}
      aria-label="Settings"
    >
      <SettingsIcon width="32px" height="32px" className="m-auto text-white" />
    </button>
  );
}
