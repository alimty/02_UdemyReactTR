import React, { Component } from 'react'
import PropTypes from 'prop-types';

class User extends Component {

  state = {
    isVisible : false
  }
  static defaultProps = {
    name : "No info for name",
    salary : "No info for salary",
    department : "No info for department"
  }
<<<<<<< HEAD

  onClickEvent = (e) => {
    this.setState({
      isVisible : !this.state.isVisible
    })
  }

  render() {
      // Destructing
      const {name, salary, department} = this.props;
      const {isVisible} = this.state;
      return (
        <div className = "col-md-8 mb-4" >
          <div className="card">
            <div className="card-header d-flex justify-content-between">

              <h4 className = "d-inline" onClick = {this.onClickEvent.bind(this, 'Some Info data 90')} > {name} </h4>
              <i className = "far fa-trash-alt" style = {{ cursor: "pointer"}} ></i>
            </div>
            {
              isVisible ? <div className="card-body">
              <p className="card-text"> Salary: {salary} </p>
              <p className="card-text"> Department: {department } </p>
              </div> : null
            }

=======


  onClickEvent = (data, e) => {
   console.log(data)
  }

  render() {
      // Destructing
      const {name, salary, department} = this.props;
      const {isVisible} = this.state;
      return (
        <div className = "col-md-8 mb-4" >
          <div className="card">
            <div className="card-header d-flex justify-content-between">

              <h4 className = "d-inline" onClick = {this.onClickEvent.bind(this, 'Some Info data 90')} > {name} </h4>
              <i className = "far fa-trash-alt" style = {{ cursor: "pointer"}} ></i>
            </div>
            {
              isVisible ? <div className="card-body">
              <p className="card-text">Salary: {salary} </p>
              <p className="card-text">Department: {department } </p>
              </div> : null
            }

>>>>>>> 7d6782b97a4b27ff08386c8588d699638fb772f2
          </div>
        </div>
      )
  }
}



User.defaultProps = {
  name : "No info for name",
  salary : "No info for salary",
  department : "No info for department"

}

User.propTypes = {
  name : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired
}

export default User;