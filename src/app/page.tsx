'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import SettingsButton from '@/components/Settings/SettingsButton';
import SettingsPanel from '@/components/Settings/SettingsPanel';
import Time from '@/components/Time';
import ConfigProfileContext from '@/contexts/ConfigProfile';
import SettingsPanelVisibility from '@/contexts/SettingsPanelVisibility';
import TimerColorContext from '@/contexts/TimerColorContext';
import TimerModeContext from '@/contexts/TimerModeContext';
import { ConfigProfile, defaultConfigProfile } from '@/types/config.types';
import TimerMode from '@/types/timer-mode.types';
import config from '@/utils/config';
import localStorage from '@/utils/local-storage';
import { CONFIG_PROFILE_ID } from '@/utils/local-storage/keys';

export default function Home() {
  const [timerMode, setTimerMode] = useState<TimerMode>(TimerMode.clock);
  const [timerColor, setTimerColor] = useState<string>('white');
  const [settingsPanelVisibility, setSettingsPanelVisibility] =
    useState<boolean>(false);
  const [configProfile, setConfigProfile] =
    useState<ConfigProfile>(defaultConfigProfile);

  const toggleSettingsPanelVisibility = useCallback(
    () => setSettingsPanelVisibility(!settingsPanelVisibility),
    [settingsPanelVisibility],
  );

  useEffect(() => {
    (async () => {
      const configProfileId =
        await localStorage.getItem<number>(CONFIG_PROFILE_ID);

      setConfigProfile(await config.getConfigProfile(configProfileId));
    })();
  }, []);

  const timerModeMemo = useMemo(
    () => ({ timerMode, setTimerMode }),
    [timerMode],
  );

  const timerColorMemo = useMemo(
    () => ({ timerColor, setTimerColor }),
    [timerColor],
  );

  const settingsPanelVisibilityMemo = useMemo(() => {
    return {
      settingsPanelVisibility,
      toggleSettingsPanelVisibility,
    };
  }, [settingsPanelVisibility, toggleSettingsPanelVisibility]);

  const configProfileMemo = useMemo(() => configProfile, [configProfile]);

  return (
    <ConfigProfileContext.Provider value={configProfileMemo}>
      <div className="relative">
        <TimerModeContext.Provider value={timerModeMemo}>
          <TimerColorContext.Provider value={timerColorMemo}>
            <Time />
          </TimerColorContext.Provider>
        </TimerModeContext.Provider>

        <SettingsPanelVisibility.Provider value={settingsPanelVisibilityMemo}>
          <SettingsButton className="absolute bottom-8 right-8" />
          <SettingsPanel />
        </SettingsPanelVisibility.Provider>
      </div>
    </ConfigProfileContext.Provider>
  );
}
