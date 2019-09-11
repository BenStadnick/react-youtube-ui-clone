import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import VideoItem from './VideoItem';

const mockOnVideoSelect = jest.fn();

 // mock video api response
 const testTitle = 'test title';
 const testUrl = 'test url';
 const video = {
   snippet : {
     title : testTitle,
     thumbnails : {
       medium : {
         url : testUrl
       }
     }
   }
 };

describe('VideoItem component', () => {
  it('did shallow render', () => {
    let wrapper = shallow(<VideoItem />);
    expect(wrapper).toMatchSnapshot();

    wrapper = shallow(<VideoItem video={video} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('displays correct thumbnail and title', () => {
    const wrapper = mount(<VideoItem video={video} />);

    const img = wrapper.find('img');
    expect(img.props().src).toEqual(testUrl);

    const title = wrapper.find('CardText');
    expect(title.text()).toEqual(testTitle);

    wrapper.unmount();
  });

  it('calls onVideoSelect when clicked', () => {
    const wrapper = mount(<VideoItem onVideoSelect={mockOnVideoSelect} video={video}/>);

    wrapper.find('Card').simulate('click');
    expect(mockOnVideoSelect).toHaveBeenCalled();
    
    wrapper.unmount();
  });

});