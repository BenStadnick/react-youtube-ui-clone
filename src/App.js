import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, VideoList, VideoDetail } from './components';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const defaultSearchTerm = 'Cake';
  useEffect(() =>{
    handleSubmit(defaultSearchTerm);
  }, []);

  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCI9RjcCDDde_--SOag8wP0a0Z2lkt4aF0',
        q: searchTerm,
      }
    });

    setSelectedVideo(response.data.items[0]);
    setVideos(response.data.items);
  }

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  }

  return (
    <Grid style={{ justifyContent: 'center' }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} defaultSearchTerm={defaultSearchTerm} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
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