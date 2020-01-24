import React from 'react';
import queryString from 'query-string';

export function extractYouTubeId(url = '') {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : '';
}


export default function YouTubeVideo({src, autoPlay, loop}) {
  const id = extractYouTubeId(src);

  if (!id) {
    return <div />;
  }

  const qs = queryString.stringify({autoplay: autoPlay, loop});

  return (
    <div className="youtube-container">
      <iframe
        title="YouTube"
        frameBorder="0"
        src={`https://www.youtube.com/embed/${id}?${qs}`}
      />
    </div>
  );
}
