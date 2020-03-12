import React from "react";

import Map from "../components/Map";

const MapView = ({ className }) => (
  <div className={`${className} bg-light-gray`}>
    <div className="flex items-center h-100 justify-center moon-gray">
      <Map />
    </div>
  </div>
);

export default MapView;
