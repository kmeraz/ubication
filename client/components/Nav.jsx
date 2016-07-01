import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import FontIcon from 'material-ui/FontIcon';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import MenuItem from 'material-ui/MenuItem';

class Nav extends Component {

  render() {
    return (
      <AppBar className="appBar"
        title="Ubication"
        style={{ color: 'white' }}
        iconElementLeft={<i className="fa fa-car fa-2x" aria-hidden="true"></i>}
        iconElementRight={
              <IconMenu
                iconButtonElement={
                  <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <MenuItem primaryText="Save Pin" onTouchTap={() => console.log('oz') } />
                <MenuItem primaryText="Refresh" onTouchTap={() => console.log('refreshing') } />
                <MenuItem primaryText="Sign out" onTouchTap={() => console.log('signing out') } />
              </IconMenu>
            }
      />
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     currentLocation: state.currentLocation,
//   };
// };


// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSaveClick: (place, user) => {
//       axios.post('/api/places', {
//         data: {
//           user: user,
//           place: place,
//         },
//       });
//     },
//   };
// };

// Nav.propTypes = {
//   onSaveClick: PropTypes.func.isRequired,
//   currentLocation: PropTypes.object,
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
//   )(Nav);

export default Nav;
