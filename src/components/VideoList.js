import React from 'react';
import VideoItem from './VideoItem/VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  if(!videos.length) return <div>Unable to load recomendations</div>

  const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)

  return (
    <div>
      {listOfVideos}
    </div>
  )
}

export default VideoList;