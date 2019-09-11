import React, {useState, useRef, useEffect}  from 'react';
import youtube from '../../api/youtube';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const VideoPlayer = ({ video }) => {

  const ref = useRef(null);

  // maintain aspect ratio of player on resize
  const [elemWidth, setElemWidth] = useState(0);
  const resize = () => { // need to throttle
    setElemWidth(ref.current ? ref.current.offsetWidth : 0);
  }
  useEffect(() => {
    window.addEventListener('resize', resize);
    setElemWidth(ref.current ? ref.current.offsetWidth : 0);
  }, []);


  // get video details
  const [videoDetails, setVideoDetails] = useState(null);
  useEffect(() => {
    if(!video) return;

    const getVideoDetails = async (videoId) => {
      if(!video) return;

      const response = await youtube.get('videos', {
        params: {
          part: 'snippet',
          id: videoId,
          key: 'AIzaSyCI9RjcCDDde_--SOag8wP0a0Z2lkt4aF0'
        }
      });
      setVideoDetails(response.data.items[0]);
    }

    getVideoDetails(video.id.videoId);
  }, [video]);
  

  // set description display
  const [showAll, setShowAll] = useState(false);
  const [descriptionStyle, setDescriptionStyle] = useState({whiteSpace: 'pre-wrap', overflow: 'hidden', height: '20rem'});
  const [showAllBtnText, setShowAllBtnText] = useState('Show All');
  
  const onShowAllBtnClick = () => {
    const isShow = !showAll;
    setShowAll(isShow);
  }
  
  useEffect(() => {
    if(showAll) {
      setDescriptionStyle({whiteSpace: 'pre-wrap'});
      setShowAllBtnText('Show Less');
    } else {
      setDescriptionStyle({whiteSpace: 'pre-wrap', overflow: 'hidden', height: '5rem'});
      setShowAllBtnText('Show More');
    }
  }, [showAll])


  if(!videoDetails) return <div ref={ref} style={{width: '100%'}}>Loading...</div>


  const title = videoDetails.snippet.localized.title ? videoDetails.snippet.localized.title : videoDetails.snippet.title;
  const channelTitle = video.snippet.channelTitle;
  const publishedAt = video.snippet.publishedAt.substring(0,10);
  const description = videoDetails.snippet.localized.description ? videoDetails.snippet.localized.description : videoDetails.snippet.description;

  return (
    <>
      <div ref={ref} style={{width: '100%'}}>
        <iframe 
          frameBorder="0" 
          height={elemWidth*0.5625} 
          width="100%" 
          title="Video Player" 
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        />
      </div>
      <Card style={{ padding: '15px' }}>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{channelTitle}</Card.Subtitle>
        <Card.Text>Published: {publishedAt}</Card.Text>
      </Card>
      <Card style={{ padding: '15px', marginTop: '10px' }}>
        <Card.Text style={descriptionStyle}>{description}</Card.Text>
        <div style={{textAlign: 'right'}}>
          <Button onClick={ () => onShowAllBtnClick()}>{showAllBtnText}</Button>
        </div>
      </Card>
    </>
  )
}

export default VideoPlayer;