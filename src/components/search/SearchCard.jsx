import React from "react";
import "./searchCard.css";
import { EllipsisText } from "react-ellipsis-text";
function SearchCard(props) {
  return (
    <div className="searchCard">
      <div className="searchCard__thumbnail">
        <img src={props.thumbnail} alt="" />
      </div>
      <div className="searchCard__text">
        <div className="searchCard__text__title">{props.title}</div>
        <div className="searchCard__text__views">{props.views}</div>
        <div className="searchCard__text__channel">
          <div className="searchCard__text__channelImage">
            <img src={props.channelImg} alt="" />
          </div>
          <div className="searchCard__text__channelname">
            {props.channelName}
          </div>
        </div>
        <div className="searchCard__text__discription">
          {props.channelDescription}
          {/* <EllipsisText  text={props.channelDescription} length={50}/> */}
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
