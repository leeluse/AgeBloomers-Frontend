import React from 'react';
import YouTube from 'react-youtube';

const YoutubeVideo = (props) => {
  
  // YouTube 동영상의 옵션 설정
  const opts = {
    height: '580',
    width: '780',
    playerVars: {
      autoplay: 1, // 자동 재생 여부 (1: 자동 재생)
    },
  };

  // YouTube 동영상의 ID
  const videoId = `${props.urlOption}`; // 원하는 동영상 ID로 변경
  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YoutubeVideo;
