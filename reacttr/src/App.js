import React, { Component } from 'react';
import User from "./components/User";
import Navbar from "./components/Navbar";
import './App.css';

class App extends Component {

  render () {


    return (
      <div className="container" >
       <Navbar title = "This data coming from App.js fro 1st Navbar" />
       <hr/>
       <User
        name = "Karl"
        department = "Science"
        salary = "50k"
        />
       <hr/>
       <User
        name = "Hegel"
        salary = "1k"
        department = "Philosophy"
       />

      </div>
  );
  }
}

export default App;
