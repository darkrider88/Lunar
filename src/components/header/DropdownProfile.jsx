import React from 'react'
import { Link } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth.action";


 
function DropdownProfile(props) {
    const dispatch = useDispatch();
    const handleLogout = () => {
      dispatch(logout());
    };
    return (
        <div className={props.isActive?"dropdownProfile":"hide"}>
            <Link to="/profile">
            <div className="dropdownProfile__item">
                My Profile
            </div>
            </Link>
            
            <div onClick={handleLogout}  className="dropdownProfile__item">
               Logout
            </div>

        </div>
    )
}

export default DropdownProfile;