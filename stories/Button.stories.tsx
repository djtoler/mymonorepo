import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Button2, Props} from '../components/Button2';


const meta: Meta = {
    title: 'Button2',
    component: Button2
}


export default meta;

export const Default = () => <Button2 variant="primary">Click Me</Button2>


export const Secondary = () => <Button2 variant="secondary">Second Button</Button2>
