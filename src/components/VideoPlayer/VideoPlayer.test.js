import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import VideoPlayer from './VideoPlayer';
import { wrap } from 'module';

 // mock video api response
const mock_videoDetails = {"kind":"youtube#video","etag":"\"8jEFfXBrqiSrcF6Ee7MQuz8XuAM/GWdFKm8x_2_VdS3UeRPW3nbQUzI\"","id":"rfscVS0vtbw","snippet":{"publishedAt":"2018-07-11T18:00:42.000Z","channelId":"UC8butISFwT-Wl7EV0hUK0BQ","title":"Learn Python - Full Course for Beginners [Tutorial]","description":"This course will give you a full introduction into all of the core concepts in python. Follow along with the videos and you'll be a python programmer in no time!\n\n⭐️ Contents ⭐\n⌨️ (0:00) Introduction\n⌨️ (1:45) Installing Python & PyCharm\n⌨️ (6:40) Setup & Hello World\n⌨️ (10:23) Drawing a Shape\n⌨️ (15:06) Variables & Data Types\n⌨️ (27:03) Working With Strings\n⌨️ (38:18) Working With Numbers\n⌨️ (48:26) Getting Input From Users\n⌨️ (52:37) Building a Basic Calculator\n⌨️ (58:27) Mad Libs Game\n⌨️ (1:03:10) Lists\n⌨️ (1:10:44) List Functions\n⌨️ (1:18:57) Tuples\n⌨️ (1:24:15) Functions\n⌨️ (1:34:11) Return Statement\n⌨️ (1:40:06) If Statements\n⌨️ (1:54:07) If Statements & Comparisons\n⌨️ (2:00:37) Building a better Calculator\n⌨️ (2:07:17) Dictionaries\n⌨️ (2:14:13) While Loop\n⌨️ (2:20:21) Building a Guessing Game\n⌨️ (2:32:44) For Loops\n⌨️ (2:41:20) Exponent Function\n⌨️ (2:47:13) 2D Lists & Nested Loops\n⌨️ (2:52:41) Building a Translator\n⌨️ (3:00:18) Comments\n⌨️ (3:04:17) Try / Except\n⌨️ (3:12:41) Reading Files\n⌨️ (3:21:26) Writing to Files\n⌨️ (3:28:13) Modules & Pip\n⌨️ (3:43:56) Classes & Objects\n⌨️ (3:57:37) Building a Multiple Choice Quiz\n⌨️ (4:08:28) Object Functions\n⌨️ (4:12:37) Inheritance\n⌨️ (4:20:43) Python Interpreter\n\n\nCourse developed by Mike Dane. Check out his YouTube channel for more great programming courses: https://www.youtube.com/channel/UCvmINlrza7JHB1zkIOuXEbw\n\n🐦Follow Mike on Twitter - https://twitter.com/mike_dane\n\n🔗If you liked this video, Mike accepts donations on his website: https://www.mikedane.com/contribute/\n\n⭐️Other full courses by Mike Dane on our channel ⭐️\n💻C: https://youtu.be/KJgsSFOSQv0\n💻C++: https://youtu.be/vLnPwxZdW4Y\n💻SQL: https://youtu.be/HXV3zeQKqGY\n💻Ruby: https://youtu.be/t_ispmWmdjY\n💻PHP: https://youtu.be/OK_JCtrrv-c\n💻C#: https://youtu.be/GhQdlIFylQ8\n\n--\n\nLearn to code for free and get a developer job: https://www.freecodecamp.org\n\nRead hundreds of articles on programming: https://medium.freecodecamp.org\n\nAnd subscribe for new videos on technology every day: https://youtube.com/subscription_center?add_user=freecodecamp","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/rfscVS0vtbw/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/rfscVS0vtbw/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/rfscVS0vtbw/hqdefault.jpg","width":480,"height":360},"standard":{"url":"https://i.ytimg.com/vi/rfscVS0vtbw/sddefault.jpg","width":640,"height":480},"maxres":{"url":"https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg","width":1280,"height":720}},"channelTitle":"freeCodeCamp.org","tags":["python","python tutorial","python language","python full course","python course","learn python","learn python programming","python tutorial for beginners","python tutorial 2018","python programming tutorial","python programming language","software development","programming tutorial","freecodecamp"],"categoryId":"27","liveBroadcastContent":"none","defaultLanguage":"en","localized":{"title":"Learn Python - Full Course for Beginners [Tutorial]","description":"This course will give you a full introduction into all of the core concepts in python. Follow along with the videos and you'll be a python programmer in no time!\n\n⭐️ Contents ⭐\n⌨️ (0:00) Introduction\n⌨️ (1:45) Installing Python & PyCharm\n⌨️ (6:40) Setup & Hello World\n⌨️ (10:23) Drawing a Shape\n⌨️ (15:06) Variables & Data Types\n⌨️ (27:03) Working With Strings\n⌨️ (38:18) Working With Numbers\n⌨️ (48:26) Getting Input From Users\n⌨️ (52:37) Building a Basic Calculator\n⌨️ (58:27) Mad Libs Game\n⌨️ (1:03:10) Lists\n⌨️ (1:10:44) List Functions\n⌨️ (1:18:57) Tuples\n⌨️ (1:24:15) Functions\n⌨️ (1:34:11) Return Statement\n⌨️ (1:40:06) If Statements\n⌨️ (1:54:07) If Statements & Comparisons\n⌨️ (2:00:37) Building a better Calculator\n⌨️ (2:07:17) Dictionaries\n⌨️ (2:14:13) While Loop\n⌨️ (2:20:21) Building a Guessing Game\n⌨️ (2:32:44) For Loops\n⌨️ (2:41:20) Exponent Function\n⌨️ (2:47:13) 2D Lists & Nested Loops\n⌨️ (2:52:41) Building a Translator\n⌨️ (3:00:18) Comments\n⌨️ (3:04:17) Try / Except\n⌨️ (3:12:41) Reading Files\n⌨️ (3:21:26) Writing to Files\n⌨️ (3:28:13) Modules & Pip\n⌨️ (3:43:56) Classes & Objects\n⌨️ (3:57:37) Building a Multiple Choice Quiz\n⌨️ (4:08:28) Object Functions\n⌨️ (4:12:37) Inheritance\n⌨️ (4:20:43) Python Interpreter\n\n\nCourse developed by Mike Dane. Check out his YouTube channel for more great programming courses: https://www.youtube.com/channel/UCvmINlrza7JHB1zkIOuXEbw\n\n🐦Follow Mike on Twitter - https://twitter.com/mike_dane\n\n🔗If you liked this video, Mike accepts donations on his website: https://www.mikedane.com/contribute/\n\n⭐️Other full courses by Mike Dane on our channel ⭐️\n💻C: https://youtu.be/KJgsSFOSQv0\n💻C++: https://youtu.be/vLnPwxZdW4Y\n💻SQL: https://youtu.be/HXV3zeQKqGY\n💻Ruby: https://youtu.be/t_ispmWmdjY\n💻PHP: https://youtu.be/OK_JCtrrv-c\n💻C#: https://youtu.be/GhQdlIFylQ8\n\n--\n\nLearn to code for free and get a developer job: https://www.freecodecamp.org\n\nRead hundreds of articles on programming: https://medium.freecodecamp.org\n\nAnd subscribe for new videos on technology every day: https://youtube.com/subscription_center?add_user=freecodecamp"},"defaultAudioLanguage":"en"}};
const mockGetVideoDetails = jest.fn( (x) => {return mock_videoDetails} );

describe('VideoPlayer component', () => {
  it('did shallow render', () => {
    let video = {};
    shallow(<VideoPlayer video={video} />);
  });
});

describe('VideoPlayer component', () => {
  it('did mount with video', () => {
    let video = {};
    let wrapper = mount(<VideoPlayer video={video} />);
    
    wrapper.getVideoDetails = mockGetVideoDetails;

    video = {
      id : {
        videoId : 'someId'
      }
    }
    wrapper.setProps( {video : video });

    console.log(wrapper.props().video);

    expect(mockGetVideoDetails).toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});