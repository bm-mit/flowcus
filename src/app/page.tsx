'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import SettingsButton from '@/components/Settings/SettingsButton';
import SettingsPanel from '@/components/Settings/SettingsPanel';
import Time from '@/components/Time';
import SettingsPanelVisibility from '@/contexts/SettingsPanelVisibility';
import TimerColorContext from '@/contexts/TimerColorContext';
import TimerModeContext from '@/contexts/TimerModeContext';
import TimerMode from '@/types/timer-mode.types';
import db from '@/utils/indexed-db/db';
import localStorage from '@/utils/local-storage';
import { CONFIG_PROFILE_ID } from '@/utils/local-storage/keys';

export default function Home() {
  const [timerMode, setTimerMode] = useState<TimerMode>(TimerMode.clock);
  const [timerColor, setTimerColor] = useState<string>('white');
  const [settingsPanelVisibility, setSettingsPanelVisibility] =
    useState<boolean>(false);

  const toggleSettingsPanelVisibility = useCallback(
    () => setSettingsPanelVisibility(!settingsPanelVisibility),
    [settingsPanelVisibility],
  );

  useEffect(() => {
    (async () => {
      const configProfileId =
        await localStorage.getItem<number>(CONFIG_PROFILE_ID);

      const configProfile = await db.configProfiles.get(configProfileId);

      if (configProfile) {
        setTimerColor(configProfile.timerColor);
      }
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

  return (
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
  );
}
