import React from 'react';
import { shallow } from 'enzyme';

import Component1 from './';

describe('snapshots', () => {
  it('renders correclty', () => {
    const wrapper = shallow(
      <Component1 />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
