import React from 'react';
import slideshow from '../assets/slideshow.mp4';

const VideoSlideshow = () => {
  return (
    <div className="w-full aspect-video max-h-[80vh] overflow-hidden">
      <video 
        className="w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={slideshow} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSlideshow;