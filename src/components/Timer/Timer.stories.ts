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
    opacity: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.05,
      },
    },
  },
  args: {
    background: 'https://images.unsplash.com/photo-1722648404090-2179fba1b4b0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof Timer>;

export const Clock: Story = {
  args: {
    mode: 'clock',
  },
};
