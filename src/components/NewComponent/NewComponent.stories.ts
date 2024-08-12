import { Meta, StoryObj } from '@storybook/react';

import NewComponent from '.';

const meta: Meta<typeof NewComponent> = {
  component: NewComponent
};

export default meta;

type Story = StoryObj<typeof NewComponent>;

export const Default: Story = {};
