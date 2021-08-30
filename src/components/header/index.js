import "./header.css";
import SearchIcon from '@material-ui/icons/Search';
import ThemeSwitch from "../themeSwitch";
import {useState} from 'react'

function Header (props) {
    const [focus, setFocus] = useState(false);
    return(
        <div className="header">
            <div className={focus?"header__searchBar focused":"header__searchBar"}>
                <SearchIcon style={{color:focus?'var(--font-light)':'var(--font-lighter)'}}/>
                <input onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} type='text' placeholder="Search your fantasies..."/>
            </div>
            <div className="header__themeSwitch">
                <ThemeSwitch/>
            </div>
            <div className="header__avatar">
                <img src={props.avatar}/>
            </div>
        </div>
    )
}
export default Header;
