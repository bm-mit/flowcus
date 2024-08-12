import { twMerge } from 'tailwind-merge';

import useConfigProfileContext from '@/hooks/useConfigProfileContext';
import useSettingsPanelVisibilityContext from '@/hooks/useSettingsPanelVisibilityContext';

import ClosePanelButton from './ClosePanelButton';

export default function SettingsPanel() {
  const { settingsPanelVisibility } = useSettingsPanelVisibilityContext();
  const { themeColor } = useConfigProfileContext();

  return (
    <div
      className={twMerge(
        'fixed left-0 top-0 z-10 flex size-full items-center justify-center bg-black/50',
        !settingsPanelVisibility && 'hidden',
      )}
    >
      <div
        className="relative size-4/5 rounded-2xl"
        style={{ backgroundColor: themeColor }}
      >
        <ClosePanelButton className="absolute right-4 top-4" />
      </div>
    </div>
  );
}
