import React from "react";
import "./theme-switch.css";
function ThemeSwitch() {
  return (
    <div title="Click to see the magic !">
      <label className="switch">
        <input type="checkbox" defaultChecked />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default ThemeSwitch;
