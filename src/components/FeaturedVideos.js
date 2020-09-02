import React from "react";
import "../css/featuredVideos.css";

function FeaturedVideos() {
  return (
    <div className="featured-videos-container">
      <div className="youtube-container">
        <iframe
          src="https://www.youtube.com/embed/gw3u9Q1PvA0"
          title="YoutubeClip1"
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen="true"
        ></iframe>
      </div>
      <div className="twitch-container">
        <iframe
          src="https://clips.twitch.tv/embed?clip=BreakableColdRaisinDerp&parent=hopollo.netlify.app&autoplay=false&muted=true"
          title="TwitchClip1"
          frameBorder="0"
          allowFullscreen="true"
          scrolling="no"
        ></iframe>
      </div>
      <div className="mixer-container">
        <iframe
          src="https://clips.twitch.tv/embed?clip=AltruisticPlausibleSashimiTwitchRaid&parent=hopollo.netlify.app&autoplay=false&muted=true"
          title="TwitchClip2"
          frameBorder="0"
          allowFullscreen="true"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}

export default FeaturedVideos;
