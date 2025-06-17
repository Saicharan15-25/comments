import ReactPlayer from 'react-player'

import './index.css'

const videoUrl = 'https://youtu.be/YE7VzlLtp-4'

const VideoPlayer = () => (
  <div className='videocontainer'>
    <ReactPlayer
      url={videoUrl}
      controls
      width="100%"
      className="video-player"
    />
    <h1 className='headername'>Big Buck Bunny</h1>
    <p className='videoname'>8,100,195 views - May 29, 2008</p>
    <hr className='videoline' />
  </div>
)

export default VideoPlayer
