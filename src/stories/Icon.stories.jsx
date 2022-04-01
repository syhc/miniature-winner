import React from 'react';

import { Icon } from '../content/icon/Icon';

export default {
  title: 'Content/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};

const Template = (args) => <Icon {...args} />;

export const Heart = Template.bind({});
Heart.args = {
  name: 'heart',
  width: '4em',
  height: '4em'
};

export const Skull = Template.bind({});
Skull.args = {
  name: 'skull',
  width: '4em',
  height: '4em'
};