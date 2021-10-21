import React from "react";
import FavouriteCard from "./FavouriteCard";
import "./favourite.css";
function Favourites() {
  return (
    <div className="favourites">
      <div className="favourites__heading">
        <h2>Your Favourites</h2>
      </div>
      <div className="favouriteCard__container">
        {data.map((item, i) => (
          <FavouriteCard
            name={item.name}
            favs={item.favs}
            img={item.img}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    name: "Clever Coder",
    favs: "2.5M favs",
    img: "https://cdn.pixabay.com/photo/2021/02/10/05/42/girl-6000962__340.jpg",
  },
  {
    name: "Depressed Debugger decoder",
    favs: "2.8M favs",
    img: "https://cdn.pixabay.com/photo/2021/02/10/05/42/girl-6000962__340.jpg",
  },
  {
    name: "Terrible Tester",
    favs: "1.5M favs",
    img: "https://cdn.pixabay.com/photo/2021/02/10/05/42/girl-6000962__340.jpg",
  },
];

export default Favourites;
