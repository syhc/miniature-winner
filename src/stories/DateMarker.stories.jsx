import React from 'react';

import { DateMarker } from '../components/datemarker/DateMarker';

export default {
  title: 'Components/DateMarker',
  component: DateMarker,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: { control: 'color' },
  },
};

const Template = (args) => <DateMarker {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  month: 'May',
  day: 23,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  month: 'May',
  day: 23,
};