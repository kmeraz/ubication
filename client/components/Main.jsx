import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index.js';


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
        title: 'Current Location',
      });
    });

    const mapDiv = document.getElementsByClassName('map');
    const gMap = new google.maps.Map(mapDiv[0], {
      center: { lat: 37.7699355, lng: -122.4491386 },
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
        this.props.updateCurrentLocation(currentLocation);
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

const mapStateToProps = (state) => {
  return {
    currentLocation: state.currentLocation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveClick: (place, user) => {
      console.log(place, user);
      axios({
        method: 'post',
        url: '/api/places',
        data: {
          user: user,
          place: place,
        },
      });
    },

    updateCurrentLocation: (currentLocation) => {
      dispatch(actions.updateCurrentLocation(currentLocation));
    },
  };
};

Main.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
  updateCurrentLocation: PropTypes.func.isRequired,
  currentLocation: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Main);
