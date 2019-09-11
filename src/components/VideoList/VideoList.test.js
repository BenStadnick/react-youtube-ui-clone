import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import VideoList from './VideoList';

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

describe('VideoList component', () => {
  it('did shallow render', () => {
    let wrapper = shallow(<VideoList />);
    expect(wrapper).toMatchSnapshot();

    let videos = [];
    wrapper = shallow(<VideoList videos={videos} />);
    expect(wrapper).toMatchSnapshot();


    videos = [video, video, video];
    wrapper = shallow(<VideoList videos={videos} />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('displays the correct number of VideoItems based on \'video\' input', () => {
    let videos = [video, video, video];
    let wrapper = shallow(<VideoList videos={videos} />);
    expect(wrapper.children().length).toEqual(3);
  });
  
});