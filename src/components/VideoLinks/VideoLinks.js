import './VideoLinks.css';
import YouTubePlayer from '../YouTubePlayer/YouTubePlayer';


function VideoLinks({ videos }) {
  const buttons = videos.map((video) => {
    return (
      <div className='youtube-video'>
        <YouTubePlayer id={video.key} />
      </div>
    );
  });

  return <div className="button-container">{buttons}</div>;
}

export default VideoLinks;
