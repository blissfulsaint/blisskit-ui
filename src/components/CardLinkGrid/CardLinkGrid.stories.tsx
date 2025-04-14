import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import CardLinkGrid from './CardLinkGrid';
import CardLink from '../CardLink/CardLink';

const meta = {
    title: 'Layout/CardLinkGrid',
    component: CardLinkGrid,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'The `CardLinkGrid` component is used to organize the CardLink component in a grid stylized specifically for CardLink. The grid is responsive to screen sizes allowing for different column amounts depending on the size of its container.'
            }
        }
    }
} satisfies Meta<typeof CardLinkGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <CardLink title='Sample CardLink 1' />
                <CardLink title='Sample CardLink 2' />
                <CardLink title='Sample CardLink 3' />
                <CardLink title='Sample CardLink 4' />
            </>
        )
    }
}