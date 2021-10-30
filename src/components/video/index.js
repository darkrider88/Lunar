import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "./video.css";
import { AddComment, DisplayComment } from "./Comment";
import Player from "./Player";
import SearchCard from "../search/SearchCard";

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
      <div className="comments__container">
        <div className="comment__heading">
          <h2>Comments</h2>
        </div>
        <AddComment/>
        <DisplayComment username="Shashwat Pandey" timestamp="4 hours ago" comment="Binod"/>
      </div>
      {/* Related Videos */}
      <div className="relatedVideos__container">
        <div className="relatedVideos__heading">
          <h2>Related Videos</h2>
        </div>
        <div className="relatedVideos__cards">
          <SearchCard
            thumbnail={data.thumbnail}
            title={data.title}
            views={data.views}
            channelImg={data.channelImg}
            channelName={data.channelName}
            channelDescription={data.channelDescription}
          />
        </div>
      </div>
    </div>
  );
}


const data = {
  title: "K'NAAN-Wavin' Flag (Coca-Cola Celebration Remix)",
  thumbnail:
    "https://cdn.pixabay.com/photo/2021/08/23/17/53/cat-6568422_960_720.jpg",
  views: "1.2B views 9 years ago",
  channelImg:
    "https://png.pngtree.com/png-vector/20200614/ourlarge/pngtree-businessman-user-avatar-character-vector-illustration-png-image_2242909.jpg",
  channelName: "Google is good",
  channelDescription:
    "The song has already captured the heart of the nation, now watch Sidharth Malhotra and Kiara Advani talk about what went behind the making of Raataan Lambiyan, and why it plays such a special role in the love story of Captain Vikram Batra a.k.a Shershaah.",
};

export default Video;
