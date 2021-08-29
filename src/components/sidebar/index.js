import "./sidebar.css";
import EllipsisText from "react-ellipsis-text";
import HomeIcon from "@material-ui/icons/Home";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

import VideocamIcon from "@material-ui/icons/Videocam";
import ClearIcon from "@material-ui/icons/Clear";
import ThemeSwitch from "../themeSwitch";
import IconButton from "@material-ui/core/IconButton";

function Favourite({ name }) {
  return (
    <div className="sidebar__body__fav__inner__img__text link_hover">
      <img
        alt=""
        src={`https://ui-avatars.com/api/?name=${name}&background=random`}
      />
      <p>
        <EllipsisText text={name} length={18} />
      </p>
    </div>
  );
}

function Sidebar() {
  return (
    
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__top__mobile">
          <div className="sidebar__switch">
            <ThemeSwitch />
          </div>
          <div className="sidebar__close">
            <IconButton>
              <ClearIcon
                style={{ width: "30px", height: "30px", color: "white" }}
              />
            </IconButton>
          </div>
        </div>
        <div className="sidebar__top__logo">
          <h1>Lunar</h1>
        </div>
      </div>

      <div className="sidebar__body">
        <div className="sidebar__body__links">
          <div className="sidebar__body__links__home link_hover">
            <HomeIcon />
            <p className="sidebar__body__links__text">Home</p>
          </div>
          <div className="sidebar__body__links__trending link_hover">
            <TrendingUpIcon />
            <p className="sidebar__body__links__text">Trending</p>
          </div>
          <div className="sidebar__body__links__subscription link_hover">
            <VideocamIcon />
            <p className="sidebar__body__links__text">Subscription</p>
          </div>
        </div>

        <div className="sidebar__body__fav">
          <h4>Your Favourites</h4>

          <div className="sidebar__body__fav__inner">
            <Favourite name="Shashwat Pandey" />
            <Favourite name="Priyanshi Meghwani" />
            <Favourite name="Saumya Singh" />
            <Favourite name="Saumya Singh" />
            <Favourite name="Saumya Singh" />
          </div>
        </div>
        <div className="sidebar__body__aboutus ">
          <h4 className="link_hover">About Us</h4>
        </div>
        <div className="sidebar__body__copyright">
          <p className="copyright">© Copyright 2021</p>
        </div>
      </div>
    </div>
    
  );
}

export default Sidebar;
