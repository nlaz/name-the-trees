import { Component } from "react";
import ReactMapGL from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 40.6968,
      longitude: -74.006,
      zoom: 12
    }
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/nlaz/cjq8ujep2dnem2rntfjo44tjy/draft"
        mapboxApiAccessToken="pk.eyJ1IjoibmxheiIsImEiOiJjanE4dDY4Mm0wejIyM3hsMTFxMGluOWJoIn0.B2eAKqIcd9V9aQLDxSLCDg"
        onViewportChange={viewport => this.setState({ viewport })}
        {...this.state.viewport}
      />
    );
  }
}

export default Map;
