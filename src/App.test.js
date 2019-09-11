import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';

describe('Top level \'app\' component', () => {
  it('did shallow render', () => {
    const wrapper = shallow(<App debug />);
    expect(wrapper).toMatchSnapshot();

  });
});