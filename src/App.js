import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import HeaderNav from "./components/Header/HeaderNav";
import UserOverview from "./Judith/Admin/Overview/AdminOverview";
import AdminOverview from "./Judith/Admin/Overview/AdminOverview";
import Member from "./Judith/Admin/Member";
import AdminSetting from "./Judith/Admin/AdminSetting";
import UserSetting from "./Judith/User/UserSetting";
import AdminCreateProject from "./Judith/Admin/AdminCreateProject";
import UserCreateProject from "./Judith/User/UserCreateProject";
import NewUser from "./Esther/UserSign";
import Company from "./Fedrick/Company";
import Admin from "./Fedrick/AdminSignin";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/userover" component={UserOverview} />
        <Route exact path="/adminover" component={AdminOverview} />
        <Route exact path="/admincreate" component={AdminCreateProject} />
        <Route exact path="/usercreate" component={UserCreateProject} />
        <Route exact path="/member" component={Member} />
        <Route exact path="/adminsetting" component={AdminSetting} />
        <Route exact path="/usersetting" component={UserSetting} />
        <Route exact path="/User" component={NewUser} />
        <Route exact path="/register" component={Company} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
