import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import LayoutBand from './LayoutBand';

const meta = {
  title: 'Layout/LayoutBand',
  component: LayoutBand,
  tags: ['autodocs'],
} satisfies Meta<typeof LayoutBand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h1 className='block bg-slate-800 p-2 rounded'>This is inside a default LayoutBand!</h1>
        <p className='block bg-slate-800 p-2 rounded'>
          The `LayoutBand` component centers its children and applies a max width
          with padding. Resize the screen to see how it behaves responsively.
        </p>
      </div>
    )
  }
};

export const WithMultipleChildren: Story = {
  args: {
    children: (
      <>
        <div className='bg-emerald-700 p-3'>Child 1</div>
        <div className='bg-indigo-700 p-3'>Child 2</div>
        <div className='bg-rose-700 p-3'>Child 3</div>
      </>
    ),
  },
};