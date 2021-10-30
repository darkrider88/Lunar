import React, { useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReactPlayer from "react-player";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function Player() {
  const [hideDescription, setHideDescription] = useState(false);
  const [like, setLike] = useState(false);
  const [fav, setFav] = useState(false);

  const handleLike = () => {
    like ? setLike(false) : setLike(true);
  };
  const handleFav = () => {
    fav ? setFav(false) : setFav(true);
  };
  return (
    <>
      <div className="video__display">
        <ReactPlayer
          className="react-player"
          config={{
            youtube: {
              playerVars: { showinfo: 0, autoPlay: 0, rel: 0 },
            },
          }}
          controls
          width="100%"
          height="100%"
          playIcon={<button>Play</button>}
          // light={true}
          url="https://www.youtube.com/watch?v=K5KAc5CoCuk"
        />
      </div>
      {/* text */}
      <div className="video__details">
        <div className="video__details__wrapper">
          <div className="video__details__left">
            <div className="video__details__left__title">
              <p>
                Best indoor plants for dim light condition Best indoor plants
                for dim light condition Best indoor plants for dim light
                condition
              </p>
            </div>
            <div className="video__details__left__channel">
              <div style={{ display: "flex",alignItems:"center"}}>
                <div className="video__details__left__channel__avatar">
                  <img
                    src="https://cdn.pixabay.com/photo/2021/09/28/05/05/bird-6663217__340.jpg"
                    alt=""
                  />
                </div>
                <div className="video__details__left__channel__channelname">
                  <p>Sample Channel Name</p>
                </div>
              </div>
              
                <div
                  className={fav ? "subscribe_btn" : "subscribe_btn bg-purple"}
                  onClick={handleFav}
                >
                  {fav ? "Added" : "Favourite"}
                
              </div>
            </div>
          </div>
          <div className="video__details__right">
            <div className="video__details__right__heart">
              <IconButton onClick={handleLike} className="iconbutton">
                {like ? (
                  <FavoriteIcon style={{ color: "red" }} />
                ) : (
                  <FavoriteBorderIcon style={{ color: "white" }} />
                )}
              </IconButton>
              <div className="">1M Likes</div>
            </div>
            <div className="expand-svg">
              <IconButton
                className="iconbutton"
                onClick={() =>
                  hideDescription
                    ? setHideDescription(false)
                    : setHideDescription(true)
                }
              >
                {hideDescription ? (
                  <ExpandLessIcon style={{ color: "white" }} />
                ) : (
                  <ExpandMoreIcon style={{ color: "white" }} />
                )}
              </IconButton>
            </div>
          </div>
        </div>

        <div
          className={
            hideDescription ? "video__description" : "hide_description"
          }
        >
          Gulshan Kumar Present's Bhushan Kumar's and Shyam Bajaj's 'ALL IS
          WELL' directed by Umesh Shukla. Presenting 'Mere Humsafar' Full AUDIO
          Song in the voice of Mithoon & Tulsi Kumar from bollywood movie All Is
          Well starring Abhishek Bachchan, Rishi Kapoor, Asin Thottumkal,
          Supriya Pathak in lead roles exclusively on T-Series. Gulshan Kumar
          Present's Bhushan Kumar's and Shyam Bajaj's 'ALL IS WELL' directed by
          Umesh Shukla. Presenting 'Mere Humsafar' Full AUDIO Song in the voice
          of Mithoon & Tulsi Kumar from bollywood movie All Is Well starring
          Abhishek Bachchan, Rishi Kapoor, Asin Thottumkal, Supriya Pathak in
          lead roles exclusively on T-Series.
        </div>
      </div>
    </>
  );
}

export default Player;
