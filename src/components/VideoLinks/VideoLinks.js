import './VideoLinks.css';

function VideoLinks({ videos }) {
  console.log('videos', videos);
  const buttons = videos.map((video) => {
    return (
      <form>
        <button formAction={`https://www.youtube.com/watch?v=${video.key}&list=LL`}>{video.type}</button>
      </form>
    );
  });

  return <div className="button-container">{buttons}</div>;
}

export default VideoLinks;
