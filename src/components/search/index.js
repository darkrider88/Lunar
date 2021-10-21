import React from "react";
import "./search.css";
import SearchCard from "./SearchCard.jsx";
import { useLocation } from "react-router";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function Search() {
  let query = useQuery();

  let term = query.get("searchTerm");

  return (
    <div className="search">
      <div className="search__heading">
        <h2>Results</h2>
      </div>
      <div className="search__cards__container">
        <SearchCard
          thumbnail={data.thumbnail}
          title={data.title}
          views={data.views}
          channelImg={data.channelImg}
          channelName={data.channelName}
          channelDescription={data.channelDescription}
        />
        <SearchCard
          thumbnail={data.thumbnail}
          title={data.title}
          views={data.views}
          channelImg={data.channelImg}
          channelName={data.channelName}
          channelDescription={data.channelDescription}
        />
        <SearchCard
          thumbnail={data.thumbnail}
          title={data.title}
          views={data.views}
          channelImg={data.channelImg}
          channelName={data.channelName}
          channelDescription={data.channelDescription}
        />
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

export default Search;
