import "./App.css";
import { Main } from "./components/main";
import { useSelector } from "react-redux";
import DesktopLogin from "./components/login/DesktopLogin";
import MobileLogin from "./components/login/MobileLogin";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// getting the width of window, to render the login screen
const width = window.innerWidth;
function App() {
  const loggedIn = useSelector((state) => state.auth.accessToken);

  const theme = "dark";
  return (
    <div className={theme === "dark" ? "App dark" : "App light"}>
      {loggedIn ? <Main /> : width > 480 ? <DesktopLogin /> : <MobileLogin />}
    </div>
  );
}

export default App;
