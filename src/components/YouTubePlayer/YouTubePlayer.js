// YouTubePlayer.js //

import './YouTubePlayer.css';
import React from 'react';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';

export default function YouTubePlayer({id}) {

  const opts = {
    height: '225',
    width: '400',
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={id} opts={opts} />;
};

YouTubePlayer.propTypes = {
  id: PropTypes.string.isRequired
};