import {Component} from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {
    state = {
        viewport: {
            width: '100vw',
            height: '100vh',
            latitude: 40.6968,
            longitude: -74.006,
            zoom: 12
        }
    };

    render() {
        return (
            <ReactMapGL
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxApiAccessToken="pk.eyJ1IjoibmVuZ21hbm4iLCJhIjoiY2s3bnd1MjFiMDFwaTNmcHBzMjVpeWozaSJ9.MFhAt_GAcAo7COLtd5Z-eA"
                onViewportChange={(viewport) => this.setState({viewport})}
                {...this.state.viewport}
            />
        );
    }
}

export default Map;