import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  if(!videos.length) return <div>Unable to load recomendations</div>

  const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)

  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  )
}

export default VideoList;