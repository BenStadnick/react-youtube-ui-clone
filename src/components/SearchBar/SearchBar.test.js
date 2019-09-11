import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import SearchBar from './SearchBar';


const mockOnFormSubmit = jest.fn( (x) => {return x;});

describe('SearchBar component', () => {
  it('did shallow render', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper).toMatchSnapshot();
  });

  it('shows default search term', () => {
    const defaultSearchTerm = 'test search term';
    const wrapper = mount(<SearchBar defaultSearchTerm={defaultSearchTerm} />);

    const textInput = wrapper.find('FormControl');
    expect(textInput.length).toBe(1); // single input exists
    expect(textInput.props().value).toBeDefined(); // has value
    expect(textInput.props().value).toEqual(defaultSearchTerm); // value is correct

    wrapper.unmount();
  });


  it('submits search on button form submint (button click or enter keypress)', () => {
    const defaultSearchTerm = 'test search term';
    const wrapper = mount(<SearchBar onFormSubmit={mockOnFormSubmit} defaultSearchTerm={defaultSearchTerm} />);
    
    const btn = wrapper.find('button');
    btn.simulate('submit');
    expect(mockOnFormSubmit).toHaveBeenCalled(); // called
    expect(mockOnFormSubmit.mock.results[0].value).toEqual(defaultSearchTerm); // called with correct value

    wrapper.unmount();
  });
});