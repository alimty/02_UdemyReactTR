import React, { Component } from 'react'

class User extends Component {
  render() {

    // Destructing

const {name, salary, department} = this.props;

    return (
      <div>
        <ul>
          <li>Name: {"==>"+ name}  </li>
          <li>department: {department}  </li>
          <li> Salary: {salary}  </li>
        </ul>
      </div>
    )
  }
}



export default User;