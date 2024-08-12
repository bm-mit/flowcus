import { Meta, StoryObj } from '@storybook/react';

import SettingsPanelVisibilityContext from '@/contexts/SettingsPanelVisibilityContext';

import SettingsPanel from '.';

const meta: Meta<typeof SettingsPanel> = {
  component: SettingsPanel,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    settingsPanelVisibility: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SettingsPanel>;

export function Default({ settingsPanelVisibility }) {
  return (
    <SettingsPanelVisibilityContext.Provider
      value={{
        settingsPanelVisibility,
        toggleSettingsPanelVisibility: () => {},
      }}
    >
      <div className="h-screen w-screen">
        <SettingsPanel />
      </div>
    </SettingsPanelVisibilityContext.Provider>
  );
}
