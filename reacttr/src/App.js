import React, { Component } from 'react';
import User from "./components/User";
import Navbar from "./components/Navbar";
import './App.css';

class App extends Component {

  render () {


    return (
      <div className="container" >
       <h4>App Component opps</h4>
       <p> Some some some things etc  </p>
       <Navbar title = "This data from App.js" />
       <hr/>
       <h4> App Component opps</h4>
       <User
        name = "Karl"
        salary = "50k"
        department = "Science"
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
