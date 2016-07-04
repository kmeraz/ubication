import React,  { Component } from 'react';

import { connect } from 'react-redux';

class MyPins extends Component {

  componentDidMount() {


    const mapDiv = document.getElementsByClassName('map');
    const gMap = new google.maps.Map(mapDiv[0], {
      center: { lat: 37.769926, lng: -122.4491777 },
      zoom: 12,
    });

    this.props.places.map((place) => {
      const marker = new google.maps.Marker({
        map: gMap,
        position: {
          lat: place.latitude,
          lng: place.longitude,
        },
        animation: google.maps.Animation.DROP,
        title: place.note,
      });
    });
  }


  render() {
    return (
      <div className="map">
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    places: state.savedPlaces,
  };
};

export default connect(
  mapStateToProps
  )(MyPins);
