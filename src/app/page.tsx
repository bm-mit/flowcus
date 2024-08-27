'use client';

import SettingsButton from '@/components/Settings/SettingsButton';
import SettingsOverlay from '@/components/Settings/SettingsOverlay';
import Time from '@/components/Time';
import { ConfigProfileProvider } from '@/hooks/useConfigProfileContext';
import { SettingsPanelVisibilityProvider } from '@/hooks/useSettingsPanelVisibilityContext';
import { TimerModeProvider } from '@/hooks/useTimerModeContext';

export default function Home() {
  return (
    <ConfigProfileProvider>
      <div className="relative">
        <TimerModeProvider>
          <Time />
        </TimerModeProvider>

        <SettingsPanelVisibilityProvider>
          <SettingsButton className="absolute bottom-8 right-8" />
          <SettingsOverlay className="fixed left-0 top-0" />
        </SettingsPanelVisibilityProvider>
      </div>
    </ConfigProfileProvider>
  );
}
