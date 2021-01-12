import React, { useState, useCallback } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import ShortInfo from "./ShortInfo";

const mapbox_token = process.env.REACT_APP_MAPBOX_TOKEN;
const Map = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 45.5175,
    longitude: -73.58,
    zoom: 12
  });
  const [popup, setPopup] = useState(null);
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
  const Markers = (offer) => {
    return (
      <Marker
        key={offer.id}
        latitude={offer.latitude}
        longitude={offer.longitude}
      >
        <img src="pin.png" height="25" onClick={() => setPopup(offer)} />
      </Marker>
    );
  };
  const showPopup = () => {
    return (
      popup && (
        <Popup
          className="map-popup"
          tipSize={5}
          anchor="top"
          longitude={popup.longitude}
          latitude={popup.latitude}
          closeOnClick={false}
          onClose={() => setPopup(null)}
        >
          <ShortInfo popup={popup} />
        </Popup>
      )
    );
  };
  
  return (
    <div>
      <div style={{ height: "100vh" }}>
        <ReactMapGL
          {...viewport}
          width="100%"
          height="100%"
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken={mapbox_token}
        >
          {props.offers.map(Markers)}
          {showPopup()}
        </ReactMapGL>
      </div>
    </div>
  );
};

export default Map;
