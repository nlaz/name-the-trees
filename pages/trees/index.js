import React from "react";

import Meta from "../../components/Meta";
import Navbar from "../../components/Navbar";
import Sidebar from "../../sections/Sidebar";
import MapView from "../../sections/MapView";

const TreesPage = () => (
  <div
    className="container helvetica bg-washed-green flex flex-column"
    style={{ minHeight: "100vh" }}
  >
    <Meta
      title="Name Those Trees"
      description="Name Those Trees is a tree naming service that raises funds for local services."
      path="/trees"
    />
    <Navbar />
    <div className="flex relative" style={{ flex: "1" }}>
      <MapView className="relative" />
      <Sidebar className="absolute" />
    </div>
  </div>
);

export default TreesPage;
