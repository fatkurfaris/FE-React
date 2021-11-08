// import './App.css';
// import Home from './page/home/Home';
// import Profile from './page/profile/Profile';
// import { BrowserRouter , Switch , Route} from "react-router-dom"
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Nav";
import Todos from "./page/todoList";
import AboutApp from "./page/AboutApp";
import AboutAuthor from "./page/AboutAuthor";
import NotFound from "./page/notfound";


function App() {
  return (
    // <BrowserRouter>
    // <Switch>
    //   <Route path="/" exact component={Home}/>
    //   <Route path="/profile/:name" component={Profile}/>
    // </Switch>
    // </BrowserRouter>
    <Router>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Todos} />
        <Route path="/about/about-app" component={AboutApp} />
        <Route path="/about/about-author" component={AboutAuthor} />
        <Route component={NotFound} />
    </Switch>
</Router>
    
  );
}

export default App;
