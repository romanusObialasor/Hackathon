import React from 'react'
import Header from "./Component/Header"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Landing from './Component/Landing'
import "antd/dist/antd.css"
import Slides from './Component/Slides'
import "react-slideshow-image/dist/styles.css";

const App = () => {
  return (
    <BrowserRouter>
       <Header/>
  <Switch>
    <Route exact path="/" component={Landing}/>
    <Route exact path="/slid" component={Slides}/>
  </Switch>
    </BrowserRouter>
  )
}

export default App
