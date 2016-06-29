import React, { Component } from 'react';

class Main extends Component {

  // As soon as the user arrives to the Home page,
  // Ubication renders a map and drops a pin on the
  // user's current location

  componentDidMount() {
    let myLatLng;

    const mapDiv = document.getElementsByClassName('map');
    const gMap = new google.maps.Map(mapDiv[0], {
      center: { lat: 37.090, lng: -95.712 },
      zoom: 2,
    });

    // If the user's browser has 'current location' capability,
    // the Map orients to the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        myLatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        console.log('this is latlng', myLatLng);
        gMap.panTo(myLatLng);
        gMap.setZoom(13);
      });

      (function() {
        const marker = new google.maps.Marker({
          position: myLatLng,
          map: gMap,
          animation: google.maps.Animation.DROP,
        });    
        console.log('dog');    
      })();

    } else {

      alert('Looks like your settings prevent us from finding your location! :(');

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
