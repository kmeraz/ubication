import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import actions from '../actions/index.js';


class Nav extends Component {

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.modalClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.props.submitWithinModal}
      />,
    ];

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
                <MenuItem primaryText="Save Pin" onTouchTap={this.props.modalOpen} />
                 <div>
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.props.modalState}
                  >
                  <TextField
                    hintText=""
                    floatingLabelText="Make a note for yourself!"
                  />
                  </Dialog>
                  </div>
                <MenuItem primaryText="Refresh" onTouchTap={() => console.log('refreshing') } />
                <MenuItem primaryText="Sign out" onTouchTap={() => console.log('signing out') } />
              </IconMenu>
            }
      />
    );
  }
}

const mapStateToProps = (state) => {
  console.log('this is state', state.home.lat, state.home.lng);
  return {
    currentLocation: state.home.currentLocation,
    modalState: state.home.modalState,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    onSaveClick: (userId, myLatLng, note) => {

      axios.post('http:localhost:8080/api/places', {
        data: {
          userId: userId,
          myLatLng: place,
          note: note,
        },
      });
    },

    modalOpen: () => {
      dispatch(actions.modalSetState(true));
    },

    modalClose: () => {
      dispatch(actions.modalSetState(false));
    },

    submitWithinModal: (state) => {
      console.log('this is state inside of setModalState', state);
      dispatch(actions.modalSubmit(state));
    },

  };
};

Nav.propTypes = {
  currentLocation: PropTypes.object,
  onSaveClick: PropTypes.func.isRequired,
  modalState: PropTypes.bool,
  modalOpen: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  submitWithinModal: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Nav);
