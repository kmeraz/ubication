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
import addPlace from '../controllers/addPlace.js';


class Nav extends Component {


  handleSave() {
    
    this.props.saveWithinModal(this.props.user,
      this.props.currentLocation,
      this.props.currentNoteText
      );
  };


  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.props.modalClose}
      />,
      <FlatButton
        label="Save"
        primary={true}
        disabled={false}
        onTouchTap={this.handleSave.bind(this)}
      />,
    ];

    return (
      <div>
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
                  <MenuItem primaryText="Refresh" onTouchTap={() => console.log('refreshing') } />
                  <MenuItem primaryText="Sign out" onTouchTap={() => console.log('signing out') } />
                </IconMenu>
              }
        />
        <Dialog
          title="Save Your Spot!"
          actions={actions}
          modal={true}
          open={this.props.modalState}
        >
          <TextField
            hintText=""
            floatingLabelText="Make a note for yourself!"
            fullWidth={true}
            onChange={this.props.grabNoteText.bind(this)}
          />
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    currentLocation: {
      lat: state.home.lat,
      lng: state.home.lng,
    },
    modalState: state.modalState.open,
    currentNoteText: state.home.currentNoteText,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {

    grabNoteText: (e) => {
      dispatch(actions.currentNoteText(e.currentTarget.value));
    },

    modalOpen: () => {
      dispatch(actions.modalSetState(true));
    },

    modalClose: () => {
      dispatch(actions.modalSetState(false));
    },

    saveWithinModal: (user, place, currentNoteText) => {
      dispatch(actions.modalSetState(false));
      addPlace(user, place, currentNoteText);
    },

  };
};

Nav.propTypes = {
  user: PropTypes.object,
  currentLocation: PropTypes.object,
  grabNoteText: PropTypes.func.isRequired,
  modalState: PropTypes.bool,
  modalOpen: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  saveWithinModal: PropTypes.func.isRequired,
  currentNoteText: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Nav);
