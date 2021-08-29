// this component is the body of the app, everything will be inside this
import Sidebar from "../sidebar";
import "./main.css";
export function Main() {
  return (
    <div className="main">
      {/* <div className="main__sidebar"> */}
        <Sidebar />
      {/* </div> */}
    </div>
  );
}
