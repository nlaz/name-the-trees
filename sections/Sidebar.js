import React from "react";
import { ChevronsLeft } from "react-feather";

const Step = ({ number, children }) => (
  <div className="flex items-start mv3">
    <div
      className="bg-dark-green white flex items-center justify-center mr3 w-100"
      style={{ width: "30px", height: "30px" }}
    >
      {number}
    </div>
    <p className="f6 mv0 lh-title" style={{ flex: 1 }}>
      {children}
    </p>
  </div>
);

const Sidebar = ({ className, onClose }) => (
  <div className={`bg-washed-green ${className} ph3 pv3 relative`}>
    <h1 className="f4 mb2 relative">Tree Naming Services</h1>
    <p className="f6 mt0 mb4 dark-gray">
      Buy the online naming rights for a tree in New York City and support local
      services.
    </p>
    <div className="bb b--dark-gray w-100" />
    <div className="pv3">
      <Step number="1">
        Find a tree in your local area. One that you really bond with.
      </Step>
      <Step number="2">
        Think of a good name for your tree. Tree puns are particularly helpful.
      </Step>
      <Step number="3">
        Make it official. Name your tree through our tree naming portal.
      </Step>
    </div>
    <div
      className="absolute top-0 right-0 mv2 mh2 pa2 pointer"
      onClick={onClose}
    >
      <ChevronsLeft />
    </div>
  </div>
);

export default Sidebar;
