import React, {useState, useRef, useEffect}  from 'react';
import Card from 'react-bootstrap/Card'

const VideoPlayer = ({ video }) => {

  const ref = useRef(null);

  const [elemWidth, setElemWidth] = useState(0);

  const resize = () => { // need to throttle
    setElemWidth(ref.current ? ref.current.offsetWidth : 0);
  }

  useEffect(() => {
    window.addEventListener('resize', resize);
    setElemWidth(ref.current ? ref.current.offsetWidth : 0);
  }, []);

  if(!video) return <div ref={ref} style={{width: '100%'}}>Loading...</div>

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <>
      <div ref={ref} style={{width: '100%'}}>
        <iframe frameBorder="0" height={elemWidth*0.5625} width="100%" title="Video Player" src={videoSrc}/>
      </div>
      <Card style={{ padding: '15px' }}>
        <Card.Title>{video.snippet.title}</Card.Title>
        <Card.Subtitle>{video.snippet.channelTitle}</Card.Subtitle>
        <Card.Text>{video.snippet.description}</Card.Text>
      </Card>
    </>
  )
}

export default VideoPlayer;