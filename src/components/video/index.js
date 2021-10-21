import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "./video.css";

import Player from "./Player";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
function Video() {
  let query = useQuery();
  let term = query.get("videoId");
  return (
    <div className="video">
      <Player />

      {/* comments section */}
      <div className="comments-container"></div>
    </div>
  );
}

export default Video;
