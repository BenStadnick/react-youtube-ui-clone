import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, VideoList, VideoPlayer } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const defaultSearchTerm = 'Python';
  useEffect(() =>{
    handleSubmit(defaultSearchTerm);
  }, []);

  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        type: 'video',
        videoEmbeddable: 'true',
        maxResults: 5,
        key: 'AIzaSyCI9RjcCDDde_--SOag8wP0a0Z2lkt4aF0',
        q: searchTerm,
      }
    });

    setSelectedVideo(response.data.items[0]);
    setVideos(response.data.items);
  }

  const onVideoSelect = (videoId) => {
    setSelectedVideo(videoId);
  }

  return (
    <Grid style={{ justifyContent: 'center' }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} defaultSearchTerm={defaultSearchTerm} />
          </Grid>
          <Grid item xs={8}>
            <VideoPlayer video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
          <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;