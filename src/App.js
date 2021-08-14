import "./App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./redux/actions/auth.action";
import { useSelector } from "react-redux";

function App() {
  const loggedIn = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login());
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="App">
      {loggedIn ? (
        <div>
          <h1>hello world</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please log in</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
