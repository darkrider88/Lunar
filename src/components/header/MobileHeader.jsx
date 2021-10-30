import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import { useState, useRef, useEffect } from "react";
import { sidebarOpen } from "../../redux/actions/sidebar.action";
import { useDispatch } from "react-redux";
import DropdownProfile from "./DropdownProfile";
import "./mobileHeader.css";
import { useHistory } from 'react-router-dom'

function MobileHeader() {
  const [showSearch, setShowSearch] = useState(false);
  const [dropdown,setDropdown] = useState(false);

  // autofucs the search input
  const searchInput = useRef(null);
  useEffect(() => {
    if (searchInput.current) {
      searchInput.current.focus();
    }
  }, [showSearch]);

  // open sidebar onClick
  // const active = useSelector((state) => state.sidebar.isActive);
  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(sidebarOpen());
  };

   // activate dropdown on click
   const handleDropdown = () =>{
    dropdown? setDropdown(false):setDropdown(true);
  }

  // detecting url change to close the dropdown when page is changed
  const history = useHistory() 

   useEffect(() => {
      return history.listen((location) => { 
         setDropdown(false)
      }) 
   },[history])

  return (
    <div>
      <div
        className={`header_mobile ${showSearch ? "curve-border_mobile" : ""}`}
      >
        <div className={`menu_mobile ${showSearch ? "hide" : ""}`}>
          <IconButton style={{ padding: "0px" }} onClick={handleSidebar}>
            <MenuIcon
              style={{ color: "white", height: "30px", width: "30px" }}
            />
          </IconButton>
          <div className="logo_mobile">Lunar</div>
          <div className="right-h_mobile">
            <IconButton
              onClick={() => setShowSearch(true)}
              style={{ padding: "0px" }}
            >
              <SearchIcon
                style={{ color: "white", height: "28px", width: "28px" }}
              />
            </IconButton>
            <IconButton onClick={handleDropdown}>
            <AccountCircleIcon
              style={{ color: "white", height: "35px", width: "35px" }}
            />
            </IconButton>
          </div>
          <DropdownProfile isActive={dropdown}/>
        </div>
        <div className={`header-search_mobile ${showSearch ? "" : "hide"}`}>
          <SearchIcon
            style={{ color: "white", height: "28px", width: "28px" }}
          />

          <input
            ref={searchInput}
            className="search-input_mobile"
            placeholder="Search your videos..."
          />
          <IconButton
            style={{ padding: "0px" }}
            onClick={() => setShowSearch(false)}
          >
            <ClearIcon
              style={{
                color: "white",
                height: "30px",
                width: "30px",
                // marginLeft: "50px"
              }}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
