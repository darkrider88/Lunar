import "./DesktopLogin.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth.action";



const DesktopLogin = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login());
  };


   

  return (
    <div className="outer__container">
      <div className="container">
        <div className="container__black__logo">
          <h1>Lunar </h1>
          <PlayArrowIcon
            style={{
              color: "#b108ff",
              height: "60px",
              width: "60px",
              marginTop: "10px",
            }}
          />
        </div>
        <div className="container2">
          <div className="container__blur">
            <div className="conatiner__blur__welcome">Welcome to Lunar !</div>
            <div className="conatiner__blur__para1">
              <p>
                Play your favourite videos, share posts with friends and more.
                Sign in to continue.
              </p>
            </div>

            <div className="container__blur__privacyText ">
              <p>
                Note: While signing in you may be prompted with a warning but we
                assure you that your PRIVACY is our PRIORITY!
              </p>
            </div>
          </div>
          <div className="container__black">
            <div className="container__black__signin">
              <h2>Jump In</h2>
            </div>
            <div className="conatiner__black__button">
              <button onClick={handleLogin}>Log in with Google</button>
            </div>
            <div className="container__black__bottomtext">
              <p>Powered by YouTube API</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopLogin;
