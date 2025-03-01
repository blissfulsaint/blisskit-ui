import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Form from './Form';

import OutlineFieldset from '../OutlineFieldset/OutlineFieldset';
import OutlineFieldsetLegend from '../OutlineFieldsetLegend/OutlineFieldsetLegend';
import InputContainer from '../InputContainer/InputContainer';
import OutlineInput from '../OutlineInput/OutlineInput';
import FormButton from '../FormButton/FormButton';
// import StatusMessage from '../StatusMessage/StatusMessage';

const meta: Meta<typeof Form> = {
  component: Form,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    action: '#',
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
        action: '#',
        children: (
          <OutlineFieldset>
            <OutlineFieldsetLegend>Custom Theme</OutlineFieldsetLegend>
            <InputContainer>
              <label>Example Input:</label>
              <OutlineInput />
            </InputContainer>
            <FormButton>Submit</FormButton>
          </OutlineFieldset>
        )
    }
}