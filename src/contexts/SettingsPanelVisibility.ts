import { createContext } from 'react';

type SettingsPanelVisibility = {
  settingsPanelVisibility: boolean;
  toggleSettingsPanelVisibility: () => void;
};

const SettingsPanelVisibilityContext = createContext<SettingsPanelVisibility>({
  settingsPanelVisibility: false,
  toggleSettingsPanelVisibility: () => {},
});

export default SettingsPanelVisibilityContext;
