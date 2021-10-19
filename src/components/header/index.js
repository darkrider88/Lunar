import "./header.css";
import SearchIcon from '@material-ui/icons/Search';
import ThemeSwitch from "../themeSwitch";
import {useState, useEffect} from 'react'
import MobileHeader from './MobileHeader'



function Header (props) {
    const [focus, setFocus] = useState(false);
    const [mobileHeader, setMobileHeader] = useState(false);
    const [screenSize, setScreenSize] = useState(1000)

    // to check the window size and change the header
    useEffect(() =>{
        const handleSize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleSize)

        return () => window.removeEventListener('resize', handleSize) 

    },[])


    useEffect(() => {
        if(screenSize < 760){
            setMobileHeader(true)
        } else{
            setMobileHeader(false)
        }
        console.log(screenSize)
    },[screenSize])

   
    return(
        <>
        {
            mobileHeader ? <MobileHeader/>:
         
        <div className="header">
            <div className={focus?"header__searchBar focused":"header__searchBar"}>
                <SearchIcon style={{color:focus?'var(--font-light)':'var(--font-lighter)'}}/>
                <input onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} type='text' placeholder="Search your fantasies..."/>
            </div>
            <div  className="header__themeSwitch">
                <ThemeSwitch/>
            </div>
            <div className="header__avatar">
                <img src={props.avatar}/>
            </div>
        </div>
        }
        </>
    )
}
export default Header;
