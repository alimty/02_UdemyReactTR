import React, { Component } from 'react';
import User from "./components/User";
import Navbar from "./components/Navbar";
import './App.css';
// import Users from "./components/Users";

class App extends Component {
  state = {

    users: [
      {
        id : 1,
        name : " Jaun Paul Opas",
        salary : "5000",
        department : "IT"
      },
      {
        id : 2,
        name : " Amilie Mamour",
        salary : "10000",
        department : "Sales"
      },
      {
        id : 3,
        name : "Jonas Ginger",
        salary : "5000",
        department : "Production"
      }
    ]
  }

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
