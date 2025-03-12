import type { Meta, StoryObj } from "@storybook/react/";

import LoadingSpinner from './LoadingSpinner';

const meta = {
    title: 'Form/LoadingSpinner',
    component: LoadingSpinner,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: '***IMPORTANT: This component, as well as all other Form components (aside from StatusMessage), caused unintended behavior across the library in ver. 1.3.0 and 1.3.1 and has been deprecated until a fix can be created. Please use ver. 1.3.2 or higher.*** \n\nThe `LoadingSpinner` component is a simple component intended to show loading state. It is included in the `FormButton` component as a child element and renders while the button is in a loading state.'
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