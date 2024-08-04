import { Meta, StoryObj } from '@storybook/react';
import Timer from './Timer';

const meta: Meta<typeof Timer> = {
  component: Timer,
  argTypes: {
    mode: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Timer>;

export const Clock: Story = {
  args: {
    mode: 'clock',
  },
};
