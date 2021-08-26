import "./MobileLogin.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { IconButton } from "@material-ui/core";
import { useState } from "react";

const MobileLogin = () => {
  const [showPrivacyContainer, setShowPrivacyContainer] = useState(false);
  const handleWarningContainer = () => {
    if (showPrivacyContainer) {
      setShowPrivacyContainer(false);
    } else {
      setShowPrivacyContainer(true);
    }
  };
  return (
    <div className="container__outer">
      <div className="container__inner">
        <div className="container__inner__logo">
          <h1>Lunar </h1>
          <PlayArrowIcon
            style={{
              color: "#b108ff",
              height: "30px",
              width: "30px",
              marginTop: "10px"
            }}
          />
        </div>
        <div className="conatiner__inner__welcome">
          <h2>Welcome!</h2>
        </div>
        <div className="conatiner__inner__para1">
          <p>
            Play your favourite videos, share posts with friends and more. Sign
            in to continue.
          </p>
        </div>
        <div className="conatiner__inner__button">
          <button>Log in with Google</button>
        </div>
        <div className="container__inner__dropdown">
          Privacy ?
          <IconButton onClick={handleWarningContainer}>
            {showPrivacyContainer ? (
              <ExpandLessIcon style={{ color: "white", fontSize: "bold" }} />
            ) : (
              <ExpandMoreIcon style={{ color: "white", fontSize: "bold" }} />
            )}
          </IconButton>
        </div>
        <div
          className={
            showPrivacyContainer
              ? "container__inner__privacyText "
              : "container__inner__privacyText hide"
          }
        >
          <p>
            Note: While login you may be prompted with a warning but we assure
            you that your PRIVACY is our PRIORITY!
          </p>
        </div>
        <div className="container__inner__bottomtext">
          <p>Powered by YouTube API</p>
        </div>
      </div>
    </div>
  );
};

export default MobileLogin;
