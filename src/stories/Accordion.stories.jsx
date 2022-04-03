import React from 'react';

import { Accordion } from '../components/accordion/Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {},
};

const Template = (args) => <Accordion {...args} />;

export const Single = Template.bind({});
Single.args = {
  items: [
    {
      title: 'Vitae nunc sed velit dignissim sodales ut eu sem integer',
      content: 'Eu consequat ac felis donec et odio pellentesque diam volutpat. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Convallis a cras semper auctor neque vitae tempus. Est ante in nibh mauris cursus mattis molestie a. Tellus id interdum velit laoreet id donec ultrices. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Proin fermentum leo vel orci porta non pulvinar neque. Ornare quam viverra orci sagittis eu. In vitae turpis massa sed elementum tempus egestas. Turpis tincidunt id aliquet risus feugiat. Egestas integer eget aliquet nibh praesent tristique magna sit amet.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
    },
  ],
  maxWidth: '600px',
};

export const Multiple = Template.bind({});
Multiple.args = {
  items: [
    {
      title: 'Nunc faucibus a pellentesque sit amet porttitor eget',
      content: 'Integer enim neque volutpat ac tincidunt vitae semper quis. Porttitor massa id neque aliquam vestibulum. Metus dictum at tempor commodo. Eros donec ac odio tempor orci dapibus. Facilisi morbi tempus iaculis urna. Malesuada fames ac turpis egestas. In fermentum posuere urna nec. Congue mauris rhoncus aenean vel. Commodo elit at imperdiet dui accumsan sit amet. Quis viverra nibh cras pulvinar mattis nunc. Viverra aliquet eget sit amet tellus. Sit amet risus nullam eget felis eget. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Blandit massa enim nec dui nunc mattis enim. Congue eu consequat ac felis. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Morbi tristique senectus et netus.',
    },
    {
      title: 'Massa eget egestas purus viverra accumsan in',
      content: 'Ultrices vitae auctor eu augue. Massa enim nec dui nunc mattis enim ut tellus. Amet porttitor eget dolor morbi non arcu risus quis varius. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Est ullamcorper eget nulla facilisi etiam dignissim diam. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Hendrerit dolor magna eget est. Ante metus dictum at tempor commodo. Sed viverra ipsum nunc aliquet. Odio euismod lacinia at quis risus sed vulputate. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Massa ultricies mi quis hendrerit dolor magna eget est lorem.',
    },
    {
      title: 'Vitae nunc sed velit dignissim sodales ut eu sem integer',
      content: 'Eu consequat ac felis donec et odio pellentesque diam volutpat. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Convallis a cras semper auctor neque vitae tempus. Est ante in nibh mauris cursus mattis molestie a. Tellus id interdum velit laoreet id donec ultrices. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Proin fermentum leo vel orci porta non pulvinar neque. Ornare quam viverra orci sagittis eu. In vitae turpis massa sed elementum tempus egestas. Turpis tincidunt id aliquet risus feugiat. Egestas integer eget aliquet nibh praesent tristique magna sit amet.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
    },
  ],
  maxWidth: '600px',
};