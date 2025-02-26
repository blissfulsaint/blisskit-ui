import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import StatusMessage from './StatusMessage';

const meta = {
  title: 'Form/StatusMessage',
  component: StatusMessage,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['error', 'success', 'warning'],
      },
      description: 'The type of status message it is, which controls the color of the text.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'The `StatusMessage` component is used to create a color-coded message that indicates to the user what type of status message they are seeing. The StatusMessage component will display text in a particular color depending on the value of the status prop. This component shines most in forms or other elements that need to report the status of a particular task to the user.',
      },
    },
  },
} satisfies Meta<typeof StatusMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error: Story = {
    args: {
        status: 'error',
        children: (
            'Error Message'
        )
    }
}

export const Success: Story = {
    args: {
        status: 'success',
        children: (
            'Success Message'
        )
    }
}

export const Warning: Story = {
    args: {
        status: 'warning',
        children: (
            'Warning Message'
        )
    }
}
