import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import CardLink from './CardLink';

const meta = {
    title: 'Component/CardLink',
    component: CardLink,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'The `CardLink` component is used to provide a card that can be routed to another page or website for the user to click on, with optional image properties and grid integration.'
            }
        }
    }
} satisfies Meta<typeof CardLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Sample CardLink'
    }
}

export const WithImage: Story = {
    args: {
        title: 'With Image',
        imgSrc: './sample-background-image.jpg'
    }
}

export const RedTextBackground: Story = {
    args: {
        title: 'With Red Text Background',
        textClassName: 'bg-red-500',
    }
}

export const PurpleCardBackground: Story = {
    args: {
        title: 'With Purple Card Background',
        className: 'bg-purple-500',
    }
}