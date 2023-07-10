import './YouTubePlayer.css'
import React from 'react'
import YouTube from 'react-youtube'

const YouTubePlayer = ({id}) => {
    const videoId = `${id}`;

    const opts = {
      height: '225',
      width: '400',
      playerVars: {
        autoplay: 0,
      },
    };

    return <YouTube videoId={id} opts={opts} />;
  }

export default YouTubePlayer;