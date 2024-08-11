import { twMerge } from 'tailwind-merge';

import useSettingsPanelVisibility from '@/hooks/useSettingsPanelVisibility';

export default function SettingsPanel() {
  const { settingsPanelVisibility, toggleSettingsPanelVisibility } =
    useSettingsPanelVisibility();

  return (
    <div
      className={twMerge(
        'fixed left-0 top-0 z-10 flex size-full items-center justify-center bg-black/50 transition-opacity duration-300',
        !settingsPanelVisibility && 'h-0 opacity-0',
      )}
    >
      <div className="relative size-4/5 rounded-2xl bg-red-500">
        <div
          role="presentation"
          className="absolute right-4 top-4 size-8 rounded-full bg-blue-500"
          onClick={toggleSettingsPanelVisibility}
        />
      </div>
    </div>
  );
}
