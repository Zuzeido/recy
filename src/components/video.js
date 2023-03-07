import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';


function video() {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts: YouTubeProps['opts'] = {

        height: '300',
        width: '95%',
        playerVars: {
          autoplay: 1,
        },
      };
    
      return <YouTube videoId="V4AAOJfnVY0" opts={opts} onReady={onPlayerReady} className="video" style={{"display": "flex","flex-wrap": "nowrap","justify-content": "center"}}/>;
    }
export default video