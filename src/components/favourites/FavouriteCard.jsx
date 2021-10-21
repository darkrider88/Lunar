import React from "react";
import EllipsisText from "react-ellipsis-text";
function FavouriteCard(props) {
  return (
    <div className="favouriteCard">
      <div className="favouriteCard__thumbnail">
        <img alt="" src={props.img} />
      </div>
      <div className="favouriteCard__name">
        <EllipsisText text={props.name} length={30} />
      </div>
      <div className="favouriteCard__favs">{props.favs}</div>
      <div className="favouriteCard__added">Added</div>
    </div>
  );
}

export default FavouriteCard;
