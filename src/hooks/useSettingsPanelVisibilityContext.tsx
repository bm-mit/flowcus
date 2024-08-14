'use client';

import { useContext, useMemo } from 'react';

import SettingsPanelVisibilityContext from '@/contexts/SettingsPanelVisibilityContext';
import ProviderProps from '@/hooks/ProviderProps';
import useToggle from '@/hooks/useToggle';

export default function useSettingsPanelVisibilityContext() {
  return useContext(SettingsPanelVisibilityContext);
}

export function SettingsPanelVisibilityProvider({ children }: ProviderProps) {
  const [settingsPanelVisibility, toggleSettingsPanelVisibility] =
    useToggle(false);

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
