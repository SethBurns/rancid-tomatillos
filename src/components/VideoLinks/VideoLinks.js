// VideoLinks.js //

import './VideoLinks.css';
import YouTubePlayer from '../YouTubePlayer/YouTubePlayer';
import PropTypes from 'prop-types';

export default function VideoLinks({ videos }) {
  
  const filteredVideos = videos.filter((video) => video.type === 'Trailer');
  
  const renderedVideos = filteredVideos.map((video) => {
    return (
      <div className='youtube-video' key={video.key}>
        <YouTubePlayer id={video.key} />
      </div>
    );
  });
  return <div className="button-container">{renderedVideos}</div>;
};

VideoLinks.propTypes = {
  videos: PropTypes.array.isRequired
};


