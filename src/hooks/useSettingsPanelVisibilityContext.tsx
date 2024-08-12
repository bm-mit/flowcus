'use client';

import { useCallback, useContext, useMemo, useState } from 'react';

import SettingsPanelVisibilityContext from '@/contexts/SettingsPanelVisibilityContext';
import ProviderProps from '@/hooks/ProviderProps';

export default function useSettingsPanelVisibilityContext() {
  return useContext(SettingsPanelVisibilityContext);
}

export function SettingsPanelVisibilityProvider({ children }: ProviderProps) {
  const [settingsPanelVisibility, setSettingsPanelVisibility] =
    useState<boolean>(false);

  const toggleSettingsPanelVisibility = useCallback(
    () => setSettingsPanelVisibility(!settingsPanelVisibility),
    [settingsPanelVisibility],
  );

  const settingsPanelVisibilityMemo = useMemo(
    () => ({ settingsPanelVisibility, toggleSettingsPanelVisibility }),
    [settingsPanelVisibility, toggleSettingsPanelVisibility],
  );

  return (
    <SettingsPanelVisibilityContext.Provider
      value={settingsPanelVisibilityMemo}
    >
      {children}
    </SettingsPanelVisibilityContext.Provider>
  );
}
