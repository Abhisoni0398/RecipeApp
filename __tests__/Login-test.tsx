import 'react-native';
import React from 'react';
import {Login} from '../src/Screens';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const snapshot = renderer.create(<Login />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
