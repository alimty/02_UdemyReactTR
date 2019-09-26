import React from "react";


const Navbar = (props) => {

  return (
    <div>
      <h3 className="bg-warning text-white row mt-4" > {props.title} <br/> User App Navbar this time</h3>
      <h3>{props.title }, <br/> Navbar with props: Properties</h3>
    </div>
  )

}

export default Navbar;
// export default Navbar02;