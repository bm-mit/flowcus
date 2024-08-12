import { Meta, StoryObj } from '@storybook/react';

import SettingsPanel from './index';

const meta: Meta<typeof SettingsPanel> = {
  component: SettingsPanel,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SettingsPanel>;

export const Default: Story = {};
