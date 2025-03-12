import type { Meta, StoryObj } from "@storybook/react/";
import React from "react";

import InputContainer from './InputContainer';

import Form from '../Form/Form';
import OutlineFieldset from '../OutlineFieldset/OutlineFieldset';
import OutlineFieldsetLegend from '../OutlineFieldsetLegend/OutlineFieldsetLegend';
import OutlineInput from '../OutlineInput/OutlineInput';
import FormButton from "../FormButton/FormButton";

const meta = {
    title: 'Form/InputContainer',
    component: InputContainer,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: '***IMPORTANT: This component, as well as all other Form components (aside from StatusMessage), caused unintended behavior across the library in ver. 1.3.0 and 1.3.1 and has been deprecated until a fix can be created. Please use ver. 1.3.2 or higher.*** \n\nThe `InputContainer` component is designed for use within a `Fieldset` component and helps maintain consistent spacing and semantic clarity for `Input` fields in a `Form` component.'
            }
        }
    },
    decorators: [
        (Story, context) => (
            <Form action='#'>
                <OutlineFieldset>
                    <OutlineFieldsetLegend>Sample Form</OutlineFieldsetLegend>
                    <InputContainer>
                        <label>Sample Input</label>
                        <OutlineInput />
                    </InputContainer>
                    <Story {...context} />
                    <FormButton>Sample Button</FormButton>
                </OutlineFieldset>
            </Form>
        )
    ]

} satisfies Meta<typeof InputContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <label>Sample Input</label>
                <OutlineInput />
            </>
        )
    }
}