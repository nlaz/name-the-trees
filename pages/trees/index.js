import React, { useState } from "react";

import Meta from "../../components/Meta";
import Navbar from "../../components/Navbar";
import Sidebar from "../../sections/Sidebar";
import MapView from "../../sections/MapView";

const TreesPage = () => {
  const [isOpen, setOpen] = useState(true);

  return (
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
        <Sidebar
          className="w-25 br absolute top-0 bottom-0 left-0 right-0"
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
};

export default TreesPage;
