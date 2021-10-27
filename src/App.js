
import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom" 
import NewUser from "./Esther/UserSign"
import Company from "./Fedrick/Company"
import Admin from "./Fedrick/AdminSignin"

const App = () => {
  return (
   <BrowserRouter>
   <Switch>
     <Route exact path="/User" component={NewUser}/>
     <Route exact path="/companyRegister" component={Company}/>
     <Route exact path="/admin" component={Admin}/>
   </Switch>
   </BrowserRouter>
  )
}

export default App
