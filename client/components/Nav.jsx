import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';

const Nav = () => (
  <AppBar className="appBar"
    title="Ubicacion"
    style={{ color: 'white' }}
    iconElementLeft={<i className="fa fa-car fa-2x" aria-hidden="true"></i>}

    />

);

export default Nav;
