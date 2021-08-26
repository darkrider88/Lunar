import React from "react";
import "./theme-switch.css";
function ThemeSwitch() {
  return (
    <>
      <label className="switch">
        <input type="checkbox" defaultChecked />
        <span className="slider round"></span>
      </label>
    </>
  );
}

export default ThemeSwitch;
