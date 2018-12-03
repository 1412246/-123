import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultPos: {
        lat: 10.7782582,
        lng: 106.6789453
      },
      markers: [
        {
          position: {
            lat: 10.7782582,
            lng: 106.6789453
          }
        }
      ]
    };
  }
  render() {
    const GoogleMapExample = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap defaultCenter={this.state.defaultPos} defaultZoom={17}>
          <Marker
            position={this.state.defaultPos}
            onClick={() => alert("asdsad")}
          />
        </GoogleMap>
      ))
    );
    return (
      <div>
        <GoogleMapExample
          loadingElement={<div style={{ height: `100%` }} />}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
            process.env.REACT_APP_GOOGLE_API_KEY
          }`}
          containerElement={<div style={{ height: `500px`, width: "500px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
export default Map;
