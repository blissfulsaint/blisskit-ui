import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Hero from './Hero';

const meta = {
    title: 'Component/Hero',
    component: Hero,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'The `Hero` component creates a parallax-scrolling image with dynamic heading for an appealing introduction to a page. This component comes equipped with a LayoutBand component to handle content styling.'
            }
        }
    }
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Default Hero'
    }
}

export const WithImage: Story = {
    args: {
        title: 'Hero with image',
        imgSrc: './tetons.jpg'
    }
}