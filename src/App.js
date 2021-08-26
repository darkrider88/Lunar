import "./App.css";
import { useDispatch } from "react-redux";
import { login, logout } from "./redux/actions/auth.action";
import { useSelector } from "react-redux";
import DesktopLogin from "./components/login/DesktopLogin";
import MobileLogin from "./components/login/MobileLogin";

// getting the width of window, to render the login screen
const width = window.innerWidth;
function App() {
  const loggedIn = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const theme = "dark";
  return (
    <div className={theme === "dark" ? "App dark" : "App light"}>
      {loggedIn ? (
        <div> hello welcome</div>
      ) : width > 480 ? (
        <DesktopLogin />
      ) : (
        <MobileLogin />
      )}
    </div>
  );
}

export default App;
