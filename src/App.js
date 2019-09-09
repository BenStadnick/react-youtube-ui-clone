import React, { useState, useEffect } from 'react';
import youtube from './api/youtube';
import { Container, Row, Col } from 'react-bootstrap';
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
        key: `${process.env.REACT_APP_YOUTUBE_API_KEY}`,
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
    <Container>
      <Row>
        <Col md={12}>
          <SearchBar onFormSubmit={handleSubmit} defaultSearchTerm={defaultSearchTerm} />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <VideoPlayer video={selectedVideo} />
        </Col>
        <Col md={4}>
          <VideoList videos={videos} onVideoSelect={onVideoSelect} />
        </Col>
      </Row>   
    </Container>
  );
}

export default App;