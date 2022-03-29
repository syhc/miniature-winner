import React from 'react';

import { Heading } from '../typography/heading/Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {},
};

const Template = (args) => <Heading {...args} />;

export const Large = Template.bind({});
Large.args = {
  heading: 'Heading 1',
  level: 1,
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  heading: 'Heading 3',
  url: '#',
  level: 3,
  size: 'small',
};