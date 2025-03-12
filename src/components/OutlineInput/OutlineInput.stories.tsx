import type { Meta, StoryObj } from "@storybook/react/";

import OutlineInput from './OutlineInput';

const meta = {
    title: 'Form/OutlineInput',
    component: OutlineInput,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: '***IMPORTANT: This component, as well as all other Form components (aside from StatusMessage), caused unintended behavior across the library in ver. 1.3.0 and 1.3.1 and has been deprecated until a fix can be created. Please use ver. 1.3.2 or higher.*** \n\nThe `OutlineInput` component allows for consistent styling within a `Form` component, taking advantage of `FormContext` (check the docs for `Form` for more details). This component is best used within `InputContainer` for consistent vertical spacing and `OutlineFieldset` or another component with a defined width as the button component is designed to fill the width of its parent. However, the input component may also have its width, as well as any other CSS styles, specified using normal TailwindCSS classNames.'
            }
        }
    }
} satisfies Meta<typeof OutlineInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Default Input'
    }
}

export const DefinedWidth: Story = {
    args: {
        className: 'w-80',
        placeholder: 'Defined Width'
    }
}