import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {PasswordInput} from './PasswordInput';

export default {
    title: 'UI/Controls/PasswordInput',
    component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => <PasswordInput { ...args } />;

export const passwordInputDefault = Template.bind({});
passwordInputDefault.args = {
    placeholderText: 'enter the password',
    state: '',
};
