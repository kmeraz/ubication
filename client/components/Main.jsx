import React, { Component } from 'react';

class Main extends Component {

  // As soon as the user arrives to the Home page,
  // Ubication renders a map and drops a pin on the
  // user's current location

  componentDidMount() {
    let currentLocation;
  
    const currentLocationMarker = ((currentLocation) => {
      const marker = new google.maps.Marker({
        map: gMap,
        position: currentLocation,
        animation: google.maps.Animation.BOUNCE,
      });
    });

    const mapDiv = document.getElementsByClassName('map');
    const gMap = new google.maps.Map(mapDiv[0], {
      center: { lat: 37.090, lng: -95.712 },
      zoom: 2,
    });


    // If the user's browser has 'current location' capability,
    // the Map orients to the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        gMap.panTo(currentLocation);
        gMap.setZoom(13);
        currentLocationMarker(currentLocation);
      });
    } else {
      alert('Looks like your settings prevent us from finding your location! Please change your browser settings');
    }
  }

  render() {
    return (
      <div className="map">
      </div>
    );
  }
}

export default Main;
