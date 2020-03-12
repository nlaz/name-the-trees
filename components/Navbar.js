import React from "react";

import Link from "../components/Link";

const Navbar = () => (
  <div className="flex justify-between ph4 pv3 bb">
    <div className="pv1">
      <Link to="/" className="black no-underline">
        <h4 className="fw5 mv0">Name Those Trees</h4>
      </Link>
    </div>
    <div className="pv1">
      <Link to="/trees" className="black no-underline pv3 ph3">
        Explore
      </Link>
      <Link to="/login" className="black no-underline pv3 ph3">
        Login
      </Link>
    </div>
  </div>
);

export default Navbar;
