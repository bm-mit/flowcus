import { useContext } from 'react';

import SettingsPanelVisibilityContext from '@/contexts/SettingsPanelVisibilityContext';

export default function useSettingsPanelVisibilityContext() {
  return useContext(SettingsPanelVisibilityContext);
}
