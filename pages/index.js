import React from "react";

import Meta from "../components/Meta";
import Navbar from "../components/Navbar";
import Emoji from "../components/Emoji";

const Home = () => (
  <div
    className="container helvetica bg-washed-green flex flex-column"
    style={{ minHeight: "100vh" }}
  >
    <Meta
      title="Name Those Trees"
      description="Name Those Trees is a tree naming service that raises funds for local services."
      path="/"
    />
    <Navbar />
    <div className="flex flex-column w-100 ba mw6 center mt6 br1 pv4 ph3">
      <Emoji size={45} value="🌳" className="center" />
      <h1 className="f4 tc mb2">Tree Naming Services</h1>
      <p className="tc lh-copy mt0 mb4">
        Buy the online naming rights for a tree in New York City and support
        local services.
      </p>
      <label className="mb2 fw5 f6">Find your tree</label>
      <input
        className="h6 mb4 pv2 ph2 bg-washed-green ba search"
        placeholder="Search your address.."
      />
    </div>
  </div>
);

export default Home;
