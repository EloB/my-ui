import React from 'react';

import { storiesOf } from '@storybook/react';

import HelloWorld from '.';

storiesOf('HelloWorld', module)
  .add('with nothing', () => (
    <HelloWorld />
  ));
