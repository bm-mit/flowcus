import { Meta, StoryObj } from '@storybook/react';

import TimerMode from '@/types/timer-mode.types';

import Time from './Time';

const meta: Meta<typeof Time> = {
  component: Time,
  argTypes: {
    mode: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof Time>;

export const Clock: Story = {
  args: {
    mode: TimerMode.clock,
  },
};
