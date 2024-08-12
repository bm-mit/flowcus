import { twMerge } from 'tailwind-merge';

import useSettingsPanelVisibilityContext from '@/hooks/useSettingsPanelVisibilityContext';

import SettingsPanel from './SettingsPanel';

interface SettingsOverlayProps {
  className?: string;
}

export default function SettingsOverlay({
  className = undefined,
}: SettingsOverlayProps) {
  const { settingsPanelVisibility } = useSettingsPanelVisibilityContext();

  return (
    <div
      className={twMerge(
        'z-10 flex size-full items-center justify-center bg-black/50',
        !settingsPanelVisibility && 'hidden',
        className,
      )}
    >
      <SettingsPanel />
    </div>
  );
}
