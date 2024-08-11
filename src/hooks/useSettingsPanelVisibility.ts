import { useContext } from 'react';

import SettingsPanelVisibilityContext from '@/contexts/SettingsPanelVisibility';

export default function useSettingsPanelVisibility() {
  return useContext(SettingsPanelVisibilityContext);
}
