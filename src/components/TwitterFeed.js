import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import '../css/twitter.css';

function TwitterFeed() {
  return (
    <div className="twitter-feed">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="hopollotv"
        noHeader
        noFooter
        theme="dark"
      />
    </div>
  );
}

export default TwitterFeed;
