import type { Meta, StoryObj } from "@storybook/react/*";
import React from "react";

import OutlineFieldset from './OutlineFieldset';

import OutlineFieldsetLegend from "../OutlineFieldsetLegend/OutlineFieldsetLegend";
import InputContainer from "../InputContainer/InputContainer";
import Form from "../Form/Form";
import FormButton from "../FormButton/FormButton";
import OutlineInput from "../OutlineInput/OutlineInput";

const meta = {
    title: 'Form/OutlineFieldset',
    component: OutlineFieldset,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'The `OutlineFieldset` component is intended for use within a `Form` component, taking advantage of `FormContext` (check the docs for `Form` for more details). This component, by default, has a defined width and centers itself to make for minimalistic, consistently-styled forms.'
            }
        }
    },
    decorators: [
        (Story, context) => (
            <Form action='#'>
                <Story {...context} />
            </Form>
        )
    ]
} satisfies Meta<typeof OutlineFieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <OutlineFieldsetLegend>Default Fieldset within Form Component</OutlineFieldsetLegend>
        )
    }
}

export const WithChildComponents: Story = {
    args: {
        children: (
            <>
                <OutlineFieldsetLegend>With Child Components</OutlineFieldsetLegend>
                <InputContainer>
                    <label>Sample Input:</label>
                    <OutlineInput />
                </InputContainer>
                <FormButton>Sample Button</FormButton>
            </>
        )
    }
}