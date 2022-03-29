import React from 'react';

import { Card } from '../components/card/Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};

const Template = (args) => <Card {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  title: 'Lorem ipsum dolor sit amet',
  url: '#',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
  image: 'https://picsum.photos/id/237/400/300',
  imagePosition: 'left',
  label: 'Dogs',
  labelUrl: '#',
  maxWidth: '1000px',
};