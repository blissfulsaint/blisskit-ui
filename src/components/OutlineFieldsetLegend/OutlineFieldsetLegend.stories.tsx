import type { Meta, StoryObj } from "@storybook/react/*";
import React from "react";

import OutlineFieldsetLegend from './OutlineFieldsetLegend';

import OutlineFieldset from "../OutlineFieldset/OutlineFieldset";
import Form from "../Form/Form";

const meta = {
    title: 'Form/OutlineFieldsetLegend',
    component: OutlineFieldsetLegend,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'The `OutlineFieldsetLegend` component is intended for use within an `OutlineFieldset` component, taking advantage of `FormContext` (check the docs for `Form` for more details) while a decendant of a `Form` element.'
            }
        }
    },
    decorators: [
        (Story, context) => (
            <Form action='#'>
                <OutlineFieldset>
                    <Story {...context} />
                </OutlineFieldset>
            </Form>
        )
    ]
} satisfies Meta<typeof OutlineFieldsetLegend>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            'Default Fieldset Legend'
        )
    }
}