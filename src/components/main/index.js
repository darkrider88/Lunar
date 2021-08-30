// this component is the body of the app, everything will be inside this
import Sidebar from "../sidebar";
import "./main.css";
import Header from "../header";
import Home from '../home'
import { Switch, Route } from "react-router-dom";



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
          <Switch>
            <Route path='/' exact component={Home} ></Route>
            {/* <Route path='/search' component={Search} ></Route>
            <Route path='/posts' component={Posts} ></Route>
            <Route path='/video' component={Video} ></Route> */}
          </Switch>
          
        </div>
    </div>
  );
}
