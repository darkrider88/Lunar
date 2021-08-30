// this component is the body of the app, everything will be inside this
import Sidebar from "../sidebar";
import "./main.css";
import Header from "../header";
export function Main() {
  return (
    <div className="main">
        {/* <Sidebar /> */}
        <div className="main__sidebar box">
          <Sidebar />
        </div>
        <div className="main__header box">
          <Header avatar = {"https://png.pngtree.com/png-vector/20200614/ourlarge/pngtree-businessman-user-avatar-character-vector-illustration-png-image_2242909.jpg"} />
        </div>
        <div className="main__area box">
          
          
      </div>
        </div>
  );
}
