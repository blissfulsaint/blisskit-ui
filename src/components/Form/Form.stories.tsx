import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Form from './Form';

import OutlineFieldset from '../OutlineFieldset/OutlineFieldset';
import OutlineFieldsetLegend from '../OutlineFieldsetLegend/OutlineFieldsetLegend';
import InputContainer from '../InputContainer/InputContainer';
import OutlineInput from '../OutlineInput/OutlineInput';
import FormButton from '../FormButton/FormButton';
import StatusMessage from '../StatusMessage/StatusMessage';

const meta = {
  title: 'Form/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The `Form` component is used to provide a consistent logical and UI framework for forms across an application, complete with a proprietary FormContext that assists in applying a consistent theme to compatible child elements (also included in this library) and a modified action prop that allows for server actions with more complex state management.',
      },
    },
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <OutlineFieldset>
        <OutlineFieldsetLegend>Default Form</OutlineFieldsetLegend>
        <InputContainer>
          <label>Example Input:</label>
          <OutlineInput />
        </InputContainer>
        <FormButton>Submit</FormButton>
      </OutlineFieldset>
    )
  }
};

export const WithCustomTheme: Story = {
    args: {
        primaryColor: 'red-500',
        children: (
            <OutlineFieldset>
                <OutlineFieldsetLegend>With Red Theme</OutlineFieldsetLegend>
                <FormButton>Submit</FormButton>
            </OutlineFieldset>
        )
    }
}