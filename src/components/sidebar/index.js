import "./sidebar.css";
import EllipsisText from "react-ellipsis-text";
import HomeIcon from "@material-ui/icons/Home";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

import VideocamIcon from "@material-ui/icons/Videocam";
import ClearIcon from "@material-ui/icons/Clear";
import ThemeSwitch from "../themeSwitch";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { useSelector } from "react-redux";
import { sidebarClose} from '../../redux/actions/sidebar.action'
import { useDispatch } from "react-redux";

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
  const mobileSidebarActive = useSelector((state) => state.sidebar.isActive);
  const dispatch = useDispatch();
    const handleSidebar = () =>{
        
            dispatch(sidebarClose())
        
    }

  return (
    
    <div className={mobileSidebarActive?"sidebar":"sidebar hideSidebar"}>
      <div className="sidebar__top">
        <div className="sidebar__top__mobile">
          <div className="sidebar__switch">
            <ThemeSwitch />
          </div>
          <div className="sidebar__close">
            <IconButton>
              <ClearIcon
                style={{ width: "30px", height: "30px", color: "white" }}
                onClick={handleSidebar}
              />
            </IconButton>
          </div>
        </div>
        <div className="sidebar__top__logo">
          <h1>Lunar</h1>
          <PlayArrowIcon
            style={{
              color: "#b108ff",
              height: "40px",
              width: "40px",
              marginTop: "10px",
            }}
          />
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
            <p className="sidebar__body__links__text">Popular</p>
          </div>
          <div className="sidebar__body__links__subscription link_hover">
            <VideocamIcon />
            <p className="sidebar__body__links__text">Favourites</p>
          </div>
          <div className="sidebar__body__links__feed link_hover">
            <PhotoLibraryIcon />
            <p className="sidebar__body__links__text">Feed</p>
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
