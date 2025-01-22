import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Separator from './Separator';

const meta = {
  title: 'Layout/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      },
      description: 'The size of the separator (affects the margin)',
    },
  },
  decorators: [
    (Story, context) => (
      <div className='text-center w-48'>
        <p className='block bg-slate-800 p-2 rounded'>Above the separator</p>
        <Story {...context} />
        <p className='block bg-slate-800 p-2 rounded'>Below the separator</p>
      </div>
    ),
  ],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExtraExtraSmall: Story = {
  args: {
    size: 'xxs'
  },
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs'
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};

export const ExtraExtraLarge: Story = {
  args: {
    size: 'xxl',
  },
};
