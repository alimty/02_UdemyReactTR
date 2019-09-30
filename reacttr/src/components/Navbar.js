import React from "react";
import PropsTypes from "prop-types";


const Navbar = (props) => {

  return (
    <div>
      <h2 className="bg-warning text-white row mt-4" > {props.title} <br/> User App Navbar this time</h2>
      <h3>{props.title }, <br/> Navbar with props: Properties</h3>
    </div>
  )

}
Navbar.propsTypes = {
title: PropsTypes.string.isRequired
}
Navbar.defaultProps = {
  title: "Default App"
}

export default Navbar;
// export default Navbar02;