import type { Meta, StoryObj } from "@storybook/react/*";

import LoadingSpinner from './LoadingSpinner';

const meta = {
    title: 'Form/LoadingSpinner',
    component: LoadingSpinner,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'The `LoadingSpinner` component is a simple component intended to show loading state. It is included in the `FormButton` component as a child element and renders while the button is in a loading state.'
            }
        }
    }
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    }
}