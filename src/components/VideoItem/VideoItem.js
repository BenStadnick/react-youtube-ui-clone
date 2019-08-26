import React, {useState, useRef, useEffect}  from 'react';
import Card from 'react-bootstrap/Card'
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
  const ref = useRef(null);

  const [elemWidth, setElemWidth] = useState(0);

  const resize = () => { // need to throttle
    setElemWidth(ref.current ? ref.current.offsetWidth : 0);
  }

  useEffect(() => {
    window.addEventListener('resize', resize);
    setElemWidth(ref.current ? ref.current.offsetWidth : 0);
  }, []);

  if(!video) return <div>Unalbe to load video</div>

  return (
    <Card className='VideoItemCard' onClick={() => onVideoSelect(video)}>
      <Card.Body>
        <div ref={ref} className='ImageContainer'>
          <img style={{ maxHeight: `${elemWidth*0.5625}px`, maxWidth: `${elemWidth}px` }} src={video.snippet.thumbnails.medium.url} alt="Unable to load thumbnail" />
        </div>
        <Card.Text>{video.snippet.title}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default VideoItem;