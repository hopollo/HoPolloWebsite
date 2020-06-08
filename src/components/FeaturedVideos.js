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
          src="https://clips.twitch.tv/embed?clip=CalmFrigidGaragePraiseIt&parent=hopollo.netlify.com&autoplay=false&muted=true"
          title="TwitchClip1"
          frameBorder="0"
          allowFullscreen="true"
          scrolling="no"
        ></iframe>
      </div>
      <div className="mixer-container">
        <iframe
          src="https://clips.twitch.tv/embed?clip=BlindingRelievedCodTwitchRaid&parent=hopollo.netlify.com&autoplay=false&muted=true"
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
