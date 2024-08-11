'use client';

import Time from '@/components/Time';
import { useEffect, useMemo, useState } from 'react';
import TimerModeContext from '@/contexts/TimerModeContext';
import TimerMode from '@/types/timer-mode.types';
import SettingsButton from '@/components/Settings/SettingsButton';
import TimerColorContext from '@/contexts/TimerColorContext';
import localStorage from '@/utils/local-storage';
import { CONFIG_PROFILE_ID } from '@/utils/local-storage/keys';
import db from '@/utils/indexed-db/db';

export default function Home() {
  const [timerMode, setTimerMode] = useState<TimerMode>(TimerMode.clock);
  const [timerColor, setTimerColor] = useState<string>('white');

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

  return (
    <div className="relative">
      <TimerModeContext.Provider value={timerModeMemo}>
        <TimerColorContext.Provider value={timerColorMemo}>
          <Time />
        </TimerColorContext.Provider>
      </TimerModeContext.Provider>

      <SettingsButton className="absolute bottom-8 right-8" />
    </div>
  );
}
