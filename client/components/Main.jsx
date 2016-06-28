import React, { Component } from 'react';

class Main extends Component {

  componentDidMount() {
    const mapDiv = document.getElementsByClassName('map');
    let myLatLng;
    const gMap = new google.maps.Map(mapDiv[0], {
      center: { lat: 37.090, lng: -95.712 },
      zoom: 2,
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        myLatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        gMap.panTo(myLatLng);
        gMap.setZoom(13);
      });
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
